export function Testimonial() {
  return (
    <section className="border-t border-gray-200">
      <div className="mx-auto max-w-4xl px-4 py-20">
        <div className="rounded-2xl border border-yellow-200 bg-yellow-50 p-8 sm:p-12">
          <div className="text-2xl text-yellow-500">★★★★★</div>
          <blockquote className="mt-6 text-lg leading-relaxed text-[--color-text] sm:text-xl">
            &ldquo;Truly exceptional — Manny did everything we needed and more.
            Excellent communication throughout and an incredible workflow
            produced in a quick timeframe. It&rsquo;s quite clear Manny has a
            solid commercial understanding which is imperative to work like
            this.&rdquo;
          </blockquote>
          <div className="mt-8">
            <p className="font-semibold text-[--color-primary]">Luke Finney</p>
            <p className="text-sm text-[--color-muted]">
              Founder &amp; CEO — Manchester, UK
            </p>
            <p className="mt-1 text-sm text-[--color-muted]">
              AI-powered lead qualification engine built in n8n
            </p>
          </div>
          <div className="mt-4 flex flex-wrap gap-3">
            <span className="rounded-full bg-green-100 px-3 py-1 text-xs text-green-800">
              ✅ Verified on Upwork
            </span>
            <span className="rounded-full bg-gray-100 px-3 py-1 text-xs text-[--color-muted]">
              $101K+ spent on platform · 141 hires · 4.9★ client rating
            </span>
          </div>
        </div>

        <div className="mt-8 rounded-2xl border border-[--color-accent]/20 bg-[--color-accent]/5 p-8 text-center">
          <p className="font-semibold text-[--color-primary]">
            Founding member pricing available for first 10 implementation clients.
          </p>
          <p className="mt-2 text-sm text-[--color-muted]">
            £0 setup + £297/mo. Pay after 30 days of proven results.
          </p>
          <a
            href="/book-demo"
            className="mt-4 inline-block rounded-full bg-[--color-accent] px-6 py-2.5 text-sm font-medium text-white transition hover:bg-[--color-accent-hover]"
          >
            Book your free audit →
          </a>
        </div>
      </div>
    </section>
  );
}
