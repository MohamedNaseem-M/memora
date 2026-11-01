import { ArrowRight, ChevronDown } from "lucide-react";
import { Button } from "@/components/ui/Button";
import { AlertBanner } from "@/components/ui/AlertBanner";
import { Badge } from "@/components/ui/Badge";

export function HeroSection() {
  return (
    <section
      id="hero"
      className="relative min-h-screen flex flex-col items-center justify-center overflow-hidden"
      aria-labelledby="hero-heading"
    >
      {/* Background gradient radials */}
      <div aria-hidden="true" className="pointer-events-none absolute inset-0 overflow-hidden">
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[900px] h-[600px] rounded-full bg-indigo-950/20 blur-[120px]" />
        <div className="absolute top-20 right-0 w-[400px] h-[400px] rounded-full bg-violet-950/15 blur-[100px]" />
        <div className="absolute bottom-20 left-0 w-[350px] h-[350px] rounded-full bg-indigo-950/10 blur-[100px]" />
        {/* Subtle grid */}
        <div
          className="absolute inset-0 opacity-[0.025]"
          style={{
            backgroundImage: `linear-gradient(rgba(99,102,241,0.5) 1px, transparent 1px),
              linear-gradient(90deg, rgba(99,102,241,0.5) 1px, transparent 1px)`,
            backgroundSize: "60px 60px",
          }}
        />
      </div>

      <div className="section-container relative z-10 py-28 md:py-36 flex flex-col items-center text-center">

        {/* Eyebrow badge */}
        <div className="mb-6 flex items-center justify-center">
          <Badge variant="indigo" size="md">
            AI-Powered Digital Memory Platform
          </Badge>
        </div>

        {/* Main heading */}
        <h1
          id="hero-heading"
          className="font-extrabold tracking-tight leading-none mb-6"
          style={{ fontSize: "clamp(2.8rem, 8vw, 5.5rem)", letterSpacing: "-0.035em" }}
        >
          <span className="gradient-text">Preserve.</span>{" "}
          <span className="gradient-text">Remember.</span>
          <br />
          <span className="text-slate-300 font-light" style={{ fontSize: "0.72em" }}>
            Connect with memory.
          </span>
        </h1>

        {/* Subheading */}
        <p className="text-slate-400 max-w-2xl mx-auto mb-8 leading-relaxed"
          style={{ fontSize: "clamp(1rem, 2vw, 1.2rem)" }}>
          Memora is a privacy-conscious, ethical platform that helps verified
          family members preserve and interact with an{" "}
          <strong className="text-slate-300 font-semibold">AI-generated representation</strong>{" "}
          of a deceased loved one — built from authenticated personal materials
          and archival records.
        </p>

        {/* CTA buttons */}
        <div className="flex flex-col sm:flex-row items-center gap-3 mb-14">
          <Button as="a" href="#how-it-works" variant="primary" size="lg">
            How It Works
            <ArrowRight className="w-4 h-4" aria-hidden="true" />
          </Button>
          <Button as="a" href="#features" variant="secondary" size="lg">
            Explore Features
          </Button>
        </div>

        {/* Ethics notice */}
        <div className="w-full max-w-2xl mx-auto">
          <AlertBanner
            variant="info"
            title="Foundational Ethical Premise"
          >
            Memora does <strong className="text-slate-200">not</strong> bring a deceased
            person back to life, recreate consciousness, simulate sentience, or establish
            communication with the afterlife. It provides an AI-generated representation
            based on available, authorized information — with transparent AI identity
            disclosure at every level of interaction.
          </AlertBanner>
        </div>

        {/* Stat row */}
        <div className="mt-14 grid grid-cols-2 md:grid-cols-4 gap-px w-full max-w-3xl mx-auto rounded-xl overflow-hidden border border-white/[0.06] bg-white/[0.03]">
          {[
            { label: "Verification Stages", value: "7" },
            { label: "Evidence Tiers", value: "3" },
            { label: "Memory Sources", value: "Multi-modal" },
            { label: "AI Transparency", value: "Full" },
          ].map((stat) => (
            <div
              key={stat.label}
              className="flex flex-col items-center justify-center py-5 px-4 bg-[#07090e] border border-white/[0.05]"
            >
              <span className="font-extrabold text-xl md:text-2xl text-slate-100 mb-0.5 tracking-tight">
                {stat.value}
              </span>
              <span className="text-xs text-slate-500 font-mono text-center leading-tight">
                {stat.label}
              </span>
            </div>
          ))}
        </div>
      </div>

      {/* Scroll hint */}
      <div
        aria-hidden="true"
        className="absolute bottom-8 left-1/2 -translate-x-1/2 text-slate-600 flex flex-col items-center gap-1 animate-bounce"
      >
        <span className="text-xs font-mono tracking-widest uppercase">Scroll</span>
        <ChevronDown className="w-4 h-4" />
      </div>
    </section>
  );
}
