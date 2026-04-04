"use client";

import { useState } from "react";

const FORMSPREE_ENDPOINT = "https://formspree.io/f/xzdkjwvr"; // placeholder — swap for real endpoint

export default function Home() {
  const [email, setEmail] = useState("");
  const [submitted, setSubmitted] = useState(false);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");

  async function handleSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();
    if (!email) return;
    setLoading(true);
    setError("");
    try {
      const res = await fetch(FORMSPREE_ENDPOINT, {
        method: "POST",
        headers: { "Content-Type": "application/json", Accept: "application/json" },
        body: JSON.stringify({ email }),
      });
      if (res.ok) {
        setSubmitted(true);
        setEmail("");
      } else {
        setError("Something went wrong. Please try again.");
      }
    } catch {
      setError("Something went wrong. Please try again.");
    } finally {
      setLoading(false);
    }
  }

  return (
    <main className="min-h-screen" style={{ backgroundColor: "#0a0f1e", color: "#f1f5f9" }}>
      {/* Nav */}
      <nav className="fixed top-0 left-0 right-0 z-50 px-6 py-4" style={{ backgroundColor: "rgba(10,15,30,0.85)", backdropFilter: "blur(12px)", borderBottom: "1px solid rgba(212,168,67,0.1)" }}>
        <div className="max-w-6xl mx-auto flex items-center justify-between">
          <div className="flex items-center gap-2">
            <span className="text-xl font-bold tracking-tight" style={{ color: "#d4a843" }}>Verti</span>
            <span className="text-xl font-bold tracking-tight text-white">Car</span>
          </div>
          <a
            href="#waitlist"
            className="hidden sm:inline-flex items-center gap-2 px-4 py-2 rounded-full text-sm font-semibold transition-all duration-200"
            style={{ backgroundColor: "#d4a843", color: "#0a0f1e" }}
          >
            Join Waitlist
          </a>
        </div>
      </nav>

      {/* ─── HERO ─── */}
      <section className="relative pt-32 pb-24 px-6 overflow-hidden">
        {/* Background glow */}
        <div
          className="absolute top-0 left-1/2 -translate-x-1/2 w-[800px] h-[500px] opacity-20 pointer-events-none"
          style={{ background: "radial-gradient(ellipse at center, #d4a843 0%, transparent 70%)" }}
        />

        <div className="max-w-4xl mx-auto relative text-center">
          <div
            className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full text-xs font-medium mb-6 tracking-wide uppercase"
            style={{ backgroundColor: "rgba(212,168,67,0.12)", border: "1px solid rgba(212,168,67,0.25)", color: "#d4a843" }}
          >
            🏙️ Launching in DLF Phase 5, Gurgaon
          </div>

          <h1 className="text-4xl sm:text-5xl md:text-6xl font-bold leading-tight mb-6">
            Your community&apos;s car.
            <br />
            <span style={{ color: "#d4a843" }}>Your trusted driver.</span>
          </h1>

          <p className="text-lg sm:text-xl max-w-2xl mx-auto mb-10 leading-relaxed" style={{ color: "#94a3b8" }}>
            A shared car + dedicated driver, curated for families in your society.
            Office commutes, school runs, grandparent errands — handled together.
            This isn&apos;t a cab. It&apos;s your community&apos;s asset.
          </p>

          {/* Hero CTA */}
          <WaitlistForm
            email={email}
            setEmail={setEmail}
            submitted={submitted}
            loading={loading}
            error={error}
            handleSubmit={handleSubmit}
            large
          />

          <p className="mt-4 text-xs" style={{ color: "#475569" }}>
            No spam. Early access only. Limited spots per society.
          </p>
        </div>
      </section>

      {/* ─── PROBLEM ─── */}
      <section className="py-20 px-6" style={{ backgroundColor: "#0d1220" }}>
        <div className="max-w-5xl mx-auto">
          <div className="text-center mb-14">
            <p className="text-sm font-semibold uppercase tracking-widest mb-3" style={{ color: "#d4a843" }}>The Problem</p>
            <h2 className="text-3xl sm:text-4xl font-bold">
              Urban mobility is broken for families.
            </h2>
          </div>

          <div className="grid sm:grid-cols-3 gap-6">
            {[
              {
                icon: "🚫",
                title: "Unreliable cabs",
                desc: "Surge pricing at 8am. Cancellations at school gates. Strangers in your car every single time. Uber & Ola optimize for drivers — not for you.",
              },
              {
                icon: "👤",
                title: "Zero trust, zero community",
                desc: "You don't know who's picking up your kids. You've never met the driver. There's no accountability beyond a 1-star rating.",
              },
              {
                icon: "💸",
                title: "Silently draining ₹12,000+/month",
                desc: "Daily rides, surge multipliers, convenience fees — it adds up fast. You're paying premium prices for a commodity experience.",
              },
            ].map((item) => (
              <div
                key={item.title}
                className="rounded-2xl p-6 flex flex-col gap-4"
                style={{ backgroundColor: "#111827", border: "1px solid rgba(255,255,255,0.06)" }}
              >
                <span className="text-3xl">{item.icon}</span>
                <h3 className="text-lg font-semibold text-white">{item.title}</h3>
                <p className="text-sm leading-relaxed" style={{ color: "#64748b" }}>{item.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ─── HOW IT WORKS ─── */}
      <section className="py-20 px-6" style={{ backgroundColor: "#0a0f1e" }}>
        <div className="max-w-5xl mx-auto">
          <div className="text-center mb-14">
            <p className="text-sm font-semibold uppercase tracking-widest mb-3" style={{ color: "#d4a843" }}>How It Works</p>
            <h2 className="text-3xl sm:text-4xl font-bold">Simple as it should be.</h2>
          </div>

          <div className="grid sm:grid-cols-3 gap-8 relative">
            {/* Connecting line (desktop only) */}
            <div
              className="hidden sm:block absolute top-8 left-1/6 right-1/6 h-px"
              style={{ background: "linear-gradient(to right, transparent, rgba(212,168,67,0.3), transparent)" }}
            />

            {[
              {
                step: "01",
                title: "Join your society",
                desc: "Sign up as a member. We assign a curated car and vetted driver to your society — people you'll recognise.",
              },
              {
                step: "02",
                title: "Book via WhatsApp",
                desc: "No app to download. Just message on WhatsApp to book a ride. Your neighbours do the same.",
              },
              {
                step: "03",
                title: "Ride with people you trust",
                desc: "Same driver, same car, same neighbours. It feels like a carpool among friends — not a random shared ride.",
              },
            ].map((item) => (
              <div key={item.step} className="relative flex flex-col gap-4 items-center text-center sm:items-start sm:text-left">
                <div
                  className="w-12 h-12 rounded-full flex items-center justify-center text-sm font-bold shrink-0 z-10"
                  style={{ backgroundColor: "rgba(212,168,67,0.15)", border: "1px solid rgba(212,168,67,0.4)", color: "#d4a843" }}
                >
                  {item.step}
                </div>
                <div>
                  <h3 className="text-lg font-semibold text-white mb-2">{item.title}</h3>
                  <p className="text-sm leading-relaxed" style={{ color: "#64748b" }}>{item.desc}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ─── BENEFITS ─── */}
      <section className="py-20 px-6" style={{ backgroundColor: "#0d1220" }}>
        <div className="max-w-5xl mx-auto">
          <div className="text-center mb-14">
            <p className="text-sm font-semibold uppercase tracking-widest mb-3" style={{ color: "#d4a843" }}>Why VertiCar</p>
            <h2 className="text-3xl sm:text-4xl font-bold">Built for real family life.</h2>
          </div>

          <div className="grid sm:grid-cols-2 gap-6">
            {[
              {
                icon: "🛡️",
                title: "Trust & Safety",
                desc: "Background-verified drivers. Fixed assignment to your society. You know the person — they know your family.",
                tag: "Community-vetted",
              },
              {
                icon: "📉",
                title: "Cost Savings vs Uber/Ola",
                desc: "Predictable monthly membership. No surge. No hidden fees. Typical families save ₹4,000–8,000/month vs daily cabs.",
                tag: "Save up to 40%",
              },
              {
                icon: "🤝",
                title: "Community Connections",
                desc: "Ride with neighbours going the same direction. Build real relationships with the people in your building — not just nodding in the elevator.",
                tag: "Society-first",
              },
              {
                icon: "👨‍👩‍👧‍👦",
                title: "Multigenerational",
                desc: "Kids to school. Parents to office. Grandparents to clinics. One membership covers the whole family across every kind of errand.",
                tag: "Every generation",
              },
            ].map((item) => (
              <div
                key={item.title}
                className="rounded-2xl p-6 flex gap-5"
                style={{ backgroundColor: "#111827", border: "1px solid rgba(255,255,255,0.06)" }}
              >
                <span className="text-3xl shrink-0 mt-1">{item.icon}</span>
                <div>
                  <div className="flex items-center gap-2 mb-2 flex-wrap">
                    <h3 className="text-lg font-semibold text-white">{item.title}</h3>
                    <span
                      className="text-xs font-medium px-2 py-0.5 rounded-full"
                      style={{ backgroundColor: "rgba(212,168,67,0.12)", color: "#d4a843" }}
                    >
                      {item.tag}
                    </span>
                  </div>
                  <p className="text-sm leading-relaxed" style={{ color: "#64748b" }}>{item.desc}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ─── PRICING ─── */}
      <section className="py-20 px-6" style={{ backgroundColor: "#0a0f1e" }}>
        <div className="max-w-3xl mx-auto text-center">
          <p className="text-sm font-semibold uppercase tracking-widest mb-3" style={{ color: "#d4a843" }}>Pricing</p>
          <h2 className="text-3xl sm:text-4xl font-bold mb-6">Simple. Transparent. Fair.</h2>

          <div
            className="rounded-3xl p-8 sm:p-12 relative overflow-hidden"
            style={{ backgroundColor: "#111827", border: "1px solid rgba(212,168,67,0.2)" }}
          >
            {/* Subtle glow */}
            <div
              className="absolute inset-0 pointer-events-none opacity-10"
              style={{ background: "radial-gradient(ellipse at top center, #d4a843, transparent 60%)" }}
            />
            <div className="relative">
              {/* Price block */}
              <div className="flex flex-col items-center justify-center mb-4">
                <div className="flex items-center gap-3 mb-2">
                  <span className="text-xl font-medium line-through" style={{ color: "#64748b" }}>₹5,000</span>
                  <div className="px-3 py-1 rounded-full text-xs font-bold uppercase tracking-wide" style={{ backgroundColor: "rgba(212,168,67,0.15)", color: "#d4a843", border: "1px solid rgba(212,168,67,0.3)" }}>
                    Founding Member Rate
                  </div>
                </div>
                <div className="text-5xl sm:text-6xl font-bold" style={{ color: "#d4a843" }}>
                  ₹3,333
                  <span className="text-2xl font-medium text-white">/month</span>
                </div>
                <p className="mt-2 text-sm font-medium" style={{ color: "#f59e0b" }}>
                  🔒 Locked in for first 3 months · Limited spots per society
                </p>
              </div>

              {/* Trip breakdown */}
              <div className="rounded-2xl p-5 mb-8 text-left" style={{ backgroundColor: "rgba(212,168,67,0.06)", border: "1px solid rgba(212,168,67,0.15)" }}>
                <p className="text-sm font-semibold mb-3" style={{ color: "#d4a843" }}>What&apos;s included — 10 trips/month</p>
                <div className="grid sm:grid-cols-3 gap-3">
                  {[
                    { slot: "🔴 Peak", count: "2 trips", when: "7–9:30am, 5–8pm weekdays & Sat evenings" },
                    { slot: "🟡 Mid-Peak", count: "4 trips", when: "School runs, daytime errands, Sundays" },
                    { slot: "🟢 Off-Peak", count: "4 trips", when: "Midday, early AM, late evenings" },
                  ].map((item) => (
                    <div key={item.slot} className="rounded-xl p-3" style={{ backgroundColor: "rgba(255,255,255,0.04)" }}>
                      <div className="text-sm font-semibold text-white mb-0.5">{item.slot} <span style={{ color: "#d4a843" }}>{item.count}</span></div>
                      <div className="text-xs leading-relaxed" style={{ color: "#64748b" }}>{item.when}</div>
                    </div>
                  ))}
                </div>
                <p className="text-xs mt-3" style={{ color: "#475569" }}>Each trip up to 12km. ₹30/km beyond that. Need more? Top-up anytime.</p>
              </div>

              {/* Feature checklist */}
              <div className="grid sm:grid-cols-3 gap-4 text-left mb-8">
                {[
                  { label: "Vetted driver assigned to your society" },
                  { label: "Book via WhatsApp — no app needed" },
                  { label: "No surge pricing, ever" },
                  { label: "Covers entire family" },
                  { label: "Cancel anytime" },
                  { label: "Full post-launch price: ₹5,000/month" },
                ].map((item) => (
                  <div key={item.label} className="flex items-start gap-2">
                    <span style={{ color: "#d4a843" }} className="shrink-0 mt-0.5">✓</span>
                    <span className="text-sm" style={{ color: "#e2e8f0" }}>{item.label}</span>
                  </div>
                ))}
              </div>

              <p className="text-xs" style={{ color: "#475569" }}>
                Founding member rate locked for 3 months. Regular price ₹5,000/month applies thereafter.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* ─── WAITLIST CTA ─── */}
      <section id="waitlist" className="py-24 px-6" style={{ backgroundColor: "#0d1220" }}>
        <div className="max-w-2xl mx-auto text-center">
          <div
            className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full text-xs font-medium mb-6 tracking-wide uppercase"
            style={{ backgroundColor: "rgba(212,168,67,0.12)", border: "1px solid rgba(212,168,67,0.25)", color: "#d4a843" }}
          >
            🗓️ Launching Soon
          </div>

          <h2 className="text-3xl sm:text-4xl font-bold mb-4">
            Launching in{" "}
            <span style={{ color: "#d4a843" }}>DLF Phase 5, Gurgaon.</span>
          </h2>
          <p className="text-lg mb-10" style={{ color: "#94a3b8" }}>
            Spots are limited per society. Join the waitlist and we&apos;ll reach out when
            your building goes live.
          </p>

          <WaitlistForm
            email={email}
            setEmail={setEmail}
            submitted={submitted}
            loading={loading}
            error={error}
            handleSubmit={handleSubmit}
          />

          <p className="mt-6 text-xs" style={{ color: "#334155" }}>
            No spam. No commitment. Just first access.
          </p>
        </div>
      </section>

      {/* ─── FOOTER ─── */}
      <footer className="py-8 px-6" style={{ borderTop: "1px solid rgba(255,255,255,0.05)" }}>
        <div className="max-w-5xl mx-auto flex flex-col sm:flex-row items-center justify-between gap-4 text-xs" style={{ color: "#334155" }}>
          <div className="flex items-center gap-1">
            <span style={{ color: "#d4a843" }} className="font-semibold">Verti</span>
            <span className="text-white font-semibold">Car</span>
            <span className="ml-2">© {new Date().getFullYear()}</span>
          </div>
          <p>Community mobility for premium societies · Gurgaon, India</p>
        </div>
      </footer>
    </main>
  );
}

/* ─── Shared Waitlist Form Component ─── */
function WaitlistForm({
  email,
  setEmail,
  submitted,
  loading,
  error,
  handleSubmit,
  large = false,
}: {
  email: string;
  setEmail: (v: string) => void;
  submitted: boolean;
  loading: boolean;
  error: string;
  handleSubmit: (e: React.FormEvent<HTMLFormElement>) => Promise<void>;
  large?: boolean;
}) {
  if (submitted) {
    return (
      <div
        className="inline-flex items-center gap-3 px-6 py-4 rounded-2xl text-sm font-medium"
        style={{ backgroundColor: "rgba(212,168,67,0.12)", border: "1px solid rgba(212,168,67,0.3)", color: "#d4a843" }}
      >
        <span className="text-lg">🎉</span>
        You&apos;re on the list! We&apos;ll be in touch soon.
      </div>
    );
  }

  return (
    <div>
      <form
        onSubmit={handleSubmit}
        className={`flex flex-col sm:flex-row gap-3 mx-auto ${large ? "max-w-md" : "max-w-sm"}`}
      >
        <input
          type="email"
          required
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          placeholder="your@email.com"
          className={`flex-1 rounded-xl px-4 outline-none transition-all duration-200 placeholder:text-slate-500 ${large ? "py-3.5 text-base" : "py-3 text-sm"}`}
          style={{
            backgroundColor: "#1e293b",
            border: "1px solid rgba(255,255,255,0.1)",
            color: "#f1f5f9",
          }}
          onFocus={(e) => (e.target.style.borderColor = "rgba(212,168,67,0.5)")}
          onBlur={(e) => (e.target.style.borderColor = "rgba(255,255,255,0.1)")}
        />
        <button
          type="submit"
          disabled={loading}
          className={`rounded-xl font-semibold transition-all duration-200 whitespace-nowrap ${large ? "px-6 py-3.5 text-base" : "px-5 py-3 text-sm"}`}
          style={{
            backgroundColor: loading ? "#b8922e" : "#d4a843",
            color: "#0a0f1e",
            opacity: loading ? 0.8 : 1,
          }}
        >
          {loading ? "Joining..." : "Join Waitlist →"}
        </button>
      </form>
      {error && (
        <p className="mt-2 text-xs text-red-400 text-center">{error}</p>
      )}
    </div>
  );
}
