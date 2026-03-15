import type { Metadata } from "next";
import { CTA } from "@/components/CTA";

export const metadata: Metadata = {
  title: "Blog",
  description:
    "Practical AI automation insights for UK small businesses. No fluff — just what works, what doesn't, and how to make AI pay for itself.",
};

export default function Blog() {
  return (
    <>
      <section className="mx-auto max-w-6xl px-4 pb-20 pt-24">
        <div className="mx-auto max-w-3xl text-center">
          <h1 className="text-4xl font-bold tracking-tight sm:text-5xl">
            Blog
          </h1>
          <p className="mt-4 text-lg text-muted">
            Practical AI automation insights for UK small businesses. No fluff.
          </p>
        </div>

        <div className="mx-auto mt-16 max-w-3xl">
          <div className="rounded-2xl border border-dashed border-border p-12 text-center">
            <p className="text-muted">
              First posts coming soon. In the meantime, follow me on{" "}
              <a
                href="https://linkedin.com/in/manny-amoah"
                className="text-accent hover:underline"
                target="_blank"
                rel="noopener noreferrer"
              >
                LinkedIn
              </a>{" "}
              for weekly insights.
            </p>
          </div>
        </div>
      </section>

      <CTA />
    </>
  );
}
