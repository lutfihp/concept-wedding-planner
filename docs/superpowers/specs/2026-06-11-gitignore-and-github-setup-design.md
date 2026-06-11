# Spec: .gitignore Cleanup + GitHub Remote Setup — 2026-06-11

## Scope

Three sequential housekeeping tasks to clean up the repo and publish it to GitHub:

1. Add `.gitignore` entries for `handoffs/` and `.swc/`
2. Commit outstanding untracked files (`docs/`)
3. Link to `https://github.com/lutfihp/concept-wedding-planner.git` and push as `main`

---

## Task 1 — .gitignore additions

Append two entries to the existing `.gitignore`:

```
# design handoff source assets (favicon originals, HTML prototype, design docs)
/handoffs/

# SWC compiler cache (Next.js Rust-based compiler, auto-regenerated)
/.swc/
```

**Why `/handoffs/`:** The folder contains source design assets (favicon PNGs/SVG, the HTML prototype, the design brief). The usable outputs (favicon files) have already been copied into `app/` and `public/`. The source folder is reference material only — no value in version control, and the HTML prototype file contains binary-adjacent content.

**Why `/.swc/`:** SWC is Next.js's Rust compiler. It writes a local cache to `.swc/` at the project root on every `dev`/`build` run. It's machine-specific, auto-regenerated, and already present at the root. Not tracked.

**Nothing else added** — the existing `.gitignore` already covers `node_modules`, `.next/`, `/out/`, `.env*`, `.DS_Store`, and all standard Next.js artifacts.

Commit: `chore: ignore handoffs/ and .swc/ compiler cache`

---

## Task 2 — Commit docs/

The `docs/` directory is currently untracked. It contains:
- `docs/superpowers/specs/2026-06-11-rename-and-favicon-design.md`
- `docs/superpowers/specs/2026-06-11-gitignore-and-github-setup-design.md` (this file)
- `docs/superpowers/plans/2026-06-11-rename-and-favicon.md`

All three are worth tracking — they document design decisions and implementation plans for future reference.

Commit: `docs: add design specs and implementation plans`

---

## Task 3 — GitHub remote + push to main

### Steps

1. **Add remote:**
   ```bash
   git remote add origin https://github.com/lutfihp/concept-wedding-planner.git
   ```

2. **Rename local branch:**
   ```bash
   git branch -m master main
   ```

3. **Push:**
   ```bash
   git push -u origin main
   ```

### Assumptions

- The GitHub repo is **empty** (confirmed by user). No merge conflict expected.
- The remote URL is `https://github.com/lutfihp/concept-wedding-planner.git` (confirmed by user).
- After the push, `origin/main` tracks the local `main` branch.

### Out of scope

- GitHub Actions / CI setup
- Branch protection rules
- Any additional remotes
