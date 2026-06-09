@AGENTS.md

# Tresna Wedding — Project Context for Claude

## What this is

A **static portfolio site** for a fictional Bandung wedding organizer called "Tresna". Built to showcase web design capability (Codading concept project). Deployed as a subdomain on a VPS via nginx.

## Tech stack

| Tool | Version | Notes |
|---|---|---|
| Next.js | 16.2.7 | App Router, `output: 'export'` (static) |
| TypeScript | 5 | strict mode |
| Tailwind CSS | v4 | CSS-first config — NO `tailwind.config.ts` |
| Fonts | next/font/google | Cormorant Garamond (heading) + DM Sans (body) |
| Testing | Jest + React Testing Library | jsdom environment |

## Critical: Tailwind v4 CSS-first config

All design tokens live in `app/globals.css` using `@theme { }` — **not** a `tailwind.config.ts` file (which doesn't exist in this project). Responsive component patterns use `@layer components` classes rather than Tailwind responsive variants.

## Project status (as of 2026-06-09)

**Complete** — all 10 sections built, 15 tests passing, production build verified.

Commits in order:
1. Scaffold (Next.js 16, Tailwind v4, Jest)
2. Design tokens + base styles (`app/globals.css`)
3. Root layout + Pexels image constants (`app/layout.tsx`, `lib/images.ts`)
4. Navbar — scroll shadow, mobile drawer, hamburger morph (with 5 tests)
5. Hero — full-bleed image, stats, scroll hint
6. About, Packages, HowItWorks, Gallery (Gallery with 5 filter tests)
7. Testimonials, FAQ (accordion with 5 tests), Contact, Footer
8. Wire `app/page.tsx` — all sections assembled

## File map

```
app/
  layout.tsx        Root layout, Google Fonts, metadata
  page.tsx          Assembles all 10 sections
  globals.css       Tailwind v4 @theme tokens + @layer base/components

lib/
  images.ts         Pexels URL constants (GalleryImage type, IMAGES, GALLERY_IMAGES)

components/sections/
  Navbar.tsx        'use client' — fixed nav, scroll shadow, mobile drawer
  Hero.tsx          Full-bleed hero, stats, scroll hint
  About.tsx         2-col layout + 3 trust cards
  Packages.tsx      3-card pricing grid
  HowItWorks.tsx    4-step timeline
  Gallery.tsx       'use client' — filter tabs + masonry grid
  Testimonials.tsx  3 testimonial cards
  FAQ.tsx           'use client' — single-open accordion
  Contact.tsx       CTA band (WhatsApp + Instagram)
  Footer.tsx        Dark footer with nav + connect links

__tests__/
  Navbar.test.tsx   5 tests (drawer open/close, scrim, nav link)
  Gallery.test.tsx  5 tests (filter behaviour)
  FAQ.test.tsx      5 tests (accordion open/close)
```

## Key decisions & gotchas

- **Images**: All from Pexels free licence. URLs in `lib/images.ts` with JSDoc legal attribution. `images.unoptimized: true` in `next.config.ts` — required for static export.
- **`aria-hidden` + `getByRole`**: When `aria-hidden="true"`, elements are invisible to RTL's `getByRole`. Use `{ hidden: true }` option in test queries that look for initially-hidden elements (see Navbar tests).
- **Gallery tall items**: `.gitem-tall` in `@layer components` sets `aspect-ratio: auto`. Do NOT apply Tailwind's `aspect-[4/3]` utility to tall items — it lives in `@layer utilities` and would override the component class. Gallery renders only `visible` items (conditional render, not `hidden` class) so filter tests work with `queryByText`.
- **Copy**: English primary, Bahasa Indonesia in `// ID:` comments throughout.
- **WA link**: `https://wa.me/6280000000000` — placeholder number, replace before real launch.
- **IG link**: `https://instagram.com/` — placeholder, replace before real launch.
- **Concept disclaimer**: Footer bottom bar contains `"This is a concept project by Codading to showcase web design capability."` — must remain visible.

## Commands

```bash
npm run dev       # dev server
npm run build     # static export → out/
npm test          # Jest (15 tests)
npx serve out     # local smoke-test of built output
```

## Possible next steps

- Replace placeholder WA/IG links with real ones
- Replace testimonial copy with consented real quotes
- Add `<head>` OG meta tags / social sharing image
- Set up HTTPS on VPS (certbot) and uncomment nginx redirect in DEPLOY.md
- Add a loading skeleton or blur placeholder for Pexels images
- Animate section entry (Intersection Observer or Framer Motion)
