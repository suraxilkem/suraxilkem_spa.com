# Suraxil -- suraxilkem_spa.com

Specialty chemicals, water treatment and industrial solutions website. Server-side
rendered React (Next.js App Router) with an SEO foundation built in from the start.

## Stack

- Next.js 16 (App Router, SSR + static prerendering)
- React 19 + TypeScript
- pnpm
- lucide-react icons

## Getting started

```bash
pnpm install
pnpm dev       # http://localhost:3000
```

```bash
pnpm build     # production build
pnpm start     # serve the production build
pnpm lint      # eslint
pnpm format    # prettier --write
```

Copy `.env.example` to `.env.local` and set `NEXT_PUBLIC_SITE_URL` before deploying
(used for canonical URLs, the sitemap and Open Graph tags). `NEXT_PUBLIC_GTM_ID` and
`NEXT_PUBLIC_GA_ID` are placeholders for Google Tag Manager / Analytics, wired up
later -- see `src/config/site.ts`.

## Project layout

```
src/
├── app/            # routes, layout, robots.ts, sitemap.ts, opengraph-image.tsx
├── components/
│   ├── layout/     # Header, Footer
│   ├── sections/   # one component per homepage section
│   ├── seo/        # JSON-LD
│   └── ui/         # Reveal (scroll-in animation)
├── config/site.ts  # single source of truth for title/description/contact/nav
├── data/           # ported page content (solutions, industries, FAQ, catalog...)
├── lib/seo/        # Metadata builder
└── types/
```

The site is a single page (`/`) today. Six future solution pages
(`/water-treatment-chemicals/` etc.) are pre-planned in
`src/config/site.ts` (`futureSolutionPages`) with matching in-page anchor IDs already
in place, so adding a page later is a new route under `src/app/<slug>/page.tsx`, not
a content or SEO rewrite.
