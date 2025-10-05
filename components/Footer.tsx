"use client";

import Link from "next/link";

export default function Footer() {
  const year = new Date().getFullYear();

  return (
    <footer role="contentinfo" className="mt-24 border-t" style={{ borderColor: "var(--hairline)" }}>
      <div className="container py-10 md:py-14 pb-[calc(env(safe-area-inset-bottom)+2rem)]">
        <div className="flex flex-col items-center gap-5 sm:flex-row sm:flex-nowrap sm:justify-between">
          {/* Brand — text only (logo removed) */}
          <Link
            href="/"
            aria-label="Präzise home"
            className="font-semibold tracking-tight text-[rgb(var(--fg))] no-underline"
          >
            Präzise
          </Link>

          {/* Legal links */}
          <nav
            aria-label="Legal"
            className="micro flex flex-wrap items-center gap-x-5 gap-y-2 sm:flex-nowrap sm:whitespace-nowrap"
          >
            <Link href="/legal/privacy"       className="fancy-underline">Privacy</Link>
            <span aria-hidden className="opacity-40">·</span>
            <Link href="/legal/terms"         className="fancy-underline">Terms</Link>
            <span aria-hidden className="opacity-40">·</span>
            <Link href="/legal/security"      className="fancy-underline">Security</Link>
            <span aria-hidden className="opacity-40">·</span>
            <Link href="/legal/accessibility" className="fancy-underline">Accessibility</Link>
            <span aria-hidden className="opacity-40">·</span>
            <Link href="/legal/deletion"      className="fancy-underline">Data deletion</Link>
          </nav>

          {/* Copyright */}
          <p className="micro" suppressHydrationWarning>
            © {year} Präzise. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
}
