import Link from "next/link";
import Image from "next/image";
import { VapiWidget } from "@/components/VapiWidget";
import { Testimonial } from "@/components/Testimonial";
import { CTA } from "@/components/CTA";

export default function Home() {
  return (
    <>
      {/* Hero */}
      <section className="relative overflow-hidden">
        <div className="mx-auto max-w-6xl px-4 pb-20 pt-24 sm:pt-32">
          <div className="mx-auto max-w-3xl text-center">
            <p className="text-sm font-medium uppercase tracking-wider text-[--color-accent]">
              AI receptionist for UK businesses
            </p>
            <h1 className="mt-4 text-4xl font-bold tracking-tight sm:text-6xl">
              Stop losing £2,000/month
              <br />
              to missed calls.
            </h1>
            <p className="mt-6 text-lg text-[--color-muted] sm:text-xl">
              Your AI receptionist answers every call, qualifies every lead, and
              books every job — while you&rsquo;re on-site. 24/7. No staff needed.
            </p>
            <div className="mt-8 flex flex-col items-center gap-4 sm:flex-row sm:justify-center">
              <Link
                href="/book-demo"
                className="rounded-full bg-[--color-accent] px-8 py-3.5 font-medium text-white transition hover:bg-[--color-accent-hover]"
              >
                Book a 15-min demo →
              </Link>
              <Link
                href="#demo"
                className="rounded-full border border-[--color-border] px-8 py-3.5 font-medium text-[--color-muted] transition hover:border-white hover:text-white"
              >
                🔊 Hear it handle a real call
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Social proof bar */}
      <section className="border-y border-[--color-border] bg-[--color-surface]">
        <div className="mx-auto max-w-4xl px-4 py-6 text-center text-sm text-[--color-muted]">
          Now onboarding founding members · Built for plumbers, estate agents,
          and home service businesses across the UK
        </div>
      </section>

      {/* Live demo */}
      <section id="demo" className="border-b border-[--color-border]">
        <div className="mx-auto max-w-3xl px-4 py-20 text-center">
          <h2 className="text-3xl font-bold tracking-tight sm:text-4xl">
            Hear your AI receptionist. Right now.
          </h2>
          <p className="mt-4 text-[--color-muted]">
            No signup. No sales pitch. Just press the button and talk.
          </p>
          <div className="mt-10">
            <VapiWidget />
          </div>
        </div>
      </section>

      {/* Problem → Solution */}
      <section className="border-b border-[--color-border]">
        <div className="mx-auto grid max-w-6xl gap-12 px-4 py-20 md:grid-cols-2">
          <div>
            <h3 className="text-sm font-semibold uppercase tracking-wider text-red-400">
              The problem
            </h3>
            <h2 className="mt-4 text-2xl font-bold sm:text-3xl">
              You&rsquo;re missing calls. Losing leads. Working evenings.
            </h2>
            <ul className="mt-6 space-y-4 text-[--color-muted]">
              <li className="flex gap-3">
                <span className="text-red-400">✕</span> Phone rings while you&rsquo;re under a boiler
              </li>
              <li className="flex gap-3">
                <span className="text-red-400">✕</span> Voicemails pile up — half never get returned
              </li>
              <li className="flex gap-3">
                <span className="text-red-400">✕</span> Evenings spent calling people back instead of resting
              </li>
              <li className="flex gap-3">
                <span className="text-red-400">✕</span> £200 jobs walking to the competitor who answered first
              </li>
            </ul>
          </div>
          <div>
            <h3 className="text-sm font-semibold uppercase tracking-wider text-green-400">
              The solution
            </h3>
            <h2 className="mt-4 text-2xl font-bold sm:text-3xl">
              Your AI answers in 0.5 seconds. Qualifies. Books. Texts you.
            </h2>
            <ul className="mt-6 space-y-4 text-[--color-muted]">
              <li className="flex gap-3">
                <span className="text-green-400">✓</span> Every call answered instantly, 24/7/365
              </li>
              <li className="flex gap-3">
                <span className="text-green-400">✓</span> Asks the right qualifying questions
              </li>
              <li className="flex gap-3">
                <span className="text-green-400">✓</span> Books real leads straight into your calendar
              </li>
              <li className="flex gap-3">
                <span className="text-green-400">✓</span> Texts you the details — you decide if it&rsquo;s worth your time
              </li>
            </ul>
          </div>
        </div>
      </section>

      {/* How it works */}
      <section className="border-b border-[--color-border]">
        <div className="mx-auto max-w-6xl px-4 py-20">
          <h2 className="text-center text-3xl font-bold tracking-tight sm:text-4xl">
            Live in 3 steps
          </h2>
          <div className="mt-12 grid gap-8 sm:grid-cols-3">
            {[
              {
                step: "1",
                title: "Discovery call",
                desc: "15 minutes. We learn your business, your callers, your booking process.",
              },
              {
                step: "2",
                title: "We build your agent",
                desc: "Custom AI receptionist trained on your business. Ready in 5 days.",
              },
              {
                step: "3",
                title: "Live on your phones",
                desc: "Calls forwarded to your AI. You get texts with qualified leads.",
              },
            ].map((item) => (
              <div
                key={item.step}
                className="rounded-2xl border border-[--color-border] bg-[--color-surface] p-8"
              >
                <div className="flex h-10 w-10 items-center justify-center rounded-full bg-[--color-accent] text-sm font-bold">
                  {item.step}
                </div>
                <h3 className="mt-4 text-lg font-semibold">{item.title}</h3>
                <p className="mt-2 text-sm text-[--color-muted]">
                  {item.desc}
                </p>
              </div>
            ))}
          </div>
          <div className="mt-10 text-center">
            <Link
              href="/book-demo"
              className="rounded-full bg-[--color-accent] px-6 py-3 font-medium text-white transition hover:bg-[--color-accent-hover]"
            >
              Book your discovery call →
            </Link>
          </div>
        </div>
      </section>

      {/* Industries */}
      <section className="border-b border-[--color-border]">
        <div className="mx-auto max-w-6xl px-4 py-20">
          <h2 className="text-center text-3xl font-bold tracking-tight">
            Built for businesses that live on the phone
          </h2>
          <div className="mt-12 grid gap-6 sm:grid-cols-3">
            {[
              {
                title: "Plumbers & Tradespeople",
                desc: "Never miss an emergency call-out again. AI qualifies the job, books the slot, texts you the address.",
                href: "/industries/plumbers",
              },
              {
                title: "Estate Agents",
                desc: "Handle viewing requests, qualify buyers, and book valuations — without hiring another negotiator.",
                href: "/industries/estate-agents",
              },
              {
                title: "Home Services",
                desc: "Cleaners, electricians, landscapers. If your phone is your lifeline, we automate the front desk.",
                href: "/industries/home-services",
              },
            ].map((item) => (
              <Link
                key={item.href}
                href={item.href}
                className="group rounded-2xl border border-[--color-border] bg-[--color-surface] p-8 transition hover:border-[--color-accent]/50"
              >
                <h3 className="text-lg font-semibold group-hover:text-[--color-accent]">
                  {item.title}
                </h3>
                <p className="mt-2 text-sm text-[--color-muted]">
                  {item.desc}
                </p>
                <p className="mt-4 text-sm text-[--color-accent]">
                  Learn more →
                </p>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* Founder */}
      <section className="border-b border-[--color-border]">
        <div className="mx-auto flex max-w-6xl flex-col items-center gap-8 px-4 py-20 md:flex-row md:gap-16">
          <div className="shrink-0">
            <Image
              src="/manny-headshot.png"
              alt="Manny Amoah — Founder, Core AI Solutions"
              width={200}
              height={200}
              className="rounded-2xl"
            />
          </div>
          <div>
            <h2 className="text-2xl font-bold sm:text-3xl">
              I build every system myself. No outsourcing.
            </h2>
            <p className="mt-4 text-[--color-muted]">
              I&rsquo;m Manny. 15 years in finance at Visa and the UK Cabinet Office.
              Qualified accountant. I became one to understand how businesses
              actually work — the numbers, the operations, the bottlenecks.
            </p>
            <p className="mt-4 text-[--color-muted]">
              Now I build AI systems that solve the problems I kept seeing:
              missed calls, manual admin, wasted evenings. You work directly
              with me. No juniors, no offshore teams, no runaround.
            </p>
            <Link
              href="/about"
              className="mt-4 inline-block text-sm text-[--color-accent] hover:underline"
            >
              Read my full story →
            </Link>
          </div>
        </div>
      </section>

      {/* Pricing preview */}
      <section className="border-b border-[--color-border]">
        <div className="mx-auto max-w-4xl px-4 py-20 text-center">
          <h2 className="text-3xl font-bold tracking-tight">
            Pricing that pays for itself
          </h2>
          <p className="mt-4 text-[--color-muted]">
            Miss 5 calls a week at £200 per job? That&rsquo;s £4,000/month lost.
            Our AI costs a fraction of that.
          </p>
          <div className="mt-10 grid gap-6 sm:grid-cols-3">
            {[
              { name: "AI Receptionist", price: "£497", period: "/mo" },
              { name: "Receptionist + Dispatch", price: "£997", period: "/mo", popular: true },
              { name: "Full AI Ops", price: "£1,997", period: "/mo" },
            ].map((tier) => (
              <div
                key={tier.name}
                className={`rounded-2xl border p-6 ${
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
                <h3 className="font-semibold">{tier.name}</h3>
                <p className="mt-2">
                  <span className="text-3xl font-bold">{tier.price}</span>
                  <span className="text-[--color-muted]">{tier.period}</span>
                </p>
              </div>
            ))}
          </div>
          <Link
            href="/pricing"
            className="mt-8 inline-block text-sm text-[--color-accent] hover:underline"
          >
            See full pricing breakdown →
          </Link>
        </div>
      </section>

      {/* Testimonial */}
      <Testimonial />

      {/* CTA */}
      <CTA />
    </>
  );
}
