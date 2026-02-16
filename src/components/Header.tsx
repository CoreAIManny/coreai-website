"use client";

import Link from "next/link";
import { useState } from "react";

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

  return (
    <header className="sticky top-0 z-50 border-b border-[--color-border] bg-[#0a0a0a]/80 backdrop-blur-md">
      <div className="mx-auto flex max-w-6xl items-center justify-between px-4 py-4">
        <Link href="/" className="text-lg font-bold tracking-tight">
          Core AI Solutions
        </Link>

        {/* Desktop */}
        <nav className="hidden items-center gap-6 text-sm md:flex">
          {NAV.map((item) =>
            item.href ? (
              <Link
                key={item.label}
                href={item.href}
                className="text-[--color-muted] transition hover:text-white"
              >
                {item.label}
              </Link>
            ) : (
              <div key={item.label} className="group relative">
                <button className="text-[--color-muted] transition hover:text-white">
                  {item.label}
                </button>
                <div className="invisible absolute left-0 top-full pt-2 opacity-0 transition group-hover:visible group-hover:opacity-100">
                  <div className="rounded-lg border border-[--color-border] bg-[--color-surface] p-2 shadow-xl">
                    {item.children!.map((child) => (
                      <Link
                        key={child.href}
                        href={child.href}
                        className="block rounded-md px-4 py-2 text-sm text-[--color-muted] transition hover:bg-[--color-surface-light] hover:text-white whitespace-nowrap"
                      >
                        {child.label}
                      </Link>
                    ))}
                  </div>
                </div>
              </div>
            )
          )}
          <Link
            href="/book-demo"
            className="rounded-full bg-[--color-accent] px-4 py-2 text-sm font-medium text-white transition hover:bg-[--color-accent-hover]"
          >
            Book a Demo
          </Link>
        </nav>

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
        <nav className="border-t border-[--color-border] px-4 pb-4 md:hidden">
          {NAV.map((item) =>
            item.href ? (
              <Link
                key={item.label}
                href={item.href}
                onClick={() => setOpen(false)}
                className="block py-3 text-[--color-muted]"
              >
                {item.label}
              </Link>
            ) : (
              <div key={item.label}>
                <span className="block py-3 text-xs font-semibold uppercase tracking-wider text-[--color-muted]">
                  {item.label}
                </span>
                {item.children!.map((child) => (
                  <Link
                    key={child.href}
                    href={child.href}
                    onClick={() => setOpen(false)}
                    className="block py-2 pl-4 text-[--color-muted]"
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
            className="mt-4 block rounded-full bg-[--color-accent] px-4 py-3 text-center font-medium text-white"
          >
            Book a Demo
          </Link>
        </nav>
      )}
    </header>
  );
}
