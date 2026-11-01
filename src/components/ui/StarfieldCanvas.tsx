"use client";

import { useEffect, useRef } from "react";

interface Star {
  x: number; y: number;
  r: number; opacity: number;
  speed: number; twinklePhase: number;
}
interface Particle {
  x: number; y: number;
  vx: number; vy: number;
  r: number; opacity: number;
  color: string;
}

/**
 * Fixed full-page starfield — renders behind all content as a persistent
 * space environment. Uses position:fixed so it never ends between sections.
 */
export function GlobalBackground() {
  const canvasRef = useRef<HTMLCanvasElement>(null);
  const rafRef    = useRef<number>(0);
  const timeRef   = useRef<number>(0);
  const scrollRef = useRef<number>(0);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    const ctx = canvas.getContext("2d");
    if (!ctx) return;

    const W = () => window.innerWidth;
    const H = () => window.innerHeight;

    const resize = () => {
      canvas.width  = W();
      canvas.height = H();
    };
    resize();
    window.addEventListener("resize", resize, { passive: true });

    const onScroll = () => { scrollRef.current = window.scrollY; };
    window.addEventListener("scroll", onScroll, { passive: true });

    // ── Stars
    const STAR_COUNT = 380;
    const stars: Star[] = Array.from({ length: STAR_COUNT }, () => ({
      x: Math.random(),
      y: Math.random(),
      r: Math.random() * 1.3 + 0.2,
      opacity: Math.random() * 0.75 + 0.15,
      speed: Math.random() * 0.000035 + 0.000008,
      twinklePhase: Math.random() * Math.PI * 2,
    }));

    // ── Cyan particles (sparse)
    const PCOLS = [
      "rgba(6,182,212,",  "rgba(14,165,233,",
      "rgba(34,211,238,", "rgba(56,189,248,",
    ];
    const particles: Particle[] = Array.from({ length: 28 }, () => ({
      x: Math.random() * W(),
      y: Math.random() * H(),
      vx: (Math.random() - 0.5) * 0.18,
      vy: (Math.random() - 0.5) * 0.18,
      r: Math.random() * 1.8 + 0.4,
      opacity: Math.random() * 0.35 + 0.08,
      color: PCOLS[Math.floor(Math.random() * PCOLS.length)],
    }));

    const draw = (ts: number) => {
      const dt = Math.min(ts - timeRef.current, 50); // cap dt
      timeRef.current = ts;

      const cW = canvas.width;
      const cH = canvas.height;
      const scroll = scrollRef.current;

      ctx.clearRect(0, 0, cW, cH);

      // Base void
      ctx.fillStyle = "#020408";
      ctx.fillRect(0, 0, cW, cH);

      // Section-aware atmospheric glow — shifts as user scrolls
      const docH = document.body.scrollHeight || cH;
      const scrollPct = scroll / Math.max(docH - cH, 1);

      // Top nebula glow (always visible in hero)
      {
        const g = ctx.createRadialGradient(cW * 0.65, cH * 0.35, 0, cW * 0.65, cH * 0.35, cW * 0.55);
        g.addColorStop(0,   `rgba(6,182,212,${0.055 - scrollPct * 0.03})`);
        g.addColorStop(0.5, `rgba(14,165,233,${0.025 - scrollPct * 0.01})`);
        g.addColorStop(1,   "transparent");
        ctx.fillStyle = g;
        ctx.fillRect(0, 0, cW, cH);
      }

      // Mid-page (problem/features) subtle blue-left glow
      if (scrollPct > 0.08) {
        const intensity = Math.min((scrollPct - 0.08) * 1.5, 0.5);
        const g = ctx.createRadialGradient(cW * 0.12, cH * 0.5, 0, cW * 0.12, cH * 0.5, cW * 0.38);
        g.addColorStop(0,   `rgba(6,182,212,${0.04 * intensity})`);
        g.addColorStop(1,   "transparent");
        ctx.fillStyle = g;
        ctx.fillRect(0, 0, cW, cH);
      }

      // Lower-page (privacy/transparency) violet-teal mix
      if (scrollPct > 0.5) {
        const intensity = Math.min((scrollPct - 0.5) * 2, 0.6);
        const g = ctx.createRadialGradient(cW * 0.85, cH * 0.6, 0, cW * 0.85, cH * 0.6, cW * 0.45);
        g.addColorStop(0,   `rgba(14,116,144,${0.05 * intensity})`);
        g.addColorStop(1,   "transparent");
        ctx.fillStyle = g;
        ctx.fillRect(0, 0, cW, cH);
      }

      // Stars
      for (const s of stars) {
        s.twinklePhase += dt * 0.0007;
        const alpha = s.opacity * (0.60 + 0.40 * Math.sin(s.twinklePhase));
        // Very subtle parallax with scroll
        const py = (s.y + scroll * s.speed * 0.15) % 1;
        s.y -= s.speed * dt;
        if (s.y < 0) { s.y = 1; s.x = Math.random(); }

        ctx.beginPath();
        ctx.arc(s.x * cW, py * cH, s.r, 0, Math.PI * 2);
        ctx.fillStyle = `rgba(210,230,255,${alpha})`;
        ctx.fill();
      }

      // Particles
      for (const p of particles) {
        p.x += p.vx * (dt / 16);
        p.y += p.vy * (dt / 16);
        if (p.x < 0) p.x = cW;
        if (p.x > cW) p.x = 0;
        if (p.y < 0) p.y = cH;
        if (p.y > cH) p.y = 0;

        // Glow
        const pg = ctx.createRadialGradient(p.x, p.y, 0, p.x, p.y, p.r * 5);
        pg.addColorStop(0, `${p.color}${p.opacity})`);
        pg.addColorStop(1, `${p.color}0)`);
        ctx.beginPath();
        ctx.arc(p.x, p.y, p.r * 5, 0, Math.PI * 2);
        ctx.fillStyle = pg;
        ctx.fill();

        ctx.beginPath();
        ctx.arc(p.x, p.y, p.r, 0, Math.PI * 2);
        ctx.fillStyle = `${p.color}${Math.min(p.opacity * 2, 0.8)})`;
        ctx.fill();
      }

      rafRef.current = requestAnimationFrame(draw);
    };

    rafRef.current = requestAnimationFrame((ts) => {
      timeRef.current = ts;
      rafRef.current  = requestAnimationFrame(draw);
    });

    return () => {
      cancelAnimationFrame(rafRef.current);
      window.removeEventListener("resize", resize);
      window.removeEventListener("scroll", onScroll);
    };
  }, []);

  return (
    <canvas
      ref={canvasRef}
      aria-hidden="true"
      style={{
        position: "fixed",
        inset: 0,
        width: "100%",
        height: "100%",
        zIndex: 0,
        display: "block",
        pointerEvents: "none",
      }}
    />
  );
}
