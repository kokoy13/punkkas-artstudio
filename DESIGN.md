# Punk'kas Art Studio — Design Reference
> A barber's blade in a dark art gallery. Terminal-lama grit lit by one warm lantern.

**Theme:** dark (locked, no light mode toggle)

## 0. Design Read

Reading this as: local barbershop / dark-art studio landing page (single scrolling page) for
walk-in customers in Batusangkar reached via Instagram and WhatsApp, with a punk / gothic dark-art
cinematic language, leaning toward Astro + Tailwind v4 utilities + grain texture + restrained GSAP
scroll reveals. Grounded in the shop's own Instagram photography (dark room, warm lantern light,
skull and dark-art decor, tattoo-style barber cape graphics) rather than generic barbershop tropes
(no blue/white sterile clinic look, no stock-photo gunmetal industrial look).

**Dials**
- `DESIGN_VARIANCE: 8` — the brand is literally built on hand-made dark art, asymmetry is authentic here.
- `MOTION_INTENSITY: 5` — cinematic reveals and a slow ambient glow pulse, nothing gimmicky. Small business, small JS budget.
- `VISUAL_DENSITY: 3` — few services, few sections. Let images and negative space carry it.

**Design system:** no official package fits a punk/dark-art aesthetic (Section 2.B in taste-skill).
Built from native CSS + Tailwind v4 utilities. Aesthetic is honestly labeled "cinematic dark +
grunge print texture", not dressed up as an official system.

---

## 1. Brand Facts (source of truth, do not invent around these)

- Name: **Punk'kas Art Studio** (stylised PUNK'KAS in the mark, always with the apostrophe)
- Category: pangkas rambut (barbershop) + the owner's personal dark-art decor studio
- Owner / barber: Regi (IG `regi_hitam`)
- Location: inside the old bus terminal, Terminal Guguak Katitiran, Batusangkar, Sumatera Barat
- Hours: Senin–Jumat 19.00–23.00 · Sabtu–Minggu 16.00–23.00
- Instagram: `@punkkas_artstudio`
- Voice: warm and humble in Indonesian ("Terima kasih sudah pangkas di sini bang"), never corporate.
  Captions lean into the dark-art identity openly ("Dark art dekorasi", "#darkarts").

---

## 2. Color Tokens

Sampled from the shop's actual lantern light, brass logo disc, and dark-art red accents.
No pure black, no pure white (Section 8.B — off-black/off-white only).

| Name | Value | Token | Role |
|---|---|---|---|
| Void | `#15110D` | `--color-bg` | Page background. Warm near-black, never `#000` |
| Char | `#1E1712` | `--color-surface` | Raised panels, cards, nav background on scroll |
| Char Line | `#382C22` | `--color-border` | Hairline borders, dividers. Low contrast on purpose |
| Bone | `#F2E9DC` | `--color-text` | Primary text. Warm off-white, never `#fff` |
| Ash | `#B4A491` | `--color-text-muted` | Secondary text, captions, meta labels |
| Ember | `#D9962E` | `--color-accent` | THE accent. All CTAs, links, focus rings, active nav state |
| Ember Dim | `#8A5F1E` | `--color-accent-dim` | Hover/pressed state of Ember, and accent on dark photography |
| Crimson | `#7A231D` | `--color-brand-mark` | Decorative only: logo mark, section dividers, image overlay tint. Never used for interactive elements |
| Open Neon | `#3ED9BE` | `--color-status-open` | ONLY for the live "buka/tutup" status dot (real semantic state, Section 9.F override) |

Rule: Ember is the single interactive accent, used identically in every section (Color Consistency
Lock). Crimson exists purely as a brand/decorative color sampled from the real dark-art decor (dried
roses, tattoo cape ink) and must never appear on a button or link. Open Neon exists nowhere else on
the page except the live status indicator.

---

## 3. Typography

| Role | Font | Notes |
|---|---|---|
| Display / Headlines | **Anton** | Heavy poster-condensed, all-caps for H1/H2 only. Concert-flyer weight, not a startup weight |
| Body | **Plus Jakarta Sans** | Warm, humanist, readable at small sizes. Not Inter |
| Meta / labels / hours / prices | **JetBrains Mono** | Small caps, used sparingly for hours table, price numbers, form labels only |

- Headline scale: `text-4xl md:text-6xl` default, `text-6xl md:text-7xl` only for the 2-3 word hero mark.
- Body: `text-base leading-relaxed max-w-[60ch]`, color `--color-text-muted` on body copy, `--color-text` on emphasis.
- No serif anywhere (brief is not editorial/luxury/heritage-print, Section 4.1 serif discipline).
- No italics needed; if ever used, `leading-[1.1]` minimum + `pb-1` for descender clearance.
- Zero em-dashes anywhere in copy (Section 9.G, non-negotiable). Use periods, commas or hyphens.

---

## 4. Spacing & Shape

- Container: `max-w-6xl mx-auto px-5 md:px-8`.
- Section rhythm: `py-20 md:py-32`, generous, art-gallery breathing room (matches low VISUAL_DENSITY).
- **Shape Consistency Lock:** all-sharp system. Corner radius `0` on cards, images, buttons and inputs.
  Only exception: the live status pill (`rounded-full`), which is the one pill element on the page.
- Grid over flex-math: `grid grid-cols-1 md:grid-cols-*` everywhere, never percentage-width flex children.
- Breakpoints: `sm 640 / md 768 / lg 1024 / xl 1280`.

---

## 5. Imagery

- Source: shop's own Instagram photography first: skulls and dark-art still life, lantern light,
  barber-cape tattoo graphics, real customers (kids and adults). Curated high-res stock stands in only
  as a placeholder until the owner supplies final photo/video exports.
- Treatment: desaturate stock slightly toward the Void/Ember palette with a CSS `mix-blend` amber
  duotone overlay so borrowed stock reads as one consistent world with the shop's own dark, warm-lit
  photos, not a mismatched stock-photo seam.
- No div-based fake screenshots, no hand-rolled decorative SVG icons.
- Grain: a subtle fixed-position noise/grain texture overlay (`opacity: 0.05`) across the whole page,
  referencing the analog, hand-made print quality of the owner's actual sketchbook art.

---

## 6. Icons

Library: **Phosphor Icons** (`@phosphor-icons/react` equivalent web font/SVG set), `strokeWidth`
consistent at `1.5`, `weight="bold"` for small UI glyphs to hold up against the dark background.
Used for: WhatsApp, Instagram, map pin, clock, scissors. One family only.

---

## 7. Motion

- Hero: soft ambient glow pulse behind the headline (CSS `@keyframes`, `prefers-reduced-motion` safe).
- Section reveals: fade + 16px rise on scroll into view (IntersectionObserver, not scroll listeners).
- Gallery images: subtle scale-on-hover (`scale-[1.03]`), 300ms, no rotation gimmicks.
- Status dot: real-time pulse only while the shop is actually open.
- Every animation must be justifiable in one sentence. No motion for show.

---

## 8. Components & Page Sections (layout-family diversity, Section 4.7)

1. **Nav** — single line, ≤72px height, logo mark + 3 links + one WhatsApp CTA, sticky with `--color-surface` backdrop on scroll.
2. **Hero** (full-bleed photo layout family) — live status pill, one headline (≤2 lines), one subline (≤20 words), one primary CTA (WhatsApp) + one secondary (Instagram). No trust strip, no tagline stack.
3. **Filosofi / Tentang** (asymmetric split layout family) — story of the owner's dark-art studio-meets-barbershop concept, stacked headline+body (not split-header pattern), paired with an offset image.
4. **Layanan & Harga** (plain list layout family, no equal-card row) — services grouped with mono-numeral pricing, hairline dividers used sparingly.
5. **Galeri** (asymmetric bento layout family) — mixed-size grid of haircuts + dark-art decor shots, at least 2 cells with real tonal/image variation.
6. **Jam & Lokasi** (full-width panel layout family) — hours table + address + embedded map, Ember accent on the "open now" state.
7. **Footer** — WhatsApp, Instagram, address recap, hours recap. One CTA intent only (chat), no duplicate "contact us" language.

No two consecutive sections share a layout family (zigzag cap, Section 4.7).

---

## 9. Non-negotiables checklist (from taste-skill Section 14, applied to this project)

- [ ] One accent (Ember) used identically everywhere, Crimson never on interactive elements
- [ ] Zero em-dashes anywhere in shipped copy
- [ ] Hero fits viewport, headline ≤2 lines, subline ≤20 words, CTA visible without scrolling
- [ ] Max 1 eyebrow label total on the page (this is a small page, budget is tight)
- [ ] No 3-equal-card feature rows anywhere
- [ ] No decorative dots except the real open/closed status indicator
- [ ] No fake reviews, no fake customer names, no invented prices presented as final
- [ ] Sharp corners everywhere except the one status pill
- [ ] Real Phosphor icons only, no hand-rolled SVG paths
