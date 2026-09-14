# Suraxil — Home Page Content

**Positioning:** Suraxil **delivers trusted chemical products** to industries, hospitals, businesses and individual customers. The products are made by manufacturers with 20+ years of experience — that experience is stated as backing for the range, not as a disclaimer about what Suraxil is.

**Voice rule:** Suraxil is the one who delivers. Write in the active first person — *we deliver, we confirm, we handle*. Do not hedge the company into a go-between ("we are not the factory", "we connect you with suppliers", "we source rather than manufacture"). Equally, never claim Suraxil manufactures, formulates or produces: the manufacturing experience belongs to the manufacturers behind the range.

> **Porting note:** this content is live in `assets/index-BN5FljXk.js` (a production bundle — there is no React source in this repo). If the real source lives elsewhere, use this document to port the copy back, otherwise the next build will overwrite it.

---

## SEO

**Title** (46 chars)
```
Suraxil | Trusted Chemical Products, Delivered
```

**Meta description** (154 chars)
```
Suraxil delivers trusted chemical products to industries, hospitals, businesses and individual customers, backed by 20+ years of manufacturing experience.
```

Both are live in [index.html](index.html), along with matching Open Graph and Twitter card tags. `og:url` and a canonical tag were deliberately left out — add them once the production domain is confirmed.

---

## 1. Hero

**Eyebrow:** Trusted chemical products, delivered

**Headline**
> Trusted chemical products, delivered to industries, hospitals and businesses.

**Subheadline**
> Suraxil delivers a wide range of chemical products — specialty maintenance, water and waste water treatment, housekeeping and fragrances — backed by more than 20 years of manufacturing experience, to industrial plants, hospitals, businesses and individual customers.

**Primary CTA:** Request a quote → `#contact`
**Secondary CTA:** Browse products → `#products`

### Banner layout

The hero is a **full-viewport banner**: `min-height: calc(100svh - 110px)` (110px = the 34px utility bar + 76px nav row above it), so it fills the screen below the header with no gap and no overshoot.

The copy runs **full page width, left-aligned**. The banner is the one section that ignores the 1160px `.shell` cap: `.hero-inner` overrides it with `max-width:none` and a fluid gutter of `clamp(24px, 4.5vw, 72px)`, so the text spans the viewport rather than a centred column. Nothing is capped — headline, sub, CTAs and stat strip all run the full width.

The headline carries **no hard line breaks**; it flows as one sentence and wraps naturally to fill the width.

**Type scale** (all fluid, so no fixed breakpoints are needed):

| Element | Size |
|---|---|
| Headline | `clamp(28px, 3.9vw, 54px)` |
| Sub | `clamp(15px, 1.2vw, 18px)` |
| Stat figure | `clamp(21px, 2.1vw, 26px)` |

The stat tiles **pack left** with a `clamp(20px, 2.4vw, 38px)` gap rather than spreading edge to edge — at full page width `space-between` pushed `20+`, `5` and `4` so far apart they stopped reading as one strip. The rule above them still spans the full width.

That `max-width:none` override works on source order, not specificity: `.shell` and `.hero-inner` are both single-class selectors, and `.hero-inner` is declared later in the stylesheet. **If the hero CSS is ever moved above the `.shell` rule, the banner will snap back to a 1160px column.**

### Banner artwork

The artwork is **one motif per product line**, arranged left to right along a shared ground line so the banner shows what Suraxil actually supplies rather than a generic factory:

| Zone | Product line | Motif |
|---|---|---|
| x 258–372 | **Specialty maintenance** | HVAC coil block with fin lines, on legs, under a maintenance gear |
| x 404–564 | **Water treatment** | Hyperboloid cooling tower with banding, a water droplet and spray above |
| x 570–744 | **Waste water treatment** | Circular clarifier — basin, concentric weir rings, centre hub and radial bridge arm, with bubbles rising |
| x 744–900 | **House keeping** | Trigger spray bottle with mist lines and a sparkle, plus a mop bucket |

A pipe run with valve wheels links the zones along the ground, and a single gradient sweep (`#2F5FFF` → `#17B8A6`) rises through the scene as the process flow, with a second, dimmer line running below ground as a header main. A benzene ring sits top-right as the chemistry signature.

The flow lines reuse the existing `.draw-path` draw-on animation and the node dots reuse `.drop`, so the banner animates in on load and still honours `prefers-reduced-motion`. It is bottom-anchored (`preserveAspectRatio="xMidYMax"`) so the equipment stands on the banner floor like a skyline.

The artwork is **centred** behind the centred copy (`left:50%` + `translateX(-50%)`) at `opacity:.34` on desktop and `.22` on mobile, so text reads over it rather than beside it. The scrim is a vertical gradient giving even coverage across the whole banner.

The viewBox is `206 0 694 640` — cropped on the left, because the empty band that used to clear left-aligned copy would otherwise make a centred backdrop look lopsided. The ground line and both flow sweeps deliberately start at `x=198`, outside the crop, so they bleed off-frame instead of starting in mid-air; every other element sits inside it. **If you widen the crop, extend those three lines to match.**

It is drawn rather than photographed on purpose: no licensing question, ~5KB, sharp at any resolution, no extra network request, and it uses the brand palette directly. Changing a product line means editing shapes in one place, not re-sourcing a photo.

**To use a photo as the background**, drop the file at `assets/hero-bg.jpg` and change one line in the stylesheet:

```css
--hero-image: none;                      /* current */
--hero-image: url('/assets/hero-bg.jpg'); /* with a photo */
```

It is the **first** layer in a stacked `background-image`, so the navy gradient stays underneath as the base — the banner looks finished with or without a photo, and a missing file degrades to the gradient rather than breaking.

A scrim (`.hero::after`) sits between the background and the text: a left-to-right dark fade on desktop, top-to-bottom on mobile. That is what keeps the headline readable over an arbitrary photo, so keep it if you swap the image. Pick a photo with a calm left-hand side, since that is where the text sits.

Type scales fluidly (`clamp()`), so the headline fills the banner on large screens and stays readable on phones without fixed breakpoints.

**Trust strip** — three outlined glass tiles, each with an icon badge in front:

| Icon | Value | Label |
|---|---|---|
| BadgeCheck | 20+ | years of experience behind our products |
| Package | 5 | chemical product lines |
| Users | 4 | customer segments served |

Each tile is `1px solid rgba(255,255,255,.18)` at `14px` radius over a `rgba(255,255,255,.05)` glass fill, with a lift-and-brighten hover. The icon badge is a 38px rounded square tinted in brand blue. The strip's old `border-top` rule was removed — a rule above three bordered cards reads as clutter.

The `5` counts the actual product lines on the page (specialty maintenance, water treatment, waste water treatment, housekeeping, fragrances). The `4` counts the customer segments in *Industries We Serve*. Both are verifiable from the page itself rather than asserted.

### Hero headline alternatives

1. **Trusted chemical products, delivered to industries, hospitals and businesses.** *(in use — leads with the promise, names the segments, strong for SEO)*
2. **The chemical products you need, delivered when you need them.** *(shortest and most universal; strongest for individual buyers)*
3. **Trusted chemical products, backed by 20+ years of manufacturing experience.** *(leads with credibility; use if trust is the bigger objection than convenience)*

---

## 2. About / Introduction

**Label:** Who we are
**Heading:** Chemical products you can rely on.

> Suraxil delivers trusted chemical products to industries, hospitals, businesses and individual customers. From daily facility upkeep to water treatment and effluent management, we keep it simple to get the right product, in the right quantity, when you need it.

> Every product we deliver is made by manufacturers with more than 20 years of experience in the industry, and arrives with the technical and safety documentation you need. One point of contact, from your first enquiry through to delivery.

**Checklist**
- Trusted chemical products across every major category
- Backed by more than 20 years of manufacturing experience
- One point of contact from enquiry through to delivery

**Section artwork** — a hub-and-spoke: Suraxil as the blue hub at the centre, six sector nodes around it, each carrying the icon for what it represents (Factory = industry, HeartPulse = healthcare, FlaskConical = pharma/lab, Building2 = business, Users = individual customers, Droplets = water treatment). It illustrates the caption underneath it, *Sectors we serve*, instead of the anonymous coloured dots that were there before.

The viewBox is `440 × 260` (aspect 1.69), capped at `max-width: 440px`. It was `320 × 320` — a square that the card rendered at roughly 490px wide and therefore ~490px tall, which swallowed the section. It now sits at 260px tall.

The one place the distinction is drawn is *"made by manufacturers with more than 20 years of experience"* — it credits the makers without turning the sentence into a disclaimer.

---

## 3. Why Choose Suraxil

**Label:** Why Suraxil
**Heading:** Why customers buy from us.
**Sub:** The right product, delivered on time, with the documentation you need. That is the whole promise.

| Card | Copy |
|---|---|
| **Trusted manufacturers** | Every product we deliver comes from established manufacturers with a proven track record. |
| **20+ years of experience** | More than two decades of hands-on chemical manufacturing experience stands behind the products we deliver. |
| **Quality-focused sourcing** | Consistency matters. What arrives matches what you ordered, batch after batch. |
| **Wide range of products** | Specialty maintenance, water and waste water treatment, housekeeping and fragrances — all under one enquiry. |
| **Reliable procurement support** | We handle availability, quantities, documentation and delivery coordination so you do not have to. |
| **Customer-focused service** | A plant, a hospital, a small business or a single buyer — the same clear answers and the same attention. |

---

## 4. Industries We Serve

**Label:** Industries we serve
**Heading:** Built for every kind of buyer.
**Sub:** Large orders and single purchases are handled by the same team, with the same care. If you need a chemical product, you are in the right place.

| Segment | Copy |
|---|---|
| **Industries & manufacturing** | Plants and production facilities that need maintenance, cleaning and treatment chemicals for day-to-day operations. |
| **Hospitals & healthcare** | Hospitals, clinics and healthcare facilities that need a dependable supply of disinfectants, cleaning and hygiene products. |
| **Individual customers** | Individual buyers who need a specific chemical product, in the quantity they actually need. |
| **Businesses & institutions** | Offices, hotels, facility management teams and institutions with recurring chemical requirements. |

---

## 5. Chemical Product Sourcing

**Label:** Our chemical products
**Heading:** Find the product you need. We deliver it.

> Tell us the product, the application, or simply the problem you need solved. Pick a line below to see what is available, or send us an enquiry and we will confirm the right product, the price and the delivery. Technical and safety data sheets come with every order on request.

**Product lines**

| Line | Blurb |
|---|---|
| Specialty maintenance | De-greasers, disinfectants and drain treatments for daily facility upkeep. |
| Water treatment | Cooling towers, chillers, boilers and RO systems, kept scale- and corrosion-free. |
| Waste water treatment | Coagulants, flocculants and biological aids for cleaner effluent discharge. |
| House keeping products | Surface, glass and washroom care made for everyday commercial use. |
| Procurement support | Product guidance, documentation and delivery coordination on every order. |
| Fragrances | Concentrated, water-soluble room fresheners across three ranges. |

The full SRX catalog (all product entries and the three fragrance ranges) is unchanged. Category intros were reworded only where they claimed in-house formulation — e.g. *"Dosing programmes for cooling towers…"* → *"Treatment chemicals for cooling towers, chillers, boilers and RO plants, to keep scale, corrosion and microbial growth in check."*

---

## 6. How It Works

**Label:** How it works
**Heading:** Three steps from enquiry to delivery.
**Sub:** No account to open and no minimum to clear before you can ask. Start with a message.

| # | Step | Copy |
|---|---|---|
| 01 | **Tell us what you need** | Send us the product name, the application, or simply the problem you are trying to solve. A rough description is enough to start. |
| 02 | **We source and confirm** | We match your requirement to the right product, confirm availability from manufacturers with decades of experience, and send you the pricing. |
| 03 | **You receive the product** | We deliver the product with the documentation you need, and stay available for repeat orders and follow-up support. |

**Callout:** Not sure which product fits? Describe the application and we will suggest the options worth considering before you commit to anything.

---

## 7. Trust / Experience

**Label:** Experience you can rely on
**Heading:** More than 20 years of experience behind every product we deliver.

> The chemical products Suraxil delivers are made by manufacturers with more than 20 years of experience across specialty maintenance, water treatment and effluent treatment chemistry. That depth of experience is why the range stays consistent order after order — and it is why we are selective about what goes into it.

**What stands behind the range**
- Manufacturers with 20+ years of hands-on chemical experience
- Established production and quality control processes
- Consistent, repeatable formulations order after order
- Technical and safety documentation available on request

**What you get with Suraxil** *(guidance, documentation and delivery)*

> We take on the parts of buying chemicals that cost you time — identifying the right product, confirming availability, gathering documentation and coordinating delivery — so you deal with one team from start to finish.

- A single point of contact for every enquiry
- Guidance on the right product for your application
- Coordination of quantities, documents and delivery
- Support for repeat and scheduled requirements

Every "20+ years" reference is attributed to the **manufacturers**, never to Suraxil itself — but it is framed as the strength behind the range, not as a caveat.

---

## 8. Final CTA

**Label:** Get in touch
**Heading:** Tell us what you need. We will deliver it.

> Send us the product, quantity or application you are looking for — whether you are an industrial plant, a hospital, a business or an individual customer — and our team will come back with availability and a quote.

**Button:** Email info@suraxil.com

Contact details (Sriperumbudur address, phone numbers, email) are unchanged.

---

## CTA button text options

Ranked by directness. Options 1 and 2 are currently live.

1. **Request a quote** — clearest commercial intent; best for the B2B buyer who already knows the product. *(in use, hero primary)*
2. **Browse products** — low-commitment, lets a visitor self-serve first. *(in use, hero secondary)*
3. **Tell us what you need** — warmest and lowest-friction; strongest for individual customers and anyone unsure of the exact product.
4. **Get your products delivered** — leads with the outcome rather than the transaction; good for a mid-page CTA.
5. **Talk to our team** — most consultative; suits complex or recurring industrial requirements.

---

## What changed from the previous manufacturer positioning

Removed, because each claimed manufacturing or a credential that belongs to a factory:

- "Suraxil **formulates and manufactures** … from **our own laboratory** in Chennai"
- "**ISO 9001:2015 & 14001:2015 certified**" hero badge, and the "Every formulation ships from **our ISO-certified factory**" paragraph
- "Suraxil started in **2004**…", "We implement environmentally responsible processes **for manufacturing**…"
- Hero stats **40+ distinct formulations**, **6 industry verticals**, **ISO 9001/14001**
- **Suraxil Labs** R&D wing, the in-house testing lab, field installation teams, and the custom-build projects section (ETP/WTP design, HVAC contracting, BOD/COD/Legionella testing)

**If any of these are genuine facts about the manufacturing group behind Suraxil**, they can go back — but they need re-attributing ("made in an ISO-certified facility"), never stated as Suraxil's own operation. They were pulled rather than reworded because I could not verify who holds them.

Section order is now: Hero → About → Why Suraxil → Industries → Product range → Catalog → Fragrances → How it works → Experience → Contact. Nav and footer were updated to match, and all in-page anchors resolve.
