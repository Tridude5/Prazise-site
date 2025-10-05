"use client";

import * as React from "react";
import { useSearchParams } from "next/navigation";

function normalizeTopic(raw?: string | null) {
  if (!raw) return "General";
  const s = String(raw).toLowerCase();
  if (["general","partnerships","security","privacy","support","accessibility"].includes(s)) {
    return s.charAt(0).toUpperCase() + s.slice(1);
  }
  return "General";
}

export default function ContactClient() {
  const searchParams = useSearchParams();
  const initialTopic = normalizeTopic(searchParams.get("topic"));
  const [email, setEmail] = React.useState("");
  const [topic, setTopic] = React.useState(initialTopic);

  const subject =
    topic && topic !== "General" ? `Prazise contact — ${topic}` : "Prazise contact";

  return (
    <main id="main">
      {/* HERO */}
      <section className="section">
        <div className="container grid items-start gap-8 md:grid-cols-2">
          <div>
            <h1 className="text-3xl font-bold tracking-tight md:text-4xl">Contact us</h1>
            <p className="mt-3 text-lg text-[rgb(var(--muted))]">
              No team inbox yet—this form routes straight to us. Pick a topic so we can triage quickly.
            </p>
          </div>

          <div className="section-card">
            <h3 className="text-lg font-semibold">Topics we handle</h3>
            <ul className="micro mt-3 list-disc pl-5">
              <li>Partnerships &amp; API access</li>
              <li>Security disclosures</li>
              <li>Product questions &amp; support</li>
              <li>Data privacy &amp; deletion</li>
            </ul>
          </div>
        </div>
      </section>

      {/* FORM */}
      <section className="section">
        <div className="container section-card">
          {/* Posts to FormSubmit (server-side redirect/thank-you optional via _next) */}
          <form
            id="contact-form"
            action="https://formsubmit.co/slavinskasjack@gmail.com"
            method="POST"
            className="grid gap-4"
          >
            <div className="grid gap-4 md:grid-cols-2">
              <label className="block">
                <span className="block text-sm font-medium">Name</span>
                <input
                  type="text"
                  name="name"
                  placeholder="Your name"
                  required
                  className="mt-1 w-full rounded-md border border-[var(--hairline-strong)] bg-white/80 dark:bg-gray-900/60 px-3 py-2"
                />
              </label>

              <label className="block">
                <span className="block text-sm font-medium">Email</span>
                <input
                  type="email"
                  name="email"
                  id="contact_email"
                  placeholder="you@email.com"
                  required
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  className="mt-1 w-full rounded-md border border-[var(--hairline-strong)] bg-white/80 dark:bg-gray-900/60 px-3 py-2"
                />
              </label>
            </div>

            <label className="block">
              <span className="block text-sm font-medium">Topic</span>
              <select
                name="topic"
                id="topic"
                required
                value={topic}
                onChange={(e) => setTopic(e.target.value)}
                className="mt-1 w-full rounded-md border border-[var(--hairline-strong)] bg-white/80 dark:bg-gray-900/60 px-3 py-2"
              >
                <option value="General">General</option>
                <option value="Partnerships">Partnerships</option>
                <option value="Security">Security</option>
                <option value="Privacy">Privacy</option>
                <option value="Support">Support</option>
                <option value="Accessibility">Accessibility</option>
              </select>
            </label>

            <label className="block">
              <span className="block text-sm font-medium">Message</span>
              <textarea
                name="message"
                rows={6}
                placeholder="How can we help?"
                required
                className="mt-1 w-full rounded-md border border-[var(--hairline-strong)] bg-white/80 dark:bg-gray-900/60 px-3 py-2"
              />
            </label>

            {/* FormSubmit config */}
            <input type="hidden" name="_subject" id="contact_subject" value={subject} />
            <input type="hidden" name="_template" value="table" />
            <input type="hidden" name="_captcha" value="false" />
            <input type="hidden" name="_replyto" id="contact_replyto" value={email} />
            <input type="hidden" name="_cc" value="johnslavinskas@my.uopeople.edu" />
            {/* Optional redirect after submit:
            <input type="hidden" name="_next" value="https://yourdomain.com/thanks" /> */}

            {/* Honeypot (spam trap) */}
            <input
              type="text"
              name="_honey"
              tabIndex={-1}
              autoComplete="off"
              className="hidden"
              aria-hidden="true"
            />

            <div className="mt-2 flex items-center gap-3">
              <button className="btn" type="submit">Send</button>
              <p className="micro">We’ll reply from a personal address until team inboxes are live.</p>
            </div>
          </form>
        </div>
      </section>

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
