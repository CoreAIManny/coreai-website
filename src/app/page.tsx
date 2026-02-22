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
              AI Employees
              <br />
              <span className="text-[--color-muted]">for Your Business</span>
            </h1>
            <p className="mx-auto mt-6 max-w-2xl text-lg text-[--color-muted] sm:text-xl">
              Your calls answered. Your leads followed up. Your admin handled. 24/7.
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
            AI automation for business owners
          </p>
          <div className="mt-4 flex items-center justify-center gap-8 text-[--color-muted]/30">
            {["Sales", "Support", "Operations", "Marketing", "Admin"].map((name) => (
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
                You&rsquo;re drowning in admin. Missing opportunities. Working late.
              </h2>
              <ul className="mt-6 space-y-4 text-[--color-muted]">
                <li className="flex gap-3"><span className="text-red-400">✕</span> Phone rings while you&rsquo;re in a meeting</li>
                <li className="flex gap-3"><span className="text-red-400">✕</span> Leads slip through the cracks — no follow-up</li>
                <li className="flex gap-3"><span className="text-red-400">✕</span> Hours wasted on repetitive admin tasks</li>
                <li className="flex gap-3"><span className="text-red-400">✕</span> Opportunities lost to faster competitors</li>
              </ul>
            </div>
            <div className="rounded-2xl border border-white/5 bg-[--color-surface] p-8 transition hover:border-green-500/20 sm:p-10">
              <p className="text-xs font-semibold uppercase tracking-[0.2em] text-green-400">
                The solution
              </p>
              <h2 className="mt-4 font-[family-name:var(--font-playfair)] text-2xl font-bold sm:text-3xl">
                AI employees handle it all. Automatically. 24/7.
              </h2>
              <ul className="mt-6 space-y-4 text-[--color-muted]">
                <li className="flex gap-3"><span className="text-green-400">✓</span> Every call answered instantly, every lead captured</li>
                <li className="flex gap-3"><span className="text-green-400">✓</span> Automatic follow-ups that never forget</li>
                <li className="flex gap-3"><span className="text-green-400">✓</span> Admin tasks handled while you sleep</li>
                <li className="flex gap-3"><span className="text-green-400">✓</span> You focus on what matters — growth and strategy</li>
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

      {/* Use Cases */}
      <ScrollFade>
        <section className="py-24">
          <div className="mx-auto max-w-6xl px-4">
            <p className="text-center text-xs font-semibold uppercase tracking-[0.2em] text-[--color-accent]">
              Use Cases
            </p>
            <h2 className="mt-4 text-center font-[family-name:var(--font-playfair)] text-3xl font-bold tracking-tight sm:text-4xl">
              AI automation for every business function
            </h2>
            <div className="mt-14 grid gap-6 sm:grid-cols-3">
              {[
                {
                  title: "Voice AI",
                  desc: "Answer every call, qualify leads, book appointments. Your AI receptionist never sleeps.",
                  href: "/services/ai-receptionist",
                },
                {
                  title: "Workflow Automation",
                  desc: "Connect your tools, automate repetitive tasks, eliminate manual data entry.",
                  href: "/services/workflow-automation",
                },
                {
                  title: "SecondYou",
                  desc: "Your complete AI employee. Done-for-you setup, managed service, white-glove support.",
                  href: "/secondyou",
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
                ACCA qualified accountant. I became one to understand how businesses
                actually work — the numbers, the operations, the bottlenecks.
              </p>
              <p className="mt-4 leading-relaxed text-[--color-muted]">
                Now I build AI automation systems that solve the problems I kept seeing:
                missed opportunities, manual admin, inefficient processes. You work directly
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
              Every missed opportunity costs you. Our AI employees work 24/7 
              for less than a part-time hire.
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
