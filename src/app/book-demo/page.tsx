import type { Metadata } from "next";
import { ScrollFade } from "@/components/ScrollFade";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Book Your Free AI Audit — Core AI Solutions",
  description:
    "Book a free AI audit call with Manny (ACCA qualified). We'll review your workflows, identify revenue leaks, and deliver a report within 48 hours. No pitch, just insights.",
};

export default function BookDemo() {
  return (
    <>
      {/* Hero */}
      <section className="relative overflow-hidden bg-white pt-32">
        <div className="mx-auto max-w-4xl px-4 pb-16">
          <div className="text-center">
            <div className="mb-6 inline-flex items-center gap-2 rounded-full border border-[--color-accent]/30 bg-[--color-accent]/10 px-4 py-1.5 text-sm text-[--color-accent]">
              <span>🆓</span>
              <span>Free • No Pitch • ACCA-Qualified Analysis</span>
            </div>

            <h1 className="font-bold text-5xl tracking-tight text-[--color-primary] sm:text-6xl">
              Book Your Free AI Audit
            </h1>
            <p className="mx-auto mt-6 max-w-2xl text-lg text-[--color-muted] sm:text-xl">
              45-minute call with Manny (ACCA qualified). We&rsquo;ll review your workflows, identify revenue leaks, 
              and you&rsquo;ll get a professional report within 48 hours. No obligation.
            </p>
          </div>
        </div>
      </section>

      {/* What Happens */}
      <ScrollFade>
        <section className="py-24 bg-[--color-surface]">
          <div className="mx-auto max-w-6xl px-4">
            <h2 className="text-center font-bold text-3xl text-[--color-primary] sm:text-4xl">
              What Happens on the Call
            </h2>
            <div className="mt-14 grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
              {[
                {
                  step: "1",
                  title: "Workflow Review",
                  desc: "Screen share walkthrough of how you currently handle calls, leads, admin, and follow-up.",
                },
                {
                  step: "2",
                  title: "Revenue Leak Identification",
                  desc: "ACCA-trained analysis of where money is slipping through operational cracks.",
                },
                {
                  step: "3",
                  title: "Quick Wins",
                  desc: "3 things you can fix immediately to start recovering revenue — no AI required.",
                },
                {
                  step: "4",
                  title: "Report in 48hrs",
                  desc: "Professional audit summary with findings, recommendations, and next steps.",
                },
              ].map((item) => (
                <div
                  key={item.step}
                  className="rounded-2xl border border-gray-200 bg-white p-6 text-center transition-all duration-300 hover:-translate-y-1 hover:border-[--color-accent]/30 hover:shadow-lg"
                >
                  <div className="mx-auto flex h-12 w-12 items-center justify-center rounded-xl bg-[--color-accent] text-lg font-bold text-white">
                    {item.step}
                  </div>
                  <h3 className="mt-4 font-bold text-lg text-[--color-primary]">{item.title}</h3>
                  <p className="mt-2 text-sm text-[--color-muted] leading-relaxed">{item.desc}</p>
                </div>
              ))}
            </div>
          </div>
        </section>
      </ScrollFade>

      {/* ACCA Differentiator */}
      <ScrollFade>
        <section className="py-24 bg-white">
          <div className="mx-auto max-w-4xl px-4">
            <div className="rounded-3xl border border-yellow-200 bg-yellow-50 p-8 text-center sm:p-12">
              <h2 className="font-bold text-3xl text-[--color-primary]">
                Why This Audit Is Different
              </h2>
              <p className="mt-6 text-lg text-[--color-text]">
                Most AI consultants show you cool demos. I&rsquo;m ACCA-qualified — I show you the ROI first.
              </p>
              <div className="mt-8 grid gap-6 sm:grid-cols-3">
                {[
                  {
                    title: "Financial Training",
                    desc: "15 years in finance at Visa Europe & UK Cabinet Office. I understand how businesses actually work.",
                  },
                  {
                    title: "P&L Thinking",
                    desc: "Every recommendation comes with £ figures. No vanity metrics, just recovered revenue.",
                  },
                  {
                    title: "No Sales Pitch",
                    desc: "This is a genuine audit. You get value whether you work with us or not.",
                  },
                ].map((item) => (
                  <div key={item.title} className="text-center">
                    <h3 className="font-bold text-lg text-[--color-primary]">{item.title}</h3>
                    <p className="mt-2 text-sm text-[--color-text]">{item.desc}</p>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </section>
      </ScrollFade>

      {/* Calendar */}
      <ScrollFade>
        <section className="py-24 bg-[--color-surface]">
          <div className="mx-auto max-w-4xl px-4">
            <div className="rounded-3xl border border-gray-200 bg-white p-8 shadow-lg sm:p-12">
              <h2 className="text-center font-bold text-3xl text-[--color-primary] mb-8">
                Book Your Free Audit
              </h2>
              
              {/* Calendar placeholder */}
              <div className="rounded-2xl border border-gray-200 bg-gray-50 p-12 text-center">
                <p className="text-lg font-semibold text-[--color-primary] mb-4">
                  📅 Calendar Integration Coming Soon
                </p>
                <p className="text-[--color-text] mb-6">
                  In the meantime, use the link below to book directly through Cal.com:
                </p>
                <a
                  href="https://cal.com/manny-amoah-iys902/30min"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-block rounded-full bg-[--color-accent] px-8 py-4 text-lg font-semibold text-white shadow-xl shadow-[--color-accent]/30 transition-all duration-300 hover:scale-105 hover:bg-[--color-accent-hover]"
                >
                  Book Free AI Audit →
                </a>
                <p className="mt-4 text-sm text-[--color-muted]">
                  Mention &ldquo;Free AI Audit&rdquo; when booking
                </p>
              </div>
            </div>
          </div>
        </section>
      </ScrollFade>

      {/* Upgrade Path */}
      <ScrollFade>
        <section className="py-24 bg-white">
          <div className="mx-auto max-w-4xl px-4 text-center">
            <h2 className="font-bold text-3xl text-[--color-primary] sm:text-4xl">
              Want Deeper Analysis?
            </h2>
            <p className="mt-6 text-lg text-[--color-muted]">
              The free audit shows you <em>where</em> your opportunities are. 
              The Revenue Recovery Audit shows you <em>exactly how much</em> they&rsquo;re worth.
            </p>
            
            <div className="mt-12 rounded-2xl border border-[--color-primary]/20 bg-[--color-primary]/5 p-8">
              <h3 className="font-bold text-xl text-[--color-primary]">Revenue Recovery Audit — £297</h3>
              <ul className="mt-4 space-y-2 text-left text-sm text-[--color-text] max-w-md mx-auto">
                <li>• 90-minute deep dive with ACCA-grade analysis</li>
                <li>• Exact £ figures attached to every revenue leak</li>
                <li>• Professional Revenue Recovery Report within 48hrs</li>
                <li>• ROI projections and priority implementation roadmap</li>
              </ul>
              <div className="mt-6">
                <Link
                  href="/revenue-recovery"
                  className="inline-block rounded-full bg-[--color-primary] px-8 py-3 font-semibold text-white shadow-lg transition hover:bg-[--color-primary]/90"
                >
                  Upgrade to Revenue Recovery Audit →
                </Link>
              </div>
            </div>
          </div>
        </section>
      </ScrollFade>
    </>
  );
}
