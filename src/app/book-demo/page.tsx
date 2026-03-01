import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Get Your Free AI Audit",
  description:
    "Book a free 45-minute AI & Automation Audit. I'll show you exactly where your business is losing £20-50K/year. No obligation.",
};

export default function BookDemo() {
  return (
    <section className="mx-auto max-w-4xl px-4 pb-20 pt-24">
      <div className="mx-auto max-w-2xl text-center">
        <h1 className="text-3xl font-bold tracking-tight sm:text-4xl">
          Get Your Free AI Audit
        </h1>
        <p className="mt-4 text-[--color-muted]">
          Pick a time that works. I&rsquo;ll show you exactly where your business is bleeding money — and how to fix it with AI automation. 45-minute call, professional report within 48 hours. No obligation, no sales pitch.
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
