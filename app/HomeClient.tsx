"use client";

import * as React from "react";

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
      <section className="hero">
        <div className="container grid hero-grid">
          <div className="hero-copy">
            <h1>Train with intent.</h1>
            <p className="lead">
              Prazise reads your heart rate, HRV, sleep, and workouts to deliver <strong>precise</strong> training—
              personalized to you, not a template.
            </p>

            <ul className="pills">
              {["From 5k to ultras", "Device-friendly", "Privacy-first", "No gimmicks"].map((p) => (
                <li key={p}>{p}</li>
              ))}
            </ul>

            <div style={{ display: "flex", gap: 12, flexWrap: "wrap" }}>
              <a className="cta" href="#waitlist">Get early access</a>
              <a className="cta ghost" href="#features">Learn more</a>
            </div>
            <p className="micro" style={{ marginTop: 8 }}>No spam. Opt out anytime.</p>
          </div>

          {/* Sample day card */}
          <div className="hero-art">
            <div className="hero-card" aria-describedby="sample">
              {/* eslint-disable-next-line @next/next/no-img-element */}
              <img src="/downloads/PraziseLogo_onlypicture.png" alt="" className="hero-logo" aria-hidden="true" />
              <div className="split">
                <div>
                  <p id="sample" className="metric">Today</p>
                  <p className="big">
                    Precision session: <strong>8 × 400m</strong> @ 5k pace
                  </p>
                </div>
                <span className="chip">auto-calibrated</span>
              </div>
              <hr />
              <div className="row kpi">
                <div><span>HRV</span><strong>74 ms</strong></div>
                <div><span>Sleep</span><strong>7h 42m</strong></div>
                <div><span>Load</span><strong>+36</strong></div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* WHY PRAZISE */}
      <section id="features" className="features">
        <div className="container">
          <h2>Why Prazise</h2>
          <div className="grid3">
            {[
              { t: "Precision fit", p: "Plans adapt to your recovery, not just the calendar. Smarter sessions, fewer junk miles." },
              { t: "Clear guidance", p: "Every workout has targets, cues, and post-run insights. No guesswork." },
              { t: "Private by design", p: "Your data stays yours. Encrypted at rest, deletable on request, never sold." },
            ].map(({ t, p }) => (
              <article key={t} className="card">
                <h3>{t}</h3>
                <p>{p}</p>
              </article>
            ))}
          </div>
        </div>
      </section>

      {/* COMPARE */}
      <section id="compare" className="compare">
        <div className="container">
          <h2>Why precision beats templates</h2>
          <div className="compare-grid">
            <article className="side card">
              <h3 className="side-title">Generic plan</h3>
              <ul className="list">
                <li>Fixed calendar, regardless of how you feel.</li>
                <li>Same workout after a poor night of sleep.</li>
                <li>No context from yesterday’s session.</li>
                <li>Hard to balance volume, intensity, and recovery.</li>
              </ul>
            </article>

            <article className="side card prazise">
              <h3 className="side-title">Prazise precision</h3>
              <ul className="list">
                <li>Adapts to <strong>recovery</strong> (HRV, sleep) and <strong>recent load</strong>.</li>
                <li>Adjusts targets and volume after tough or breakthrough days.</li>
                <li>Understands <strong>workout context</strong> (terrain, intent, upcoming races).</li>
                <li>Optimizes stimulus while managing fatigue—fewer junk miles.</li>
              </ul>
              <div className="badge-row" aria-hidden="true">
                {["Recovery-aware", "Load-based", "Context-smart"].map((b) => (
                  <span key={b} className="badge">{b}</span>
                ))}
              </div>
            </article>
          </div>
          <p className="compare-note">Uses your existing devices. Your data stays yours.</p>
        </div>
      </section>

      {/* HOW IT WORKS */}
      <section id="how" className="how">
        <div className="container">
          <h2>How it works</h2>
        </div>
        <div className="container">
          <ul className="steps">
            <li><span className="num">1</span><strong>Connect your device</strong> — Garmin, Polar, Suunto, Fitbit, Apple Health &amp; more.</li>
            <li><span className="num">2</span><strong>We calibrate</strong> — We model your load, recovery, and recent sessions.</li>
            <li><span className="num">3</span><strong>Train precisely</strong> — Get the right session for today—auto-adjusted as you go.</li>
          </ul>
        </div>
      </section>

      {/* ADAPTIVE ENGINE */}
      <section id="adaptive" className="adaptive">
        <div className="container grid3">
          {[
            { t: "Sleep & HRV", items: ["HRV trend", "Sleep duration", "Sleep quality"], p: "Daily readiness tunes targets and volume—hard when you can absorb, easy when you can’t." },
            { t: "Training load", items: ["Acute load", "Chronic load", "Session context"], p: "Understands recent sessions, terrain, and intent to manage stimulus and reduce junk miles." },
            { t: "Real-life factors", items: ["Life stress", "Schedule", "Travel/illness"], p: "Adjusts around stress, travel, and time constraints—so consistency wins." },
          ].map(({ t, p, items }) => (
            <article key={t} className="card adapt-card">
              <h3>{t}</h3>
              <p>{p}</p>
              <div className="badge-row">
                {items.map((b) => <span key={b} className="badge">{b}</span>)}
              </div>
            </article>
          ))}
        </div>
        <p className="micro" style={{ textAlign: "center", marginTop: 8 }}>
          You’re always in control—auto-adjustments are suggestions you can accept or override.
        </p>
      </section>

      {/* INTEGRATIONS */}
      <section id="integrations" className="integrations">
        <div className="container">
          <div className="integrations-carousel">
            <div className="carousel-head">
              <h2>Integrations</h2>
              <p className="micro pick-hint" role="status" aria-live="polite" aria-atomic="true">
                {deviceInterest ? `We’ll notify you about ${deviceInterest}.` : ""}
              </p>
            </div>

            <div className="carousel-shell">
              <button
                className="carousel-btn"
                aria-label="Scroll left"
                onClick={() => scrollByDir("prev")}
                disabled={!canPrev}
              >
                ‹
              </button>

              <div ref={vpRef} className="carousel-viewport" tabIndex={0}>
                <ul className="carousel-track" role="list">
                  {INTEGRATIONS.map((it) => (
                    <li key={it.name} className="slide">
                      {/* eslint-disable-next-line @next/next/no-img-element */}
                      <img
                        src={it.src}
                        alt={it.name}
                        onError={(e) => ((e.target as HTMLImageElement).style.display = "none")}
                      />
                      <span className="name">{it.name}</span>
                      <button
                        type="button"
                        className="pill"
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
                className="carousel-btn"
                aria-label="Scroll right"
                onClick={() => scrollByDir("next")}
                disabled={!canNext}
              >
                ›
              </button>
            </div>
          </div>

          <p className="micro" style={{ textAlign: "center", marginTop: 10 }}>
            Logos are placeholders; all trademarks belong to their owners. Not affiliated unless stated.
          </p>
        </div>
      </section>

      {/* WAITLIST */}
      <section id="waitlist" className="waitlist">
        <div className="container">
          <h2>Get early access</h2>

          <form className="waitlist-form" onSubmit={onSubmit}>
            <label htmlFor="email">
              <span>Email</span>
              <input
                id="email"
                name="email"
                type="email"
                placeholder="you@email.com"
                required
                value={email}
                onChange={(e) => setEmail(e.target.value)}
              />
            </label>

            <input type="hidden" name="device_interest" value={deviceInterest} id="device_interest" />
            <input type="hidden" name="_subject"  value="Prazise waitlist signup" />
            <input type="hidden" name="_template" value="table" />
            <input type="hidden" name="_captcha"  value="false" />
            <input type="hidden" name="_replyto"  value={email} id="_replyto" />
            <input type="hidden" name="_cc"       value="johnslavinskas@my.uopeople.edu" />

            <input type="text" name="_honey" className="hidden" tabIndex={-1} autoComplete="off" />

            <button className="cta" type="submit" disabled={sending}>
              {sending ? "Sending..." : "Request invite"}
            </button>
          </form>

          <p className="micro">
            By joining, you agree to our <a href="/legal/privacy">Privacy Policy</a>.
          </p>

          <div id="form-result" className="form-result" role="status" aria-live="polite">
            {resultMsg}
          </div>
        </div>
      </section>
    </main>
  );
}
