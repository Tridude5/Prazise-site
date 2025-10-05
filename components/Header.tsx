"use client";

import * as React from "react";
import Link from "next/link";
import Image from "next/image";
import { usePathname } from "next/navigation";

const NAV = [
  { href: "/athletes", label: "Athletes" },
  { href: "/coaches", label: "Coaches" },
  { href: "/partners", label: "For Partners" },
  { href: "/about", label: "About" },
  { href: "/faq", label: "FAQ" },
  { href: "/contact", label: "Contact" },
];

export default function Header() {
  const [open, setOpen] = React.useState(false);
  const pathname = usePathname();
  const navRef = React.useRef<HTMLElement>(null);

  // Close mobile menu on route change
  React.useEffect(() => setOpen(false), [pathname]);

  // Measure header height -> CSS var (--header-h)
  React.useLayoutEffect(() => {
    const el = navRef.current;
    if (!el) return;

    const setVar = () => {
      const h = Math.ceil(el.getBoundingClientRect().height);
      document.documentElement.style.setProperty("--header-h", `${h}px`);
    };

    setVar();
    const ro = new ResizeObserver(setVar);
    ro.observe(el);
    window.addEventListener("resize", setVar, { passive: true });
    return () => {
      ro.disconnect();
      window.removeEventListener("resize", setVar);
    };
  }, []);

  return (
    <nav
      ref={navRef}
      className="sticky top-0 z-50 border-b border-foreground/10 bg-white/80 backdrop-blur dark:border-white/10 dark:bg-zinc-900/80 supports-[backdrop-filter]:bg-white/60 dark:supports-[backdrop-filter]:bg-zinc-900/60"
      aria-label="Primary"
    >
      <div className="mx-auto max-w-6xl px-4">
        {/* Top row */}
        <div className="flex items-center justify-between gap-3 py-3">
          {/* Brand */}
          <Link href="/" className="flex min-w-0 items-center gap-2 font-semibold tracking-tight">
            <Image src="/logo.svg" alt="" width={24} height={24} className="opacity-80" />
            <span>Prazise</span>
          </Link>

          {/* Desktop nav */}
          <div className="hidden items-center gap-6 md:flex">
            {NAV.map((n) => (
              <Link
                key={n.href}
                href={n.href}
                className="text-sm text-foreground/90 hover:underline underline-offset-4"
              >
                {n.label}
              </Link>
            ))}
            <Link
              href="/#waitlist"
              className="rounded-lg px-3 py-1.5 text-sm font-semibold ring-1 ring-foreground/20 hover:bg-foreground/5"
            >
              Join waitlist
            </Link>
          </div>

          {/* Mobile: hamburger */}
          <button
            type="button"
            className="inline-flex items-center gap-2 rounded-lg px-3 py-1.5 text-sm ring-1 ring-foreground/15 hover:bg-foreground/5 md:hidden"
            onClick={() => setOpen((v) => !v)}
            aria-expanded={open}
            aria-controls="mobile-nav"
            aria-label="Toggle menu"
          >
            Menu
            <svg
              className={`h-4 w-4 transition-transform ${open ? "rotate-90" : ""}`}
              viewBox="0 0 20 20"
              fill="currentColor"
              aria-hidden="true"
            >
              <path
                fillRule="evenodd"
                d="M6.292 4.293a1 1 0 011.416 0l5 5a1 1 0 010 1.414l-5 5a1 1 0 11-1.416-1.414L10.586 10 6.292 5.707a1 1 0 010-1.414z"
                clipRule="evenodd"
              />
            </svg>
          </button>
        </div>

        {/* Mobile panel */}
        <div
          id="mobile-nav"
          className={`md:hidden overflow-hidden transition-[max-height,opacity] duration-300 ${
            open ? "max-h-64 opacity-100" : "max-h-0 opacity-0"
          }`}
        >
          <div className="pb-3">
            <div className="flex flex-col gap-2">
              {NAV.map((n) => (
                <Link
                  key={n.href}
                  href={n.href}
                  className="rounded-lg px-3 py-2 text-sm hover:bg-foreground/5"
                  onClick={() => setOpen(false)}
                >
                  {n.label}
                </Link>
              ))}
              <Link
                href="/#waitlist"
                className="rounded-lg px-3 py-2 text-sm font-semibold ring-1 ring-foreground/20 hover:bg-foreground/5"
                onClick={() => setOpen(false)}
              >
                Join waitlist
              </Link>
            </div>
          </div>
        </div>
      </div>
    </nav>
  );
}
