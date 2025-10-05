"use client";

import Link from "next/link";
import * as React from "react";

function FooterLink({
  href,
  children,
  ariaLabel,
}: {
  href: string;
  children: React.ReactNode;
  ariaLabel?: string;
}) {
  return (
    <Link
      href={href}
      aria-label={ariaLabel}
      className="
        rounded-lg px-3 py-1.5 text-sm
        text-gray-700 dark:text-gray-300
        hover:text-emerald-400 hover:bg-black/5 dark:hover:bg-white/5
        transition-colors
      "
    >
      {children}
    </Link>
  );
}

export default function Footer() {
  const year = new Date().getFullYear();
  const [logoOk, setLogoOk] = React.useState(true);

  return (
    <footer
      className="mt-16 border-t"
      style={{ borderColor: "var(--hairline)" }}
      role="contentinfo"
    >
      <div className="container py-8">
        {/* One line on sm+; stacks on mobile */}
        <div className="flex flex-col items-center justify-between gap-4 sm:flex-row">
          {/* Left: brand (logo + name) */}
          <Link
            href="/"
            aria-label="Präzise home"
            className="flex items-center gap-2 no-underline text-[rgb(var(--fg))]"
          >
            {logoOk && (
              <img
                src="/downloads/PraziseLogo_onlypicture.png"
                alt=""
                width={28}
                height={28}
                className="h-7 w-7 object-contain opacity-80"
                onError={() => setLogoOk(false)}   /* hide if path missing */
              />
            )}
            <span className="font-semibold tracking-tight">Präzise</span>
          </Link>

          {/* Right: actions (email pill + legal links with separators) */}
          <nav
            aria-label="Footer"
            className="flex flex-wrap items-center gap-2 sm:gap-3"
          >
            {/* email as a subtle pill; change address if you prefer */}
            <a
              href="mailto:slavinskasjack@gmail.com"
              className="
                rounded-lg border border-black/10 dark:border-white/10
                px-3 py-1.5 text-sm
                text-gray-700 dark:text-gray-300
                hover:bg-black/5 dark:hover:bg-white/5
                transition-colors
              "
            >
              Email us
            </a>

            <span className="hidden sm:inline text-gray-400">•</span>
            <FooterLink href="/legal/privacy" ariaLabel="Privacy">Privacy</FooterLink>

            <span className="hidden sm:inline text-gray-400">•</span>
            <FooterLink href="/legal/terms" ariaLabel="Terms">Terms</FooterLink>

            <span className="hidden sm:inline text-gray-400">•</span>
            <FooterLink href="/legal/security" ariaLabel="Security">Security</FooterLink>

            <span className="hidden sm:inline text-gray-400">•</span>
            <FooterLink href="/legal/accessibility" ariaLabel="Accessibility">Accessibility</FooterLink>

            <span className="hidden sm:inline text-gray-400">•</span>
            <FooterLink href="/legal/deletion" ariaLabel="Data deletion">Data deletion</FooterLink>
          </nav>

          {/* Copyright */}
          <p className="text-xs sm:text-sm text-gray-500 dark:text-gray-400">
            © {year} Präzise. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
}
