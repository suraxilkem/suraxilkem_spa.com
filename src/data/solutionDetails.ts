import {
  Waves,
  ShieldCheck,
  Droplets,
  FlaskConical,
  SprayCan,
  BadgeCheck,
  Sparkles,
  ClipboardList,
  Wrench,
  Factory,
  Search,
  Package,
  Building2,
  CircleCheck,
} from "lucide-react";
import type { ProcessStep, SolutionDetailSection } from "@/types/content";

/** "Know More Details about Our Chemical Solutions" -- full sections, one per
 * solution card in src/data/solutions.ts. Anchor `id`s match the future
 * standalone-page slugs in src/config/site.ts (`futureSolutionPages`) exactly. */
export const solutionDetails: SolutionDetailSection[] = [
  {
    id: "water-treatment-chemicals",
    heading: "Water Treatment Chemicals for Critical Systems",
    intro:
      "Water quality directly affects equipment performance, operating efficiency and maintenance requirements. Suraxil provides treatment solutions across key industrial water systems, including cooling tower chemicals, boiler water treatment chemicals, chiller water treatment chemicals, RO water treatment chemicals and HVAC cleaning chemicals.",
    items: [
      {
        icon: Waves,
        title: "Cooling Tower Treatment",
        description:
          "Solutions for scale control, corrosion control, microbiological control, biocide treatment and water conditioning.",
      },
      {
        icon: ShieldCheck,
        title: "Boiler Water Treatment",
        description:
          "Solutions supporting scale prevention, corrosion control, oxygen management, pH control and boiler system protection.",
      },
      {
        icon: Droplets,
        title: "Chiller Treatment",
        description: "Chemical solutions for maintaining chiller water systems and supporting efficient operation.",
      },
      {
        icon: FlaskConical,
        title: "RO Water Treatment",
        description:
          "Solutions addressing membrane protection, scaling, fouling, dechlorination and pretreatment requirements.",
      },
      {
        icon: SprayCan,
        title: "HVAC Cleaning & Treatment",
        description: "Solutions for HVAC systems, cleaning, flushing, passivation and related treatment requirements.",
      },
      {
        icon: BadgeCheck,
        title: "Specialized Water Treatment",
        description: "Application-focused chemical solutions for specific water quality and treatment challenges.",
      },
    ],
    cta: { label: "Talk to a Water Treatment Specialist", href: "#contact" },
  },
  {
    id: "wastewater-treatment-chemicals",
    heading: "Wastewater Treatment Solutions for Industrial Applications",
    intro:
      "Effective wastewater treatment requires the right chemistry for the right process. Suraxil provides chemical solutions across different stages of industrial wastewater and effluent treatment, including industrial wastewater treatment chemicals, ETP chemicals and STP chemicals.",
    items: [
      {
        icon: Droplets,
        title: "Coagulation",
        description: "Chemical solutions to support the separation of suspended and colloidal matter.",
      },
      {
        icon: Waves,
        title: "Flocculation",
        description: "Solutions designed to support effective floc formation and downstream separation.",
      },
      {
        icon: Sparkles,
        title: "Decolorization",
        description: "Treatment solutions for wastewater colour reduction and process requirements.",
      },
      {
        icon: ClipboardList,
        title: "pH Control",
        description: "Chemical solutions for maintaining required pH conditions throughout treatment processes.",
      },
      {
        icon: FlaskConical,
        title: "Biological Treatment",
        description: "Chemical support solutions for biological wastewater treatment applications.",
      },
      {
        icon: Wrench,
        title: "Sludge Management",
        description: "Solutions supporting sludge handling and treatment requirements.",
      },
      {
        icon: Factory,
        title: "ETP & Industrial Effluent",
        description: "Application-focused chemical solutions for industrial effluent treatment systems.",
      },
    ],
    cta: { label: "Discuss Your Wastewater Requirement", href: "#contact" },
  },
  {
    id: "industrial-maintenance-chemicals",
    heading: "Keep Equipment Clean. Keep Operations Moving.",
    intro:
      "Industrial equipment and processes require regular cleaning and maintenance to maintain performance. Suraxil's industrial maintenance chemicals cover descaling chemicals and degreasing chemicals for everyday operating requirements.",
    items: [
      {
        icon: SprayCan,
        title: "Descaling",
        description: "Solutions for removing mineral deposits and scale buildup.",
      },
      {
        icon: Sparkles,
        title: "Degreasing",
        description: "Chemical solutions for removing oils, grease and industrial residues.",
      },
      {
        icon: Factory,
        title: "Industrial Cleaning",
        description: "Cleaning solutions for industrial environments, equipment and process applications.",
      },
      {
        icon: Wrench,
        title: "Equipment Cleaning",
        description: "Application-focused chemicals for equipment maintenance and cleaning.",
      },
      {
        icon: ShieldCheck,
        title: "Corrosion Management",
        description: "Solutions supporting corrosion control and equipment protection.",
      },
      {
        icon: ClipboardList,
        title: "Process Cleaning",
        description: "Specialized chemical solutions for process-related cleaning requirements.",
      },
    ],
    cta: { label: "Find a Maintenance Solution", href: "#contact" },
  },
  {
    id: "housekeeping-cleaning-chemicals",
    heading: "Professional Cleaning Solutions for Every Facility.",
    intro:
      "From daily maintenance to specialized cleaning requirements, Suraxil provides housekeeping chemicals for professional environments including hotels, offices, hospitals, institutions, commercial buildings and facilities.",
    items: [
      {
        icon: Sparkles,
        title: "Floor Care",
        description: "Cleaning and maintenance solutions for different flooring applications.",
      },
      {
        icon: Droplets,
        title: "Washroom Care",
        description: "Solutions for washroom cleaning and maintenance.",
      },
      {
        icon: SprayCan,
        title: "Surface Cleaning",
        description: "Cleaning solutions for common commercial and institutional surfaces.",
      },
      {
        icon: Search,
        title: "Glass Cleaning",
        description: "Solutions for glass and transparent surfaces.",
      },
      {
        icon: Package,
        title: "Kitchen & Utility Cleaning",
        description: "Cleaning solutions for kitchens, utility areas and supporting facilities.",
      },
      {
        icon: Building2,
        title: "Facility Care",
        description: "Solutions for maintaining clean and professional commercial environments.",
      },
    ],
    cta: { label: "Talk to a Specialist", href: "#contact" },
  },
  {
    id: "fragrance-solutions",
    heading: "Make Every Space More Memorable.",
    intro:
      "Fragrance plays an important role in the experience of commercial and professional spaces. Suraxil provides fragrance solutions across the following environments. From everyday environments to customer-facing spaces, fragrance solutions can help create a more consistent atmosphere.",
    tags: ["Hospitality", "Offices", "Retail environments", "Commercial spaces", "Institutions", "Facility care"],
    cta: { label: "Explore Fragrance Solutions", href: "#contact" },
  },
  {
    id: "projects",
    heading: "Beyond Products. Solutions for Industrial Challenges.",
    intro:
      "Some requirements cannot be solved with a standard chemical product alone. Suraxil supports application-focused requirements across the following areas.",
    items: [
      {
        icon: Droplets,
        title: "Water Treatment Projects",
        description: "Treatment solutions for industrial water systems.",
      },
      {
        icon: Waves,
        title: "Wastewater & Effluent Projects",
        description: "Chemical solutions supporting ETP and industrial wastewater applications.",
      },
      {
        icon: SprayCan,
        title: "HVAC Cleaning",
        description: "Cleaning and treatment solutions for HVAC systems.",
      },
      {
        icon: BadgeCheck,
        title: "Water Optimization",
        description: "Chemical treatment approaches focused on system performance and water management.",
      },
      {
        icon: ClipboardList,
        title: "Industrial Application Support",
        description: "Solutions aligned with specific operating conditions and application requirements.",
      },
    ],
    cta: { label: "Discuss Your Project", href: "#contact" },
  },
];

/** Second instance of the five-step process (see src/data/approach.ts for the
 * first), reworded for the Custom Chemical Solutions closing block -- an
 * intentional repeat from the original mockup, not a duplicate to merge. */
export const customSteps: ProcessStep[] = [
  {
    step: "01",
    title: "Understand",
    description: "Understand your application, process and challenge.",
    icon: Search,
  },
  {
    step: "02",
    title: "Analyze",
    description: "Identify the relevant treatment or chemical requirement.",
    icon: ClipboardList,
  },
  {
    step: "03",
    title: "Recommend",
    description: "Recommend a solution based on the application.",
    icon: BadgeCheck,
  },
  {
    step: "04",
    title: "Implement",
    description: "Support implementation according to the requirement.",
    icon: Wrench,
  },
  {
    step: "05",
    title: "Optimize",
    description: "Review the application and refine the solution where required.",
    icon: CircleCheck,
  },
];

export const customSolutionsCopy = {
  id: "custom-chemical-solutions",
  heading: "Your Application Is Different. Your Solution Should Be Too.",
  intro:
    "Every industry operates under different conditions. Equipment, water quality, process conditions, operating environment and treatment objectives can all influence chemical requirements.",
  closing: {
    eyebrow: "Have an Industrial Chemical Challenge?",
    heading: "Let's Find the Right Solution.",
    body: "Tell us about your application, system or requirement and our team can help identify the appropriate chemical solution.",
    primaryCta: { label: "Request a Quote", href: "#contact" },
    secondaryCta: { label: "Talk to an Expert", href: "#contact" },
  },
};
