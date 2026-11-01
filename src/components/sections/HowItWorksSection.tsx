import { SectionReveal } from "@/components/ui/SectionReveal";

const STEPS = [
  { n: "01", phase: "Onboarding",  title: "Create Account & Submit Identity",         body: "The requester creates a secure account and completes the first stage of identity verification, establishing who is requesting access to the platform." },
  { n: "02", phase: "Verification",title: "Seven-Stage Eligibility Audit",            body: "A structured pipeline verifies requester identity, deceased identity, death documentation, family relationship, and adult eligibility before any access is granted." },
  { n: "03", phase: "Ingestion",   title: "Create Memorial Profile",                  body: "Authorised users create a profile anchored by a mandatory reference photograph, with optional voice recordings, videos, messages, and family memories." },
  { n: "04", phase: "Processing",  title: "Memory Ingestion & Tier Classification",   body: "Uploaded materials are processed, categorised into evidence tiers (A, B, C), and stored in a private, isolated memory repository with full provenance records." },
  { n: "05", phase: "AI Engine",   title: "RAG Retrieval & Evidence Validation",      body: "When a query is submitted, the RAG engine retrieves relevant memory records. An output validation step checks whether the response is grounded in retrieved evidence." },
  { n: "06", phase: "Response",    title: "Evidence-Attributed Response Delivery",    body: "Responses are delivered with transparent source attribution (Level A, B, or C). Insufficient or conflicting evidence is communicated explicitly — never silently substituted." },
];

export function HowItWorksSection() {
  return (
    <section
      id="how-it-works"
      className="section-layer section-padding"
      aria-labelledby="how-it-works-heading"
    >
      <div className="section-container">

        <SectionReveal className="max-w-3xl mx-auto text-center mb-16">
          <div className="eyebrow justify-center mb-5">Platform Workflow</div>
          <h2 id="how-it-works-heading" className="font-extrabold mb-5"
            style={{ fontSize: "clamp(2rem,4.5vw,3.25rem)", lineHeight: 1.12 }}>
            How Memora works —<br />
            <span className="cyan-text">step by verified step</span>
          </h2>
          <p style={{ fontSize: "clamp(0.95rem,1.4vw,1.1rem)", color: "var(--text-400)", lineHeight: 1.8, maxWidth: "56ch", margin: "0 auto" }}>
            Every interaction follows a verified, structured sequence. No step is bypassed.
            No access is granted without passing the full eligibility pipeline.
          </p>
        </SectionReveal>

        {/* Steps — single column with connecting line on left */}
        <div className="relative max-w-2xl mx-auto">
          {/* Vertical connector line */}
          <div aria-hidden="true"
            className="absolute top-6 bottom-6 pointer-events-none hidden md:block"
            style={{ left: "1.6rem", width: 1,
              background: "linear-gradient(to bottom, transparent, rgba(6,182,212,0.3) 10%, rgba(6,182,212,0.3) 90%, transparent)" }} />

          <div className="flex flex-col gap-5">
            {STEPS.map((step, i) => (
              <SectionReveal key={step.n} delay={i * 55}>
                <div className="step-card p-6 flex gap-5 items-start">
                  {/* Number node */}
                  <div className="flex-shrink-0 relative">
                    <div className="w-12 h-12 rounded-xl flex items-center justify-center font-mono font-black text-sm"
                      style={{
                        background: "rgba(6,182,212,0.08)",
                        border: "1px solid rgba(6,182,212,0.35)",
                        color: "var(--cyan-400)",
                        boxShadow: "0 0 14px rgba(6,182,212,0.18)",
                        position: "relative", zIndex: 1,
                      }}>
                      {step.n}
                    </div>
                  </div>
                  {/* Content */}
                  <div className="flex-1 min-w-0 pt-1">
                    <div style={{ fontFamily: "var(--font-mono)", fontSize: "0.62rem", fontWeight: 600,
                      textTransform: "uppercase", letterSpacing: "0.18em", color: "var(--cyan-500)",
                      marginBottom: "0.3rem" }}>
                      {step.phase}
                    </div>
                    <h3 style={{ fontSize: "1rem", fontWeight: 700, color: "var(--text-100)",
                      lineHeight: 1.25, marginBottom: "0.5rem" }}>
                      {step.title}
                    </h3>
                    <p style={{ fontSize: "0.875rem", color: "var(--text-400)", lineHeight: 1.75 }}>
                      {step.body}
                    </p>
                  </div>
                </div>
              </SectionReveal>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
