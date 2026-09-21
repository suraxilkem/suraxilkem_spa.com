import type { LucideIcon } from "lucide-react";

export interface IconTile {
  icon: LucideIcon;
  title: string;
  description: string;
}

export interface SolutionCard {
  id: string;
  title: string;
  description: string;
  cta: string;
  href: string;
  image: { src: string; alt: string };
  accent: "blue" | "teal" | "purple";
}

export interface ProcessStep {
  step: string;
  title: string;
  description: string;
  icon: LucideIcon;
}

export interface FaqItem {
  question: string;
  answer: string;
}

export interface SolutionSubItem {
  icon: LucideIcon;
  title: string;
  description: string;
}

export interface SolutionDetailSection {
  id: string;
  eyebrow?: string;
  heading: string;
  intro: string;
  items?: SolutionSubItem[];
  tags?: string[];
  cta: { label: string; href: string };
}
