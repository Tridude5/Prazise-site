"use client";

import * as React from "react";

export default function AthletesClient() {
  return (
    <main id="main" className="mx-auto max-w-6xl px-4 py-12">
      {/* Hero (athlete-focused) */}
      <section className="mb-16">
        <div className="grid items-start gap-10 md:grid-cols-2">
          <div className="hero-copy">
            <h1 className="text-3xl font-bold tracking-tight md:text-4xl">
              Your plan, tuned to today.
            </h1>
            <p className="mt-4 text-lg text-foreground/80">
              Recovery low? We ease off. Feeling great? We sharpen. Prazise adapts
              your training using HR, HRV, sleep, and recent sessions—so you get
              the right work on the right day.
            </p>

            <ul className="mt-4 flex flex-wrap gap-2 text-sm">
              {["5k · 10k · Half · Marathon · Ultra", "Device-friendly", "Privacy-first"].map((p) => (
                <li
                  key={p}
                  className="rounded-full border border-foreground/20 px-3 py-1 text-foreground/80"
                >
                  {p}
                </li>
              ))}
            </ul>

            <div className="mt-6 flex flex-wrap gap-3">
              <a
                className="inline-flex items-center rounded-lg px-4 py-2 font-semibold ring-1 ring-foreground/20 hover:bg-foreground/5"
                href="/#waitlist"
              >
                Join the waitlist
              </a>
              <a
                className="inline-flex items-center rounded-lg px-4 py-2 font-semibold ring-1 ring-foreground/20 hover:bg-foreground/5"
                href="#how"
              >
                How it works
              </a>
            </div>
            <p className="micro mt-2 text-foreground/70">No spam. Opt out anytime.</p>
          </div>

          {/* What a day looks like */}
          <div className="hero-art">
            <div
              className="rounded-2xl border border-foreground/10 p-5 shadow-sm"
              aria-describedby="sample"
            >
              <img src="/logo.svg" alt="" className="mb-3 h-6 w-6 opacity-70" aria-hidden="true" />
              <div className="flex items-start justify-between gap-4">
                <div>
                  <p id="sample" className="text-sm text-foreground/70">Today</p>
                  <p className="mt-1 text-lg">
                    Session: <strong>Tempo 20–25 min</strong>
                  </p>
                </div>
                <div className="rounded-full border border-foreground/20 px-3 py-1 text-xs">
                  recovery-aware
                </div>
              </div>
              <hr className="my-4 border-foreground/10" />
              <div className="grid grid-cols-3 gap-3 text-sm">
                <div className="kpi">
                  <span className="block text-foreground/70">Target HR</span>
                  <strong>~85–88%</strong>
                </div>
                <div className="kpi">
                  <span className="block text-foreground/70">Load</span>
                  <strong>+28</strong>
                </div>
                <div className="kpi">
                  <span className="block text-foreground/70">Notes</span>
                  <strong>Even effort</strong>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* What you’ll see each day */}
      <section className="mb-16">
        <div className="container mx-auto">
          <h2 className="text-2xl font-semibold">What you’ll see each day</h2>
          <div className="mt-6 grid gap-6 md:grid-cols-2">
            <article className="rounded-xl border border-foreground/10 p-5">
              <h3 className="font-semibold">Clear, adjustable targets</h3>
              <p className="mt-2">
                We pair pace/effort with HR guidance and cues. If sleep or HRV dips, we adjust volume and intensity.
              </p>
              <ul className="mt-3 flex flex-wrap gap-2 text-sm">
                {["Warm-up", "Main set", "Cool-down", "Post-run notes"].map((x) => (
                  <li key={x} className="rounded-full border border-foreground/20 px-3 py-1">
                    {x}
                  </li>
                ))}
              </ul>
            </article>

            <article className="rounded-xl border border-foreground/10 p-5">
              <h3 className="font-semibold">Context from yesterday</h3>
              <p className="mt-2">
                Breakthrough or rough day? Tomorrow’s work adapts to keep you progressing without overreaching.
              </p>
              <ul className="mt-3 flex flex-wrap gap-2 text-sm">
                {["Load trend", "Readiness", "Suggested tweaks"].map((x) => (
                  <li key={x} className="rounded-full border border-foreground/20 px-3 py-1">
                    {x}
                  </li>
                ))}
              </ul>
            </article>
          </div>
        </div>
      </section>

      {/* Pick your goal */}
      <section className="mb-16" id="goals">
        <h2 className="text-2xl font-semibold">Pick your goal</h2>
        <div className="mt-6 grid gap-6 md:grid-cols-3">
          <article className="rounded-xl border border-foreground/10 p-5">
            <h3 className="text-lg font-semibold">5k / 10k</h3>
            <p className="mt-2">
              Speed you can repeat. Smart intervals and economy work without frying you.
            </p>
            <p className="mt-3">
              <a className="inline-block rounded-lg px-3 py-1 ring-1 ring-foreground/20 hover:bg-foreground/5" href="/#waitlist">
                I’m in
              </a>
            </p>
          </article>

          <article className="rounded-xl border border-emerald-500/30 p-5 ring-1 ring-emerald-500/20">
            <h3 className="text-lg font-semibold">Half / Marathon</h3>
            <p className="mt-2">
              Durable aerobic engine, sustainable tempos, and sensible long-run progressions.
            </p>
            <p className="mt-3">
              <a className="inline-block rounded-lg px-3 py-1 ring-1 ring-foreground/20 hover:bg-foreground/5" href="/#waitlist">
                I’m in
              </a>
            </p>
          </article>

          <article className="rounded-xl border border-foreground/10 p-5">
            <h3 className="text-lg font-semibold">Ultra</h3>
            <p className="mt-2">
              Time-on-feet and fueling practice; terrain-aware stimulus with recovery protection.
            </p>
            <p className="mt-3">
              <a className="inline-block rounded-lg px-3 py-1 ring-1 ring-foreground/20 hover:bg-foreground/5" href="/#waitlist">
                I’m in
              </a>
            </p>
          </article>
        </div>
        <p className="micro mt-3 text-foreground/70">
          Tell us your goal when you join—we prioritize early invites by goal type and device.
        </p>
      </section>

      {/* Why athletes choose Prazise */}
      <section className="mb-16">
        <h2 className="text-2xl font-semibold">Why athletes choose Prazise</h2>
        <div className="mt-6 grid gap-6 md:grid-cols-3">
          <article className="rounded-xl border border-foreground/10 p-5">
            <h3 className="font-semibold">Adapts daily</h3>
            <p className="mt-2">
              Targets and volume respond to recovery and recent load—more green days, fewer forced grinds.
            </p>
          </article>

          <article className="rounded-xl border border-foreground/10 p-5">
            <h3 className="font-semibold">Clarity, not guesswork</h3>
            <p className="mt-2">
              Each workout has cues, pacing bands, and post-run insights you can actually use.
            </p>
          </article>

          <article className="rounded-xl border border-foreground/10 p-5">
            <h3 className="font-semibold">Private by default</h3>
            <p className="mt-2">
              Your data stays yours. Connect with consent; disconnect anytime.
            </p>
          </article>
        </div>
      </section>

      {/* How it works */}
      <section className="mb-16" id="how">
        <h2 className="text-2xl font-semibold">How it works</h2>
        <ol className="mt-6 space-y-4">
          <li>
            <span className="mr-2 inline-flex h-6 w-6 items-center justify-center rounded-full ring-1 ring-foreground/20">1</span>
            <strong>Connect your device</strong>
            <br />
            Garmin, Polar, Suunto, Fitbit, Apple Health &amp; more.
          </li>
          <li>
            <span className="mr-2 inline-flex h-6 w-6 items-center justify-center rounded-full ring-1 ring-foreground/20">2</span>
            <strong>We calibrate</strong>
            <br />
            We model recovery (sleep/HRV), recent load, and session context.
          </li>
          <li>
            <span className="mr-2 inline-flex h-6 w-6 items-center justify-center rounded-full ring-1 ring-foreground/20">3</span>
            <strong>Train precisely</strong>
            <br />
            Daily recommendations adjust as you go—easy when needed, sharper when you’re ready.
          </li>
        </ol>
      </section>

      {/* Privacy & control */}
      <section className="mb-16">
        <h2 className="text-2xl font-semibold">Privacy &amp; control</h2>
        <div className="mt-6 grid gap-6 md:grid-cols-3">
          <article className="rounded-xl border border-foreground/10 p-5">
            <h3 className="font-semibold">Minimal data</h3>
            <p className="mt-2">
              HR/HRV, sleep summaries, and workout summaries. No continuous GPS unless you choose it.
            </p>
            <ul className="mt-3 flex flex-wrap gap-2 text-sm">
              {["Data minimization", "Consent-based"].map((b) => (
                <li key={b} className="rounded-full border border-foreground/20 px-3 py-1">
                  {b}
                </li>
              ))}
            </ul>
          </article>

          <article className="rounded-xl border border-foreground/10 p-5">
            <h3 className="font-semibold">Full control</h3>
            <p className="mt-2">
              Connect and disconnect integrations anytime. Export or delete your data on request.
            </p>
            <ul className="mt-3 flex flex-wrap gap-2 text-sm">
              {["Export", "Deletion"].map((b) => (
                <li key={b} className="rounded-full border border-foreground/20 px-3 py-1">
                  {b}
                </li>
              ))}
            </ul>
          </article>

          <article className="rounded-xl border border-foreground/10 p-5">
            <h3 className="font-semibold">Security</h3>
            <p className="mt-2">
              Encryption in transit and at rest, RBAC, and audit logging.
            </p>
            <ul className="mt-3 flex flex-wrap gap-2 text-sm">
              {["Secure by design", "GDPR-ready"].map((b) => (
                <li key={b} className="rounded-full border border-foreground/20 px-3 py-1">
                  {b}
                </li>
              ))}
            </ul>
          </article>
        </div>
        <p className="micro mt-2 text-foreground/70">
          Details: <a href="/legal/privacy">Privacy</a> · <a href="/security">Security</a>
        </p>
      </section>

      {/* Quick FAQ */}
      <section className="mb-16">
        <h2 className="text-2xl font-semibold">Quick answers</h2>
        <div className="mt-6 grid gap-6 md:grid-cols-2">
          <article className="rounded-xl border border-foreground/10 p-5">
            <h3 className="font-semibold">Can I use this without a watch?</h3>
            <p className="mt-2">
              You can start with phone-collected basics, but HR/HRV + workout data from a wearable gives the best precision.
            </p>
            <p className="micro mt-2">
              <a href="/faq">See all FAQs</a>
            </p>
          </article>

          <article className="rounded-xl border border-foreground/10 p-5">
            <h3 className="font-semibold">Which devices work?</h3>
            <p className="mt-2">
              We’re building against official, user-consented APIs (Garmin, Polar, Suunto, Fitbit, Apple Health &amp; more).
            </p>
            <p className="micro mt-2">
              <a href="/#integrations">Integration status</a>
            </p>
          </article>
        </div>
      </section>

      {/* CTA */}
      <section className="rounded-2xl border border-foreground/10 p-6">
        <h2 className="text-2xl font-semibold">Get early access</h2>
        <p className="micro text-foreground/70">
          Already on the list? You’ll be among the first invites.
        </p>
        <p className="mt-3">
          <a
            className="inline-flex items-center rounded-lg px-4 py-2 font-semibold ring-1 ring-foreground/20 hover:bg-foreground/5"
            href="/#waitlist"
          >
            Join the waitlist
          </a>
        </p>
      </section>
    </main>
  );
}
