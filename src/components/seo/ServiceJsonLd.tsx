import { siteConfig } from "@/config/site";
import { solutions } from "@/data/solutions";

/**
 * Service structured data, one entry per solution card rendered in
 * WhatWeDo -- kept alongside that section so it can't drift from what's
 * actually on the page. Each Service references the Organization node
 * from JsonLd.tsx as its provider via @id, so this must render on a page
 * where OrganizationJsonLd is also present (currently the root layout).
 */
export function ServiceJsonLd() {
  const data = {
    "@context": "https://schema.org",
    "@graph": solutions.map((solution) => ({
      "@type": "Service",
      "@id": `${siteConfig.url}/#service-${solution.id}`,
      name: solution.title,
      description: solution.description,
      url: `${siteConfig.url}/${solution.href}`,
      serviceType: solution.title,
      provider: { "@id": `${siteConfig.url}/#organization` },
      areaServed: {
        "@type": "Country",
        name: "India",
      },
    })),
  };

  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(data) }}
    />
  );
}
