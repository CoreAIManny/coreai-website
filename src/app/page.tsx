import Link from "next/link";
import Image from "next/image";
import { VapiWidget } from "@/components/VapiWidget";
import { Testimonial } from "@/components/Testimonial";
import { CTA } from "@/components/CTA";
import { ScrollFade } from "@/components/ScrollFade";
import { GradientLines } from "@/components/GradientLines";

export default function Home() {
  return (
    <>
      {/* Hero */}
      <section className="relative overflow-hidden">
        {/* Background gradient swoosh */}
        <div className="pointer-events-none absolute inset-0">
          <div className="absolute -right-1/4 -top-1/4 h-[600px] w-[600px] rounded-full bg-[--color-accent]/8 blur-[120px]" />
          <div className="absolute -left-1/4 top-1/4 h-[400px] w-[400px] rounded-full bg-purple-500/5 blur-[100px]" />
        </div>

        <div className="mx-auto max-w-6xl px-4 pb-16 pt-32 sm:pt-40">
          <div className="mx-auto max-w-4xl text-center">
            {/* Trust badge pill */}
            <div className="mb-6 inline-flex items-center gap-2 rounded-full border border-[--color-accent]/30 bg-[--color-accent]/10 px-4 py-1.5 text-sm text-[--color-accent]">
              <span className="inline-block h-1.5 w-1.5 rounded-full bg-[--color-accent] animate-pulse" />
              Now onboarding founding members
            </div>

            <h1 className="font-[family-name:var(--font-playfair)] text-5xl font-bold tracking-tight sm:text-7xl">
              Stop losing £2,000/month
              <br />
              <span className="text-[--color-muted]">to missed calls.</span>
            </h1>
            <p className="mx-auto mt-6 max-w-2xl text-lg text-[--color-muted] sm:text-xl">
              Your AI receptionist answers every call, qualifies every lead, and
              books every job — while you&rsquo;re on-site. 24/7. No staff needed.
            </p>
            <div className="mt-10 flex flex-col items-center gap-4 sm:flex-row sm:justify-center">
              <Link
                href="/book-demo"
                className="rounded-full bg-[--color-accent] px-8 py-3.5 font-medium text-white shadow-lg shadow-[--color-accent]/25 transition hover:bg-[--color-accent-hover] hover:shadow-xl hover:shadow-[--color-accent]/30"
              >
                Book a 15-min demo →
              </Link>
            </div>

            {/* Voice AI widget — right in the hero */}
            <div className="mt-14">
              <p className="mb-4 text-xs font-semibold uppercase tracking-[0.2em] text-[--color-accent]">
                Try it right now
              </p>
              <VapiWidget />
            </div>
          </div>
        </div>
      </section>

      {/* Stats bar */}
      <section className="border-y border-white/5">
        <div className="mx-auto grid max-w-4xl grid-cols-3 divide-x divide-white/5 px-4 py-6">
          {[
            { value: "24/7", label: "Coverage" },
            { value: "0.5s", label: "Answer time" },
            { value: "£2,000+", label: "Saved per month" },
          ].map((s) => (
            <div key={s.label} className="text-center">
              <div className="text-xl font-bold text-white sm:text-2xl">{s.value}</div>
              <div className="mt-1 text-xs text-[--color-muted] sm:text-sm">{s.label}</div>
            </div>
          ))}
        </div>
      </section>

      {/* Logo trust strip */}
      <section className="border-b border-white/5 bg-[--color-surface]">
        <div className="mx-auto max-w-4xl px-4 py-6 text-center">
          <p className="text-xs uppercase tracking-widest text-[--color-muted]/60">
            Built for UK businesses
          </p>
          <div className="mt-4 flex items-center justify-center gap-8 text-[--color-muted]/30">
            {["Plumbing", "Property", "Home Services", "Healthcare", "Legal"].map((name) => (
              <span key={name} className="text-sm font-medium tracking-wide">{name}</span>
            ))}
          </div>
        </div>
      </section>

      {/* Problem → Solution */}
      <section className="relative overflow-hidden">
        <GradientLines className="bottom-0" flip />
        <ScrollFade>
          <div className="mx-auto grid max-w-6xl gap-12 px-4 py-24 md:grid-cols-2 md:gap-16">
            <div className="rounded-2xl border border-white/5 bg-[--color-surface] p-8 transition hover:border-red-500/20 sm:p-10">
              <p className="text-xs font-semibold uppercase tracking-[0.2em] text-red-400">
                The problem
              </p>
              <h2 className="mt-4 font-[family-name:var(--font-playfair)] text-2xl font-bold sm:text-3xl">
                You&rsquo;re missing calls. Losing leads. Working evenings.
              </h2>
              <ul className="mt-6 space-y-4 text-[--color-muted]">
                <li className="flex gap-3"><span className="text-red-400">✕</span> Phone rings while you&rsquo;re under a boiler</li>
                <li className="flex gap-3"><span className="text-red-400">✕</span> Voicemails pile up — half never get returned</li>
                <li className="flex gap-3"><span className="text-red-400">✕</span> Evenings spent calling people back instead of resting</li>
                <li className="flex gap-3"><span className="text-red-400">✕</span> £200 jobs walking to the competitor who answered first</li>
              </ul>
            </div>
            <div className="rounded-2xl border border-white/5 bg-[--color-surface] p-8 transition hover:border-green-500/20 sm:p-10">
              <p className="text-xs font-semibold uppercase tracking-[0.2em] text-green-400">
                The solution
              </p>
              <h2 className="mt-4 font-[family-name:var(--font-playfair)] text-2xl font-bold sm:text-3xl">
                Your AI answers in 0.5 seconds. Qualifies. Books. Texts you.
              </h2>
              <ul className="mt-6 space-y-4 text-[--color-muted]">
                <li className="flex gap-3"><span className="text-green-400">✓</span> Every call answered instantly, 24/7/365</li>
                <li className="flex gap-3"><span className="text-green-400">✓</span> Asks the right qualifying questions</li>
                <li className="flex gap-3"><span className="text-green-400">✓</span> Books real leads straight into your calendar</li>
                <li className="flex gap-3"><span className="text-green-400">✓</span> Texts you the details — you decide if it&rsquo;s worth your time</li>
              </ul>
            </div>
          </div>
        </ScrollFade>
      </section>

      {/* How it works */}
      <ScrollFade>
        <section className="py-24">
          <div className="mx-auto max-w-6xl px-4">
            <p className="text-center text-xs font-semibold uppercase tracking-[0.2em] text-[--color-accent]">
              How it works
            </p>
            <h2 className="mt-4 text-center font-[family-name:var(--font-playfair)] text-3xl font-bold tracking-tight sm:text-5xl">
              Live in 3 steps
            </h2>
            <div className="mt-14 grid gap-6 sm:grid-cols-3">
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
                  className="group rounded-2xl border border-white/5 bg-[--color-surface] p-8 transition-all duration-300 hover:-translate-y-1 hover:border-[--color-accent]/30 hover:shadow-lg hover:shadow-[--color-accent]/5 sm:p-10"
                >
                  <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-[--color-accent]/10 text-lg font-bold text-[--color-accent] transition group-hover:bg-[--color-accent] group-hover:text-white">
                    {item.step}
                  </div>
                  <h3 className="mt-5 text-lg font-semibold">{item.title}</h3>
                  <p className="mt-2 text-sm leading-relaxed text-[--color-muted]">{item.desc}</p>
                </div>
              ))}
            </div>
            <div className="mt-12 text-center">
              <Link
                href="/book-demo"
                className="rounded-full bg-[--color-accent] px-6 py-3 font-medium text-white shadow-lg shadow-[--color-accent]/25 transition hover:bg-[--color-accent-hover]"
              >
                Book your discovery call →
              </Link>
            </div>
          </div>
        </section>
      </ScrollFade>

      {/* Industries */}
      <ScrollFade>
        <section className="py-24">
          <div className="mx-auto max-w-6xl px-4">
            <p className="text-center text-xs font-semibold uppercase tracking-[0.2em] text-[--color-accent]">
              Industries
            </p>
            <h2 className="mt-4 text-center font-[family-name:var(--font-playfair)] text-3xl font-bold tracking-tight sm:text-4xl">
              Built for businesses that live on the phone
            </h2>
            <div className="mt-14 grid gap-6 sm:grid-cols-3">
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
                  className="group rounded-2xl border border-white/5 bg-[--color-surface] p-8 transition-all duration-300 hover:-translate-y-1 hover:border-[--color-accent]/30 hover:shadow-lg hover:shadow-[--color-accent]/5 sm:p-10"
                >
                  <h3 className="text-lg font-semibold transition group-hover:text-[--color-accent]">
                    {item.title}
                  </h3>
                  <p className="mt-3 text-sm leading-relaxed text-[--color-muted]">{item.desc}</p>
                  <p className="mt-5 text-sm font-medium text-[--color-accent]">Learn more →</p>
                </Link>
              ))}
            </div>
          </div>
        </section>
      </ScrollFade>

      {/* Founder */}
      <ScrollFade>
        <section className="py-24">
          <div className="mx-auto flex max-w-6xl flex-col items-center gap-10 px-4 md:flex-row md:gap-16">
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
              <p className="text-xs font-semibold uppercase tracking-[0.2em] text-[--color-accent]">
                Your builder
              </p>
              <h2 className="mt-4 font-[family-name:var(--font-playfair)] text-2xl font-bold sm:text-3xl">
                I build every system myself. No outsourcing.
              </h2>
              <p className="mt-4 leading-relaxed text-[--color-muted]">
                I&rsquo;m Manny. 15 years in finance at Visa and the UK Cabinet Office.
                Qualified accountant. I became one to understand how businesses
                actually work — the numbers, the operations, the bottlenecks.
              </p>
              <p className="mt-4 leading-relaxed text-[--color-muted]">
                Now I build AI systems that solve the problems I kept seeing:
                missed calls, manual admin, wasted evenings. You work directly
                with me. No juniors, no offshore teams, no runaround.
              </p>
              <Link
                href="/about"
                className="mt-4 inline-block text-sm font-medium text-[--color-accent] hover:underline"
              >
                Read my full story →
              </Link>
            </div>
          </div>
        </section>
      </ScrollFade>

      {/* Pricing preview */}
      <ScrollFade>
        <section className="py-24">
          <div className="mx-auto max-w-4xl px-4 text-center">
            <p className="text-xs font-semibold uppercase tracking-[0.2em] text-[--color-accent]">
              Pricing
            </p>
            <h2 className="mt-4 font-[family-name:var(--font-playfair)] text-3xl font-bold tracking-tight sm:text-4xl">
              Pricing that pays for itself
            </h2>
            <p className="mt-4 text-[--color-muted]">
              Miss 5 calls a week at £200 per job? That&rsquo;s £4,000/month lost.
              Our AI costs a fraction of that.
            </p>
            <div className="mt-12 grid gap-6 sm:grid-cols-3">
              {[
                { name: "AI Receptionist", price: "£497", period: "/mo" },
                { name: "Receptionist + Dispatch", price: "£997", period: "/mo", popular: true },
                { name: "Full AI Ops", price: "£1,997", period: "/mo" },
              ].map((tier) => (
                <div
                  key={tier.name}
                  className={`rounded-2xl border p-8 transition-all duration-300 hover:-translate-y-1 ${
                    tier.popular
                      ? "border-[--color-accent]/40 bg-[--color-accent]/5 shadow-lg shadow-[--color-accent]/10"
                      : "border-white/5 bg-[--color-surface] hover:border-[--color-accent]/20"
                  }`}
                >
                  {tier.popular && (
                    <p className="mb-3 text-xs font-semibold uppercase tracking-wider text-[--color-accent]">
                      Most popular
                    </p>
                  )}
                  <h3 className="font-semibold">{tier.name}</h3>
                  <p className="mt-3">
                    <span className="text-3xl font-bold">{tier.price}</span>
                    <span className="text-[--color-muted]">{tier.period}</span>
                  </p>
                </div>
              ))}
            </div>
            <Link
              href="/pricing"
              className="mt-10 inline-block text-sm font-medium text-[--color-accent] hover:underline"
            >
              See full pricing breakdown →
            </Link>
          </div>
        </section>
      </ScrollFade>

      {/* Testimonial */}
      <ScrollFade>
        <Testimonial />
      </ScrollFade>

      {/* CTA */}
      <CTA />
    </>
  );
}
