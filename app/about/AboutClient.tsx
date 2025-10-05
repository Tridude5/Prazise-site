"use client";

import * as React from "react";

export default function AboutClient() {
  return (
    <main id="main">
      {/* HERO */}
      <section className="section">
        <div className="container grid items-start gap-8 md:grid-cols-2">
          <div>
            <h1 className="text-3xl font-bold tracking-tight md:text-4xl">
              About Prazise
            </h1>
            <p className="mt-3 text-lg text-[rgb(var(--muted))]">
              We turn heart rate, HRV, sleep, and workouts into precise, privacy-first
              training for runners and triathletes.
            </p>

            {/* same orange as homepage via .btn (uses --accent) */}
            <div className="mt-6 flex flex-wrap gap-3">
              <a className="btn btn--sm" href="mailto:hello@prazise.app">
                Contact us
              </a>
              <a className="btn-outline btn--sm" href="/partners">
                For Partners
              </a>
            </div>
            <p className="micro mt-2">No spam. Opt out anytime.</p>
          </div>

          {/* At a glance */}
          <div className="card">
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

      {/* MISSION & APPROACH */}
      <section className="section">
        <div className="container grid gap-6 md:grid-cols-2">
          <article className="card">
            <h2 className="text-xl font-semibold">Our mission</h2>
            <p className="mt-3">
              Help everyday athletes train with intent—clear sessions, safe load
              progressions, and fewer junk miles.
            </p>
            <p>
              We’re building tools that act like a coach who actually knows you,
              not a one-size-fits-all plan.
            </p>
          </article>

          <article className="card">
            <h2 className="text-xl font-semibold">How we work</h2>
            <ul className="mt-3 list-disc pl-5">
              <li><strong>Consent first:</strong> You connect your own data sources and can disconnect anytime.</li>
              <li><strong>Minimal scopes:</strong> HR/HRV, sleep summaries, workout summaries; optional device metadata.</li>
              <li><strong>Security:</strong> Encryption in transit and at rest; RBAC; audit logging.</li>
            </ul>
            <p className="micro mt-3">
              Details:{" "}
              <a className="fancy-underline" href="/security">Security</a>{" "}
              ·{" "}
              <a className="fancy-underline" href="/legal/privacy">Privacy</a>
            </p>
          </article>
        </div>
      </section>

      {/* COMPANY & LEGAL */}
      <section className="section">
        <div className="container grid gap-6 md:grid-cols-2">
          <article className="card">
            <h2 className="text-xl font-semibold">Company</h2>
            <ul className="mt-3 list-disc pl-5">
              <li><strong>Legal entity:</strong> <em>Prazise LLC</em></li>
              <li><strong>Registered address:</strong> <em>-----</em></li>
              <li><strong>Registration/VAT:</strong> <em>-----</em></li>
            </ul>
          </article>

          <article className="card">
            <h2 className="text-xl font-semibold">Contact</h2>
            <ul className="mt-3 list-disc pl-5">
              <li><strong>Support:</strong> <a className="fancy-underline" href="mailto:hello@prazise.app">hello@prazise.app</a></li>
              <li><strong>Partnerships:</strong> <a className="fancy-underline" href="mailto:partnerships@prazise.app">partnerships@prazise.app</a></li>
              <li><strong>Security:</strong> <a className="fancy-underline" href="mailto:security@prazise.app">security@prazise.app</a></li>
              <li><strong>Data deletion:</strong> <a className="fancy-underline" href="/deletion">How to delete your data</a></li>
            </ul>
          </article>
        </div>
      </section>

      {/* TEAM */}
      <section className="section">
        <div className="container">
          <h2 className="text-2xl font-semibold">Team</h2>
          <div className="mt-4 grid gap-4 not-prose sm:grid-cols-2 lg:grid-cols-3">
            <article className="card">
              <div
                className="mb-4 h-16 w-16 rounded-full"
                aria-hidden="true"
                style={{ background: "color-mix(in srgb, rgb(var(--fg)) 12%, transparent)" }}
              />
              <div>
                <h3 className="text-lg font-semibold">Jack Slavinskas</h3>
                <p className="text-sm text-[rgb(var(--muted))]">Founder &amp; Head Coach Logic</p>
                <p className="micro mt-2">
                  Background in coaching science and data systems; passionate about sustainable training.
                </p>
              </div>
            </article>
          </div>
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
