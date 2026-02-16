import Link from "next/link";

export function CTA({
  headline = "Ready to stop missing calls?",
  sub = "Book a 15-minute demo. We'll show you exactly how it works for your business.",
}: {
  headline?: string;
  sub?: string;
}) {
  return (
    <section className="border-t border-[--color-border] bg-[--color-surface]">
      <div className="mx-auto max-w-3xl px-4 py-20 text-center">
        <h2 className="text-3xl font-bold tracking-tight sm:text-4xl">
          {headline}
        </h2>
        <p className="mt-4 text-lg text-[--color-muted]">{sub}</p>
        <div className="mt-8 flex flex-col items-center gap-4 sm:flex-row sm:justify-center">
          <Link
            href="/book-demo"
            className="rounded-full bg-[--color-accent] px-8 py-3 font-medium text-white transition hover:bg-[--color-accent-hover]"
          >
            Book a 15-min demo →
          </Link>
          <Link
            href="/services/ai-receptionist"
            className="rounded-full border border-[--color-border] px-8 py-3 font-medium text-[--color-muted] transition hover:border-white hover:text-white"
          >
            Try the AI receptionist
          </Link>
        </div>
      </div>
    </section>
  );
}
