import type { Metadata } from "next";
import { CTA } from "@/components/CTA";

export const metadata: Metadata = {
  title: "Case Study: Luke Finney — Lead Qualification Engine",
  description:
    "How we turned 333 hours of manual prospect research into a fully automated AI system. 1,000 leads qualified in hours, not weeks.",
};

export default function LukeFinney() {
  return (
    <>
      <section className="mx-auto max-w-3xl px-4 pb-20 pt-24">
        <p className="text-sm font-medium uppercase tracking-wider text-[--color-accent]">
          Case Study
        </p>
        <h1 className="mt-4 text-3xl font-bold tracking-tight sm:text-4xl">
          AI-Powered Lead Qualification Engine
        </h1>
        <p className="mt-4 text-lg text-[--color-muted]">
          How we built a system that qualifies 1,000 prospects automatically —
          in days, not months.
        </p>

        {/* Results bar */}
        <div className="mt-10 grid grid-cols-3 gap-4 rounded-2xl border border-[--color-border] bg-[--color-surface] p-6 text-center">
          <div>
            <p className="text-2xl font-bold">333hrs</p>
            <p className="text-xs text-[--color-muted]">Manual work saved</p>
          </div>
          <div>
            <p className="text-2xl font-bold">1,000</p>
            <p className="text-xs text-[--color-muted]">Prospects qualified</p>
          </div>
          <div>
            <p className="text-2xl font-bold">4-stage</p>
            <p className="text-xs text-[--color-muted]">AI filter</p>
          </div>
        </div>

        {/* Client */}
        <div className="mt-12">
          <h2 className="text-xl font-bold">The client</h2>
          <p className="mt-4 text-[--color-muted]">
            <strong className="text-white">Luke Finney</strong> — serial
            entrepreneur and prolific Upwork client based in Manchester, UK.
            Luke has spent over $101K hiring freelancers across 141 contracts,
            and runs B2B operations that depend on high-volume prospecting. He
            knows what good work looks like.
          </p>
        </div>

        {/* Problem */}
        <div className="mt-12">
          <h2 className="text-xl font-bold">The problem</h2>
          <p className="mt-4 text-[--color-muted]">
            Luke&rsquo;s team was manually qualifying prospects one by one. For
            every 1,000 leads, someone had to:
          </p>
          <ul className="mt-4 space-y-2 text-[--color-muted]">
            <li className="flex gap-2">
              <span className="text-red-400">✕</span> Check minimum $1M revenue (or 10+ employees, 3+ years)
            </li>
            <li className="flex gap-2">
              <span className="text-red-400">✕</span> Research if target market exceeds 100,000 companies
            </li>
            <li className="flex gap-2">
              <span className="text-red-400">✕</span> Determine if average client value was $50K+ with 50%+ margins
            </li>
            <li className="flex gap-2">
              <span className="text-red-400">✕</span> Assess whether they sold revenue-impacting solutions
            </li>
          </ul>
          <p className="mt-4 text-[--color-muted]">
            4 research tasks × 1,000 prospects = 4,000 manual checks. At 5
            minutes per check, that&rsquo;s{" "}
            <strong className="text-white">333 hours of work</strong> — over 8
            weeks of full-time labour.
          </p>
        </div>

        {/* Solution */}
        <div className="mt-12">
          <h2 className="text-xl font-bold">The solution</h2>
          <p className="mt-4 text-[--color-muted]">
            We built a fully automated lead qualification engine in n8n that
            processes 1,000 prospects through a 4-stage AI-powered filter:
          </p>
          <div className="mt-6 space-y-4">
            {[
              {
                title: "Stage 1: Revenue & Size Validation",
                desc: "Checks each company against Crunchbase, LinkedIn, and domain research to verify minimum revenue thresholds.",
              },
              {
                title: "Stage 2: Market Size Analysis",
                desc: "AI-powered contextual analysis of positioning, customer base, and industry to determine TAM of 100,000+ companies.",
              },
              {
                title: "Stage 3: Client Value & Margin Scoring",
                desc: "Researches pricing models and deal sizes to estimate whether average client value exceeds $50K with 50%+ margins.",
              },
              {
                title: "Stage 4: Revenue Impact Assessment",
                desc: "Determines whether the company sells solutions that directly impact their clients' revenue or operations.",
              },
            ].map((stage, i) => (
              <div
                key={i}
                className="rounded-xl border border-[--color-border] bg-[--color-surface] p-6"
              >
                <h3 className="font-semibold">{stage.title}</h3>
                <p className="mt-2 text-sm text-[--color-muted]">
                  {stage.desc}
                </p>
              </div>
            ))}
          </div>
          <p className="mt-6 text-[--color-muted]">
            Cost optimisation was baked in from day one — cheap checks first,
            expensive AI analysis only on prospects that pass initial filters.
          </p>
        </div>

        {/* Testimonial */}
        <div className="mt-12 rounded-2xl border border-[--color-border] bg-[--color-surface] p-8">
          <div className="text-2xl text-yellow-400">★★★★★</div>
          <blockquote className="mt-4 text-lg leading-relaxed text-gray-300">
            &ldquo;Truly exceptional — Manny did everything we needed and more.
            Excellent communication throughout and an incredible workflow
            produced in a quick timeframe. It&rsquo;s quite clear Manny has a
            solid commercial understanding which is imperative to work like
            this. Definitely my favourite freelancer on here!&rdquo;
          </blockquote>
          <div className="mt-6">
            <p className="font-semibold">Luke Finney</p>
            <p className="text-sm text-[--color-muted]">
              Founder &amp; CEO — Manchester, UK
            </p>
          </div>
          <div className="mt-3 flex flex-wrap gap-3">
            <span className="rounded-full bg-green-900/40 px-3 py-1 text-xs text-green-400">
              ✅ Verified on Upwork
            </span>
            <span className="rounded-full bg-[--color-surface-light] px-3 py-1 text-xs text-[--color-muted]">
              $101K+ spent · 141 hires · 4.9★ rating
            </span>
          </div>
        </div>
      </section>

      <CTA
        headline="Want the same for your business?"
        sub="Whether you're qualifying leads, handling calls, or automating workflows — we build AI systems that pay for themselves in month one."
      />
    </>
  );
}
