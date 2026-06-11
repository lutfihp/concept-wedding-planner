# Spec: Project Rename + Favicon — 2026-06-11

## Scope

Two independent housekeeping tasks:
1. Align technical project name with the repo/directory name `concept-wedding-planner`
2. Wire the favicon assets from the design handoff into the Next.js app

The fictional brand name "Tresna" is **not** changed — it remains in all site-visible copy.

---

## Task 1 — Project name

### What changes

| File | Old value | New value |
|---|---|---|
| `package.json` | `"name": "tresna-wedding"` | `"name": "concept-wedding-planner"` |
| `package-lock.json` | `"name": "tresna-wedding"` (line 1) | `"name": "concept-wedding-planner"` |
| `CLAUDE.md` | `# Tresna Wedding — Project Context for Claude` | `# Concept Wedding Planner — Project Context for Claude` |

### What does NOT change

- All component copy referencing "Tresna" (navbar, hero, footer, metadata title, etc.)
- `app/layout.tsx` metadata title: `'Tresna — Wedding Organizer Bandung'`
- Any content in `handoffs/` — those are source assets, not project config

---

## Task 2 — Favicon

### Approach

Use Next.js App Router file-based icon conventions so `<link>` tags are auto-generated — no manual edits to `layout.tsx` needed.

### Files to copy

| Source | Destination | Generated tag |
|---|---|---|
| `handoffs/favicon.svg` | `app/icon.svg` | `<link rel="icon" type="image/svg+xml" href="/icon.svg">` |
| `handoffs/favicon-180.png` | `app/apple-icon.png` | `<link rel="apple-touch-icon" sizes="180x180" href="/apple-icon.png">` |

### Remaining handoff PNGs

Copy `favicon-16.png`, `favicon-32.png`, `favicon-48.png`, `favicon-512.png` to `public/` so they are served at `/favicon-*.png` but require no `<link>` wiring — the SVG covers all modern browsers at any resolution.

### No changes to `layout.tsx`

Next.js detects `app/icon.svg` and `app/apple-icon.png` automatically; adding manual `metadata.icons` on top would produce duplicate tags.

---

## Out of scope

- Changing any Pexels image URLs
- Updating WhatsApp / Instagram placeholder links
- Any visual or copy changes to site sections
