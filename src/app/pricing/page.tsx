import type { Metadata } from "next";
import Link from "next/link";
import { CTA } from "@/components/CTA";

export const metadata: Metadata = {
  title: "Pricing",
  description:
    "AI receptionist pricing from £497/mo. Pays for itself if you miss just 3 calls a week. Transparent pricing, no hidden fees.",
};

const tiers = [
  {
    name: "AI Receptionist",
    price: "£497",
    desc: "Your phone gets answered. Every time.",
    features: [
      "24/7 AI call answering",
      "Lead qualification questions",
      "Appointment booking into your calendar",
      "SMS summary after every call",
      "Custom greeting & business hours",
      "Monthly performance report",
    ],
  },
  {
    name: "Receptionist + Dispatch",
    price: "£997",
    desc: "Full call handling plus job dispatch and follow-up.",
    popular: true,
    features: [
      "Everything in AI Receptionist",
      "Job dispatch to your team",
      "Automated follow-up messages",
      "CRM integration (Jobber, Housecall Pro, etc.)",
      "Multi-location support",
      "Priority support",
    ],
  },
  {
    name: "Full AI Ops",
    price: "£1,997",
    desc: "Voice AI + workflow automation + CRM. The full stack.",
    features: [
      "Everything in Receptionist + Dispatch",
      "Custom n8n workflow automation",
      "Full CRM setup & integration",
      "Lead nurture sequences",
      "Custom reporting dashboard",
      "Dedicated Slack/WhatsApp support",
      "Quarterly strategy reviews",
    ],
  },
];

export default function Pricing() {
  return (
    <>
      <section className="mx-auto max-w-6xl px-4 pb-20 pt-24">
        <div className="mx-auto max-w-3xl text-center">
          <h1 className="text-4xl font-bold tracking-tight sm:text-5xl">
            Simple pricing. No surprises.
          </h1>
          <p className="mt-4 text-lg text-[--color-muted]">
            Every plan pays for itself. Miss 5 calls a week at £200 per job?
            That&rsquo;s £4,000/month walking out the door. Our AI costs a fraction of that.
          </p>
        </div>

        <div className="mt-16 grid gap-8 sm:grid-cols-3">
          {tiers.map((tier) => (
            <div
              key={tier.name}
              className={`flex flex-col rounded-2xl border p-8 ${
                tier.popular
                  ? "border-[--color-accent] bg-[--color-accent]/5"
                  : "border-[--color-border] bg-[--color-surface]"
              }`}
            >
              {tier.popular && (
                <p className="mb-2 text-xs font-semibold uppercase text-[--color-accent]">
                  Most popular
                </p>
              )}
              <h2 className="text-xl font-bold">{tier.name}</h2>
              <p className="mt-2 text-sm text-[--color-muted]">{tier.desc}</p>
              <p className="mt-6">
                <span className="text-4xl font-bold">{tier.price}</span>
                <span className="text-[--color-muted]">/mo</span>
              </p>
              <ul className="mt-8 flex-1 space-y-3 text-sm">
                {tier.features.map((f) => (
                  <li key={f} className="flex gap-2 text-[--color-muted]">
                    <span className="text-green-400">✓</span> {f}
                  </li>
                ))}
              </ul>
              <Link
                href="/book-demo"
                className={`mt-8 block rounded-full py-3 text-center font-medium transition ${
                  tier.popular
                    ? "bg-[--color-accent] text-white hover:bg-[--color-accent-hover]"
                    : "border border-[--color-border] text-white hover:border-white"
                }`}
              >
                Book a demo →
              </Link>
            </div>
          ))}
        </div>

        {/* ROI Calculator */}
        <div className="mx-auto mt-20 max-w-2xl rounded-2xl border border-[--color-border] bg-[--color-surface] p-8 sm:p-12">
          <h2 className="text-2xl font-bold">Quick ROI check</h2>
          <div className="mt-6 space-y-4 text-[--color-muted]">
            <div className="flex justify-between border-b border-[--color-border] pb-4">
              <span>Missed calls per week</span>
              <span className="font-semibold text-white">5</span>
            </div>
            <div className="flex justify-between border-b border-[--color-border] pb-4">
              <span>Average job value</span>
              <span className="font-semibold text-white">£200</span>
            </div>
            <div className="flex justify-between border-b border-[--color-border] pb-4">
              <span>Monthly revenue lost</span>
              <span className="font-semibold text-red-400">£4,000</span>
            </div>
            <div className="flex justify-between border-b border-[--color-border] pb-4">
              <span>AI Receptionist cost</span>
              <span className="font-semibold text-green-400">£497</span>
            </div>
            <div className="flex justify-between pt-2">
              <span className="font-semibold text-white">ROI</span>
              <span className="font-bold text-green-400">8x return</span>
            </div>
          </div>
          <p className="mt-6 text-sm text-[--color-muted]">
            Even if we only capture half those missed calls, you&rsquo;re still
            getting a 4x return. The maths doesn&rsquo;t lie.
          </p>
        </div>
      </section>

      <CTA />
    </>
  );
}
