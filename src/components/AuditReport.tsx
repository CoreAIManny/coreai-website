"use client";

interface Opportunity {
  name: string;
  description: string;
  annualSaving: string;
  implementationTime: string;
  priority: "critical" | "high" | "medium";
}

interface AuditReportProps {
  formData: {
    businessName: string;
    name: string;
    industry: string;
    annualRevenue: string;
    [key: string]: string;
  };
  score: number;
  scoreBand: string;
  analysis: {
    whatYourScoreMeans: string;
    topOpportunities: string;
    thirtyDayPlan: string;
  };
  opportunities: Opportunity[];
  totalSavings: { low: number; high: number };
}

export default function AuditReport({
  formData,
  score,
  analysis,
  opportunities,
  totalSavings,
}: AuditReportProps) {
  const getPriorityColor = (priority: string) => {
    if (priority === "critical") return "bg-red-100 text-red-700 border-red-200";
    if (priority === "high") return "bg-orange-100 text-orange-700 border-orange-200";
    return "bg-blue-100 text-blue-700 border-blue-200";
  };

  const getPriorityLabel = (priority: string) => {
    if (priority === "critical") return "Quick Win";
    if (priority === "high") return "High Impact";
    return "Optimisation";
  };

  return (
    <div className="space-y-8 fade-in">
      {/* What Your Score Means */}
      <div className="rounded-2xl border border-gray-200 bg-white p-6 shadow-sm">
        <h3 className="text-lg font-bold text-primary mb-3">
          What This Means for {formData.businessName}
        </h3>
        <p className="text-muted leading-relaxed">{analysis.whatYourScoreMeans}</p>
      </div>

      {/* Top 3 Automation Opportunities */}
      <div>
        <h3 className="text-lg font-bold text-primary mb-4">
          Your Top 3 Automation Opportunities
        </h3>
        <div className="space-y-4">
          {opportunities.map((opp, i) => (
            <div
              key={i}
              className="rounded-2xl border border-gray-200 bg-white p-6 shadow-sm"
            >
              <div className="flex items-start justify-between gap-4 mb-3">
                <div>
                  <div className="flex items-center gap-2 mb-1">
                    <span className="text-2xl font-bold text-accent">
                      #{i + 1}
                    </span>
                    <h4 className="text-base font-semibold text-primary">
                      {opp.name}
                    </h4>
                  </div>
                  <span
                    className={`inline-block rounded-full border px-2.5 py-0.5 text-xs font-medium ${getPriorityColor(opp.priority)}`}
                  >
                    {getPriorityLabel(opp.priority)}
                  </span>
                </div>
                <div className="text-right shrink-0">
                  <div className="text-lg font-bold text-teal-600">
                    {opp.annualSaving}
                  </div>
                  <div className="text-xs text-muted">per year</div>
                </div>
              </div>
              <p className="text-sm text-muted leading-relaxed">
                {opp.description}
              </p>
              <div className="mt-3 text-xs text-muted">
                Implementation: {opp.implementationTime}
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Total Savings Banner */}
      <div className="rounded-2xl border-2 border-teal-200 bg-teal-50 p-6 text-center">
        <p className="text-sm font-medium text-teal-600 mb-1">
          Total Estimated Annual Savings
        </p>
        <div className="text-3xl font-bold text-teal-700">
          £{totalSavings.low.toLocaleString()} – £{totalSavings.high.toLocaleString()}
        </div>
        <p className="text-sm text-teal-600 mt-1">
          across your top 3 opportunities
        </p>
      </div>

      {/* Biggest Quick Win */}
      <div className="rounded-2xl border border-accent/20 bg-accent/5 p-6">
        <h3 className="text-lg font-bold text-primary mb-3">
          Your Biggest Quick Win
        </h3>
        <p className="text-muted leading-relaxed">{analysis.topOpportunities}</p>
      </div>

      {/* 30-Day Action Plan */}
      <div className="rounded-2xl border border-gray-200 bg-white p-6 shadow-sm">
        <h3 className="text-lg font-bold text-primary mb-3">
          Your 30-Day Action Plan
        </h3>
        <p className="text-muted leading-relaxed whitespace-pre-line">
          {analysis.thirtyDayPlan}
        </p>
      </div>
    </div>
  );
}
