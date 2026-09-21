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

*(This briefly changed to a label-less "Our Solutions" heading + a different sub-line, per a reference image showing that variant. Per a follow-up request, it's been reverted back to this original heading/sub/eyebrow — the row layout, photos and card styling from that redesign were kept; only the heading block changed back.)*

Six solution cards, each paired with an image, laid out in an alternating (checkerboard) two-column grid — row 1: card left / photo right, row 2: photo left / card right, and so on:

| Card | Copy | CTA |
|---|---|---|
| **Water Treatment** | Chemical solutions for cooling towers, boilers, chillers, RO systems, HVAC systems and specialized water treatment applications. | Explore Water Treatment → |
| **Wastewater Treatment** | Solutions for industrial effluent and wastewater treatment, including coagulation, flocculation, pH control, decolorization and sludge management. | Explore Wastewater → |
| **Specialty Maintenance** | Industrial chemicals for cleaning, descaling, degreasing, equipment maintenance and process applications. | Explore Maintenance → |
| **Housekeeping** | Professional cleaning solutions for floors, washrooms, surfaces, glass, kitchens and commercial facilities. | Explore Housekeeping → |
| **Fragrance Solutions** | Fragrance solutions designed for hospitality, commercial spaces, offices, retail environments and institutions. | Explore Fragrance → |
| **Custom Solutions** | Chemical solutions developed around specific application requirements, operating conditions and performance objectives. | Discuss Your Requirement → |

Each card CTA is a direct link to its matching full section under "Know More Details about Our Chemical Solutions" (§8) further down the page.

✅ **Live now, redesigned to match the "Our Solutions" reference image** — the layout changed from a 3-column grid of self-contained cards to 6 stacked two-column rows (card + photo panel, alternating sides), matching the reference exactly. Implementation:

- **Card:** still the `overview-card` component (icon + title + blurb + arrow link), reused as the base, with a `solution-card` class layered on. The icon badge color varies per card to match the reference — blue for Water Treatment, Housekeeping and Custom Solutions; teal for Wastewater Treatment; purple for Specialty Maintenance and Fragrance Solutions (a new purple accent, `#7C5CFC`, used only here — added as an inline style, not a new global color variable, since nothing else on the page uses it yet).
- ✅ **Rows shrunk, per request** — the six rows were taking up a lot of vertical space (the reference's padding/photo-height, taken at face value, is quite generous). Reduced: card padding `40px 36px → 24px 22px`, title `22px → 19px`, blurb `→ 13.5px`, row gap `28px → 20px`, row spacing `margin-bottom 24px → 16px`, and photo panel `min-height 260px → 160px` (corner radius `20px → 16px` to match the smaller size proportionally). Layout, alternating order, photos and colors are all unchanged — only the sizing.
- ✅ **Photo panels now use real photos, cropped directly from the client's reference image.** Per request, the gradient+icon placeholder was replaced: the six photo regions (RO/water-treatment plant, wastewater clarifier, a technician cleaning heat-exchanger tubes, a mop and caution sign, a reed diffuser scene, lab flasks and beakers) were cropped pixel-for-pixel out of the reference screenshot and saved as real image files at `assets/solutions/water-treatment.jpg`, `wastewater-treatment.jpg`, `specialty-maintenance.jpg`, `housekeeping.jpg`, `fragrance-solutions.jpg`, `custom-solutions.jpg` (~13–34KB each, JPEG). `.solution-photo` now renders an `<img>` (object-fit: cover, clipped to the rounded corners) instead of a gradient. ⚠️ **Caveat:** since these came from a screenshot rather than original photography, they're limited to the mockup's on-screen resolution (~390×225px), so they'll look a little soft when the panel renders wider than that on a large desktop screen. Fine as a real placeholder now; swap in full-resolution stock/brand photography later for a sharper result — same filenames, same folder.
- Each card's "Explore X →" link still points to its matching full section under §8, unchanged from before.

| Card CTA | Links to |
|---|---|
| Explore Water Treatment → | `#water-treatment-chemicals` — Water Treatment Chemicals for Critical Systems |
| Explore Wastewater → | `#wastewater-treatment-chemicals` — Wastewater Treatment Solutions for Industrial Applications |
| Explore Maintenance → | `#industrial-maintenance-chemicals` — Keep Equipment Clean. Keep Operations Moving. |
| Explore Housekeeping → | `#housekeeping-cleaning-chemicals` — Professional Cleaning Solutions for Every Facility |
| Explore Fragrance → | `#fragrance-solutions` — Make Every Space More Memorable. |
| Discuss Your Requirement → | `#projects` — Beyond Products. Solutions for Industrial Challenges. |

⚠️ **The in-page tab strip + preview panel that used to sit below the six cards has been removed**, per request. It briefly existed as a condensed duplicate of §8's content (tab click → switch panel, in-place, without leaving this section) — now that §8's full sections are live further down the page and the cards link straight there, that duplicate view was redundant. Removed cleanly: the `useState` hook driving the active tab, the tab-bar markup, and the panel markup were all taken out of `sxWhat`, which is back to a plain stateless component (just the section head + the 6 linked cards). `sxWhatDetail` (the data itself) was **not** touched — it still exclusively powers §8's full sections, so no content was lost.

⚠️ **Page-structure note (live section order, keep this updated):**

```
1. Hero                      — ported (new)
2. What We Do (+ alternating rows) — ported (new)
3. Industries                — ported (new) — moved above Why Suraxil to match §3/§4 order
4. Why Suraxil (6 tiles)     — ported (new mockup 6)
5. Our Approach               — ported (new) — didn't exist before
6. The Suraxil Difference    — ported (new) — didn't exist before
7. Catalog tabs ("Browse the catalog by application") — OLD content, not yet ported, still live — now 5 tabs (Specialty maintenance, Water treatment, Waste water treatment, House keeping products, **Fragrances** — moved in from its own section, see below)
8. "How it works"            — OLD content, not yet ported
9. Trust / Experience        — OLD content, not yet ported
10. FAQ                       — ported (new) — didn't exist before, added directly above Contact
11. Know More Details (§8.1–§8.6, full sections) — ported (new) — didn't exist before, added between FAQ and Custom Chemical Solutions
12. Custom Chemical Solutions (§8.7) — ported (new) — didn't exist before, added between FAQ and Contact
13. Contact                   — OLD content, not yet ported
```

Footer: ported (new, §9's 4-column layout) — sits after Contact, not numbered above since it's outside `<main>`.

**Removed/moved sections, in order:**
- **"Who we are"** (the old About section, id `about`) — taken out of the page composition entirely. Dead references cleaned up: the "About" link in the header nav and the "About us" link in the footer, both of which pointed to `#about`, were either removed or repointed at the time (see the header/footer nav history further down).
- **"Our chemical products"** (the old `mp` overview section, id `products` — six cards each linking to `#products`) — removed per request. Its only inbound link was the hero's secondary "Browse products" button, which has been repointed to `#catalog` (the remaining "Browse the catalog by application" tabbed section) instead of a broken anchor.
- **"Fragrances"** (the old standalone `Sp` section, id `fragrances` — "Room fresheners built to last, not just to spray.") — moved into item 7's catalog tabs per request, rather than removed. It's now a tab inside "Browse the catalog by application," reusing that section's existing tab-bar/panel machinery — no new UI code needed, since the tab list is generated automatically from the underlying data object's keys. Its content (three product ranges — Thalam, Ragam, Pallavi — each a list of SRX-branded scents) is unchanged, just relocated from its own section into this tab. No inbound links pointed at `#fragrances`, so nothing needed repointing.

✅ **Tabs reordered and relabeled, per request.** The 5 catalog tabs now appear in this exact order with these exact labels: **Water Treatment → Wastewater Treatment → Specialty Maintenance → Housekeeping Products → Fragrance Products**. Previously the order was Specialty maintenance, Water treatment, Waste water treatment, House keeping products, Fragrances (insertion order in the underlying data object, which is what the tab bar iterates). The catalog still *opens* on the Specialty Maintenance tab by default (that default wasn't part of this request — only the display order and label wording changed); switching tabs is unaffected.

All three removed/superseded functions' code (`hp`, `mp`, `Sp`) is still physically present in the bundle but never called — harmless dead code, left in place rather than risking a surgical deletion inside a minified single-line file for no functional gain.

Header nav also updated over time: "FAQ" added, "Home"/"Products"/"Why Suraxil" removed, "Projects" and "About" added ("About" repointed to `#why`, since there's no real About section — see the nav history note near §9). "What We Do" is the only outstanding old-content pairing left unaddressed in the list above (catalog tabs, "How it works", Trust/Experience, Contact) — these still carry pre-mockup copy and aren't part of this document's numbered sections yet.

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

✅ **Live now — added below FAQ, above Custom Chemical Solutions (§8.7).** All six blocks (§8.1–§8.6) are rendered one after another under a single "Know More Details about Our Chemical Solutions" heading, each with its own `<h3>` heading, intro paragraph, sub-application cards (or a tag row for Fragrance, which has none in the mockup), and CTA button — separated by a thin divider between blocks. Anchor IDs match the SEO section's recommended slugs exactly (`#water-treatment-chemicals`, `#wastewater-treatment-chemicals`, `#industrial-maintenance-chemicals`, `#housekeeping-cleaning-chemicals`, `#fragrance-solutions`), except §8.6 ("Projects — Beyond Products"), which uses `#projects` instead of a slug from that list — the SEO section never allocated one for it, and `#custom-chemical-solutions` was already taken by the live §8.7 section.

**Built by reusing `sxWhatDetail`** — the same data object that originally held this content for the (now-removed) What We Do tab view (§2) — rather than duplicating the copy a second time. It's now the sole source for this section. All six CTA buttons still point to `#contact`.

✅ **Icons added to every sub-application tile, per request.** Each item in every category (30 total, across all six sections — Fragrance has none since it uses a tag row, not cards, per the mockup) now carries its own icon, rendered the same `why-icon` way as other icon+title+desc cards elsewhere on the page (e.g. §4 Why Suraxil). All reused from the 26 icons already bundled in the app — no new imports. Picked per item based on its theme, e.g.:

- Water Treatment: Cooling Tower Treatment → Waves, Boiler Water Treatment → ShieldCheck, Chiller Treatment → Droplets, RO Water Treatment → FlaskConical, HVAC Cleaning & Treatment → SprayCan, Specialized Water Treatment → BadgeCheck
- Wastewater Treatment: Coagulation → Droplets, Flocculation → Waves, Decolorization → Sparkles, pH Control → ClipboardList, Biological Treatment → FlaskConical, Sludge Management → Wrench, ETP & Industrial Effluent → Factory
- Specialty Maintenance: Descaling → SprayCan, Degreasing → Sparkles, Industrial Cleaning → Factory, Equipment Cleaning → Wrench, Corrosion Management → ShieldCheck, Process Cleaning → ClipboardList
- Housekeeping: Floor Care → Sparkles, Washroom Care → Droplets, Surface Cleaning → SprayCan, Glass Cleaning → Search, Kitchen & Utility Cleaning → Package, Facility Care → Building2
- Custom Solutions (Projects): Water Treatment Projects → Droplets, Wastewater & Effluent Projects → Waves, HVAC Cleaning → SprayCan, Water Optimization → BadgeCheck, Industrial Application Support → ClipboardList

With only 26 icons available for ~30 items plus everything else already using them elsewhere on the page (industries, why-suraxil features, etc.), some icons repeat across different categories — this is expected and intentional (icons are a decorative/thematic aid here, not unique identifiers); within any single category's own tile group, the icons were kept distinct from each other.

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

**Closing CTA block (redesigned per reference image):**
- **Eyebrow (uppercase, bold):** Have an Industrial Chemical Challenge?
- **Heading:** Let's Find the Right Solution.
- **Body:** Tell us about your application, system or requirement and our team can help identify the appropriate chemical solution.
- **Buttons:** Request a Quote (filled) · Talk to an Expert (outline) — both link to `#contact`

✅ **Live now.** Added directly above the Contact ("Get in touch") section, after FAQ — it didn't exist on the page before. Reuses the `steps-grid`/`step-card` numbered-step styling (same pattern as §5 Our Approach, same icon choices: Understand → Search, Analyze → ClipboardList, Recommend → BadgeCheck, Implement → Wrench, Optimize → CircleCheck) for the process steps, and a bordered callout box (inline-styled, same low-risk approach as §6/§7) for the closing CTA.

⚠️ **Colors adapted from the reference, not copied exactly.** The reference image showed green buttons; the closing CTA box was redesigned to match its copy and two-button layout, but the buttons use the site's own brand blue (`btn-primary` filled, `btn-ghost` outline — both already existing site-wide button classes, no new colors introduced) rather than green, since green doesn't appear anywhere else on the page and would clash with the rest of the brand. Flagging this as a deliberate adaptation, not an oversight — let me know if you actually want a green accent introduced.

✅ **Highlighted further, per request, with a hover state.** The box previously had a plain gray border on a transparent background (blended into the page). Now: a light blue tint background (`#EEF2FC`), a blue border instead of gray, and on hover the background deepens to a slightly richer blue, the border darkens, and a soft blue shadow lifts the box — a smooth `.2s` transition on all three. This needed a real CSS class (`cta-highlight`, added to the shared stylesheet) rather than inline styles, since inline styles can't express a `:hover` state. The eyebrow text color was also switched from plain ink-black to the brand blue, to tie in with the new blue-tinted box.

✅ **"Talk to an Expert" outline made visible, per request.** Once the box got its light-blue background, the button's default outline (the shared `.btn-ghost` class, a pale gray border) nearly disappeared against it — pale gray on pale blue has almost no contrast. Fixed by scoping a clearer style to just this box (`.cta-highlight .btn-ghost`): a blue border and blue text on a white fill, which inverts to solid blue on hover. Scoped to this box specifically rather than editing the shared `.btn-ghost` class itself, so the hero's secondary "Browse products" button (which also uses `.btn-ghost`, on a dark background where the original pale-gray outline works fine) is untouched.

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

✅ **Live now — footer rebuilt to this exact 4-column mockup layout**, replacing the site's original 3-column structure (Products / Company / Get in touch). Implementation notes:

- **Brand column:** kept the actual logo image (rather than replacing it with plain "SURAXIL" text, since the mockup's text lockup would be a downgrade from a real logo graphic) and added the "Specialty Chemicals & Industrial Solutions" tagline heading above the blurb paragraph.
- ✅ **Fixed:** the blurb under that tagline was still the older SEO-fixed sentence ("Suraxil provides specialty chemicals and industrial chemical solutions for water treatment...") instead of the mockup's actual text — flagged as a deliberate keep in the previous note, but the client asked for it to match the mockup, so it's now been corrected to: *"Chemical solutions for water treatment, wastewater treatment, industrial maintenance, housekeeping, fragrance and specialized applications."* This dropped the "industrial chemical solutions" keyword phrase this sentence had been carrying, so — to avoid re-opening the SEO gap from the earlier keyword audit — that phrase was re-homed into the "What We Do" section's **Custom Solutions** card blurb instead (now: *"Industrial chemical solutions developed around specific application requirements..."*, a one-word change). Re-ran the full 19-keyword audit after this change — everything still confirmed present, no regression.
- **Solutions column** — now links each item to its actual matching section instead of every item pointing at the same `#products` anchor (which the old "Products" column did): Water Treatment → `#water-treatment-chemicals`, Wastewater Treatment → `#wastewater-treatment-chemicals`, Specialty Maintenance → `#industrial-maintenance-chemicals`, Housekeeping → `#housekeeping-cleaning-chemicals`, Fragrance Solutions → `#fragrance-solutions`, Projects → `#projects`, Custom Solutions → `#custom-chemical-solutions`.
- **Industries column** — all 8 industries from §3, each linking to `#industries` (there's no per-industry sub-section to link to individually, same as the mockup's plain list).
- **Company column** — About Suraxil, Projects, Contact, then the "Need a Chemical Solution?" line and a **"Request a Quote →"** link (styled as a bold blue arrow-link, `#contact`).
- ⚠️ **"About Suraxil" reuses the same judgment call as the header nav's "About" link** (see below): there's no dedicated About section since "Who we are" was removed, so it points to `#why` (Why Suraxil) as the closest existing about-us content. Same caveat applies — flagging, not assuming this is final.
- "Projects" here links to `#projects` (the "Beyond Products" block), consistent with the header nav's "Projects" link.

### Header nav & footer arrangement — history

**Header nav** (desktop + mobile share the same list), current final list per request:
Solutions → Industries → Projects → About → FAQ → Contact, plus the header's separate highlighted button, now labeled **Request a Quote**.

⚠️ **Updated per request — two rounds of changes, latest first:**

- **Nav rebuilt to exactly:** Solutions (`#what-we-do`) → Industries (`#industries`) → **Projects** (`#projects`, new) → **About** (`#why`, new) → FAQ (`#faq`) → Contact (`#contact`). Removed from the nav: "Why Suraxil" and "Products" (both sections are still on the page and still reachable — via the footer's Company column, the hero's "Browse products" button, and other in-page links — just no longer called out in the header nav itself).
- **"Projects" links to `#projects`** — the anchor on the "Beyond Products. Solutions for Industrial Challenges." block inside §8's "Know More Details" sections (added a few turns ago), not a separate page.
- **"About" has no real target — flagging this rather than guessing silently.** The "Who we are" section was removed from the page entirely per an earlier request, so there is no `#about` section anymore. Rather than recreate a broken link (the exact bug fixed when "Who we are" was removed), **I pointed "About" at `#why`** (the "Why Suraxil" section — "More Than a Chemical Supplier.") since it's the closest thing to an about-us narrative currently on the page. This is my judgment call, not a confirmed decision — if you want a real About section back, or want "About" pointed somewhere else, let me know.
- The header's highlighted CTA button (next to the nav links, desktop and mobile) was renamed from **"Contact Us"** to **"Request a Quote"** — this makes it a nav item in spirit (it's the 7th item in your list) while keeping the site's existing two-tier header pattern (plain text links + one highlighted button), and it now matches the "Request a Quote" wording already used in the hero and footer CTAs. Still links to `#contact`.
- Previously (last turn): "Home" was removed from the nav list (the brand logo still links to `#home`), and "What We Do" was renamed to "Solutions" — both carried forward unchanged in this round.

**Footer "Company" column (superseded):** at one point this held a full 10-item site map (What We Do → Industries → Why Suraxil → Our Approach → The Suraxil Difference → How It Works → Experience → FAQ → Custom Solutions → Contact). That version no longer exists — the whole footer was rebuilt to the mockup's 4-column layout above, which has a much shorter 3-item Company column (About Suraxil, Projects, Contact) by design. Keeping this note for history only; it does not describe the current footer.

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
