import { Badge } from "@/components/ui/Badge";
import { SectionLabel } from "@/components/ui/SectionLabel";
import { AlertBanner } from "@/components/ui/AlertBanner";
import type { EvidenceTier } from "@/types";

const TIERS: EvidenceTier[] = [
  {
    level: "A",
    label: "Level A",
    color: "teal",
    title: "Direct Evidence",
    subtitle: "Primary Authority",
    description:
      "Original material created or recorded directly by the deceased. This is the highest-authority source and carries the strongest evidentiary weight in any response.",
    examples: [
      "Audio recordings made by the deceased",
      "Handwritten journals or letters",
      "Personal videos recorded by the deceased",
      "Direct written correspondence",
    ],
  },
  {
    level: "B",
    label: "Level B",
    color: "amber",
    title: "Family Testimony",
    subtitle: "Attributed Secondary Source",
    description:
      "Memories, descriptions, and anecdotes provided by authorized family members. These are explicitly attributed to their contributor — never presented as direct evidence.",
    examples: [
      "Shared memories from verified family",
      "Anecdotes attributed to a named contributor",
      "Family-contributed biographical context",
      "Authorized descriptions of personality or habits",
    ],
  },
  {
    level: "C",
    label: "Level C",
    color: "rose",
    title: "AI Inference",
    subtitle: "AI-Generated Interpretation",
    description:
      "Contextual synthesis and AI-derived interpretations. Always explicitly identified as AI inference — never presented as an authentic memory or direct statement from the deceased.",
    examples: [
      "Contextual synthesis of available records",
      "AI-derived interpretations of themes",
      "Inferred context from available evidence",
    ],
    warning:
      "Level C content is NEVER presented as authentic memory or a direct statement. It is always clearly identified as AI-generated inference.",
  },
];

const tierBorderMap = {
  teal:  "border-l-teal-500",
  amber: "border-l-amber-500",
  rose:  "border-l-rose-500",
};

const tierBadgeMap: Record<string, "teal" | "amber" | "rose"> = {
  teal: "teal",
  amber: "amber",
  rose: "rose",
};

export function TransparencySection() {
  return (
    <section
      id="transparency"
      className="section-padding border-t border-white/[0.05]"
      aria-labelledby="transparency-heading"
    >
      <div className="section-container">
        <div className="max-w-2xl mb-12">
          <SectionLabel>AI Transparency</SectionLabel>
          <h2
            id="transparency-heading"
            className="text-3xl md:text-4xl font-extrabold text-slate-100 mb-4"
          >
            You always know where information comes from
          </h2>
          <p className="text-slate-400 leading-relaxed">
            Memora enforces a strict three-tier evidence classification model.
            Every response is labeled with its evidence source, and limitations
            are always communicated explicitly — never hidden.
          </p>
        </div>

        {/* Three evidence tiers */}
        <div className="flex flex-col gap-5 mb-10">
          {TIERS.map((tier) => (
            <div
              key={tier.level}
              className={`glass-card p-6 md:p-8 border-l-4 ${tierBorderMap[tier.color]}`}
            >
              <div className="flex items-start gap-4 flex-wrap">
                <div className="flex-shrink-0">
                  <div
                    className="w-12 h-12 rounded-xl flex items-center justify-center font-mono font-black text-lg"
                    style={{
                      background:
                        tier.color === "teal"
                          ? "rgba(20,184,166,0.1)"
                          : tier.color === "amber"
                          ? "rgba(251,191,36,0.1)"
                          : "rgba(244,63,94,0.1)",
                      color:
                        tier.color === "teal"
                          ? "#5eead4"
                          : tier.color === "amber"
                          ? "#fcd34d"
                          : "#fda4af",
                    }}
                    aria-label={`Evidence ${tier.label}`}
                  >
                    {tier.level}
                  </div>
                </div>
                <div className="flex-1 min-w-0">
                  <div className="flex items-center gap-3 mb-2 flex-wrap">
                    <h3 className="font-bold text-slate-100 text-base">{tier.title}</h3>
                    <Badge variant={tierBadgeMap[tier.color]} size="sm">
                      {tier.label} — {tier.subtitle}
                    </Badge>
                  </div>
                  <p className="text-sm text-slate-400 leading-relaxed mb-4">
                    {tier.description}
                  </p>
                  <div>
                    <p className="text-xs font-mono font-semibold uppercase tracking-widest text-slate-500 mb-2">
                      Examples
                    </p>
                    <ul className="flex flex-col gap-1" role="list">
                      {tier.examples.map((ex) => (
                        <li
                          key={ex}
                          className="text-sm text-slate-400 flex items-start gap-2"
                        >
                          <span
                            className="mt-1.5 w-1 h-1 rounded-full bg-slate-600 flex-shrink-0"
                            aria-hidden="true"
                          />
                          {ex}
                        </li>
                      ))}
                    </ul>
                  </div>
                  {tier.warning && (
                    <div className="mt-4 rounded-lg bg-rose-950/20 border border-rose-800/30 px-4 py-3 text-sm text-rose-300">
                      ⚠ {tier.warning}
                    </div>
                  )}
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* AI grounding note */}
        <div className="glass-card p-6 md:p-8 mb-6">
          <h3 className="font-bold text-slate-100 text-base mb-3">
            AI Grounding, Limitations & Transparency
          </h3>
          <ul className="flex flex-col gap-3">
            {[
              {
                label: "RAG Retrieval & Output Validation:",
                text: "The system retrieves relevant records and applies output validation checks to evaluate whether responses are supported by the retrieved evidence.",
              },
              {
                label: "No Claim of Zero Hallucinations:",
                text: "RAG significantly reduces unsupported generation, but cannot guarantee that hallucinations are completely eliminated.",
              },
              {
                label: "Insufficient Evidence Handling:",
                text: "When reliable evidence is unavailable, the AI must communicate that limitation clearly rather than inventing a response.",
              },
              {
                label: "Conflicting Evidence Surfacing:",
                text: "If ingested materials present conflicting accounts, the system surfaces the discrepancy rather than silently resolving it.",
              },
            ].map((item) => (
              <li key={item.label} className="flex items-start gap-3 text-sm">
                <span
                  className="mt-1.5 w-1.5 h-1.5 rounded-full bg-indigo-500 flex-shrink-0"
                  aria-hidden="true"
                />
                <span className="text-slate-400">
                  <strong className="text-slate-200 font-semibold">{item.label}</strong>{" "}
                  {item.text}
                </span>
              </li>
            ))}
          </ul>
        </div>

        <AlertBanner variant="info" title="Transparent AI Identity Disclosure">
          Memora requires that the AI nature of every interaction is disclosed
          clearly and continuously. Users are never misled into believing they
          are communicating with the deceased person directly. The platform is
          an AI-generated representation based on authorized materials — nothing
          more, and nothing less.
        </AlertBanner>
      </div>
    </section>
  );
}
