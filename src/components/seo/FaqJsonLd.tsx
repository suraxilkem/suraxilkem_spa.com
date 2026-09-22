import type { FaqItem } from "@/types/content";

/**
 * FAQPage structured data. Takes the exact same data the FAQ section renders,
 * so this can never drift out of sync with the visible questions/answers --
 * Google requires the JSON-LD content to match what's actually on the page.
 */
export function FaqJsonLd({ items }: { items: FaqItem[] }) {
  const data = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: items.map((item) => ({
      "@type": "Question",
      name: item.question,
      acceptedAnswer: {
        "@type": "Answer",
        text: item.answer,
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
