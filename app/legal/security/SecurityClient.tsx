"use client";

import * as React from "react";

export default function SecurityClient() {
  return (
    <main id="main" className="mx-auto max-w-5xl px-4 py-12">
      {/* Hero */}
      <section className="mb-12">
        <div className="grid gap-8 md:grid-cols-2 md:items-center">
          <div>
            <h1 className="text-3xl font-bold tracking-tight md:text-4xl">
              Security at Prazise
            </h1>
            <p className="mt-3 text-lg text-foreground/80">
              We minimize data, encrypt it in transit and at rest, and give users control.
            </p>
            <div className="mt-6 flex flex-wrap gap-3">
              <a
                className="inline-flex items-center rounded-lg px-4 py-2 font-semibold ring-1 ring-foreground/20 hover:bg-foreground/5"
                href="mailto:security@prazise.app"
              >
                Report a security issue
              </a>
              <a
                className="inline-flex items-center rounded-lg px-4 py-2 font-semibold ring-1 ring-foreground/20 hover:bg-foreground/5"
                href="/legal/privacy"
              >
                Privacy
              </a>
            </div>
          </div>

          <div className="grid grid-cols-2 gap-3">
            {[
              "Encryption in transit (TLS 1.2+)",
              "Encryption at rest (AES-256)",
              "Least-privilege access (RBAC)",
              "Audit logging",
              "Secrets rotation",
              "Data minimization",
            ].map((pill) => (
              <div
                key={pill}
                className="rounded-full border border-foreground/20 px-3 py-2 text-sm text-foreground/80"
              >
                {pill}
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Technical controls */}
      <section className="mb-12">
        <h2 className="text-2xl font-semibold">Technical controls</h2>
        <div className="mt-6 grid gap-6 md:grid-cols-3">
          <article className="rounded-xl border border-foreground/10 p-5">
            <h3 className="font-semibold">Transport &amp; storage</h3>
            <ul className="mt-3 list-disc pl-5">
              <li>TLS 1.2+ for all network traffic</li>
              <li>AES-256 encryption at rest (managed keys)</li>
              <li>Backups encrypted and access-controlled</li>
            </ul>
          </article>

          <article className="rounded-xl border border-foreground/10 p-5">
            <h3 className="font-semibold">Access management</h3>
            <ul className="mt-3 list-disc pl-5">
              <li>Role-based access control (least privilege)</li>
              <li>Separate dev/stage/prod environments</li>
              <li>Scoped service accounts and audit trails</li>
            </ul>
          </article>

          <article className="rounded-xl border border-foreground/10 p-5">
            <h3 className="font-semibold">Secure development</h3>
            <ul className="mt-3 list-disc pl-5">
              <li>Dependency scanning in CI</li>
              <li>Secrets management &amp; periodic rotation</li>
              <li>Code review for sensitive changes</li>
            </ul>
          </article>
        </div>
      </section>

      {/* Data handling & Compliance */}
      <section className="mb-12">
        <div className="grid gap-6 md:grid-cols-2">
          <article className="rounded-xl border border-foreground/10 p-5">
            <h2 className="text-xl font-semibold">Data handling</h2>
            <ul className="mt-3 list-disc pl-5">
              <li>
                <strong>Minimization:</strong> HR/HRV, sleep summaries, workout summaries; optional device metadata
                (battery/firmware).
              </li>
              <li>
                <strong>Retention:</strong> default 24 months for training continuity; users can request earlier deletion.
              </li>
              <li>
                <strong>Revocation:</strong> users can disconnect integrations; tokens are revoked.
              </li>
            </ul>
          </article>

          <article className="rounded-xl border border-foreground/10 p-5">
            <h2 className="text-xl font-semibold">Compliance &amp; support</h2>
            <ul className="mt-3 list-disc pl-5">
              <li>GDPR/CCPA-aligned processes; DPA available on request.</li>
              <li>Sub-processors vetted under DPAs; current list available on request.</li>
              <li>
                Security contact:{" "}
                <a className="underline underline-offset-2" href="mailto:security@prazise.app">
                  security@prazise.app
                </a>
              </li>
            </ul>
          </article>
        </div>
      </section>

      {/* Incident response */}
      <section className="mb-12">
        <h2 className="text-2xl font-semibold">Incident response</h2>
        <div className="mt-4 rounded-xl border border-foreground/10 p-5">
          <ul className="list-disc pl-5">
            <li>24-hour internal triage for reported issues.</li>
            <li>User/partner notification per legal and contractual obligations.</li>
            <li>Root-cause analysis and tracked remediation actions.</li>
          </ul>
        </div>
      </section>

      {/* Disclaimer */}
      <section className="mb-4">
        <p className="text-center text-sm opacity-75">
          Not affiliated with any device maker unless explicitly stated. All trademarks belong to their owners.
        </p>
      </section>
    </main>
  );
}
