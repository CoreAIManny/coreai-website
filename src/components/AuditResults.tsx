"use client";

import { useEffect, useState } from "react";
import Link from "next/link";

interface AuditResultsProps {
  formData: any;
  score: number;
  scoreBand: string;
  onRestart: () => void;
}

export default function AuditResults({ formData, score, scoreBand, onRestart }: AuditResultsProps) {
  const [animatedScore, setAnimatedScore] = useState(0);
  const [showBreakdown, setShowBreakdown] = useState(false);

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
    // Extract missed count
    let missedPerWeek = 0;
    if (formData.missedResponses === "1-5") missedPerWeek = 3;
    else if (formData.missedResponses === "6-15") missedPerWeek = 10;
    else if (formData.missedResponses === "16-30") missedPerWeek = 23;
    else if (formData.missedResponses === "Over 30") missedPerWeek = 40;

    if (missedPerWeek === 0) return 0;

    // Industry-specific benchmarks
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
            Here's what we found, {formData.name.split(' ')[0]}
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
              Based on your {formData.industry} industry benchmarks and the leads you're currently missing. 
              This is money walking away every single year.
            </p>
          </div>
        )}

        {/* CTA Section */}
        {showBreakdown && (
          <div className="rounded-3xl border border-accent/30 bg-gradient-to-br from-accent/5 to-white p-8 shadow-lg text-center fade-in">
            <h3 className="text-2xl font-bold text-primary mb-4">
              Want Exact £ Figures on Every Finding?
            </h3>
            <p className="text-muted mb-6 max-w-2xl mx-auto">
              This free audit shows you <em>where</em> your opportunities are. 
              The Revenue Recovery Audit shows you <em>exactly how much</em> each opportunity is worth — 
              with ACCA-grade P&L analysis and a professional report in 48 hours.
            </p>
            <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
              <Link
                href="/book-demo"
                className="rounded-full bg-accent px-8 py-3.5 font-semibold text-white shadow-lg shadow-accent/25 transition hover:bg-accent-hover hover:shadow-xl"
              >
                Book Your Free 30-Min Audit Call →
              </Link>
              <Link
                href="/revenue-recovery"
                className="rounded-full border border-primary bg-primary px-8 py-3.5 font-semibold text-white shadow-lg transition hover:bg-primary/90"
              >
                Full Revenue Recovery Audit — £297 →
              </Link>
            </div>
          </div>
        )}

        {/* Restart */}
        <div className="mt-8 text-center">
          <button
            onClick={onRestart}
            className="text-sm text-muted hover:text-accent transition"
          >
            ← Retake the assessment
          </button>
        </div>

        {/* Footer Note */}
        <div className="mt-12 text-center text-sm text-muted max-w-2xl mx-auto">
          <p className="mb-4">
            <strong>What's Next?</strong>
          </p>
          <p>
            We've sent your results to <strong>{formData.email}</strong>. Check your inbox for a detailed breakdown 
            and 3 quick wins you can implement this week — no AI required.
          </p>
        </div>
      </div>
    </section>
  );
}
