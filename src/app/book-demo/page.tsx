import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Book a Demo",
  description:
    "Book a free 15-minute demo of our AI receptionist. See exactly how it works for your business. No obligation.",
};

export default function BookDemo() {
  return (
    <section className="mx-auto max-w-4xl px-4 pb-20 pt-24">
      <div className="mx-auto max-w-2xl text-center">
        <h1 className="text-3xl font-bold tracking-tight sm:text-4xl">
          Book your 15-minute demo
        </h1>
        <p className="mt-4 text-[--color-muted]">
          Pick a time that works. I&rsquo;ll show you exactly how an AI
          receptionist handles calls for your type of business. No obligation, no
          hard sell.
        </p>
      </div>
      <div className="mt-12">
        {/* Cal.com embed */}
        <iframe
          src="https://cal.com/manny-amoah-iys902/30min?embed=true&theme=dark"
          width="100%"
          height="700"
          frameBorder="0"
          className="rounded-2xl"
          title="Book a demo with Manny"
        />
      </div>
    </section>
  );
}
