import Link from "next/link";

export function CTA({
  headline = "Ready to Find Your Revenue Leaks?",
  sub = "Start with our free audit to see exactly where your business is bleeding money.",
}: {
  headline?: string;
  sub?: string;
}) {
  return (
    <section className="border-t border-gray-200 bg-surface">
      <div className="mx-auto max-w-3xl px-4 py-20 text-center">
        <h2 className="font-bold text-3xl tracking-tight text-primary sm:text-4xl">
          {headline}
        </h2>
        <p className="mt-4 text-lg text-muted">{sub}</p>
        <div className="mt-8 flex flex-col items-center gap-4 sm:flex-row sm:justify-center">
          <Link
            href="/audit"
            className="rounded-full bg-accent px-8 py-3 font-medium text-white transition hover:bg-accent-hover"
          >
            Get Free AI Readiness Audit →
          </Link>
          <Link
            href="/revenue-recovery"
            className="rounded-full border border-primary bg-primary px-8 py-3 font-medium text-white transition hover:bg-primary/90"
          >
            Book Revenue Recovery Audit — £297 →
          </Link>
        </div>
      </div>
    </section>
  );
}
