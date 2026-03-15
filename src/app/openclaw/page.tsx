import type { Metadata } from "next";
import Link from "next/link";
import { CTA } from "@/components/CTA";

export const metadata: Metadata = {
  title: "OpenClaw Setup & Deployment | Core AI Solutions",
  description: "Production OpenClaw deployments for real businesses. Custom AI employees that integrate with your tools, remember context, and work proactively. 5 live instances across 3 countries.",
};

export default function OpenClawPage() {
  return (
    <main className="min-h-screen bg-white text-text pt-24">
      {/* Hero Section */}
      <section className="relative overflow-hidden px-4 py-20 sm:py-32">
        {/* Decorative gradient blobs */}
        <div className="absolute left-0 top-0 h-96 w-96 -translate-x-1/2 -translate-y-1/2 rounded-full bg-accent opacity-20 blur-3xl" />
        <div className="absolute bottom-0 right-0 h-96 w-96 translate-x-1/2 translate-y-1/2 rounded-full bg-accent opacity-10 blur-3xl" />
        
        <div className="relative mx-auto max-w-6xl">
          {/* Pill badge */}
          <div className="mb-6 flex justify-center">
            <span className="inline-flex items-center gap-2 rounded-full border border-accent/30 bg-accent/10 px-4 py-1.5 text-sm text-accent">
              <span className="inline-block h-1.5 w-1.5 rounded-full bg-accent animate-pulse" />
              5 Production Instances • Real Client Deployments
            </span>
          </div>

          {/* Heading */}
          <h1 className="mb-6 text-center font-[family-name:var(--font-playfair)] text-5xl sm:text-6xl lg:text-7xl leading-tight">
            OpenClaw Setup & Deployment
            <br />
            <span className="text-muted">Done For You</span>
          </h1>

          {/* Description */}
          <p className="mx-auto mb-8 max-w-3xl text-center text-lg text-muted sm:text-xl">
            One of the few consultants actually running OpenClaw in production for paying businesses. Not demos. Not toys. Real deployments that handle real work, 24/7.
          </p>

          {/* CTA Button */}
          <div className="mb-8 flex justify-center">
            <Link
              href="/book-demo"
              className="rounded-full bg-accent px-8 py-3.5 font-medium text-white shadow-lg shadow-accent/25 transition hover:bg-accent-hover"
            >
              Book a Free Consultation →
            </Link>
          </div>

          {/* Trust line */}
          <p className="text-center text-sm text-muted">
            Manny Amoah, ACCA — 5 production instances serving businesses across 3 countries
          </p>
        </div>
      </section>

      {/* What You Get Section */}
      <section className="px-4 py-16">
        <div className="mx-auto max-w-6xl">
          <h2 className="mb-12 text-center font-[family-name:var(--font-playfair)] text-4xl sm:text-5xl">
            What You Get
          </h2>

          <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
            {/* Card 1 */}
            <div className="rounded-xl border border-border bg-surface p-6">
              <div className="mb-4 text-4xl">🧠</div>
              <h3 className="mb-3 text-xl font-semibold">Custom AI Personality</h3>
              <p className="text-muted">
                Your AI employee is configured from a 26-question onboarding form. It knows your business, your tone, your processes — not generic ChatGPT.
              </p>
            </div>

            {/* Card 2 */}
            <div className="rounded-xl border border-border bg-surface p-6">
              <div className="mb-4 text-4xl">📧</div>
              <h3 className="mb-3 text-xl font-semibold">Google Workspace Integration</h3>
              <p className="text-muted">
                Gmail, Calendar, Drive, Sheets — all connected. Your AI reads emails, books meetings, manages documents, and updates spreadsheets.
              </p>
            </div>

            {/* Card 3 */}
            <div className="rounded-xl border border-border bg-surface p-6">
              <div className="mb-4 text-4xl">💬</div>
              <h3 className="mb-3 text-xl font-semibold">Messaging Channels</h3>
              <p className="text-muted">
                Deployed on Telegram or WhatsApp. Talk to your AI employee like you'd message a team member. It's always available.
              </p>
            </div>

            {/* Card 4 */}
            <div className="rounded-xl border border-border bg-surface p-6">
              <div className="mb-4 text-4xl">🔍</div>
              <h3 className="mb-3 text-xl font-semibold">Research & Content</h3>
              <p className="text-muted">
                Web research, competitor analysis, content drafts, social media posts. Your AI does the legwork so you can focus on decisions.
              </p>
            </div>

            {/* Card 5 */}
            <div className="rounded-xl border border-border bg-surface p-6">
              <div className="mb-4 text-4xl">⚡</div>
              <h3 className="mb-3 text-xl font-semibold">Optimised Costs</h3>
              <p className="text-muted">
                Smart model tiering — fast AI for routine tasks, powerful AI for complex thinking. Most clients pay just £8-15/month in AI costs.
              </p>
            </div>

            {/* Card 6 */}
            <div className="rounded-xl border border-border bg-surface p-6">
              <div className="mb-4 text-4xl">🔄</div>
              <h3 className="mb-3 text-xl font-semibold">Proactive Automation</h3>
              <p className="text-muted">
                Your AI doesn't wait to be asked. It checks emails, monitors deadlines, sends follow-ups, and flags what needs your attention.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Real Deployments Section */}
      <section className="px-4 py-16">
        <div className="mx-auto max-w-6xl">
          <h2 className="mb-4 text-center font-[family-name:var(--font-playfair)] text-4xl sm:text-5xl">
            Real Businesses. Real Deployments.
          </h2>
          <p className="mb-12 text-center text-muted">
            Not demos or side projects — these are production AI employees handling real work daily.
          </p>

          <div className="grid gap-6 sm:grid-cols-2">
            {/* Deployment 1 */}
            <div className="rounded-xl border-l-4 border-accent bg-surface p-6">
              <div className="mb-3 text-3xl">🏥</div>
              <h3 className="mb-2 text-xl font-semibold">Healthcare Agency</h3>
              <p className="mb-3 text-sm text-accent">55+ staff</p>
              <p className="text-muted">
                Scheduling coordination, compliance reminders, carer communications, HR fast-tracking
              </p>
            </div>

            {/* Deployment 2 */}
            <div className="rounded-xl border-l-4 border-accent bg-surface p-6">
              <div className="mb-3 text-3xl">🎨</div>
              <h3 className="mb-2 text-xl font-semibold">Events & Décor</h3>
              <p className="mb-3 text-sm text-accent">Growing startup</p>
              <p className="text-muted">
                Vendor coordination, quote follow-up, client communications, content creation
              </p>
            </div>

            {/* Deployment 3 */}
            <div className="rounded-xl border-l-4 border-accent bg-surface p-6">
              <div className="mb-3 text-3xl">📚</div>
              <h3 className="mb-2 text-xl font-semibold">SEN Consultant</h3>
              <p className="mb-3 text-sm text-accent">Solo practitioner</p>
              <p className="text-muted">
                Case tracking, EHCP deadline management, research, document drafting
              </p>
            </div>

            {/* Deployment 4 */}
            <div className="rounded-xl border-l-4 border-accent bg-surface p-6">
              <div className="mb-3 text-3xl">🚗</div>
              <h3 className="mb-2 text-xl font-semibold">Auto Detailing</h3>
              <p className="mb-3 text-sm text-accent">US-based</p>
              <p className="text-muted">
                Booking management, customer communications, follow-up sequences, review requests
              </p>
            </div>

            {/* Deployment 5 */}
            <div className="col-span-full rounded-xl border-l-4 border-accent bg-surface p-6 sm:col-span-1">
              <div className="mb-3 text-3xl">📊</div>
              <h3 className="mb-2 text-xl font-semibold">Business Strategy</h3>
              <p className="mb-3 text-sm text-accent">Internal deployment</p>
              <p className="text-muted">
                Market research, lead tracking, content pipeline, financial analysis
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* How It Works Section */}
      <section className="px-4 py-16">
        <div className="mx-auto max-w-6xl">
          <h2 className="mb-12 text-center font-[family-name:var(--font-playfair)] text-4xl sm:text-5xl">
            How It Works
          </h2>

          <div className="space-y-8">
            {/* Step 1 */}
            <div className="flex gap-6">
              <div className="flex-shrink-0">
                <div className="flex h-12 w-12 items-center justify-center rounded-full bg-accent text-xl font-bold">
                  01
                </div>
              </div>
              <div>
                <h3 className="mb-2 text-2xl font-semibold">Discovery Call</h3>
                <p className="text-muted">
                  We talk for 15 minutes. I understand your business, your pain points, and where an AI employee would save you the most time and money.
                </p>
              </div>
            </div>

            {/* Step 2 */}
            <div className="flex gap-6">
              <div className="flex-shrink-0">
                <div className="flex h-12 w-12 items-center justify-center rounded-full bg-accent text-xl font-bold">
                  02
                </div>
              </div>
              <div>
                <h3 className="mb-2 text-2xl font-semibold">Onboarding</h3>
                <p className="text-muted">
                  You fill out a 26-question form about your business. This captures your DNA — your tone, your processes, your tools, your priorities.
                </p>
              </div>
            </div>

            {/* Step 3 */}
            <div className="flex gap-6">
              <div className="flex-shrink-0">
                <div className="flex h-12 w-12 items-center justify-center rounded-full bg-accent text-xl font-bold">
                  03
                </div>
              </div>
              <div>
                <h3 className="mb-2 text-2xl font-semibold">Deployment</h3>
                <p className="text-muted">
                  I configure and deploy your custom AI employee on secure infrastructure. Connected to your tools, trained on your business, ready to work.
                </p>
              </div>
            </div>

            {/* Step 4 */}
            <div className="flex gap-6">
              <div className="flex-shrink-0">
                <div className="flex h-12 w-12 items-center justify-center rounded-full bg-accent text-xl font-bold">
                  04
                </div>
              </div>
              <div>
                <h3 className="mb-2 text-2xl font-semibold">Optimisation</h3>
                <p className="text-muted">
                  Ongoing tuning, model selection, and cost management. Your AI gets smarter and more efficient over time.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Pricing Section */}
      <section className="px-4 py-16">
        <div className="mx-auto max-w-6xl">
          <h2 className="mb-12 text-center font-[family-name:var(--font-playfair)] text-4xl sm:text-5xl">
            Simple, Transparent Pricing
          </h2>

          <div className="mb-8 grid gap-8 sm:grid-cols-2">
            {/* Setup */}
            <div className="rounded-xl border border-border bg-surface p-8 text-center">
              <div className="mb-2 font-[family-name:var(--font-playfair)] text-5xl font-bold text-accent">
                From £497
              </div>
              <div className="mb-3 text-xl font-semibold">One-time setup</div>
              <p className="text-muted">
                Discovery, onboarding, full deployment and configuration
              </p>
            </div>

            {/* Monthly */}
            <div className="rounded-xl border border-border bg-surface p-8 text-center">
              <div className="mb-2 font-[family-name:var(--font-playfair)] text-5xl font-bold text-accent">
                From £197/mo
              </div>
              <div className="mb-3 text-xl font-semibold">Monthly retainer</div>
              <p className="text-muted">
                Hosting, monitoring, updates, and support
              </p>
            </div>
          </div>

          <p className="mb-8 text-center text-sm text-muted">
            AI API costs typically £8-15/month per instance with optimised model tiering. You only pay for what your AI actually uses.
          </p>

          <div className="flex justify-center">
            <Link
              href="/book-demo"
              className="rounded-full bg-accent px-8 py-3.5 font-medium text-white shadow-lg shadow-accent/25 transition hover:bg-accent-hover"
            >
              Book a Free Consultation →
            </Link>
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="px-4 py-16">
        <div className="mx-auto max-w-4xl">
          <h2 className="mb-12 text-center font-[family-name:var(--font-playfair)] text-4xl sm:text-5xl">
            Frequently Asked Questions
          </h2>

          <div className="space-y-6">
            {/* FAQ 1 */}
            <div className="rounded-xl border border-border bg-surface p-6">
              <h3 className="mb-3 text-xl font-semibold">What is OpenClaw?</h3>
              <p className="text-muted">
                OpenClaw is an open-source AI employee platform with over 247,000 GitHub stars. Think of it as giving your business a full-time AI team member that can use your tools, remember context, and work proactively — not just answer questions when asked.
              </p>
            </div>

            {/* FAQ 2 */}
            <div className="rounded-xl border border-border bg-surface p-6">
              <h3 className="mb-3 text-xl font-semibold">How is this different from ChatGPT?</h3>
              <p className="text-muted">
                ChatGPT forgets everything between conversations and can't connect to your business tools. OpenClaw has persistent memory, integrates with Google Workspace, CRM, calendars, and messaging — and it works proactively without being prompted.
              </p>
            </div>

            {/* FAQ 3 */}
            <div className="rounded-xl border border-border bg-surface p-6">
              <h3 className="mb-3 text-xl font-semibold">What can it actually do?</h3>
              <p className="text-muted">
                Email management, calendar scheduling, lead follow-up, web research, content drafting, document creation, data entry, customer communications, compliance tracking, and more. If it involves a screen and a keyboard, your AI employee can probably handle it.
              </p>
            </div>

            {/* FAQ 4 */}
            <div className="rounded-xl border border-border bg-surface p-6">
              <h3 className="mb-3 text-xl font-semibold">Is my data safe?</h3>
              <p className="text-muted">
                Your AI employee runs on dedicated infrastructure — not shared with anyone else. All data stays within your deployment. Enterprise-grade security with encrypted communications.
              </p>
            </div>

            {/* FAQ 5 */}
            <div className="rounded-xl border border-border bg-surface p-6">
              <h3 className="mb-3 text-xl font-semibold">What if I need changes after setup?</h3>
              <p className="text-muted">
                That's what the monthly retainer covers. Ongoing support, configuration changes, new integrations, and performance optimisation are all included.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Bottom CTA */}
      <section className="px-4 py-16">
        <CTA 
          headline="Ready for an AI employee that actually works?" 
          sub="Book a 15-minute call. I'll show you exactly how OpenClaw fits your business." 
        />
      </section>
    </main>
  );
}
