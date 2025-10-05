"use client";

import * as React from "react";
import Link from "next/link";
import Image from "next/image";
import { usePathname } from "next/navigation";

const LINKS = [
  { href: "/legal/privacy", label: "Privacy" },
  { href: "/legal/terms", label: "Terms" },
  { href: "/legal/security", label: "Security" },
  { href: "/legal/accessibility", label: "Accessibility" },
  { href: "/legal/deletion", label: "Data Deletion" },
  { href: "/contact", label: "Contact" },
];

export default function Footer() {
  const year = new Date().getFullYear();
  const pathname = usePathname();

  return (
    <footer className="mt-16 border-t border-foreground/10">
      <div className="mx-auto max-w-6xl px-4 py-8 flex flex-col gap-6 md:flex-row md:items-center md:justify-between">
        {/* Brand + year */}
        <div className="flex items-center gap-3">
          <Image src="/logo.svg" alt="" width={20} height={20} className="opacity-80" />
          <strong>Prazise</strong>
          <span className="text-sm text-foreground/60">© {year} Prazise. All rights reserved.</span>
        </div>

        {/* Footer nav */}
        <nav className="flex flex-wrap items-center gap-2 sm:gap-3" aria-label="Footer">
          {LINKS.map((l) => {
            const active = pathname === l.href;
            return (
              <Link
                key={l.href}
                href={l.href}
                aria-current={active ? "page" : undefined}
                className={`rounded-lg px-3 py-1.5 text-sm hover:bg-foreground/5 ${
                  active ? "font-medium text-foreground" : "text-foreground/80"
                }`}
              >
                {l.label}
              </Link>
            );
          })}
        </nav>
      </div>
    </footer>
  );
}
