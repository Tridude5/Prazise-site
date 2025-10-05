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
  // Waitlist form state
  const [email, setEmail] = React.useState("");
  const [deviceInterest, setDeviceInterest] = React.useState<string>("");
  const [resultMsg, setResultMsg] = React.useState<string>("");
  const [sending, setSending] = React.useState(false);

  // Carousel refs/state
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

    // honeypot (FormSubmit-style)
    if ((fd.get("_honey") as string)?.trim()) {
      setSending(false);
      setResultMsg("Thanks!");
      form.reset();
      setEmail("");
      setDeviceInterest("");
      return;
    }

    // mirror original hidden fields + reply-to + device interest
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
      // keep deviceInterest visible in the live region but clear hidden field
    } catch {
      setResultMsg("Hmm, couldn’t send right now. Please try again or email us directly.");
    } finally {
      setSending(false);
    }
  }

  return (
    <main id="main" className="mx-auto max-w-6xl px-4 py-12">
      {/* HERO */}
      <section className="mb-16">
        <div className="grid items-start gap-10 md:grid-cols-2">
          <div className="hero-copy">
            <h1 className="text-3xl font-bold tracking-tight md:text-5xl">Train with intent.</h1>
            <p className="mt-4 text-lg text-foreground/80">
              Prazise reads your heart rate, HRV, sleep, and workouts to deliver <strong>precise</strong> training—
              personalized to you, not a template.
            </p>

            <ul className="mt-4 flex flex-wrap gap-2 text-sm">
              {["From 5k to ultras", "Device-friendly", "Privacy-first", "No gimmicks"].map((p) => (
                <li key={p} className="rounded-full border border-foreground/20 px-3 py-1 text-foreground/80">
                  {p}
                </li>
              ))}
            </ul>

            <div className="mt-6 flex flex-wrap gap-3">
              <a
                className="inline-flex items-center rounded-lg px-4 py-2 font-semibold ring-1 ring-foreground/20 hover:bg-foreground/5"
                href="#waitlist"
              >
                Get early access
              </a>
              <a
                className="inline-flex items-center rounded-lg px-4 py-2 font-semibold ring-1 ring-foreground/20 hover:bg-foreground/5"
                href="#features"
              >
                Learn more
              </a>
            </div>
            <p className="micro mt-2 text-foreground/70">No spam. Opt out anytime.</p>
          </div>

          {/* Sample day card */}
          <div className="hero-art">
            <div className="rounded-2xl border border-foreground/10 p-5 shadow-sm" aria-describedby="sample">
              <img src="/logo.svg" alt="" className="mb-3 h-6 w-6 opacity-70" aria-hidden="true" />
              <div className="flex items-start justify-between gap-4">
                <div>
                  <p id="sample" className="text-sm text-foreground/70">Today</p>
                  <p className="mt-1 text-lg">
                    Precision session: <strong>8 × 400m</strong> @ 5k pace
                  </p>
                </div>
                <div className="rounded-full border border-foreground/20 px-3 py-1 text-xs">auto-calibrated</div>
              </div>
              <hr className="my-4 border-foreground/10" />
              <div className="grid grid-cols-3 gap-3 text-sm">
                <div><span className="block text-foreground/70">HRV</span><strong>74 ms</strong></div>
                <div><span className="block text-foreground/70">Sleep</span><strong>7h 42m</strong></div>
                <div><span className="block text-foreground/70">Load</span><strong>+36</strong></div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* WHY PRAZISE */}
      <section id="features" className="mb-16">
        <h2 className="text-2xl font-semibold">Why Prazise</h2>
        <div className="mt-6 grid gap-6 md:gr
