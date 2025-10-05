"use client";

import * as React from "react";

export default function PartnersClient() {
  return (
    <main id="main" className="mx-auto max-w-6xl px-4 py-12">
      {/* Hero */}
      <section className="mb-16">
        <div className="grid items-start gap-10 md:grid-cols-2">
          <div className="hero-copy">
            <h1 className="text-3xl font-bold tracking-tight md:text-4xl">
              Built for precise training.{" "}
              <span className="text-emerald-600">Built for privacy.</span>
            </h1>
            <p className="mt-4 text-lg text-foreground/80">
              Prazise integrates with wearables and data providers using{" "}
              <strong>explicit user consent</strong>,{" "}
              <strong>minimal scopes</strong>, and{" "}
              <strong>strong security</strong>.
            </p>
            <div className="mt-6 flex flex-wrap gap-3">
              <a
                className="inline-flex items-center rounded-lg px-4 py-2 font-semibold ring-1 ring-foreground/20 hover:bg-foreground/5"
                href="mailto:partnerships@prazise.app"
              >
                Contact partnerships
              </a>
              <a
                className="inline-flex items-center rounded-lg px-4 py-2 font-semibold ring-1 ring-foreground/20 hover:bg-foreground/5"
                href="/legal/privacy"
              >
                Privacy
              </a>
            </div>
          </div>

          <div className="grid gap-4 sm:grid-cols-2">
            {[
              {
                t: "User-consented",
                p: "OAuth flows with clear, revocable scopes. Users can disconnect anytime.",
              },
              {
                t: "Data-minimized",
                p: "HR/HRV, sleep summaries, workout summaries. No continuous GPS unless required.",
              },
              {
                t: "Secure by design",
                p: "Encryption in transit and at rest, RBAC, audit logs, and key rotation.",
              },
              {
                t: "Compliance-minded",
                p: "GDPR/CCPA-ready processes. DPA available on request.",
              },
            ].map(({ t, p }) => (
              <article
                key={t}
                className="rounded-xl border border-foreground/10 p-5"
              >
                <h3 className="text-lg font-semibold">{t}</h3>
                <p className="mt-2">{p}</p>
              </article>
            ))}
          </div>
        </div>
      </section>

      {/* Data we request */}
      <section className="mb-16">
        <h2 className="text-2xl font-semibold">Data we request &amp; why</h2>
        <div className="mt-6 overflow-x-auto rounded-xl border border-foreground/10">
          <table className="min-w-full border-separate border-spacing-0">
            <thead>
              <tr className="text-left">
                <th className="sticky top-0 bg-background px-4 py-3 font-semibold">
                  Signal
                </th>
                <th className="sticky top-0 bg-background px-4 py-3 font-semibold">
                  Reason
                </th>
                <th className="sticky top-0 bg-background px-4 py-3 font-semibold">
                  Scope
                </th>
              </tr>
            </thead>
            <tbody>
              {[
                [
                  "Heart rate / HRV",
                  "Recovery & load calibration",
                  "Daily / summary metrics",
                ],
                [
                  "Sleep summary",
                  "Readiness & session intensity",
                  "Duration & stages",
                ],
                [
                  "Workout summaries",
                  "Progression & safety",
                  "Type, duration, avg HR, load",
                ],
                [
                  "(Optional) Device meta",
                  "Sync hygiene & support",
                  "Battery %, firmware",
                ],
              ].map(([signal, reason, scope]) => (
                <tr key={signal} className="border-t border-foreground/10">
                  <td className="px-4 py-3">
                    <strong>{signal}</strong>
                  </td>
                  <td className="px-4 py-3">{reason}</td>
                  <td className="px-4 py-3">{scope}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
        <p className="micro mt-2 text-foreground/70">
          We do <strong>not</strong> request continuous GPS tracks or raw PII
          unless strictly necessary for a feature.
        </p>
      </section>

      {/* Integration flow */}
      <section className="mb-16">
        <h2 className="text-2xl font-semibold">Integration flow</h2>
        <ol className="mt-6 space-y-5">
          {[
            {
              n: "1",
              h: "Register app",
              p: "Vendor portal registration with approved redirect URIs and brand review.",
            },
            {
              n: "2",
              h: "OAuth & scopes",
              p: "Explicit consent, least-privilege scopes, and revocable tokens.",
            },
            {
              n: "3",
              h: "Sync & safeguards",
              p: "Backoff + retry policies, rate-limit respect, audit logging, and alerts.",
            },
          ].map(({ n, h, p }) => (
            <li key={n} className="flex items-start gap-4">
              <div className="inline-flex h-7 w-7 items-center justify-center rounded-full ring-1 ring-foreground/20">
                {n}
              </div>
              <div>
                <h3 className="font-semibold">{h}</h3>
                <p className="mt-1">{p}</p>
              </div>
            </li>
          ))}
        </ol>
      </section>

      {/* Compliance & contact */}
      <section className="mb-16">
        <div className="grid gap-6 md:grid-cols-2">
          <div className="rounded-xl border border-foreground/10 p-5">
            <h2 className="text-xl font-semibold">Compliance &amp; user control</h2>
            <ul className="mt-3 list-disc pl-5">
              <li>
                User controls: disconnect integrations, export data, request
                deletion.
              </li>
              <li>Default retention: 24 months; earlier deletion on request.</li>
              <li>
                Sub-processors vetted under DPAs; list available on request.
              </li>
            </ul>
          </div>

          <div className="rounded-xl border border-foreground/10 p-5">
            <h2 className="text-xl font-semibold">Security contact</h2>
            <p className="mt-2">
              Report issues to{" "}
              <a className="underline underline-offset-2" href="mailto:security@prazise.app">
                security@prazise.app
              </a>
              .
            </p>
            <p>
              General partnerships:{" "}
              <a className="underline underline-offset-2" href="mailto:partnerships@prazise.app">
                partnerships@prazise.app
              </a>
              .
            </p>
            <div className="mt-4 flex flex-wrap gap-3">
              <a
                className="inline-flex items-center rounded-lg px-4 py-2 font-semibold ring-1 ring-foreground/20 hover:bg-foreground/5"
                href="mailto:partnerships@prazise.app"
              >
                Start a review
              </a>
              <a
                className="inline-flex items-center rounded-lg px-4 py-2 font-semibold ring-1 ring-foreground/20 hover:bg-foreground/5"
                href="/legal/terms"
              >
                Terms
              </a>
            </div>
          </div>
        </div>
      </section>

      <section>
        <p className="micro text-center text-foreground/70">
          Not affiliated with any device maker unless explicitly stated. All
          trademarks belong to their owners.
        </p>
      </section>
    </main>
  );
}
