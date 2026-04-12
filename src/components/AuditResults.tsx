"use client";

import { useEffect, useState, useCallback } from "react";
import Link from "next/link";
import AuditReport from "./AuditReport";

interface AuditResultsProps {
  formData: any;
  score: number;
  scoreBand: string;
  onRestart: () => void;
}

interface AuditAnalysis {
  analysis: {
    whatYourScoreMeans: string;
    topOpportunities: string;
    thirtyDayPlan: string;
  };
  opportunities: {
    name: string;
    description: string;
    annualSaving: string;
    implementationTime: string;
    priority: "critical" | "high" | "medium";
  }[];
  totalSavings: { low: number; high: number };
}

export default function AuditResults({ formData, score, scoreBand, onRestart }: AuditResultsProps) {
  const [animatedScore, setAnimatedScore] = useState(0);
  const [showBreakdown, setShowBreakdown] = useState(false);
  const [aiReport, setAiReport] = useState<AuditAnalysis | null>(null);
  const [reportLoading, setReportLoading] = useState(false);
  const [reportError, setReportError] = useState(false);

  // Animate score counter
  useEffect(() => {
    const duration = 2000; // 2 seconds
    const steps = 60;
    const increment = score / steps;
    let current = 0;

    const timer = setInterval(() => {
      current += increment;
      if (current >= score) {
        setAnimatedScore(score);
        clearInterval(timer);
        setTimeout(() => setShowBreakdown(true), 300);
      } else {
        setAnimatedScore(Math.floor(current));
      }
    }, duration / steps);

    return () => clearInterval(timer);
  }, [score]);

  // Fetch AI report once breakdown is shown
  const fetchReport = useCallback(async () => {
    if (reportLoading || aiReport) return;
    setReportLoading(true);
    setReportError(false);
    try {
      const res = await fetch("/api/audit", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ formData, score, scoreBand }),
      });
      if (!res.ok) throw new Error("API error");
      const data: AuditAnalysis = await res.json();
      setAiReport(data);
    } catch {
      setReportError(true);
    } finally {
      setReportLoading(false);
    }
  }, [formData, score, scoreBand, reportLoading, aiReport]);

  useEffect(() => {
    if (showBreakdown) {
      fetchReport();
    }
  }, [showBreakdown, fetchReport]);

  // Calculate dimension scores
  const getMissedRateScore = () => {
    const map: Record<string, number> = {
      "None": 100,
      "1-5": 75,
      "6-15": 50,
      "16-30": 25,
      "Over 30": 10
    };
    return map[formData.missedResponses] || 0;
  };

  const getFollowUpScore = () => {
    const map: Record<string, number> = {
      "Under 5 minutes": 100,
      "5-60 minutes": 75,
      "1-4 hours": 40,
      "4+ hours": 15,
      "We don't track this": 5
    };
    return map[formData.followUpTime] || 0;
  };

  const getAdminScore = () => {
    const map: Record<string, number> = {
      "Under 2 hours": 90,
      "2-5 hours": 70,
      "5-10 hours": 50,
      "10-20 hours": 30,
      "Over 20 hours": 10
    };
    return map[formData.adminHours] || 0;
  };

  // Calculate cost of inaction
  const calculateCostOfInaction = () => {
    let missedPerWeek = 0;
    if (formData.missedResponses === "1-5") missedPerWeek = 3;
    else if (formData.missedResponses === "6-15") missedPerWeek = 10;
    else if (formData.missedResponses === "16-30") missedPerWeek = 23;
    else if (formData.missedResponses === "Over 30") missedPerWeek = 40;

    if (missedPerWeek === 0) return 0;

    const industryBenchmarks: Record<string, { avgJob: number; conversionRate: number }> = {
      "Auto Detailing": { avgJob: 150, conversionRate: 0.15 },
      "Professional Services": { avgJob: 500, conversionRate: 0.10 },
      "Care Services": { avgJob: 2000, conversionRate: 0.08 },
      "Trade Services": { avgJob: 300, conversionRate: 0.12 },
      "Events & Entertainment": { avgJob: 800, conversionRate: 0.10 },
      "SEN Consulting": { avgJob: 500, conversionRate: 0.10 },
      "Retail": { avgJob: 350, conversionRate: 0.10 },
      "Hospitality": { avgJob: 350, conversionRate: 0.10 },
      "Property": { avgJob: 500, conversionRate: 0.10 },
      "Other": { avgJob: 350, conversionRate: 0.10 }
    };

    const benchmark = industryBenchmarks[formData.industry] || industryBenchmarks["Other"];
    const annualLoss = missedPerWeek * 52 * benchmark.conversionRate * benchmark.avgJob;

    return Math.round(annualLoss);
  };

  // LinkedIn share
  const getLinkedInShareUrl = () => {
    const text = `Just took the AI Readiness Audit for my ${formData.industry} business and scored ${score}/100.\n\nThe results were eye-opening — found £${(aiReport?.totalSavings.low ?? 0).toLocaleString()}+ in potential annual savings from automation.\n\nTake yours free: https://coreaisolutions.co.uk/audit`;
    return `https://www.linkedin.com/sharing/share-offsite/?url=${encodeURIComponent("https://coreaisolutions.co.uk/audit")}&summary=${encodeURIComponent(text)}`;
  };

  // Score band styling
  const getScoreColor = () => {
    if (score <= 40) return "text-red-600";
    if (score <= 60) return "text-orange-600";
    if (score <= 80) return "text-blue-600";
    return "text-teal-600";
  };

  const getScoreBgColor = () => {
    if (score <= 40) return "bg-red-50 border-red-200";
    if (score <= 60) return "bg-orange-50 border-orange-200";
    if (score <= 80) return "bg-blue-50 border-blue-200";
    return "bg-teal-50 border-teal-200";
  };

  const getBarColor = (value: number) => {
    if (value <= 40) return "bg-red-500";
    if (value <= 60) return "bg-orange-500";
    if (value <= 80) return "bg-blue-500";
    return "bg-teal-500";
  };

  const leadCaptureScore = getMissedRateScore();
  const responseSpeedScore = getFollowUpScore();
  const operationalScore = getAdminScore();
  const costOfInaction = calculateCostOfInaction();

  return (
    <section className="relative min-h-screen bg-white pt-32 pb-16">
      {/* Background gradient */}
      <div className="pointer-events-none absolute inset-0">
        <div className="absolute left-1/2 top-1/4 h-[500px] w-[500px] -translate-x-1/2 rounded-full bg-accent/5 blur-[120px]" />
      </div>

      <div className="relative mx-auto max-w-4xl px-4">
        {/* Header */}
        <div className="text-center mb-12">
          <h1 className="text-4xl font-bold text-primary sm:text-5xl">
            Your AI Readiness Score
          </h1>
          <p className="mt-4 text-lg text-muted">
            Here&apos;s what we found, {formData.name.split(' ')[0]}
          </p>
        </div>

        {/* Big Score Display */}
        <div className={`rounded-3xl border-2 p-12 text-center shadow-xl mb-8 ${getScoreBgColor()}`}>
          <div className={`text-8xl font-bold mb-4 ${getScoreColor()}`}>
            {animatedScore}
          </div>
          <div className="text-2xl font-semibold text-primary mb-2">
            {scoreBand}
          </div>
          <p className="text-muted max-w-lg mx-auto">
            {score <= 40 && "Your business is losing significant revenue right now. Immediate action needed."}
            {score > 40 && score <= 60 && "There are clear opportunities to capture more revenue with quick fixes."}
            {score > 60 && score <= 80 && "You're on the right track but leaving money on the table."}
            {score > 80 && "Strong foundation — now it's about fine-tuning for maximum efficiency."}
          </p>
        </div>

        {/* Dimension Breakdown */}
        {showBreakdown && (
          <div className="space-y-6 mb-8 fade-in">
            <h2 className="text-2xl font-bold text-primary text-center mb-6">
              Where You Stand
            </h2>

            {/* Lead Capture */}
            <div>
              <div className="flex items-center justify-between mb-2">
                <span className="font-semibold text-primary">Lead Capture</span>
                <span className="text-muted">{leadCaptureScore}/100</span>
              </div>
              <div className="h-4 rounded-full bg-surface overflow-hidden">
                <div
                  className={`h-full ${getBarColor(leadCaptureScore)} transition-all duration-1000 ease-out`}
                  style={{ width: `${leadCaptureScore}%` }}
                />
              </div>
              <p className="text-sm text-muted mt-1">
                {leadCaptureScore === 100 && "Excellent — capturing every lead"}
                {leadCaptureScore >= 75 && leadCaptureScore < 100 && "Good — minimal leaks"}
                {leadCaptureScore >= 50 && leadCaptureScore < 75 && "Moderate — losing some revenue"}
                {leadCaptureScore >= 25 && leadCaptureScore < 50 && "Concerning — significant leads lost"}
                {leadCaptureScore < 25 && "Critical — major revenue bleeding"}
              </p>
            </div>

            {/* Response Speed */}
            <div>
              <div className="flex items-center justify-between mb-2">
                <span className="font-semibold text-primary">Response Speed</span>
                <span className="text-muted">{responseSpeedScore}/100</span>
              </div>
              <div className="h-4 rounded-full bg-surface overflow-hidden">
                <div
                  className={`h-full ${getBarColor(responseSpeedScore)} transition-all duration-1000 ease-out delay-200`}
                  style={{ width: `${responseSpeedScore}%` }}
                />
              </div>
              <p className="text-sm text-muted mt-1">
                {responseSpeedScore === 100 && "Lightning fast — leads are hot"}
                {responseSpeedScore >= 75 && responseSpeedScore < 100 && "Good — responding within the hour"}
                {responseSpeedScore >= 40 && responseSpeedScore < 75 && "Slow — leads cooling off"}
                {responseSpeedScore >= 15 && responseSpeedScore < 40 && "Very slow — losing conversions"}
                {responseSpeedScore < 15 && "Not tracking — flying blind"}
              </p>
            </div>

            {/* Operational Efficiency */}
            <div>
              <div className="flex items-center justify-between mb-2">
                <span className="font-semibold text-primary">Operational Efficiency</span>
                <span className="text-muted">{operationalScore}/100</span>
              </div>
              <div className="h-4 rounded-full bg-surface overflow-hidden">
                <div
                  className={`h-full ${getBarColor(operationalScore)} transition-all duration-1000 ease-out delay-400`}
                  style={{ width: `${operationalScore}%` }}
                />
              </div>
              <p className="text-sm text-muted mt-1">
                {operationalScore >= 90 && "Highly efficient — minimal admin burden"}
                {operationalScore >= 70 && operationalScore < 90 && "Reasonable — some time waste"}
                {operationalScore >= 50 && operationalScore < 70 && "Inefficient — significant time loss"}
                {operationalScore >= 30 && operationalScore < 50 && "Very inefficient — admin overload"}
                {operationalScore < 30 && "Critical — drowning in admin"}
              </p>
            </div>
          </div>
        )}

        {/* Cost of Inaction */}
        {showBreakdown && costOfInaction > 0 && (
          <div className="rounded-3xl border-2 border-red-200 bg-red-50 p-8 mb-8 text-center fade-in">
            <h3 className="text-xl font-bold text-red-600 mb-2">
              Estimated Annual Revenue at Risk
            </h3>
            <div className="text-5xl font-bold text-red-600 mb-4">
              £{costOfInaction.toLocaleString()}
            </div>
            <p className="text-muted max-w-lg mx-auto">
              Based on your {formData.industry} industry benchmarks and the leads you&apos;re currently missing.
              This is money walking away every single year.
            </p>
          </div>
        )}

        {/* AI-Powered Personalised Report */}
        {showBreakdown && (
          <div className="mb-8 fade-in">
            <h2 className="text-2xl font-bold text-primary text-center mb-6">
              Your Personalised AI Readiness Report
            </h2>

            {reportLoading && (
              <div className="space-y-4">
                {[1, 2, 3].map((i) => (
                  <div key={i} className="rounded-2xl border border-gray-200 bg-white p-6 shadow-sm animate-pulse">
                    <div className="h-4 bg-gray-200 rounded w-1/3 mb-3" />
                    <div className="h-3 bg-gray-100 rounded w-full mb-2" />
                    <div className="h-3 bg-gray-100 rounded w-4/5" />
                  </div>
                ))}
                <p className="text-center text-sm text-muted">
                  Analysing your business data with AI...
                </p>
              </div>
            )}

            {reportError && (
              <div className="rounded-2xl border border-orange-200 bg-orange-50 p-6 text-center">
                <p className="text-muted mb-3">
                  Couldn&apos;t generate your personalised report right now.
                </p>
                <button
                  onClick={() => { setReportError(false); fetchReport(); }}
                  className="rounded-full bg-accent px-6 py-2 text-sm font-semibold text-white transition hover:bg-accent-hover"
                >
                  Try Again
                </button>
              </div>
            )}

            {aiReport && (
              <AuditReport
                formData={formData}
                score={score}
                scoreBand={scoreBand}
                analysis={aiReport.analysis}
                opportunities={aiReport.opportunities}
                totalSavings={aiReport.totalSavings}
              />
            )}
          </div>
        )}

        {/* LinkedIn Share */}
        {showBreakdown && aiReport && (
          <div className="mb-8 text-center fade-in">
            <a
              href={getLinkedInShareUrl()}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 rounded-full border border-[#0A66C2] bg-[#0A66C2] px-6 py-3 font-semibold text-white transition hover:bg-[#004182]"
            >
              <svg className="h-5 w-5" fill="currentColor" viewBox="0 0 24 24">
                <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433a2.062 2.062 0 01-2.063-2.065 2.064 2.064 0 112.063 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z" />
              </svg>
              Share Your Score on LinkedIn
            </a>
            <p className="text-xs text-muted mt-2">
              Help other business owners discover where they stand
            </p>
          </div>
        )}

        {/* CTA Section — aligned with GRND SLAM C.O.R.E. offer */}
        {showBreakdown && (
          <div className="rounded-3xl border border-accent/30 bg-gradient-to-br from-accent/5 to-white p-8 shadow-lg text-center fade-in">
            <h3 className="text-2xl font-bold text-primary mb-4">
              This Is the Teaser. The Full Audit Goes Deeper.
            </h3>
            <p className="text-muted mb-6 max-w-2xl mx-auto">
              The <strong>C.O.R.E. Revenue Recovery Audit</strong> is a breach-by-breach analysis with ACCA-grade P&L figures
              attached to every leak we find — walked through with you on a call.
              It&apos;s normally <strong>£497</strong>, but we credit 100% toward your first month if you come on board.
            </p>
            <div className="flex flex-col sm:flex-row items-center justify-center gap-4 mb-6">
              <Link
                href="/book-demo"
                className="rounded-full bg-accent px-8 py-3.5 font-semibold text-white shadow-lg shadow-accent/25 transition hover:bg-accent-hover hover:shadow-xl"
              >
                Book Your Free 15-Min Quick Scan Call
              </Link>
            </div>
            <div className="flex flex-col sm:flex-row items-center justify-center gap-6 text-sm text-muted">
              <span className="flex items-center gap-1.5">
                <svg className="h-4 w-4 text-teal-500" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}><path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" /></svg>
                First automation live in 14 days
              </span>
              <span className="flex items-center gap-1.5">
                <svg className="h-4 w-4 text-teal-500" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}><path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" /></svg>
                30-day money-back guarantee
              </span>
              <span className="flex items-center gap-1.5">
                <svg className="h-4 w-4 text-teal-500" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}><path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" /></svg>
                3X ROI in 90 days or month 3 free
              </span>
            </div>
          </div>
        )}

        {/* Restart */}
        <div className="mt-8 text-center">
          <button
            onClick={onRestart}
            className="text-sm text-muted hover:text-accent transition"
          >
            Retake the assessment
          </button>
        </div>

        {/* Footer Note */}
        <div className="mt-12 text-center text-sm text-muted max-w-2xl mx-auto">
          <p className="mb-4">
            <strong>What&apos;s Next?</strong>
          </p>
          <p>
            We&apos;ve sent a copy to <strong>{formData.email}</strong>.
            This is your free teaser — the full C.O.R.E. Revenue Recovery Audit goes line-by-line through every leak
            with exact £ figures, and we walk you through it on a call.
          </p>
        </div>
      </div>
    </section>
  );
}
