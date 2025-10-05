"use client";

import * as React from "react";

/**
 * Prazise Terms of Use — content preserved verbatim.
 * - Safe "Last updated" date formatting from ISO (defaults to today)
 * - Tailwind prose for clean typography
 * - Internal links point to Next.js routes
 */
export default function TermsClient({
  lastUpdatedISO = new Date().toISOString().slice(0, 10),
}: { lastUpdatedISO?: string }) {
  // UTC parse to avoid timezone off-by-one
  const [y, m, d] = lastUpdatedISO.split("-").map(Number);
  const formattedDate = new Intl.DateTimeFormat(undefined, { dateStyle: "long" })
    .format(new Date(Date.UTC(y, (m || 1) - 1, d || 1)));

  return (
    <main id="main" className="mx-auto max-w-3xl px-4 py-12">
      <article
        className="
          prose prose-emerald dark:prose-invert
          prose-h1:mb-2 prose-h2:mt-10 prose-h2:mb-3
          prose-p:my-4 prose-a:break-words
        "
      >
        <header>
          <h1>Terms of Use</h1>
          <p className="text-sm">
            <em>Last updated: <span>{formattedDate}</span></em>
          </p>
          <p>
            <strong>Quick summary:</strong> Use Prazise responsibly. We provide training guidance, not medical advice. Talk to a healthcare professional before starting or changing any exercise program.
          </p>
        </header>

        <section>
          <h2>1) Acceptance of these Terms</h2>
          <p>
            These Terms of Use (“<strong>Terms</strong>”) govern your access to and use of Prazise websites, forms, and any
            pre-release features (collectively, the “<strong>Service</strong>”). By accessing or using the Service, you agree
            to these Terms and to our <a href="/legal/privacy">Privacy Policy</a>. If you don’t agree, don’t use the Service.
          </p>
        </section>

        <section>
          <h2>2) Who we are &amp; contacting us</h2>
          <p>
            Prazise is currently operated by a small team. For any questions about these Terms, contact{" "}
            <a href="mailto:slavinskasjack@gmail.com">slavinskasjack@gmail.com</a> (optional cc:{" "}
            <a href="mailto:johnslavinskas@my.uopeople.edu">johnslavinskas@my.uopeople.edu</a>).
          </p>
        </section>

        <section>
          <h2>3) Eligibility &amp; accounts</h2>
          <ul>
            <li>You must be at least 13 years old (or the minimum age in your jurisdiction) to use the Service.</li>
            <li>Pre-launch, we operate a waitlist. If you join, keep your email accurate so we can reach you.</li>
            <li>When the app launches, additional terms may apply to account registration and paid features.</li>
          </ul>
        </section>

        <section>
          <h2>4) Acceptable use</h2>
          <p>
            You agree not to misuse the Service, including (without limitation): scraping, spam, reverse engineering, probing
            or breaching security, interfering with others’ use, infringing intellectual property or privacy rights, or using
            the Service for unlawful activity.
          </p>
        </section>

        <section>
          <h2>5) Health &amp; safety disclaimer (no medical advice)</h2>
          <p>
            Prazise provides training guidance and analytics for fitness and performance. It is <strong>not a medical device</strong> and does <strong>not</strong> provide medical advice or diagnosis. Consult a qualified healthcare professional before beginning any new exercise or wellness program, especially if you have a medical condition, are pregnant, or have concerns about your health. If you experience pain, dizziness, or shortness of breath, stop and seek medical advice.
          </p>
          <p><strong>No emergency use:</strong> Prazise is not designed for emergency monitoring or urgent communications.</p>
        </section>

        <section>
          <h2>6) Third-party services &amp; integrations</h2>
          <p>
            The Service may enable you to connect or upload data from third-party providers (e.g., Apple Health, Google Fit,
            Garmin, Polar, Suunto, COROS, WHOOP, Oura, Wahoo, Fitbit, Strava). Your use of those services is governed by their
            terms and privacy policies. We don’t control and aren’t responsible for third-party services. Display of any brand
            name, logo, or badge does not imply endorsement or partnership unless explicitly stated.
          </p>
        </section>

        <section>
          <h2>7) Intellectual property</h2>
          <ul>
            <li>
              The Service (including our content, logos, and code) is protected by intellectual-property laws. We grant you a
              limited, non-exclusive, non-transferable license to access and use the Service for its intended purpose.
            </li>
            <li>All third-party trademarks are the property of their respective owners and used in accordance with their brand guidelines.</li>
            <li><strong>Feedback:</strong> If you provide ideas or suggestions, you grant us a non-exclusive, worldwide, royalty-free license to use them without obligation.</li>
          </ul>
        </section>

        <section>
          <h2>8) Privacy</h2>
          <p>
            Your use of the Service is subject to our <a href="/legal/privacy">Privacy Policy</a>, which explains what we collect
            today (primarily waitlist/contact info) and what will change at app launch.
          </p>
        </section>

        <section>
          <h2>9) Changes, availability &amp; pre-release notice</h2>
          <p>
            We may change or discontinue the Service (or any part of it) at any time without notice. Pre-launch features are
            provided for evaluation and may change before general availability. We’ll update the “Last updated” date when we
            change these Terms; continued use means you accept the revised Terms.
          </p>
        </section>

        <section>
          <h2>10) Disclaimers</h2>
          <p>
            To the fullest extent permitted by law, the Service is provided “as is” and “as available,” without warranties of
            any kind, whether express, implied, or statutory, including fitness for a particular purpose, merchantability, and
            non-infringement. We don’t warrant that the Service will be uninterrupted, secure, or error-free.
          </p>
        </section>

        <section>
          <h2>11) Limitation of liability</h2>
          <p>
            To the fullest extent permitted by law, Prazise and its operators will not be liable for any indirect, incidental,
            special, consequential, exemplary, or punitive damages, or for loss of profits, data, goodwill, or other intangible
            losses, arising out of or relating to your use of (or inability to use) the Service. Our total liability for any
            claim is limited to the greater of (a) amounts you paid us in the 12 months before the claim or (b) USD $50.
          </p>
        </section>

        <section>
          <h2>12) Indemnification</h2>
          <p>
            You agree to indemnify and hold Prazise harmless from claims, liabilities, damages, losses, and expenses (including
            reasonable attorneys’ fees) arising from your misuse of the Service or violation of these Terms or applicable law.
          </p>
        </section>

        <section>
          <h2>13) Governing law &amp; disputes</h2>
          <p>
            These Terms apply to the extent permitted by the laws of your jurisdiction and do not limit any non-waivable consumer
            rights. If a dispute arises, the parties will first attempt to resolve it informally. <em><!-- Optional: specify governing law/venue here. --></em>
          </p>
        </section>

        <section>
          <h2>14) Termination</h2>
          <p>
            You may stop using the Service at any time. We may suspend or end access if you violate these Terms or if we
            discontinue the Service. Sections that by their nature should survive termination will survive (e.g., intellectual
            property, disclaimers, limitations of liability).
          </p>
        </section>

        <section id="contact">
          <h2>15) Contact</h2>
          <p>
            Questions about these Terms: <a href="mailto:slavinskasjack@gmail.com">slavinskasjack@gmail.com</a> (optional cc:{" "}
            <a href="mailto:johnslavinskas@my.uopeople.edu">johnslavinskas@my.uopeople.edu</a>).
          </p>
        </section>

        <footer className="text-sm opacity-80">
          <p>
            <strong>Not legal advice.</strong> These Terms are provided as a practical starting point for a pre-launch product.
            Consider consulting a lawyer for your specific situation.
          </p>
        </footer>
      </article>
    </main>
  );
}
