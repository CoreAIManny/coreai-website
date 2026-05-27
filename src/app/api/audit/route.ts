import { NextRequest, NextResponse } from "next/server";
import Anthropic from "@anthropic-ai/sdk";
import {
  getRelevantOpportunities,
  calculateTotalSavings,
} from "@/lib/audit-engine";

const anthropic = new Anthropic();

// Simple rate limiter: max 20 requests per IP per hour
const rateLimitMap = new Map<string, { count: number; resetAt: number }>();
const RATE_LIMIT = 20;
const RATE_WINDOW_MS = 60 * 60 * 1000;

function isRateLimited(ip: string): boolean {
  const now = Date.now();
  const entry = rateLimitMap.get(ip);
  if (!entry || now > entry.resetAt) {
    rateLimitMap.set(ip, { count: 1, resetAt: now + RATE_WINDOW_MS });
    return false;
  }
  entry.count++;
  return entry.count > RATE_LIMIT;
}

export async function POST(request: NextRequest) {
  const ip =
    request.headers.get("x-forwarded-for")?.split(",")[0]?.trim() ??
    "unknown";

  if (isRateLimited(ip)) {
    return NextResponse.json(
      { error: "Too many requests. Please try again later." },
      { status: 429 }
    );
  }

  try {
    const body = await request.json();
    const { formData, score, scoreBand } = body;

    if (!formData || score === undefined) {
      return NextResponse.json(
        { error: "Missing required fields" },
        { status: 400 }
      );
    }

    // Get relevant automation opportunities from the engine
    const opportunities = getRelevantOpportunities(formData, score);
    const totalSavings = calculateTotalSavings(opportunities);

    // Build the prompt — aligned with GRND SLAM C.O.R.E. Revenue Recovery System
    // This is the FREE teaser (1-pager) — real findings + industry-standard costings
    // The full £497 audit is multi-page, walked through on a call
    const systemPrompt = `You are Manny, senior AI automation consultant at Core AI Solutions. Enterprise finance background (Visa Europe, Cabinet Office), ex-Visa Europe (7 years financial statements), ex-UK Cabinet Office. You find hidden money in UK SMBs.

Your job: generate a 1-page teaser audit that delivers REAL value using industry-standard costings. This is NOT a sales pitch — it's a genuine financial snapshot that makes the business owner think "if the free version shows me this, what does the full £497 audit look like?"

Use UK English. Be direct. Show the maths. Reference their specific data, not generic claims.

Industry benchmarks to use:
- Care Services: avg enquiry LTV £9,000-£72,000, 25% miss rate typical, staff cost £12.71/hr (NLW Apr 2026), CQC compliance failure = £80K+ risk
- Trade Services: avg job £300-£500, 30-40% calls missed on-site, 5-min response window before 80% drop-off
- Auto Detailing: avg job £150-£300, 30% calls missed during details, rebooking rate drives 60% of revenue
- Professional Services: avg client LTV £5,000-£25,000, 3-4hr avg response time, 40% of proposals never followed up
- Recruitment: avg placement fee £4,000-£15,000, best candidates gone within 2hrs, 25% of submissions never responded to
- Property: avg tenancy LTV £21,600, 30% viewing enquiries missed, void periods cost £1,200-£2,400/month
- Events: avg booking £800-£5,000, 60% of enquiries need response within 1hr, 20% lost to slow response
- Retail: avg customer LTV £350-£2,000, 15-25% cart abandonment recoverable, repeat purchase drives 60% revenue
- Hospitality: avg booking £100-£500, 70% of direct bookings happen outside 9-5, review response impacts ranking
- SEN Consulting: avg client LTV £5,000-£15,000, parents research 3-5 providers, first responder wins 60% of cases`;

    const userPrompt = `Generate a personalised 1-page teaser audit for this business. Use their REAL data combined with industry-standard costings to calculate specific £ figures.

BUSINESS DATA:
- Business: ${formData.businessName}
- Owner: ${formData.name}
- Industry: ${formData.industry}
- Annual Revenue: ${formData.annualRevenue}
- Weekly Enquiries: ${formData.weeklyInquiries}
- Missed/Late Responses: ${formData.missedResponses} per week
- Follow-up Time: ${formData.followUpTime}
- Admin Hours/Week: ${formData.adminHours}
- Biggest Challenge: ${formData.biggestChallenge || "Not specified"}
- AI Readiness Score: ${score}/100 (${scoreBand})

TOP 3 AUTOMATION OPPORTUNITIES (from our engine):
${opportunities.map((o, i) => `${i + 1}. ${o.name} — ${o.annualSaving}/year: ${o.description}`).join("\n")}

Total estimated annual savings: £${totalSavings.low.toLocaleString()}–£${totalSavings.high.toLocaleString()}

Generate exactly 3 sections as JSON:
{
  "whatYourScoreMeans": "2-3 sentences with SPECIFIC £ calculations using their data. Example format: 'With ${formData.missedResponses} missed responses per week at an industry-average [job value/LTV] of £X, ${formData.businessName} is leaving approximately £Y on the table annually.' Show the maths. Reference their follow-up time and admin hours. End with what this means for their bottom line at their revenue level.",
  "topOpportunities": "2-3 sentences on the #1 quick win. Include the specific implementation (what it does, not just what it's called), the £ figure, and how fast it pays for itself. Be concrete — 'a missed-call text-back system that auto-responds in 30 seconds' not 'lead capture automation'.",
  "thirtyDayPlan": "3 steps. Step 1: something they can do TODAY with zero technology (e.g. 'Track every missed call for one week — just tally marks on a notepad'). Step 2: the quick-win automation from above. Step 3: 'Book a 15-minute call with us to walk through the full C.O.R.E. Revenue Recovery Audit — a breach-by-breach analysis with enterprise-grade P&L figures for every leak we find. The full audit is normally £497 but we credit 100% toward your first month if you come on board.'"
}

Return ONLY valid JSON. No markdown, no code fences.`;

    // Try Sonnet first, fall back to Haiku if rate-limited
    let message;
    try {
      message = await anthropic.messages.create({
        model: "claude-sonnet-4-20250514",
        max_tokens: 1200,
        messages: [{ role: "user", content: userPrompt }],
        system: systemPrompt,
      });
    } catch (modelError: unknown) {
      const errMsg = modelError instanceof Error ? modelError.message : String(modelError);
      if (errMsg.includes("429") || errMsg.includes("rate_limit") || errMsg.includes("overloaded")) {
        console.log("Sonnet rate-limited, falling back to Haiku");
        message = await anthropic.messages.create({
          model: "claude-haiku-4-5-20251001",
          max_tokens: 1200,
          messages: [{ role: "user", content: userPrompt }],
          system: systemPrompt,
        });
      } else {
        throw modelError;
      }
    }

    const textContent = message.content.find((c) => c.type === "text");
    if (!textContent || textContent.type !== "text") {
      throw new Error("No text response from Claude");
    }

    // Strip markdown code fences if present
    let jsonText = textContent.text.trim();
    if (jsonText.startsWith("```")) {
      jsonText = jsonText.replace(/^```(?:json)?\s*\n?/, "").replace(/\n?```\s*$/, "");
    }
    const analysis = JSON.parse(jsonText);

    return NextResponse.json({
      analysis,
      opportunities: opportunities.map((o) => ({
        name: o.name,
        description: o.description,
        annualSaving: o.annualSaving,
        implementationTime: o.implementationTime,
        priority: o.priority,
      })),
      totalSavings: {
        low: totalSavings.low,
        high: totalSavings.high,
      },
    });
  } catch (error) {
    console.error("Audit API error:", error instanceof Error ? error.message : error);
    return NextResponse.json(
      { error: "Failed to generate analysis. Please try again." },
      { status: 500 }
    );
  }
}
