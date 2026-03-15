import Link from "next/link";
import Image from "next/image";
import { ScrollFade } from "@/components/ScrollFade";

export const metadata = {
  title: "Audit Results — What We've Found & Fixed | Core AI Solutions",
  description: "Real audit results from 4 businesses across 4 industries and 3 countries. See exactly what we found, what we deployed, and the results.",
};

export default function ProofPage() {
  return (
    <>
      {/* Hero */}
      <section className="relative overflow-hidden bg-white pt-32">
        <div className="mx-auto max-w-4xl px-4 pb-16">
          <div className="text-center">
            <h1 className="font-bold text-5xl tracking-tight text-primary sm:text-6xl">
              What We&rsquo;ve Found & Fixed
            </h1>
            <p className="mx-auto mt-6 max-w-2xl text-lg text-muted sm:text-xl">
              Real audit results from 4 businesses across 4 industries and 3 countries. 
              We audited. We found the leaks. We fixed them. Here&rsquo;s the proof.
            </p>
          </div>
        </div>
      </section>

      {/* Stats */}
      <section className="border-y border-gray-200 bg-surface">
        <div className="mx-auto grid max-w-6xl grid-cols-2 divide-x divide-gray-200 px-4 py-8 sm:grid-cols-4">
          {[
            { value: "4", label: "Businesses Audited" },
            { value: "4", label: "Industries Covered" },
            { value: "3", label: "Countries" },
            { value: "100%", label: "Revenue Leaks Found" },
          ].map((s) => (
            <div key={s.label} className="text-center">
              <div className="text-2xl font-bold text-primary sm:text-3xl">{s.value}</div>
              <div className="mt-1 text-sm text-muted">{s.label}</div>
            </div>
          ))}
        </div>
      </section>

      {/* Detailed Audit Results */}
      <ScrollFade>
        <section className="py-24 bg-white">
          <div className="mx-auto max-w-6xl px-4">
            <h2 className="text-center font-bold text-3xl text-primary sm:text-4xl">
              Detailed Audit Results
            </h2>
            <p className="mt-4 text-center text-muted">
              Every audit follows the same process: find the leaks, quantify the cost, deploy the fix, measure the result.
            </p>
            <div className="mt-14 space-y-12">
              {[
                {
                  name: "Eliezer",
                  business: "Auto Detailing, Tampa FL",
                  industry: "Auto Services",
                  auditFindings: [
                    "Missing every DM enquiry on Facebook/Instagram",
                    "No booking system — everything via phone/text",
                    "Manual follow-up losing 40% of warm leads",
                    "No weekend coverage losing saturday bookings",
                  ],
                  quantified: "Estimated £1,800/month in missed revenue",
                  deployed: [
                    "AI employee on Meta Messenger",
                    "Google Sheets booking pipeline",
                    "Automated follow-up sequences",
                    "Weekend enquiry handling",
                  ],
                  timeline: "2 weeks setup, live in week 3",
                  result: "\"It's turned into a must-have now\" — paying client, zero missed enquiries",
                  status: "ACTIVE",
                },
                {
                  name: "Nana",
                  business: "SEN Consulting, London",
                  industry: "Educational Consulting",
                  auditFindings: [
                    "Admin overload — 15+ hours/week on emails and scheduling",
                    "Client communications falling through cracks",
                    "No centralized system for case notes",
                    "Scheduling chaos with multiple stakeholders",
                  ],
                  quantified: "45 hours/month lost to manual admin (£1,350 opportunity cost)",
                  deployed: [
                    "AI assistant handling daily communications",
                    "Google Workspace integration for scheduling",
                    "Automated case note updates",
                    "Stakeholder communication workflows",
                  ],
                  timeline: "1 week setup, 2 weeks training",
                  result: "Most active daily user — uses it every single day for client management",
                  status: "ACTIVE",
                },
                {
                  name: "Trinity & Jayne",
                  business: "Care Agency (55 Staff), London",
                  industry: "Healthcare",
                  auditFindings: [
                    "Missed calls during shift changes costing new clients",
                    "No real-time carer dispatch tracking",
                    "CQC compliance gaps in communication logs",
                    "Manual staff scheduling taking 10+ hours/week",
                  ],
                  quantified: "£3,200/month in operational inefficiency + compliance risk",
                  deployed: [
                    "AI receptionist for 24/7 call coverage",
                    "KPI dashboard for carer tracking",
                    "Staff communication automation",
                    "CQC-compliant logging system",
                  ],
                  timeline: "3 weeks (enterprise complexity)",
                  result: "Enterprise-scale pilot covering 55 carers and 48 clients — testimonial agreed",
                  status: "PILOT",
                },
                {
                  name: "Abi",
                  business: "Events & Decor, London",
                  industry: "Events & Entertainment",
                  auditFindings: [
                    "Booking enquiries going unanswered evenings and weekends",
                    "No automated quote follow-up",
                    "Lost leads during busy event periods",
                    "Manual inventory tracking causing overbooking",
                  ],
                  quantified: "£900/month in weekend/evening missed bookings",
                  deployed: [
                    "24/7 AI bot handling booking enquiries",
                    "Automated quote follow-up system",
                    "Inventory integration with booking system",
                    "Peak period overflow handling",
                  ],
                  timeline: "10 days setup and testing",
                  result: "Deployed and running — zero missed enquiries, improved response times",
                  status: "ACTIVE",
                },
              ].map((audit) => (
                <div
                  key={audit.name}
                  className="rounded-3xl border border-gray-200 bg-surface p-8 shadow-lg"
                >
                  <div className="grid gap-8 lg:grid-cols-2">
                    {/* Left Column: Client Info + Audit */}
                    <div>
                      <div className="mb-6">
                        <div className="flex items-center justify-between mb-2">
                          <h3 className="font-bold text-2xl text-primary">{audit.name}</h3>
                          <span className={`rounded-full px-3 py-1 text-xs font-semibold ${
                            audit.status === 'ACTIVE' ? 'bg-green-100 text-green-800' : 'bg-yellow-100 text-yellow-800'
                          }`}>
                            {audit.status}
                          </span>
                        </div>
                        <p className="text-lg text-text">{audit.business}</p>
                        <p className="text-sm text-muted">{audit.industry}</p>
                      </div>
                      
                      <div className="mb-6">
                        <h4 className="font-semibold text-lg text-red-600 mb-3">AUDIT FOUND:</h4>
                        <ul className="space-y-2">
                          {audit.auditFindings.map((finding, index) => (
                            <li key={index} className="flex gap-2 text-sm text-text">
                              <span className="text-red-500 mt-0.5">•</span>
                              {finding}
                            </li>
                          ))}
                        </ul>
                        <div className="mt-4 rounded-lg bg-red-50 border border-red-200 p-3">
                          <p className="text-sm font-medium text-red-800">
                            💰 {audit.quantified}
                          </p>
                        </div>
                      </div>
                    </div>
                    
                    {/* Right Column: Solution + Results */}
                    <div>
                      <div className="mb-6">
                        <h4 className="font-semibold text-lg text-blue-600 mb-3">WE DEPLOYED:</h4>
                        <ul className="space-y-2">
                          {audit.deployed.map((solution, index) => (
                            <li key={index} className="flex gap-2 text-sm text-text">
                              <span className="text-blue-500 mt-0.5">•</span>
                              {solution}
                            </li>
                          ))}
                        </ul>
                        <div className="mt-4 rounded-lg bg-blue-50 border border-blue-200 p-3">
                          <p className="text-sm font-medium text-blue-800">
                            ⏱️ {audit.timeline}
                          </p>
                        </div>
                      </div>
                      
                      <div>
                        <h4 className="font-semibold text-lg text-green-600 mb-3">RESULT:</h4>
                        <div className="rounded-lg bg-green-50 border border-green-200 p-4">
                          <p className="text-sm text-green-800 leading-relaxed">
                            {audit.result}
                          </p>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>
      </ScrollFade>

      {/* Testimonial Spotlight */}
      <ScrollFade>
        <section className="py-24 bg-surface">
          <div className="mx-auto max-w-4xl px-4">
            <h2 className="text-center font-bold text-3xl text-primary sm:text-4xl">
              Client Testimonial
            </h2>
            <div className="mt-12 rounded-3xl border border-yellow-200 bg-yellow-50 p-8 text-center shadow-lg sm:p-12">
              <div className="mb-6 flex justify-center text-yellow-500">
                <span className="text-3xl">★★★★★</span>
              </div>
              <blockquote className="text-xl leading-relaxed text-text sm:text-2xl">
                &ldquo;Truly exceptional — Manny did everything we needed and more. 
                Excellent communication throughout and an incredible workflow produced in a quick timeframe. 
                It&rsquo;s quite clear Manny has a solid commercial understanding which is imperative to work like this.&rdquo;
              </blockquote>
              <div className="mt-8">
                <p className="font-bold text-xl text-primary">Luke Finney</p>
                <p className="text-muted">Founder & CEO, Manchester UK</p>
                <div className="mt-4 inline-flex items-center gap-4 text-sm text-muted">
                  <span className="flex items-center gap-1">
                    ✅ Verified on Upwork
                  </span>
                  <span className="flex items-center gap-1">
                    💰 $101K+ spent on platform
                  </span>
                  <span className="flex items-center gap-1">
                    ⭐ 4.9★ rating
                  </span>
                </div>
              </div>
            </div>
          </div>
        </section>
      </ScrollFade>

      {/* Industry Spread */}
      <ScrollFade>
        <section className="py-24 bg-white">
          <div className="mx-auto max-w-6xl px-4">
            <h2 className="text-center font-bold text-3xl text-primary sm:text-4xl">
              Industry-Agnostic Approach
            </h2>
            <p className="mt-4 text-center text-muted">
              Revenue leaks happen in every industry. Our ACCA-trained approach finds them anywhere.
            </p>
            <div className="mt-14 grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
              {[
                {
                  industry: "Auto Services",
                  example: "Eliezer — Tampa FL",
                  commonLeaks: ["Missed DMs", "No booking system", "Weekend gaps", "Manual follow-up"],
                  solution: "AI Messenger + booking pipeline",
                },
                {
                  industry: "Professional Services",
                  example: "Nana — London",
                  commonLeaks: ["Admin overload", "Communication gaps", "Scheduling chaos", "No centralization"],
                  solution: "AI assistant + workflow automation",
                },
                {
                  industry: "Healthcare",
                  example: "Trinity — London",
                  commonLeaks: ["Missed calls", "No dispatch tracking", "Compliance gaps", "Manual scheduling"],
                  solution: "AI receptionist + KPI dashboard",
                },
                {
                  industry: "Events & Entertainment",
                  example: "Abi — London",
                  commonLeaks: ["Evening/weekend gaps", "No quote follow-up", "Peak period overload", "Manual inventory"],
                  solution: "24/7 AI bot + automated systems",
                },
              ].map((item) => (
                <div
                  key={item.industry}
                  className="rounded-2xl border border-gray-200 bg-white p-6 text-center transition-all duration-300 hover:-translate-y-1 hover:border-accent/30 hover:shadow-lg"
                >
                  <h3 className="font-bold text-lg text-primary">{item.industry}</h3>
                  <p className="mt-2 text-sm text-accent font-medium">{item.example}</p>
                  
                  <div className="mt-4">
                    <h4 className="text-xs font-semibold uppercase text-red-600 mb-2">Common Leaks</h4>
                    <ul className="space-y-1 text-xs text-text">
                      {item.commonLeaks.map((leak) => (
                        <li key={leak}>• {leak}</li>
                      ))}
                    </ul>
                  </div>
                  
                  <div className="mt-4 pt-4 border-t border-gray-100">
                    <h4 className="text-xs font-semibold uppercase text-green-600 mb-1">Solution</h4>
                    <p className="text-xs text-text">{item.solution}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>
      </ScrollFade>

      {/* The Pattern */}
      <ScrollFade>
        <section className="py-24 bg-surface">
          <div className="mx-auto max-w-4xl px-4">
            <h2 className="text-center font-bold text-3xl text-primary sm:text-4xl">
              The Pattern We See Everywhere
            </h2>
            <div className="mt-12 grid gap-8 sm:grid-cols-3">
              {[
                {
                  problem: "Missed Opportunities",
                  details: "Calls go unanswered, messages are missed, leads slip through cracks",
                  cost: "£500-2,000/mo",
                },
                {
                  problem: "Manual Inefficiency", 
                  details: "Hours wasted on admin, follow-up, data entry, scheduling",
                  cost: "£1,000-3,000/mo",
                },
                {
                  problem: "No Systemization",
                  details: "Everything depends on remembering, nothing is automated",
                  cost: "£300-1,500/mo",
                },
              ].map((item) => (
                <div
                  key={item.problem}
                  className="rounded-2xl border border-red-200 bg-red-50 p-6 text-center"
                >
                  <h3 className="font-bold text-lg text-red-800">{item.problem}</h3>
                  <p className="mt-3 text-sm text-red-700">{item.details}</p>
                  <div className="mt-4 rounded-lg bg-red-100 p-2">
                    <p className="text-sm font-bold text-red-800">Typical Cost: {item.cost}</p>
                  </div>
                </div>
              ))}
            </div>
            
            <div className="mt-12 text-center">
              <div className="inline-flex items-center gap-2 rounded-full border border-accent/30 bg-accent/10 px-6 py-3">
                <span className="text-2xl">💡</span>
                <span className="font-semibold text-accent">
                  Total typical recovery: £1,800-6,500/month
                </span>
              </div>
            </div>
          </div>
        </section>
      </ScrollFade>

      {/* Get Your Audit */}
      <ScrollFade>
        <section className="py-24 bg-white">
          <div className="mx-auto max-w-4xl px-4 text-center">
            <h2 className="font-bold text-3xl text-primary sm:text-4xl">
              Ready for Your Audit?
            </h2>
            <p className="mt-6 text-lg text-muted">
              Every business above has the same story: audit revealed the leaks, AI fixed them, revenue recovered.
              What will we find in yours?
            </p>
            
            <div className="mt-10 flex flex-col items-center gap-4 sm:flex-row sm:justify-center">
              <Link
                href="/audit"
                className="rounded-full bg-accent px-8 py-3.5 font-medium text-white shadow-lg shadow-accent/25 transition hover:bg-accent-hover"
              >
                Get Free AI Readiness Audit →
              </Link>
              <Link
                href="/revenue-recovery"
                className="rounded-full border border-primary bg-primary px-8 py-3.5 font-medium text-white shadow-lg transition hover:bg-primary/90"
              >
                Book Revenue Recovery Audit — £297 →
              </Link>
            </div>
            
            <p className="mt-8 text-sm text-muted">
              Join Eliezer, Nana, Trinity, and Abi. Find your revenue leaks. Fix them with AI.
            </p>
          </div>
        </section>
      </ScrollFade>
    </>
  );
}