"use client";

import Link from "next/link";
import Image from "next/image";
import { useState, useEffect, useRef } from "react";

const NAV = [
  { label: "Audit", href: "/audit" },
  { label: "Solutions", href: "/solutions" },
  { label: "Proof", href: "/proof" },
  { label: "Pricing", href: "/pricing" },
  { label: "About", href: "/about" },
];

export function Header() {
  const [open, setOpen] = useState(false);
  const [visible, setVisible] = useState(true);
  const lastScroll = useRef(0);

  useEffect(() => {
    const onScroll = () => {
      const y = window.scrollY;
      if (y < 80) {
        setVisible(true);
      } else if (y > lastScroll.current + 5) {
        setVisible(false);
        setOpen(false);
      } else if (y < lastScroll.current - 5) {
        setVisible(true);
      }
      lastScroll.current = y;
    };
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <header
      className={`fixed left-1/2 top-4 z-50 w-[calc(100%-2rem)] max-w-5xl -translate-x-1/2 transition-all duration-300 ${
        visible ? "translate-y-0 opacity-100" : "-translate-y-[calc(100%+2rem)] opacity-0"
      }`}
    >
      <div className="rounded-2xl border border-gray-200 bg-white/95 px-4 py-3 shadow-xl shadow-gray-900/10 backdrop-blur-xl">
        <div className="flex items-center justify-between">
          <Link href="/" className="flex items-center">
            <Image src="/logo.png" alt="Core AI Solutions" width={160} height={40} className="h-8 w-auto" priority />
          </Link>

          {/* Desktop */}
          <nav className="hidden items-center gap-1 md:flex">
            {NAV.map((item) => (
              <Link
                key={item.label}
                href={item.href}
                className="rounded-lg px-3 py-1.5 text-sm text-[--color-primary] transition hover:bg-gray-100 hover:text-[--color-accent]"
              >
                {item.label}
              </Link>
            ))}
          </nav>

          <div className="hidden items-center gap-3 md:flex">
            <Link
              href="/book-demo"
              className="rounded-full bg-[--color-accent] px-5 py-2 text-sm font-medium text-white transition hover:bg-[--color-accent-hover]"
            >
              Book Free Audit →
            </Link>
          </div>

          {/* Mobile toggle */}
          <button
            onClick={() => setOpen(!open)}
            className="md:hidden text-[--color-primary]"
            aria-label="Menu"
          >
            {open ? (
              <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><path d="M18 6L6 18M6 6l12 12"/></svg>
            ) : (
              <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><path d="M3 12h18M3 6h18M3 18h18"/></svg>
            )}
          </button>
        </div>

        {/* Mobile menu */}
        {open && (
          <nav className="mt-3 border-t border-gray-200 pt-3 md:hidden">
            {NAV.map((item) => (
              <Link
                key={item.label}
                href={item.href}
                onClick={() => setOpen(false)}
                className="block rounded-lg px-3 py-2.5 text-[--color-primary] hover:bg-gray-100 hover:text-[--color-accent]"
              >
                {item.label}
              </Link>
            ))}
            <Link
              href="/book-demo"
              onClick={() => setOpen(false)}
              className="mt-3 block rounded-full bg-[--color-accent] px-4 py-3 text-center font-medium text-white"
            >
              Book Free Audit →
            </Link>
          </nav>
        )}
      </div>
    </header>
  );
}
