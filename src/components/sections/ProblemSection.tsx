import { FolderOpen, TimerReset, ImageIcon, ShieldOff } from "lucide-react";
import { SectionReveal } from "@/components/ui/SectionReveal";
import { AlertBanner } from "@/components/ui/AlertBanner";

const PROBLEMS = [
  {
    icon: <FolderOpen className="w-6 h-6" />,
    num: "01",
    title: "Fragmented Legacy Materials",
    body: "Family memories are scattered across photographs, home videos, voice recordings, personal documents, and letters — with no central organisation, classification, or preservation mechanism.",
    color: "#06b6d4",
    glow: "rgba(6,182,212,0.06)",
  },
  {
    icon: <TimerReset className="w-6 h-6" />,
    num: "02",
    title: "Preservation Loss Over Time",
    body: "Physical materials degrade. Digital files become orphaned. Critical personal context and stories are lost across generational transitions as memories fade without structured preservation.",
    color: "#38bdf8",
    glow: "rgba(56,189,248,0.06)",
  },
  {
    icon: <ImageIcon className="w-6 h-6" />,
    num: "03",
    title: "Static Memorial Solutions",
    body: "Existing memorial platforms are flat archives — obituaries and photo albums — with no integrated, evidence-grounded conversational capability. Families cannot engage meaningfully with preserved materials.",
    color: "#06b6d4",
    glow: "rgba(6,182,212,0.06)",
  },
  {
    icon: <ShieldOff className="w-6 h-6" />,
    num: "04",
    title: "Privacy & Vulnerability Gaps",
    body: "Families lack a tightly controlled environment to preserve intimate memories. Existing solutions do not enforce verification, provenance, or access control at the level a sensitive memorial platform requires.",
    color: "#38bdf8",
    glow: "rgba(56,189,248,0.06)",
  },
];

export function ProblemSection() {
  return (
    <section
      id="problem"
      className="section-layer section-padding"
      aria-labelledby="problem-heading"
    >
      <div className="section-container">

        <SectionReveal className="max-w-3xl mx-auto text-center mb-16">
          <div className="eyebrow justify-center mb-5">The Challenge</div>
          <h2 id="problem-heading" className="font-extrabold mb-5"
            style={{ fontSize: "clamp(2rem,4.5vw,3.25rem)", lineHeight: 1.12 }}>
            Preserving personal legacy<br />
            <span className="cyan-text">is fundamentally broken</span>
          </h2>
          <p style={{ fontSize: "clamp(0.95rem,1.4vw,1.1rem)", color: "var(--text-400)", lineHeight: 1.8, maxWidth: "56ch", margin: "0 auto" }}>
            When a loved one passes, the memories, stories, and presence they leave behind
            are at risk of being lost, scattered, and forgotten. The tools available today
            fall far short of what families truly need.
          </p>
        </SectionReveal>

        <SectionReveal staggerChildren className="grid grid-cols-1 md:grid-cols-2 gap-5 mb-12">
          {PROBLEMS.map((p) => (
            <div key={p.num}
              className="holo-card reveal-child p-7 flex flex-col gap-5"
              style={{ background: `linear-gradient(150deg, ${p.glow.replace('0.06','0.12')} 0%, rgba(2,6,16,0.92) 100%)` }}>
              {/* Number + icon row */}
              <div className="flex items-start justify-between">
                <div className="w-12 h-12 rounded-xl flex items-center justify-center flex-shrink-0"
                  style={{ background: `${p.glow}`, border: `1px solid ${p.color}30`, color: p.color }}>
                  {p.icon}
                </div>
                <span style={{ fontFamily: "var(--font-mono)", fontSize: "2rem", fontWeight: 800,
                  color: `${p.color}18`, lineHeight: 1, letterSpacing: "-0.05em" }}>
                  {p.num}
                </span>
              </div>
              <div>
                <h3 style={{ fontSize: "1.05rem", fontWeight: 700, color: "var(--text-100)", marginBottom: "0.6rem", lineHeight: 1.3 }}>
                  {p.title}
                </h3>
                <p style={{ fontSize: "0.875rem", color: "var(--text-400)", lineHeight: 1.8 }}>{p.body}</p>
              </div>
            </div>
          ))}
        </SectionReveal>

        <SectionReveal delay={200}>
          <AlertBanner variant="success" title="How Memora Proposes to Address These Challenges">
            Memora combines a structured 7-stage verification framework with Retrieval-Augmented
            Generation (RAG) and evidence output validation to help families organise memories,
            record provenance, and generate grounded, transparent conversational responses based
            on what was actually authorised.
          </AlertBanner>
        </SectionReveal>
      </div>
    </section>
  );
}
