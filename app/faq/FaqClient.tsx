"use client";

import * as React from "react";

export default function FaqClient() {
  return (
    <main id="main">
      {/* HERO */}
      <section className="section">
        <div className="container">
          <h1 className="text-3xl font-bold tracking-tight md:text-4xl">
            Frequently asked questions
          </h1>
          <p className="mt-3 text-lg text-[rgb(var(--muted))]">
            Quick answers. If you don’t see yours,{" "}
            <a className="fancy-underline" href="/contact">contact us</a>.
          </p>
        </div>
      </section>

      {/* LIST */}
      <section className="section">
        <div className="container grid gap-4">
          <article className="card">
            <h3 className="text-lg font-semibold">Do you have live integrations yet?</h3>
            <p className="mt-2">
              We’re building against official, user-consented APIs. Check the status in{" "}
              <a className="fancy-underline" href="/#integrations">Integrations</a>. You can also ask for updates via the Contact page.
            </p>
          </article>

          <article className="card">
            <h3 className="text-lg font-semibold">What data does Prazise access?</h3>
            <p className="mt-2">
              Minimal scopes: heart rate / HRV, sleep summaries, and workout summaries; optional device metadata
              (battery/firmware). We don’t request continuous GPS or raw PII unless strictly necessary. See{" "}
              <a className="fancy-underline" href="/partners">For Partners</a> and{" "}
              <a className="fancy-underline" href="/security">Security</a>.
            </p>
          </article>

          <article className="card">
            <h3 className="text-lg font-semibold">Can I use Prazise without a watch?</h3>
            <p className="mt-2">
              You can start with phone-collected basics and supported health platforms, but the best coaching comes
              from HR/HRV + workout data from a wearable.
            </p>
          </article>

          <article className="card">
            <h3 className="text-lg font-semibold">How do I delete my data?</h3>
            <p className="mt-2">
              Anytime—follow the steps on our{" "}
              <a className="fancy-underline" href="/deletion">Data Deletion</a> page. We honor deletion requests within 30 days.
            </p>
          </article>

          <article className="card">
            <h3 className="text-lg font-semibold">Can I export my data?</h3>
            <p className="mt-2">
              Yes. Request an export via the{" "}
              <a className="fancy-underline" href="/contact?topic=privacy">Contact</a> page and we’ll send you a copy.
            </p>
          </article>

          <article className="card">
            <h3 className="text-lg font-semibold">When is pricing available?</h3>
            <p className="mt-2">
              We’re finalizing plans for early access. Join the{" "}
              <a className="fancy-underline" href="/#waitlist">waitlist</a> and we’ll notify you before anything is paid.
            </p>
          </article>

          <article className="card">
            <h3 className="text-lg font-semibold">I want to beta test. How do I join?</h3>
            <p className="mt-2">
              Join the <a className="fancy-underline" href="/#waitlist">waitlist</a> and mention your device; we’ll prioritize invites based on integration status.
            </p>
          </article>

          <article className="card">
            <h3 className="text-lg font-semibold">How do I report a security issue?</h3>
            <p className="mt-2">
              Please use the{" "}
              <a className="fancy-underline" href="/contact?topic=security">Security contact</a>. We triage within 24 hours. See{" "}
              <a className="fancy-underline" href="/security">Security</a> for our process.
            </p>
          </article>
        </div>
      </section>
    </main>
  );
}
