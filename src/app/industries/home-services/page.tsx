import type { Metadata } from "next";
import Link from "next/link";
import { CTA } from "@/components/CTA";

export const metadata: Metadata = {
  title: "AI Receptionist for Home Services",
  description:
    "AI phone answering for cleaners, electricians, landscapers, and home service businesses. Never miss a booking again. From £497/mo. UK-based.",
  keywords: [
    "AI phone answering UK",
    "AI receptionist home services",
    "automated answering service UK",
  ],
};

export default function HomeServices() {
  return (
    <>
      <section className="mx-auto max-w-6xl px-4 pb-20 pt-24">
        <div className="mx-auto max-w-3xl">
          <p className="text-sm font-medium uppercase tracking-wider text-[--color-accent]">
            AI for Home Services
          </p>
          <h1 className="mt-4 text-4xl font-bold tracking-tight sm:text-5xl">
            Your phone is your business. What happens when you can&rsquo;t answer it?
          </h1>
          <p className="mt-6 text-lg text-[--color-muted]">
            Cleaners, electricians, landscapers, handymen — if customers call to
            book, you need someone answering. An AI receptionist costs less than
            a part-time admin and never calls in sick.
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
          <h2 className="text-2xl font-bold">Works for any home service business</h2>
          <div className="mt-8 grid gap-4 sm:grid-cols-2">
            {[
              "Plumbers & heating engineers",
              "Electricians",
              "Cleaners & cleaning companies",
              "Landscapers & gardeners",
              "Handymen & general maintenance",
              "Pest control",
              "Locksmiths",
              "Roofers & builders",
              "Carpet & upholstery cleaners",
              "Window cleaners",
            ].map((item) => (
              <div key={item} className="flex gap-2 text-[--color-muted]">
                <span className="text-[--color-accent]">→</span> {item}
              </div>
            ))}
          </div>
        </div>

        <div className="mx-auto mt-16 max-w-3xl">
          <h2 className="text-2xl font-bold">What it does for you</h2>
          <div className="mt-8 space-y-6">
            {[
              {
                title: "Answers every call, instantly",
                desc: "No hold music. No voicemail. The AI picks up in under a second and sounds like a real person.",
              },
              {
                title: "Books jobs into your calendar",
                desc: "The caller picks a slot that works for both of you. No back-and-forth texts. No double-bookings.",
              },
              {
                title: "Filters out time-wasters",
                desc: "Price shoppers, sales calls, wrong numbers — handled politely without wasting your time.",
              },
              {
                title: "Sends you a text with every lead",
                desc: "Name, number, what they need, when they need it. All in a text. You decide what to follow up on.",
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
      </section>

      <CTA headline="Your front desk, automated" />
    </>
  );
}
