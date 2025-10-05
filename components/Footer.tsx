import Link from "next/link";
import Image from "next/image";
import Logo from "@/public/downloads/PraziseLogo_onlypicture.png";

export default function Footer() {
  const year = new Date().getFullYear();

  return (
    <footer role="contentinfo" className="mt-16 border-t" style={{ borderColor: "var(--hairline)" }}>
      <div className="container py-8">
        {/* Brand only (no header-style nav here) */}
        <div className="flex items-center gap-2">
          <Image
            src={Logo}
            alt="Präzise"
            width={28}
            height={28}
            className="h-7 w-7 object-contain opacity-80"
            priority
            unoptimized
          />
          <span className="font-semibold tracking-tight text-[rgb(var(--fg))]">Präzise</span>
        </div>

        <hr className="my-6" />

        {/* Copyright + legal links */}
        <div className="flex flex-col-reverse gap-3 md:flex-row md:items-center md:justify-between">
          <p className="micro">© {year} Präzise. All rights reserved.</p>

          <nav aria-label="Legal" className="flex flex-wrap items-center gap-4 micro">
            <Link href="/legal/privacy"       className="fancy-underline">Privacy</Link>
            <Link href="/legal/terms"         className="fancy-underline">Terms</Link>
            <Link href="/legal/security"      className="fancy-underline">Security</Link>
            <Link href="/legal/accessibility" className="fancy-underline">Accessibility</Link>
            <Link href="/legal/deletion"      className="fancy-underline">Data deletion</Link>
          </nav>
        </div>
      </div>
    </footer>
  );
}
