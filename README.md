# SpaceOPS — Marketing Site

The marketing website for **SpaceOPS** (a product by Onyx Building Solutions).

Built with Next.js 14 (App Router), TypeScript, and Tailwind CSS. Zero external UI libraries — every component is hand-built for a cohesive, minimalist aesthetic.

---

## Stack

- **Framework:** Next.js 14.2 (App Router, RSC)
- **Language:** TypeScript 5.6 (strict mode)
- **Styling:** Tailwind CSS 3.4 + custom CSS variables
- **Typography:** Geist Sans + Geist Mono + Instrument Serif (via `next/font/google`)
- **Email:** Resend (for the contact form)
- **Deploy target:** Vercel (recommended)

---

## Quick start

```bash
# 1. Install
npm install

# 2. Copy env example and fill in values (optional for dev)
cp .env.example .env.local

# 3. Run locally
npm run dev
```

Visit `http://localhost:3000`.

Scripts:

- `npm run dev` — local dev server
- `npm run build` — production build
- `npm run start` — run the production build locally
- `npm run lint` — ESLint
- `npm run typecheck` — TypeScript check without emit

---

## Deploying to Vercel

1. Push this repo to GitHub.
2. In Vercel, click **New Project** and import the repo.
3. Add environment variables (see `.env.example`).
4. Deploy. That's it.

The contact form will log submissions to the server console if Resend env vars are missing, so it's safe to deploy without them initially.

---

## Project structure

```
spaceops-site/
├── app/                      # Next.js App Router pages
│   ├── (marketing)           # Homepage and marketing surfaces
│   ├── api/contact/          # Contact form handler (Resend)
│   ├── features/[slug]/      # Dynamic feature detail pages
│   ├── lp/[variant]/         # Paid-ad landing page variants (noindex)
│   ├── blog/[slug]/          # Blog post template
│   ├── compliance/           # US compliance content
│   ├── layout.tsx            # Root layout with fonts, nav, footer
│   ├── page.tsx              # Homepage
│   ├── sitemap.ts            # Dynamic sitemap
│   ├── robots.ts             # Robots rules
│   ├── opengraph-image.tsx   # Dynamic OG image (edge runtime)
│   └── icon.svg              # Favicon
├── components/
│   ├── ui/                   # Primitives: Button, Container, Accordion, Reveal
│   ├── layout/               # Nav, Footer, Logo
│   └── marketing/            # Hero, Pillars, FeatureGrid, Pricing, etc.
├── lib/
│   ├── site-config.ts        # Site metadata, nav links
│   ├── pricing.ts            # ⚠️ Pricing tiers — EDIT BEFORE LAUNCH
│   ├── features.ts           # Features data
│   ├── compliance.ts         # Compliance sections
│   ├── lp-variants.ts        # Landing page variant data
│   ├── blog.ts               # Blog posts
│   └── utils.ts              # Helpers
└── public/                   # Static assets
```

---

## ⚠️ Things to change before launch

These are marked with `TODO` comments in the code.

### 1. Pricing numbers (`lib/pricing.ts`)

The Pro tier is set to **$49/mo** and **$490/yr** as a placeholder reflecting the 17% annual discount copy. Replace with your real rates.

```ts
{
  id: 'pro',
  priceMonthly: 49,      // ← change me
  priceYearly: 490,      // ← change me
  ...
}
```

### 2. Legal copy (`app/terms/page.tsx`, `app/privacy/page.tsx`)

Both pages render a "placeholder" warning banner. Replace the skeleton sections with real legal copy drafted by your counsel before going live.

### 3. Testimonials

The homepage testimonial is an honest placeholder acknowledging customer proof will go there. Once partner-program testimonials arrive, edit `components/marketing/testimonial.tsx`.

### 4. Site URL

Set `NEXT_PUBLIC_SITE_URL` to your production URL so metadata, sitemap, and OG images use absolute URLs correctly.

### 5. Contact form email setup

Fill in the three Resend env vars in production:

- `RESEND_API_KEY` — from [resend.com](https://resend.com)
- `CONTACT_FROM_EMAIL` — must be on a verified Resend domain
- `CONTACT_TO_EMAIL` — where submissions are delivered

Without these, the form still works but submissions log to the server console instead of emailing.

---

## Design system

**Colors:**

| Token | Hex | Use |
|---|---|---|
| `bg` | `#FAFAF7` | Warm off-white, page background |
| `bg-tint` | `#F3F3EE` | Subtle tinted surfaces |
| `ink` | `#0A0A0A` | Primary text |
| `ink-3` | `#525252` | Secondary text |
| `indigo` | `#1E1B4B` | Accent base |
| `indigo-3` | `#4338CA` | Accent interactive |
| `line` | `#E7E5E0` | Default borders |

**Typography:**

- **Geist Sans** — UI, body, headlines
- **Geist Mono** — labels, data, eyebrows
- **Instrument Serif (italic)** — emphasis moments within headlines (wrap in `<span className="serif">`)

**Motion:** Scroll-reveal, staggered hero fade-up, nav border on scroll. All respect `prefers-reduced-motion`.

All tokens are centralised in `tailwind.config.ts` and `app/globals.css`.

---

## Adding content

**Add a blog post:** edit `lib/blog.ts`.
**Add a feature detail page:** edit `lib/features.ts`.
**Change nav / footer links:** edit `lib/site-config.ts`.
**Change pricing:** edit `lib/pricing.ts`.
**Add a paid-ad landing page:** edit `lib/lp-variants.ts`.

Each data file is the single source of truth — no need to hunt across components.

---

## Accessibility

- Semantic HTML throughout
- Keyboard-navigable nav, tabs, and accordion
- `focus-visible` rings on all interactive elements
- `prefers-reduced-motion` honoured globally
- ARIA roles on tab/tablist patterns
- Colour contrast meets WCAG AA on all text

---

## License

Proprietary © Onyx Building Solutions. All rights reserved.
