import Link from "next/link";
import Image from "next/image";

export function Footer() {
  return (
    <footer className="border-t border-gray-200 bg-primary relative">
      <div className="absolute inset-x-0 top-0 h-1 bg-gradient-to-r from-accent via-accent/50 to-accent" />
      <div className="mx-auto max-w-6xl px-4 py-12">
        <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-4">
          <div>
            <Image src="/logo.png" alt="Core AI Solutions" width={140} height={35} className="h-7 w-auto mb-2 brightness-0 invert" />
            <p className="mt-2 text-sm text-gray-300">
              Revenue Recovery Audits for UK businesses. Find exactly where your business is bleeding money.
              London, UK.
            </p>
          </div>
          <div>
            <h4 className="text-sm font-semibold uppercase tracking-wider text-gray-300">
              Audit
            </h4>
            <ul className="mt-3 space-y-2 text-sm">
              <li><Link href="/audit" className="text-gray-400 hover:text-white">Free AI Readiness Audit</Link></li>
              <li><Link href="/revenue-recovery" className="text-gray-400 hover:text-white">Revenue Recovery Audit</Link></li>
            </ul>
          </div>
          <div>
            <h4 className="text-sm font-semibold uppercase tracking-wider text-gray-300">
              Solutions
            </h4>
            <ul className="mt-3 space-y-2 text-sm">
              <li><Link href="/solutions" className="text-gray-400 hover:text-white">Revenue Recovery Engine</Link></li>
              <li><Link href="/solutions" className="text-gray-400 hover:text-white">HireOnce AI Employee</Link></li>
            </ul>
          </div>
          <div>
            <h4 className="text-sm font-semibold uppercase tracking-wider text-gray-300">
              Company
            </h4>
            <ul className="mt-3 space-y-2 text-sm">
              <li><Link href="/about" className="text-gray-400 hover:text-white">About Manny</Link></li>
              <li><Link href="/proof" className="text-gray-400 hover:text-white">Audit Results</Link></li>
              <li><Link href="/pricing" className="text-gray-400 hover:text-white">Pricing</Link></li>
              <li><Link href="/book-demo" className="text-gray-400 hover:text-white">Book Free Audit</Link></li>
            </ul>
          </div>
        </div>
        <div className="mt-12 flex flex-col items-center justify-between gap-4 border-t border-gray-600 pt-8 sm:flex-row">
          <p className="text-sm text-gray-400">
            © {new Date().getFullYear()} Core AI Solutions. London, UK.
          </p>
          <div className="flex gap-4">
            <a href="https://www.linkedin.com/in/manny-amoah" target="_blank" rel="noopener noreferrer" className="text-gray-400 hover:text-white">LinkedIn</a>
            <a href="https://twitter.com/mannyamoah_" target="_blank" rel="noopener noreferrer" className="text-gray-400 hover:text-white">X</a>
            <a href="https://www.youtube.com/@mannyamoah" target="_blank" rel="noopener noreferrer" className="text-gray-400 hover:text-white">YouTube</a>
            <a href="https://www.instagram.com/manny.amoah" target="_blank" rel="noopener noreferrer" className="text-gray-400 hover:text-white">Instagram</a>
          </div>
        </div>
      </div>
    </footer>
  );
}
