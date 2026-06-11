# Rename + Favicon Implementation Plan

> **For agentic workers:** REQUIRED SUB-SKILL: Use superpowers:subagent-driven-development (recommended) or superpowers:executing-plans to implement this plan task-by-task. Steps use checkbox (`- [ ]`) syntax for tracking.

**Goal:** Align the technical project name with the repo directory (`concept-wedding-planner`) and wire the design-handoff favicon assets into the Next.js app using file-based conventions.

**Architecture:** Two independent housekeeping tasks — a text-replacement pass across three config/doc files, then a file-copy pass placing `favicon.svg` and `favicon-180.png` into `app/` (Next.js auto-generates `<link>` tags) and the remaining PNGs into `public/`. No logic changes, no new components, no `layout.tsx` edits.

**Tech Stack:** Next.js 16 App Router (static export), PowerShell (file copy), npm (build verification)

---

### Task 1: Update project name in technical files

**Files:**
- Modify: `package.json` (line 2 — `name` field)
- Modify: `package-lock.json` (line 2 — `name` field)
- Modify: `CLAUDE.md` (line 3 — document heading)

- [ ] **Step 1: Edit `package.json`**

Open `package.json`. Change line 2 from:
```json
"name": "tresna-wedding",
```
to:
```json
"name": "concept-wedding-planner",
```

- [ ] **Step 2: Edit `package-lock.json`**

Open `package-lock.json`. Change the `name` field near the top (typically line 2) from:
```json
"name": "tresna-wedding",
```
to:
```json
"name": "concept-wedding-planner",
```

- [ ] **Step 3: Edit `CLAUDE.md`**

Change the first heading (line 3, after the `@AGENTS.md` include) from:
```markdown
# Tresna Wedding — Project Context for Claude
```
to:
```markdown
# Concept Wedding Planner — Project Context for Claude
```

- [ ] **Step 4: Verify no "tresna-wedding" remains in source files**

Run:
```powershell
Select-String -Path "package.json","package-lock.json","CLAUDE.md" -Pattern "tresna-wedding"
```
Expected: no output (zero matches).

- [ ] **Step 5: Run tests to confirm nothing broke**

Run:
```powershell
npm test -- --passWithNoTests
```
Expected: all 15 tests pass, no failures.

- [ ] **Step 6: Commit**

```powershell
git add package.json package-lock.json CLAUDE.md
git commit -m "chore: rename project from tresna-wedding to concept-wedding-planner"
```

---

### Task 2: Wire favicon assets into Next.js

**Files:**
- Create: `app/icon.svg` (copy of `handoffs/favicon.svg`)
- Create: `app/apple-icon.png` (copy of `handoffs/favicon-180.png`)
- Create: `public/favicon-16.png` (copy of `handoffs/favicon-16.png`)
- Create: `public/favicon-32.png` (copy of `handoffs/favicon-32.png`)
- Create: `public/favicon-48.png` (copy of `handoffs/favicon-48.png`)
- Create: `public/favicon-512.png` (copy of `handoffs/favicon-512.png`)

- [ ] **Step 1: Copy SVG favicon to `app/`**

```powershell
Copy-Item "handoffs\favicon.svg" "app\icon.svg"
```

- [ ] **Step 2: Copy Apple touch icon to `app/`**

```powershell
Copy-Item "handoffs\favicon-180.png" "app\apple-icon.png"
```

- [ ] **Step 3: Copy remaining PNGs to `public/`**

```powershell
Copy-Item "handoffs\favicon-16.png"  "public\favicon-16.png"
Copy-Item "handoffs\favicon-32.png"  "public\favicon-32.png"
Copy-Item "handoffs\favicon-48.png"  "public\favicon-48.png"
Copy-Item "handoffs\favicon-512.png" "public\favicon-512.png"
```

- [ ] **Step 4: Verify files landed in the right places**

```powershell
Get-ChildItem app\icon.svg, app\apple-icon.png, public\favicon-*.png
```
Expected: 6 files listed, all non-zero size.

- [ ] **Step 5: Build and verify `<link>` tags are generated**

Run:
```powershell
npm run build
```
Expected: build completes with no errors, `out/` directory is produced.

Then inspect the generated HTML to confirm Next.js wired the icons:
```powershell
Select-String -Path "out\index.html" -Pattern "icon.svg|apple-icon"
```
Expected: at least one match for each — something like:
```
<link rel="icon" type="image/svg+xml" href="/_next/static/media/icon.svg...">
<link rel="apple-touch-icon" href="/_next/static/media/apple-icon...">
```

- [ ] **Step 6: Commit**

```powershell
git add app/icon.svg app/apple-icon.png public/favicon-16.png public/favicon-32.png public/favicon-48.png public/favicon-512.png
git commit -m "feat: add favicon assets via Next.js file-based conventions"
```
