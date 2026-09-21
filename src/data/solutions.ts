import { Droplets, Waves, Wrench, SprayCan, Sparkles, Package } from "lucide-react";
import type { SolutionCard } from "@/types/content";

/** "What We Do" -- six alternating card+photo rows, each linking to its full
 * detail section further down the page (see src/data/solutionDetails.ts). */
export const solutions: (SolutionCard & { icon: typeof Droplets })[] = [
  {
    id: "water-treatment",
    icon: Droplets,
    title: "Water Treatment",
    description:
      "Chemical solutions for cooling towers, boilers, chillers, RO systems, HVAC systems and specialized water treatment applications.",
    cta: "Explore Water Treatment",
    href: "#water-treatment-chemicals",
    image: { src: "/solutions/water-treatment.jpg", alt: "Industrial water treatment plant" },
    accent: "blue",
  },
  {
    id: "wastewater-treatment",
    icon: Waves,
    title: "Wastewater Treatment",
    description:
      "Solutions for industrial effluent and wastewater treatment, including coagulation, flocculation, pH control, decolorization and sludge management.",
    cta: "Explore Wastewater",
    href: "#wastewater-treatment-chemicals",
    image: { src: "/solutions/wastewater-treatment.jpg", alt: "Industrial wastewater clarifier" },
    accent: "teal",
  },
  {
    id: "specialty-maintenance",
    icon: Wrench,
    title: "Specialty Maintenance",
    description:
      "Industrial chemicals for cleaning, descaling, degreasing, equipment maintenance and process applications.",
    cta: "Explore Maintenance",
    href: "#industrial-maintenance-chemicals",
    image: { src: "/solutions/specialty-maintenance.jpg", alt: "Technician cleaning heat-exchanger tubes" },
    accent: "purple",
  },
  {
    id: "housekeeping",
    icon: SprayCan,
    title: "Housekeeping",
    description:
      "Professional cleaning solutions for floors, washrooms, surfaces, glass, kitchens and commercial facilities.",
    cta: "Explore Housekeeping",
    href: "#housekeeping-cleaning-chemicals",
    image: { src: "/solutions/housekeeping.jpg", alt: "Commercial floor cleaning" },
    accent: "blue",
  },
  {
    id: "fragrance-solutions",
    icon: Sparkles,
    title: "Fragrance Solutions",
    description:
      "Fragrance solutions designed for hospitality, commercial spaces, offices, retail environments and institutions.",
    cta: "Explore Fragrance",
    href: "#fragrance-solutions",
    image: { src: "/solutions/fragrance-solutions.jpg", alt: "Reed diffuser fragrance display" },
    accent: "purple",
  },
  {
    id: "custom-solutions",
    icon: Package,
    title: "Custom Solutions",
    description:
      "Industrial chemical solutions developed around specific application requirements, operating conditions and performance objectives.",
    cta: "Discuss Your Requirement",
    href: "#projects",
    image: { src: "/solutions/custom-solutions.jpg", alt: "Laboratory flasks and beakers" },
    accent: "blue",
  },
];

export const accentColors: Record<SolutionCard["accent"], string> = {
  blue: "var(--blue)",
  teal: "var(--teal)",
  purple: "#7c5cfc",
};
