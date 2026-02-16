import type { Metadata } from "next";
import Image from "next/image";
import { CTA } from "@/components/CTA";

export const metadata: Metadata = {
  title: "About",
  description:
    "Meet Manny Amoah — qualified accountant, 15 years in finance at Visa and the UK Cabinet Office. Now building AI systems that solve real problems for UK small businesses.",
};

export default function About() {
  return (
    <>
      <section className="mx-auto max-w-6xl px-4 pb-20 pt-24">
        <div className="mx-auto flex max-w-3xl flex-col items-center gap-8 md:flex-row md:gap-12">
          <Image
            src="/manny-headshot.png"
            alt="Manny Amoah"
            width={240}
            height={240}
            className="shrink-0 rounded-2xl"
          />
          <div>
            <p className="text-sm font-medium uppercase tracking-wider text-[--color-accent]">
              About
            </p>
            <h1 className="mt-4 text-3xl font-bold tracking-tight sm:text-4xl">
              I&rsquo;m Manny. I build AI systems that solve real problems.
            </h1>
          </div>
        </div>

        <div className="mx-auto mt-16 max-w-3xl space-y-6 text-[--color-muted]">
          <p>
            I spent 15 years in finance. Visa Europe. The UK Cabinet Office. The
            UK Health Security Agency. I became a qualified accountant not because
            I love spreadsheets — but because I wanted to understand how
            businesses actually work. The numbers, the operations, the
            bottlenecks.
          </p>
          <p>
            What I kept seeing was the same pattern: small businesses losing
            money to problems that technology solved years ago. Missed calls.
            Manual data entry. Evenings spent on admin instead of with family.
            Thousands of pounds leaking through cracks that nobody had time to
            fix.
          </p>
          <p>
            So I started building. AI receptionists that answer every call.
            Workflow automations that eliminate hours of manual work. Systems
            that actually pay for themselves in month one — because I understand
            the maths.
          </p>
          <p>
            I build every system myself. No outsourcing, no juniors, no offshore
            teams. When you work with Core AI Solutions, you work directly with
            me. That means you get someone who understands both the technology
            and the business case behind it.
          </p>
          <p>
            I&rsquo;m based in London and I work exclusively with UK businesses.
            Plumbers, estate agents, home service companies — people whose phone
            is their lifeline.
          </p>
          <p className="text-white font-semibold">
            If your business runs on phone calls and you&rsquo;re missing them,
            we should talk.
          </p>
        </div>
      </section>

      <CTA
        headline="Let's talk about your business"
        sub="15 minutes. No pitch. Just an honest conversation about what AI can do for you."
      />
    </>
  );
}
