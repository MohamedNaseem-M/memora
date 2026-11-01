"use client";

import { useState, useEffect } from "react";
import { Menu, X } from "lucide-react";
import { NAV_ITEMS } from "@/lib/constants";

export function Navbar() {
  const [menuOpen, setMenuOpen] = useState(false);
  const [scrolled, setScrolled]  = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 20);
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  const scrollTo = (href: string) => {
    setMenuOpen(false);
    const id = href.replace("#", "");
    document.getElementById(id)?.scrollIntoView({ behavior: "smooth", block: "start" });
  };

  return (
    <header
      className={`
        fixed top-0 inset-x-0 z-50 transition-all duration-400
        ${scrolled
          ? "bg-[#020408]/90 backdrop-blur-2xl border-b border-cyan-900/20 shadow-[0_1px_30px_rgba(6,182,212,0.08)]"
          : "bg-transparent border-b border-transparent"
        }
      `}
    >
      <div className="section-container">
        <div className="flex items-center justify-between h-16 md:h-[70px]">

          {/* Brand */}
          <button
            onClick={() => scrollTo("#hero")}
            className="flex items-center gap-2.5 group cursor-pointer focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-cyan-500 rounded-lg"
            aria-label="Memora — Home"
          >
            <div
              aria-hidden="true"
              className="w-8 h-8 rounded-lg flex items-center justify-center font-black text-sm text-white transition-all duration-200 group-hover:shadow-[0_0_16px_rgba(6,182,212,0.6)]"
              style={{ background: "linear-gradient(135deg, #0ea5e9, #06b6d4, #22d3ee)", boxShadow: "0 0 12px rgba(6,182,212,0.35)" }}
            >
              M
            </div>
            <span className="text-white font-extrabold text-lg tracking-tight">MEMORA</span>
            <span className="hidden sm:inline font-mono text-[9px] font-semibold uppercase tracking-[0.18em] text-cyan-500 bg-cyan-950/60 border border-cyan-700/40 px-2 py-0.5 rounded-full">
              Stage 1
            </span>
          </button>

          {/* Desktop nav */}
          <nav className="hidden md:flex items-center gap-0.5" aria-label="Main navigation">
            {NAV_ITEMS.map((item) => (
              <button
                key={item.href}
                onClick={() => scrollTo(item.href)}
                className="px-4 py-2 text-sm font-medium text-slate-400 hover:text-cyan-300 rounded-lg hover:bg-cyan-950/30 transition-all duration-150 cursor-pointer"
              >
                {item.label}
              </button>
            ))}
          </nav>

          {/* CTA */}
          <div className="hidden md:flex items-center gap-3">
            <button
              onClick={() => scrollTo("#how-it-works")}
              className="px-4 py-2 text-sm font-medium text-slate-400 hover:text-cyan-300 border border-white/[0.08] hover:border-cyan-700/40 rounded-xl transition-all duration-200"
            >
              Learn More
            </button>
            <button
              onClick={() => scrollTo("#features")}
              className="px-4 py-2 text-sm font-semibold text-white rounded-xl transition-all duration-200"
              style={{
                background: "linear-gradient(135deg, #0ea5e9, #06b6d4)",
                boxShadow: "0 0 18px rgba(6,182,212,0.35)",
              }}
              onMouseEnter={(e) => { (e.currentTarget as HTMLElement).style.boxShadow = "0 0 28px rgba(6,182,212,0.55)"; }}
              onMouseLeave={(e) => { (e.currentTarget as HTMLElement).style.boxShadow = "0 0 18px rgba(6,182,212,0.35)"; }}
            >
              Explore Platform
            </button>
          </div>

          {/* Mobile toggle */}
          <button
            id="mobile-menu-toggle"
            className="md:hidden p-2 rounded-lg text-slate-400 hover:text-cyan-300 hover:bg-cyan-950/30 transition-colors"
            onClick={() => setMenuOpen((v) => !v)}
            aria-expanded={menuOpen}
            aria-controls="mobile-menu"
            aria-label={menuOpen ? "Close menu" : "Open menu"}
          >
            {menuOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
          </button>
        </div>
      </div>

      {/* Mobile menu */}
      {menuOpen && (
        <div id="mobile-menu" className="md:hidden bg-[#020408]/96 backdrop-blur-2xl border-t border-cyan-900/20">
          <nav className="section-container py-4 flex flex-col gap-1" aria-label="Mobile navigation">
            {NAV_ITEMS.map((item) => (
              <button key={item.href} onClick={() => scrollTo(item.href)}
                className="text-left px-4 py-3 text-sm font-medium text-slate-300 hover:text-cyan-300 rounded-lg hover:bg-cyan-950/30 transition-colors cursor-pointer">
                {item.label}
              </button>
            ))}
            <div className="flex flex-col gap-2 mt-3 pt-3 border-t border-cyan-900/20">
              <button onClick={() => scrollTo("#how-it-works")}
                className="w-full py-3 text-sm font-medium text-slate-300 border border-white/[0.08] rounded-xl hover:border-cyan-700/40 hover:text-cyan-300 transition-all">
                Learn More
              </button>
              <button onClick={() => scrollTo("#features")}
                className="w-full py-3 text-sm font-semibold text-white rounded-xl"
                style={{ background: "linear-gradient(135deg, #0ea5e9, #06b6d4)", boxShadow: "0 0 18px rgba(6,182,212,0.3)" }}>
                Explore Platform
              </button>
            </div>
          </nav>
        </div>
      )}
    </header>
  );
}
