import type { Metadata } from "next";
import Link from "next/link";
import { ScrollFade } from "@/components/ScrollFade";

export const metadata: Metadata = {
  title: "Pricing — Revenue Recovery Audit & AI Solutions | Core AI Solutions",
  description: "Free AI Readiness Audit → £297 Revenue Recovery Audit → Implementation from £297/mo. Founding member pricing available. Transparent, ROI-focused pricing.",
};

export default function PricingPage() {
  return (
    <>
      {/* Hero */}
      <section className="relative overflow-hidden bg-white pt-32">
        <div className="mx-auto max-w-4xl px-4 pb-16">
          <div className="text-center">
            <h1 className="font-bold text-5xl tracking-tight text-primary sm:text-6xl">
              Pricing That Pays for Itself
            </h1>
            <p className="mx-auto mt-6 max-w-2xl text-lg text-muted sm:text-xl">
              Start with a free audit to find your revenue leaks. Every solution is designed to recover more than it costs.
            </p>
          </div>
        </div>
      </section>

      {/* Audit Pricing */}
      <ScrollFade>
        <section className="py-24 bg-surface">
          <div className="mx-auto max-w-6xl px-4">
            <h2 className="text-center font-bold text-3xl text-primary sm:text-4xl">
              Find Your Revenue Leaks First
            </h2>
            <p className="mt-4 text-center text-muted">
              Two ways to discover exactly where your business is bleeding money
            </p>
            
            <div className="mt-14 grid gap-8 lg:grid-cols-2">
              {/* Free Audit */}
              <div className="rounded-3xl border border-accent/30 bg-gradient-to-br from-accent/5 to-white p-8 shadow-lg sm:p-12">
                <div className="text-center">
                  <div className="mb-4 inline-flex items-center gap-2 rounded-full border border-accent/30 bg-accent/10 px-4 py-1.5 text-sm text-accent">
                    <span>🆓</span>
                    <span>Free</span>
                  </div>
                  
                  <h3 className="font-bold text-2xl text-primary tracking-tight">
                    AI Readiness Audit
                  </h3>
                  
                  <div className="my-6">
                    <div className="text-4xl font-bold text-primary">£0</div>
                    <p className="text-sm text-muted">Self-service assessment</p>
                  </div>
                  
                  <ul className="space-y-3 text-left text-sm text-text">
                    <li className="flex gap-3"><span className="text-accent">✓</span> 10-minute online assessment</li>
                    <li className="flex gap-3"><span className="text-accent">✓</span> Auto-generated readiness score</li>
                    <li className="flex gap-3"><span className="text-accent">✓</span> 3 quick wins you can implement today</li>
                    <li className="flex gap-3"><span className="text-accent">✓</span> Tailored recommendations</li>
                    <li className="flex gap-3"><span className="text-accent">✓</span> No call required</li>
                  </ul>
                  
                  <div className="mt-8">
                    <Link
                      href="/audit"
                      className="block rounded-full bg-accent py-3 text-center font-semibold text-white shadow-lg transition hover:bg-accent-hover"
                    >
                      Take Free Audit →
                    </Link>
                  </div>
                </div>
              </div>

              {/* Paid Audit */}
              <div className="rounded-3xl border border-primary/30 bg-gradient-to-br from-primary/5 to-white p-8 shadow-lg sm:p-12">
                <div className="text-center">
                  <div className="mb-4 inline-flex items-center gap-2 rounded-full border border-primary/30 bg-primary/10 px-4 py-1.5 text-sm text-primary">
                    <span>💰</span>
                    <span>Professional Analysis</span>
                  </div>
                  
                  <h3 className="font-bold text-2xl text-primary tracking-tight">
                    Revenue Recovery Audit
                  </h3>
                  
                  <div className="my-6">
                    <div className="text-4xl font-bold text-primary">£297</div>
                    <p className="text-sm text-muted">One-off payment</p>
                  </div>
                  
                  <ul className="space-y-3 text-left text-sm text-text">
                    <li className="flex gap-3"><span className="text-primary">✓</span> 60-90 min deep dive with Manny</li>
                    <li className="flex gap-3"><span className="text-primary">✓</span> Enterprise-grade P&L analysis</li>
                    <li className="flex gap-3"><span className="text-primary">✓</span> Exact £ figures on every leak</li>
                    <li className="flex gap-3"><span className="text-primary">✓</span> Professional report in 48hrs</li>
                    <li className="flex gap-3"><span className="text-primary">✓</span> ROI projections & implementation roadmap</li>
                  </ul>
                  
                  <div className="mt-8">
                    <Link
                      href="/revenue-recovery"
                      className="block rounded-full bg-primary py-3 text-center font-semibold text-white shadow-lg transition hover:bg-primary/90"
                    >
                      Book for £297 →
                    </Link>
                  </div>
                </div>
              </div>
            </div>
            
            <div className="mt-12 text-center">
              <div className="inline-flex items-center gap-2 rounded-full border border-yellow-300 bg-yellow-50 px-6 py-3">
                <span className="text-2xl">⚡</span>
                <span className="font-semibold text-yellow-800">
                  Revenue Recovery Guarantee: Find £1,000+/month in leaks or full refund
                </span>
              </div>
            </div>
          </div>
        </section>
      </ScrollFade>

      {/* Implementation Pricing */}
      <ScrollFade>
        <section className="py-24 bg-white">
          <div className="mx-auto max-w-6xl px-4">
            <h2 className="text-center font-bold text-3xl text-primary sm:text-4xl">
              Implementation & Ongoing Solutions
            </h2>
            <p className="mt-4 text-center text-muted">
              After your audit, choose how to fix the revenue leaks we found
            </p>
            
            <div className="mt-14 grid gap-8 lg:grid-cols-2">
              {/* Revenue Recovery Engine */}
              <div className="rounded-3xl border border-gray-200 bg-white p-8 shadow-lg">
                <div className="mb-6">
                  <h3 className="font-bold text-2xl text-primary">Revenue Recovery Engine</h3>
                  <p className="mt-2 text-muted">Complete AI automation to plug your revenue leaks</p>
                </div>
                
                <div className="mb-6">
                  <div className="flex items-baseline gap-2">
                    <div className="text-3xl font-bold text-primary">£297/mo</div>
                    <div className="text-sm text-muted">
                      <span className="line-through">£497/mo</span> Founding Member
                    </div>
                  </div>
                  <p className="text-sm text-green-600 font-medium">First 10 clients only • Pay after 30 days of results</p>
                </div>
                
                <div className="mb-6">
                  <h4 className="font-semibold text-lg text-primary mb-3">What&rsquo;s Included</h4>
                  <ul className="space-y-2 text-sm text-text">
                    <li className="flex gap-2"><span className="text-accent">•</span> AI receptionist (Vapi) — custom voice, your scripts</li>
                    <li className="flex gap-2"><span className="text-accent">•</span> CRM automation workflows (n8n)</li>
                    <li className="flex gap-2"><span className="text-accent">•</span> Booking pipeline connected to your calendar</li>
                    <li className="flex gap-2"><span className="text-accent">•</span> Follow-up sequences for every lead type</li>
                    <li className="flex gap-2"><span className="text-accent">•</span> Review automation and referral triggers</li>
                    <li className="flex gap-2"><span className="text-accent">•</span> Weekly performance reports with £ metrics</li>
                    <li className="flex gap-2"><span className="text-accent">•</span> Ongoing optimization and support</li>
                  </ul>
                </div>
                
                <Link
                  href="/book-demo"
                  className="block rounded-full bg-accent py-3 text-center font-semibold text-white shadow-lg transition hover:bg-accent-hover"
                >
                  Secure Founding Member Pricing →
                </Link>
              </div>

              {/* HireOnce */}
              <div className="rounded-3xl border border-gray-200 bg-white p-8 shadow-lg">
                <div className="mb-6">
                  <h3 className="font-bold text-2xl text-primary">HireOnce AI Employee</h3>
                  <p className="mt-2 text-muted">Your 24/7 AI employee — fully managed</p>
                </div>
                
                <div className="mb-6">
                  <div className="text-3xl font-bold text-primary">£497/mo</div>
                  <p className="text-sm text-muted">All-inclusive • Setup + Management + Support</p>
                </div>
                
                <div className="mb-6">
                  <h4 className="font-semibold text-lg text-primary mb-3">What Your AI Does</h4>
                  <div className="grid gap-4 sm:grid-cols-2 text-xs text-text">
                    <div>
                      <p className="font-medium text-accent mb-1">Customer Comms</p>
                      <ul className="space-y-1">
                        <li>• Answer calls & messages</li>
                        <li>• Book appointments</li>
                        <li>• Handle support</li>
                      </ul>
                    </div>
                    <div>
                      <p className="font-medium text-accent mb-1">Admin & Operations</p>
                      <ul className="space-y-1">
                        <li>• Data entry</li>
                        <li>• Invoice generation</li>
                        <li>• Scheduling</li>
                      </ul>
                    </div>
                    <div>
                      <p className="font-medium text-accent mb-1">Sales Support</p>
                      <ul className="space-y-1">
                        <li>• Lead qualification</li>
                        <li>• Quote follow-up</li>
                        <li>• Pipeline management</li>
                      </ul>
                    </div>
                    <div>
                      <p className="font-medium text-accent mb-1">Intelligence</p>
                      <ul className="space-y-1">
                        <li>• Performance tracking</li>
                        <li>• Market research</li>
                        <li>• Process optimization</li>
                      </ul>
                    </div>
                  </div>
                </div>
                
                <div className="mb-6 rounded-lg border border-blue-200 bg-blue-50 p-3">
                  <p className="text-sm text-blue-800">
                    <strong>Fully Managed:</strong> We handle setup, training, monitoring, and optimization. 
                    You just tell it what to do.
                  </p>
                </div>
                
                <Link
                  href="/book-demo"
                  className="block rounded-full bg-primary py-3 text-center font-semibold text-white shadow-lg transition hover:bg-primary/90"
                >
                  Hire Your AI Employee →
                </Link>
              </div>
            </div>
            
            <div className="mt-12 text-center">
              <p className="text-sm text-muted">
                Both solutions include setup, training, integration, and ongoing support. 
                <br />No hidden fees. No lock-in contracts. Cancel anytime.
              </p>
            </div>
          </div>
        </section>
      </ScrollFade>

      {/* ROI Calculator */}
      <ScrollFade>
        <section className="py-24 bg-surface">
          <div className="mx-auto max-w-4xl px-4">
            <h2 className="text-center font-bold text-3xl text-primary sm:text-4xl">
              ROI Calculator
            </h2>
            <p className="mt-4 text-center text-muted">
              See how quickly our solutions pay for themselves
            </p>
            
            <div className="mt-12 grid gap-8 sm:grid-cols-2">
              {/* Scenario 1 */}
              <div className="rounded-2xl border border-gray-200 bg-white p-6">
                <h3 className="font-bold text-lg text-primary mb-4">Conservative Scenario</h3>
                <div className="space-y-3 text-sm">
                  <div className="flex justify-between">
                    <span>Missed calls per week:</span>
                    <span className="font-semibold">3</span>
                  </div>
                  <div className="flex justify-between">
                    <span>Average job value:</span>
                    <span className="font-semibold">£150</span>
                  </div>
                  <div className="flex justify-between">
                    <span>Monthly revenue lost:</span>
                    <span className="font-semibold text-red-600">£1,800</span>
                  </div>
                  <div className="flex justify-between border-t border-gray-200 pt-3">
                    <span>Revenue Recovery Engine:</span>
                    <span className="font-semibold text-green-600">£297/mo</span>
                  </div>
                  <div className="flex justify-between font-bold text-lg">
                    <span>ROI:</span>
                    <span className="text-green-600">6x return</span>
                  </div>
                </div>
              </div>

              {/* Scenario 2 */}
              <div className="rounded-2xl border border-gray-200 bg-white p-6">
                <h3 className="font-bold text-lg text-primary mb-4">Typical Scenario</h3>
                <div className="space-y-3 text-sm">
                  <div className="flex justify-between">
                    <span>Missed calls per week:</span>
                    <span className="font-semibold">5</span>
                  </div>
                  <div className="flex justify-between">
                    <span>Average job value:</span>
                    <span className="font-semibold">£250</span>
                  </div>
                  <div className="flex justify-between">
                    <span>Monthly revenue lost:</span>
                    <span className="font-semibold text-red-600">£5,000</span>
                  </div>
                  <div className="flex justify-between border-t border-gray-200 pt-3">
                    <span>HireOnce AI Employee:</span>
                    <span className="font-semibold text-green-600">£497/mo</span>
                  </div>
                  <div className="flex justify-between font-bold text-lg">
                    <span>ROI:</span>
                    <span className="text-green-600">10x return</span>
                  </div>
                </div>
              </div>
            </div>
            
            <div className="mt-8 text-center">
              <div className="inline-flex items-center gap-2 rounded-full border border-green-200 bg-green-50 px-6 py-3">
                <span className="text-2xl">💡</span>
                <span className="font-semibold text-green-800">
                  Even capturing just 50% of missed opportunities pays for the entire system
                </span>
              </div>
            </div>
          </div>
        </section>
      </ScrollFade>

      {/* Pricing Philosophy */}
      <ScrollFade>
        <section className="py-24 bg-white">
          <div className="mx-auto max-w-4xl px-4 text-center">
            <h2 className="font-bold text-3xl text-primary sm:text-4xl">
              Our Pricing Philosophy
            </h2>
            <p className="mt-6 text-lg text-muted">
              Every price point is designed to deliver immediate, measurable ROI. No vanity metrics. Just recovered revenue.
            </p>
            
            <div className="mt-12 grid gap-8 sm:grid-cols-3">
              {[
                {
                  principle: "ROI-First",
                  desc: "Every solution must recover more revenue than it costs. If it doesn't pay for itself, we don't offer it.",
                  icon: "💰",
                },
                {
                  principle: "Transparent",
                  desc: "No hidden fees, no surprise charges, no price increases for the first year. What you see is what you pay.",
                  icon: "🔍",
                },
                {
                  principle: "Risk-Free",
                  desc: "30-day money-back guarantee. If you don't see results, you don't pay. Simple as that.",
                  icon: "🛡️",
                },
              ].map((item) => (
                <div key={item.principle} className="text-center">
                  <div className="text-4xl">{item.icon}</div>
                  <h3 className="mt-4 font-bold text-lg text-primary">{item.principle}</h3>
                  <p className="mt-2 text-sm text-muted">{item.desc}</p>
                </div>
              ))}
            </div>
          </div>
        </section>
      </ScrollFade>

      {/* CTA */}
      <ScrollFade>
        <section className="py-24 bg-surface">
          <div className="mx-auto max-w-4xl px-4 text-center">
            <h2 className="font-bold text-3xl text-primary sm:text-4xl">
              Start with Your Free Audit
            </h2>
            <p className="mt-6 text-lg text-muted">
              Find out exactly where your business is bleeding money. Then decide how to fix it.
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
          </div>
        </section>
      </ScrollFade>
    </>
  );
}