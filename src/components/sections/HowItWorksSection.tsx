import { SectionLabel } from "@/components/ui/SectionLabel";
import type { HowItWorksStep } from "@/types";

const STEPS: HowItWorksStep[] = [
  {
    number: "01",
    phase: "Account & Identity",
    title: "Create Account & Submit Identity",
    description:
      "The requester creates a secure account and completes the first stage of identity verification, establishing who is requesting access to the platform.",
  },
  {
    number: "02",
    phase: "Seven-Stage Verification",
    title: "Verification & Eligibility Audit",
    description:
      "A structured 7-stage pipeline verifies the requester's identity, the deceased individual's identity, death documentation, family relationship, and applicable adult eligibility.",
  },
  {
    number: "03",
    phase: "Memorial Profile Creation",
    title: "Create Memorial Profile",
    description:
      "Authorized users create a memorial profile anchored by a mandatory reference photograph, with optional voice recordings, videos, messages, and family memories.",
  },
  {
    number: "04",
    phase: "Ingestion & Classification",
    title: "Memory Ingestion & Provenance Recording",
    description:
      "Uploaded materials are processed, categorized into evidence tiers (A, B, C), and stored in a private, isolated memory repository with provenance records.",
  },
  {
    number: "05",
    phase: "AI Memory Engine",
    title: "RAG Retrieval & Evidence Validation",
    description:
      "When a query is submitted, the RAG engine retrieves relevant memory records. An output validation step checks whether the response is grounded in the retrieved evidence.",
  },
  {
    number: "06",
    phase: "Grounded Response",
    title: "Evidence-Attributed Response Delivery",
    description:
      "Responses are delivered with transparent source attribution (Level A, B, or C). If evidence is insufficient or conflicting, the system communicates this clearly rather than generating unsupported content.",
  },
];

export function HowItWorksSection() {
  return (
    <section
      id="how-it-works"
      className="section-padding border-t border-white/[0.05]"
      aria-labelledby="how-it-works-heading"
    >
      <div className="section-container">
        <div className="max-w-2xl mb-12">
          <SectionLabel>Platform Workflow</SectionLabel>
          <h2
            id="how-it-works-heading"
            className="text-3xl md:text-4xl font-extrabold text-slate-100 mb-4"
          >
            How Memora works
          </h2>
          <p className="text-slate-400 leading-relaxed">
            Every interaction with Memora follows a verified, structured sequence
            — from initial account creation to evidence-grounded conversational
            interaction. No step is bypassed.
          </p>
        </div>

        {/* Timeline */}
        <div className="relative">
          {/* Vertical connector line — desktop */}
          <div
            aria-hidden="true"
            className="hidden md:block absolute left-[39px] top-10 bottom-10 w-px bg-gradient-to-b from-indigo-700/40 via-violet-700/30 to-transparent"
          />

          <ol className="flex flex-col gap-4" aria-label="How Memora works steps">
            {STEPS.map((step, i) => (
              <li
                key={step.number}
                className="relative flex gap-5 md:gap-6 items-start group"
              >
                {/* Step number */}
                <div
                  aria-label={`Step ${i + 1}`}
                  className="
                    flex-shrink-0 w-[78px] h-[78px]
                    md:w-[78px] md:h-[78px]
                    w-[64px] h-[64px]
                    hidden md:flex
                    items-center justify-center
                    rounded-xl border border-indigo-800/40 bg-indigo-950/50
                    font-mono font-bold text-indigo-400 text-sm
                    group-hover:border-indigo-600/60 group-hover:bg-indigo-950/70
                    transition-all duration-200
                    z-10 relative
                  "
                >
                  {step.number}
                </div>

                {/* Mobile number */}
                <div
                  aria-hidden="true"
                  className="md:hidden flex-shrink-0 w-8 h-8 rounded-lg bg-indigo-950/60 border border-indigo-800/40 flex items-center justify-center font-mono text-xs font-bold text-indigo-400 mt-1"
                >
                  {step.number}
                </div>

                {/* Content card */}
                <div className="flex-1 glass-card p-5 md:p-6 group-hover:border-indigo-700/30">
                  <div className="flex items-start gap-3 flex-wrap mb-2">
                    <h3 className="font-semibold text-slate-100 text-base leading-snug">
                      {step.title}
                    </h3>
                    <span className="font-mono text-[10px] font-semibold uppercase tracking-widest text-indigo-400 bg-indigo-950/60 border border-indigo-700/30 px-2 py-0.5 rounded-full mt-0.5 flex-shrink-0">
                      {step.phase}
                    </span>
                  </div>
                  <p className="text-sm text-slate-400 leading-relaxed">
                    {step.description}
                  </p>
                </div>
              </li>
            ))}
          </ol>
        </div>
      </div>
    </section>
  );
}
