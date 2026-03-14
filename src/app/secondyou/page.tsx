import type { Metadata } from "next";
import Link from "next/link";
import { CTA } from "@/components/CTA";

export const metadata: Metadata = {
  title: "HireOnce — Your AI Employee",
  description:
    "A done-for-you AI employee that handles your calls, follows up leads, manages admin, and works 24/7 on WhatsApp. From £197/month.",
};

const STEPS = [
  {
    num: "01",
    title: "Take the AI Readiness Scorecard",
    desc: "Answer 15 quick questions about your business. We'll identify exactly where AI can save you time and money.",
  },
  {
    num: "02",
    title: "We configure your AI employee",
    desc: "We build your personalised AI assistant — connected to your WhatsApp, calendar, CRM, and workflows. Tailored to your business.",
  },
  {
    num: "03",
    title: "It starts working for you",
    desc: "Your AI employee goes live. Answering calls, following up leads, handling admin — 24/7. You focus on growth.",
  },
];

const PLANS = [
  {
    name: "Starter",
    setup: "£497",
    monthly: "£197/mo",
    desc: "Perfect for solopreneurs who need a second pair of hands.",
    features: [
      "1 AI assistant on WhatsApp",
      "FAQ handling & appointment booking",
      "Google Sheet logging",
      "Basic follow-up sequences",
      "Email support",
    ],
  },
  {
    name: "Growth",
    setup: "£997",
    monthly: "£297/mo",
    desc: "For growing businesses ready to automate operations.",
    features: [
      "Everything in Starter",
      "Lead qualification & scoring",
      "Quote follow-up automation",
      "Google Review requests",
      "Weekly performance reports",
      "Priority support",
    ],
    popular: true,
  },
  {
    name: "Scale",
    setup: "£1,997",
    monthly: "£497/mo",
    desc: "Full AI employee suite for established businesses.",
    features: [
      "Everything in Growth",
      "Multi-channel (WhatsApp + Email + SMS)",
      "CRM integration",
      "Invoice & payment follow-ups",
      "Custom workflow automation",
      "Dedicated account manager",
      "Monthly strategy calls",
    ],
  },
];

const TASKS = [
  { icon: "📞", title: "Answer calls", desc: "Missed call? AI texts back in 10 seconds and books the appointment." },
  { icon: "📧", title: "Follow up leads", desc: "Automatic follow-ups on day 3, 7, and 14. Politely persistent." },
  { icon: "📅", title: "Book appointments", desc: "Syncs with your calendar. Sends reminders. Handles rescheduling." },
  { icon: "⭐", title: "Get reviews", desc: "Requests Google reviews after every completed job. Automatically." },
  { icon: "📊", title: "Generate reports", desc: "Weekly summaries compiled overnight, in your inbox Monday 7am." },
  { icon: "💬", title: "Handle enquiries", desc: "Answers FAQs on WhatsApp 24/7. Escalates to you when needed." },
];

export default function HireOnce() {
  return (
    <>
      {/* Hero */}
      <section className="mx-auto max-w-6xl px-4 pb-20 pt-28">
        <div className="mx-auto max-w-3xl text-center">
          <p className="text-sm font-medium uppercase tracking-wider text-[--color-accent]">
            HireOnce
          </p>
          <h1 className="mt-4 font-[family-name:var(--font-playfair)] text-4xl font-bold tracking-tight sm:text-6xl">
            Meet HireOnce.
            <br />
            <span className="text-[--color-muted]">Your AI Employee.</span>
          </h1>
          <p className="mx-auto mt-6 max-w-2xl text-lg text-[--color-muted] sm:text-xl">
            A done-for-you AI assistant that connects to your WhatsApp, handles
            calls, follows up leads, and manages your admin — 24 hours a day, 7
            days a week. For less than the cost of a part-time hire.
          </p>
          <div className="mt-10 flex flex-col items-center gap-4 sm:flex-row sm:justify-center">
            <Link
              href="/book-demo"
              className="rounded-full bg-[--color-accent] px-8 py-3 font-medium text-white transition hover:bg-[--color-accent-hover]"
            >
              Book a Call →
            </Link>
            <Link
              href="https://mannycorea.gumroad.com/l/ai-ready-scorecard"
              className="rounded-full border border-[--color-border] px-8 py-3 font-medium text-[--color-muted] transition hover:border-white hover:text-white"
            >
              Take the Free Scorecard
            </Link>
          </div>
        </div>
      </section>

      {/* What it does */}
      <section className="border-y border-white/5 bg-[--color-surface] py-24">
        <div className="mx-auto max-w-6xl px-4">
          <p className="text-center text-sm font-medium uppercase tracking-wider text-[--color-accent]">
            What your AI employee handles
          </p>
          <h2 className="mt-4 text-center font-[family-name:var(--font-playfair)] text-3xl font-bold tracking-tight sm:text-4xl">
            Everything you wish you had time for
          </h2>
          <div className="mt-14 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
            {TASKS.map((task) => (
              <div
                key={task.title}
                className="rounded-2xl border border-white/5 bg-[#0e0e10] p-6 transition hover:border-[--color-accent]/30"
              >
                <span className="text-3xl">{task.icon}</span>
                <h3 className="mt-4 text-lg font-semibold">{task.title}</h3>
                <p className="mt-2 text-sm text-[--color-muted]">{task.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* How it works */}
      <section className="py-24">
        <div className="mx-auto max-w-4xl px-4">
          <p className="text-center text-sm font-medium uppercase tracking-wider text-[--color-accent]">
            How it works
          </p>
          <h2 className="mt-4 text-center font-[family-name:var(--font-playfair)] text-3xl font-bold tracking-tight sm:text-4xl">
            Live in 5 days. Three simple steps.
          </h2>
          <div className="mt-14 space-y-8">
            {STEPS.map((step) => (
              <div
                key={step.num}
                className="flex gap-6 rounded-2xl border border-white/5 bg-[--color-surface] p-8 transition hover:border-[--color-accent]/30"
              >
                <span className="text-4xl font-bold text-[--color-accent]/30">
                  {step.num}
                </span>
                <div>
                  <h3 className="text-xl font-semibold">{step.title}</h3>
                  <p className="mt-2 text-[--color-muted]">{step.desc}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Pricing */}
      <section className="border-y border-white/5 bg-[--color-surface] py-24">
        <div className="mx-auto max-w-6xl px-4">
          <p className="text-center text-sm font-medium uppercase tracking-wider text-[--color-accent]">
            Pricing
          </p>
          <h2 className="mt-4 text-center font-[family-name:var(--font-playfair)] text-3xl font-bold tracking-tight sm:text-4xl">
            Less than a part-time hire. More than a full-time team.
          </h2>
          <div className="mt-14 grid gap-6 sm:grid-cols-3">
            {PLANS.map((plan) => (
              <div
                key={plan.name}
                className={`relative rounded-2xl border p-8 transition ${
                  plan.popular
                    ? "border-[--color-accent] bg-[#0e0e10]"
                    : "border-white/5 bg-[#0e0e10] hover:border-white/10"
                }`}
              >
                {plan.popular && (
                  <span className="absolute -top-3 left-1/2 -translate-x-1/2 rounded-full bg-[--color-accent] px-4 py-1 text-xs font-semibold text-white">
                    Most Popular
                  </span>
                )}
                <h3 className="text-xl font-bold">{plan.name}</h3>
                <p className="mt-2 text-sm text-[--color-muted]">{plan.desc}</p>
                <div className="mt-6">
                  <span className="text-3xl font-bold">{plan.setup}</span>
                  <span className="text-[--color-muted]"> setup</span>
                </div>
                <div className="mt-1">
                  <span className="text-lg font-semibold text-[--color-accent]">
                    + {plan.monthly}
                  </span>
                </div>
                <ul className="mt-6 space-y-3">
                  {plan.features.map((f) => (
                    <li key={f} className="flex gap-2 text-sm text-[--color-muted]">
                      <span className="text-green-400">✓</span> {f}
                    </li>
                  ))}
                </ul>
                <Link
                  href="/book-demo"
                  className={`mt-8 block rounded-full py-3 text-center text-sm font-medium transition ${
                    plan.popular
                      ? "bg-[--color-accent] text-white hover:bg-[--color-accent-hover]"
                      : "border border-[--color-border] text-[--color-muted] hover:border-white hover:text-white"
                  }`}
                >
                  Get Started →
                </Link>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Trust */}
      <section className="py-24">
        <div className="mx-auto max-w-3xl px-4 text-center">
          <h2 className="font-[family-name:var(--font-playfair)] text-3xl font-bold tracking-tight sm:text-4xl">
            Built by an ACCA-qualified accountant.
            <br />
            <span className="text-[--color-muted]">Not a tech bro.</span>
          </h2>
          <p className="mt-6 text-lg text-[--color-muted]">
            I spent 6+ years managing £100M+ budgets at the Cabinet Office and
            UK Health Security Agency. Every AI system I build gets measured in £
            saved and hours recovered. If it doesn&rsquo;t pay for itself in 30
            days, something&rsquo;s wrong.
          </p>
        </div>
      </section>

      <CTA
        headline="Ready to meet your AI employee?"
        sub="Book a 15-minute call. We'll show you exactly what HireOnce can handle for your business."
      />
    </>
  );
}
