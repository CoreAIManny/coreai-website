"use client";

import { useState } from "react";

// TODO: Replace with actual Google Apps Script URL after deployment
const GOOGLE_APPS_SCRIPT_URL = "YOUR_APPS_SCRIPT_URL_HERE";

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

interface AuditFormProps {
  onComplete: (data: FormData, score: number, scoreBand: string) => void;
}

const industryOptions = [
  "Auto Detailing",
  "Professional Services",
  "SEN Consulting",
  "Events & Entertainment",
  "Care Services",
  "Trade Services",
  "Retail",
  "Hospitality",
  "Property",
  "Other"
];

const revenueOptions = [
  "Under £100K",
  "£100-250K",
  "£250-500K",
  "£500K-1M",
  "Over £1M"
];

const inquiryOptions = [
  "Under 10",
  "10-25",
  "25-50",
  "Over 50"
];

const missedOptions = [
  "None",
  "1-5",
  "6-15",
  "16-30",
  "Over 30"
];

const followUpOptions = [
  "Under 5 minutes",
  "5-60 minutes",
  "1-4 hours",
  "4+ hours",
  "We don't track this"
];

const adminOptions = [
  "Under 2 hours",
  "2-5 hours",
  "5-10 hours",
  "10-20 hours",
  "Over 20 hours"
];

export default function AuditForm({ onComplete }: AuditFormProps) {
  const [currentStep, setCurrentStep] = useState(1);
  const totalSteps = 10;

  const [formData, setFormData] = useState<FormData>({
    businessName: "",
    name: "",
    email: "",
    industry: "",
    annualRevenue: "",
    weeklyInquiries: "",
    missedResponses: "",
    followUpTime: "",
    adminHours: "",
    biggestChallenge: ""
  });

  const updateField = (field: keyof FormData, value: string) => {
    setFormData(prev => ({ ...prev, [field]: value }));
  };

  const canProceed = () => {
    switch (currentStep) {
      case 1: return formData.businessName.trim() !== "";
      case 2: return formData.name.trim() !== "";
      case 3: return formData.email.trim() !== "" && formData.email.includes("@");
      case 4: return formData.industry !== "";
      case 5: return formData.annualRevenue !== "";
      case 6: return formData.weeklyInquiries !== "";
      case 7: return formData.missedResponses !== "";
      case 8: return formData.followUpTime !== "";
      case 9: return formData.adminHours !== "";
      case 10: return true; // Optional field
      default: return false;
    }
  };

  const handleNext = () => {
    if (canProceed()) {
      if (currentStep === totalSteps) {
        handleSubmit();
      } else {
        setCurrentStep(prev => prev + 1);
      }
    }
  };

  const handleBack = () => {
    if (currentStep > 1) {
      setCurrentStep(prev => prev - 1);
    }
  };

  const calculateScore = () => {
    // Inquiry volume score (Q6)
    const inquiryVolumeMap: Record<string, number> = {
      "Under 10": 10,
      "10-25": 25,
      "25-50": 40,
      "Over 50": 50
    };
    const inquiryVolume = inquiryVolumeMap[formData.weeklyInquiries] || 0;

    // Missed rate penalty (Q7) — higher missed = lower readiness
    const missedRateMap: Record<string, number> = {
      "None": 100,
      "1-5": 75,
      "6-15": 50,
      "16-30": 25,
      "Over 30": 10
    };
    const missedRateScore = missedRateMap[formData.missedResponses] || 0;

    // Follow-up speed score (Q8) — faster = higher readiness
    const followUpMap: Record<string, number> = {
      "Under 5 minutes": 100,
      "5-60 minutes": 75,
      "1-4 hours": 40,
      "4+ hours": 15,
      "We don't track this": 5
    };
    const followUpScore = followUpMap[formData.followUpTime] || 0;

    // Admin burden score (Q9) — more admin = lower readiness
    const adminMap: Record<string, number> = {
      "Under 2 hours": 90,
      "2-5 hours": 70,
      "5-10 hours": 50,
      "10-20 hours": 30,
      "Over 20 hours": 10
    };
    const adminScore = adminMap[formData.adminHours] || 0;

    // Overall Score (0-100)
    const overallScore = Math.round(
      (missedRateScore * 0.35) +      // Biggest weight — missed revenue
      (followUpScore * 0.30) +         // Second biggest — speed matters
      (adminScore * 0.25) +            // Third — efficiency
      (inquiryVolume / 50 * 10 * 0.10) // Small weight — volume context
    );

    // Score Bands
    let scoreBand = "";
    if (overallScore <= 40) {
      scoreBand = "Critical — Significant Revenue at Risk";
    } else if (overallScore <= 60) {
      scoreBand = "Needs Attention — Quick Wins Available";
    } else if (overallScore <= 80) {
      scoreBand = "Developing — Room for Optimisation";
    } else {
      scoreBand = "Strong — Fine-Tuning Opportunities";
    }

    return { overallScore, scoreBand };
  };

  const handleSubmit = () => {
    const { overallScore, scoreBand } = calculateScore();

    // Send to Google Sheets in the background (don't block UI)
    if (GOOGLE_APPS_SCRIPT_URL !== "YOUR_APPS_SCRIPT_URL_HERE") {
      const payload = {
        name: formData.name,
        email: formData.email,
        businessName: formData.businessName,
        industry: formData.industry,
        annualRevenue: formData.annualRevenue,
        weeklyInquiries: formData.weeklyInquiries,
        missedResponses: formData.missedResponses,
        followUpTime: formData.followUpTime,
        adminHours: formData.adminHours,
        biggestChallenge: formData.biggestChallenge,
        score: overallScore,
        scoreBand: scoreBand,
        leadSource: "Website Form"
      };

      fetch(GOOGLE_APPS_SCRIPT_URL, {
        method: "POST",
        mode: "no-cors",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(payload)
      }).catch(err => {
        console.error("Failed to send to Google Sheets:", err);
      });
    }

    // Show results immediately
    onComplete(formData, overallScore, scoreBand);
  };

  const handleKeyPress = (e: React.KeyboardEvent) => {
    if (e.key === "Enter" && canProceed()) {
      handleNext();
    }
  };

  const progressPercent = (currentStep / totalSteps) * 100;

  return (
    <section className="relative min-h-screen bg-white pt-32 pb-16">
      {/* Background gradient */}
      <div className="pointer-events-none absolute inset-0">
        <div className="absolute -right-1/4 top-0 h-[500px] w-[500px] rounded-full bg-accent/5 blur-[120px]" />
        <div className="absolute -left-1/4 bottom-1/4 h-[400px] w-[400px] rounded-full bg-primary/5 blur-[100px]" />
      </div>

      <div className="relative mx-auto max-w-2xl px-4">
        {/* Progress Bar */}
        <div className="mb-8">
          <div className="mb-2 flex items-center justify-between text-sm text-muted">
            <span>Question {currentStep} of {totalSteps}</span>
            <span>{Math.round(progressPercent)}%</span>
          </div>
          <div className="h-2 rounded-full bg-surface overflow-hidden">
            <div 
              className="h-full bg-accent transition-all duration-500 ease-out"
              style={{ width: `${progressPercent}%` }}
            />
          </div>
        </div>

        {/* Question Card */}
        <div className="rounded-3xl border border-gray-200 bg-white p-8 shadow-xl sm:p-12">
          {/* Step 1: Business Name */}
          {currentStep === 1 && (
            <div className="fade-in">
              <label className="block">
                <span className="block text-sm font-medium text-accent mb-2">YOUR BUSINESS</span>
                <h2 className="text-3xl font-bold text-primary mb-6">What's your business name?</h2>
                <input
                  type="text"
                  value={formData.businessName}
                  onChange={(e) => updateField("businessName", e.target.value)}
                  onKeyPress={handleKeyPress}
                  placeholder="Enter your business name"
                  className="w-full rounded-xl border border-gray-300 px-4 py-3 text-lg focus:border-accent focus:outline-none focus:ring-2 focus:ring-accent/20 transition"
                  autoFocus
                />
              </label>
            </div>
          )}

          {/* Step 2: Your Name */}
          {currentStep === 2 && (
            <div className="fade-in">
              <label className="block">
                <span className="block text-sm font-medium text-accent mb-2">YOUR DETAILS</span>
                <h2 className="text-3xl font-bold text-primary mb-6">What's your name?</h2>
                <input
                  type="text"
                  value={formData.name}
                  onChange={(e) => updateField("name", e.target.value)}
                  onKeyPress={handleKeyPress}
                  placeholder="Enter your name"
                  className="w-full rounded-xl border border-gray-300 px-4 py-3 text-lg focus:border-accent focus:outline-none focus:ring-2 focus:ring-accent/20 transition"
                  autoFocus
                />
              </label>
            </div>
          )}

          {/* Step 3: Email */}
          {currentStep === 3 && (
            <div className="fade-in">
              <label className="block">
                <span className="block text-sm font-medium text-accent mb-2">CONTACT</span>
                <h2 className="text-3xl font-bold text-primary mb-6">What's your email?</h2>
                <input
                  type="email"
                  value={formData.email}
                  onChange={(e) => updateField("email", e.target.value)}
                  onKeyPress={handleKeyPress}
                  placeholder="you@example.com"
                  className="w-full rounded-xl border border-gray-300 px-4 py-3 text-lg focus:border-accent focus:outline-none focus:ring-2 focus:ring-accent/20 transition"
                  autoFocus
                />
              </label>
            </div>
          )}

          {/* Step 4: Industry */}
          {currentStep === 4 && (
            <div className="fade-in">
              <label className="block">
                <span className="block text-sm font-medium text-accent mb-2">INDUSTRY</span>
                <h2 className="text-3xl font-bold text-primary mb-6">What industry are you in?</h2>
                <select
                  value={formData.industry}
                  onChange={(e) => updateField("industry", e.target.value)}
                  className="w-full rounded-xl border border-gray-300 px-4 py-3 text-lg focus:border-accent focus:outline-none focus:ring-2 focus:ring-accent/20 transition"
                  autoFocus
                >
                  <option value="">Select your industry</option>
                  {industryOptions.map(opt => (
                    <option key={opt} value={opt}>{opt}</option>
                  ))}
                </select>
              </label>
            </div>
          )}

          {/* Step 5: Annual Revenue */}
          {currentStep === 5 && (
            <div className="fade-in">
              <label className="block">
                <span className="block text-sm font-medium text-accent mb-2">BUSINESS SIZE</span>
                <h2 className="text-3xl font-bold text-primary mb-6">Approximate annual revenue?</h2>
                <select
                  value={formData.annualRevenue}
                  onChange={(e) => updateField("annualRevenue", e.target.value)}
                  className="w-full rounded-xl border border-gray-300 px-4 py-3 text-lg focus:border-accent focus:outline-none focus:ring-2 focus:ring-accent/20 transition"
                  autoFocus
                >
                  <option value="">Select revenue range</option>
                  {revenueOptions.map(opt => (
                    <option key={opt} value={opt}>{opt}</option>
                  ))}
                </select>
              </label>
            </div>
          )}

          {/* Step 6: Weekly Inquiries */}
          {currentStep === 6 && (
            <div className="fade-in">
              <label className="block">
                <span className="block text-sm font-medium text-accent mb-2">LEAD VOLUME</span>
                <h2 className="text-3xl font-bold text-primary mb-6">How many customer inquiries per week?</h2>
                <p className="text-muted mb-4">Include calls + emails</p>
                <select
                  value={formData.weeklyInquiries}
                  onChange={(e) => updateField("weeklyInquiries", e.target.value)}
                  className="w-full rounded-xl border border-gray-300 px-4 py-3 text-lg focus:border-accent focus:outline-none focus:ring-2 focus:ring-accent/20 transition"
                  autoFocus
                >
                  <option value="">Select inquiry volume</option>
                  {inquiryOptions.map(opt => (
                    <option key={opt} value={opt}>{opt}</option>
                  ))}
                </select>
              </label>
            </div>
          )}

          {/* Step 7: Missed Responses */}
          {currentStep === 7 && (
            <div className="fade-in">
              <label className="block">
                <span className="block text-sm font-medium text-accent mb-2">LEAD CAPTURE</span>
                <h2 className="text-3xl font-bold text-primary mb-6">How many do you miss or respond to late?</h2>
                <p className="text-muted mb-4">Be honest — this is where the revenue leaks</p>
                <select
                  value={formData.missedResponses}
                  onChange={(e) => updateField("missedResponses", e.target.value)}
                  className="w-full rounded-xl border border-gray-300 px-4 py-3 text-lg focus:border-accent focus:outline-none focus:ring-2 focus:ring-accent/20 transition"
                  autoFocus
                >
                  <option value="">Select missed responses</option>
                  {missedOptions.map(opt => (
                    <option key={opt} value={opt}>{opt}</option>
                  ))}
                </select>
              </label>
            </div>
          )}

          {/* Step 8: Follow-up Time */}
          {currentStep === 8 && (
            <div className="fade-in">
              <label className="block">
                <span className="block text-sm font-medium text-accent mb-2">RESPONSE SPEED</span>
                <h2 className="text-3xl font-bold text-primary mb-6">How long to follow up with a new lead?</h2>
                <p className="text-muted mb-4">On average, from first contact to first response</p>
                <select
                  value={formData.followUpTime}
                  onChange={(e) => updateField("followUpTime", e.target.value)}
                  className="w-full rounded-xl border border-gray-300 px-4 py-3 text-lg focus:border-accent focus:outline-none focus:ring-2 focus:ring-accent/20 transition"
                  autoFocus
                >
                  <option value="">Select follow-up time</option>
                  {followUpOptions.map(opt => (
                    <option key={opt} value={opt}>{opt}</option>
                  ))}
                </select>
              </label>
            </div>
          )}

          {/* Step 9: Admin Hours */}
          {currentStep === 9 && (
            <div className="fade-in">
              <label className="block">
                <span className="block text-sm font-medium text-accent mb-2">OPERATIONAL EFFICIENCY</span>
                <h2 className="text-3xl font-bold text-primary mb-6">Time per week on admin tasks?</h2>
                <p className="text-muted mb-4">Scheduling, invoicing, follow-ups, data entry</p>
                <select
                  value={formData.adminHours}
                  onChange={(e) => updateField("adminHours", e.target.value)}
                  className="w-full rounded-xl border border-gray-300 px-4 py-3 text-lg focus:border-accent focus:outline-none focus:ring-2 focus:ring-accent/20 transition"
                  autoFocus
                >
                  <option value="">Select admin hours</option>
                  {adminOptions.map(opt => (
                    <option key={opt} value={opt}>{opt}</option>
                  ))}
                </select>
              </label>
            </div>
          )}

          {/* Step 10: Biggest Challenge */}
          {currentStep === 10 && (
            <div className="fade-in">
              <label className="block">
                <span className="block text-sm font-medium text-accent mb-2">FINAL QUESTION (OPTIONAL)</span>
                <h2 className="text-3xl font-bold text-primary mb-6">What's your biggest operational challenge right now?</h2>
                <textarea
                  value={formData.biggestChallenge}
                  onChange={(e) => updateField("biggestChallenge", e.target.value)}
                  placeholder="E.g., Can't keep up with inquiries during busy season, losing track of follow-ups, spending too much time on admin..."
                  rows={5}
                  className="w-full rounded-xl border border-gray-300 px-4 py-3 text-lg focus:border-accent focus:outline-none focus:ring-2 focus:ring-accent/20 transition resize-none"
                  autoFocus
                />
                <p className="mt-2 text-sm text-muted">Optional but helps us tailor your results</p>
              </label>
            </div>
          )}

          {/* Navigation Buttons */}
          <div className="mt-8 flex items-center gap-4">
            {currentStep > 1 && (
              <button
                onClick={handleBack}
                className="rounded-full border border-gray-300 px-6 py-3 font-medium text-primary transition hover:bg-surface"
              >
                ← Back
              </button>
            )}
            <button
              onClick={handleNext}
              disabled={!canProceed()}
              className={`ml-auto rounded-full px-8 py-3 font-semibold text-white shadow-lg transition ${
                canProceed() 
                  ? "bg-accent hover:bg-accent-hover hover:shadow-xl cursor-pointer" 
                  : "bg-gray-300 cursor-not-allowed"
              }`}
            >
              {currentStep === totalSteps ? "See My Results →" : "Next →"}
            </button>
          </div>
        </div>

        {/* Trust Signals */}
        <div className="mt-8 text-center text-sm text-muted">
          <p>🔒 Your data is secure • No spam • Free forever</p>
        </div>
      </div>
    </section>
  );
}
