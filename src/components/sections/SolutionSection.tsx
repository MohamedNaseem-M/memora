import { SectionReveal } from "@/components/ui/SectionReveal";

const PILLARS = [
  {
    n: "01",
    title: "Authorised Memory Preservation",
    body: "Verified family members submit personal materials — recordings, letters, videos, photographs — into a structured, private memory repository. Every item is classified by evidence tier and stored with full provenance.",
    accent: "#06b6d4",
  },
  {
    n: "02",
    title: "Evidence-Grounded AI Synthesis",
    body: "A Retrieval-Augmented Generation engine retrieves relevant records and applies output validation. Responses are grounded in what was actually authorised — not freely generated from model weights alone.",
    accent: "#38bdf8",
  },
  {
    n: "03",
    title: "Transparent Source Attribution",
    body: "Every interaction explicitly labels its evidence source: Level A (direct), Level B (family testimony), or Level C (AI inference). No information is presented without clear attribution.",
    accent: "#67e8f9",
  },
];

export function SolutionSection() {
  return (
    <section
      id="solution"
      className="section-layer section-padding"
      aria-labelledby="solution-heading"
    >
      {/* Section atmospheric accent */}
      <div aria-hidden="true" className="absolute inset-0 pointer-events-none"
        style={{ background: "radial-gradient(ellipse 60% 50% at 50% 60%, rgba(6,182,212,0.035) 0%, transparent 70%)", zIndex: 0 }} />

      <div className="section-container relative" style={{ zIndex: 1 }}>

        <SectionReveal className="max-w-3xl mx-auto text-center mb-16">
          <div className="eyebrow justify-center mb-5">The Memora Solution</div>
          <h2 id="solution-heading" className="font-extrabold mb-5"
            style={{ fontSize: "clamp(2rem,4.5vw,3.25rem)", lineHeight: 1.12 }}>
            AI memory that&apos;s grounded,<br />
            <span className="cyan-text">transparent, and verified</span>
          </h2>
          <p style={{ fontSize: "clamp(0.95rem,1.4vw,1.1rem)", color: "var(--text-400)", lineHeight: 1.8, maxWidth: "58ch", margin: "0 auto" }}>
            Memora replaces scattered archives and static memorial pages with a single,
            verified, privacy-conscious platform — where every memory interaction is
            evidence-attributed and every AI response is transparently labelled.
          </p>
        </SectionReveal>

        {/* Three pillars — horizontal on desktop */}
        <SectionReveal staggerChildren className="grid grid-cols-1 md:grid-cols-3 gap-5 mb-14">
          {PILLARS.map((p) => (
            <div key={p.n} className="holo-card p-7 flex flex-col gap-5 reveal-child"
              style={{ background: `linear-gradient(160deg, rgba(4,12,28,0.90) 0%, rgba(2,6,16,0.95) 100%)` }}>
              <div className="flex items-center gap-3">
                <span style={{ fontFamily: "var(--font-mono)", fontSize: "0.68rem", fontWeight: 700,
                  color: p.accent, letterSpacing: "0.1em" }}>{p.n}</span>
                <div style={{ flex: 1, height: 1, background: `linear-gradient(90deg, ${p.accent}40, transparent)` }} />
              </div>
              <h3 style={{ fontSize: "1.05rem", fontWeight: 700, color: "var(--text-100)", lineHeight: 1.3 }}>{p.title}</h3>
              <p style={{ fontSize: "0.875rem", color: "var(--text-400)", lineHeight: 1.8 }}>{p.body}</p>
              <div style={{ marginTop: "auto", height: 2, borderRadius: 2,
                background: `linear-gradient(90deg, ${p.accent}, transparent)`, opacity: 0.6 }} />
            </div>
          ))}
        </SectionReveal>

        {/* Wide quote / statement */}
        <SectionReveal delay={200}>
          <div className="holo-card p-8 md:p-10 text-center"
            style={{ background: "linear-gradient(135deg, rgba(4,12,28,0.92) 0%, rgba(2,8,20,0.96) 100%)" }}>
            <p style={{ fontSize: "clamp(1.05rem,1.8vw,1.3rem)", color: "var(--text-200)", fontStyle: "italic",
              lineHeight: 1.7, maxWidth: "70ch", margin: "0 auto" }}>
              &quot;Memora does not bring a deceased person back to life, recreate human consciousness,
              simulate sentience, or establish communication with the afterlife. It provides an
              AI-generated representation based on available and authorised information.&quot;
            </p>
            <div className="mt-5" style={{ fontFamily: "var(--font-mono)", fontSize: "0.68rem",
              color: "var(--text-500)", letterSpacing: "0.12em", textTransform: "uppercase" }}>
              Core Ethical Boundary — Memora Research Framework
            </div>
          </div>
        </SectionReveal>
      </div>
    </section>
  );
}
