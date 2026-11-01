import {
  UserCheck,
  Brain,
  Mic,
  Video,
  Lock,
  FileSearch,
  MessageSquareText,
  ShieldCheck,
} from "lucide-react";
import { SectionLabel } from "@/components/ui/SectionLabel";
import { FeatureCard } from "@/components/ui/FeatureCard";
import { AlertBanner } from "@/components/ui/AlertBanner";
import type { FeatureCardData } from "@/types";

const FEATURES: FeatureCardData[] = [
  {
    icon: <UserCheck className="w-5 h-5" aria-hidden="true" />,
    title: "7-Stage Verification Framework",
    description:
      "A structured pipeline verifying requester identity, deceased identity, death documentation, family relationship, adult eligibility, authorization decision, and resource-level access control.",
    accent: "indigo",
  },
  {
    icon: <Brain className="w-5 h-5" aria-hidden="true" />,
    title: "RAG Memory Engine",
    description:
      "Retrieval-Augmented Generation retrieves relevant evidence from authorized personal materials and applies output validation checks before delivering any response.",
    accent: "violet",
  },
  {
    icon: <FileSearch className="w-5 h-5" aria-hidden="true" />,
    title: "Three-Tier Evidence Attribution",
    description:
      "All information is transparently classified as Level A (direct evidence), Level B (family testimony), or Level C (AI inference) — and explicitly labeled for every user interaction.",
    accent: "teal",
  },
  {
    icon: <MessageSquareText className="w-5 h-5" aria-hidden="true" />,
    title: "Evidence-Grounded Conversation",
    description:
      "Conversational responses are grounded in retrieved records. Insufficient or conflicting evidence is surfaced explicitly rather than silently substituted with generated content.",
    accent: "indigo",
  },
  {
    icon: <Lock className="w-5 h-5" aria-hidden="true" />,
    title: "Memorial Profile Creation",
    description:
      "Authorized family members create profiles anchored by a mandatory reference photograph, with optional voice recordings, videos, personal correspondence, and family memories.",
    accent: "teal",
  },
  {
    icon: <ShieldCheck className="w-5 h-5" aria-hidden="true" />,
    title: "Relationship-Aware Access Control",
    description:
      "Resource-level authorization enforces access rules. Certain interaction registers are restricted exclusively to verified adult legal spouses — enforced at every request.",
    accent: "violet",
  },
  {
    icon: <Mic className="w-5 h-5" aria-hidden="true" />,
    title: "Voice Interaction (Proposed)",
    description:
      "Speech-to-text input and AI-synthesized text-to-speech output, with personalized voice representation subject to explicit authorization and available audio samples.",
    accent: "amber",
  },
  {
    icon: <Video className="w-5 h-5" aria-hidden="true" />,
    title: "AI Avatar Experience (Proposed)",
    description:
      "Visual representation based on the mandatory reference photograph, with potential facial animation and a real-time interactive avatar interface using WebRTC-compatible streaming.",
    accent: "amber",
  },
];

export function FeaturesSection() {
  return (
    <section
      id="features"
      className="section-padding border-t border-white/[0.05]"
      aria-labelledby="features-heading"
    >
      <div className="section-container">
        <div className="max-w-2xl mb-12">
          <SectionLabel>Platform Features</SectionLabel>
          <h2
            id="features-heading"
            className="text-3xl md:text-4xl font-extrabold text-slate-100 mb-4"
          >
            Built for trust, privacy, and transparency
          </h2>
          <p className="text-slate-400 leading-relaxed">
            Every feature of Memora is designed around verified access,
            evidence-grounded responses, and transparent AI disclosure.
            No feature operates without authorization.
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 mb-10">
          {FEATURES.map((feature) => (
            <FeatureCard key={feature.title} {...feature} />
          ))}
        </div>

        <AlertBanner variant="warning" title="Stage 1 Scope Boundary">
          The features above represent the planned architecture for Memora.{" "}
          <strong className="text-slate-200">Stage 1</strong> covers the
          foundation, design system, and landing page only. Backend
          authentication, identity verification, database integration, RAG
          pipeline, voice synthesis, and AI avatar generation belong to
          subsequent development stages and are not yet implemented.
        </AlertBanner>
      </div>
    </section>
  );
}
