# CLAUDE.md

This file is read automatically by Claude Code at the start of every session. It contains the context you need to work effectively on this project.

---

## What this project is

The marketing website for **SpaceOPS** (onyxspaceops.com) — a quality-control SaaS platform for commercial janitorial and facility-management companies, built by **Onyx Building Solutions**.

This repo is the *marketing site* only. The *product* lives at `app.onyxspaceops.com` (a separate Supabase-native Next.js application, not in this repo).

---

## Tech stack

- Next.js 14.2 (App Router, React Server Components by default)
- TypeScript 5.6, strict mode
- Tailwind CSS 3.4 with custom CSS variables in `app/globals.css`
- Typography: Geist Sans + Geist Mono (via `geist` package) + Instrument Serif (via `next/font/google`)
- Resend for the contact form
- Deploy target: Vercel

## Running locally

```bash
npm install
npm run dev           # http://localhost:3000
npm run typecheck     # strict TS check
npm run build         # production build
```

The contact form works without Resend env vars — submissions log to the server console if unconfigured.

---

## Architecture decisions (read before changing)

### Data lives in `lib/`, not components
Every page's content is sourced from a single file in `lib/`:
- `lib/site-config.ts` — nav, footer, global metadata
- `lib/pricing.ts` — pricing tiers, FAQs
- `lib/features.ts` — features (drives both `/features` index and `/features/[slug]` detail)
- `lib/compliance.ts` — compliance page sections
- `lib/lp-variants.ts` — paid-ad landing page variants at `/lp/[slug]`
- `lib/blog.ts` — blog posts

**Rule:** if you're editing copy, edit the data file. Don't hardcode content in components.

### Design system
- Design tokens live in two places, which must stay in sync:
  - `tailwind.config.ts` — Tailwind's `theme.extend`
  - `app/globals.css` — CSS variables and `.serif`, `.lead`, `.eyebrow`, `.section` component classes
- Typography pairing is intentional:
  - Geist Sans for UI and body
  - Geist Mono for labels, data, eyebrows (small uppercase)
  - Instrument Serif *italic* for emphasis inside headlines — wrap with `<span className="serif">...</span>`
- Accent color is **deep indigo** (`#1E1B4B` base, `#4338CA` interactive). No gradients.
- Surfaces use 1px borders OR subtle depth, never both. No card-on-card drop shadows.

### Component conventions
- `components/ui/` — primitives (Button, Container, Accordion, Reveal, Eyebrow, SectionHead)
- `components/layout/` — Nav, Footer, Logo
- `components/marketing/` — full sections (Hero, Pillars, FeatureGrid, PricingTable, etc.)
- Client components are marked with `'use client'` only where state or effects are needed (Nav, RoleTabs, Accordion, ContactForm, PricingTable, Reveal). Everything else is an RSC.
- Animations respect `prefers-reduced-motion` globally (see `app/globals.css`).

### Routing
All routes are in `app/`. Dynamic segments: `[slug]` for features and blog, `[variant]` for landing pages. `/lp/*` is `noindex` by design (paid-ad traffic only).

---

## Known work items / TODOs

These are marked with `TODO` comments in code. Fix before launching:

1. **Pricing numbers** (`lib/pricing.ts`): Pro tier is a placeholder at $49/mo, $490/yr. Replace with real rates.
2. **Legal copy** (`app/terms/page.tsx`, `app/privacy/page.tsx`): skeletons with placeholder banners. Need real legal copy from counsel.
3. **Testimonial** (`components/marketing/testimonial.tsx`): honest placeholder — replace when partner-program testimonials arrive.
4. **Env vars**: set `NEXT_PUBLIC_SITE_URL` to production URL; set Resend credentials (`RESEND_API_KEY`, `CONTACT_FROM_EMAIL`, `CONTACT_TO_EMAIL`) for the contact form.

---

## Style and tone guidelines (for any copy changes)

- The target buyer is a facilities professional — often skeptical of tech, non-technical. Copy should feel **institutional and precise**, not startup-y.
- British-ish spelling where natural ("organisation", "centre") — this was a conscious tonal choice in the content doc. Maintain consistency.
- No exclamation marks in body copy. No emoji. No marketing filler ("revolutionary", "cutting-edge", etc.).
- Headlines break into serif italic for emphasis — pick 1-3 words per headline, not a whole phrase.
- Curly quotes (`\u2019`, `\u201C`, `\u201D`) over straight quotes in prose.

---

## When you change things

- Run `npm run typecheck` before proposing large changes — the project is strict-mode TS.
- If you add a new page, update `app/sitemap.ts` so it's included.
- If you add a new feature or blog post, extend the data file in `lib/` — don't create a new route manually.
- The homepage's original HTML mockup is the design-language reference — stay faithful to its visual language unless the user explicitly asks for a new direction.

---

## What NOT to do without asking

- Don't add a UI library (shadcn, Radix, Chakra, MUI, etc.). Every component is hand-built for a reason.
- Don't add a CMS. The MDX/data-file approach is intentional for this stage.
- Don't change the font pairing. Geist + Instrument Serif is the brand's visual signature.
- Don't add marketing tracking scripts (GA, Meta Pixel, Hotjar, etc.) without the user requesting them by name.
- Don't switch to Pages Router. This is App Router throughout.
