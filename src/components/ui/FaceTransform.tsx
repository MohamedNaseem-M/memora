"use client";

import { useEffect, useRef, useState, useCallback } from "react";
import Image from "next/image";

type Phase = "robot" | "scanning" | "human" | "speaking";

// Facial landmark positions (as % of container width/height) for scan overlay
const LANDMARKS = [
  { x: 38, y: 28 }, { x: 50, y: 27 }, { x: 62, y: 28 }, // brow
  { x: 36, y: 36 }, { x: 64, y: 36 }, // eye outer
  { x: 42, y: 37 }, { x: 58, y: 37 }, // eye inner
  { x: 44, y: 40 }, { x: 56, y: 40 }, // eye lid
  { x: 50, y: 50 }, // nose tip
  { x: 42, y: 56 }, { x: 58, y: 56 }, // lip corners
  { x: 50, y: 59 }, // chin top
  { x: 50, y: 68 }, // chin bottom
  { x: 32, y: 44 }, { x: 68, y: 44 }, // cheek
];

interface ScanCanvasProps {
  phase: Phase;
  scanY: number; // 0–100 %
}

function ScanCanvas({ phase, scanY }: ScanCanvasProps) {
  const canvasRef = useRef<HTMLCanvasElement>(null);

  // Core draw — phase and scanY passed explicitly; no stale-closure risk
  const drawFn = useCallback((ph: Phase, sy: number) => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    const ctx = canvas.getContext("2d");
    if (!ctx) return;
    const W = canvas.width;
    const H = canvas.height;
    const sY = (sy / 100) * H;

    ctx.clearRect(0, 0, W, H);

    if (ph === "robot") {
      ctx.strokeStyle = "rgba(6,182,212,0.06)";
      ctx.lineWidth = 0.5;
      for (let y = 0; y < H; y += 18) { ctx.beginPath(); ctx.moveTo(0, y); ctx.lineTo(W, y); ctx.stroke(); }
      for (let x = 0; x < W; x += 18) { ctx.beginPath(); ctx.moveTo(x, 0); ctx.lineTo(x, H); ctx.stroke(); }
    }

    if (ph === "scanning" || ph === "human" || ph === "speaking") {
      for (const lm of LANDMARKS) {
        const lx = (lm.x / 100) * W;
        const ly = (lm.y / 100) * H;
        if (ly > sY && ph === "scanning") continue;
        const age = ph === "scanning" ? Math.max(0, 1 - (sY - ly) / (H * 0.35)) : 0.7;
        ctx.beginPath();
        ctx.arc(lx, ly, 2.5, 0, Math.PI * 2);
        ctx.fillStyle = `rgba(34,211,238,${0.85 * age})`;
        ctx.fill();
        ctx.strokeStyle = `rgba(6,182,212,${0.5 * age})`;
        ctx.lineWidth = 0.8;
        ctx.beginPath(); ctx.moveTo(lx - 5, ly); ctx.lineTo(lx + 5, ly); ctx.stroke();
        ctx.beginPath(); ctx.moveTo(lx, ly - 5); ctx.lineTo(lx, ly + 5); ctx.stroke();
      }

      if (ph === "scanning") {
        const g = ctx.createLinearGradient(0, sY - 20, 0, sY + 6);
        g.addColorStop(0,   "rgba(6,182,212,0)");
        g.addColorStop(0.6, "rgba(6,182,212,0.15)");
        g.addColorStop(1,   "rgba(34,211,238,0.6)");
        ctx.fillStyle = g;
        ctx.fillRect(0, sY - 20, W, 26);

        ctx.beginPath(); ctx.moveTo(0, sY); ctx.lineTo(W, sY);
        ctx.strokeStyle = "rgba(34,211,238,0.9)"; ctx.lineWidth = 1.8;
        ctx.shadowColor = "#22d3ee"; ctx.shadowBlur = 10;
        ctx.stroke(); ctx.shadowBlur = 0;

        ctx.strokeStyle = "rgba(6,182,212,0.05)"; ctx.lineWidth = 0.4;
        for (let y = 0; y < sY; y += 14) { ctx.beginPath(); ctx.moveTo(0, y); ctx.lineTo(W, y); ctx.stroke(); }
      }
    }

    if (ph === "speaking") {
      const now = performance.now();
      const jaw = Math.abs(Math.sin(now * 0.004)) * 0.5 + Math.abs(Math.sin(now * 0.007)) * 0.3;
      const jx = W * 0.5, jy = H * 0.63;
      const jw = W * 0.12 * (0.4 + jaw * 0.6), jh = H * 0.025 * (0.3 + jaw * 0.9);
      ctx.beginPath(); ctx.ellipse(jx, jy, jw, jh, 0, 0, Math.PI * 2);
      ctx.fillStyle   = `rgba(6,182,212,${0.12 * jaw})`;
      ctx.fill();
      ctx.strokeStyle = `rgba(34,211,238,${0.25 * jaw})`;
      ctx.lineWidth   = 1; ctx.stroke();
    }
  }, []); // stable — canvas ref never changes

  // Size canvas on mount
  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    const parent = canvas.parentElement;
    if (parent) { canvas.width = parent.clientWidth; canvas.height = parent.clientHeight; }
  }, []);

  // Redraw whenever phase or scanY changes (non-speaking phases)
  useEffect(() => {
    if (phase !== "speaking") {
      drawFn(phase, scanY);
    }
  }, [phase, scanY, drawFn]);

  // Continuous RAF loop for speaking jaw animation
  useEffect(() => {
    if (phase !== "speaking") return;
    let id: number;
    const loop = () => { drawFn("speaking", 100); id = requestAnimationFrame(loop); };
    id = requestAnimationFrame(loop);
    return () => cancelAnimationFrame(id);
  }, [phase, drawFn]);

  return (
    <canvas
      ref={canvasRef}
      aria-hidden="true"
      className="absolute inset-0 w-full h-full pointer-events-none"
      style={{ zIndex: 20 }}
    />
  );
}


export function FaceTransform() {
  const [phase, setPhase] = useState<Phase>("robot");
  const [scanY, setScanY] = useState(0);
  const rafRef   = useRef<number>(0);
  const startRef = useRef<number>(0);

  // Phase timing (ms)
  const SCAN_START  = 2200;
  const SCAN_DUR    = 3800; // scanning
  const HUMAN_DELAY = 300;  // after scan done before speaking starts

  useEffect(() => {
    // Start scan after SCAN_START ms
    const t1 = setTimeout(() => {
      setPhase("scanning");
      startRef.current = performance.now();

      const animateScan = (ts: number) => {
        const elapsed = ts - startRef.current;
        const pct = Math.min(elapsed / SCAN_DUR, 1);
        setScanY(pct * 100);

        if (pct < 1) {
          rafRef.current = requestAnimationFrame(animateScan);
        } else {
          // Scan complete → reveal human face
          setPhase("human");
          setTimeout(() => setPhase("speaking"), HUMAN_DELAY);
        }
      };
      rafRef.current = requestAnimationFrame(animateScan);
    }, SCAN_START);

    return () => {
      clearTimeout(t1);
      cancelAnimationFrame(rafRef.current);
    };
  }, []);

  const humanRevealPct = phase === "scanning"
    ? scanY
    : phase === "human" || phase === "speaking" ? 100 : 0;

  return (
    <div
      className="relative select-none"
      style={{ width: "clamp(280px, 44vw, 540px)", height: "clamp(280px, 44vw, 540px)" }}
      aria-label="MEMORA AI face — holographic AI-generated representation"
    >
      {/* ── Outer atmospheric glow */}
      <div
        aria-hidden="true"
        className="absolute inset-0 rounded-full pointer-events-none"
        style={{
          background: "radial-gradient(circle, rgba(6,182,212,0.20) 0%, rgba(14,165,233,0.08) 45%, transparent 70%)",
          animation: "glowPulse 5s ease-in-out infinite",
        }}
      />

      {/* ── Orbital rings */}
      {[
        { sz: 108, dur: 20, rev: false, op: 0.40 },
        { sz: 162, dur: 32, rev: true,  op: 0.22 },
        { sz: 216, dur: 48, rev: false, op: 0.12 },
      ].map((r, i) => (
        <div
          key={i}
          aria-hidden="true"
          className="absolute pointer-events-none"
          style={{
            width: r.sz, height: r.sz,
            left: "50%", top: "50%",
            transform: "translate(-50%, -50%) rotateX(72deg)",
            animation: `${r.rev ? "orbitSpinReverse" : "orbitSpin"} ${r.dur}s linear infinite`,
          }}
        >
          <svg viewBox="0 0 100 100" width={r.sz} height={r.sz} style={{ opacity: r.op }}>
            <ellipse cx="50" cy="50" rx="49" ry="49"
              fill="none" stroke="url(#og)" strokeWidth="0.7" strokeDasharray="5 3" />
            <defs>
              <linearGradient id="og" x1="0%" y1="0%" x2="100%" y2="100%">
                <stop offset="0%"   stopColor="#06b6d4" stopOpacity="0.9" />
                <stop offset="50%"  stopColor="#38bdf8" stopOpacity="0.3" />
                <stop offset="100%" stopColor="#06b6d4" stopOpacity="0.9" />
              </linearGradient>
            </defs>
          </svg>
        </div>
      ))}

      {/* ── Face container — circular */}
      <div
        className="absolute rounded-full overflow-hidden"
        style={{
          inset: "12.5%",
          boxShadow: "0 0 50px rgba(6,182,212,0.28), 0 0 100px rgba(6,182,212,0.10)",
          animation: "breathe 7s ease-in-out infinite",
        }}
      >
        {/* LAYER 1 — Robot face (always underneath) */}
        <Image
          src="/ai-face.png"
          alt=""
          fill priority
          className="object-cover"
          sizes="(max-width: 768px) 280px, 420px"
        />

        {/* LAYER 2 — Human face revealed by clip-path as scan advances */}
        <div
          aria-hidden="true"
          className="absolute inset-0 transition-all duration-300"
          style={{
            clipPath: `inset(${100 - humanRevealPct}% 0 0 0)`,
            // Fade in also for extra smoothness
            opacity: humanRevealPct > 5 ? 1 : 0,
          }}
        >
          <Image
            src="/human-face.png"
            alt=""
            fill
            className="object-cover"
            sizes="(max-width: 768px) 280px, 420px"
          />
          {/* Warm blue-rim blend on human face */}
          <div
            className="absolute inset-0 pointer-events-none"
            style={{
              background: "radial-gradient(ellipse at 50% 50%, transparent 55%, rgba(6,182,212,0.12) 100%)",
            }}
          />
        </div>

        {/* LAYER 3 — Scan canvas overlay */}
        <ScanCanvas phase={phase} scanY={scanY} />

        {/* LAYER 4 — Constant vignette */}
        <div
          aria-hidden="true"
          className="absolute inset-0 pointer-events-none rounded-full"
          style={{
            background: "radial-gradient(circle at 50% 50%, transparent 52%, rgba(2,4,8,0.55) 100%)",
            zIndex: 25,
          }}
        />

        {/* Corner holographic brackets */}
        {(["tl","tr","bl","br"] as const).map((p) => {
          const map = { tl: "top-1 left-1", tr: "top-1 right-1 rotate-90", bl: "bottom-1 left-1 -rotate-90", br: "bottom-1 right-1 rotate-180" };
          return (
            <div key={p} aria-hidden="true" className={`absolute w-5 h-5 pointer-events-none z-30 ${map[p]}`}
              style={{ animation: "cornerPulse 3s ease-in-out infinite" }}>
              <svg viewBox="0 0 24 24" fill="none" className="w-full h-full">
                <path d="M2 10 L2 2 L10 2" stroke="#22d3ee" strokeWidth="2" strokeLinecap="round" />
              </svg>
            </div>
          );
        })}
      </div>

      {/* ── Floating particles */}
      {[
        { l: "-28%", t: "22%", s: "0.65rem", d: "8s",  dl: "0s" },
        { l: "105%", t: "38%", s: "0.48rem", d: "11s", dl: "1s" },
        { l: "16%",  t: "-10%",s: "0.55rem", d: "9s",  dl: "0.4s" },
        { l: "80%",  t: "-8%", s: "0.40rem", d: "13s", dl: "2s" },
        { l: "-15%", t: "68%", s: "0.50rem", d: "10s", dl: "0.8s" },
        { l: "112%", t: "72%", s: "0.42rem", d: "7s",  dl: "1.5s" },
      ].map((dot, i) => (
        <div key={i} aria-hidden="true" className="absolute rounded-full pointer-events-none"
          style={{
            left: dot.l, top: dot.t,
            width: dot.s, height: dot.s,
            background: "radial-gradient(circle, #22d3ee, #06b6d4)",
            boxShadow: "0 0 8px #06b6d4",
            animation: `particleFloat ${dot.d} ease-in-out infinite`,
            animationDelay: dot.dl,
          }}
        />
      ))}

      {/* ── HUD chips */}
      <div aria-hidden="true" className="absolute top-[7%] right-[1%] font-mono text-[0.58rem] text-cyan-400/75
        bg-black/65 border border-cyan-700/30 rounded-lg px-2.5 py-1.5 backdrop-blur-sm z-30 pointer-events-none leading-snug">
        <div className="text-cyan-300 font-bold text-[0.62rem] mb-0.5">AI ENTITY</div>
        <div>STATUS: {phase === "robot" ? "INIT" : phase === "scanning" ? "SCANNING" : "ACTIVE"}</div>
        <div>EVIDENCE: RAG+EVV</div>
      </div>
      <div aria-hidden="true" className="absolute bottom-[9%] left-[-2%] font-mono text-[0.58rem] text-cyan-400/75
        bg-black/65 border border-cyan-700/30 rounded-lg px-2.5 py-1.5 backdrop-blur-sm z-30 pointer-events-none leading-snug">
        <div className="text-cyan-300 font-bold text-[0.62rem] mb-0.5">MEMORY CORE</div>
        <div>TIER A / B / C</div>
        <div>TRANSPARENT</div>
      </div>

      {/* ── AI transparency label */}
      <div
        className="absolute -bottom-7 inset-x-0 flex justify-center pointer-events-none"
        aria-label="AI-generated representation"
      >
        <span className="font-mono text-[0.62rem] text-slate-600 tracking-wider uppercase">
          AI-generated representation
        </span>
      </div>
    </div>
  );
}
