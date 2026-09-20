# Suraxil — Home Page Content

**Positioning:** Suraxil is a specialty chemicals partner for industrial, commercial and institutional applications — water treatment, wastewater treatment, specialty maintenance, housekeeping, fragrance and customized chemical requirements. The page is organized around *applications* (what the customer is trying to solve) rather than a product catalog.

**Source:** This content is ported from the client-supplied page mockup (`Suraxil single page website mockup.pdf`). It **replaces** the previous "trusted chemical products, delivered" / reseller-positioning content that lived in this file before.

> **Porting note:** this content is live in `assets/index-BN5FljXk.js` (a production bundle — there is no React source in this repo). This document is the source of truth for the copy; `index.html`'s `<head>` tags have already been updated to match the SEO section below. The rest of this content still needs to be ported into the actual page source (wherever that lives) — the next build of the bundle will otherwise overwrite it.

---

## SEO Foundation

**SEO Title** — live in [index.html](index.html)
```
Specialty Chemicals & Water Treatment | Suraxil
```

**Meta description** — live in [index.html](index.html), and mirrored in `og:description` / `twitter:description`
```
Suraxil offers specialty chemicals, water treatment, wastewater treatment, industrial cleaning and custom chemical solutions for businesses across India.
```

A `meta name="keywords"` tag (below) was also added to `index.html` carrying the full primary + secondary list, since it was supplied explicitly in the mockup. `og:url` and a canonical tag are still deliberately left out, as before — add them once the production domain is confirmed.

**Primary keywords**
- specialty chemicals
- industrial chemicals
- industrial chemical solutions
- water treatment chemicals
- wastewater treatment chemicals

**Secondary keywords**
- cooling tower chemicals
- boiler water treatment chemicals
- chiller water treatment chemicals
- RO water treatment chemicals
- HVAC cleaning chemicals
- industrial cleaning chemicals
- ETP chemicals
- industrial wastewater treatment chemicals
- STP chemicals
- industrial maintenance chemicals
- descaling chemicals
- degreasing chemicals
- housekeeping chemicals
- custom chemical solutions

**Keyword-to-section mapping** (so the primary/secondary terms land naturally in body copy, not just meta tags):

| Keyword(s) | Section |
|---|---|
| specialty chemicals, industrial chemicals, industrial chemical solutions | Hero, footer brand blurb |
| water treatment chemicals, cooling tower / boiler / chiller / RO water treatment chemicals, HVAC cleaning chemicals | §2 Water Treatment card, §8.1 detail page |
| wastewater treatment chemicals, industrial wastewater treatment chemicals, ETP chemicals, STP chemicals | §2 Wastewater card, §8.2 detail page |
| industrial cleaning chemicals, industrial maintenance chemicals, descaling chemicals, degreasing chemicals | §2 Specialty Maintenance card, §8.3 detail page |
| housekeeping chemicals | §2 Housekeeping card, §8.4 detail page |
| custom chemical solutions | §2 Custom Solutions card, §6 Suraxil Difference table, §8.7 detail page |

✅ **Audited and confirmed live — all 19 keywords (5 primary + 14 secondary) now appear as exact phrases in the rendered page copy**, not just in the meta tags. This was checked programmatically (searched the built page output for each exact phrase, case-insensitive) rather than assumed from the mapping table above. Two gaps were found and fixed:

- **"industrial chemical solutions"** (primary) wasn't used anywhere in body copy — added by rewriting the still-stale pre-mockup footer brand blurb (it previously read "Suraxil delivers trusted specialty maintenance, water treatment and industrial cleaning chemicals to industries, hospitals, businesses and individual customers across India.", left over from before this project started) to: *"Suraxil provides specialty chemicals and industrial chemical solutions for water treatment, wastewater treatment, industrial maintenance, housekeeping, fragrance and specialized applications across India."*
- **10 of the 14 secondary keywords** were missing entirely: cooling tower / boiler water treatment / chiller water treatment / RO water treatment / HVAC cleaning chemicals, ETP chemicals, industrial wastewater treatment chemicals, STP chemicals, industrial maintenance chemicals, descaling chemicals, degreasing chemicals, housekeeping chemicals. Fixed by extending the intro paragraph of the matching What We Do tab panel (§2's tab view) for each — one natural sentence per panel, not scattered keyword-stuffing. E.g. the Water Treatment panel's intro now reads: *"...Suraxil provides treatment solutions across key industrial water systems, including cooling tower chemicals, boiler water treatment chemicals, chiller water treatment chemicals, RO water treatment chemicals and HVAC cleaning chemicals."* — the Wastewater, Specialty Maintenance and Housekeeping panels got equivalent additions for their respective missing terms.

**Recommended H1**
```
Specialty Chemicals & Industrial Solutions for Better Performance
```
✅ **Resolved:** the client confirmed the mockup's hero headline (§1 below, "Chemical Solutions Built Around Your Industry.") as the actual `<h1>`. This SEO-recommended line is kept here only as a documented alternate, not for use.

**Recommended URL structure**

The site is currently a single-page app (`index.html` + one JS bundle, no router). The mockup's URL plan is written for a future multi-page build:

```
Homepage: /

Future solution pages:
/water-treatment-chemicals/
/wastewater-treatment-chemicals/
/industrial-maintenance-chemicals/
/housekeeping-cleaning-chemicals/
/fragrance-solutions/
/custom-chemical-solutions/
```

Until those pages exist, mirror the same slugs as in-page anchor IDs (`#water-treatment-chemicals`, `#wastewater-treatment-chemicals`, etc.) on each detail section in §8, so the nav/footer links and future URL migration line up exactly.

---

## 1. Hero

**Eyebrow** *(small label above the H1, next to an icon — not specified in the mockup; using the brand tagline from §9 Footer for consistency)*
> Specialty Chemicals & Industrial Solutions

**Headline (H1 — see SEO note above on the H1 conflict)**
> Chemical Solutions Built Around Your Industry.

**Subheadline**
> Suraxil provides specialty chemicals and industrial solutions for water treatment, wastewater treatment, industrial maintenance, housekeeping, fragrance applications and customized requirements.

**Primary CTA:** Request a Quote
**Secondary CTA:** Explore Solutions

---

## 2. What We Do

**Label:** What We Do
**Heading:** One Partner. Multiple Chemical Solutions.
**Sub:** Suraxil brings together a broad range of chemical solutions designed for industrial, commercial and facility applications.

Six solution cards, each pairing with an image, laid out in an alternating (checkerboard) two-column grid per the mockup:

| Card | Copy | CTA |
|---|---|---|
| **Water Treatment** | Chemical solutions for cooling towers, boilers, chillers, RO systems, HVAC systems and specialized water treatment applications. | Explore Water Treatment → |
| **Wastewater Treatment** | Solutions for industrial effluent and wastewater treatment, including coagulation, flocculation, pH control, decolorization and sludge management. | Explore Wastewater → |
| **Specialty Maintenance** | Industrial chemicals for cleaning, descaling, degreasing, equipment maintenance and process applications. | Explore Maintenance → |
| **Housekeeping** | Professional cleaning solutions for floors, washrooms, surfaces, glass, kitchens and commercial facilities. | Explore Housekeeping → |
| **Fragrance Solutions** | Fragrance solutions designed for hospitality, commercial spaces, offices, retail environments and institutions. | Explore Fragrance → |
| **Custom Solutions** | Chemical solutions developed around specific application requirements, operating conditions and performance objectives. | Discuss Your Requirement → |

Each card CTA now opens its matching tab in-page (see below) rather than linking out to a separate detail page/anchor.

✅ **Live now**, inserted directly after the Hero and before the existing "Who we are" section, using the site's already-styled `overview-card` component (icon + title + blurb + arrow link — the same visual pattern used by the existing product-lines grid) so no new CSS was needed.

### What We Do — detail tab view

Below the six summary cards, a tab strip + content panel was added directly inside this section (reusing the catalog's existing `tab-bar` / `tab-btn` / `tab-btn-active` styling, plus the `why-grid` / `why-card` styling for sub-application items and `badge` for the plain context lists — zero new CSS). Clicking a summary card's CTA sets the matching tab active and scrolls down to the panel; the tab strip itself is also directly clickable.

| Tab | Panel heading | Sub-applications shown | Panel CTA |
|---|---|---|---|
| Water Treatment | Water Treatment Chemicals for Critical Systems | Cooling Tower Treatment, Boiler Water Treatment, Chiller Treatment, RO Water Treatment, HVAC Cleaning & Treatment, Specialized Water Treatment | Talk to a Water Treatment Specialist |
| Wastewater Treatment | Wastewater Treatment Solutions for Industrial Applications | Coagulation, Flocculation, Decolorization, pH Control, Biological Treatment, Sludge Management, ETP & Industrial Effluent | Discuss Your Wastewater Requirement |
| Specialty Maintenance | Keep Equipment Clean. Keep Operations Moving. | Descaling, Degreasing, Industrial Cleaning, Equipment Cleaning, Corrosion Management, Process Cleaning | Find a Maintenance Solution |
| Housekeeping | Professional Cleaning Solutions for Every Facility | Floor Care, Washroom Care, Surface Cleaning, Glass Cleaning, Kitchen & Utility Cleaning, Facility Care — plus an Applications tag row (Hotels · Offices · Hospitals · Institutions · Commercial Buildings · Facilities) | Talk to a Specialist |
| Fragrance Solutions | Make Every Space More Memorable. | No sub-cards (mockup has none) — rendered as a tag row: Hospitality, Offices, Retail environments, Commercial spaces, Institutions, Facility care | Explore Fragrance Solutions |
| Custom Solutions | Beyond Products. Solutions for Industrial Challenges. | Water Treatment Projects, Wastewater & Effluent Projects, HVAC Cleaning, Water Optimization, Industrial Application Support (this is §8.6 "Projects", not §8.7 "Custom Chemical Solutions" — matches what the six card CTAs actually map to) | Discuss Your Project |

This content is a direct, condensed port of §8.1–§8.4, §8.5 and §8.6 below (the detail sections' body copy is unchanged; only presentation differs — one shared tab view here vs. six separate long-form sections in §8). All six panel CTAs point to `#contact` (the existing Contact section) since there is no separate lead form per category yet.

⚠️ **Page-structure note (live section order, keep this updated):**

```
1. Hero                      — ported (new)
2. What We Do (+ tabs)       — ported (new)
3. Industries                — ported (new) — moved above Why Suraxil to match §3/§4 order
4. Why Suraxil (6 tiles)     — ported (new mockup 6)
5. Our Approach               — ported (new) — didn't exist before
6. The Suraxil Difference    — ported (new) — didn't exist before
7. "Our chemical products" + catalog tabs — OLD content, not yet ported
8. "How it works"            — OLD content, not yet ported
9. Trust / Experience        — OLD content, not yet ported
10. FAQ                       — ported (new) — didn't exist before, added directly above Contact
11. Custom Chemical Solutions (§8.7) — ported (new) — didn't exist before, added between FAQ and Contact
12. Contact                   — OLD content, not yet ported
```

**"Who we are" removed.** Per request, the old About section (id `about`) was taken out of the page composition entirely — it no longer renders. Its dead references were cleaned up too: the "About" link in the header nav (desktop + mobile) and the "About us" link in the footer's Company column, both of which pointed to `#about` and would otherwise have been broken anchors. The `function hp(){...}` code itself is still physically present in the bundle but is never called from anywhere — harmless dead code, not worth the extra risk of surgically deleting a large function body out of a minified file for no functional gain.

Header nav also updated: "FAQ" link added (`#faq`), between "Industries" and "Contact", in both the desktop nav and mobile menu.

Still outstanding: §8.1–§8.6 as full long-form detail sections/pages (currently only ported in condensed form inside the What We Do tabs), §9 Footer, and replacing/removing items 3, 8, 9, 10 above with their §-numbered equivalents from this document. The mockup has no dedicated "Who we are"/About section at all — flagging rather than removing it unprompted, since that's a bigger content decision than what's been asked so far.

---

## 3. Industries We Serve

**Label:** Industries
**Heading:** Chemical Solutions Across Multiple Industries
**Sub:** Suraxil serves diverse industrial, commercial and institutional applications.

| Industry | Copy |
|---|---|
| **Manufacturing** | Process chemicals, water treatment and industrial maintenance. |
| **Automotive & Engineering** | Cleaning, maintenance and treatment solutions. |
| **Textile** | Process chemicals, wet-processing support and facility cleaning for textile operations. |
| **Food & Beverage** | Water treatment, cleaning and facility applications. |
| **Pharmaceutical** | Specialized cleaning, water and facility-related applications. |
| **Hospitality** | Housekeeping, cleaning, fragrance and water treatment solutions. |
| **Chemical & Process Industries** | Industrial water, wastewater and maintenance solutions. |
| **Commercial & Institutional** | Cleaning, housekeeping, fragrance and facility solutions. |

✅ **Live now.** Replaced the old 4-card "Industries we serve" section (customer segments: Industries & manufacturing / Hospitals & healthcare / Individual customers / Businesses & institutions) with this 8-card industry-vertical grid, reusing the existing `industry-grid`/`industry-card` styling (already a 4-column responsive grid, so 8 cards wrap cleanly into two rows — no CSS changes needed).

⚠️ **Textile copy was authored by me, not the client.** The mockup never supplied a blurb for Textile (only the FAQ and footer nav reference it) — I wrote a one-line description consistent with the other cards' tone so the card isn't blank. Flagging clearly in case the client wants to replace it with their own wording.

**Icons used** (all reused from icons already bundled in the app — no new imports): Manufacturing → Factory, Automotive & Engineering → Wrench, Textile → Package, Food & Beverage → Droplets, Pharmaceutical → FlaskConical, Hospitality → Sparkles, Chemical & Process Industries → Waves, Commercial & Institutional → Building2. None of the mockup's `<..Icone//..>` placeholders specified actual icons, so this mapping is my own judgment call based on each blurb's theme.

**Heading no longer wraps.** Every section heading on the page is capped at `max-width:640px` (a site-wide rule in `.section-head`), and at 32px this heading's 46 characters wrapped to two lines. Widened just this section's heading container to `960px` via an inline style override (scoped to this one section only — the global `.section-head` rule, and every other section's heading, is untouched). This only raises the *ceiling*; it does not force single-line text, so the heading still wraps naturally on narrow/mobile viewports where 960px of space isn't available — it does not overflow or cause horizontal scrolling there.

---

## 4. Why Suraxil

**Label:** Why Suraxil
**Heading:** More Than a Chemical Supplier.
**Statement:** Suraxil is built around a simple idea: **the right chemical solution starts with understanding the application.**

| Feature | Copy |
|---|---|
| **Comprehensive Portfolio** | Multiple chemical solution categories under one partner. |
| **Application-Focused** | Solutions organized around real industrial and commercial applications. |
| **Technical Approach** | Chemical recommendations aligned with the specific requirement. |
| **Customization** | Solutions can be approached around specific application needs. |
| **Industrial Focus** | Designed for industrial, commercial and institutional environments. |
| **Long-Term Partnership** | Focused on supporting ongoing operational requirements. |

✅ **Live now — back to 6 tiles.** This section briefly carried 12 tiles (the mockup's 6 features plus the site's original 6 "Trusted manufacturers" etc. cards, added back on request). Per your latest request, the original 6 have been removed again, so the grid is back to just the 6 mockup features above — still the existing `why-grid`/`why-card` styling (3-column grid, 6 items in 2 clean rows). The statement line still renders with the second half bold (`<strong>`), matching the mockup's two-weight styling.

**Icons used** (all reused, no new imports): Comprehensive Portfolio → Package, Application-Focused → Search, Technical Approach → ClipboardList, Customization → Wrench, Industrial Focus → Factory, Long-Term Partnership → Users. Same caveat as §3: this mapping is my own judgment call, since the mockup's icon placeholders weren't specific.

---

## 5. Our Approach

**Label:** Our Approach
**Heading:** From Requirement to Solution.

| # | Step | Copy |
|---|---|---|
| 01 | **Understand** | We understand your application and challenge. |
| 02 | **Analyze** | We identify the relevant chemical and treatment requirement. |
| 03 | **Recommend** | We propose an appropriate solution. |
| 04 | **Implement** | We support the application and implementation process. |
| 05 | **Optimize** | We continuously look for opportunities to improve the solution. |

*(This 5-step process reappears with slightly longer, application-specific wording in §8.7 under Custom Chemical Solutions — kept as a separate instance there since the mockup repeats it deliberately at the bottom of the page as a closing CTA block.)*

✅ **Live now.** This was a section that didn't exist on the page at all before — added directly after Why Suraxil and before Industries (matching the mockup's page order, where Our Approach immediately follows Why Suraxil), reusing the existing `steps-grid`/`step-card`/`step-num` styling already built for the "How it works" section further down the page — no CSS changes needed. It's a 3-column grid; with 5 steps it wraps as 3 + 2, which is a normal/expected pattern for that grid, not a bug.

**Icons used** (all reused, no new imports): Understand → Search, Analyze → ClipboardList, Recommend → BadgeCheck, Implement → Wrench, Optimize → CircleCheck.

⚠️ **Note:** the page now has two different 5-step "process" blocks once §8.7 is eventually built (this one, and the longer-worded one at the bottom of the page under Custom Chemical Solutions) — intentional per the mockup, flagged here again as a reminder since it's easy to mistake for a duplicate bug later.

---

## 6. The Suraxil Difference

**Label:** The Suraxil Difference
**Heading:** Why Manage Multiple Chemical Requirements Separately?
**Sub:** Suraxil brings multiple solution categories together under one partner.

| Requirement | Suraxil Solution |
|---|---|
| Water Treatment | ✓ |
| Wastewater Treatment | ✓ |
| Industrial Maintenance | ✓ |
| Cleaning Solutions | ✓ |
| Housekeeping | ✓ |
| Fragrance | ✓ |
| Custom Chemical Solutions | ✓ |
| Project Applications | ✓ |

**Closing line:** One Partner. Multiple Applications. Smarter Chemical Management.

✅ **Live now.** This section didn't exist on the page before — added directly after Our Approach and before Industries. Rendered as a real `<table>` (Requirement / Suraxil Solution columns, a teal checkmark icon in every row) styled with inline styles that reference the site's existing CSS custom properties (`var(--line)`, `var(--teal)`, `var(--ink)`, etc.) rather than new stylesheet classes — this was a deliberate choice since no comparison-table pattern already existed on the page to reuse, and inline styles guarantee the table renders correctly without needing to touch the shared stylesheet. The closing line renders centered below the table in the site's heading font.

---

## 7. Frequently Asked Questions

**What chemical solutions does Suraxil provide?**
Suraxil provides solutions across water treatment, wastewater treatment, specialty maintenance, housekeeping, fragrance applications, projects and customized chemical requirements.

**Does Suraxil provide water treatment chemicals?**
Yes. Suraxil covers applications including cooling towers, boilers, chillers, RO systems, HVAC systems and specialized water treatment.

**Does Suraxil provide wastewater treatment chemicals?**
Suraxil provides chemical solutions for industrial wastewater and effluent treatment applications, including coagulation, flocculation, decolorization, pH control and sludge management.

**Does Suraxil provide industrial cleaning chemicals?**
Yes. Solutions include descaling, degreasing, industrial cleaning, equipment cleaning and process cleaning applications.

**Can Suraxil support customized requirements?**
Suraxil can assess specific application requirements and work toward an appropriate chemical solution based on the application.

**Which industries can use Suraxil solutions?**
Suraxil solutions can be applied across manufacturing, automotive and engineering, textile, food and beverage, pharmaceutical, hospitality, chemical and process industries, commercial and institutional environments.

*(This FAQ answer is the only place Textile is described in industry copy — see the flag in §3.)*

✅ **Live now.** Added directly above the Contact ("Get in touch") section — it didn't exist on the page before. Also added an **"FAQ" link to the header navigation** (both desktop nav and mobile menu, since both read from the same shared link list), pointing to `#faq`, positioned between "Industries" and "Contact" to match the section's position on the page.

**Redesigned for a more polished, card-style accordion.** Still built on native `<details>`/`<summary>` (no JS state, works with keyboard/screen readers out of the box), but upgraded from plain bottom-border rows to:
- Each question is its own rounded card (`faq-item`) with a subtle border, that highlights (border turns blue, soft shadow appears) both on hover and while expanded, so it's clear which one is open.
- A round **"+" icon** on the right of each question rotates 45° into an "×" when expanded, and fills in blue — the classic expand/collapse affordance, done in pure CSS via the `[open]` attribute selector (no extra JS needed for the animation).
- A short intro line was added under the section heading: *"Quick answers to the questions we hear most. Still need something specific? Reach out and we will help directly."*

This required adding real CSS rules (`.faq-list`, `.faq-item`, `.faq-icon` and their `:hover`/`[open]` states) to the site's shared stylesheet, rather than inline styles — the rotate/hover/open-state interactions aren't expressible with inline styles alone, since those can't target pseudo-classes or attribute selectors. This is the first FAQ-specific styling added to the shared stylesheet; everything else added so far reused existing classes or stayed inline.

---

## 8. Solution Detail Sections

Heading above the group: **Know More Details about Our Chemical Solutions.** Each numbered block below is a distinct in-page section (anchor IDs should match the URL slugs in the SEO section).

### 8.1 Water Treatment Chemicals for Critical Systems — `#water-treatment-chemicals`

> Water quality directly affects equipment performance, operating efficiency and maintenance requirements. Suraxil provides treatment solutions across key industrial water systems.

| Sub-application | Copy |
|---|---|
| **Cooling Tower Treatment** | Solutions for scale control, corrosion control, microbiological control, biocide treatment and water conditioning. |
| **Boiler Water Treatment** | Solutions supporting scale prevention, corrosion control, oxygen management, pH control and boiler system protection. |
| **Chiller Treatment** | Chemical solutions for maintaining chiller water systems and supporting efficient operation. |
| **RO Water Treatment** | Solutions addressing membrane protection, scaling, fouling, dechlorination and pretreatment requirements. |
| **HVAC Cleaning & Treatment** | Solutions for HVAC systems, cleaning, flushing, passivation and related treatment requirements. |
| **Specialized Water Treatment** | Application-focused chemical solutions for specific water quality and treatment challenges. |

**CTA:** Talk to a Water Treatment Specialist

### 8.2 Wastewater Treatment Solutions for Industrial Applications — `#wastewater-treatment-chemicals`

> Effective wastewater treatment requires the right chemistry for the right process. Suraxil provides chemical solutions across different stages of industrial wastewater and effluent treatment.

| Stage | Copy |
|---|---|
| **Coagulation** | Chemical solutions to support the separation of suspended and colloidal matter. |
| **Flocculation** | Solutions designed to support effective floc formation and downstream separation. |
| **Decolorization** | Treatment solutions for wastewater colour reduction and process requirements. |
| **pH Control** | Chemical solutions for maintaining required pH conditions throughout treatment processes. |
| **Biological Treatment** | Chemical support solutions for biological wastewater treatment applications. |
| **Sludge Management** | Solutions supporting sludge handling and treatment requirements. |
| **ETP & Industrial Effluent** | Application-focused chemical solutions for industrial effluent treatment systems. |

**CTA:** Discuss Your Wastewater Requirement

### 8.3 Specialty Maintenance — `#industrial-maintenance-chemicals`

**Heading:** Keep Equipment Clean. Keep Operations Moving.
> Industrial equipment and processes require regular cleaning and maintenance to maintain performance.

| Sub-application | Copy |
|---|---|
| **Descaling** | Solutions for removing mineral deposits and scale buildup. |
| **Degreasing** | Chemical solutions for removing oils, grease and industrial residues. |
| **Industrial Cleaning** | Cleaning solutions for industrial environments, equipment and process applications. |
| **Equipment Cleaning** | Application-focused chemicals for equipment maintenance and cleaning. |
| **Corrosion Management** | Solutions supporting corrosion control and equipment protection. |
| **Process Cleaning** | Specialized chemical solutions for process-related cleaning requirements. |

**CTA:** Find a Maintenance Solution

### 8.4 Housekeeping — `#housekeeping-cleaning-chemicals`

**Heading:** Professional Cleaning Solutions for Every Facility.
> From daily maintenance to specialized cleaning requirements, Suraxil provides solutions for professional environments.

| Sub-application | Copy |
|---|---|
| **Floor Care** | Cleaning and maintenance solutions for different flooring applications. |
| **Washroom Care** | Solutions for washroom cleaning and maintenance. |
| **Surface Cleaning** | Cleaning solutions for common commercial and institutional surfaces. |
| **Glass Cleaning** | Solutions for glass and transparent surfaces. |
| **Kitchen & Utility Cleaning** | Cleaning solutions for kitchens, utility areas and supporting facilities. |
| **Facility Care** | Solutions for maintaining clean and professional commercial environments. |

**Applications:** Hotels · Offices · Hospitals · Institutions · Commercial Buildings · Facilities

**CTA:** Talk to a Specialist

### 8.5 Fragrance Solutions — `#fragrance-solutions`

**Heading:** Make Every Space More Memorable.
> Fragrance plays an important role in the experience of commercial and professional spaces.

Suraxil provides fragrance solutions for: Hospitality · Offices · Retail environments · Commercial spaces · Institutions · Facility care.

> From everyday environments to customer-facing spaces, fragrance solutions can help create a more consistent atmosphere.

**CTA:** Explore Fragrance Solutions

### 8.6 Projects — Beyond Products

**Heading:** Beyond Products. Solutions for Industrial Challenges.
> Some requirements cannot be solved with a standard chemical product alone. Suraxil supports application-focused requirements across:

| Project type | Copy |
|---|---|
| **Water Treatment Projects** | Treatment solutions for industrial water systems. |
| **Wastewater & Effluent Projects** | Chemical solutions supporting ETP and industrial wastewater applications. |
| **HVAC Cleaning** | Cleaning and treatment solutions for HVAC systems. |
| **Water Optimization** | Chemical treatment approaches focused on system performance and water management. |
| **Industrial Application Support** | Solutions aligned with specific operating conditions and application requirements. |

**CTA:** Discuss Your Project

### 8.7 Custom Chemical Solutions — `#custom-chemical-solutions`

**Heading:** Your Application Is Different. Your Solution Should Be Too.
> Every industry operates under different conditions. Equipment, water quality, process conditions, operating environment and treatment objectives can all influence chemical requirements.

Suraxil approaches specialized requirements through a structured process (second instance of the 5-step process — see the note in §5):

| # | Step | Copy |
|---|---|---|
| 01 | **Understand** | Understand your application, process and challenge. |
| 02 | **Analyze** | Identify the relevant treatment or chemical requirement. |
| 03 | **Recommend** | Recommend a solution based on the application. |
| 04 | **Implement** | Support implementation according to the requirement. |
| 05 | **Optimize** | Review the application and refine the solution where required. |

**Closing CTA block:**
> Have a specific chemical requirement?

**Button:** Talk to Suraxil

✅ **Live now.** Added directly above the Contact ("Get in touch") section, after FAQ — it didn't exist on the page before. Reuses the `steps-grid`/`step-card` numbered-step styling (same pattern as §5 Our Approach, same icon choices: Understand → Search, Analyze → ClipboardList, Recommend → BadgeCheck, Implement → Wrench, Optimize → CircleCheck) and a bordered callout box (inline-styled, same low-risk approach as §6/§7) for the closing "Talk to Suraxil" CTA, which links to `#contact`.

---

## 9. Footer

**Brand column**
- **Name:** Suraxil
- **Tagline:** Specialty Chemicals & Industrial Solutions
- **Blurb:** Chemical solutions for water treatment, wastewater treatment, industrial maintenance, housekeeping, fragrance and specialized applications.

**Solutions column**
Water Treatment · Wastewater Treatment · Specialty Maintenance · Housekeeping · Fragrance Solutions · Projects · Custom Solutions

**Industries column**
Manufacturing · Automotive & Engineering · Textile · Food & Beverage · Pharmaceutical · Hospitality · Chemical & Process · Commercial & Institutional

**Company column**
About Suraxil · Projects · Contact

**Closing CTA**
> Need a Chemical Solution?

**Button:** Request a Quote →

⚠️ **This §9 footer design (Solutions/Industries/Company/CTA, 4 columns) has not been built** — the live footer is still the site's original 3-column structure (Products / Company / Get in touch), not this mockup layout. What *is* live now is documented below.

### Live now — header nav & footer "Company" column arrangement

Per request, both were reordered to match the actual live page's section order and to properly list all major sections (previously they were stale/mismatched — e.g. still listing the removed "About" section, or listing "Why Suraxil" before "Industries" after Industries had been moved above it).

**Header nav** (desktop + mobile share the same list) — kept concise, top-level sections only:
Home → What We Do → Industries → Why Suraxil → Products → FAQ → Contact

**Footer "Company" column** — expanded into a full site map of every major section (excluding Home and Products, since Products already has its own dedicated footer column):
What We Do → Industries → Why Suraxil → Our Approach → The Suraxil Difference → How It Works → Experience → FAQ → Custom Solutions → Contact

Both lists now match the live page's actual top-to-bottom order. The "Products" and "Get in touch" footer columns were untouched.

---

## CTA / button text reference

All button and link labels used across the page, for consistency when building:

| Label | Where used |
|---|---|
| Request a Quote | Hero (primary), Footer |
| Explore Solutions | Hero (secondary) |
| Explore Water Treatment → | §2 Water Treatment card |
| Explore Wastewater → | §2 Wastewater card |
| Explore Maintenance → | §2 Specialty Maintenance card |
| Explore Housekeeping → | §2 Housekeeping card |
| Explore Fragrance → | §2 Fragrance card |
| Discuss Your Requirement → | §2 Custom Solutions card |
| Talk to a Water Treatment Specialist | §8.1 |
| Discuss Your Wastewater Requirement | §8.2 |
| Find a Maintenance Solution | §8.3 |
| Talk to a Specialist | §8.4 |
| Explore Fragrance Solutions | §8.5 |
| Discuss Your Project | §8.6 |
| Talk to Suraxil | §8.7 closing CTA |

---

## Open items for the client / next build

1. **Textile industry** has no card copy in the mockup's Industries grid (§3) despite being referenced in the FAQ and footer nav — needs a one-line blurb before this ships.
2. ~~H1 conflict between the mockup's hero headline and the SEO Foundation's "Recommended H1".~~ **Resolved** — client confirmed the mockup's hero headline as the live `<h1>` (see SEO section).
3. Several CTAs across §2 and §8 point to the same underlying section by different labels (e.g. "Explore Water Treatment" vs "Talk to a Water Treatment Specialist") — confirm both are meant to land on `#water-treatment-chemicals`, just at different scroll depths (card-level vs. detail-level), rather than separate pages, until the future multi-page URLs in the SEO section are built.
4. ~~The hero copy hadn't shipped to the live page.~~ **Fixed** — the hero headline and subheadline in `assets/index-BN5FljXk.js` have been patched to match §1 Hero (exact, verified string replacement of the two literals, not a rebuild — no other bundle content touched). The rest of the page (§2 onward) still needs to be ported; there is still no editable React source for the remaining sections.
