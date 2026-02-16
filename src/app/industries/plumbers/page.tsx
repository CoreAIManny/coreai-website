import type { Metadata } from "next";
import Link from "next/link";
import { CTA } from "@/components/CTA";

export const metadata: Metadata = {
  title: "AI Receptionist for Plumbers",
  description:
    "AI receptionist built for plumbers and tradespeople. Answers every call, qualifies emergency vs routine, books jobs into your calendar. From £497/mo. UK-based.",
  keywords: [
    "AI receptionist for plumbers UK",
    "plumber answering service",
    "AI phone answering plumbers",
    "automated call handling trades",
  ],
};

export default function Plumbers() {
  return (
    <>
      <section className="mx-auto max-w-6xl px-4 pb-20 pt-24">
        <div className="mx-auto max-w-3xl">
          <p className="text-sm font-medium uppercase tracking-wider text-[--color-accent]">
            AI for Plumbers
          </p>
          <h1 className="mt-4 text-4xl font-bold tracking-tight sm:text-5xl">
            You&rsquo;re under a boiler. The phone rings. Another job walks.
          </h1>
          <p className="mt-6 text-lg text-[--color-muted]">
            You can&rsquo;t answer the phone with your hands full of copper pipe.
            But that missed call? That was a £300 emergency call-out. Gone to the
            plumber who picked up.
          </p>
          <div className="mt-8">
            <Link
              href="/book-demo"
              className="rounded-full bg-[--color-accent] px-8 py-3.5 font-medium text-white transition hover:bg-[--color-accent-hover]"
            >
              Book a 15-min demo →
            </Link>
          </div>
        </div>

        <div className="mx-auto mt-16 max-w-3xl">
          <h2 className="text-2xl font-bold">Built for how plumbers actually work</h2>
          <div className="mt-8 space-y-6">
            {[
              {
                title: "Emergency vs routine triage",
                desc: "Burst pipe at 11pm? The AI flags it as urgent and calls your mobile immediately. Dripping tap? Booked into your next free slot. You set the rules.",
              },
              {
                title: "Postcode filtering",
                desc: "Only cover SE London? The AI checks their postcode before booking. No more driving 45 minutes for a job outside your patch.",
              },
              {
                title: "Job details captured upfront",
                desc: "What's the problem? When did it start? Is there water damage? The AI asks so you don't have to play 20 questions when you call back.",
              },
              {
                title: "Calendar booking",
                desc: "The caller picks a slot from your real availability. No double-bookings. No back-and-forth texts.",
              },
              {
                title: "SMS summary to your phone",
                desc: "Name, number, address, job type, urgency. All in a text. Glance at it between jobs and decide if you want it.",
              },
            ].map((item, i) => (
              <div
                key={i}
                className="rounded-xl border border-[--color-border] bg-[--color-surface] p-6"
              >
                <h3 className="font-semibold">{item.title}</h3>
                <p className="mt-2 text-sm text-[--color-muted]">{item.desc}</p>
              </div>
            ))}
          </div>
        </div>

        <div className="mx-auto mt-16 max-w-3xl rounded-2xl border border-[--color-border] bg-[--color-surface] p-8">
          <h2 className="text-xl font-bold">The maths</h2>
          <div className="mt-4 space-y-3 text-[--color-muted]">
            <p>Average plumber misses 5-10 calls per week.</p>
            <p>Average job value: £150-£300.</p>
            <p>
              That&rsquo;s <span className="font-semibold text-red-400">£3,000-£12,000/month</span>{" "}
              in lost revenue.
            </p>
            <p>
              AI Receptionist:{" "}
              <span className="font-semibold text-green-400">£497/month</span>.
            </p>
            <p className="font-semibold text-white">
              It pays for itself with 2-3 extra jobs per month.
            </p>
          </div>
        </div>

        {/* FAQ Schema */}
        <div className="mx-auto mt-16 max-w-3xl">
          <h2 className="text-2xl font-bold">Questions plumbers ask</h2>
          <div className="mt-8 space-y-6">
            {[
              {
                q: "Will callers know it's AI?",
                a: "Most don't. The voice sounds natural and conversational. We train it on your business so it knows your services, prices, and area.",
              },
              {
                q: "What if I want to answer sometimes?",
                a: "The AI only picks up when you don't. Set it to kick in after 3 rings, after hours, or when you're marked as busy. You stay in control.",
              },
              {
                q: "Can it handle emergency calls differently?",
                a: "Yes. You define what counts as an emergency. Burst pipes, no heating in winter — whatever you set. Those get escalated to you immediately.",
              },
              {
                q: "How long to set up?",
                a: "5 business days from our first call. We handle everything. You just review and approve.",
              },
            ].map((faq, i) => (
              <div key={i}>
                <h3 className="font-semibold">{faq.q}</h3>
                <p className="mt-2 text-sm text-[--color-muted]">{faq.a}</p>
              </div>
            ))}
          </div>
        </div>

        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              "@context": "https://schema.org",
              "@type": "FAQPage",
              mainEntity: [
                {
                  "@type": "Question",
                  name: "Will callers know it's AI?",
                  acceptedAnswer: {
                    "@type": "Answer",
                    text: "Most don't. The voice sounds natural and conversational. We train it on your business so it knows your services, prices, and area.",
                  },
                },
                {
                  "@type": "Question",
                  name: "How long to set up an AI receptionist for plumbers?",
                  acceptedAnswer: {
                    "@type": "Answer",
                    text: "5 business days from our first call. We handle everything. You just review and approve.",
                  },
                },
              ],
            }),
          }}
        />
      </section>

      <CTA headline="Stop losing jobs to missed calls" />
    </>
  );
}
