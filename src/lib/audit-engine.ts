export interface AutomationOpportunity {
  name: string;
  description: string;
  annualSaving: string;
  savingLow: number;
  savingHigh: number;
  implementationTime: string;
  priority: "critical" | "high" | "medium";
}

interface FormData {
  businessName: string;
  name: string;
  email: string;
  industry: string;
  annualRevenue: string;
  weeklyInquiries: string;
  missedResponses: string;
  followUpTime: string;
  adminHours: string;
  biggestChallenge: string;
}

// Sector-specific automation opportunities
const INDUSTRY_OPPORTUNITIES: Record<string, AutomationOpportunity[]> = {
  "Care Services": [
    {
      name: "Missed Enquiry Text-Back",
      description: "Auto-respond to missed family/carer enquiries within 60 seconds via SMS + WhatsApp with availability and next steps.",
      annualSaving: "£25,000–£80,000",
      savingLow: 25000,
      savingHigh: 80000,
      implementationTime: "1 week",
      priority: "critical",
    },
    {
      name: "CQC Audit Prep Automation",
      description: "Auto-generate evidence packs, policy summaries, and compliance checklists from your existing records before inspections.",
      annualSaving: "£8,000–£15,000",
      savingLow: 8000,
      savingHigh: 15000,
      implementationTime: "2 weeks",
      priority: "high",
    },
    {
      name: "Staff Rota & Shift Management",
      description: "AI-powered shift scheduling that accounts for qualifications, preferences, and CQC staff-to-resident ratios.",
      annualSaving: "£10,000–£20,000",
      savingLow: 10000,
      savingHigh: 20000,
      implementationTime: "2 weeks",
      priority: "high",
    },
    {
      name: "Family Communication Hub",
      description: "Automated weekly updates to families with care notes, photos, and wellbeing summaries — reducing phone call volume by 60%.",
      annualSaving: "£5,000–£12,000",
      savingLow: 5000,
      savingHigh: 12000,
      implementationTime: "1 week",
      priority: "medium",
    },
  ],
  "Trade Services": [
    {
      name: "Missed Call Text-Back",
      description: "Instant SMS reply when you miss a call on site — captures the lead before they call the next tradesman.",
      annualSaving: "£15,000–£45,000",
      savingLow: 15000,
      savingHigh: 45000,
      implementationTime: "3 days",
      priority: "critical",
    },
    {
      name: "Automated Quote Follow-Up",
      description: "AI follows up on every quote at day 2, 5, and 10 with personalised messages. Converts 15–25% more quotes.",
      annualSaving: "£12,000–£35,000",
      savingLow: 12000,
      savingHigh: 35000,
      implementationTime: "1 week",
      priority: "critical",
    },
    {
      name: "Google Review Requests",
      description: "Auto-request reviews after job completion via SMS. More 5-star reviews = higher Google Maps ranking = more leads.",
      annualSaving: "£8,000–£20,000",
      savingLow: 8000,
      savingHigh: 20000,
      implementationTime: "3 days",
      priority: "high",
    },
    {
      name: "Job Scheduling & Dispatch",
      description: "AI-optimised daily job routing and scheduling, reducing drive time and fitting in more jobs per day.",
      annualSaving: "£5,000–£15,000",
      savingLow: 5000,
      savingHigh: 15000,
      implementationTime: "2 weeks",
      priority: "medium",
    },
  ],
  "Professional Services": [
    {
      name: "Client Onboarding Automation",
      description: "Auto-collect documents, send welcome packs, and set up recurring meetings — from enquiry to onboarded in 48 hours.",
      annualSaving: "£10,000–£25,000",
      savingLow: 10000,
      savingHigh: 25000,
      implementationTime: "1 week",
      priority: "critical",
    },
    {
      name: "Lead Response & Qualification",
      description: "AI chatbot qualifies enquiries 24/7, books discovery calls, and sends relevant case studies before the meeting.",
      annualSaving: "£15,000–£40,000",
      savingLow: 15000,
      savingHigh: 40000,
      implementationTime: "1 week",
      priority: "critical",
    },
    {
      name: "Proposal & Report Generation",
      description: "Auto-generate first-draft proposals, reports, and client summaries from meeting notes and templates.",
      annualSaving: "£8,000–£18,000",
      savingLow: 8000,
      savingHigh: 18000,
      implementationTime: "2 weeks",
      priority: "high",
    },
    {
      name: "Billing & Invoice Chasing",
      description: "Automated invoice generation and polite payment reminders at day 7, 14, 30 — reducing debtor days by 40%.",
      annualSaving: "£5,000–£15,000",
      savingLow: 5000,
      savingHigh: 15000,
      implementationTime: "1 week",
      priority: "medium",
    },
  ],
  "Auto Detailing": [
    {
      name: "Missed Call Text-Back",
      description: "Instant SMS when you miss a call — captures bookings while you're detailing.",
      annualSaving: "£10,000–£30,000",
      savingLow: 10000,
      savingHigh: 30000,
      implementationTime: "3 days",
      priority: "critical",
    },
    {
      name: "Automated Rebooking System",
      description: "AI texts past customers at optimal intervals (6–8 weeks) to rebook. Increases repeat rate by 30–50%.",
      annualSaving: "£8,000–£25,000",
      savingLow: 8000,
      savingHigh: 25000,
      implementationTime: "1 week",
      priority: "critical",
    },
    {
      name: "Before/After Portfolio Builder",
      description: "Auto-collect and post before/after photos to Google Business and social media after each job.",
      annualSaving: "£5,000–£12,000",
      savingLow: 5000,
      savingHigh: 12000,
      implementationTime: "1 week",
      priority: "high",
    },
    {
      name: "Online Booking & Deposits",
      description: "24/7 online booking with upfront deposits — reduces no-shows by 80% and fills your calendar while you sleep.",
      annualSaving: "£6,000–£15,000",
      savingLow: 6000,
      savingHigh: 15000,
      implementationTime: "1 week",
      priority: "high",
    },
  ],
  "Events & Entertainment": [
    {
      name: "Instant Enquiry Response",
      description: "AI responds to event enquiries within 60 seconds with availability, pricing, and booking link.",
      annualSaving: "£15,000–£50,000",
      savingLow: 15000,
      savingHigh: 50000,
      implementationTime: "1 week",
      priority: "critical",
    },
    {
      name: "Automated Event Coordination",
      description: "Timeline generation, vendor coordination emails, and day-of checklists created automatically from booking details.",
      annualSaving: "£8,000–£20,000",
      savingLow: 8000,
      savingHigh: 20000,
      implementationTime: "2 weeks",
      priority: "high",
    },
    {
      name: "Post-Event Follow-Up & Reviews",
      description: "Auto-send thank you messages, review requests, and referral incentives 48 hours after each event.",
      annualSaving: "£5,000–£15,000",
      savingLow: 5000,
      savingHigh: 15000,
      implementationTime: "3 days",
      priority: "high",
    },
    {
      name: "Social Proof Engine",
      description: "Auto-collect and post event highlights, testimonials, and photos across social channels.",
      annualSaving: "£4,000–£10,000",
      savingLow: 4000,
      savingHigh: 10000,
      implementationTime: "1 week",
      priority: "medium",
    },
  ],
  "SEN Consulting": [
    {
      name: "Parent Enquiry Automation",
      description: "24/7 AI response to parent enquiries with relevant service info, availability, and intake form.",
      annualSaving: "£10,000–£30,000",
      savingLow: 10000,
      savingHigh: 30000,
      implementationTime: "1 week",
      priority: "critical",
    },
    {
      name: "Report & Assessment Drafting",
      description: "AI-assisted first drafts of assessments and EHCP contributions from session notes and templates.",
      annualSaving: "£12,000–£25,000",
      savingLow: 12000,
      savingHigh: 25000,
      implementationTime: "2 weeks",
      priority: "critical",
    },
    {
      name: "Session Notes & Progress Tracking",
      description: "Voice-to-text session notes with auto-generated progress summaries for parents and referrers.",
      annualSaving: "£6,000–£12,000",
      savingLow: 6000,
      savingHigh: 12000,
      implementationTime: "1 week",
      priority: "high",
    },
    {
      name: "Referral Network Nurture",
      description: "Automated touchpoints with schools, GPs, and referral partners — keeping you top of mind.",
      annualSaving: "£5,000–£15,000",
      savingLow: 5000,
      savingHigh: 15000,
      implementationTime: "1 week",
      priority: "medium",
    },
  ],
  "Retail": [
    {
      name: "Abandoned Cart Recovery",
      description: "AI-powered SMS and email sequences recover 15–25% of abandoned online orders.",
      annualSaving: "£10,000–£40,000",
      savingLow: 10000,
      savingHigh: 40000,
      implementationTime: "1 week",
      priority: "critical",
    },
    {
      name: "Customer Reactivation",
      description: "Auto-identify and re-engage lapsed customers with personalised offers based on purchase history.",
      annualSaving: "£8,000–£25,000",
      savingLow: 8000,
      savingHigh: 25000,
      implementationTime: "1 week",
      priority: "high",
    },
    {
      name: "Inventory & Reorder Alerts",
      description: "AI monitors stock levels and auto-generates purchase orders before you run out.",
      annualSaving: "£5,000–£15,000",
      savingLow: 5000,
      savingHigh: 15000,
      implementationTime: "2 weeks",
      priority: "high",
    },
    {
      name: "Review & Feedback Collection",
      description: "Post-purchase review requests with smart timing — builds social proof on autopilot.",
      annualSaving: "£4,000–£10,000",
      savingLow: 4000,
      savingHigh: 10000,
      implementationTime: "3 days",
      priority: "medium",
    },
  ],
  "Hospitality": [
    {
      name: "Booking & Enquiry Automation",
      description: "AI handles reservation enquiries, group bookings, and special requests 24/7 via web chat and WhatsApp.",
      annualSaving: "£12,000–£35,000",
      savingLow: 12000,
      savingHigh: 35000,
      implementationTime: "1 week",
      priority: "critical",
    },
    {
      name: "Guest Experience Automation",
      description: "Pre-arrival info packs, check-in reminders, and post-stay review requests — all automated.",
      annualSaving: "£6,000–£15,000",
      savingLow: 6000,
      savingHigh: 15000,
      implementationTime: "1 week",
      priority: "high",
    },
    {
      name: "Staff Scheduling",
      description: "AI-optimised rota planning based on bookings, seasonality, and staff availability.",
      annualSaving: "£5,000–£12,000",
      savingLow: 5000,
      savingHigh: 12000,
      implementationTime: "2 weeks",
      priority: "high",
    },
    {
      name: "Repeat Visit Nurture",
      description: "Automated birthday offers, seasonal promotions, and loyalty rewards to drive repeat visits.",
      annualSaving: "£4,000–£12,000",
      savingLow: 4000,
      savingHigh: 12000,
      implementationTime: "1 week",
      priority: "medium",
    },
  ],
  "Property": [
    {
      name: "Lead Response & Qualification",
      description: "AI qualifies property enquiries instantly — budget, timeline, requirements — and books viewings automatically.",
      annualSaving: "£15,000–£50,000",
      savingLow: 15000,
      savingHigh: 50000,
      implementationTime: "1 week",
      priority: "critical",
    },
    {
      name: "Viewing Follow-Up Sequences",
      description: "Automated post-viewing follow-ups with property comparisons, mortgage info, and next-step prompts.",
      annualSaving: "£10,000–£30,000",
      savingLow: 10000,
      savingHigh: 30000,
      implementationTime: "1 week",
      priority: "critical",
    },
    {
      name: "Tenant/Buyer Onboarding",
      description: "Auto-collect references, documents, and deposits — reducing time-to-completion by 50%.",
      annualSaving: "£6,000–£15,000",
      savingLow: 6000,
      savingHigh: 15000,
      implementationTime: "2 weeks",
      priority: "high",
    },
    {
      name: "Maintenance Request Triage",
      description: "AI triages tenant maintenance requests, dispatches contractors, and keeps tenants updated automatically.",
      annualSaving: "£5,000–£12,000",
      savingLow: 5000,
      savingHigh: 12000,
      implementationTime: "1 week",
      priority: "medium",
    },
  ],
};

// Default opportunities for "Other" or unrecognised industries
const DEFAULT_OPPORTUNITIES: AutomationOpportunity[] = [
  {
    name: "Lead Response Automation",
    description: "AI responds to every enquiry within 60 seconds — before they call your competitor.",
    annualSaving: "£12,000–£40,000",
    savingLow: 12000,
    savingHigh: 40000,
    implementationTime: "1 week",
    priority: "critical",
  },
  {
    name: "Follow-Up Sequences",
    description: "Automated follow-up at day 2, 5, and 10 for every quote and proposal. Converts 15–25% more.",
    annualSaving: "£10,000–£30,000",
    savingLow: 10000,
    savingHigh: 30000,
    implementationTime: "1 week",
    priority: "critical",
  },
  {
    name: "Admin & Scheduling Automation",
    description: "AI handles appointment booking, reminders, invoicing, and data entry — giving you 10+ hours back per week.",
    annualSaving: "£8,000–£20,000",
    savingLow: 8000,
    savingHigh: 20000,
    implementationTime: "2 weeks",
    priority: "high",
  },
  {
    name: "Review & Reputation Management",
    description: "Auto-request reviews after every job/sale. More reviews = higher rankings = more inbound leads.",
    annualSaving: "£5,000–£15,000",
    savingLow: 5000,
    savingHigh: 15000,
    implementationTime: "3 days",
    priority: "medium",
  },
];

export function getOpportunitiesForIndustry(industry: string): AutomationOpportunity[] {
  return INDUSTRY_OPPORTUNITIES[industry] || DEFAULT_OPPORTUNITIES;
}

export function getRelevantOpportunities(formData: FormData, score: number): AutomationOpportunity[] {
  const opportunities = getOpportunitiesForIndustry(formData.industry);

  // Filter and prioritise based on form answers
  const scored = opportunities.map((opp) => {
    let relevance = 0;

    // Critical priority always ranks highest
    if (opp.priority === "critical") relevance += 30;
    else if (opp.priority === "high") relevance += 20;
    else relevance += 10;

    // Missed responses boost lead capture opportunities
    if (
      formData.missedResponses !== "None" &&
      (opp.name.toLowerCase().includes("missed") ||
        opp.name.toLowerCase().includes("lead") ||
        opp.name.toLowerCase().includes("enquiry") ||
        opp.name.toLowerCase().includes("response"))
    ) {
      relevance += 20;
    }

    // Slow follow-up boosts follow-up opportunities
    if (
      (formData.followUpTime === "1-4 hours" ||
        formData.followUpTime === "4+ hours" ||
        formData.followUpTime === "We don't track this") &&
      (opp.name.toLowerCase().includes("follow") ||
        opp.name.toLowerCase().includes("response"))
    ) {
      relevance += 15;
    }

    // High admin hours boosts operational opportunities
    if (
      (formData.adminHours === "10-20 hours" ||
        formData.adminHours === "Over 20 hours") &&
      (opp.name.toLowerCase().includes("admin") ||
        opp.name.toLowerCase().includes("scheduling") ||
        opp.name.toLowerCase().includes("automation") ||
        opp.name.toLowerCase().includes("onboarding"))
    ) {
      relevance += 15;
    }

    return { ...opp, relevance };
  });

  // Sort by relevance and return top 3
  scored.sort((a, b) => b.relevance - a.relevance);
  return scored.slice(0, 3);
}

export function calculateTotalSavings(opportunities: AutomationOpportunity[]): {
  low: number;
  high: number;
} {
  return opportunities.reduce(
    (acc, opp) => ({
      low: acc.low + opp.savingLow,
      high: acc.high + opp.savingHigh,
    }),
    { low: 0, high: 0 }
  );
}
