import { siteConfig } from "@/config/site";

/**
 * Organization + WebSite JSON-LD. Only fields backed by real, known data are
 * included (legal name, url, logo, email, phone, registered office) — no
 * invented founding date, ratings, reviews or geo-coordinates. Extend this
 * only when the client supplies further details.
 *
 * "LocalBusiness" is included alongside "Organization" (a valid multi-type
 * JSON-LD array) since there's now a real registered office address --
 * this is what makes the business eligible for local/map-pack search
 * relevance, not just generic entity recognition.
 */
export function OrganizationJsonLd() {
  const { address } = siteConfig.contact;
  const data = {
    "@context": "https://schema.org",
    "@graph": [
      {
        "@type": ["Organization", "LocalBusiness"],
        "@id": `${siteConfig.url}/#organization`,
        name: siteConfig.legalName,
        alternateName: siteConfig.name,
        url: siteConfig.url,
        logo: `${siteConfig.url}/logo.png`,
        email: siteConfig.contact.email,
        telephone: siteConfig.contact.phone,
        address: {
          "@type": "PostalAddress",
          streetAddress: address.street,
          addressLocality: address.locality,
          postalCode: address.postalCode,
          addressCountry: address.country,
        },
        description: siteConfig.description,
        sameAs: Object.values(siteConfig.social),
      },
      {
        "@type": "WebSite",
        "@id": `${siteConfig.url}/#website`,
        name: siteConfig.name,
        url: siteConfig.url,
        publisher: { "@id": `${siteConfig.url}/#organization` },
      },
      {
        "@type": "WebPage",
        "@id": `${siteConfig.url}/#webpage`,
        url: siteConfig.url,
        name: siteConfig.title,
        description: siteConfig.description,
        isPartOf: { "@id": `${siteConfig.url}/#website` },
        about: { "@id": `${siteConfig.url}/#organization` },
      },
    ],
  };

  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(data) }}
    />
  );
}
