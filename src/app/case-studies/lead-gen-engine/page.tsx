import type { Metadata } from "next";
import { CTA } from "@/components/CTA";

export const metadata: Metadata = {
  title: "Case Study: Luke Finney — Lead Generation & Personalisation Engine",
  description:
    "How we built a 3-workflow pipeline that processes 100K+ domains, enriches leads through a waterfall API system, and generates natural AI personalisation at $0.006/lead.",
};

export default function LeadGenEngine() {
  return (
    <>
      <section className="mx-auto max-w-3xl px-4 pb-20 pt-24">
        <p className="text-sm font-medium uppercase tracking-wider text-[--color-accent]">
          Case Study
        </p>
        <h1 className="mt-4 text-3xl font-bold tracking-tight sm:text-4xl">
          Lead Generation & Personalisation Engine
        </h1>
        <p className="mt-4 text-lg text-[--color-muted]">
          How we built a full-stack lead generation system that sources,
          enriches, and personalises 100K+ prospects automatically.
        </p>

        {/* Results bar */}
        <div className="mt-10 grid grid-cols-3 gap-4 rounded-2xl border border-[--color-border] bg-[--color-surface] p-6 text-center">
          <div>
            <p className="text-2xl font-bold">100K+</p>
            <p className="text-xs text-[--color-muted]">Domains processable</p>
          </div>
          <div>
            <p className="text-2xl font-bold">$0.006</p>
            <p className="text-xs text-[--color-muted]">Cost per lead</p>
          </div>
          <div>
            <p className="text-2xl font-bold">3-stage</p>
            <p className="text-xs text-[--color-muted]">Pipeline system</p>
          </div>
        </div>

        {/* Client */}
        <div className="mt-12">
          <h2 className="text-xl font-bold">The client</h2>
          <p className="mt-4 text-[--color-muted]">
            <strong className="text-white">Luke Finney</strong> (Peachy Leads)
            — serial entrepreneur running a B2B lead generation business that
            requires high-volume, highly-personalised outreach at scale. After
            the success of the lead qualification engine, Luke needed a complete
            end-to-end system: from finding companies to enriching contact data
            to generating natural-sounding personalisation fields.
          </p>
        </div>

        {/* Problem */}
        <div className="mt-12">
          <h2 className="text-xl font-bold">The problem</h2>
          <p className="mt-4 text-[--color-muted]">
            Manual lead generation and personalisation doesn&rsquo;t scale.
            Luke&rsquo;s team needed a system that could:
          </p>
          <ul className="mt-4 space-y-2 text-[--color-muted]">
            <li className="flex gap-2">
              <span className="text-red-400">✕</span> Find companies actively
              running Meta/Google ads (the perfect ICP)
            </li>
            <li className="flex gap-2">
              <span className="text-red-400">✕</span> Enrich 100K+ domains with
              verified emails and phone numbers
            </li>
            <li className="flex gap-2">
              <span className="text-red-400">✕</span> Research each
              prospect&rsquo;s target market and what their customers need
            </li>
            <li className="flex gap-2">
              <span className="text-red-400">✕</span> Generate personalisation
              that reads naturally, not robotic
            </li>
            <li className="flex gap-2">
              <span className="text-red-400">✕</span> Do all of this
              cost-efficiently at massive scale
            </li>
          </ul>
          <p className="mt-4 text-[--color-muted]">
            Manual research for this volume would cost{" "}
            <strong className="text-white">hundreds of hours</strong> and
            thousands of dollars. Even outsourced VAs couldn&rsquo;t match the
            speed, consistency, or cost structure needed.
          </p>
        </div>

        {/* Solution */}
        <div className="mt-12">
          <h2 className="text-xl font-bold">The solution</h2>
          <p className="mt-4 text-[--color-muted]">
            We built a 3-workflow n8n pipeline that processes 100K+ domains
            through intelligent sourcing, waterfall enrichment, and AI-powered
            personalisation:
          </p>
          <div className="mt-6 space-y-4">
            {[
              {
                title: "Workflow 1: Adyntel Lead Sourcing",
                desc: "Automatically identifies companies actively running Meta and Google ads — the perfect signal for high-intent B2B prospects. Processes domains in batches with built-in error handling.",
              },
              {
                title: "Workflow 2: Enrichment Waterfall",
                desc: "Smart API routing through Blitz API → Icypeas → AnyMailFinder. Finds verified emails and phone numbers while minimising API costs. Includes ICP scoring (7+ threshold) to filter quality leads.",
              },
              {
                title: "Workflow 3: AI Personalisation Engine",
                desc: "Scrapes each prospect's website with AI to identify their target market (max 5 words) and what their customers need (max 8 words). Output slots directly into cold email templates and reads naturally.",
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
            The entire system includes 4 Google Sheet templates for pipeline
            management, batch processing with resume capability, comprehensive
            documentation (Setup Guide, How-To, Quick Reference,
            Troubleshooting), and a full video walkthrough. Luke&rsquo;s team
            can now run everything independently.
          </p>
          <p className="mt-4 text-[--color-muted]">
            <strong className="text-white">Cost efficiency:</strong> ~$60 per
            10K leads ($0.006/lead) vs. hundreds of hours of manual research.
            The 3-workflow architecture makes it easy to debug, maintain, and
            extend as needs evolve.
          </p>
        </div>

        {/* Testimonial */}
        <div className="mt-12 rounded-2xl border border-[--color-border] bg-[--color-surface] p-8">
          <div className="text-2xl text-yellow-400">★★★★★</div>
          <blockquote className="mt-4 text-lg leading-relaxed text-gray-300">
            &ldquo;As ever, Manny has done a fantastic job with our n8n build.
            Superb communication throughout, always provides excellent advice
            and fully understood our needs. Would heavily recommend
            Manny!&rdquo;
          </blockquote>
          <div className="mt-6">
            <p className="font-semibold">Luke Finney</p>
            <p className="text-sm text-[--color-muted]">
              Founder, Peachy Leads — Manchester, UK
            </p>
          </div>
          <div className="mt-3 flex flex-wrap gap-3">
            <span className="rounded-full bg-green-900/40 px-3 py-1 text-xs text-green-400">
              ✅ Verified on Upwork
            </span>
            <span className="rounded-full bg-[--color-surface-light] px-3 py-1 text-xs text-[--color-muted]">
              $750 (Milestone 3) · 5.0★ rating
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
