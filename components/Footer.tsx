"use client";

import Link from "next/link";

export default function Footer() {
  const year = new Date().getFullYear();

  return (
    <footer role="contentinfo" className="mt-24 border-t" style={{ borderColor: "var(--hairline)" }}>
      <div className="container py-10 md:py-12 pb-[calc(env(safe-area-inset-bottom)+1.25rem)]">
        {/* 3-column grid: brand | links | copyright */}
        <div className="grid items-center gap-5 grid-cols-1 md:grid-cols-[1fr_auto_1fr]">
          {/* Brand (text only) */}
          <div className="justify-self-start">
            <Link
              href="/"
              aria-label="Präzise home"
              className="font-semibold tracking-tight text-[rgb(var(--fg))] no-underline"
            >
              Präzise
            </Link>
          </div>

          {/* Centered legal links */}
          <nav
            aria-label="Legal"
            className="micro justify-self-center flex flex-wrap items-center gap-x-6 gap-y-2 text-[rgb(var(--muted))]"
          >
            <Link href="/legal/privacy"       className="hover:text-[rgb(var(--fg))] fancy-underline">Privacy</Link>
            <span aria-hidden className="hidden md:inline opacity-40">·</span>
            <Link href="/legal/terms"         className="hover:text-[rgb(var(--fg))] fancy-underline">Terms</Link>
            <span aria-hidden className="hidden md:inline opacity-40">·</span>
            <Link href="/legal/security"      className="hover:text-[rgb(var(--fg))] fancy-underline">Security</Link>
            <span aria-hidden className="hidden md:inline opacity-40">·</span>
            <Link href="/legal/accessibility" className="hover:text-[rgb(var(--fg))] fancy-underline">Accessibility</Link>
            <span aria-hidden className="hidden md:inline opacity-40">·</span>
            <Link href="/legal/deletion"      className="hover:text-[rgb(var(--fg))] fancy-underline">Data deletion</Link>
          </nav>

          {/* Copyright */}
          <p className="micro justify-self-start md:justify-self-end text-[rgb(var(--muted))]" suppressHydrationWarning>
            © {year} Präzise. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
}
