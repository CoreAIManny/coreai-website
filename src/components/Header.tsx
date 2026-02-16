"use client";

import Link from "next/link";
import { useState, useEffect, useRef } from "react";

const NAV = [
  {
    label: "Services",
    children: [
      { label: "AI Receptionist", href: "/services/ai-receptionist" },
      { label: "Workflow Automation", href: "/services/workflow-automation" },
      { label: "Implementation", href: "/services/implementation" },
    ],
  },
  { label: "Pricing", href: "/pricing" },
  {
    label: "Industries",
    children: [
      { label: "Plumbers", href: "/industries/plumbers" },
      { label: "Estate Agents", href: "/industries/estate-agents" },
      { label: "Home Services", href: "/industries/home-services" },
    ],
  },
  { label: "Case Studies", href: "/case-studies" },
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
      <div className="rounded-2xl border border-white/10 bg-[#0C0C0C]/70 px-4 py-3 shadow-xl shadow-black/20 backdrop-blur-xl">
        <div className="flex items-center justify-between">
          <Link href="/" className="text-lg font-bold tracking-tight">
            Core AI
          </Link>

          {/* Desktop */}
          <nav className="hidden items-center gap-1 md:flex">
            {NAV.map((item) =>
              item.href ? (
                <Link
                  key={item.label}
                  href={item.href}
                  className="rounded-lg px-3 py-1.5 text-sm text-[--color-muted] transition hover:bg-white/5 hover:text-white"
                >
                  {item.label}
                </Link>
              ) : (
                <div key={item.label} className="group relative">
                  <button className="rounded-lg px-3 py-1.5 text-sm text-[--color-muted] transition hover:bg-white/5 hover:text-white">
                    {item.label} <span className="text-xs">▾</span>
                  </button>
                  <div className="invisible absolute left-0 top-full pt-2 opacity-0 transition-all duration-200 group-hover:visible group-hover:opacity-100">
                    <div className="rounded-xl border border-white/10 bg-[#131314]/95 p-1.5 shadow-xl backdrop-blur-xl">
                      {item.children!.map((child) => (
                        <Link
                          key={child.href}
                          href={child.href}
                          className="block rounded-lg px-4 py-2 text-sm text-[--color-muted] transition hover:bg-white/5 hover:text-white whitespace-nowrap"
                        >
                          {child.label}
                        </Link>
                      ))}
                    </div>
                  </div>
                </div>
              )
            )}
          </nav>

          <div className="hidden items-center gap-3 md:flex">
            <Link
              href="#demo"
              className="rounded-lg px-3 py-1.5 text-sm text-[--color-muted] transition hover:text-white"
            >
              Try AI
            </Link>
            <Link
              href="/book-demo"
              className="rounded-full bg-[--color-accent] px-5 py-2 text-sm font-medium text-white transition hover:bg-[--color-accent-hover]"
            >
              Book a Demo
            </Link>
          </div>

          {/* Mobile toggle */}
          <button
            onClick={() => setOpen(!open)}
            className="md:hidden text-white"
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
          <nav className="mt-3 border-t border-white/10 pt-3 md:hidden">
            {NAV.map((item) =>
              item.href ? (
                <Link
                  key={item.label}
                  href={item.href}
                  onClick={() => setOpen(false)}
                  className="block rounded-lg px-3 py-2.5 text-[--color-muted] hover:bg-white/5 hover:text-white"
                >
                  {item.label}
                </Link>
              ) : (
                <div key={item.label}>
                  <span className="block px-3 py-2 text-xs font-semibold uppercase tracking-wider text-[--color-muted]/60">
                    {item.label}
                  </span>
                  {item.children!.map((child) => (
                    <Link
                      key={child.href}
                      href={child.href}
                      onClick={() => setOpen(false)}
                      className="block rounded-lg px-6 py-2 text-[--color-muted] hover:bg-white/5 hover:text-white"
                    >
                      {child.label}
                    </Link>
                  ))}
                </div>
              )
            )}
            <Link
              href="/book-demo"
              onClick={() => setOpen(false)}
              className="mt-3 block rounded-full bg-[--color-accent] px-4 py-3 text-center font-medium text-white"
            >
              Book a Demo
            </Link>
          </nav>
        )}
      </div>
    </header>
  );
}
