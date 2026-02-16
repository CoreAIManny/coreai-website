import Link from "next/link";

export function Footer() {
  return (
    <footer className="border-t border-white/5 bg-[#0C0C0C]">
      <div className="mx-auto max-w-6xl px-4 py-12">
        <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-4">
          <div>
            <h3 className="font-bold">Core AI Solutions</h3>
            <p className="mt-2 text-sm text-[--color-muted]">
              AI receptionist and automation systems for UK small businesses.
              London, UK.
            </p>
          </div>
          <div>
            <h4 className="text-sm font-semibold uppercase tracking-wider text-[--color-muted]">
              Services
            </h4>
            <ul className="mt-3 space-y-2 text-sm">
              <li><Link href="/services/ai-receptionist" className="text-[--color-muted] hover:text-white">AI Receptionist</Link></li>
              <li><Link href="/services/workflow-automation" className="text-[--color-muted] hover:text-white">Workflow Automation</Link></li>
              <li><Link href="/services/implementation" className="text-[--color-muted] hover:text-white">Implementation</Link></li>
            </ul>
          </div>
          <div>
            <h4 className="text-sm font-semibold uppercase tracking-wider text-[--color-muted]">
              Industries
            </h4>
            <ul className="mt-3 space-y-2 text-sm">
              <li><Link href="/industries/plumbers" className="text-[--color-muted] hover:text-white">Plumbers</Link></li>
              <li><Link href="/industries/estate-agents" className="text-[--color-muted] hover:text-white">Estate Agents</Link></li>
              <li><Link href="/industries/home-services" className="text-[--color-muted] hover:text-white">Home Services</Link></li>
            </ul>
          </div>
          <div>
            <h4 className="text-sm font-semibold uppercase tracking-wider text-[--color-muted]">
              Company
            </h4>
            <ul className="mt-3 space-y-2 text-sm">
              <li><Link href="/about" className="text-[--color-muted] hover:text-white">About</Link></li>
              <li><Link href="/case-studies" className="text-[--color-muted] hover:text-white">Case Studies</Link></li>
              <li><Link href="/blog" className="text-[--color-muted] hover:text-white">Blog</Link></li>
              <li><Link href="/pricing" className="text-[--color-muted] hover:text-white">Pricing</Link></li>
              <li><Link href="/book-demo" className="text-[--color-muted] hover:text-white">Book a Demo</Link></li>
            </ul>
          </div>
        </div>
        <div className="mt-12 flex flex-col items-center justify-between gap-4 border-t border-white/5 pt-8 sm:flex-row">
          <p className="text-sm text-[--color-muted]">
            © {new Date().getFullYear()} Core AI Solutions. London, UK.
          </p>
          <div className="flex gap-4 text-sm text-[--color-muted]">
            <a href="mailto:hello@coreaisolutions.co.uk" className="hover:text-white">hello@coreaisolutions.co.uk</a>
          </div>
        </div>
      </div>
    </footer>
  );
}
