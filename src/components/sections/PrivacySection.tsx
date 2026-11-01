import { KeyRound, Server, Database, FileKey, ScrollText, Eye } from "lucide-react";
import { SectionReveal } from "@/components/ui/SectionReveal";
import { AlertBanner } from "@/components/ui/AlertBanner";

const SAFEGUARDS = [
  { icon: <KeyRound   className="w-5 h-5" />, title: "Multi-Stage Identity Verification",  body: "A structured 7-stage pipeline validates all parties before any memorial access is granted — no shortcut pathways exist." },
  { icon: <Server     className="w-5 h-5" />, title: "Backend-Enforced Authorisation",     body: "Every resource request is evaluated against authorisation decisions at the backend level — not just at the UI layer." },
  { icon: <Database   className="w-5 h-5" />, title: "Private Data Segregation",           body: "Verification documents are architecturally isolated from conversational memory banks — they cannot co-mingle." },
  { icon: <FileKey    className="w-5 h-5" />, title: "Encryption & Secure Access",         body: "Proposed data encryption at rest and in transit. Access restricted to verified, authorised users through strict session controls." },
  { icon: <ScrollText className="w-5 h-5" />, title: "Audit Logging",                      body: "System logging records administrative and access events, providing an audit trail for every significant operation." },
  { icon: <Eye        className="w-5 h-5" />, title: "Relationship-Aware Restrictions",    body: "Intimate interaction modes are restricted exclusively to verified adult legal spouses — enforced at the resource level." },
];

export function PrivacySection() {
  return (
    <section
      id="privacy"
      className="section-layer section-padding"
      aria-labelledby="privacy-heading"
    >
      <div className="section-container">

        {/* Large statement */}
        <SectionReveal className="mb-14">
          <div className="holo-card p-8 md:p-12 lg:p-16 text-center"
            style={{ background: "linear-gradient(135deg, rgba(4,12,28,0.92), rgba(2,8,18,0.96))" }}>
            <div className="eyebrow justify-center mb-6">Privacy & Security</div>
            <h2 id="privacy-heading" className="font-extrabold mb-6"
              style={{ fontSize: "clamp(2rem,5vw,3.75rem)", lineHeight: 1.1 }}>
              Privacy is not optional.<br />
              <span className="cyan-text">It&apos;s the foundation.</span>
            </h2>
            <p style={{ fontSize: "clamp(0.95rem,1.4vw,1.1rem)", color: "var(--text-400)", lineHeight: 1.8,
              maxWidth: "58ch", margin: "0 auto" }}>
              Memora is designed from the ground up with privacy as a foundational constraint,
              not an afterthought. Every safeguard below is a design and implementation objective —
              not a claim of completed production security certification.
            </p>
          </div>
        </SectionReveal>

        {/* Safeguard 3-column grid */}
        <SectionReveal staggerChildren className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 mb-10">
          {SAFEGUARDS.map((s) => (
            <div key={s.title} className="glass-card reveal-child p-6 flex gap-4"
              style={{ borderColor: "rgba(20,184,166,0.12)" }}>
              <div className="flex-shrink-0 w-11 h-11 rounded-xl flex items-center justify-center"
                style={{ background: "rgba(20,184,166,0.08)", border: "1px solid rgba(20,184,166,0.25)", color: "var(--teal-300)" }}>
                {s.icon}
              </div>
              <div>
                <h3 style={{ fontSize: "0.9rem", fontWeight: 700, color: "var(--text-100)", marginBottom: "0.4rem", lineHeight: 1.3 }}>{s.title}</h3>
                <p style={{ fontSize: "0.8rem", color: "var(--text-500)", lineHeight: 1.75 }}>{s.body}</p>
              </div>
            </div>
          ))}
        </SectionReveal>

        <SectionReveal delay={100} className="mb-6">
          <div className="holo-card p-6 md:p-8">
            <h3 style={{ fontSize: "1rem", fontWeight: 700, color: "var(--text-100)", marginBottom: "0.75rem" }}>
              Psychological Safety Objectives
            </h3>
            <p style={{ fontSize: "0.875rem", color: "var(--text-400)", lineHeight: 1.8 }}>
              Psychological safety is a <strong style={{ color: "var(--text-200)" }}>design objective and ongoing evaluation area</strong>,
              not a validated medical or psychological outcome. Automated distress detection and professional referral
              are proposed evaluation concepts — not implemented features. Memora does not make claims of clinical
              efficacy or grief therapy outcomes.
            </p>
          </div>
        </SectionReveal>

        <SectionReveal delay={200}>
          <AlertBanner variant="critical" title="No Absolute Security Claim">
            No digital platform can guarantee absolute security or complete immunity from potential vulnerabilities.
            Memora&apos;s safeguards are design objectives and implementation targets — not claims of certified,
            audited, or absolute security.
          </AlertBanner>
        </SectionReveal>
      </div>
    </section>
  );
}
