"use client";

import { useState, useEffect } from "react";
import { Menu, X } from "lucide-react";
import { Button } from "@/components/ui/Button";
import { NAV_ITEMS } from "@/lib/constants";

export function Navbar() {
  const [menuOpen, setMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 24);
    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const handleNavClick = (href: string) => {
    setMenuOpen(false);
    const id = href.replace("#", "");
    const el = document.getElementById(id);
    if (el) {
      el.scrollIntoView({ behavior: "smooth", block: "start" });
    }
  };

  return (
    <header
      className={`
        fixed top-0 left-0 right-0 z-50
        transition-all duration-300
        ${scrolled
          ? "bg-[#07090e]/90 backdrop-blur-xl border-b border-white/[0.06] shadow-lg shadow-black/20"
          : "bg-transparent border-b border-transparent"
        }
      `}
    >
      <div className="section-container">
        <div className="flex items-center justify-between h-16 md:h-[70px]">

          {/* Brand */}
          <a
            href="#hero"
            onClick={(e) => { e.preventDefault(); handleNavClick("#hero"); }}
            className="flex items-center gap-2.5 group focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-indigo-500 rounded-lg"
            aria-label="Memora — Home"
          >
            {/* Logo mark */}
            <div
              aria-hidden="true"
              className="w-8 h-8 rounded-lg bg-gradient-to-br from-indigo-500 via-violet-500 to-purple-600 flex items-center justify-center shadow-lg shadow-indigo-900/40 group-hover:shadow-indigo-700/50 transition-shadow duration-200"
            >
              <span className="text-white font-black text-sm tracking-tight select-none">M</span>
            </div>
            <span className="text-white font-extrabold text-lg tracking-tight leading-none">
              MEMORA
            </span>
            <span className="hidden sm:inline-flex items-center font-mono text-[10px] font-semibold uppercase tracking-widest text-indigo-300 bg-indigo-950/60 border border-indigo-700/40 px-2 py-0.5 rounded-full ml-0.5">
              Stage 1
            </span>
          </a>

          {/* Desktop nav */}
          <nav className="hidden md:flex items-center gap-1" aria-label="Main navigation">
            {NAV_ITEMS.map((item) => (
              <button
                key={item.href}
                onClick={() => handleNavClick(item.href)}
                className="px-4 py-2 text-sm font-medium text-slate-400 hover:text-slate-100 rounded-lg hover:bg-white/5 transition-all duration-150 cursor-pointer"
              >
                {item.label}
              </button>
            ))}
          </nav>

          {/* CTA */}
          <div className="hidden md:flex items-center gap-3">
            <Button
              as="a"
              href="#how-it-works"
              onClick={(e: React.MouseEvent) => {
                e.preventDefault();
                handleNavClick("#how-it-works");
              }}
              variant="outline"
              size="sm"
            >
              Learn More
            </Button>
            <Button
              as="a"
              href="#features"
              onClick={(e: React.MouseEvent) => {
                e.preventDefault();
                handleNavClick("#features");
              }}
              variant="primary"
              size="sm"
            >
              Explore Platform
            </Button>
          </div>

          {/* Mobile menu toggle */}
          <button
            id="mobile-menu-toggle"
            className="md:hidden p-2 rounded-lg text-slate-400 hover:text-white hover:bg-white/5 transition-colors"
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
        <div
          id="mobile-menu"
          className="md:hidden bg-[#07090e]/95 backdrop-blur-xl border-t border-white/[0.06]"
        >
          <nav className="section-container py-4 flex flex-col gap-1" aria-label="Mobile navigation">
            {NAV_ITEMS.map((item) => (
              <button
                key={item.href}
                onClick={() => handleNavClick(item.href)}
                className="text-left px-4 py-3 text-sm font-medium text-slate-300 hover:text-white rounded-lg hover:bg-white/5 transition-colors"
              >
                {item.label}
              </button>
            ))}
            <div className="flex flex-col gap-2 mt-3 pt-3 border-t border-white/[0.06]">
              <Button
                as="a"
                href="#how-it-works"
                onClick={(e: React.MouseEvent) => {
                  e.preventDefault();
                  handleNavClick("#how-it-works");
                }}
                variant="secondary"
                fullWidth
              >
                Learn More
              </Button>
              <Button
                as="a"
                href="#features"
                onClick={(e: React.MouseEvent) => {
                  e.preventDefault();
                  handleNavClick("#features");
                }}
                variant="primary"
                fullWidth
              >
                Explore Platform
              </Button>
            </div>
          </nav>
        </div>
      )}
    </header>
  );
}
