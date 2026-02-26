import type { Metadata } from "next";
import Link from "next/link";
import { CTA } from "@/components/CTA";

export const metadata: Metadata = {
  title: "Case Studies",
  description:
    "Real results from real businesses. See how Core AI Solutions builds AI systems that replace hundreds of hours of manual work.",
};

export default function CaseStudies() {
  return (
    <>
      <section className="mx-auto max-w-6xl px-4 pb-20 pt-24">
        <div className="mx-auto max-w-3xl text-center">
          <h1 className="text-4xl font-bold tracking-tight sm:text-5xl">
            Real work. Real results.
          </h1>
          <p className="mt-4 text-lg text-[--color-muted]">
            No fluff. No vanity metrics. Just what we built, how it works, and
            what it saved.
          </p>
        </div>

        <div className="mx-auto mt-16 max-w-3xl space-y-8">
          {/* Latest case study - Lead Gen Engine */}
          <Link
            href="/case-studies/lead-gen-engine"
            className="group block rounded-2xl border border-[--color-border] bg-[--color-surface] p-8 transition hover:border-[--color-accent]/50"
          >
            <div className="text-2xl text-yellow-400">★★★★★</div>
            <h2 className="mt-4 text-xl font-bold group-hover:text-[--color-accent]">
              Lead Generation & Personalisation Engine
            </h2>
            <p className="mt-2 text-[--color-muted]">
              Full-stack lead gen pipeline: 100K+ domains sourced, enriched via
              waterfall APIs, and AI-personalised at $0.006/lead.
            </p>
            <div className="mt-4 flex flex-wrap gap-3">
              <span className="rounded-full bg-[--color-surface-light] px-3 py-1 text-xs text-[--color-muted]">
                n8n Automation
              </span>
              <span className="rounded-full bg-[--color-surface-light] px-3 py-1 text-xs text-[--color-muted]">
                Lead Generation
              </span>
              <span className="rounded-full bg-[--color-surface-light] px-3 py-1 text-xs text-[--color-muted]">
                AI Personalisation
              </span>
              <span className="rounded-full bg-[--color-surface-light] px-3 py-1 text-xs text-[--color-muted]">
                Waterfall Enrichment
              </span>
            </div>
            <p className="mt-4 text-sm text-[--color-accent]">
              Read the full case study →
            </p>
          </Link>

          {/* Original case study - Lead Qualification */}
          <Link
            href="/case-studies/luke-finney"
            className="group block rounded-2xl border border-[--color-border] bg-[--color-surface] p-8 transition hover:border-[--color-accent]/50"
          >
            <div className="text-2xl text-yellow-400">★★★★★</div>
            <h2 className="mt-4 text-xl font-bold group-hover:text-[--color-accent]">
              AI-Powered Lead Qualification Engine
            </h2>
            <p className="mt-2 text-[--color-muted]">
              333 hours of manual prospect research → fully automated. 1,000
              leads qualified in hours, not weeks.
            </p>
            <div className="mt-4 flex flex-wrap gap-3">
              <span className="rounded-full bg-[--color-surface-light] px-3 py-1 text-xs text-[--color-muted]">
                n8n Automation
              </span>
              <span className="rounded-full bg-[--color-surface-light] px-3 py-1 text-xs text-[--color-muted]">
                Lead Qualification
              </span>
              <span className="rounded-full bg-[--color-surface-light] px-3 py-1 text-xs text-[--color-muted]">
                AI Research
              </span>
            </div>
            <p className="mt-4 text-sm text-[--color-accent]">
              Read the full case study →
            </p>
          </Link>
        </div>
      </section>

      <CTA />
    </>
  );
}
