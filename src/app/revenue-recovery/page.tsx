import Link from "next/link";
import { ScrollFade } from "@/components/ScrollFade";

export const metadata = {
  title: "Revenue Recovery Audit — £297 | Get Exact £ Figures on Every Revenue Leak",
  description: "60-90 min deep dive with ACCA-qualified consultant. Professional Revenue Recovery Report with exact £ figures on every leak. ROI projections included.",
};

export default function RevenueRecoveryPage() {
  return (
    <>
      {/* Hero */}
      <section className="relative overflow-hidden bg-white pt-32">
        <div className="mx-auto max-w-4xl px-4 pb-16">
          <div className="text-center">
            <div className="mb-6 inline-flex items-center gap-2 rounded-full border border-primary/30 bg-primary/10 px-4 py-1.5 text-sm text-primary">
              <span>💰</span>
              <span>ACCA-Grade Analysis • 48hr Report</span>
            </div>

            <h1 className="font-bold text-5xl tracking-tight text-primary sm:text-6xl">
              Revenue Recovery Audit
            </h1>
            <p className="mx-auto mt-6 max-w-2xl text-lg text-muted sm:text-xl">
              Find out exactly how much money your business is losing and get a specific plan to recover it. 
              ACCA-qualified analysis with exact £ figures.
            </p>
            
            <div className="mt-10">
              <div className="text-4xl font-bold text-primary">£297</div>
              <p className="mt-2 text-sm text-muted">One-off payment • Professional report included</p>
            </div>
          </div>
        </div>
      </section>

      {/* What You Get */}
      <ScrollFade>
        <section className="py-24 bg-surface">
          <div className="mx-auto max-w-6xl px-4">
            <h2 className="text-center font-bold text-3xl text-primary sm:text-4xl">
              What&rsquo;s Included
            </h2>
            <div className="mt-14 grid gap-6 lg:grid-cols-2">
              {[
                {
                  title: "60-90 Minute Deep Dive with Manny",
                  items: [
                    "Screen share walkthrough of your current processes",
                    "Revenue leak identification using ACCA frameworks",
                    "Operational cost analysis and efficiency mapping",
                    "AI implementation priority assessment",
                  ],
                },
                {
                  title: "Professional Revenue Recovery Report",
                  items: [
                    "Current operational costs mapped and quantified",
                    "Revenue leaks identified with exact £ figures",
                    "Specific AI implementation recommendations",
                    "ROI projections for each recommendation",
                    "Priority roadmap — what to fix first",
                  ],
                },
              ].map((section) => (
                <div
                  key={section.title}
                  className="rounded-2xl border border-gray-200 bg-white p-8"
                >
                  <h3 className="font-semibold text-xl text-primary">{section.title}</h3>
                  <ul className="mt-6 space-y-3">
                    {section.items.map((item) => (
                      <li key={item} className="flex gap-3 text-sm text-text">
                        <span className="text-accent">✓</span>
                        {item}
                      </li>
                    ))}
                  </ul>
                </div>
              ))}
            </div>
          </div>
        </section>
      </ScrollFade>

      {/* The ACCA Differentiator */}
      <ScrollFade>
        <section className="py-24 bg-white">
          <div className="mx-auto max-w-4xl px-4 text-center">
            <h2 className="font-bold text-3xl text-primary sm:text-4xl">
              The ACCA Differentiator
            </h2>
            <p className="mt-6 text-lg text-muted">
              Most AI consultants show you cool demos. I show you the ROI first.
            </p>
            
            <div className="mx-auto mt-12 grid max-w-3xl gap-8 sm:grid-cols-3">
              {[
                {
                  title: "P&L Thinking",
                  desc: "Every recommendation gets measured in £ recovered or £ saved. No vanity metrics.",
                },
                {
                  title: "Risk Assessment",
                  desc: "15 years in finance taught me what can go wrong. We plan for it.",
                },
                {
                  title: "Compliance Aware",
                  desc: "Your automation needs to work with GDPR, industry regs, and audit trails.",
                },
              ].map((item) => (
                <div key={item.title} className="text-center">
                  <h3 className="font-semibold text-lg text-primary">{item.title}</h3>
                  <p className="mt-3 text-sm text-muted">{item.desc}</p>
                </div>
              ))}
            </div>
            
            <div className="mt-12 rounded-2xl border border-yellow-200 bg-yellow-50 p-6">
              <p className="text-sm text-text">
                <strong>Background:</strong> ACCA qualified, 15 years at Visa Europe and UK Cabinet Office. 
                I&rsquo;ve seen the financial guts of major organisations. Now I help small businesses 
                plug the same leaks that cost corporates millions.
              </p>
            </div>
          </div>
        </section>
      </ScrollFade>

      {/* Sample Report Sections */}
      <ScrollFade>
        <section className="py-24 bg-surface">
          <div className="mx-auto max-w-6xl px-4">
            <h2 className="text-center font-bold text-3xl text-primary sm:text-4xl">
              Sample Report Sections
            </h2>
            <p className="mt-4 text-center text-muted">
              Here&rsquo;s what a typical Revenue Recovery Report contains
            </p>
            <div className="mt-14 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
              {[
                {
                  title: "Current State Analysis",
                  items: ["Monthly call volume & conversion rates", "Follow-up response times", "Admin time breakdown", "Tool overlap & inefficiencies"],
                },
                {
                  title: "Revenue Leak Quantification",
                  items: ["Missed calls: £2,400/month", "Slow follow-up: £1,800/month", "Manual admin: £3,200/month", "No weekend coverage: £900/month"],
                },
                {
                  title: "AI Implementation Plan",
                  items: ["Phase 1: AI receptionist (£497/mo)", "Phase 2: Follow-up automation", "Phase 3: Admin workflows", "ROI timeline: Break-even month 3"],
                },
              ].map((section) => (
                <div
                  key={section.title}
                  className="rounded-2xl border border-gray-200 bg-white p-6"
                >
                  <h3 className="font-semibold text-lg text-primary">{section.title}</h3>
                  <ul className="mt-4 space-y-2">
                    {section.items.map((item) => (
                      <li key={item} className="text-sm text-text">
                        • {item}
                      </li>
                    ))}
                  </ul>
                </div>
              ))}
            </div>
          </div>
        </section>
      </ScrollFade>

      {/* Process */}
      <ScrollFade>
        <section className="py-24 bg-white">
          <div className="mx-auto max-w-6xl px-4">
            <h2 className="text-center font-bold text-3xl text-primary sm:text-4xl">
              How It Works
            </h2>
            <div className="mt-14 grid gap-8 sm:grid-cols-4">
              {[
                {
                  step: "1",
                  title: "Book Your Audit",
                  desc: "Pay £297 and schedule your 60-90 minute session. We'll send you a pre-audit questionnaire.",
                },
                {
                  step: "2",
                  title: "Deep Dive Session",
                  desc: "Screen share walkthrough of your processes. ACCA-grade analysis of costs and revenue leaks.",
                },
                {
                  step: "3",
                  title: "Professional Report",
                  desc: "Detailed Revenue Recovery Report delivered within 48 hours with exact £ figures.",
                },
                {
                  step: "4",
                  title: "Implementation Decision",
                  desc: "Use the report to fix things yourself or upgrade to our Revenue Recovery Engine retainer.",
                },
              ].map((item) => (
                <div key={item.step} className="text-center">
                  <div className="mx-auto flex h-12 w-12 items-center justify-center rounded-xl bg-primary text-lg font-bold text-white">
                    {item.step}
                  </div>
                  <h3 className="mt-6 font-semibold text-lg text-primary">{item.title}</h3>
                  <p className="mt-3 text-sm text-muted leading-relaxed">{item.desc}</p>
                </div>
              ))}
            </div>
          </div>
        </section>
      </ScrollFade>

      {/* Calendar Booking */}
      <ScrollFade>
        <section className="py-24 bg-surface">
          <div className="mx-auto max-w-4xl px-4">
            <div className="rounded-3xl border border-primary/30 bg-gradient-to-br from-primary/5 to-white p-8 text-center shadow-lg sm:p-12">
              <h2 className="font-bold text-3xl text-primary">
                Book Your Revenue Recovery Audit
              </h2>
              <p className="mt-4 text-lg text-muted">
                £297 • 60-90 minutes with Manny • Professional report in 48hrs
              </p>
              
              {/* Calendar placeholder */}
              <div className="mx-auto mt-8 max-w-2xl rounded-2xl border border-gray-200 bg-white p-8">
                <p className="text-lg font-semibold text-primary">
                  📅 Calendar Integration Coming Soon
                </p>
                <p className="mt-4 text-text">
                  In the meantime, use the link below to book directly through Cal.com:
                </p>
                <div className="mt-6">
                  <a
                    href="https://cal.com/manny-amoah-iys902/30min"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-block rounded-full bg-primary px-8 py-4 text-lg font-semibold text-white shadow-xl shadow-primary/30 transition-all duration-300 hover:scale-105 hover:bg-primary/90"
                  >
                    Book Revenue Recovery Audit — £297 →
                  </a>
                </div>
                <p className="mt-4 text-sm text-muted">
                  Mention &ldquo;Revenue Recovery Audit&rdquo; when booking
                </p>
              </div>
            </div>
          </div>
        </section>
      </ScrollFade>

      {/* Guarantee */}
      <ScrollFade>
        <section className="py-24 bg-white">
          <div className="mx-auto max-w-4xl px-4 text-center">
            <h2 className="font-bold text-3xl text-primary sm:text-4xl">
              Our Promise
            </h2>
            <div className="mt-12 rounded-2xl border border-green-200 bg-green-50 p-8">
              <div className="text-4xl">✅</div>
              <h3 className="mt-4 font-bold text-xl text-green-800">Revenue Recovery Guarantee</h3>
              <p className="mt-4 text-green-700">
                If your Revenue Recovery Report doesn&rsquo;t identify at least £1,000/month in recoverable revenue, 
                we&rsquo;ll refund the full £297. No questions asked.
              </p>
            </div>
            
            <p className="mt-8 text-sm text-muted">
              We&rsquo;ve never had to honour this guarantee. Most businesses lose £3,000-8,000/month to operational inefficiencies.
            </p>
          </div>
        </section>
      </ScrollFade>

      {/* FAQ */}
      <ScrollFade>
        <section className="py-24 bg-surface">
          <div className="mx-auto max-w-4xl px-4">
            <h2 className="text-center font-bold text-3xl text-primary sm:text-4xl">
              Frequently Asked Questions
            </h2>
            <div className="mt-14 space-y-6">
              {[
                {
                  question: "How is this different from the free audit?",
                  answer: "The free audit shows you WHERE your opportunities are. This shows you exactly HOW MUCH those opportunities are worth in £. Plus you get a professional report you can use to justify investment to stakeholders.",
                },
                {
                  question: "Do I have to implement with you afterwards?",
                  answer: "Absolutely not. The report is yours to keep and implement however you want. Some clients use it to brief other providers, some implement internally, some upgrade to our Revenue Recovery Engine retainer.",
                },
                {
                  question: "What size business is this suitable for?",
                  answer: "Works best for businesses with £100K-£1M revenue, 1-50 staff. If you're smaller, start with the free audit. If you're larger, we can still help but may recommend a different approach.",
                },
                {
                  question: "How quickly can we get started?",
                  answer: "Usually within a week. The audit session takes 60-90 minutes, then you get your report within 48 hours.",
                },
              ].map((item, index) => (
                <div key={index} className="rounded-2xl border border-gray-200 bg-white p-6">
                  <h3 className="font-semibold text-lg text-primary">{item.question}</h3>
                  <p className="mt-3 text-sm text-text leading-relaxed">{item.answer}</p>
                </div>
              ))}
            </div>
          </div>
        </section>
      </ScrollFade>
    </>
  );
}