// app/layout.tsx
import type { Metadata, Viewport } from "next";
import "./globals.css";

import { I18nProvider } from "@/components/i18n/I18nProvider";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import AppEffects from "@/components/AppEffects";
import Script from "next/script";

export const metadata: Metadata = {
  title: {
    default: "Prazise — Precision training for runners",
    template: "%s — Prazise",
  },
  description:
    "Prazise turns your heart rate, HRV, sleep, and workouts into precise training plans. Device-friendly. Privacy-first.",
  openGraph: {
    title: "Prazise — Precision training for runners",
    description:
      "Train with intent. Smarter recommendations from your existing devices.",
    type: "website",
  },
  twitter: { card: "summary_large_image" },
  // Use relative paths so assets work under GitHub Pages subpaths
  icons: {
    icon: [
      { url: "favicon-48.png", sizes: "48x48", type: "image/png" },
      { url: "favicon.ico", sizes: "any" },
      { url: "favicon-32.png", sizes: "32x32", type: "image/png" },
      { url: "favicon-16.png", sizes: "16x16", type: "image/png" },
    ],
    apple: [{ url: "apple-touch-icon.png", sizes: "180x180" }],
  },
  // Keep if you have /public/manifest.json
  manifest: "manifest.json",
};

// Next.js wants themeColor in `viewport`, not `metadata`
export const viewport: Viewport = {
  themeColor: [
    { media: "(prefers-color-scheme: dark)", color: "#0B0D10" },
    { media: "(prefers-color-scheme: light)", color: "#ffffff" },
  ],
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <body className="min-h-screen flex flex-col bg-white text-gray-900 dark:bg-gray-950 dark:text-gray-100 antialiased">
        {/* Organization JSON-LD for Prazise */}
        <Script id="ld-org" type="application/ld+json" strategy="beforeInteractive">
          {JSON.stringify({
            "@context": "https://schema.org",
            "@type": "Organization",
            name: "Prazise",
            url: "https://tridude5.github.io/Prazise-site/",
            logo: "favicon-48.png",
            sameAs: [],
          })}
        </Script>

        <AppEffects />
        <I18nProvider>
          <Header />
          <main className="flex-1">{children}</main>
          <Footer />
        </I18nProvider>
      </body>
    </html>
  );
}
