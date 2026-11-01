"use client";

import { ArrowRight, ChevronDown } from "lucide-react";
import { FaceTransform } from "@/components/ui/FaceTransform";

export function HeroSection() {
  return (
    <section
      id="hero"
      className="section-layer relative min-h-screen flex flex-col overflow-hidden"
      aria-labelledby="hero-heading"
    >
      {/* ── Right-side atmospheric glow behind face */}
      <div
        aria-hidden="true"
        className="absolute pointer-events-none"
        style={{
          right: 0, top: 0,
          width: "60vw", height: "100%",
          background: "radial-gradient(ellipse 55% 65% at 65% 40%, rgba(6,182,212,0.07) 0%, rgba(14,165,233,0.03) 50%, transparent 75%)",
          zIndex: 1,
        }}
      />

      {/* ── Main content grid */}
      <div
        className="relative flex-1 section-container flex flex-col lg:flex-row items-center justify-between gap-10 lg:gap-16 pt-24 pb-10 md:pt-32 md:pb-14"
        style={{ zIndex: 2 }}
      >
        {/* ── LEFT — Text */}
        <div className="flex-1 min-w-0 max-w-[560px] text-center lg:text-left order-2 lg:order-1">

          {/* Eyebrow */}
          <div className="inline-flex items-center gap-2.5 mb-5"
            style={{ fontFamily: "var(--font-mono)", fontSize: "0.68rem", fontWeight: 600,
              textTransform: "uppercase", letterSpacing: "0.18em", color: "var(--cyan-400)" }}>
            <span style={{ width: 24, height: 1, background: "var(--cyan-500)", display: "inline-block" }} aria-hidden="true" />
            AI Digital Memory Platform
            <span style={{ width: 24, height: 1, background: "var(--cyan-500)", display: "inline-block" }} aria-hidden="true" />
          </div>

          {/* H1 */}
          <h1 id="hero-heading" className="font-extrabold gradient-text mb-2"
            style={{ fontSize: "clamp(3rem,7.5vw,5.5rem)", lineHeight: 1.04, letterSpacing: "-0.04em" }}>
            Preserve.<br />Remember.
          </h1>

          <p className="font-light mb-7" style={{ fontSize: "clamp(1.3rem,2.8vw,1.85rem)", letterSpacing: "-0.01em", color: "var(--text-200)" }}>
            Connect with memory.
          </p>

          <p style={{ fontSize: "clamp(0.9rem,1.3vw,1.05rem)", color: "var(--text-400)", lineHeight: 1.75, maxWidth: "46ch", marginBottom: "2.25rem" }}
            className="mx-auto lg:mx-0">
            An AI-powered digital memory and legacy platform designed to help
            authorized families preserve meaningful memories and interact with
            an evidence-grounded AI representation of a loved one.
          </p>

          {/* CTAs */}
          <div className="flex flex-col sm:flex-row items-center gap-3 justify-center lg:justify-start mb-8">
            <a
              href="#features"
              className="inline-flex items-center gap-2 font-semibold rounded-xl px-6 py-3 transition-all duration-200"
              style={{
                fontSize: "0.95rem",
                background: "linear-gradient(135deg, #0ea5e9, #06b6d4)",
                color: "#fff",
                boxShadow: "0 0 24px rgba(6,182,212,0.35)",
              }}
              onMouseEnter={(e) => { (e.currentTarget as HTMLElement).style.boxShadow = "0 0 40px rgba(6,182,212,0.55)"; }}
              onMouseLeave={(e) => { (e.currentTarget as HTMLElement).style.boxShadow = "0 0 24px rgba(6,182,212,0.35)"; }}
            >
              Explore Memora
              <ArrowRight className="w-4 h-4" aria-hidden="true" />
            </a>
            <a
              href="#how-it-works"
              className="inline-flex items-center gap-2 font-medium rounded-xl px-6 py-3 transition-all duration-200"
              style={{
                fontSize: "0.95rem",
                color: "var(--text-400)",
                border: "1px solid rgba(255,255,255,0.08)",
              }}
              onMouseEnter={(e) => {
                (e.currentTarget as HTMLElement).style.color = "var(--cyan-400)";
                (e.currentTarget as HTMLElement).style.borderColor = "rgba(6,182,212,0.35)";
              }}
              onMouseLeave={(e) => {
                (e.currentTarget as HTMLElement).style.color = "var(--text-400)";
                (e.currentTarget as HTMLElement).style.borderColor = "rgba(255,255,255,0.08)";
              }}
            >
              Discover How It Works
            </a>
          </div>

          {/* Transparency note */}
          <div
            role="note"
            className="inline-flex items-start gap-2.5 rounded-xl px-4 py-3 text-left"
            style={{
              background: "rgba(6,182,212,0.04)",
              border: "1px solid rgba(6,182,212,0.10)",
              maxWidth: "46ch",
              fontSize: "0.8rem",
              color: "var(--text-500)",
              lineHeight: 1.6,
            }}
          >
            <span style={{ width: 6, height: 6, borderRadius: "50%", background: "var(--cyan-700, #0e7490)",
              flexShrink: 0, marginTop: 5, display: "inline-block" }} aria-hidden="true" />
            Memora is an AI-generated representation based on authorised memories —
            not the deceased person&apos;s consciousness. Full AI transparency is enforced at every interaction.
          </div>
        </div>

        {/* ── RIGHT — Face Transform */}
        <div className="flex-shrink-0 flex items-center justify-center order-1 lg:order-2 mt-4 lg:mt-0"
          style={{ paddingBottom: "2rem" }}>
          <FaceTransform />
        </div>
      </div>

      {/* ── Stats bar */}
      <div className="relative section-container pb-10 md:pb-16" style={{ zIndex: 2 }}>
        <div
          className="grid grid-cols-2 md:grid-cols-4 overflow-hidden rounded-2xl"
          style={{ border: "1px solid rgba(6,182,212,0.10)", background: "rgba(4,10,22,0.60)", backdropFilter: "blur(12px)" }}
        >
          {[
            { v: "7",     l: "Verification Stages" },
            { v: "3",     l: "Evidence Tiers" },
            { v: "Multi", l: "Memory Source Types" },
            { v: "100%",  l: "AI Transparency" },
          ].map((s, i) => (
            <div key={s.l}
              className="flex flex-col items-center justify-center py-5 px-4"
              style={{ borderRight: i < 3 ? "1px solid rgba(6,182,212,0.08)" : "none" }}>
              <span className="font-extrabold cyan-text mb-1" style={{ fontSize: "clamp(1.5rem,3vw,2.1rem)", letterSpacing: "-0.03em" }}>
                {s.v}
              </span>
              <span style={{ fontSize: "0.7rem", color: "var(--text-500)", fontFamily: "var(--font-mono)", textAlign: "center", lineHeight: 1.3 }}>
                {s.l}
              </span>
            </div>
          ))}
        </div>
      </div>

      {/* ── Scroll cue */}
      <div
        aria-hidden="true"
        className="absolute bottom-5 left-1/2 -translate-x-1/2 flex flex-col items-center gap-1 animate-bounce"
        style={{ zIndex: 2, color: "var(--text-600)", fontSize: "0.6rem", fontFamily: "var(--font-mono)", letterSpacing: "0.2em", textTransform: "uppercase" }}
      >
        <span>Scroll</span>
        <ChevronDown className="w-4 h-4" />
      </div>
    </section>
  );
}
