"use client";

import * as React from "react";

export default function AboutClient() {
  return (
    <main id="main" className="mx-auto max-w-6xl px-4 py-12">
      {/* Hero */}
      <section className="mb-12">
        <div className="grid items-start gap-8 md:grid-cols-2">
          <div className="hero-copy">
            <h1 className="text-3xl font-bold tracking-tight md:text-4xl">
              About Prazise
            </h1>
            <p className="mt-3 text-lg text-foreground/80">
              We turn heart rate, HRV, sleep, and workouts into precise, privacy-first training for runners and triathletes.
            </p>
            <div className="mt-6 flex flex-wrap gap-3">
              <a
                className="inline-flex items-center rounded-lg px-4 py-2 font-semibold ring-1 ring-foreground/20 hover:bg-foreground/5"
                href="mailto:hello@prazise.app"
              >
                Contact us
              </a>
              <a
                className="inline-flex items-center rounded-lg px-4 py-2 font-semibold ring-1 ring-foreground/20 hover:bg-foreground/5"
                href="/partners"
              >
                For Partners
              </a>
            </div>
          </div>

          <div className="at-a-glance rounded-xl border border-foreground/10 p-5">
            <h3 className="text-lg font-semibold">At a glance</h3>
            <ul className="mt-3 space-y-2">
              <li><strong>Founded:</strong> 2025</li>
              <li><strong>Focus:</strong> Adaptive training from wearable signals</li>
              <li><strong>Approach:</strong> User-consented integrations, data minimization</li>
              <li><strong>HQ:</strong> Munich, Germany (Remote-first)</li>
              <li><strong>Presence:</strong> United States &amp; European Union</li>
            </ul>
          </div>
        </div>
      </section>

      <article
        className="
          prose prose-emerald dark:prose-invert
          prose-h1:mb-2 prose-h2:mt-10 prose-h2:mb-3
          prose-p:my-4 prose-a:break-words
        "
      >
        {/* Mission & approach */}
        <section className="section">
          <div className="grid gap-6 md:grid-cols-2">
            <article className="not-prose rounded-xl border border-foreground/10 p-5">
              <h2 className="text-xl font-semibold">Our mission</h2>
              <p className="mt-3">
                Help everyday athletes train with intent—clear sessions, safe load progressions, and fewer junk miles.
              </p>
              <p>
                We’re building tools that act like a coach who actually knows you, not a one-size-fits-all plan.
              </p>
            </article>

            <article className="not-prose rounded-xl border border-foreground/10 p-5">
              <h2 className="text-xl font-semibold">How we work</h2>
              <ul className="mt-3 list-disc pl-5">
                <li><strong>Consent first:</strong> You connect your own data sources and can disconnect anytime.</li>
                <li><strong>Minimal scopes:</strong> HR/HRV, sleep summaries, workout summaries; optional device metadata.</li>
                <li><strong>Security:</strong> Encryption in transit and at rest; RBAC; audit logging.</li>
              </ul>
              <p className="micro mt-3 text-foreground/70">
                Details: <a href="/security">Security</a> · <a href="/legal/privacy">Privacy</a>
              </p>
            </article>
          </div>
        </section>

        {/* Company & legal */}
        <section className="section">
          <div className="grid gap-6 md:grid-cols-2">
            <article className="not-prose rounded-xl border border-foreground/10 p-5">
              <h2 className="text-xl font-semibold">Company</h2>
              <ul className="mt-3 list-disc pl-5">
                <li><strong>Legal entity:</strong> <em>Prazise LLC </em></li>
                <li><strong>Registered address:</strong> <em>-----</em></li>
                <li><strong>Registration/VAT:</strong> <em>-----</em></li>
              </ul>
            </article>

            <article className="not-prose rounded-xl border border-foreground/10 p-5">
              <h2 className="text-xl font-semibold">Contact</h2>
              <ul className="mt-3 list-disc pl-5">
                <li><strong>Support:</strong> <a href="mailto:hello@prazise.app">hello@prazise.app</a></li>
                <li><strong>Partnerships:</strong> <a href="mailto:partnerships@prazise.app">partnerships@prazise.app</a></li>
                <li><strong>Security:</strong> <a href="mailto:security@prazise.app">security@prazise.app</a></li>
                <li><strong>Data deletion:</strong> <a href="/deletion">How to delete your data</a></li>
              </ul>
            </article>
          </div>
        </section>

        {/* Team */}
        <section className="section">
          <h2>Team</h2>
          <div className="not-prose mt-4 grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
            {/* Duplicate this block for each person */}
            <article className="team rounded-xl border border-foreground/10 p-5">
              <div
                className="avatar mb-4 h-16 w-16 rounded-full bg-foreground/10"
                aria-hidden="true"
              />
              <div className="meta">
                <h3 className="text-lg font-semibold">Jack Slavinskas</h3>
                <p className="role text-sm text-foreground/80">Founder &amp; Head Coach Logic</p>
                <p className="bio micro mt-2 text-foreground/70">
                  Background in coaching science and data systems; passionate about sustainable training.
                </p>
              </div>
            </article>
          </div>
        </section>

        {/* Disclaimer */}
        <section className="section">
          <p className="micro text-center text-foreground/70">
            Not affiliated with any device maker unless explicitly stated. All trademarks belong to their owners.
          </p>
        </section>
      </article>
    </main>
  );
}
