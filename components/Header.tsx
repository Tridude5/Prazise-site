// components/Header.tsx
"use client";

import * as React from "react";
import Link from "next/link";
import Image from "next/image";
import { usePathname } from "next/navigation";

// static import from /public
import Logo from "@/public/downloads/PraziseLogo_onlypicture.png";

const NAV = [
  { href: "/athletes", label: "Athletes" },
  { href: "/coaches",  label: "Coaches" },
  { href: "/partners", label: "For Partners" },
  { href: "/about",    label: "About" },
  { href: "/faq",      label: "FAQ" },
  { href: "/contact",  label: "Contact" },
];

export default function Header() {
  const [open, setOpen] = React.useState(false);
  const pathname = usePathname();
  const navRef = React.useRef<HTMLElement>(null);

  React.useEffect(() => setOpen(false), [pathname]);

  // keep --header-h in sync for anchor offsets + spacer height
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
    addEventListener("resize", setVar, { passive: true });
    return () => { ro.disconnect(); removeEventListener("resize", setVar); };
  }, []);

  return (
    <>
      <nav
        ref={navRef}
        aria-label="Primary"
        className="fixed inset-x-0 top-0 z-50 border-b bg-white/80 backdrop-blur dark:bg-zinc-900/80 supports-[backdrop-filter]:bg-white/60 dark:supports-[backdrop-filter]:bg-zinc-900/60"
        style={{ borderColor: "var(--hairline)" }}
      >
        <div className="mx-auto max-w-6xl px-4">
          <div className="flex items-center justify-between gap-3 py-3">
            {/* Brand */}
            <Link
              href="/"
              className="flex min-w-0 items-center gap-2 font-semibold tracking-tight text-[rgb(var(--fg))] no-underline"
            >
              <Image
                src={Logo}
                alt="Präzise"
                width={28}
                height={28}
                priority
                unoptimized
                className="h-7 w-7 object-contain opacity-80"
              />
              <span>Präzise</span>
            </Link>

            {/* Desktop nav */}
            <div className="hidden items-center gap-6 md:flex">
              {NAV.map(n => (
                <Link
                  key={n.href}
                  href={n.href}
                  className="text-sm text-[rgb(var(--muted))] hover:text-[rgb(var(--fg))] hover:underline underline-offset-4 no-underline"
                >
                  {n.label}
                </Link>
              ))}
              <Link href="/#waitlist" className="btn btn--sm no-underline">
                Join waitlist
              </Link>
            </div>

            {/* Mobile menu button */}
            <button
              type="button"
              onClick={() => setOpen(v => !v)}
              aria-expanded={open}
              aria-controls="mobile-nav"
              aria-label="Toggle menu"
              className="inline-flex items-center gap-2 rounded-lg px-3 py-1.5 text-sm text-[rgb(var(--fg))] border border-[var(--hairline)] hover:bg-black/5 dark:hover:bg-white/5 md:hidden"
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
                {NAV.map(n => (
                  <Link
                    key={n.href}
                    href={n.href}
                    className="rounded-lg px-3 py-2 text-sm text-[rgb(var(--fg)))] no-underline hover:bg-black/5 dark:hover:bg-white/5"
                    onClick={() => setOpen(false)}
                  >
                    {n.label}
                  </Link>
                ))}
                <Link
                  href="/#waitlist"
                  className="btn btn--sm no-underline"
                  onClick={() => setOpen(false)}
                >
                  Join waitlist
                </Link>
              </div>
            </div>
          </div>
        </div>
      </nav>

      {/* Spacer so content doesn't slide under the fixed header */}
      <div aria-hidden className="h-[var(--header-h)]" />
    </>
  );
}
