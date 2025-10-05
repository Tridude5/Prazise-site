"use client";

import * as React from "react";

export default function DeletionClient() {
  const [status, setStatus] = React.useState<null | { ok: boolean; msg: string }>(null);
  const [submitting, setSubmitting] = React.useState(false);

  async function onSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();
    setStatus(null);
    setSubmitting(true);

    const form = e.currentTarget;
    const fd = new FormData(form);

    // If the honeypot has a value, silently ignore
    if ((fd.get("company") as string)?.trim()) {
      setSubmitting(false);
      setStatus({ ok: true, msg: "Thanks! If this was a mistake, please resubmit without filling the hidden field." });
      form.reset();
      return;
    }

    try {
      // Post to FormSubmit AJAX endpoint (same as original)
      const res = await fetch("https://formsubmit.co/ajax/slavinskasjack@gmail.com", {
        method: "POST",
        headers: { Accept: "application/json" },
        body: fd,
      });

      if (!res.ok) throw new Error(`HTTP ${res.status}`);
      const json = await res.json().catch(() => ({}));

      setStatus({
        ok: true,
        msg:
          (json?.message as string) ||
          "Request sent. We’ll confirm deletion—usually faster than 30 days.",
      });
      form.reset();
    } catch (err) {
      setStatus({
        ok: false,
        msg:
          "We couldn’t send the request right now. Please try again in a minute or email slavinskasjack@gmail.com.",
      });
    } finally {
      setSubmitting(false);
    }
  }

  return (
    <main id="main" className="mx-auto max-w-3xl px-4 py-12">
      <article
        className="
          prose prose-emerald dark:prose-invert
          prose-h1:mb-2 prose-h2:mt-10 prose-h2:mb-3
          prose-p:my-4 prose-a:break-words
        "
      >
        <header className="doc-head">
          <h1>Request Data Deletion</h1>
          <p className="muted">
            Tell us what to remove and we’ll confirm deletion. Pre-launch, this is usually your waitlist email and any messages you sent us.
          </p>
        </header>

        <section>
          {/* Matches original form fields/labels and FormSubmit hidden fields */}
          <form id="delete-form" className="not-prose rounded-xl border border-foreground/10 p-5"
                onSubmit={onSubmit} noValidate>
            {/* FormSubmit settings (AJAX only) */}
            <input type="hidden" name="_subject" value="Prazise Data Deletion Request" />
            <input type="hidden" name="_template" value="table" />
            <input type="hidden" name="_captcha" value="false" />
            <input type="hidden" name="request_type" value="Data deletion" />

            <div className="grid gap-4 md:grid-cols-2">
              <label className="block">
                <span className="block text-sm font-medium">Name</span>
                <input className="mt-1 w-full rounded-md border border-foreground/20 bg-background px-3 py-2"
                       type="text" name="name" placeholder="Your name" />
              </label>

              <label className="block">
                <span className="block text-sm font-medium">Email</span>
                <input className="mt-1 w-full rounded-md border border-foreground/20 bg-background px-3 py-2"
                       type="email" name="email" placeholder="you@example.com" required />
              </label>
            </div>

            <fieldset
              className="mt-3 rounded-xl border border-foreground/15 px-3.5 py-3.5"
              style={{ marginTop: ".6rem" }}
            >
              <legend className="micro text-foreground/70">What should we delete?</legend>

              <label className="block my-1">
                <input className="mr-2 align-middle" type="checkbox" name="delete_waitlist" value="yes" />{" "}
                <span>Waitlist email</span>
              </label>

              <label className="block my-1">
                <input className="mr-2 align-middle" type="checkbox" name="delete_messages" value="yes" />{" "}
                <span>Messages/contact emails</span>
              </label>

              <label className="block my-1">
                <input className="mr-2 align-middle" type="checkbox" name="delete_other" value="yes" />{" "}
                <span>Other (describe below)</span>
              </label>
            </fieldset>

            <label className="block mt-3">
              <span className="block text-sm font-medium">Details (optional)</span>
              <textarea
                className="mt-1 w-full rounded-md border border-foreground/20 bg-background px-3 py-2"
                name="details"
                rows={5}
                placeholder="Anything that helps us locate your data (e.g., another email you used, device names)."
              />
            </label>

            <label className="micro mt-3 flex items-start gap-2">
              <input className="mt-1" type="checkbox" name="confirm" value="yes" required />
              <span>I confirm I’m the owner of this email and I want Prazise to delete the data indicated above.</span>
            </label>

            {/* Honeypot (anti-bot) */}
            <input
              type="text"
              name="company"
              tabIndex={-1}
              autoComplete="off"
              className="absolute left-[-10000px] top-auto h-0 w-0 overflow-hidden p-0"
              aria-hidden="true"
            />

            <div className="mt-4 flex items-center gap-3">
              <button
                className="inline-flex items-center rounded-lg px-4 py-2 font-semibold ring-1 ring-foreground/20 hover:bg-foreground/5 disabled:opacity-60"
                type="submit"
                disabled={submitting}
              >
                {submitting ? "Sending..." : "Send request"}
              </button>
              <p className="micro">We aim to confirm within 30 days (usually faster).</p>
            </div>

            <div
              id="delete-result"
              className="mt-3 text-sm"
              role="status"
              aria-live="polite"
            >
              {status && (
                <p className={status.ok ? "text-emerald-600" : "text-red-600"}>
                  {status.msg}
                </p>
              )}
            </div>
          </form>
        </section>

        <footer className="doc-foot micro">
          <p>
            Prefer email? Write to{" "}
            <a href="mailto:slavinskasjack@gmail.com?subject=Prazise%20Data%20Deletion%20Request">
              slavinskasjack@gmail.com
            </a>
            . See our <a href="/legal/privacy">Privacy Policy</a> for more details.
          </p>
        </footer>
      </article>
    </main>
  );
}
