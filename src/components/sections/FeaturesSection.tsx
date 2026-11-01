import {
  UserCheck, Brain, FileSearch, MessageSquareText,
  Lock, ShieldCheck, Mic, Video,
} from "lucide-react";
import { SectionReveal } from "@/components/ui/SectionReveal";
import { AlertBanner } from "@/components/ui/AlertBanner";

const FEATURES = [
  { icon: <UserCheck  className="w-5 h-5" />, title: "7-Stage Verification Framework",       body: "A structured pipeline verifying requester identity, deceased identity, death documentation, relationship, adult eligibility, authorisation, and resource-level access.",   tag: "Core",        accent: "#06b6d4" },
  { icon: <Brain      className="w-5 h-5" />, title: "RAG Memory Engine",                    body: "Retrieval-Augmented Generation retrieves relevant evidence from authorised personal materials and applies output validation checks before any response is delivered.",    tag: "AI Core",     accent: "#38bdf8" },
  { icon: <FileSearch className="w-5 h-5" />, title: "Three-Tier Evidence Attribution",      body: "All information is transparently classified as Level A (direct), Level B (testimony), or Level C (AI inference) — labelled explicitly at every interaction.",            tag: "Transparency",accent: "#06b6d4" },
  { icon: <MessageSquareText className="w-5 h-5" />, title: "Evidence-Grounded Conversation", body: "Responses are grounded in retrieved records. Insufficient or conflicting evidence is surfaced explicitly — never silently replaced with generated content.",           tag: "Conversation", accent: "#38bdf8" },
  { icon: <Lock       className="w-5 h-5" />, title: "Memorial Profile Creation",            body: "Authorised family members create profiles anchored by a mandatory reference photograph, with optional voice, video, correspondence, and personal memories.",            tag: "Profile",     accent: "#06b6d4" },
  { icon: <ShieldCheck className="w-5 h-5" />, title: "Relationship-Aware Access Control",  body: "Resource-level authorisation enforces strict access rules. Certain interaction registers are restricted exclusively to verified adult legal spouses.",                  tag: "Privacy",     accent: "#38bdf8" },
  { icon: <Mic        className="w-5 h-5" />, title: "Voice Interaction",                    body: "Speech-to-text input and AI-synthesised voice output, with personalised voice representation subject to explicit authorisation and available audio samples.",           tag: "Proposed",    accent: "#06b6d4" },
  { icon: <Video      className="w-5 h-5" />, title: "AI Avatar Experience",                 body: "Visual representation based on the mandatory reference photograph, with potential facial animation and real-time interactive avatar interface.",                          tag: "Proposed",    accent: "#38bdf8" },
];

export function FeaturesSection() {
  return (
    <section
      id="features"
      className="section-layer section-padding"
      aria-labelledby="features-heading"
    >
      <div className="section-container">

        <SectionReveal className="max-w-3xl mx-auto text-center mb-16">
          <div className="eyebrow justify-center mb-5">Platform Features</div>
          <h2 id="features-heading" className="font-extrabold mb-5"
            style={{ fontSize: "clamp(2rem,4.5vw,3.25rem)", lineHeight: 1.12 }}>
            Built for trust,<br />
            <span className="cyan-text">privacy, and transparency</span>
          </h2>
          <p style={{ fontSize: "clamp(0.95rem,1.4vw,1.1rem)", color: "var(--text-400)", lineHeight: 1.8, maxWidth: "56ch", margin: "0 auto" }}>
            Every feature is designed around verified access, evidence-grounded responses,
            and transparent AI disclosure. No feature operates without authorisation.
          </p>
        </SectionReveal>

        <SectionReveal staggerChildren className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 mb-12">
          {FEATURES.map((f) => (
            <div key={f.title} className="holo-card reveal-child p-5 flex flex-col gap-4">
              <div className="flex items-start justify-between gap-2">
                <div className="w-11 h-11 rounded-xl flex items-center justify-center flex-shrink-0"
                  style={{ background: `${f.accent}12`, border: `1px solid ${f.accent}30`, color: f.accent }}>
                  {f.icon}
                </div>
                <span style={{
                  fontFamily: "var(--font-mono)", fontSize: "0.58rem", fontWeight: 700,
                  textTransform: "uppercase", letterSpacing: "0.1em",
                  padding: "0.2rem 0.6rem", borderRadius: 999,
                  background: `${f.accent}12`, color: f.accent, border: `1px solid ${f.accent}25`,
                  whiteSpace: "nowrap",
                }}>
                  {f.tag}
                </span>
              </div>
              <div>
                <h3 style={{ fontSize: "0.9rem", fontWeight: 700, color: "var(--text-100)", marginBottom: "0.5rem", lineHeight: 1.3 }}>
                  {f.title}
                </h3>
                <p style={{ fontSize: "0.8rem", color: "var(--text-500)", lineHeight: 1.75 }}>{f.body}</p>
              </div>
              <div style={{ marginTop: "auto", height: 1.5, borderRadius: 2,
                background: `linear-gradient(90deg, ${f.accent}50, transparent)` }} />
            </div>
          ))}
        </SectionReveal>

        <SectionReveal delay={300}>
          <AlertBanner variant="warning" title="Stage 1 Scope Boundary">
            The features above represent the planned architecture for Memora.{" "}
            <strong className="text-slate-200">Stage 1</strong> covers the foundation,
            design system, and landing page only. Backend authentication, database, RAG
            pipeline, voice synthesis, and AI avatar generation belong to subsequent stages.
          </AlertBanner>
        </SectionReveal>
      </div>
    </section>
  );
}
