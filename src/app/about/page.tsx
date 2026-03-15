import { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { ScrollFade } from "@/components/ScrollFade";

export const metadata: Metadata = {
  title: "About Manny Amoah — ACCA-Qualified AI Consultant",
  description: "Meet Manny Amoah, ACCA-qualified accountant turned AI consultant. 15 years at Visa Europe and UK Cabinet Office. Industry-agnostic Revenue Recovery Audits.",
};

export default function AboutPage() {
  return (
    <>
      {/* Hero */}
      <section className="relative overflow-hidden bg-white pt-32">
        <div className="mx-auto max-w-4xl px-4 pb-16">
          <div className="text-center">
            <h1 className="font-bold text-5xl tracking-tight text-[--color-primary] sm:text-6xl">
              Built by an Accountant. Not a Coder.
            </h1>
            <p className="mx-auto mt-6 max-w-2xl text-lg text-[--color-muted] sm:text-xl">
              Most AI consultants are coders who learned business. I&rsquo;m an ACCA-qualified accountant who learned AI.
            </p>
          </div>
        </div>
      </section>

      {/* Founder Story */}
      <ScrollFade>
        <section className="py-24 bg-[--color-surface]">
          <div className="mx-auto max-w-6xl px-4">
            <div className="grid gap-12 lg:grid-cols-2 lg:gap-16">
              <div className="flex justify-center lg:justify-start">
                <Image
                  src="/manny-headshot.png"
                  alt="Manny Amoah — ACCA-Qualified AI Consultant"
                  width={400}
                  height={400}
                  className="rounded-2xl"
                />
              </div>
              <div>
                <h2 className="font-bold text-3xl text-[--color-primary] sm:text-4xl">
                  Manny Amoah, ACCA
                </h2>
                <p className="mt-4 text-[--color-text] leading-relaxed">
                  I spent 15 years in the financial guts of major organisations — Visa Europe, UK Cabinet Office, 
                  UK Health Security Agency. I&rsquo;ve seen how businesses actually work: the numbers, 
                  the operations, the bottlenecks that cost millions.
                </p>
                <p className="mt-4 text-[--color-text] leading-relaxed">
                  My ACCA qualification taught me to think in P&L terms. Every process has a cost. 
                  Every inefficiency bleeds money. Every automation needs ROI justification.
                </p>
                <p className="mt-4 text-[--color-text] leading-relaxed">
                  Now I help small businesses plug the same revenue leaks that cost corporates millions. 
                  I don&rsquo;t sell you tech — I show you the ROI first, then build the system that delivers it.
                </p>
                
                <div className="mt-8 grid gap-4 sm:grid-cols-2">
                  {[
                    { label: "Qualification", value: "ACCA" },
                    { label: "Experience", value: "15 years finance" },
                    { label: "Previous roles", value: "Visa Europe, UK Cabinet Office" },
                    { label: "Approach", value: "ROI before tech" },
                  ].map((item) => (
                    <div key={item.label} className="rounded-lg border border-gray-200 bg-white p-4">
                      <p className="text-xs font-semibold uppercase tracking-wider text-[--color-muted]">
                        {item.label}
                      </p>
                      <p className="mt-1 font-semibold text-[--color-primary]">{item.value}</p>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </section>
      </ScrollFade>

      {/* The ACCA Difference */}
      <ScrollFade>
        <section className="py-24 bg-white">
          <div className="mx-auto max-w-6xl px-4">
            <h2 className="text-center font-bold text-3xl text-[--color-primary] sm:text-4xl">
              Why ACCA Makes the Difference
            </h2>
            <p className="mt-6 text-center text-lg text-[--color-muted]">
              Most AI consultants show you what&rsquo;s possible. I show you what&rsquo;s profitable.
            </p>
            
            <div className="mt-14 grid gap-8 sm:grid-cols-3">
              {[
                {
                  title: "P&L Thinking",
                  desc: "Every recommendation gets measured in £ recovered or £ saved. No vanity metrics, no cool demos that don't move the needle.",
                  icon: "💰",
                },
                {
                  title: "Risk Assessment",
                  desc: "15 years in finance taught me what can go wrong. Compliance issues, data breaches, operational failures. We plan for them.",
                  icon: "🛡️",
                },
                {
                  title: "ROI Justification",
                  desc: "Every automation investment needs business justification. I help you make the case to stakeholders with hard numbers.",
                  icon: "📊",
                },
              ].map((item) => (
                <div
                  key={item.title}
                  className="rounded-2xl border border-gray-200 bg-[--color-surface] p-8 text-center transition-all duration-300 hover:-translate-y-1 hover:border-[--color-accent]/30 hover:shadow-lg"
                >
                  <div className="text-4xl">{item.icon}</div>
                  <h3 className="mt-4 font-bold text-xl text-[--color-primary]">{item.title}</h3>
                  <p className="mt-3 text-sm text-[--color-muted] leading-relaxed">{item.desc}</p>
                </div>
              ))}
            </div>
          </div>
        </section>
      </ScrollFade>

      {/* Career Journey */}
      <ScrollFade>
        <section className="py-24 bg-[--color-surface]">
          <div className="mx-auto max-w-4xl px-4">
            <h2 className="text-center font-bold text-3xl text-[--color-primary] sm:text-4xl">
              From Corporate Finance to AI Consulting
            </h2>
            <div className="mt-14 space-y-8">
              {[
                {
                  period: "2009-2015",
                  company: "Visa Europe",
                  role: "Senior Finance & Operations",
                  impact: "Managed P&L for payment processing operations across 38 countries. Learned how inefficiency scales into millions in losses.",
                },
                {
                  period: "2015-2020",
                  company: "UK Cabinet Office",
                  role: "Digital Transformation",
                  impact: "Led government efficiency programmes. Saw how automation transforms organisations — and what happens when it's done wrong.",
                },
                {
                  period: "2020-2024",
                  company: "UK Health Security Agency",
                  role: "Financial Operations",
                  impact: "COVID response operations. High-stakes environment where every process failure had real-world consequences.",
                },
                {
                  period: "2024-Present",
                  company: "Core AI Solutions",
                  role: "Founder & AI Consultant",
                  impact: "Helping small businesses achieve enterprise-level efficiency. Every client deployment proves AI democratises operational excellence.",
                },
              ].map((job) => (
                <div key={job.period} className="rounded-2xl border border-gray-200 bg-white p-6">
                  <div className="grid gap-4 lg:grid-cols-3">
                    <div>
                      <p className="font-bold text-[--color-primary]">{job.period}</p>
                      <p className="text-sm text-[--color-accent] font-semibold">{job.company}</p>
                      <p className="text-sm text-[--color-muted]">{job.role}</p>
                    </div>
                    <div className="lg:col-span-2">
                      <p className="text-sm text-[--color-text] leading-relaxed">{job.impact}</p>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>
      </ScrollFade>

      {/* Industry-Agnostic Approach */}
      <ScrollFade>
        <section className="py-24 bg-white">
          <div className="mx-auto max-w-6xl px-4">
            <h2 className="text-center font-bold text-3xl text-[--color-primary] sm:text-4xl">
              Industry-Agnostic Expertise
            </h2>
            <p className="mt-6 text-center text-lg text-[--color-muted]">
              I niche on the product (Revenue Recovery Audits), not the market. Revenue leaks happen everywhere.
            </p>
            
            <div className="mt-14 grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
              {[
                {
                  client: "Eliezer",
                  industry: "Auto Detailing",
                  location: "Tampa, FL",
                  leak: "Missed DMs costing bookings",
                },
                {
                  client: "Nana",
                  industry: "SEN Consulting", 
                  location: "London, UK",
                  leak: "Admin overload eating profit",
                },
                {
                  client: "Trinity",
                  industry: "Care Agency",
                  location: "London, UK",
                  leak: "Missed calls losing clients",
                },
                {
                  client: "Abi",
                  industry: "Events & Decor",
                  location: "London, UK", 
                  leak: "Weekend enquiries unanswered",
                },
              ].map((example) => (
                <div
                  key={example.client}
                  className="rounded-2xl border border-gray-200 bg-[--color-surface] p-6 text-center"
                >
                  <h3 className="font-bold text-lg text-[--color-primary]">{example.client}</h3>
                  <p className="mt-1 text-sm font-medium text-[--color-accent]">{example.industry}</p>
                  <p className="text-xs text-[--color-muted]">{example.location}</p>
                  <div className="mt-4 rounded-lg border border-red-200 bg-red-50 p-3">
                    <p className="text-xs text-red-700">{example.leak}</p>
                  </div>
                </div>
              ))}
            </div>
            
            <div className="mt-12 text-center">
              <div className="inline-flex items-center gap-2 rounded-full border border-[--color-accent]/30 bg-[--color-accent]/10 px-6 py-3">
                <span className="text-2xl">🎯</span>
                <span className="font-semibold text-[--color-accent]">
                  Same audit framework. Different industries. Same results.
                </span>
              </div>
            </div>
          </div>
        </section>
      </ScrollFade>

      {/* How I Work */}
      <ScrollFade>
        <section className="py-24 bg-[--color-surface]">
          <div className="mx-auto max-w-4xl px-4">
            <h2 className="text-center font-bold text-3xl text-[--color-primary] sm:text-4xl">
              How I Work
            </h2>
            <div className="mt-14 space-y-8">
              {[
                {
                  step: "1",
                  title: "I Build Everything Myself",
                  desc: "No outsourcing, no junior developers, no runaround. You work directly with me from audit to implementation.",
                },
                {
                  step: "2", 
                  title: "ACCA-Grade Analysis",
                  desc: "Every recommendation comes with £ figures, risk assessment, and ROI projections. Business case included.",
                },
                {
                  step: "3",
                  title: "Proven Technology Stack",
                  desc: "Vapi for voice AI, n8n for workflows, OpenClaw for full deployment. No experimental tech in production.",
                },
                {
                  step: "4",
                  title: "Hands-On Support",
                  desc: "Post-deployment optimization, performance monitoring, and ongoing improvements. Not just setup and disappear.",
                },
              ].map((item) => (
                <div key={item.step} className="flex gap-6">
                  <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-xl bg-[--color-accent] text-lg font-bold text-white">
                    {item.step}
                  </div>
                  <div>
                    <h3 className="font-bold text-xl text-[--color-primary]">{item.title}</h3>
                    <p className="mt-2 text-[--color-text] leading-relaxed">{item.desc}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>
      </ScrollFade>

      {/* Mission */}
      <ScrollFade>
        <section className="py-24 bg-white">
          <div className="mx-auto max-w-4xl px-4 text-center">
            <h2 className="font-bold text-3xl text-[--color-primary] sm:text-4xl">
              My Mission
            </h2>
            <div className="mt-12 rounded-3xl border border-[--color-accent]/30 bg-gradient-to-br from-[--color-accent]/5 to-white p-8 sm:p-12">
              <blockquote className="text-xl leading-relaxed text-[--color-text] sm:text-2xl">
                &ldquo;To democratise enterprise-level operational efficiency. Every small business 
                should have access to the same automation advantages that big corporations take for granted.&rdquo;
              </blockquote>
              <p className="mt-6 font-semibold text-[--color-primary]">— Manny Amoah, ACCA</p>
            </div>
          </div>
        </section>
      </ScrollFade>

      {/* CTA */}
      <ScrollFade>
        <section className="py-24 bg-[--color-surface]">
          <div className="mx-auto max-w-4xl px-4 text-center">
            <h2 className="font-bold text-3xl text-[--color-primary] sm:text-4xl">
              Ready to Find Your Revenue Leaks?
            </h2>
            <p className="mt-6 text-lg text-[--color-muted]">
              Let&rsquo;s apply ACCA-grade analysis to your business operations. Find out exactly where you&rsquo;re losing money.
            </p>
            
            <div className="mt-10 flex flex-col items-center gap-4 sm:flex-row sm:justify-center">
              <Link
                href="/audit"
                className="rounded-full bg-[--color-accent] px-8 py-3.5 font-medium text-white shadow-lg shadow-[--color-accent]/25 transition hover:bg-[--color-accent-hover]"
              >
                Get Free AI Readiness Audit →
              </Link>
              <Link
                href="/revenue-recovery"
                className="rounded-full border border-[--color-primary] bg-[--color-primary] px-8 py-3.5 font-medium text-white shadow-lg transition hover:bg-[--color-primary]/90"
              >
                Book Revenue Recovery Audit — £297 →
              </Link>
            </div>
          </div>
        </section>
      </ScrollFade>
    </>
  );
}