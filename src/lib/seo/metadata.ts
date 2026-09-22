import type { Metadata } from "next";
import { siteConfig } from "@/config/site";

interface PageSeo {
  title: string;
  description: string;
  /** Path only, e.g. "/" or "/water-treatment-chemicals/" */
  path: string;
}

/**
 * Builds a Next.js Metadata object for a single page. Every current and
 * future page should call this rather than hand-writing <head> tags, so
 * title/description/canonical/OG/Twitter stay consistent site-wide.
 *
 * OG/Twitter images are NOT set here -- src/app/opengraph-image.tsx is
 * picked up automatically by Next.js's file convention and injects those
 * tags for every page that doesn't define its own opengraph-image file.
 */
export function buildMetadata({ title, description, path }: PageSeo): Metadata {
  const canonical = new URL(path, siteConfig.url).toString();

  return {
    metadataBase: new URL(siteConfig.url),
    title,
    description,
    keywords: [...siteConfig.keywords.primary, ...siteConfig.keywords.secondary],
    alternates: {
      canonical,
    },
    robots: {
      index: true,
      follow: true,
      googleBot: {
        index: true,
        follow: true,
      },
    },
    openGraph: {
      type: "website",
      siteName: siteConfig.name,
      title,
      description,
      url: canonical,
    },
    twitter: {
      card: "summary_large_image",
      title,
      description,
    },
  };
}

export const homeSeo: PageSeo = {
  title: siteConfig.title,
  description: siteConfig.description,
  path: "/",
};
