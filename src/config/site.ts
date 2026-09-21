export const siteConfig = {
  name: "Suraxil",
  tagline: "Specialty Chemicals & Industrial Solutions",
  title: "Specialty Chemicals & Water Treatment | Suraxil",
  description:
    "Suraxil offers specialty chemicals, water treatment, wastewater treatment, industrial cleaning and custom chemical solutions for businesses across India.",
  url: process.env.NEXT_PUBLIC_SITE_URL ?? "https://www.suraxil.com",
  legalName: "Suraxil India Pvt Ltd",
  contact: {
    email: "info@suraxil.com",
    location: "Sriperumbudur, Chennai",
    phone: "+91 44 4212 2124",
    phoneHref: "tel:+914442122124",
    phoneAlt: "73389 60034",
    address: {
      street: "120, Highways Nagar, Valarpuram Village",
      locality: "Sriperumbudur",
      postalCode: "602105",
      postalCodeDisplay: "602 105",
      country: "IN",
      full: "120, Highways Nagar, Valarpuram Village, Sriperumbudur — 602 105, India",
    },
  },
  keywords: {
    primary: [
      "specialty chemicals",
      "industrial chemicals",
      "industrial chemical solutions",
      "water treatment chemicals",
      "wastewater treatment chemicals",
    ],
    secondary: [
      "cooling tower chemicals",
      "boiler water treatment chemicals",
      "chiller water treatment chemicals",
      "RO water treatment chemicals",
      "HVAC cleaning chemicals",
      "industrial cleaning chemicals",
      "ETP chemicals",
      "industrial wastewater treatment chemicals",
      "STP chemicals",
      "industrial maintenance chemicals",
      "descaling chemicals",
      "degreasing chemicals",
      "housekeeping chemicals",
      "custom chemical solutions",
    ],
  },
  nav: [
    { label: "Solutions", href: "/#what-we-do" },
    { label: "Industries", href: "/#industries" },
    { label: "Projects", href: "/#projects" },
    { label: "About", href: "/#why" },
    { label: "FAQ", href: "/#faq" },
    { label: "Contact", href: "/#contact" },
  ],
  headerCta: { label: "Request a Quote", href: "/#contact" },
  social: {
    facebook: "https://www.facebook.com/suraxilkem",
    instagram: "https://www.instagram.com/suraxilkem",
    linkedin: "https://www.linkedin.com/company/suraxilkem",
    youtube: "https://www.youtube.com/@suraxilkem",
    x: "https://x.com/suraxilkem",
    pinterest: "https://www.pinterest.com/suraxilkem",
  },
} as const;

export type SolutionSlug =
  | "water-treatment-chemicals"
  | "wastewater-treatment-chemicals"
  | "industrial-maintenance-chemicals"
  | "housekeeping-cleaning-chemicals"
  | "fragrance-solutions"
  | "custom-chemical-solutions";

/**
 * Future solution landing pages. Not built yet (single-page site today), but
 * every in-page anchor ID below already matches these slugs 1:1 so the future
 * migration from `/#slug` to `/slug/` is a routing change only, not a content
 * or SEO rewrite. See src/app/(future-pages)/README.md.
 */
export const futureSolutionPages: SolutionSlug[] = [
  "water-treatment-chemicals",
  "wastewater-treatment-chemicals",
  "industrial-maintenance-chemicals",
  "housekeeping-cleaning-chemicals",
  "fragrance-solutions",
  "custom-chemical-solutions",
];
