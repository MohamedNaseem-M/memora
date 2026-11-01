import { FolderOpen, TimerReset, ImageIcon, ShieldOff } from "lucide-react";
import { SectionLabel } from "@/components/ui/SectionLabel";
import { FeatureCard } from "@/components/ui/FeatureCard";
import { AlertBanner } from "@/components/ui/AlertBanner";
import type { FeatureCardData } from "@/types";

const PROBLEMS: FeatureCardData[] = [
  {
    icon: <FolderOpen className="w-5 h-5" aria-hidden="true" />,
    title: "Fragmented Legacy Materials",
    description:
      "Important family memories are scattered across photographs, home videos, voice recordings, messages, personal documents, and letters — without central organization.",
    accent: "indigo",
  },
  {
    icon: <TimerReset className="w-5 h-5" aria-hidden="true" />,
    title: "Preservation Loss Over Time",
    description:
      "Materials degrade and critical personal context is lost across generational transitions as memories and records fade without structured preservation.",
    accent: "violet",
  },
  {
    icon: <ImageIcon className="w-5 h-5" aria-hidden="true" />,
    title: "Static Memorial Solutions",
    description:
      "Existing digital memorial solutions are typically flat, static archives — obituaries and photo albums — with no integrated, evidence-grounded conversational experience.",
    accent: "teal",
  },
  {
    icon: <ShieldOff className="w-5 h-5" aria-hidden="true" />,
    title: "Privacy & Vulnerability Gaps",
    description:
      "Families lack a privacy-conscious, tightly controlled environment to preserve intimate memories without exposing digital footprints to unauthorized access.",
    accent: "amber",
  },
];

export function ProblemSection() {
  return (
    <section
      id="problem"
      className="section-padding border-t border-white/[0.05]"
      aria-labelledby="problem-heading"
    >
      <div className="section-container">
        <div className="max-w-2xl mb-12">
          <SectionLabel>The Challenge</SectionLabel>
          <h2
            id="problem-heading"
            className="text-3xl md:text-4xl font-extrabold text-slate-100 mb-4"
          >
            Preserving personal legacy is broken
          </h2>
          <p className="text-slate-400 leading-relaxed">
            When a loved one passes, the memories, stories, and presence they
            leave behind are at risk of being lost, scattered, or forgotten. The
            tools available today fall far short of what families truly need.
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 mb-10">
          {PROBLEMS.map((problem) => (
            <FeatureCard key={problem.title} {...problem} />
          ))}
        </div>

        <AlertBanner variant="success" title="How Memora Proposes to Address These Challenges">
          Memora combines a structured 7-stage verification framework with
          Retrieval-Augmented Generation (RAG) and evidence output validation to
          help families organize memories, record provenance, and generate
          grounded, transparent conversational responses based on what was
          actually authorized.
        </AlertBanner>
      </div>
    </section>
  );
}
