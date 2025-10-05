"use client";

import Link from "next/link";

export default function Footer() {
  const year = new Date().getFullYear();

  return (
    <footer role="contentinfo" className="mt-16 border-t" style={{ borderColor: "var(--hairline)" }}>
      <div className="container py-6 md:py-8">
        {/* one line on sm+, stacks on mobile */}
        <div className="flex flex-col items-center justify-between gap-4 sm:flex-row">
          {/* Brand (slightly larger so it breathes) */}
          <div className="flex items-center gap-2">
            <img
              src="/downloads/PraziseLogo_onlypicture.png"
              alt="Präzise"
              width={32}
              height={32}
              className="block h-8 w-8 object-contain opacity-80"
            />
            <span className="font-semibold tracking-tight text-[rgb(var(--fg))]">Präzise</span>
          </div>

          {/* Legal links with subtle separators */}
          <nav aria-label="Legal" className="micro flex flex-wrap items-center gap-x-4 gap-y-2 sm:flex-nowrap sm:whitespace-nowrap">
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

          {/* Copyright (hydration-safe) */}
          <p className="micro" suppressHydrationWarning>© {year} Präzise. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
}
