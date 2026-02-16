import type { Metadata } from "next";
import { CTA } from "@/components/CTA";

export const metadata: Metadata = {
  title: "Implementation & Strategy",
  description:
    "AI implementation strategy for UK small businesses. Free audit of your current operations. We find the bottlenecks, build the solution, and train your team.",
};

export default function Implementation() {
  return (
    <>
      <section className="mx-auto max-w-6xl px-4 pb-20 pt-24">
        <div className="mx-auto max-w-3xl">
          <p className="text-sm font-medium uppercase tracking-wider text-[--color-accent]">
            Implementation & Strategy
          </p>
          <h1 className="mt-4 text-4xl font-bold tracking-tight sm:text-5xl">
            You don&rsquo;t need more tech. You need the right tech, set up properly.
          </h1>
          <p className="mt-6 text-lg text-[--color-muted]">
            Most businesses don&rsquo;t have an AI problem. They have an
            operations problem that AI can solve — if someone who understands
            business builds it.
          </p>
        </div>

        <div className="mx-auto mt-16 max-w-3xl space-y-12">
          <div>
            <h2 className="text-2xl font-bold">The process</h2>
            <div className="mt-8 space-y-8">
              {[
                {
                  step: "Free operations audit",
                  desc: "15 minutes on a call. I ask about your call volume, how leads come in, what you do with them, and where things fall through the cracks. No pitch — just diagnosis.",
                },
                {
                  step: "Recommendations & roadmap",
                  desc: "You get a clear document: here's what's costing you money, here's what AI can fix, here's the order to do it, and here's what it'll cost. No jargon.",
                },
                {
                  step: "Build & deploy",
                  desc: "I build the system. You test it. We iterate. Go live in 5 business days for standard setups, 2-3 weeks for complex operations.",
                },
                {
                  step: "Handover & training",
                  desc: "Full walkthrough. Documentation. Your team knows exactly how it works and who to call if something needs adjusting.",
                },
              ].map((item, i) => (
                <div key={i} className="flex gap-6">
                  <div className="flex h-8 w-8 shrink-0 items-center justify-center rounded-full bg-[--color-accent] text-sm font-bold">
                    {i + 1}
                  </div>
                  <div>
                    <h3 className="font-semibold">{item.step}</h3>
                    <p className="mt-1 text-[--color-muted]">{item.desc}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>

          <div>
            <h2 className="text-2xl font-bold">Why I&rsquo;m different</h2>
            <p className="mt-4 text-[--color-muted]">
              I spent 15 years in finance — at Visa, the UK Cabinet Office, and
              the UK Health Security Agency. I&rsquo;m a qualified accountant. I
              understand P&amp;L, unit economics, and ROI because I&rsquo;ve
              lived it.
            </p>
            <p className="mt-4 text-[--color-muted]">
              When I build an AI system, I&rsquo;m not thinking about the
              technology. I&rsquo;m thinking about whether it makes you money.
              If it doesn&rsquo;t pay for itself in month one, I&rsquo;ll tell
              you before we start.
            </p>
          </div>
        </div>
      </section>

      <CTA
        headline="Start with a free audit"
        sub="15 minutes. No pitch. Just an honest look at what AI can do for your business."
      />
    </>
  );
}
