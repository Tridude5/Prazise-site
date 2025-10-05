"use client";

import * as React from "react";
import { useSearchParams } from "next/navigation";

function normalizeTopic(raw?: string | null) {
  if (!raw) return "General";
  const s = String(raw).toLowerCase();
  if (["general","partnerships","security","privacy","support","accessibility"].includes(s)) {
    // Title case for display/options
    return s.charAt(0).toUpperCase() + s.slice(1);
  }
  return "General";
}

export default function ContactClient() {
  const searchParams = useSearchParams();
  const initialTopic = normalizeTopic(searchParams.get("topic"));
  const [email, setEmail] = React.useState("");
  const [topic, setTopic] = React.useState(initialTopic);

  // Build subject like the static script did (keeps your wording)
  const subject = topic && topic !== "General" ? `Prazise contact — ${topic}` : "Prazise contact";

  return (
    <main id="main" className="mx-auto max-w-6xl px-4 py-12">
      {/* Hero */}
      <section className="mb-12">
        <div className="grid items-start gap-8 md:grid-cols-2">
          <div className="hero-copy">
            <h1 className="text-3xl font-bold tracking-tight md:text-4xl">Contact us</h1>
            <p className="mt-3 text-lg text-foreground/80">
              No team inbox yet—this form routes straight to us. Pick a topic so we can triage quickly.
            </p>
          </div>
          <div className="rounded-2xl border border-foreground/10 p-5">
            <h3 className="text-lg font-semibold">Topics we handle</h3>
            <ul className="micro mt-3 list-disc pl-5 text-foreground/80">
              <li>Partnerships &amp; API access</li>
              <li>Security disclosures</li>
              <li>Product questions &amp; support</li>
              <li>Data privacy &amp; deletion</li>
            </ul>
          </div>
        </div>
      </section>

      {/* Form */}
      <section className="mb-12">
        <div className="container mx-auto">
          {/* Posts to FormSubmit just like your static page */}
          <form
            id="contact-form"
            className="rounded-2xl border border-foreground/10 p-5"
            action="https://formsubmit.co/slavinskasjack@gmail.com"
            method="POST"
          >
            <div className="grid gap-4 md:grid-cols-2">
              <label className="block">
                <span className="block text-sm font-medium">Name</span>
                <input
                  type="text"
                  name="name"
                  placeholder="Your name"
                  required
                  className="mt-1 w-full rounded-md border border-foreground/20 bg-background px-3 py-2"
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
                  className="mt-1 w-full rounded-md border border-foreground/20 bg-background px-3 py-2"
                />
              </label>
            </div>

            <label className="mt-4 block">
              <span className="block text-sm font-medium">Topic</span>
              <select
                name="topic"
                id="topic"
                required
                value={topic}
                onChange={(e) => setTopic(e.target.value)}
                className="mt-1 w-full rounded-md border border-foreground/20 bg-background px-3 py-2"
              >
                <option value="General">General</option>
                <option value="Partnerships">Partnerships</option>
                <option value="Security">Security</option>
                <option value="Privacy">Privacy</option>
                <option value="Support">Support</option>
                {/* Allow deep link from /contact?topic=accessibility */}
                <option value="Accessibility">Accessibility</option>
              </select>
            </label>

            <label className="mt-4 block">
              <span className="block text-sm font-medium">Message</span>
              <textarea
                name="message"
                rows={6}
                placeholder="How can we help?"
                required
                className="mt-1 w-full rounded-md border border-foreground/20 bg-background px-3 py-2"
              />
            </label>

            {/* FormSubmit config (kept the same semantics) */}
            <input type="hidden" name="_subject" id="contact_subject" value={subject} />
            <input type="hidden" name="_template" value="table" />
            <input type="hidden" name="_captcha" value="false" />
            <input type="hidden" name="_replyto" id="contact_replyto" value={email} />
            {/* CC your EDU inbox as backup */}
            <input type="hidden" name="_cc" value="johnslavinskas@my.uopeople.edu" />
            {/* Optional redirect when deployed:
            <input type="hidden" name="_next" value="https://yourdomain.com/thanks" /> */}

            {/* Honeypot (spam trap) — must be named _honey for FormSubmit */}
            <input
              type="text"
              name="_honey"
              tabIndex={-1}
              autoComplete="off"
              className="absolute left-[-10000px] top-auto h-0 w-0 overflow-hidden p-0"
              aria-hidden="true"
            />

            <div className="mt-4 flex items-center gap-3">
              <button
                className="inline-flex items-center rounded-lg px-4 py-2 font-semibold ring-1 ring-foreground/20 hover:bg-foreground/5"
                type="submit"
              >
                Send
              </button>
              <p className="micro text-foreground/70">
                We’ll reply from a personal address until team inboxes are live.
              </p>
            </div>

            <div id="contact-result" className="sr-only" role="status" aria-live="polite" />
          </form>
        </div>
      </section>

      <section>
        <p className="micro text-center text-foreground/70">
          Not affiliated with any device maker unless explicitly stated. All trademarks belong to their owners.
        </p>
      </section>
    </main>
  );
}
