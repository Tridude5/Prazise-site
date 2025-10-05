"use client";

import * as React from "react";

export default function PartnersClient() {
  return (
    <main id="main">
      {/* HERO */}
      <section className="section">
        <div className="container grid items-start gap-10 md:grid-cols-2">
          <div>
            <h1 className="text-3xl font-bold tracking-tight md:text-4xl">
              Built for precise training.{" "}
              <span style={{ color: "var(--accent)" }}>Built for privacy.</span>
            </h1>
            <p className="mt-4 text-lg text-[rgb(var(--muted))]">
              Prazise integrates with wearables and data providers using{" "}
              <strong>explicit user consent</strong>, <strong>minimal scopes</strong>, and{" "}
              <strong>strong security</strong>.
            </p>
            <div className="mt-6 flex flex-wrap gap-3">
              <a className="btn-outline" href="mailto:partnerships@prazise.app">
                Contact partnerships
              </a>
              <a className="btn" href="/legal/privacy">
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
              <article key={t} className="card">
                <h3 className="text-lg font-semibold">{t}</h3>
                <p className="mt-2">{p}</p>
              </article>
            ))}
          </div>
        </div>
      </section>

      {/* DATA WE REQUEST */}
      <section className="section">
        <div className="container">
          <h2 className="text-2xl font-semibold">Data we request &amp; why</h2>
          <div className="mt-6 overflow-x-auto section-card">
            <table className="min-w-full border-separate border-spacing-0">
              <thead>
                <tr className="text-left">
                  {["Signal", "Reason", "Scope"].map((h) => (
                    <th key={h} className="px-4 py-3 font-semibold">
                      {h}
                    </th>
                  ))}
                </tr>
              </thead>
              <tbody>
                {[
                  ["Heart rate / HRV", "Recovery & load calibration", "Daily / summary metrics"],
                  ["Sleep summary", "Readiness & session intensity", "Duration & stages"],
                  ["Workout summaries", "Progression & safety", "Type, duration, avg HR, load"],
                  ["(Optional) Device meta", "Sync hygiene & support", "Battery %, firmware"],
                ].map(([signal, reason, scope], i) => (
                  <tr key={signal}>
                    <td className="px-4 py-3 border-t" style={{ borderColor: "var(--hairline)" }}>
                      <strong>{signal}</strong>
                    </td>
                    <td className="px-4 py-3 border-t" style={{ borderColor: "var(--hairline)" }}>
                      {reason}
                    </td>
                    <td className="px-4 py-3 border-t" style={{ borderColor: "var(--hairline)" }}>
                      {scope}
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
          <p className="micro mt-2">
            We do <strong>not</strong> request continuous GPS tracks or raw PII unless strictly necessary for a feature.
          </p>
        </div>
      </section>

      {/* INTEGRATION FLOW */}
      <section className="section">
        <div className="container">
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
                <span className="mr-1 inline-flex h-7 w-7 items-center justify-center rounded-full border text-sm"
                      style={{ borderColor: "var(--hairline)" }}>
                  {n}
                </span>
                <div>
                  <h3 className="font-semibold">{h}</h3>
                  <p className="mt-1">{p}</p>
                </div>
              </li>
            ))}
          </ol>
        </div>
      </section>

      {/* COMPLIANCE & CONTACT */}
      <section className="section">
        <div className="container grid gap-6 md:grid-cols-2">
          <article className="card">
            <h2 className="text-xl font-semibold">Compliance &amp; user control</h2>
            <ul className="mt-3 list-disc pl-5">
              <li>User controls: disconnect integrations, export data, request deletion.</li>
              <li>Default retention: 24 months; earlier deletion on request.</li>
              <li>Sub-processors vetted under DPAs; list available on request.</li>
            </ul>
          </article>

          <article className="card">
            <h2 className="text-xl font-semibold">Security contact</h2>
            <p className="mt-2">
              Report issues to{" "}
              <a className="fancy-underline" href="mailto:security@prazise.app">security@prazise.app</a>.
            </p>
            <p>
              General partnerships:{" "}
              <a className="fancy-underline" href="mailto:partnerships@prazise.app">partnerships@prazise.app</a>.
            </p>
            <div className="mt-4 flex flex-wrap gap-3">
              <a className="btn" href="mailto:partnerships@prazise.app">Start a review</a>
              <a className="btn-outline" href="/legal/terms">Terms</a>
            </div>
          </article>
        </div>
      </section>

      {/* DISCLAIMER */}
      <section className="section">
        <div className="container">
          <p className="micro text-center">
            Not affiliated with any device maker unless explicitly stated. All trademarks belong to their owners.
          </p>
        </div>
      </section>
    </main>
  );
}
