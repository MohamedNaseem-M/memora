"use client";

import { ExternalLink, Shield } from "lucide-react";
import { FOOTER_COLUMNS } from "@/lib/constants";

export function Footer() {
  const year = 2026;
  return (
    <footer
      className="section-layer"
      style={{ borderTop: "1px solid rgba(6,182,212,0.09)", background: "rgba(2,4,8,0.85)", backdropFilter: "blur(20px)" }}
      role="contentinfo"
      aria-label="Site footer"
    >
      {/* Top glow edge */}
      <div aria-hidden="true" style={{
        position: "absolute", top: 0, left: "50%", transform: "translateX(-50%)",
        width: "70%", height: 1,
        background: "linear-gradient(90deg, transparent, rgba(6,182,212,0.4), transparent)",
        pointerEvents: "none",
      }} />

      <div className="section-container py-14 md:py-16">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-10 md:gap-8 mb-12">

          {/* Brand */}
          <div>
            <div className="flex items-center gap-2.5 mb-4">
              <div style={{
                width: 32, height: 32, borderRadius: 10, display: "flex",
                alignItems: "center", justifyContent: "center",
                fontWeight: 900, fontSize: "0.85rem", color: "#fff",
                background: "linear-gradient(135deg, #0ea5e9, #06b6d4, #22d3ee)",
                boxShadow: "0 0 12px rgba(6,182,212,0.35)",
              }} aria-hidden="true">M</div>
              <span style={{ fontWeight: 800, fontSize: "1.1rem", letterSpacing: "-0.02em", color: "var(--text-100)" }}>MEMORA</span>
            </div>
            <p style={{ fontSize: "0.85rem", color: "var(--text-600)", lineHeight: 1.7, marginBottom: "1.25rem" }}>
              An ethical, privacy-conscious AI platform for digital memory and legacy preservation.
            </p>
            <div style={{ display: "inline-flex", alignItems: "center", gap: "0.5rem",
              fontFamily: "var(--font-mono)", fontSize: "0.68rem", color: "var(--text-600)",
              background: "rgba(255,255,255,0.02)", border: "1px solid rgba(255,255,255,0.05)",
              borderRadius: 10, padding: "0.4rem 0.8rem" }}>
              <span style={{ width: 6, height: 6, borderRadius: "50%", background: "rgba(6,182,212,0.6)",
                boxShadow: "0 0 6px rgba(6,182,212,0.5)" }} aria-hidden="true" />
              Stage 1 — Foundation
            </div>
          </div>

          {FOOTER_COLUMNS.map((col) => (
            <div key={col.heading}>
              <h3 style={{ fontFamily: "var(--font-mono)", fontSize: "0.62rem", fontWeight: 700,
                textTransform: "uppercase", letterSpacing: "0.18em", color: "var(--text-600)", marginBottom: "1rem" }}>
                {col.heading}
              </h3>
              <ul className="flex flex-col gap-2.5" role="list">
                {col.links.map((link) => (
                  <li key={link.label}>
                    <a href={link.href} style={{ fontSize: "0.875rem", color: "var(--text-600)",
                      transition: "color 0.15s" }}
                      onMouseEnter={(e) => { (e.currentTarget as HTMLElement).style.color = "var(--cyan-400)"; }}
                      onMouseLeave={(e) => { (e.currentTarget as HTMLElement).style.color = "var(--text-600)"; }}>
                      {link.label}
                    </a>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        <div style={{ height: 1, background: "linear-gradient(90deg, transparent, rgba(6,182,212,0.12), transparent)", marginBottom: "1.5rem" }} />

        <div className="flex flex-col sm:flex-row items-center justify-between gap-4">
          <p style={{ fontSize: "0.78rem", color: "var(--text-600)" }}>
            © {year} Memora. Research demonstration platform. Not a production service.
          </p>
          <div className="flex items-center gap-5">
            <div style={{ display: "flex", alignItems: "center", gap: "0.4rem", fontSize: "0.78rem", color: "var(--text-600)" }}>
              <Shield className="w-3.5 h-3.5" aria-hidden="true" />
              <span>AI Transparency Enabled</span>
            </div>
            <a href="https://github.com/MohamedNaseem-M/memora" target="_blank" rel="noopener noreferrer"
              aria-label="Memora on GitHub"
              style={{ color: "var(--text-600)", transition: "color 0.15s" }}
              onMouseEnter={(e) => { (e.currentTarget as HTMLElement).style.color = "var(--cyan-400)"; }}
              onMouseLeave={(e) => { (e.currentTarget as HTMLElement).style.color = "var(--text-600)"; }}>
              <ExternalLink className="w-4 h-4" aria-hidden="true" />
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
}
