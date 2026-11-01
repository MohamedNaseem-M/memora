import { SectionReveal } from "@/components/ui/SectionReveal";
import { AlertBanner } from "@/components/ui/AlertBanner";

const TIERS = [
  {
    level: "A",
    name: "Direct Evidence",
    sub: "Primary Authority",
    accentColor: "#5eead4",
    borderClass: "border-l-4",
    borderColor: "#14b8a6",
    bgGlow: "rgba(20,184,166,0.07)",
    examples: ["Audio recordings made by the deceased","Handwritten journals or letters","Personal videos recorded by the deceased","Direct written correspondence"],
    desc: "Original material created or recorded directly by the deceased. This is the highest-authority source and carries the strongest evidentiary weight in any response.",
  },
  {
    level: "B",
    name: "Family Testimony",
    sub: "Attributed Secondary Source",
    accentColor: "#fcd34d",
    borderColor: "#f59e0b",
    bgGlow: "rgba(251,191,36,0.06)",
    examples: ["Shared memories from verified family","Anecdotes attributed to a named contributor","Family-contributed biographical context","Authorised personality or habit descriptions"],
    desc: "Memories, descriptions, and anecdotes provided by authorised family members. Explicitly attributed to their contributor — never presented as direct evidence.",
  },
  {
    level: "C",
    name: "AI Inference",
    sub: "AI-Generated Interpretation",
    accentColor: "#fda4af",
    borderColor: "#f43f5e",
    bgGlow: "rgba(244,63,94,0.06)",
    examples: ["Contextual synthesis of available records","AI-derived interpretations of themes","Inferred context from available evidence"],
    desc: "Contextual synthesis and AI-derived interpretations. Always explicitly identified as AI inference — NEVER presented as an authentic memory or direct statement.",
    warning: "Level C content is NEVER presented as authentic memory. It is always clearly identified as AI-generated inference.",
  },
];

const GROUNDING = [
  { label: "RAG Retrieval & Output Validation:",   text: "The system retrieves relevant records and applies output validation to evaluate whether responses are supported by retrieved evidence." },
  { label: "No Claim of Zero Hallucinations:",     text: "RAG significantly reduces unsupported generation, but cannot guarantee hallucinations are completely eliminated." },
  { label: "Insufficient Evidence Handling:",      text: "When reliable evidence is unavailable, the AI communicates that limitation clearly rather than inventing a response." },
  { label: "Conflicting Evidence Surfacing:",      text: "If ingested materials present conflicting accounts, the system surfaces the discrepancy rather than silently resolving it." },
];

export function TransparencySection() {
  return (
    <section
      id="transparency"
      className="section-layer section-padding"
      aria-labelledby="transparency-heading"
    >
      <div className="section-container">

        <SectionReveal className="max-w-3xl mx-auto text-center mb-16">
          <div className="eyebrow justify-center mb-5">AI Transparency</div>
          <h2 id="transparency-heading" className="font-extrabold mb-5"
            style={{ fontSize: "clamp(2rem,4.5vw,3.25rem)", lineHeight: 1.12 }}>
            You always know where<br />
            <span className="cyan-text">information comes from</span>
          </h2>
          <p style={{ fontSize: "clamp(0.95rem,1.4vw,1.1rem)", color: "var(--text-400)", lineHeight: 1.8, maxWidth: "56ch", margin: "0 auto" }}>
            Memora enforces a strict three-tier evidence classification model. Every response
            is labelled with its evidence source, and limitations are always communicated
            explicitly — never hidden.
          </p>
        </SectionReveal>

        {/* Evidence tier cards */}
        <div className="flex flex-col gap-5 mb-12">
          {TIERS.map((tier, i) => (
            <SectionReveal key={tier.level} delay={i * 80}>
              <div
                className="glass-card p-6 md:p-8"
                style={{
                  borderLeft: `4px solid ${tier.borderColor}`,
                  background: `linear-gradient(135deg, ${tier.bgGlow} 0%, rgba(4,10,22,0.88) 100%)`,
                }}
              >
                <div className="flex items-start gap-6 flex-col sm:flex-row">
                  {/* Level badge */}
                  <div className="flex-shrink-0 w-14 h-14 rounded-xl flex items-center justify-center font-mono font-black text-2xl"
                    style={{
                      background: tier.bgGlow,
                      color: tier.accentColor,
                      border: `1px solid ${tier.accentColor}30`,
                    }}>
                    {tier.level}
                  </div>

                  <div className="flex-1 min-w-0">
                    <div className="flex items-center gap-3 mb-3 flex-wrap">
                      <h3 style={{ fontSize: "1.05rem", fontWeight: 700, color: "var(--text-100)" }}>{tier.name}</h3>
                      <span style={{
                        fontFamily: "var(--font-mono)", fontSize: "0.6rem", fontWeight: 700,
                        textTransform: "uppercase", letterSpacing: "0.1em",
                        padding: "0.15rem 0.6rem", borderRadius: 999,
                        background: `${tier.bgGlow}`, color: tier.accentColor, border: `1px solid ${tier.accentColor}30`,
                      }}>
                        {tier.level} — {tier.sub}
                      </span>
                    </div>
                    <p style={{ fontSize: "0.875rem", color: "var(--text-400)", lineHeight: 1.8, marginBottom: "1rem" }}>
                      {tier.desc}
                    </p>
                    <div>
                      <p style={{ fontFamily: "var(--font-mono)", fontSize: "0.6rem", textTransform: "uppercase",
                        letterSpacing: "0.18em", color: "var(--text-600)", marginBottom: "0.5rem" }}>Examples</p>
                      <ul className="flex flex-col gap-1.5" role="list">
                        {tier.examples.map((ex) => (
                          <li key={ex} className="flex items-start gap-2"
                            style={{ fontSize: "0.875rem", color: "var(--text-400)" }}>
                            <span style={{ width: 4, height: 4, borderRadius: "50%", background: "var(--text-600)",
                              flexShrink: 0, marginTop: 8, display: "inline-block" }} aria-hidden="true" />
                            {ex}
                          </li>
                        ))}
                      </ul>
                    </div>
                    {tier.warning && (
                      <div className="mt-4 rounded-xl p-3" style={{ background: "rgba(244,63,94,0.08)",
                        border: "1px solid rgba(244,63,94,0.2)", fontSize: "0.8rem", color: "#fda4af" }}>
                        ⚠ {tier.warning}
                      </div>
                    )}
                  </div>
                </div>
              </div>
            </SectionReveal>
          ))}
        </div>

        {/* Grounding principles */}
        <SectionReveal delay={100} className="mb-6">
          <div className="holo-card p-6 md:p-8">
            <h3 style={{ fontSize: "1rem", fontWeight: 700, color: "var(--text-100)", marginBottom: "1.25rem" }}>
              AI Grounding, Limitations & Transparency
            </h3>
            <ul className="flex flex-col gap-4" role="list">
              {GROUNDING.map((g) => (
                <li key={g.label} className="flex items-start gap-3">
                  <span style={{ width: 6, height: 6, borderRadius: "50%", background: "var(--cyan-500)",
                    flexShrink: 0, marginTop: 7, display: "inline-block",
                    boxShadow: "0 0 6px rgba(6,182,212,0.8)" }} aria-hidden="true" />
                  <span style={{ fontSize: "0.875rem", color: "var(--text-400)", lineHeight: 1.75 }}>
                    <strong style={{ color: "var(--text-200)", fontWeight: 600 }}>{g.label}</strong>{" "}{g.text}
                  </span>
                </li>
              ))}
            </ul>
          </div>
        </SectionReveal>

        <SectionReveal delay={200}>
          <AlertBanner variant="info" title="Transparent AI Identity Disclosure">
            Memora requires that the AI nature of every interaction is disclosed clearly and continuously.
            Users are never misled into believing they are communicating with the deceased person directly.
            The platform is an AI-generated representation based on authorised materials — nothing more, and nothing less.
          </AlertBanner>
        </SectionReveal>
      </div>
    </section>
  );
}
