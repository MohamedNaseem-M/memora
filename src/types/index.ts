// ─── Shared UI Types ─────────────────────────────────────────────────────────

export interface NavItem {
  label: string;
  href: string;
}

export interface FeatureCardData {
  icon: React.ReactNode;
  title: string;
  description: string;
  accent?: "indigo" | "teal" | "violet" | "amber";
}

export interface HowItWorksStep {
  number: string;
  phase: string;
  title: string;
  description: string;
}

export interface EvidenceTier {
  level: "A" | "B" | "C";
  label: string;
  color: "teal" | "amber" | "rose";
  title: string;
  subtitle: string;
  description: string;
  examples: string[];
  warning?: string;
}

export interface PrivacySafeguard {
  icon: React.ReactNode;
  title: string;
  description: string;
}

export interface FooterLink {
  label: string;
  href: string;
}

export interface FooterColumn {
  heading: string;
  links: FooterLink[];
}
