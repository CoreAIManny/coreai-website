import type { Metadata } from "next";
import { VapiWidget } from "@/components/VapiWidget";
import { CTA } from "@/components/CTA";

export const metadata: Metadata = {
  title: "AI Receptionist",
  description:
    "AI receptionist that answers every call in 0.5 seconds, qualifies leads, and books appointments. Built for UK small businesses. Try it live now.",
};

export default function AIReceptionist() {
  return (
    <>
      <section className="mx-auto max-w-6xl px-4 pb-20 pt-24">
        <div className="mx-auto max-w-3xl">
          <p className="text-sm font-medium uppercase tracking-wider text-[--color-accent]">
            AI Receptionist
          </p>
          <h1 className="mt-4 text-4xl font-bold tracking-tight sm:text-5xl">
            Your phone rings. The AI answers in 0.5 seconds.
          </h1>
          <p className="mt-6 text-lg text-[--color-muted]">
            It asks the right qualifying questions. If it&rsquo;s a real lead,
            it books them into your calendar and texts you the details. If
            it&rsquo;s a time-waster, it handles them politely and moves on. You
            never hear about it.
          </p>
        </div>

        {/* Live demo */}
        <div className="mx-auto mt-16 max-w-2xl rounded-2xl border border-[--color-border] bg-[--color-surface] p-8 text-center sm:p-12">
          <h2 className="text-2xl font-bold">Try it yourself. Right now.</h2>
          <p className="mt-2 text-[--color-muted]">
            Press the button. Talk to it like a customer. See what happens.
          </p>
          <div className="mt-8">
            <VapiWidget />
          </div>
        </div>

        {/* How it works */}
        <div className="mx-auto mt-20 max-w-3xl">
          <h2 className="text-2xl font-bold">How it works</h2>
          <div className="mt-8 space-y-8">
            {[
              {
                title: "Call comes in",
                desc: "Your existing phone number forwards to the AI. The caller doesn't know the difference — it sounds natural, professional, and on-brand.",
              },
              {
                title: "AI qualifies the lead",
                desc: "It asks what they need, where they are, when they want the job done. Configurable questions tailored to your business.",
              },
              {
                title: "Books or routes",
                desc: "Good lead? Booked straight into your calendar. Emergency? Flagged and you get a call. Tyre-kicker? Handled politely, never bothers you.",
              },
              {
                title: "You get a text",
                desc: "Name, number, job details, urgency level. All in a text. You decide if you want to follow up — on your terms, not theirs.",
              },
            ].map((step, i) => (
              <div key={i} className="flex gap-6">
                <div className="flex h-8 w-8 shrink-0 items-center justify-center rounded-full bg-[--color-accent] text-sm font-bold">
                  {i + 1}
                </div>
                <div>
                  <h3 className="font-semibold">{step.title}</h3>
                  <p className="mt-1 text-[--color-muted]">{step.desc}</p>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Features */}
        <div className="mx-auto mt-20 max-w-3xl">
          <h2 className="text-2xl font-bold">What&rsquo;s included</h2>
          <div className="mt-8 grid gap-4 sm:grid-cols-2">
            {[
              "24/7/365 call answering",
              "Natural-sounding voice AI",
              "Custom qualifying questions",
              "Calendar booking integration",
              "SMS summaries after every call",
              "Call recordings & transcripts",
              "Business hours & holiday handling",
              "Spam & robocall filtering",
              "Monthly performance reports",
              "Setup in 5 business days",
            ].map((f) => (
              <div key={f} className="flex gap-2 text-[--color-muted]">
                <span className="text-green-400">✓</span> {f}
              </div>
            ))}
          </div>
        </div>
      </section>

      <CTA headline="Stop missing calls today" />
    </>
  );
}
