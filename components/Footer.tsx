"use client";

import Link from "next/link";

export default function Footer() {
  const year = new Date().getFullYear();

  return (
    <footer role="contentinfo" className="mt-16 border-t" style={{ borderColor: "var(--hairline)" }}>
      <div className="container py-6">
        {/* One line on md+, stacks on small screens */}
        <div className="flex flex-col items-start gap-4 md:flex-row md:flex-nowrap md:items-center md:justify-between">
          {/* Brand (no Next/Image to avoid bundler issues) */}
          <Link href="/" className="flex items-center gap-2 no-underline text-[rgb(var(--fg))]" aria-label="Präzise home">
            <img
              src="/downloads/PraziseLogo_onlypicture.png"
              alt="Präzise"
              width={28}
              height={28}
              className="h-7 w-7 object-contain opacity-80"
            />
            <span className="font-semibold tracking-tight">Präzise</span>
          </Link>

          {/* Legal links */}
          <nav aria-label="Legal" className="micro flex flex-wrap items-center gap-x-4 gap-y-2 md:flex-nowrap md:whitespace-nowrap">
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
          <p className="micro">© {year} Präzise. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
}
