import type { Metadata } from "next";
import Link from "next/link";
import { CTA } from "@/components/CTA";

export const metadata: Metadata = {
  title: "AI Receptionist for Estate Agents",
  description:
    "AI receptionist for estate agents. Handle viewing requests, qualify buyers, and book valuations automatically. Voice AI built for UK letting and sales agents.",
  keywords: [
    "voice AI for estate agents",
    "AI receptionist estate agents UK",
    "automated call handling estate agents",
  ],
};

export default function EstateAgents() {
  return (
    <>
      <section className="mx-auto max-w-6xl px-4 pb-20 pt-24">
        <div className="mx-auto max-w-3xl">
          <p className="text-sm font-medium uppercase tracking-wider text-[--color-accent]">
            AI for Estate Agents
          </p>
          <h1 className="mt-4 text-4xl font-bold tracking-tight sm:text-5xl">
            Your negotiators are showing properties. The phone keeps ringing.
          </h1>
          <p className="mt-6 text-lg text-[--color-muted]">
            Every missed call is a potential instruction lost. A viewing not
            booked. A valuation that went to the agent down the road. Your AI
            receptionist handles the phones while your team handles the deals.
          </p>
          <div className="mt-8">
            <Link
              href="/book-demo"
              className="rounded-full bg-[--color-accent] px-8 py-3.5 font-medium text-white transition hover:bg-[--color-accent-hover]"
            >
              Book a 15-min demo →
            </Link>
          </div>
        </div>

        <div className="mx-auto mt-16 max-w-3xl">
          <h2 className="text-2xl font-bold">What the AI handles</h2>
          <div className="mt-8 space-y-6">
            {[
              {
                title: "Viewing requests",
                desc: "Caller wants to view a property? The AI checks availability, books them in, and sends confirmation. Your negotiator just shows up.",
              },
              {
                title: "Buyer qualification",
                desc: "Budget, chain status, mortgage agreement in principle — the AI asks the right questions so your team only spends time on serious buyers.",
              },
              {
                title: "Valuation bookings",
                desc: "Homeowner wants a valuation? The AI books the appointment, captures the property details, and adds it to your pipeline.",
              },
              {
                title: "Tenant enquiries",
                desc: "Application status, maintenance requests, rent queries — handled without pulling your lettings team away from revenue-generating work.",
              },
              {
                title: "After-hours coverage",
                desc: "Rightmove leads come in at 9pm. Your AI picks up. They don't call the next agent on the list.",
              },
            ].map((item, i) => (
              <div
                key={i}
                className="rounded-xl border border-[--color-border] bg-[--color-surface] p-6"
              >
                <h3 className="font-semibold">{item.title}</h3>
                <p className="mt-2 text-sm text-[--color-muted]">{item.desc}</p>
              </div>
            ))}
          </div>
        </div>

        <div className="mx-auto mt-16 max-w-3xl rounded-2xl border border-[--color-border] bg-[--color-surface] p-8">
          <h2 className="text-xl font-bold">The cost of a missed instruction</h2>
          <p className="mt-4 text-[--color-muted]">
            Average UK estate agent fee: 1.2% of sale price. On a £300,000
            property, that&rsquo;s <span className="font-semibold text-white">£3,600</span>.
            How many missed calls does it take to lose one instruction?
          </p>
          <p className="mt-4 text-[--color-muted]">
            AI Receptionist: <span className="font-semibold text-green-400">£497/month</span>.
            One extra instruction per quarter and it&rsquo;s paid for itself three times over.
          </p>
        </div>
      </section>

      <CTA headline="Never miss another instruction" />
    </>
  );
}
