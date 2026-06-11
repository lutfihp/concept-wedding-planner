# .gitignore Cleanup + GitHub Remote Setup Implementation Plan

> **For agentic workers:** REQUIRED SUB-SKILL: Use superpowers:subagent-driven-development (recommended) or superpowers:executing-plans to implement this plan task-by-task. Steps use checkbox (`- [ ]`) syntax for tracking.

**Goal:** Ignore build cache and design-source folders, commit outstanding docs, then publish the repo to GitHub as branch `main`.

**Architecture:** Three sequential git housekeeping steps — no logic, no components. `.gitignore` update first so `handoffs/` is never staged, then commit `docs/`, then remote setup and push.

**Tech Stack:** Git, GitHub (empty repo at `https://github.com/lutfihp/concept-wedding-planner.git`)

---

### Task 1: Update .gitignore

**Files:**
- Modify: `.gitignore`

- [ ] **Step 1: Append entries to `.gitignore`**

Open `.gitignore` and add these two blocks at the bottom (after the `# typescript` section):

```
# design handoff source assets (favicon originals, HTML prototype, design brief)
/handoffs/

# SWC compiler cache (Next.js Rust-based compiler, auto-regenerated on every build)
/.swc/
```

- [ ] **Step 2: Verify `handoffs/` is now ignored**

Run:
```bash
git status
```
Expected: `handoffs/` does **not** appear under "Untracked files". Only `docs/` and `.gitignore` should appear.

- [ ] **Step 3: Verify `.swc/` is ignored**

Run:
```bash
git check-ignore -v .swc
```
Expected output (path and line number may vary):
```
.gitignore:45:/.swc/	.swc
```

- [ ] **Step 4: Commit**

```bash
git add .gitignore
git commit -m "chore: ignore handoffs/ and .swc/ compiler cache"
```

Expected:
```
[master ...] chore: ignore handoffs/ and .swc/ compiler cache
 1 file changed, 5 insertions(+)
```

---

### Task 2: Commit docs/

**Files:**
- Stage: `docs/superpowers/specs/2026-06-11-rename-and-favicon-design.md`
- Stage: `docs/superpowers/specs/2026-06-11-gitignore-and-github-setup-design.md`
- Stage: `docs/superpowers/plans/2026-06-11-rename-and-favicon.md`
- Stage: `docs/superpowers/plans/2026-06-11-gitignore-and-github-setup.md` (this file)

- [ ] **Step 1: Verify what's untracked in docs/**

Run:
```bash
git status docs/
```
Expected: all four files listed as untracked.

- [ ] **Step 2: Stage and commit docs/**

```bash
git add docs/
git commit -m "docs: add design specs and implementation plans"
```

Expected:
```
[main ...] docs: add design specs and implementation plans
 4 files changed, ...
```

- [ ] **Step 3: Confirm working tree is clean**

Run:
```bash
git status
```
Expected:
```
On branch master
nothing to commit, working tree clean
```

(Branch is still called `master` at this point — it gets renamed in Task 3.)

---

### Task 3: Set up GitHub remote and push as `main`

**No files modified** — git operations only.

- [ ] **Step 1: Add the remote**

```bash
git remote add origin https://github.com/lutfihp/concept-wedding-planner.git
```

- [ ] **Step 2: Verify remote was added**

```bash
git remote -v
```
Expected:
```
origin  https://github.com/lutfihp/concept-wedding-planner.git (fetch)
origin  https://github.com/lutfihp/concept-wedding-planner.git (push)
```

- [ ] **Step 3: Rename local branch from `master` to `main`**

```bash
git branch -m master main
```

Verify:
```bash
git branch
```
Expected:
```
* main
```

- [ ] **Step 4: Push to GitHub**

```bash
git push -u origin main
```

Expected (exact counts will differ):
```
Enumerating objects: ...
...
To https://github.com/lutfihp/concept-wedding-planner.git
 * [new branch]      main -> main
Branch 'main' set up to track remote branch 'main' from 'origin'.
```

- [ ] **Step 5: Verify tracking**

```bash
git status
```
Expected:
```
On branch main
Your branch is up to date with 'origin/main'.

nothing to commit, working tree clean
```
