"use client";

import Link from "next/link";

export default function Footer() {
  const year = new Date().getFullYear();

  return (
    <footer role="contentinfo" className="mt-24 border-t" style={{ borderColor: "var(--hairline)" }}>
      {/* more vertical space + safe-area padding so nothing feels squished */}
      <div className="container py-10 md:py-14 pb-[calc(env(safe-area-inset-bottom)+2rem)]">
        {/* one line on sm+, stacks on mobile */}
        <div className="flex flex-col items-center gap-5 sm:flex-row sm:flex-nowrap sm:justify-between">
          {/* Brand (bigger logo so it breathes) */}
          <div className="flex items-center gap-3">
            <img
              src="/downloads/PraziseLogo_onlypicture.png"
              alt="Präzise"
              width={40}
              height={40}
              className="block h-10 w-10 object-contain opacity-90"
            />
            <span className="font-semibold tracking-tight text-[rgb(var(--fg))]">Präzise</span>
          </div>

          {/* Legal links only */}
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
