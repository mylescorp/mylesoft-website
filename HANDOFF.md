# MylesCorp Website Handoff

## Context

- Product: MylesCorp Website.
- Physical checkout path at handoff creation: `C:\Users\Admin\Projects\mylesoft-website`.
- Requested local path now available as a Windows junction: `C:\Users\Admin\Projects\mylescorp-website` -> `C:\Users\Admin\Projects\mylesoft-website`.
- Physical folder rename was attempted but blocked by an active Windows file handle in this Codex workspace.
- Package name has been updated to `mylescorp-website` in `package.json` and `package-lock.json`.
- `npm audit fix` cleared the high-severity audit finding. `npm audit --audit-level=high` now passes.
- `npm run type-check`, `npm run build`, and `npm audit --audit-level=high` pass from `C:\Users\Admin\Projects\mylescorp-website`.
- `npm run lint` passes with 168 warnings that still need cleanup.
- Public footer, contact details, social links, approved tagline, priority contact surfaces, docs, service-page stack language, public error language, and `X-Powered-By` header leakage were cleaned up.
- Public contact and newsletter forms now use CSRF validation, Zod validation, rate limiting, and professional JSON responses.
- `MylesNet` was added to the homepage product catalogue, footer, product listing, live portfolio list, portfolio research summary, and a dedicated `/products/mylesnet` page.
- A real local MylesNet page screenshot was captured at `public/portfolio/mylesnet-home.webp` for the portfolio preview.
- Current GitHub remote still points to `git@github.com:mylescorp/mylesoft-website.git`.
- Verified `https://github.com/mylescorp/mylescorp-website.git` does not exist yet.
- Current Vercel project slug is still `mylesoft-website` in `.vercel/project.json`.
- Verified `https://mylesoft-website.vercel.app` loads and `https://mylescorp-website.vercel.app` returns 404.

## Resume Instructions

1. Read `C:\Obsidian\MylesCorp-Brain\products\mylescorp-website\AGENTS.md`.
2. Read `status.md`, `codebase.md`, `techspec.md`, `page-inventory.md`, and `audit-report-2026-06-19.md`.
3. Work from `C:\Users\Admin\Projects\mylescorp-website`; it resolves to the locked physical checkout until the folder can be renamed after this workspace releases the handle.
4. Confirm whether Myles wants the external GitHub repository and Vercel project renamed from `mylesoft-website` to `mylescorp-website`.
5. Do not change production GitHub or Vercel names without current-session confirmation.
6. Continue cleanup from the open tasks in `C:\Obsidian\MylesCorp-Brain\products\mylescorp-website\tasks\active.md` and `C:\Obsidian\MylesCorp-Brain\tasks\active.md`.

## Known Blockers

- Final manual browser review on production is still required after deployment.
- Two moderate audit advisories remain through the current framework dependency chain. The forced fix path is breaking and was not applied.
- Lint has 168 warnings.
- Physical folder rename from `mylesoft-website` to `mylescorp-website` is blocked by the current active workspace handle. The junction path is available as an interim local path.
- External repository and Vercel slug rename is not complete.

## 2026-08-01 Update

- The README now documents the actual route surface, source architecture, environment-variable groups, CSRF-protected public form contract, local verification commands, and deployment guardrails.
- The direct `sharp` dependency and its nested [[Next.js]] instance now resolve to 0.35.3 through the package override. Type checking and the production build pass. Lint has 168 warnings and no errors.
- `npm audit --audit-level=high` still reports one high-severity PostCSS advisory through stable Next.js 16.2.12. The only automated proposal downgrades Next.js to 9.3.3 and was not applied.
- Do not deploy this Vercel project or assign `mylesnet.mylescorptech.com` until Myles confirms whether that domain should point to this company site or the separate `C:\Users\Admin\Projects\mylesnet-website` repository.
- `.env.local` is tracked despite containing non-empty assignments. Do not commit its contents; remove it from Git tracking without deleting the local file before the next commit.
