"use client";

import * as React from "react";

export default function CoachesClient() {
  return (
    <main id="main" className="mx-auto max-w-6xl px-4 py-12">
      {/* Hero */}
      <section className="mb-16">
        <div className="grid items-start gap-10 md:grid-cols-2">
          <div className="hero-copy">
            <h1 className="text-3xl font-bold tracking-tight md:text-4xl">
              Coach more. Guess less.
            </h1>
            <p className="mt-4 text-lg text-foreground/80">
              Readiness summaries and adaptive suggestions to help you dial stimulus and protect recovery.
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
                href="/#waitlist"
              >
                Join waitlist
              </a>
            </div>
            <p className="micro mt-2 text-foreground/70">
              Early access for coaches—tell us your roster size and devices used.
            </p>
          </div>

          {/* Snapshot card */}
          <div className="rounded-2xl border border-foreground/10 p-5 shadow-sm">
            <img src="/logo.svg" alt="" className="mb-3 h-6 w-6 opacity-70" aria-hidden="true" />
            <div className="flex items-start justify-between gap-4">
              <div>
                <p className="text-sm text-foreground/70">Team snapshot</p>
                <p className="mt-1 text-lg">
                  Readiness: <strong>6</strong> athletes green, <strong>2</strong> monitor
                </p>
              </div>
              <div className="rounded-full border border-foreground/20 px-3 py-1 text-xs">prototype</div>
            </div>
            <hr className="my-4 border-foreground/10" />
            <div className="grid grid-cols-3 gap-3 text-sm">
              <div className="kpi">
                <span className="block text-foreground/70">Avg HRV</span>
                <strong>71 ms</strong>
              </div>
              <div className="kpi">
                <span className="block text-foreground/70">Sleep</span>
                <strong>7h 21m</strong>
              </div>
              <div className="kpi">
                <span className="block text-foreground/70">Load trend</span>
                <strong>Stable</strong>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Benefits for coaches */}
      <section className="mb-16">
        <h2 className="text-2xl font-semibold">Built for coaching workflows</h2>
        <div className="mt-6 grid gap-6 md:grid-cols-3">
          <article className="rounded-xl border border-foreground/10 p-5">
            <h3 className="font-semibold">Roster overview</h3>
            <p className="mt-2">
              Daily readiness summaries highlight who’s ready and who needs a lighter touch.
            </p>
          </article>
          <article className="rounded-xl border border-foreground/10 p-5">
            <h3 className="font-semibold">Context-aware suggestions</h3>
            <p className="mt-2">
              Plans adapt to recent load and sleep signals—more precise than fixed templates.
            </p>
          </article>
          <article className="rounded-xl border border-foreground/10 p-5">
            <h3 className="font-semibold">Privacy-first access</h3>
            <p className="mt-2">
              Explicit, revocable consent from athletes; minimal scopes for data sharing.
            </p>
          </article>
        </div>
        <p className="micro mt-3 text-foreground/70">
          Early access—some capabilities are in development.
        </p>
      </section>

      {/* How it works */}
      <section className="mb-16">
        <h2 className="text-2xl font-semibold">How it works</h2>
        <ol className="mt-6 space-y-4">
          <li>
            <span className="mr-2 inline-flex h-6 w-6 items-center justify-center rounded-full ring-1 ring-foreground/20">1</span>
            <strong>Invite athletes</strong>
            <br />
            Athletes connect devices with consented scopes.
          </li>
          <li>
            <span className="mr-2 inline-flex h-6 w-6 items-center justify-center rounded-full ring-1 ring-foreground/20">2</span>
            <strong>Review readiness</strong>
            <br />
            Sleep &amp; HRV trends + recent load summaries.
          </li>
          <li>
            <span className="mr-2 inline-flex h-6 w-6 items-center justify-center rounded-full ring-1 ring-foreground/20">3</span>
            <strong>Adjust precisely</strong>
            <br />
            Use suggestions or your own session plan.
          </li>
        </ol>
      </section>

      {/* Talk to us */}
      <section className="rounded-2xl border border-foreground/10 p-6">
        <h2 className="text-2xl font-semibold">Talk to us</h2>
        <p className="mt-2">Tell us about your group or club and the platforms you use.</p>
        <div className="mt-4 flex flex-wrap gap-3">
          <a
            className="inline-flex items-center rounded-lg px-4 py-2 font-semibold ring-1 ring-foreground/20 hover:bg-foreground/5"
            href="mailto:partnerships@prazise.app"
          >
            Contact partnerships
          </a>
          <a
            className="inline-flex items-center rounded-lg px-4 py-2 font-semibold ring-1 ring-foreground/20 hover:bg-foreground/5"
            href="/#waitlist"
          >
            Join waitlist
          </a>
        </div>
      </section>
    </main>
  );
}
