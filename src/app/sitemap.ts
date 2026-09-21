import type { MetadataRoute } from "next";
import { siteConfig } from "@/config/site";

/**
 * Only lists routes that actually resolve today. When a solution page from
 * `futureSolutionPages` (src/config/site.ts) gets its own route under
 * src/app/<slug>/page.tsx, add one entry here — do not list a slug before
 * its page exists, or search engines will find a 404.
 */
export default function sitemap(): MetadataRoute.Sitemap {
  return [
    {
      url: siteConfig.url,
      lastModified: new Date(),
      changeFrequency: "monthly",
      priority: 1,
    },
  ];
}
