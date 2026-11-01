import { KeyRound, Server, Database, FileKey, ScrollText, Eye } from "lucide-react";
import { SectionLabel } from "@/components/ui/SectionLabel";
import { AlertBanner } from "@/components/ui/AlertBanner";
import type { PrivacySafeguard } from "@/types";

const SAFEGUARDS: PrivacySafeguard[] = [
  {
    icon: <KeyRound className="w-5 h-5" aria-hidden="true" />,
    title: "Multi-Stage Identity Verification",
    description:
      "A structured 7-stage pipeline validates all parties before any memorial access is granted — no shortcut pathways exist.",
  },
  {
    icon: <Server className="w-5 h-5" aria-hidden="true" />,
    title: "Backend-Enforced Authorization",
    description:
      "Every resource request is evaluated against authorization decisions at the backend level — not just at the UI level.",
  },
  {
    icon: <Database className="w-5 h-5" aria-hidden="true" />,
    title: "Private Data Segregation",
    description:
      "Verification and legal documents are architecturally isolated from conversational memory banks — they cannot co-mingle.",
  },
  {
    icon: <FileKey className="w-5 h-5" aria-hidden="true" />,
    title: "Encryption & Secure Access",
    description:
      "Proposed data encryption at rest and in transit. Access is restricted to verified, authorized users through strict session controls.",
  },
  {
    icon: <ScrollText className="w-5 h-5" aria-hidden="true" />,
    title: "Audit Logging",
    description:
      "System logging is designed to record administrative and access events, providing an audit trail for every significant operation.",
  },
  {
    icon: <Eye className="w-5 h-5" aria-hidden="true" />,
    title: "Relationship-Aware Restrictions",
    description:
      "Intimate interaction modes are restricted exclusively to verified adult legal spouses. This restriction is enforced at the resource level, not just the application layer.",
  },
];

export function PrivacySection() {
  return (
    <section
      id="privacy"
      className="section-padding border-t border-white/[0.05] relative overflow-hidden"
      aria-labelledby="privacy-heading"
    >
      {/* Subtle accent bg */}
      <div
        aria-hidden="true"
        className="pointer-events-none absolute inset-0 bg-gradient-to-br from-teal-950/10 via-transparent to-transparent"
      />

      <div className="section-container relative z-10">
        <div className="max-w-2xl mb-12">
          <SectionLabel>Privacy & Security</SectionLabel>
          <h2
            id="privacy-heading"
            className="text-3xl md:text-4xl font-extrabold text-slate-100 mb-4"
          >
            Privacy is not optional — it&apos;s the foundation
          </h2>
          <p className="text-slate-400 leading-relaxed">
            Memora is designed from the ground up with privacy as a foundational
            constraint, not an afterthought. Every safeguard below is a design
            and implementation objective — not a claim of completed production
            security certification.
          </p>
        </div>

        {/* Safeguards grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 mb-10">
          {SAFEGUARDS.map((item) => (
            <div
              key={item.title}
              className="glass-card p-6 flex gap-4 hover:border-teal-700/30"
            >
              <div className="flex-shrink-0 w-10 h-10 rounded-xl bg-teal-950/60 border border-teal-800/40 text-teal-400 flex items-center justify-center">
                {item.icon}
              </div>
              <div>
                <h3 className="font-semibold text-slate-100 text-sm mb-1.5 leading-snug">
                  {item.title}
                </h3>
                <p className="text-sm text-slate-400 leading-relaxed">
                  {item.description}
                </p>
              </div>
            </div>
          ))}
        </div>

        {/* Psychological safety note */}
        <div className="glass-card p-6 md:p-8 mb-6">
          <h3 className="font-bold text-slate-100 text-base mb-3">
            Psychological Safety Objectives
          </h3>
          <p className="text-slate-400 text-sm leading-relaxed">
            Psychological safety is a{" "}
            <strong className="text-slate-200">design objective and ongoing evaluation area</strong>
            , not a validated medical or psychological outcome. The platform
            aims to explore emotional safety boundaries, but automated distress
            detection and professional referral are proposed evaluation
            concepts — not implemented features. Memora does not make claims
            of clinical efficacy or grief therapy outcomes.
          </p>
        </div>

        <AlertBanner variant="critical" title="No Absolute Security Claim">
          No digital platform can guarantee absolute security or complete
          immunity from potential vulnerabilities. Memora&apos;s safeguards are
          design objectives and implementation targets — they are not claims of
          certified, audited, or absolute security.
        </AlertBanner>
      </div>
    </section>
  );
}
