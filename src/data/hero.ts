import { Package, Users } from "lucide-react";
import type { LucideIcon } from "lucide-react";
import { BadgeCheck } from "lucide-react";

export const heroEyebrow = "Specialty Chemicals & Industrial Solutions";
export const heroHeadline = "Chemical Solutions Built Around Your Industry.";
export const heroSub =
  "Suraxil provides specialty chemicals and industrial solutions for water treatment, wastewater treatment, industrial maintenance, housekeeping, fragrance applications and customized requirements.";
export const heroPrimaryCta = { label: "Request a Quote", href: "#contact" };
export const heroSecondaryCta = { label: "Explore Solutions", href: "#catalog" };

export const heroStats: { value: string; label: string; icon: LucideIcon }[] = [
  { value: "20+", label: "years of experience behind our products", icon: BadgeCheck },
  { value: "5", label: "chemical product lines", icon: Package },
  { value: "4", label: "customer segments served", icon: Users },
];
