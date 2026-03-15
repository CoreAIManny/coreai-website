import Link from "next/link";
import { ScrollFade } from "@/components/ScrollFade";

export const metadata = {
  title: "AI Solutions — Revenue Recovery Engine & HireOnce AI Employee",
  description: "Stop missing calls, losing leads, and drowning in admin. Our AI solutions fix the problems that cost you money every day.",
};

export default function SolutionsPage() {
  return (
    <>
      {/* Hero */}
      <section className="relative overflow-hidden bg-white pt-32">
        <div className="mx-auto max-w-4xl px-4 pb-16">
          <div className="text-center">
            <h1 className="font-bold text-5xl tracking-tight text-[--color-primary] sm:text-6xl">
              AI Solutions That Fix Your Revenue Leaks
            </h1>
            <p className="mx-auto mt-6 max-w-2xl text-lg text-[--color-muted] sm:text-xl">
              We don&rsquo;t sell you AI. We fix the business problems that are costing you money every day.
            </p>
          </div>
        </div>
      </section>

      {/* Solutions by Problem */}
      <ScrollFade>
        <section className="py-24 bg-[--color-surface]">
          <div className="mx-auto max-w-6xl px-4">
            <h2 className="text-center font-bold text-3xl text-[--color-primary] sm:text-4xl">
              Solutions by Business Problem
            </h2>
            <div className="mt-14 grid gap-8 sm:grid-cols-2">
              {[
                {
                  problem: "Never Miss Another Call or Enquiry",
                  pain: "Your phone rings at 6pm, weekends, during meetings. Customers hang up and call your competitor.",
                  solution: "AI Receptionist",
                  details: [
                    "Answers every call instantly, 24/7",
                    "Qualifies callers using your criteria",
                    "Books appointments directly into your calendar",
                    "Sends you SMS alerts for hot prospects",
                    "Handles multiple calls simultaneously",
                  ],
                  pricing: "From £497/mo",
                  cta: "Stop Missing Calls",
                },
                {
                  problem: "Automate Follow-Up and Booking",
                  pain: "Leads slip through the cracks. Manual follow-up takes hours. Prospects go cold waiting for quotes.",
                  solution: "CRM Automation",
                  details: [
                    "Automatic email/SMS sequences for every lead type",
                    "Quote follow-up that doesn't give up",
                    "Booking pipeline that converts enquiries to appointments",
                    "Review requests sent automatically after jobs",
                    "Hot lead alerts when prospects are ready to buy",
                  ],
                  pricing: "From £297/mo",
                  cta: "Automate Follow-Up",
                },
                {
                  problem: "Replace Manual Admin with AI",
                  pain: "Hours wasted on data entry, invoicing, scheduling. You work late just to stay on top of paperwork.",
                  solution: "Workflow Automation",
                  details: [
                    "Job details automatically entered into your systems",
                    "Invoices generated and sent without lifting a finger",
                    "Calendar management and appointment scheduling",
                    "Document generation from templates",
                    "Data synced between all your tools",
                  ],
                  pricing: "From £497/mo",
                  cta: "Eliminate Admin",
                },
                {
                  problem: "Get a 24/7 AI Employee",
                  pain: "You need someone handling calls, admin, follow-up. But hiring is expensive and risky.",
                  solution: "HireOnce AI Employee",
                  details: [
                    "Handles admin, customer comms, scheduling, CRM, research",
                    "Works 24/7, never takes breaks or holidays",
                    "Learns your business and gets better over time",
                    "Fully managed setup and training included",
                    "Costs less than part-time human",
                  ],
                  pricing: "£497/mo fully managed",
                  cta: "Hire Your AI",
                },
              ].map((item) => (
                <div
                  key={item.problem}
                  className="rounded-2xl border border-gray-200 bg-white p-8 transition-all duration-300 hover:-translate-y-1 hover:border-[--color-accent]/30 hover:shadow-lg"
                >
                  <div className="mb-6">
                    <h3 className="font-bold text-xl text-[--color-primary]">{item.problem}</h3>
                    <p className="mt-2 text-sm text-red-600 italic">{item.pain}</p>
                  </div>
                  
                  <div className="mb-6">
                    <h4 className="font-semibold text-lg text-[--color-accent]">{item.solution}</h4>
                    <ul className="mt-3 space-y-2">
                      {item.details.map((detail) => (
                        <li key={detail} className="flex gap-2 text-sm text-[--color-text]">
                          <span className="text-[--color-accent] mt-0.5">•</span>
                          {detail}
                        </li>
                      ))}
                    </ul>
                  </div>
                  
                  <div className="flex items-center justify-between">
                    <span className="font-semibold text-[--color-primary]">{item.pricing}</span>
                    <Link
                      href="/book-demo"
                      className="rounded-full bg-[--color-accent] px-6 py-2.5 text-sm font-medium text-white transition hover:bg-[--color-accent-hover]"
                    >
                      {item.cta} →
                    </Link>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>
      </ScrollFade>

      {/* Revenue Recovery Engine */}
      <ScrollFade>
        <section className="py-24 bg-white">
          <div className="mx-auto max-w-6xl px-4">
            <div className="text-center mb-14">
              <h2 className="font-bold text-3xl text-[--color-primary] sm:text-4xl">
                Revenue Recovery Engine
              </h2>
              <p className="mt-4 text-lg text-[--color-muted]">
                Our flagship solution that plugs all your revenue leaks systematically
              </p>
            </div>
            
            <div className="grid gap-12 lg:grid-cols-2 lg:gap-16">
              <div>
                <h3 className="font-bold text-2xl text-[--color-primary]">How It Works</h3>
                <div className="mt-6 space-y-6">
                  {[
                    {
                      phase: "Phase 1: Capture",
                      desc: "AI receptionist goes live. Every call answered, every lead captured. Instant 15-20% revenue increase from missed calls alone.",
                      timeline: "Week 1-2",
                    },
                    {
                      phase: "Phase 2: Optimise",
                      desc: "Follow-up automation, booking workflows, CRM integration. Leads convert faster, less manual work.",
                      timeline: "Week 3-6",
                    },
                    {
                      phase: "Phase 3: Recover",
                      desc: "Advanced workflows, review automation, upsell sequences. Maximum efficiency, minimum manual work.",
                      timeline: "Month 2-3",
                    },
                  ].map((item) => (
                    <div key={item.phase} className="border-l-4 border-[--color-accent] pl-6">
                      <div className="flex items-center justify-between">
                        <h4 className="font-semibold text-lg text-[--color-primary]">{item.phase}</h4>
                        <span className="text-sm text-[--color-muted]">{item.timeline}</span>
                      </div>
                      <p className="mt-2 text-sm text-[--color-text]">{item.desc}</p>
                    </div>
                  ))}
                </div>
              </div>
              
              <div>
                <h3 className="font-bold text-2xl text-[--color-primary]">What&rsquo;s Included</h3>
                <div className="mt-6 rounded-2xl border border-[--color-accent]/20 bg-[--color-accent]/5 p-6">
                  <ul className="space-y-3">
                    {[
                      "AI receptionist (Vapi) — custom voice, your scripts",
                      "CRM automation workflows (n8n/Zapier)",
                      "Booking pipeline connected to your calendar",
                      "Follow-up sequences for every lead type",
                      "Review automation and referral triggers",
                      "Weekly performance reports with £ metrics",
                      "Ongoing optimization and support",
                    ].map((item) => (
                      <li key={item} className="flex gap-3 text-sm text-[--color-text]">
                        <span className="text-[--color-accent]">✓</span>
                        {item}
                      </li>
                    ))}
                  </ul>
                  
                  <div className="mt-6 pt-6 border-t border-[--color-accent]/20">
                    <div className="flex items-center justify-between">
                      <div>
                        <p className="font-semibold text-[--color-primary]">Founding Member Pricing</p>
                        <p className="text-sm text-[--color-muted]">First 10 clients only</p>
                      </div>
                      <div className="text-right">
                        <p className="text-2xl font-bold text-[--color-primary]">£297/mo</p>
                        <p className="text-sm text-[--color-muted]">Normally £497/mo</p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
      </ScrollFade>

      {/* HireOnce Spotlight */}
      <ScrollFade>
        <section className="py-24 bg-[--color-surface]">
          <div className="mx-auto max-w-6xl px-4">
            <div className="text-center mb-14">
              <h2 className="font-bold text-3xl text-[--color-primary] sm:text-4xl">
                HireOnce — Your 24/7 AI Employee
              </h2>
              <p className="mt-4 text-lg text-[--color-muted]">
                The only AI employee you&rsquo;ll ever need to hire
              </p>
            </div>
            
            <div className="grid gap-12 lg:grid-cols-2 lg:gap-16">
              <div className="rounded-2xl border border-gray-200 bg-white p-8">
                <h3 className="font-bold text-xl text-[--color-primary] mb-6">
                  What Your AI Employee Does
                </h3>
                <div className="grid gap-6 sm:grid-cols-2">
                  {[
                    {
                      category: "Customer Communication",
                      tasks: ["Answer calls & messages", "Book appointments", "Send follow-ups", "Handle support requests"],
                    },
                    {
                      category: "Admin & Operations",
                      tasks: ["Data entry", "Invoice generation", "Scheduling", "Report creation"],
                    },
                    {
                      category: "Sales Support",
                      tasks: ["Lead qualification", "Quote follow-up", "Pipeline management", "Review requests"],
                    },
                    {
                      category: "Business Intelligence",
                      tasks: ["Performance tracking", "Competitor monitoring", "Market research", "Process optimization"],
                    },
                  ].map((section) => (
                    <div key={section.category}>
                      <h4 className="font-semibold text-[--color-accent] mb-3">{section.category}</h4>
                      <ul className="space-y-1">
                        {section.tasks.map((task) => (
                          <li key={task} className="text-sm text-[--color-text]">• {task}</li>
                        ))}
                      </ul>
                    </div>
                  ))}
                </div>
              </div>
              
              <div className="rounded-2xl border border-[--color-primary]/20 bg-[--color-primary]/5 p-8">
                <h3 className="font-bold text-xl text-[--color-primary] mb-6">
                  Fully Managed Service
                </h3>
                <div className="space-y-4 text-sm text-[--color-text]">
                  <div className="flex gap-3">
                    <span className="text-[--color-accent]">✓</span>
                    <div>
                      <strong>Complete Setup:</strong> We handle everything — OpenClaw installation, AI training, workflow configuration, tool integration.
                    </div>
                  </div>
                  <div className="flex gap-3">
                    <span className="text-[--color-accent]">✓</span>
                    <div>
                      <strong>Ongoing Training:</strong> Your AI gets better over time as it learns your business and customer patterns.
                    </div>
                  </div>
                  <div className="flex gap-3">
                    <span className="text-[--color-accent]">✓</span>
                    <div>
                      <strong>24/7 Monitoring:</strong> We monitor performance and make adjustments. You focus on running your business.
                    </div>
                  </div>
                  <div className="flex gap-3">
                    <span className="text-[--color-accent]">✓</span>
                    <div>
                      <strong>White-Glove Support:</strong> Direct access to Manny for questions, adjustments, and new requirements.
                    </div>
                  </div>
                </div>
                
                <div className="mt-8 pt-6 border-t border-[--color-primary]/20">
                  <div className="flex items-center justify-between">
                    <div>
                      <p className="font-semibold text-[--color-primary]">All-Inclusive Pricing</p>
                      <p className="text-sm text-[--color-muted]">Setup + Management + Support</p>
                    </div>
                    <div className="text-right">
                      <p className="text-2xl font-bold text-[--color-primary]">£497/mo</p>
                      <p className="text-sm text-[--color-muted]">No setup fees</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
      </ScrollFade>

      {/* ROI Comparison */}
      <ScrollFade>
        <section className="py-24 bg-white">
          <div className="mx-auto max-w-4xl px-4">
            <h2 className="text-center font-bold text-3xl text-[--color-primary] sm:text-4xl">
              ROI vs Hiring
            </h2>
            <div className="mt-12 overflow-hidden rounded-2xl border border-gray-200">
              <div className="grid grid-cols-3 gap-0">
                <div className="bg-gray-50 p-4 font-semibold text-[--color-primary] text-center border-r border-gray-200">
                  Cost Factor
                </div>
                <div className="bg-red-50 p-4 font-semibold text-red-700 text-center border-r border-gray-200">
                  Human Employee
                </div>
                <div className="bg-green-50 p-4 font-semibold text-green-700 text-center">
                  HireOnce AI
                </div>
                
                {[
                  ["Salary", "£18,000-25,000/year", "£5,964/year"],
                  ["Benefits & NI", "£3,000-5,000/year", "£0"],
                  ["Training Time", "2-4 weeks", "Immediate"],
                  ["Sick Days", "5-10 days/year", "Never"],
                  ["Availability", "40 hours/week", "24/7/365"],
                  ["Consistency", "Variable", "Perfect"],
                  ["Scaling", "Hire more people", "Instant expansion"],
                ].map(([factor, human, ai]) => (
                  <>
                    <div key={`${factor}-factor`} className="p-4 text-sm border-r border-gray-200 border-t border-gray-200">
                      {factor}
                    </div>
                    <div key={`${factor}-human`} className="p-4 text-sm text-red-700 border-r border-gray-200 border-t border-gray-200">
                      {human}
                    </div>
                    <div key={`${factor}-ai`} className="p-4 text-sm text-green-700 border-t border-gray-200">
                      {ai}
                    </div>
                  </>
                ))}
              </div>
            </div>
            <p className="mt-6 text-center text-sm text-[--color-muted]">
              *Based on UK minimum wage + employer costs for part-time admin role
            </p>
          </div>
        </section>
      </ScrollFade>

      {/* Next Steps */}
      <ScrollFade>
        <section className="py-24 bg-[--color-surface]">
          <div className="mx-auto max-w-4xl px-4 text-center">
            <h2 className="font-bold text-3xl text-[--color-primary] sm:text-4xl">
              Ready to Stop Losing Revenue?
            </h2>
            <p className="mt-6 text-lg text-[--color-muted]">
              Start with our free audit to see exactly where your business is bleeding money.
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