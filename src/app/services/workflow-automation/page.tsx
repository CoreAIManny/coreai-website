import type { Metadata } from "next";
import { CTA } from "@/components/CTA";

export const metadata: Metadata = {
  title: "Workflow Automation",
  description:
    "Custom n8n workflow automation for UK businesses. Automate lead follow-ups, CRM updates, invoicing, and more. No code required from you.",
};

export default function WorkflowAutomation() {
  return (
    <>
      <section className="mx-auto max-w-6xl px-4 pb-20 pt-24">
        <div className="mx-auto max-w-3xl">
          <p className="text-sm font-medium uppercase tracking-wider text-[--color-accent]">
            Workflow Automation
          </p>
          <h1 className="mt-4 text-4xl font-bold tracking-tight sm:text-5xl">
            Stop doing manually what a machine can do in seconds.
          </h1>
          <p className="mt-6 text-lg text-[--color-muted]">
            Every evening you spend copying data between apps, chasing invoices,
            or updating spreadsheets is an evening you don&rsquo;t get back. I
            build automated workflows that handle it all.
          </p>
        </div>

        <div className="mx-auto mt-16 max-w-3xl">
          <h2 className="text-2xl font-bold">What I automate</h2>
          <div className="mt-8 space-y-6">
            {[
              {
                title: "Lead follow-up",
                desc: "New enquiry comes in → instant acknowledgement email → added to CRM → follow-up sequence starts. No manual steps.",
              },
              {
                title: "CRM updates",
                desc: "Call ends → transcript saved → lead tagged → job card created. Your CRM stays current without you touching it.",
              },
              {
                title: "Invoice & payment chasing",
                desc: "Job completed → invoice generated → sent to client → automated reminders at 7, 14, 30 days. You get paid faster.",
              },
              {
                title: "Reporting & dashboards",
                desc: "Weekly summary of calls taken, leads qualified, jobs booked, revenue generated. Know your numbers without digging.",
              },
              {
                title: "Multi-app integration",
                desc: "Jobber, Housecall Pro, Google Calendar, Xero, QuickBooks, Slack, WhatsApp — connected and synced automatically.",
              },
            ].map((item, i) => (
              <div
                key={i}
                className="rounded-xl border border-[--color-border] bg-[--color-surface] p-6"
              >
                <h3 className="font-semibold">{item.title}</h3>
                <p className="mt-2 text-sm text-[--color-muted]">
                  {item.desc}
                </p>
              </div>
            ))}
          </div>
        </div>

        <div className="mx-auto mt-16 max-w-3xl">
          <h2 className="text-2xl font-bold">Built on n8n</h2>
          <p className="mt-4 text-[--color-muted]">
            I use n8n — the most flexible workflow automation platform available.
            Unlike Zapier, there are no per-task limits bleeding your wallet dry.
            Your workflows run on infrastructure you control, with full
            transparency on costs.
          </p>
          <p className="mt-4 text-[--color-muted]">
            Every workflow is documented, tested, and handed over with a
            walkthrough so your team can understand exactly what&rsquo;s happening.
            No black boxes.
          </p>
        </div>
      </section>

      <CTA headline="Let's automate the boring stuff" />
    </>
  );
}
