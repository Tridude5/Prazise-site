"use client";

import * as React from "react";

export default function CoachesClient() {
  return (
    <main id="main">
      {/* HERO */}
      <section className="section">
        <div className="container grid items-start gap-10 md:grid-cols-2">
          <div>
            <h1 className="text-3xl font-bold tracking-tight md:text-4xl">
              Coach more. Guess less.
            </h1>
            <p className="mt-4 text-lg text-[rgb(var(--muted))]">
              Readiness summaries and adaptive suggestions to help you dial stimulus
              and protect recovery.
            </p>

            <div className="mt-6 flex flex-wrap gap-3">
              <a className="btn-outline" href="mailto:partnerships@prazise.app">
                Contact partnerships
              </a>
              <a className="btn" href="/#waitlist">
                Join waitlist
              </a>
            </div>
            <p className="micro mt-2">
              Early access for coaches—tell us your roster size and devices used.
            </p>
          </div>

          {/* Snapshot card (logo removed to avoid broken icon) */}
          <div className="section-card" aria-describedby="snapshot">
            <div className="flex items-start justify-between gap-4">
              <div>
                <p id="snapshot" className="micro">Team snapshot</p>
                <p className="mt-1 text-lg">
                  Readiness: <strong>6</strong> athletes green, <strong>2</strong> monitor
                </p>
              </div>
              <span className="pill text-xs">prototype</span>
            </div>
            <hr />
            <div className="grid grid-cols-3 gap-3 text-sm">
              <div>
                <span className="block micro">Avg HRV</span>
                <strong>71 ms</strong>
              </div>
              <div>
                <span className="block micro">Sleep</span>
                <strong>7h 21m</strong>
              </div>
              <div>
                <span className="block micro">Load trend</span>
                <strong>Stable</strong>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* BENEFITS */}
      <section className="section">
        <div className="container">
          <h2 className="text-2xl font-semibold">Built for coaching workflows</h2>
          <div className="mt-6 grid gap-6 md:grid-cols-3">
            {[
              {
                t: "Roster overview",
                p: "Daily readiness summaries highlight who’s ready and who needs a lighter touch.",
              },
              {
                t: "Context-aware suggestions",
                p: "Plans adapt to recent load and sleep signals—more precise than fixed templates.",
              },
              {
                t: "Privacy-first access",
                p: "Explicit, revocable consent from athletes; minimal scopes for data sharing.",
              },
            ].map(({ t, p }) => (
              <article key={t} className="card">
                <h3 className="font-semibold">{t}</h3>
                <p className="mt-2">{p}</p>
              </article>
            ))}
          </div>
          <p className="micro mt-3">Early access—some capabilities are in development.</p>
        </div>
      </section>

      {/* HOW IT WORKS */}
      <section className="section">
        <div className="container">
          <h2 className="text-2xl font-semibold">How it works</h2>
          <ol className="mt-6 grid gap-4 md:grid-cols-3">
            <li className="section-card">
              <span className="mr-2 inline-flex h-6 w-6 items-center justify-center rounded-full border border-[var(--hairline)]">1</span>
              <strong> Invite athletes</strong><br />
              Athletes connect devices with consented scopes.
            </li>
            <li className="section-card">
              <span className="mr-2 inline-flex h-6 w-6 items-center justify-center rounded-full border border-[var(--hairline)]">2</span>
              <strong> Review readiness</strong><br />
              Sleep &amp; HRV trends + recent load summaries.
            </li>
            <li className="section-card">
              <span className="mr-2 inline-flex h-6 w-6 items-center justify-center rounded-full border border-[var(--hairline)]">3</span>
              <strong> Adjust precisely</strong><br />
              Use suggestions or your own session plan.
            </li>
          </ol>
        </div>
      </section>

      {/* TALK TO US */}
      <section className="section">
        <div className="container section-card">
          <h2 className="text-2xl font-semibold">Talk to us</h2>
          <p className="mt-2">
            Tell us about your group or club and the platforms you use.
          </p>
          <div className="mt-4 flex flex-wrap gap-3">
            <a className="btn-outline" href="mailto:partnerships@prazise.app">
              Contact partnerships
            </a>
            <a className="btn" href="/#waitlist">
              Join waitlist
            </a>
          </div>
        </div>
      </section>
    </main>
  );
}
