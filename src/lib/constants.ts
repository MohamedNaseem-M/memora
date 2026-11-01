import type { NavItem, FooterColumn } from "@/types";

export const NAV_ITEMS: NavItem[] = [
  { label: "How It Works", href: "#how-it-works" },
  { label: "Features", href: "#features" },
  { label: "Privacy", href: "#privacy" },
  { label: "Transparency", href: "#transparency" },
];

export const FOOTER_COLUMNS: FooterColumn[] = [
  {
    heading: "Platform",
    links: [
      { label: "How It Works", href: "#how-it-works" },
      { label: "Features", href: "#features" },
      { label: "Privacy & Security", href: "#privacy" },
      { label: "AI Transparency", href: "#transparency" },
    ],
  },
  {
    heading: "About",
    links: [
      { label: "Our Mission", href: "#hero" },
      { label: "Ethical Principles", href: "#transparency" },
      { label: "Research Architecture", href: "#how-it-works" },
      { label: "Development Roadmap", href: "#features" },
    ],
  },
  {
    heading: "Legal & Ethics",
    links: [
      { label: "Privacy Policy", href: "#" },
      { label: "Terms of Use", href: "#" },
      { label: "AI Disclosure", href: "#transparency" },
      { label: "Access Control Policy", href: "#privacy" },
    ],
  },
];

export const STAGE_STATUS = {
  current: "Stage 1 — Foundation",
  version: "v0.1.0",
  environment: "Google Antigravity",
};
