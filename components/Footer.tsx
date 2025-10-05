// components/Footer.tsx
import Link from "next/link";
import Image from "next/image";

export default function Footer() {
  const year = new Date().getFullYear();

  const links = [
    { href: "/legal/privacy", label: "Privacy" },
    { href: "/legal/terms", label: "Terms" },
    { href: "/legal/security", label: "Security" },
    { href: "/legal/accessibility", label: "Accessibility" },
    { href: "/legal/deletion", label: "Data deletion" },
  ];

  return (
    <footer role="contentinfo" className="mt-16 border-t" style={{ borderColor: "var(--hairline)" }}>
      <div className="container py-6">
        {/* One-line layout on md+; stacks on small screens */}
        <div className="flex flex-col items-start gap-4 md:flex-row md:flex-nowrap md:items-center md:justify-between">
          {/* Brand */}
          <Link href="/" className="flex items-center gap-2 no-underline text-[rgb(var(--fg))]" aria-label="Präzise home">
            <Image
              src="/downloads/PraziseLogo_onlypicture.png"
              alt="Präzise"
              width={28}
              height={28}
              className="h-7 w-7 object-contain opacity-80"
              priority
            />
            <span className="font-semibold tracking-tight">Präzise</span>
          </Link>

          {/* Legal links — kept on one line at md+ */}
          <nav
            aria-label="Legal"
            className="micro flex flex-wrap items-center gap-x-4 gap-y-2 md:flex-nowrap md:whitespace-nowrap md:order-none"
          >
            {links.map((l, i) => (
              <span key={l.href} className="flex items-center">
                <Link href={l.href} className="fancy-underline">
                  {l.label}
                </Link>
                {i < links.length - 1 && (
                  <span aria-hidden className="mx-4 opacity-40">·</span>
                )}
              </span>
            ))}
          </nav>

          {/* Copyright */}
          <p className="micro md:order-none">© {year} Präzise. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
}
