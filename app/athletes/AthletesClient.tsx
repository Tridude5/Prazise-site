"use client";

import * as React from "react";

export default function AthletesClient() {
  return (
    <main id="main">
      {/* HERO */}
      <section className="section">
        <div className="container grid items-start gap-10 md:grid-cols-2">
          <div>
            <h1 className="text-3xl font-bold tracking-tight md:text-4xl">
              Your plan, tuned to today.
            </h1>
            <p className="mt-4 text-lg text-[rgb(var(--muted))]">
              Recovery low? We ease off. Feeling great? We sharpen. Prazise adapts
              your training using HR, HRV, sleep, and recent sessions—so you get
              the right work on the right day.
            </p>

            {/* ORANGE PILLS */}
            <ul className="mt-4 flex flex-wrap gap-2 text-sm">
              {[
                "5k · 10k · Half · Marathon · Ultra",
                "Device-friendly",
                "Privacy-first",
              ].map((p) => (
                <li key={p} className="pill">{p}</li>
              ))}
            </ul>

            <div className="mt-6 flex flex-wrap gap-3">
              <a className="btn" href="/#waitlist">Join the waitlist</a>
              <a className="btn-outline" href="#how">How it works</a>
            </div>
            <p className="micro mt-2">No spam. Opt out anytime.</p>
          </div>

          {/* Sample day */}
          <div className="section-card" aria-describedby="sample">
            <div className="flex items-start justify-between gap-4">
              <div>
                <p id="sample" className="micro">Today</p>
                <p className="mt-1 text-lg">
                  Session: <strong>Tempo 20–25 min</strong>
                </p>
              </div>
              <span className="pill text-xs">recovery-aware</span>
            </div>
            <hr />
            <div className="grid grid-cols-3 gap-3 text-sm">
              <div><span className="block micro">Target HR</span><strong>~85–88%</strong></div>
              <div><span className="block micro">Load</span><strong>+28</strong></div>
              <div><span className="block micro">Notes</span><strong>Even effort</strong></div>
            </div>
          </div>
        </div>
      </section>

      {/* What you’ll see each day */}
      <section className="section">
        <div className="container">
          <h2 className="text-2xl font-semibold">What you’ll see each day</h2>
          <div className="mt-6 grid gap-6 md:grid-cols-2">
            <article className="card">
              <h3 className="font-semibold">Clear, adjustable targets</h3>
              <p className="mt-2">
                We pair pace/effort with HR guidance and cues. If sleep or HRV dips, we adjust volume and intensity.
              </p>
              <ul className="mt-3 flex flex-wrap gap-2 text-sm">
                {["Warm-up", "Main set", "Cool-down", "Post-run notes"].map((x) => (
                  <li key={x} className="pill">{x}</li>
                ))}
              </ul>
            </article>

            <article className="card">
              <h3 className="font-semibold">Context from yesterday</h3>
              <p className="mt-2">
                Breakthrough or rough day? Tomorrow’s work adapts to keep you progressing without overreaching.
              </p>
              <ul className="mt-3 flex flex-wrap gap-2 text-sm">
                {["Load trend", "Readiness", "Suggested tweaks"].map((x) => (
                  <li key={x} className="pill">{x}</li>
                ))}
              </ul>
            </article>
          </div>
        </div>
      </section>

      {/* Pick your goal */}
      <section className="section" id="goals">
        <div className="container">
          <h2 className="text-2xl font-semibold">Pick your goal</h2>
          <div className="mt-6 grid gap-6 md:grid-cols-3">
            {[
              { t: "5k / 10k", p: "Speed you can repeat. Smart intervals and economy work without frying you." },
              { t: "Half / Marathon", p: "Durable aerobic engine, sustainable tempos, and sensible long-run progressions." },
              { t: "Ultra", p: "Time-on-feet and fueling practice; terrain-aware stimulus with recovery protection." },
            ].map(({ t, p }) => (
              <article key={t} className="card">
                <h3 className="text-lg font-semibold">{t}</h3>
                <p className="mt-2">{p}</p>
                <p className="mt-3">
                  <a className="btn-outline" href="/#waitlist">I’m in</a>
                </p>
              </article>
            ))}
          </div>
          <p className="micro mt-3">
            Tell us your goal when you join—we prioritize early invites by goal type and device.
          </p>
        </div>
      </section>

      {/* Why athletes choose Prazise */}
      <section className="section">
        <div className="container">
          <h2 className="text-2xl font-semibold">Why athletes choose Prazise</h2>
          <div className="mt-6 grid gap-6 md:grid-cols-3">
            {[
              { t: "Adapts daily", p: "Targets and volume respond to recovery and recent load—more green days, fewer forced grinds." },
              { t: "Clarity, not guesswork", p: "Each workout has cues, pacing bands, and post-run insights you can actually use." },
              { t: "Private by default", p: "Your data stays yours. Connect with consent; disconnect anytime." },
            ].map(({ t, p }) => (
              <article key={t} className="card">
                <h3 className="font-semibold">{t}</h3>
                <p className="mt-2">{p}</p>
              </article>
            ))}
          </div>
        </div>
      </section>

      {/* How it works */}
      <section className="section" id="how">
        <div className="container">
          <h2 className="text-2xl font-semibold">How it works</h2>
        </div>
        <div className="container">
          <ol className="mt-6 grid gap-4 md:grid-cols-3">
            <li className="section-card">
              <span className="mr-2 inline-flex h-6 w-6 items-center justify-center rounded-full border border-[var(--hairline)]">1</span>
              <strong> Connect your device</strong><br/>Garmin, Polar, Suunto, Fitbit, Apple Health &amp; more.
            </li>
            <li className="section-card">
              <span className="mr-2 inline-flex h-6 w-6 items-center justify-center rounded-full border border-[var(--hairline)]">2</span>
              <strong> We calibrate</strong><br/>We model recovery (sleep/HRV), recent load, and session context.
            </li>
            <li className="section-card">
              <span className="mr-2 inline-flex h-6 w-6 items-center justify-center rounded-full border border-[var(--hairline)]">3</span>
              <strong> Train precisely</strong><br/>Daily recommendations adjust as you go—easy when needed, sharper when ready.
            </li>
          </ol>
        </div>
      </section>

      {/* Privacy & control */}
      <section className="section">
        <div className="container grid gap-6 md:grid-cols-3">
          {[
            {
              t: "Minimal data",
              p: "HR/HRV, sleep summaries, and workout summaries. No continuous GPS unless you choose it.",
              tags: ["Data minimization", "Consent-based"],
            },
            {
              t: "Full control",
              p: "Connect and disconnect integrations anytime. Export or delete your data on request.",
              tags: ["Export", "Deletion"],
            },
            {
              t: "Security",
              p: "Encryption in transit and at rest, RBAC, and audit logging.",
              tags: ["Secure by design", "GDPR-ready"],
            },
          ].map(({ t, p, tags }) => (
            <article key={t} className="card">
              <h3 className="font-semibold">{t}</h3>
              <p className="mt-2">{p}</p>
              <ul className="mt-3 flex flex-wrap gap-2 text-sm">
                {tags.map((b) => <li key={b} className="pill">{b}</li>)}
              </ul>
            </article>
          ))}
        </div>
        <p className="micro mt-2 text-center">
          Details: <a className="fancy-underline" href="/legal/privacy">Privacy</a> · <a className="fancy-underline" href="/security">Security</a>
        </p>
      </section>

      {/* Quick FAQ */}
      <section className="section">
        <div className="container grid gap-6 md:grid-cols-2">
          <article className="card">
            <h3 className="font-semibold">Can I use this without a watch?</h3>
            <p className="mt-2">
              You can start with phone-collected basics, but HR/HRV + workout data from a wearable gives the best precision.
            </p>
            <p className="micro mt-2">
              <a className="fancy-underline" href="/faq">See all FAQs</a>
            </p>
          </article>

          <article className="card">
            <h3 className="font-semibold">Which devices work?</h3>
            <p className="mt-2">
              We’re building against official, user-consented APIs (Garmin, Polar, Suunto, Fitbit, Apple Health &amp; more).
            </p>
            <p className="micro mt-2">
              <a className="fancy-underline" href="/#integrations">Integration status</a>
            </p>
          </article>
        </div>
      </section>

      {/* CTA */}
      <section className="section">
        <div className="container section-card">
          <h2 className="text-2xl font-semibold">Get early access</h2>
          <p className="micro">
            Already on the list? You’ll be among the first invites.
          </p>
          <p className="mt-3">
            <a className="btn" href="/#waitlist">Join the waitlist</a>
          </p>
        </div>
      </section>
    </main>
  );
}
