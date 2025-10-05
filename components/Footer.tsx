import Link from "next/link";
import Image from "next/image";
import Logo from "@/public/downloads/PraziseLogo_onlypicture.png";

export default function Footer() {
  const year = new Date().getFullYear();

  return (
    <footer className="mt-16 border-t" style={{ borderColor: "var(--hairline)" }}>
      <div className="container py-8">
        {/* Top row: brand + simple nav */}
        <div className="flex flex-col gap-6 md:flex-row md:items-center md:justify-between">
          <Link
            href="/"
            className="flex items-center gap-2 no-underline text-[rgb(var(--fg))]"
            aria-label="Präzise home"
          >
            <Image
              src={Logo}
              alt="Präzise"
              width={28}
              height={28}
              className="h-7 w-7 object-contain opacity-80"
              priority
              unoptimized
            />
            <span className="font-semibold tracking-tight">Präzise</span>
          </Link>

          <nav className="flex flex-wrap items-center gap-x-6 gap-y-2 text-sm">
            <Link href="/athletes" className="text-[rgb(var(--muted))] hover:text-[rgb(var(--fg))]">Athletes</Link>
            <Link href="/coaches"  className="text-[rgb(var(--muted))] hover:text-[rgb(var(--fg))]">Coaches</Link>
            <Link href="/partners" className="text-[rgb(var(--muted))] hover:text-[rgb(var(--fg))]">For Partners</Link>
            <Link href="/about"    className="text-[rgb(var(--muted))] hover:text-[rgb(var(--fg))]">About</Link>
            <Link href="/faq"      className="text-[rgb(var(--muted))] hover:text-[rgb(var(--fg))]">FAQ</Link>
            <Link href="/contact"  className="text-[rgb(var(--muted))] hover:text-[rgb(var(--fg))]">Contact</Link>
          </nav>
        </div>

        <hr className="my-6" />

        {/* Bottom row: copyright + legal */}
        <div className="flex flex-col-reverse gap-3 md:flex-row md:items-center md:justify-between">
          <p className="micro">© {year} Präzise. All rights reserved.</p>

          <div className="flex flex-wrap items-center gap-4 micro">
            <Link href="/legal/privacy"    className="fancy-underline">Privacy</Link>
            <Link href="/legal/terms"      className="fancy-underline">Terms</Link>
            <Link href="/legal/impressum"  className="fancy-underline">Impressum</Link>
            <Link href="/legal/datenschutz" className="fancy-underline">Datenschutz</Link>
          </div>
        </div>
      </div>
    </footer>
  );
}
