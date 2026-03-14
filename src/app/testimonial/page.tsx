"use client";

import Link from "next/link";
import { useState } from "react";

// TODO: Paste the deployed Google Apps Script URL here
// Deploy instructions: see ~/.openclaw/workspace/scripts/testimonial-apps-script.js
const GOOGLE_SCRIPT_URL = "";

export default function TestimonialPage() {
  const [formData, setFormData] = useState({
    name: "",
    business: "",
    aiHelps: "",
    workChanged: "",
    favourite: "",
    recommend: "",
    useOnWebsite: "",
    anythingElse: "",
  });

  const [submitted, setSubmitted] = useState(false);
  const [copySuccess, setCopySuccess] = useState(false);
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [showToast, setShowToast] = useState(false);

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const formatEmailBody = () => {
    return `
Testimonial Submission from ${formData.name}

Business: ${formData.business}

What does your AI assistant help you with?
${formData.aiHelps}

How has it changed the way you work?
${formData.workChanged}

What's your favourite thing about having an AI assistant?
${formData.favourite}

Would you recommend this to other business owners?
${formData.recommend}

Can we use your feedback on our website?
${formData.useOnWebsite}

Anything else you'd like to share?
${formData.anythingElse || "N/A"}
    `.trim();
  };

  const handleSubmitEmail = async (e: React.FormEvent) => {
    e.preventDefault();
    
    if (!formData.name || !formData.business || !formData.aiHelps || !formData.workChanged || !formData.favourite || !formData.recommend || !formData.useOnWebsite) {
      alert("Please fill in all required fields");
      return;
    }

    setIsSubmitting(true);

    // Try Google Sheets submission first (if URL is configured)
    if (GOOGLE_SCRIPT_URL) {
      try {
        const response = await fetch(GOOGLE_SCRIPT_URL, {
          method: 'POST',
          mode: 'no-cors', // Apps Script requires no-cors
          headers: {
            'Content-Type': 'application/json',
          },
          body: JSON.stringify(formData),
        });

        // With no-cors mode, we can't read the response, but if no error is thrown, assume success
        setIsSubmitting(false);
        setShowToast(true);
        setTimeout(() => setShowToast(false), 3000);
        setSubmitted(true);
        return;
      } catch (error) {
        console.error('Google Sheets submission failed:', error);
        // Fall through to mailto fallback
      }
    }

    // Fallback to mailto (if Google Sheets URL is empty or failed)
    setIsSubmitting(false);
    const subject = `Testimonial from ${formData.name} - ${formData.business}`;
    const body = encodeURIComponent(formatEmailBody());
    const mailtoLink = `mailto:manny@coreaisolutions.com?subject=${encodeURIComponent(subject)}&body=${body}`;
    
    window.location.href = mailtoLink;
    setSubmitted(true);
  };

  const handleCopyToClipboard = async () => {
    const text = formatEmailBody();
    try {
      await navigator.clipboard.writeText(text);
      setCopySuccess(true);
      setTimeout(() => setCopySuccess(false), 2000);
    } catch (err) {
      alert("Failed to copy to clipboard");
    }
  };

  if (submitted) {
    return (
      <div className="min-h-screen bg-[#0e0e10] text-white">
        <div className="mx-auto max-w-6xl px-4 py-16 sm:py-24">
          <div className="text-center">
            <div className="mb-6 text-6xl">🙏</div>
            <h1 className="mb-4 font-[family-name:var(--font-playfair)] text-4xl font-bold sm:text-5xl">
              Thank you!
            </h1>
            <p className="mb-8 text-lg text-[--color-muted]">
              Your feedback means the world to us. We'll be in touch soon.
            </p>
            <Link
              href="/"
              className="inline-block rounded-full bg-[--color-accent] px-8 py-3.5 font-medium text-white transition-colors hover:bg-[--color-accent-hover]"
            >
              Back to Homepage
            </Link>
          </div>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-[#0e0e10] text-white">
      <div className="mx-auto max-w-6xl px-4 py-16 sm:py-24">
        {/* Header */}
        <div className="mb-12 text-center">
          <p className="mb-3 text-sm font-medium uppercase tracking-wider text-[--color-muted]">
            Core AI Solutions
          </p>
          <h1 className="mb-4 font-[family-name:var(--font-playfair)] text-4xl font-bold sm:text-5xl lg:text-6xl">
            Share Your Experience
          </h1>
          <p className="mx-auto max-w-2xl text-lg text-[--color-muted]">
            Your feedback helps us improve and helps other businesses discover
            what's possible with AI. It takes less than 2 minutes.
          </p>
        </div>

        {/* Form Card */}
        <form onSubmit={handleSubmitEmail} className="mx-auto max-w-3xl">
          <div className="rounded-xl border border-[--color-border] bg-[--color-surface] p-6 sm:p-8">
            <div className="space-y-6">
              {/* Name */}
              <div>
                <label htmlFor="name" className="mb-2 block text-sm font-medium text-white">
                  Your Name <span className="text-[--color-accent]">*</span>
                </label>
                <input
                  type="text"
                  id="name"
                  name="name"
                  required
                  value={formData.name}
                  onChange={handleChange}
                  className="w-full rounded-lg border border-[--color-border] bg-[--color-surface-light] px-4 py-3 text-white placeholder-[--color-muted] focus:border-[--color-accent] focus:outline-none focus:ring-1 focus:ring-[--color-accent]"
                />
              </div>

              {/* Business Name */}
              <div>
                <label htmlFor="business" className="mb-2 block text-sm font-medium text-white">
                  Your Business Name <span className="text-[--color-accent]">*</span>
                </label>
                <input
                  type="text"
                  id="business"
                  name="business"
                  required
                  value={formData.business}
                  onChange={handleChange}
                  className="w-full rounded-lg border border-[--color-border] bg-[--color-surface-light] px-4 py-3 text-white placeholder-[--color-muted] focus:border-[--color-accent] focus:outline-none focus:ring-1 focus:ring-[--color-accent]"
                />
              </div>

              {/* AI Helps With */}
              <div>
                <label htmlFor="aiHelps" className="mb-2 block text-sm font-medium text-white">
                  What does your AI assistant help you with? <span className="text-[--color-accent]">*</span>
                </label>
                <textarea
                  id="aiHelps"
                  name="aiHelps"
                  required
                  value={formData.aiHelps}
                  onChange={handleChange}
                  placeholder="e.g., managing emails, scheduling, research, content creation..."
                  className="min-h-[100px] w-full rounded-lg border border-[--color-border] bg-[--color-surface-light] px-4 py-3 text-white placeholder-[--color-muted] focus:border-[--color-accent] focus:outline-none focus:ring-1 focus:ring-[--color-accent]"
                />
              </div>

              {/* Work Changed */}
              <div>
                <label htmlFor="workChanged" className="mb-2 block text-sm font-medium text-white">
                  How has it changed the way you work? <span className="text-[--color-accent]">*</span>
                </label>
                <textarea
                  id="workChanged"
                  name="workChanged"
                  required
                  value={formData.workChanged}
                  onChange={handleChange}
                  placeholder="e.g., saves me 2 hours a day, I never miss follow-ups now..."
                  className="min-h-[100px] w-full rounded-lg border border-[--color-border] bg-[--color-surface-light] px-4 py-3 text-white placeholder-[--color-muted] focus:border-[--color-accent] focus:outline-none focus:ring-1 focus:ring-[--color-accent]"
                />
              </div>

              {/* Favourite Thing */}
              <div>
                <label htmlFor="favourite" className="mb-2 block text-sm font-medium text-white">
                  What's your favourite thing about having an AI assistant? <span className="text-[--color-accent]">*</span>
                </label>
                <textarea
                  id="favourite"
                  name="favourite"
                  required
                  value={formData.favourite}
                  onChange={handleChange}
                  className="min-h-[100px] w-full rounded-lg border border-[--color-border] bg-[--color-surface-light] px-4 py-3 text-white placeholder-[--color-muted] focus:border-[--color-accent] focus:outline-none focus:ring-1 focus:ring-[--color-accent]"
                />
              </div>

              {/* Recommend */}
              <div>
                <label className="mb-3 block text-sm font-medium text-white">
                  Would you recommend this to other business owners? <span className="text-[--color-accent]">*</span>
                </label>
                <div className="space-y-2">
                  {["Absolutely", "Yes", "Maybe", "Not yet"].map((option) => (
                    <label key={option} className="flex cursor-pointer items-center">
                      <input
                        type="radio"
                        name="recommend"
                        value={option}
                        checked={formData.recommend === option}
                        onChange={handleChange}
                        required
                        className="h-4 w-4 border-[--color-border] bg-[--color-surface-light] text-[--color-accent] focus:ring-2 focus:ring-[--color-accent] focus:ring-offset-0"
                      />
                      <span className="ml-3 text-white">{option}</span>
                    </label>
                  ))}
                </div>
              </div>

              {/* Use on Website */}
              <div>
                <label className="mb-3 block text-sm font-medium text-white">
                  Can we use your feedback on our website? <span className="text-[--color-accent]">*</span>
                </label>
                <div className="space-y-2">
                  {[
                    "Yes, use my name and business",
                    "Yes, but keep it anonymous",
                    "No, just for internal use",
                  ].map((option) => (
                    <label key={option} className="flex cursor-pointer items-center">
                      <input
                        type="radio"
                        name="useOnWebsite"
                        value={option}
                        checked={formData.useOnWebsite === option}
                        onChange={handleChange}
                        required
                        className="h-4 w-4 border-[--color-border] bg-[--color-surface-light] text-[--color-accent] focus:ring-2 focus:ring-[--color-accent] focus:ring-offset-0"
                      />
                      <span className="ml-3 text-white">{option}</span>
                    </label>
                  ))}
                </div>
              </div>

              {/* Anything Else */}
              <div>
                <label htmlFor="anythingElse" className="mb-2 block text-sm font-medium text-white">
                  Anything else you'd like to share?
                </label>
                <textarea
                  id="anythingElse"
                  name="anythingElse"
                  value={formData.anythingElse}
                  onChange={handleChange}
                  className="min-h-[100px] w-full rounded-lg border border-[--color-border] bg-[--color-surface-light] px-4 py-3 text-white placeholder-[--color-muted] focus:border-[--color-accent] focus:outline-none focus:ring-1 focus:ring-[--color-accent]"
                />
              </div>
            </div>

            {/* Action Buttons */}
            <div className="mt-8 flex flex-col gap-4 sm:flex-row">
              <button
                type="submit"
                disabled={isSubmitting}
                className="w-full rounded-full bg-[--color-accent] px-8 py-3.5 font-medium text-white transition-colors hover:bg-[--color-accent-hover] disabled:opacity-50 disabled:cursor-not-allowed sm:w-auto"
              >
                {isSubmitting ? "Submitting..." : "Submit Testimonial"}
              </button>
              <button
                type="button"
                onClick={handleCopyToClipboard}
                className="relative w-full rounded-full border border-[--color-border] bg-[--color-surface-light] px-8 py-3.5 font-medium text-white transition-colors hover:bg-[--color-border] sm:w-auto"
              >
                {copySuccess ? "Copied! ✓" : "Copy Responses"}
              </button>
            </div>
          </div>
        </form>

        {/* Success Toast */}
        {showToast && (
          <div className="fixed bottom-8 left-1/2 -translate-x-1/2 transform animate-fade-in">
            <div className="rounded-lg border border-green-500/20 bg-green-500/10 px-6 py-4 backdrop-blur-sm">
              <p className="flex items-center gap-2 text-green-400 font-medium">
                <span>✓</span> Testimonial submitted! Thank you 🙏
              </p>
            </div>
          </div>
        )}
      </div>
    </div>
  );
}
