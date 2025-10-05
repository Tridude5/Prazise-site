"use client";

import * as React from "react";

export default function AccessibilityClient({
  lastUpdatedISO = new Date().toISOString().slice(0, 10),
}: { lastUpdatedISO?: string }) {
  // Local preview toggles (page-only)
  const [highContrast, setHighContrast] = React.useState(false);
  const [reduceMotion, setReduceMotion] = React.useState(false);

  return (
    <main
      id="main"
      // page-local preview effects
      className={[
        "mx-auto max-w-3xl px-4 py-12",
        highContrast ? "contrast-150" : "",
        reduceMotion ? "[animation:none] [transition:none] scroll-auto" : "",
      ].join(" ")}
      data-high-contrast={highContrast ? "true" : "false"}
      data-reduce-motion={reduceMotion ? "true" : "false"}
    >
      <article
        className="
          prose prose-emerald dark:prose-invert
          prose-h1:mb-2 prose-h2:mt-10 prose-h2:mb-3
          prose-p:my-4 prose-a:break-words
        "
      >
        <header className="doc-head">
          <h1>Accessibility at Prazise</h1>
          <p className="muted">
            We’re committed to an accessible experience for everyone. This statement outlines our approach,
            current status, and how to get help.
          </p>
        </header>

        {/* Page-local preview controls (no site-wide change) */}
        <section aria-labelledby="preview-title" className="a11y-preview">
          <h2 id="preview-title">Preview accessibility settings</h2>

          <div
            className="a11y-controls flex gap-3"
            role="group"
            aria-label="Accessibility preview toggles"
          >
            <button
              type="button"
              aria-pressed={highContrast}
              onClick={() => setHighContrast((v) => !v)}
              className={[
                "toggle inline-flex items-center rounded-lg px-3 py-1.5 text-sm font-semibold",
                "ring-1 ring-foreground/20 hover:bg-foreground/5",
                highContrast ? "bg-foreground/10" : ""
              ].join(" ")}
            >
              High contrast
            </button>

            <button
              type="button"
              aria-pressed={reduceMotion}
              onClick={() => setReduceMotion((v) => !v)}
              className={[
                "toggle inline-flex items-center rounded-lg px-3 py-1.5 text-sm font-semibold",
                "ring-1 ring-foreground/20 hover:bg-foreground/5",
                reduceMotion ? "bg-foreground/10" : ""
              ].join(" ")}
            >
              Reduce motion
            </button>
          </div>

          <p className="micro muted">
            These toggles affect <em>this page only</em> and help you see how the UI behaves. We’ll roll out
            site-wide settings later.
          </p>
        </section>

        <section aria-labelledby="conformance-title">
          <h2 id="conformance-title">Conformance</h2>
          <ul>
            <li>Target standard: <strong>WCAG 2.1 Level AA</strong>.</li>
            <li>Method: self-evaluation and manual testing with keyboard, screen readers, and color-contrast tools.</li>
            <li>Status: pre-launch. We actively address any reported issues.</li>
            <li>Last updated: <span>{lastUpdatedISO}</span></li>
          </ul>
        </section>

        <section aria-labelledby="features-title">
          <h2 id="features-title">What we do today</h2>
          <ul>
            <li>
              Semantic HTML with landmarks, headings, and <code>alt</code> text for meaningful images.
            </li>
            <li>
              Keyboard support and visible focus across navigation, forms, and the integrations carousel (use Tab / Shift+Tab
              to reach arrow buttons, Enter/Space to activate).
            </li>
            <li>
              Color contrast that meets or exceeds WCAG AA; link and button states are distinguishable.
            </li>
            <li>Skip-to-content link on every page.</li>
            <li>
              Form labels, error messaging, and polite status regions (ARIA live) where appropriate.
            </li>
          </ul>
        </section>

        <section aria-labelledby="limits-title">
          <h2 id="limits-title">Known limitations &amp; third-party content</h2>
          <ul>
            <li>
              Some third-party services (e.g., email form processing) are outside our control. We provide accessible
              alternatives (direct email links).
            </li>
            <li>
              Brand logos are decorative; if a logo fails to load, the integration name remains visible.
            </li>
          </ul>
        </section>

        <section aria-labelledby="compat-title">
          <h2 id="compat-title">Compatibility &amp; assistive technology</h2>
          <p>
            We aim to support modern browsers on desktop and mobile. Pages are tested with keyboard-only navigation and
            popular screen readers. If you encounter a problem in your setup, please tell us—details below help us fix it
            quickly.
          </p>
        </section>

        <section aria-labelledby="feedback-title">
          <h2 id="feedback-title">Feedback &amp; requests</h2>
          <p>If you need an alternative format, encounter a barrier, or have suggestions:</p>
          <ul>
            <li>
              Email:{" "}
              <a href="mailto:slavinskasjack@gmail.com?subject=Prazise%20Accessibility%20Feedback">
                slavinskasjack@gmail.com
              </a>
            </li>
            <li>
              Form:{" "}
              <a href="/contact?topic=accessibility">Contact us (preselected topic)</a>
            </li>
          </ul>
          <p className="micro muted">
            Please include the page URL, your browser/OS, and any assistive tech used.
          </p>
        </section>

        <section aria-labelledby="roadmap-title">
          <h2 id="roadmap-title">Roadmap</h2>
          <ul>
            <li>Site-wide user preference for reduced motion and high-contrast themes.</li>
            <li>
              Expanded testing matrix and periodic third-party audits as we approach public launch.
            </li>
          </ul>
        </section>
      </article>
    </main>
  );
}
