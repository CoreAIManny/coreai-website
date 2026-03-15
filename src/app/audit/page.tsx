import Link from "next/link";
import { ScrollFade } from "@/components/ScrollFade";

export const metadata = {
  title: "Free AI Readiness Audit — Find Your Quick Wins in 10 Minutes",
  description: "Free AI readiness assessment that reveals your score, strengths, weaknesses, and 3 quick wins you can implement today. No call required.",
};

export default function AuditPage() {
  return (
    <>
      {/* Hero */}
      <section className="relative overflow-hidden bg-white pt-32">
        <div className="mx-auto max-w-4xl px-4 pb-16">
          <div className="text-center">
            <div className="mb-6 inline-flex items-center gap-2 rounded-full border border-[--color-accent]/30 bg-[--color-accent]/10 px-4 py-1.5 text-sm text-[--color-accent]">
              <span>🆓</span>
              <span>100% Free • No Call Required</span>
            </div>

            <h1 className="font-bold text-5xl tracking-tight text-[--color-primary] sm:text-6xl">
              Free AI Readiness Audit
            </h1>
            <p className="mx-auto mt-6 max-w-2xl text-lg text-[--color-muted] sm:text-xl">
              Find out exactly where your business stands with AI and get 3 quick wins you can implement today. 
              Takes 10 minutes. No sales pitch.
            </p>
          </div>
        </div>
      </section>

      {/* What You Get */}
      <ScrollFade>
        <section className="py-24 bg-[--color-surface]">
          <div className="mx-auto max-w-6xl px-4">
            <h2 className="text-center font-bold text-3xl text-[--color-primary] sm:text-4xl">
              What You&rsquo;ll Get
            </h2>
            <div className="mt-14 grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
              {[
                {
                  icon: "📊",
                  title: "Your AI Readiness Score",
                  desc: "Instant score from 0-100 showing exactly where you stand compared to other businesses your size.",
                },
                {
                  icon: "💪",
                  title: "Strengths & Weaknesses",
                  desc: "Clear breakdown of what you're already doing well and where the biggest opportunities lie.",
                },
                {
                  icon: "🎯",
                  title: "3 Quick Wins",
                  desc: "Specific actions you can take this week to start seeing results — no AI required.",
                },
                {
                  icon: "🗺️",
                  title: "Recommendations",
                  desc: "Tailored next steps based on your score, including whether a Revenue Recovery Audit makes sense.",
                },
              ].map((item) => (
                <div
                  key={item.title}
                  className="rounded-2xl border border-gray-200 bg-white p-8 text-center transition-all duration-300 hover:-translate-y-1 hover:border-[--color-accent]/30 hover:shadow-lg"
                >
                  <div className="text-4xl">{item.icon}</div>
                  <h3 className="mt-4 font-semibold text-lg text-[--color-primary]">{item.title}</h3>
                  <p className="mt-2 text-sm text-[--color-muted] leading-relaxed">{item.desc}</p>
                </div>
              ))}
            </div>
          </div>
        </section>
      </ScrollFade>

      {/* Assessment Placeholder */}
      <ScrollFade>
        <section className="py-24 bg-white">
          <div className="mx-auto max-w-4xl px-4">
            <div className="rounded-3xl border border-[--color-accent]/30 bg-gradient-to-br from-[--color-accent]/5 to-white p-8 text-center shadow-lg sm:p-12">
              <h2 className="font-bold text-3xl text-[--color-primary]">
                AI Readiness Assessment
              </h2>
              <p className="mt-4 text-lg text-[--color-muted]">
                Coming Soon
              </p>
              <p className="mx-auto mt-4 max-w-2xl text-[--color-text]">
                Our intelligent assessment tool is being finalized. In the meantime, 
                book your free audit call below where we&rsquo;ll go through the assessment 
                together and you&rsquo;ll get your score plus recommendations immediately.
              </p>
              <div className="mt-8">
                <Link
                  href="/book-demo"
                  className="inline-block rounded-full bg-[--color-accent] px-8 py-4 text-lg font-semibold text-white shadow-xl shadow-[--color-accent]/30 transition-all duration-300 hover:scale-105 hover:bg-[--color-accent-hover]"
                >
                  Book Your Free Audit Call →
                </Link>
              </div>
            </div>
          </div>
        </section>
      </ScrollFade>

      {/* How It Works */}
      <ScrollFade>
        <section className="py-24 bg-[--color-surface]">
          <div className="mx-auto max-w-6xl px-4">
            <h2 className="text-center font-bold text-3xl text-[--color-primary] sm:text-4xl">
              How It Works
            </h2>
            <div className="mt-14 grid gap-8 sm:grid-cols-3">
              {[
                {
                  step: "1",
                  title: "10-Minute Assessment",
                  desc: "Answer questions about your current processes, tools, and pain points. No technical jargon — plain business questions.",
                },
                {
                  step: "2",
                  title: "Instant Score & Report",
                  desc: "Get your readiness score immediately plus a detailed breakdown of strengths, weaknesses, and opportunities.",
                },
                {
                  step: "3",
                  title: "Take Action",
                  desc: "Implement the 3 quick wins right away. Decide if you want to upgrade to a full Revenue Recovery Audit for £ figures.",
                },
              ].map((item) => (
                <div key={item.step} className="text-center">
                  <div className="mx-auto flex h-12 w-12 items-center justify-center rounded-xl bg-[--color-accent] text-lg font-bold text-white">
                    {item.step}
                  </div>
                  <h3 className="mt-6 font-semibold text-lg text-[--color-primary]">{item.title}</h3>
                  <p className="mt-3 text-sm text-[--color-muted] leading-relaxed">{item.desc}</p>
                </div>
              ))}
            </div>
          </div>
        </section>
      </ScrollFade>

      {/* Upgrade Path */}
      <ScrollFade>
        <section className="py-24 bg-white">
          <div className="mx-auto max-w-4xl px-4 text-center">
            <h2 className="font-bold text-3xl text-[--color-primary] sm:text-4xl">
              Want the Full Picture?
            </h2>
            <p className="mt-6 text-lg text-[--color-muted]">
              The free audit shows you <em>where</em> your opportunities are. 
              The Revenue Recovery Audit shows you <em>exactly how much</em> those opportunities are worth in £.
            </p>
            
            <div className="mx-auto mt-12 max-w-2xl rounded-2xl border border-[--color-primary]/20 bg-[--color-primary]/5 p-8">
              <h3 className="font-bold text-xl text-[--color-primary]">Revenue Recovery Audit — £297</h3>
              <ul className="mt-4 space-y-2 text-left text-sm text-[--color-text]">
                <li>• 60-90 minute deep dive with Manny (ACCA qualified)</li>
                <li>• P&L analysis of your current operational costs</li>
                <li>• Exact £ figures attached to every revenue leak</li>
                <li>• Professional Revenue Recovery Report within 48hrs</li>
                <li>• ROI projections and priority implementation roadmap</li>
              </ul>
              <div className="mt-6">
                <Link
                  href="/revenue-recovery"
                  className="inline-block rounded-full bg-[--color-primary] px-8 py-3 font-semibold text-white shadow-lg transition hover:bg-[--color-primary]/90"
                >
                  Book Revenue Recovery Audit →
                </Link>
              </div>
            </div>
          </div>
        </section>
      </ScrollFade>

      {/* Why Free */}
      <ScrollFade>
        <section className="py-24 bg-[--color-surface]">
          <div className="mx-auto max-w-4xl px-4 text-center">
            <h2 className="font-bold text-3xl text-[--color-primary] sm:text-4xl">
              Why Is This Free?
            </h2>
            <div className="mt-12 grid gap-8 sm:grid-cols-2">
              <div className="rounded-2xl border border-gray-200 bg-white p-6">
                <h3 className="font-semibold text-lg text-[--color-primary]">Quality Over Quantity</h3>
                <p className="mt-3 text-sm text-[--color-muted]">
                  We&rsquo;d rather have 10 businesses that are genuinely ready for AI than 100 that aren&rsquo;t. 
                  This audit helps us both figure out if we&rsquo;re a good fit.
                </p>
              </div>
              <div className="rounded-2xl border border-gray-200 bg-white p-6">
                <h3 className="font-semibold text-lg text-[--color-primary]">Prove Our Expertise</h3>
                <p className="mt-3 text-sm text-[--color-muted]">
                  Most consultants talk in vague promises. We show you specific insights about your business 
                  before you pay us anything.
                </p>
              </div>
            </div>
          </div>
        </section>
      </ScrollFade>
    </>
  );
}