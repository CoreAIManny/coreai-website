import Link from "next/link";
import Image from "next/image";
import { Testimonial } from "@/components/Testimonial";
import { CTA } from "@/components/CTA";
import { ScrollFade } from "@/components/ScrollFade";

export default function Home() {
  return (
    <>
      {/* Hero */}
      <section className="relative overflow-hidden bg-white">
        {/* Background gradient swoosh */}
        <div className="pointer-events-none absolute inset-0">
          <div className="absolute -right-1/4 -top-1/4 h-[600px] w-[600px] rounded-full bg-accent/8 blur-[120px]" />
          <div className="absolute -left-1/4 top-1/4 h-[400px] w-[400px] rounded-full bg-primary/5 blur-[100px]" />
        </div>

        <div className="mx-auto max-w-6xl px-4 pb-16 pt-32 sm:pt-40">
          <div className="mx-auto max-w-4xl text-center">
            {/* Trust badge pill */}
            <div className="mb-6 inline-flex items-center gap-2 rounded-full border border-accent/30 bg-accent/10 px-4 py-1.5 text-sm text-accent">
              <span className="inline-block h-1.5 w-1.5 rounded-full bg-accent animate-pulse" />
              Free AI Readiness Audit Available
            </div>

            <h1 className="font-bold text-5xl tracking-tight text-primary sm:text-7xl">
              Stop Losing Revenue to <span className="text-accent">Missed Calls</span>, Dead Leads & Manual Admin.
            </h1>
            <p className="mx-auto mt-6 max-w-2xl text-lg text-muted sm:text-xl">
              Find out exactly where your business is bleeding money — and how AI can plug the leaks. Enterprise-grade analysis with exact £ figures.
            </p>
            <div className="mt-10 flex flex-col items-center gap-4 sm:flex-row sm:justify-center">
              <Link
                href="/audit"
                className="rounded-full bg-accent px-8 py-3.5 font-medium text-white shadow-lg shadow-accent/25 transition hover:bg-accent-hover hover:shadow-xl hover:shadow-accent/30"
              >
                Get Your Free AI Readiness Score →
              </Link>
              <Link
                href="/revenue-recovery"
                className="rounded-full border border-primary bg-primary px-8 py-3.5 font-medium text-white shadow-lg transition hover:bg-primary/90"
              >
                Book Revenue Recovery Audit — £297 →
              </Link>
            </div>

            {/* Trust signal */}
            <div className="mt-8 flex items-center justify-center gap-6 text-sm text-muted">
              <span className="flex items-center gap-1"><span className="text-accent">✓</span> Enterprise-Trained</span>
              <span className="flex items-center gap-1"><span className="text-accent">✓</span> 4 Businesses Deployed</span>
              <span className="flex items-center gap-1"><span className="text-accent">✓</span> 3 Countries</span>
            </div>
          </div>
        </div>
      </section>

      {/* Stats bar */}
      <section className="border-y border-gray-200 bg-surface relative">
        <div className="absolute inset-x-0 top-0 h-0.5 bg-gradient-to-r from-transparent via-accent to-transparent" />
        <div className="mx-auto grid max-w-4xl grid-cols-3 divide-x divide-gray-200 px-4 py-6">
          {[
            { value: "4 Businesses", label: "Deployed" },
            { value: "3 Countries", label: "Across" },
            { value: "Enterprise", label: "Background" },
          ].map((s) => (
            <div key={s.label} className="text-center">
              <div className="text-xl font-bold text-primary sm:text-2xl">{s.value}</div>
              <div className="mt-1 text-xs text-muted sm:text-sm">{s.label}</div>
            </div>
          ))}
        </div>
      </section>

      {/* Problem → Solution */}
      <section className="relative overflow-hidden bg-white">
        <ScrollFade>
          <div className="mx-auto grid max-w-6xl gap-12 px-4 py-24 md:grid-cols-2 md:gap-16">
            <div className="rounded-2xl border border-red-200 bg-red-50 p-8 transition hover:border-red-300 sm:p-10">
              <p className="text-xs font-semibold uppercase tracking-[0.2em] text-red-600">
                The problem
              </p>
              <h2 className="mt-4 font-bold text-2xl text-primary sm:text-3xl">
                Your business is bleeding money right now.
              </h2>
              <ul className="mt-6 space-y-4 text-text">
                <li className="flex gap-3"><span className="text-red-500">✕</span> Phone rings, nobody answers</li>
                <li className="flex gap-3"><span className="text-red-500">✕</span> Leads go cold — no follow-up</li>
                <li className="flex gap-3"><span className="text-red-500">✕</span> Hours lost to repetitive admin</li>
                <li className="flex gap-3"><span className="text-red-500">✕</span> No idea what&rsquo;s costing you money</li>
              </ul>
            </div>
            <div className="rounded-2xl border border-green-200 bg-green-50 p-8 transition hover:border-green-300 sm:p-10">
              <p className="text-xs font-semibold uppercase tracking-[0.2em] text-green-600">
                The solution
              </p>
              <h2 className="mt-4 font-bold text-2xl text-primary sm:text-3xl">
                AI plugs the leaks. Automatically. 24/7.
              </h2>
              <ul className="mt-6 space-y-4 text-text">
                <li className="flex gap-3"><span className="text-green-500">✓</span> AI answers every call, 24/7</li>
                <li className="flex gap-3"><span className="text-green-500">✓</span> Automated follow-up in minutes</li>
                <li className="flex gap-3"><span className="text-green-500">✓</span> AI handles admin while you sleep</li>
                <li className="flex gap-3"><span className="text-green-500">✓</span> Enterprise-grade analysis shows exactly where</li>
              </ul>
            </div>
          </div>
        </ScrollFade>
      </section>

      {/* CORE Method */}
      <ScrollFade>
        <section className="py-24 bg-surface">
          <div className="mx-auto max-w-6xl px-4">
            <p className="text-center text-xs font-semibold uppercase tracking-[0.2em] text-accent">
              How We Fix It
            </p>
            <h2 className="mt-4 text-center font-bold text-3xl tracking-tight text-primary sm:text-5xl">
              The C.O.R.E. Method
            </h2>
            <div className="mt-14 grid gap-6 sm:grid-cols-4">
              {[
                {
                  letter: "C",
                  title: "Capture",
                  desc: "Every call, lead, and enquiry. 24/7. No exceptions.",
                },
                {
                  letter: "O",
                  title: "Optimise",
                  desc: "Follow-up, scheduling, admin. On autopilot.",
                },
                {
                  letter: "R",
                  title: "Recover",
                  desc: "Find and plug revenue leaks. £ figures, not guesses.",
                },
                {
                  letter: "E",
                  title: "Expand",
                  desc: "Scale without headcount. AI employees, not hires.",
                },
              ].map((item) => (
                <div
                  key={item.letter}
                  className="group rounded-2xl border border-gray-200 bg-white p-8 transition-all duration-300 hover:-translate-y-1 hover:border-accent/30 hover:shadow-lg hover:shadow-accent/5 sm:p-10"
                >
                  <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-accent/10 text-lg font-bold text-accent transition group-hover:bg-accent group-hover:text-white">
                    {item.letter}
                  </div>
                  <h3 className="mt-5 text-lg font-semibold text-primary">{item.title}</h3>
                  <p className="mt-2 text-sm leading-relaxed text-muted">{item.desc}</p>
                </div>
              ))}
            </div>
          </div>
        </section>
      </ScrollFade>

      {/* Two Paths */}
      <ScrollFade>
        <section className="py-24 bg-white">
          <div className="mx-auto max-w-6xl px-4">
            <h2 className="text-center font-bold text-3xl tracking-tight text-primary sm:text-4xl">
              Two Ways to Find Your Revenue Leaks
            </h2>
            <div className="mt-14 grid gap-8 lg:grid-cols-2">
              {/* Free Path */}
              <div className="rounded-3xl border border-accent/30 bg-gradient-to-br from-accent/5 to-white p-8 shadow-lg sm:p-12">
                <div className="text-center">
                  <div className="mb-4 inline-flex items-center gap-2 rounded-full border border-accent/30 bg-accent/10 px-4 py-1.5 text-sm text-accent">
                    <span>🆓</span>
                    <span>Not Sure Where to Start?</span>
                  </div>
                  
                  <h3 className="font-bold text-2xl text-primary tracking-tight">
                    Free AI Readiness Audit
                  </h3>
                  
                  <ul className="mx-auto mt-4 max-w-xs space-y-2 text-left text-sm text-text">
                    <li>• 10-minute online assessment</li>
                    <li>• Auto-generated readiness score</li>
                    <li>• 3 quick wins you can do today</li>
                    <li>• No call required</li>
                  </ul>
                  
                  <div className="mt-6">
                    <Link
                      href="/audit"
                      className="inline-block rounded-full bg-accent px-8 py-3 font-semibold text-white shadow-lg shadow-accent/30 transition-all duration-300 hover:scale-105 hover:bg-accent-hover hover:shadow-xl hover:shadow-accent/40"
                    >
                      Take the Free Audit →
                    </Link>
                  </div>
                </div>
              </div>

              {/* Paid Path */}
              <div className="rounded-3xl border border-primary/30 bg-gradient-to-br from-primary/5 to-white p-8 shadow-lg sm:p-12">
                <div className="text-center">
                  <div className="mb-4 inline-flex items-center gap-2 rounded-full border border-primary/30 bg-primary/10 px-4 py-1.5 text-sm text-primary">
                    <span>💰</span>
                    <span>Know You&rsquo;re Losing Money?</span>
                  </div>
                  
                  <h3 className="font-bold text-2xl text-primary tracking-tight">
                    Revenue Recovery Audit
                  </h3>
                  
                  <ul className="mx-auto mt-4 max-w-xs space-y-2 text-left text-sm text-text">
                    <li>• 60-90 min deep dive with Manny</li>
                    <li>• Enterprise-grade P&L analysis</li>
                    <li>• Exact £ figures on every leak</li>
                    <li>• Professional report in 48hrs</li>
                  </ul>
                  
                  <div className="mt-6">
                    <Link
                      href="/revenue-recovery"
                      className="inline-block rounded-full bg-primary px-8 py-3 font-semibold text-white shadow-lg shadow-primary/30 transition-all duration-300 hover:scale-105 hover:bg-primary/90 hover:shadow-xl hover:shadow-primary/40"
                    >
                      Book for £297 →
                    </Link>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
      </ScrollFade>

      {/* Audit Results - Proof Stack */}
      <ScrollFade>
        <section className="py-24 bg-surface">
          <div className="mx-auto max-w-6xl px-4">
            <p className="text-center text-xs font-semibold uppercase tracking-[0.2em] text-accent">
              Proof
            </p>
            <h2 className="mt-4 text-center font-bold text-3xl tracking-tight text-primary sm:text-4xl">
              What We&rsquo;ve Found & Fixed
            </h2>
            <p className="mt-4 text-center text-muted">
              4 Businesses. 4 Industries. 3 Countries.
            </p>
            <div className="mt-14 grid gap-6 sm:grid-cols-2">
              {[
                {
                  name: "Eliezer — Auto Detailing, Tampa FL",
                  audit: "Missing every DM enquiry, no booking system, manual follow-up losing leads",
                  deployed: "AI employee on Meta Messenger + Google Sheets booking pipeline",
                  result: "\"It's turned into a must-have now\" — paying client",
                },
                {
                  name: "Nana — SEN Consulting, London",
                  audit: "Admin overload, client comms falling through cracks, scheduling chaos",
                  deployed: "AI assistant handling daily comms, scheduling, and Google Workspace integration",
                  result: "Most active daily user — uses it every single day",
                },
                {
                  name: "Trinity — Care Agency (55 Staff), London",
                  audit: "Missed calls, no carer dispatch tracking, CQC compliance gaps",
                  deployed: "AI receptionist + KPI dashboard + staff communication automation",
                  result: "Enterprise-scale pilot covering 55 carers and 48 clients",
                },
                {
                  name: "Abi — Events & Decor, London",
                  audit: "Booking enquiries going unanswered evenings and weekends",
                  deployed: "24/7 AI bot handling booking enquiries",
                  result: "Deployed and running — zero missed enquiries",
                },
              ].map((item) => (
                <div
                  key={item.name}
                  className="group rounded-2xl border border-gray-200 bg-white p-8 transition-all duration-300 hover:-translate-y-1 hover:border-accent/30 hover:shadow-lg hover:shadow-accent/5"
                >
                  <h3 className="font-semibold text-lg text-primary">{item.name}</h3>
                  
                  <div className="mt-4 space-y-3 text-sm">
                    <div>
                      <span className="font-medium text-red-600">AUDIT FOUND:</span>
                      <p className="mt-1 text-text">{item.audit}</p>
                    </div>
                    
                    <div>
                      <span className="font-medium text-blue-600">WE DEPLOYED:</span>
                      <p className="mt-1 text-text">{item.deployed}</p>
                    </div>
                    
                    <div>
                      <span className="font-medium text-green-600">RESULT:</span>
                      <p className="mt-1 text-text">{item.result}</p>
                    </div>
                  </div>
                </div>
              ))}
            </div>
            <div className="mt-12 text-center">
              <Link
                href="/proof"
                className="rounded-full bg-accent px-6 py-3 font-medium text-white shadow-lg shadow-accent/25 transition hover:bg-accent-hover"
              >
                See Full Audit Results →
              </Link>
            </div>
          </div>
        </section>
      </ScrollFade>

      {/* Builder section */}
      <ScrollFade>
        <section className="py-24 bg-white">
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
              <p className="text-xs font-semibold uppercase tracking-[0.2em] text-accent">
                Built by an Accountant. Not a Coder.
              </p>
              <h2 className="mt-4 font-bold text-2xl text-primary sm:text-3xl">
                Most AI consultants are coders who learned business. I spent a decade in <span className="text-accent">enterprise finance</span> — Visa Europe, the Cabinet Office, UKHSA — then learned AI.
              </h2>
              <p className="mt-4 leading-relaxed text-text">
                I don&rsquo;t sell you tech — I show you the ROI first, then build the system that delivers it. 
                Every automation gets measured in £ recovered or £ saved.
              </p>
              <p className="mt-4 leading-relaxed text-text">
                15 years in finance at Visa Europe and the UK Cabinet Office taught me how businesses 
                actually work — the numbers, the operations, the bottlenecks. Now I build AI that fixes them.
              </p>
              <p className="mt-4 font-medium text-primary">
                — Manny Amoah<br />
                Former Visa Europe & UK Cabinet Office
              </p>
              <Link
                href="/about"
                className="mt-4 inline-block text-sm font-medium text-accent hover:underline"
              >
                Read my full story →
              </Link>
            </div>
          </div>
        </section>
      </ScrollFade>

      {/* Testimonial */}
      <ScrollFade>
        <section className="py-24 bg-surface">
          <div className="mx-auto max-w-4xl px-4">
            <div className="rounded-3xl border border-yellow-200 bg-yellow-50 p-8 text-center sm:p-12">
              <div className="mb-4 flex justify-center text-yellow-500">
                <span className="text-2xl">★★★★★</span>
              </div>
              <blockquote className="text-lg leading-relaxed text-text sm:text-xl">
                &ldquo;Truly exceptional — Manny did everything we needed and more. 
                Excellent communication throughout and an incredible workflow produced in a quick timeframe. 
                It&rsquo;s quite clear Manny has a solid commercial understanding which is imperative to work like this.&rdquo;
              </blockquote>
              <div className="mt-6">
                <p className="font-semibold text-primary">Luke Finney</p>
                <p className="text-sm text-muted">Founder & CEO, Manchester UK</p>
                <p className="mt-2 text-xs text-muted">
                  ✅ Verified on Upwork · $101K+ spent · 4.9★
                </p>
              </div>
            </div>
          </div>
        </section>
      </ScrollFade>

      {/* Free Resources */}
      <ScrollFade>
        <section className="py-24 bg-white">
          <div className="mx-auto max-w-6xl px-4">
            <p className="text-center text-xs font-semibold uppercase tracking-[0.2em] text-accent">
              Free Resources
            </p>
            <h2 className="mt-4 text-center font-bold text-3xl tracking-tight text-primary sm:text-4xl">
              Tools & Frameworks You Can Use Today
            </h2>
            <p className="mt-4 text-center text-muted">
              Whether you work with me or not — these will help you start automating.
            </p>

            <div className="mt-14 grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
              {[
                {
                  icon: "📊",
                  title: "AI Audit Framework",
                  desc: "The exact framework I use to find revenue leaks in small businesses.",
                  tag: "Free Download",
                  href: "https://core-ai-solutions.kit.com/319ad7952a",
                },
                {
                  icon: "✅",
                  title: "Lead Capture Checklist",
                  desc: "Stop losing leads. A step-by-step checklist to qualify and convert faster.",
                  tag: "Free Download",
                  href: "https://mannycorea.gumroad.com/l/n8n_lead_qualifier_pack",
                },
                {
                  icon: "🛠️",
                  title: "AI Tools Database",
                  desc: "The tools I actually use across 4 client deployments. No fluff.",
                  tag: "Free Download",
                  href: "https://mannycorea.gumroad.com/l/ai-tools-stack",
                },
                {
                  icon: "📚",
                  title: "Browse All Resources",
                  desc: "Guides, templates, and automation packs for small business owners.",
                  tag: "View Store",
                  href: "https://mannycorea.gumroad.com/",
                },
              ].map((item) => (
                <a
                  key={item.title}
                  href={item.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="group flex flex-col items-center gap-3 rounded-2xl border border-gray-200 bg-surface p-8 text-center transition-all duration-300 hover:-translate-y-1 hover:border-accent/30 hover:shadow-lg hover:shadow-accent/5"
                >
                  <span className="text-3xl">{item.icon}</span>
                  <h3 className="font-semibold text-lg text-primary">{item.title}</h3>
                  <p className="text-sm leading-relaxed text-muted">{item.desc}</p>
                  <span className="mt-auto inline-block rounded-full bg-accent/10 px-3 py-1 text-xs font-semibold uppercase tracking-wider text-accent">
                    {item.tag}
                  </span>
                </a>
              ))}
            </div>
          </div>
        </section>
      </ScrollFade>

      {/* Final CTA */}
      <ScrollFade>
        <section className="relative overflow-hidden py-24 bg-white">
          {/* Background gradient */}
          <div className="pointer-events-none absolute inset-0">
            <div className="absolute left-1/2 top-1/2 h-[500px] w-[500px] -translate-x-1/2 -translate-y-1/2 rounded-full bg-accent/5 blur-[120px]" />
          </div>
          
          <div className="relative mx-auto max-w-4xl px-4 text-center">
            <h2 className="font-bold text-3xl tracking-tight text-primary sm:text-4xl">
              Ready to Find Your Revenue Leaks?
            </h2>
            
            <div className="mt-10 flex flex-col items-center gap-4 sm:flex-row sm:justify-center">
              <Link
                href="/audit"
                className="rounded-full bg-accent px-8 py-3.5 font-medium text-white shadow-lg shadow-accent/25 transition hover:bg-accent-hover hover:shadow-xl hover:shadow-accent/30"
              >
                Get Your Free AI Readiness Score →
              </Link>
              <Link
                href="/revenue-recovery"
                className="rounded-full border border-primary bg-primary px-8 py-3.5 font-medium text-white shadow-lg transition hover:bg-primary/90"
              >
                Book Revenue Recovery Audit — £297 →
              </Link>
            </div>
            
            <p className="mt-8 text-sm text-muted">
              Founding member pricing available for first 10 implementation clients.<br />
              £0 setup + £297/mo. Pay after 30 days of proven results.
            </p>
          </div>
        </section>
      </ScrollFade>
    </>
  );
}