"use client";

import * as React from "react";
import Image from "next/image";

type Integration = { name: string; src: string };

const INTEGRATIONS: Integration[] = [
  { name: "Apple Health", src: "/img/integrations/apple-health.svg" },
  { name: "Google Fit",  src: "/img/integrations/google-fit.svg" },
  { name: "Garmin",      src: "/img/integrations/garmin.svg" },
  { name: "Polar",       src: "/img/integrations/polar.svg" },
  { name: "Suunto",      src: "/img/integrations/suunto.svg" },
  { name: "COROS",       src: "/img/integrations/coros.svg" },
  { name: "Wahoo",       src: "/img/integrations/wahoo.svg" },
  { name: "WHOOP",       src: "/img/integrations/whoop.svg" },
  { name: "Oura",        src: "/img/integrations/oura.svg" },
  { name: "Fitbit",      src: "/img/integrations/fitbit.svg" },
  { name: "Strava",      src: "/img/integrations/strava.svg" },
];

export default function HomeClient() {
  const [email, setEmail] = React.useState("");
  const [deviceInterest, setDeviceInterest] = React.useState<string>("");
  const [resultMsg, setResultMsg] = React.useState<string>("");
  const [sending, setSending] = React.useState(false);

  // Carousel
  const vpRef = React.useRef<HTMLDivElement | null>(null);
  const [canPrev, setCanPrev] = React.useState(false);
  const [canNext, setCanNext] = React.useState(true);

  function updateCarouselButtons() {
    const vp = vpRef.current;
    if (!vp) return;
    const { scrollLeft, scrollWidth, clientWidth } = vp;
    setCanPrev(scrollLeft > 0);
    setCanNext(scrollLeft + clientWidth < scrollWidth - 1);
  }

  React.useEffect(() => {
    const vp = vpRef.current;
    if (!vp) return;
    updateCarouselButtons();
    const handler = () => updateCarouselButtons();
    vp.addEventListener("scroll", handler, { passive: true });
    window.addEventListener("resize", handler);
    return () => {
      vp.removeEventListener("scroll", handler);
      window.removeEventListener("resize", handler);
    };
  }, []);

  function scrollByDir(dir: "prev" | "next") {
    const vp = vpRef.current;
    if (!vp) return;
    const delta = dir === "next" ? vp.clientWidth : -vp.clientWidth;
    vp.scrollBy({ left: delta, behavior: "smooth" });
  }

  async function onSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();
    setResultMsg("");
    setSending(true);

    const form = e.currentTarget;
    const fd = new FormData(form);

    // honeypot
    if ((fd.get("_honey") as string)?.trim()) {
      setSending(false);
      setResultMsg("Thanks!");
      form.reset();
      setEmail("");
      setDeviceInterest("");
      return;
    }

    fd.set("_subject", "Prazise waitlist signup");
    fd.set("_template", "table");
    fd.set("_captcha", "false");
    fd.set("_replyto", email || "");
    if (deviceInterest) fd.set("device_interest", deviceInterest);

    try {
      const res = await fetch("https://formsubmit.co/ajax/slavinskasjack@gmail.com", {
        method: "POST",
        headers: { Accept: "application/json" },
        body: fd,
      });
      if (!res.ok) throw new Error(`HTTP ${res.status}`);
      setResultMsg("Thanks! You’re on the list — we’ll be in touch.");
      form.reset();
      setEmail("");
    } catch {
      setResultMsg("Hmm, couldn’t send right now. Please try again or email us directly.");
    } finally {
      setSending(false);
    }
  }

  return (
    <main id="main">
      {/* HERO */}
      <section className="section">
        <div className="container grid items-start gap-10 md:grid-cols-2">
          <div>
            <h1 className="text-3xl font-bold tracking-tight md:text-5xl">Train with intent.</h1>
            <p className="mt-4 text-lg text-[rgb(var(--muted))]">
              Prazise reads your heart rate, HRV, sleep, and workouts to deliver <strong>precise</strong> training—
              personalized to you, not a template.
            </p>

            <ul className="mt-4 flex flex-wrap gap-2">
              {["From 5k to ultras", "Device-friendly", "Privacy-first", "No gimmicks"].map((p) => (
                <li key={p} className="pill">{p}</li>
              ))}
            </ul>

            <div className="mt-6 flex flex-wrap gap-3">
              <a className="btn" href="#waitlist">Get early access</a>
              <a className="btn-outline" href="#features">Learn more</a>
            </div>
            <p className="micro mt-2">No spam. Opt out anytime.</p>
          </div>

          {/* Sample day card */}
          <div className="section-card">
            <Image
              src="/downloads/PraziseLogo_onlypicture.png"
              alt=""
              width={48}
              height={48}
              className="mb-3 opacity-90"
              priority
            />
            <div className="flex items-start justify-between gap-4">
              <div>
                <p className="micro">Today</p>
                <p className="mt-1 text-lg">
                  Precision session: <strong>8 × 400m</strong> @ 5k pace
                </p>
              </div>
              <span className="badge text-xs">auto-calibrated</span>
            </div>
            <hr />
            <div className="grid grid-cols-3 gap-3 text-sm">
              <div><span className="block micro">HRV</span><strong>74 ms</strong></div>
              <div><span className="block micro">Sleep</span><strong>7h 42m</strong></div>
              <div><span className="block micro">Load</span><strong>+36</strong></div>
            </div>
          </div>
        </div>
      </section>

      {/* WHY PRAZISE */}
      <section id="features" className="section section-tint">
        <div className="container">
          <h2 className="text-2xl font-semibold">Why Prazise</h2>
          <div className="mt-6 grid gap-6 md:grid-cols-3">
            {[
              { t: "Precision fit", p: "Plans adapt to your recovery, not just the calendar. Smarter sessions, fewer junk miles." },
              { t: "Clear guidance", p: "Every workout has targets, cues, and post-run insights. No guesswork." },
              { t: "Private by design", p: "Your data stays yours. Encrypted at rest, deletable on request, never sold." },
            ].map(({ t, p }) => (
              <article key={t} className="card">
                <h3 className="font-semibold">{t}</h3>
                <p className="mt-2">{p}</p>
              </article>
            ))}
          </div>
        </div>
      </section>

      {/* COMPARE */}
      <section id="compare" className="section section-tint">
        <div className="container">
          <h2 className="text-2xl font-semibold">Why precision beats templates</h2>
          <div className="mt-6 grid gap-6 md:grid-cols-2">
            <article className="card">
              <h3 className="text-lg font-semibold">Generic plan</h3>
              <ul className="mt-3 list-disc pl-5">
                <li>Fixed calendar, regardless of how you feel.</li>
                <li>Same workout after a poor night of sleep.</li>
                <li>No context from yesterday’s session.</li>
                <li>Hard to balance volume, intensity, and recovery.</li>
              </ul>
            </article>

            <article className="card">
              <h3 className="text-lg font-semibold">Prazise precision</h3>
              <ul className="mt-3 list-disc pl-5">
                <li>Adapts to <strong>recovery</strong> (HRV, sleep) and <strong>recent load</strong>.</li>
                <li>Adjusts targets and volume after tough or breakthrough days.</li>
                <li>Understands <strong>workout context</strong> (terrain, intent, upcoming races).</li>
                <li>Optimizes stimulus while managing fatigue—fewer junk miles.</li>
              </ul>
              <div className="mt-3 flex flex-wrap gap-2 text-xs" aria-hidden="true">
                {["Recovery-aware", "Load-based", "Context-smart"].map((b) => (
                  <span key={b} className="pill">{b}</span>
                ))}
              </div>
            </article>
          </div>
          <p className="micro mt-3">Uses your existing devices. Your data stays yours.</p>
        </div>
      </section>

      {/* HOW IT WORKS */}
      <section id="how" className="section">
        <div className="container">
          <h2 className="text-2xl font-semibold">How it works</h2>
          <ol className="mt-6 grid gap-4 md:grid-cols-3">
            <li className="section-card">
              <span className="mr-2 inline-flex h-6 w-6 items-center justify-center rounded-full border border-[var(--hairline)]">1</span>
              <strong> Connect your device</strong><br/>Garmin, Polar, Suunto, Fitbit, Apple Health &amp; more.
            </li>
            <li className="section-card">
              <span className="mr-2 inline-flex h-6 w-6 items-center justify-center rounded-full border border-[var(--hairline)]">2</span>
              <strong> We calibrate</strong><br/>We model your load, recovery, and recent sessions.
            </li>
            <li className="section-card">
              <span className="mr-2 inline-flex h-6 w-6 items-center justify-center rounded-full border border-[var(--hairline)]">3</span>
              <strong> Train precisely</strong><br/>Get the right session for today—auto-adjusted as you go.
            </li>
          </ol>
        </div>
      </section>

      {/* ADAPTIVE ENGINE */}
      <section id="adaptive" className="section">
        <div className="container grid gap-6 md:grid-cols-3">
          {[
            { t: "Sleep & HRV", items: ["HRV trend", "Sleep duration", "Sleep quality"], p: "Daily readiness tunes targets and volume—hard when you can absorb, easy when you can’t." },
            { t: "Training load", items: ["Acute load", "Chronic load", "Session context"], p: "Understands recent sessions, terrain, and intent to manage stimulus and reduce junk miles." },
            { t: "Real-life factors", items: ["Life stress", "Schedule", "Travel/illness"], p: "Adjusts around stress, travel, and time constraints—so consistency wins." },
          ].map(({ t, p, items }) => (
            <article key={t} className="card">
              <h3 className="font-semibold">{t}</h3>
              <p className="mt-2">{p}</p>
              <div className="mt-3 flex flex-wrap gap-2 text-sm">
                {items.map((b) => <span key={b} className="pill">{b}</span>)}
              </div>
            </article>
          ))}
        </div>
        <p className="micro mt-2 text-center">
          You’re always in control—auto-adjustments are suggestions you can accept or override.
        </p>
      </section>

      {/* INTEGRATIONS */}
      <section id="integrations" className="section">
        <div className="container">
          <div className="flex items-end justify-between gap-4">
            <h2 className="text-2xl font-semibold">Integrations</h2>
            <p className="micro" role="status" aria-live="polite" aria-atomic="true">
              {deviceInterest ? `We’ll notify you about ${deviceInterest}.` : ""}
            </p>
          </div>

          <div className="mt-4 flex items-center gap-2">
            <button
              className="btn-outline px-3 py-2"
              aria-label="Scroll left"
              onClick={() => scrollByDir("prev")}
              disabled={!canPrev}
            >
              ‹
            </button>

            <div
              ref={vpRef}
              className="flex overflow-x-auto scroll-smooth snap-x snap-mandatory gap-3 px-1 py-2"
              tabIndex={0}
            >
              <ul className="flex gap-3" role="list">
                {INTEGRATIONS.map((it) => (
                  <li
                    key={it.name}
                    className="snap-start card min-w-[180px] flex flex-col items-center"
                  >
                    <Image
                      src={it.src}
                      alt={it.name}
                      width={140}
                      height={28}
                      className="mb-2 h-7 w-auto"
                    />
                    <span className="micro">{it.name}</span>
                    <button
                      type="button"
                      className="btn-outline mt-3 px-3 py-1 text-sm"
                      onClick={() => setDeviceInterest(it.name)}
                      aria-label={`Notify me about ${it.name}`}
                    >
                      Notify me
                    </button>
                  </li>
                ))}
              </ul>
            </div>

            <button
              className="btn-outline px-3 py-2"
              aria-label="Scroll right"
              onClick={() => scrollByDir("next")}
              disabled={!canNext}
            >
              ›
            </button>
          </div>

          <p className="micro mt-3 text-center">
            Logos are placeholders; all trademarks belong to their owners. Not affiliated unless stated.
          </p>
        </div>
      </section>

      {/* WAITLIST */}
      <section id="waitlist" className="section">
        <div className="container section-card">
          <h2 className="text-2xl font-semibold">Get early access</h2>

          <form className="mt-4 flex flex-col gap-3 sm:flex-row" onSubmit={onSubmit}>
            <label className="sr-only" htmlFor="email">Email</label>
            <input
              id="email"
              name="email"
              type="email"
              placeholder="you@email.com"
              required
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              className="w-full rounded-md border border-[var(--hairline-strong)] bg-white/80 dark:bg-gray-900/60 px-3 py-2"
            />

            {/* hidden field captured by "Notify me" buttons */}
            <input type="hidden" name="device_interest" value={deviceInterest} id="device_interest" />

            {/* FormSubmit config (AJAX) */}
            <input type="hidden" name="_subject" value="Prazise waitlist signup" />
            <input type="hidden" name="_template" value="table" />
            <input type="hidden" name="_captcha" value="false" />
            <input type="hidden" name="_replyto" value={email} id="_replyto" />
            <input type="hidden" name="_cc" value="johnslavinskas@my.uopeople.edu" />

            {/* Honeypot */}
            <input type="text" name="_honey" className="hidden" tabIndex={-1} autoComplete="off" />

            <button className="btn disabled:opacity-60" type="submit" disabled={sending}>
              {sending ? "Sending..." : "Request invite"}
            </button>
          </form>

          <p className="micro mt-2">
            By joining, you agree to our <a className="fancy-underline" href="/legal/privacy">Privacy Policy</a>.
          </p>

          <div id="form-result" className="mt-2 text-sm" role="status" aria-live="polite">
            {resultMsg}
          </div>
        </div>
      </section>
    </main>
  );
}
