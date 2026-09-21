import { Search, ClipboardList, BadgeCheck, Wrench, CircleCheck } from "lucide-react";
import type { ProcessStep } from "@/types/content";

/** "Our Approach" -- five-step process shown after Why Suraxil. A longer-worded
 * variant of the same five steps also appears in the Custom Chemical Solutions
 * closing block (src/data/solutionDetails.ts, customSteps) -- intentional per
 * the original mockup, not a duplicate to be merged. */
export const approachSteps: ProcessStep[] = [
  {
    step: "01",
    title: "Understand",
    description: "We understand your application and challenge.",
    icon: Search,
  },
  {
    step: "02",
    title: "Analyze",
    description: "We identify the relevant chemical and treatment requirement.",
    icon: ClipboardList,
  },
  {
    step: "03",
    title: "Recommend",
    description: "We propose an appropriate solution.",
    icon: BadgeCheck,
  },
  {
    step: "04",
    title: "Implement",
    description: "We support the application and implementation process.",
    icon: Wrench,
  },
  {
    step: "05",
    title: "Optimize",
    description: "We continuously look for opportunities to improve the solution.",
    icon: CircleCheck,
  },
];
