# MylesCorp Website

The public website for MylesCorp Technologies Ltd. It is the company gateway for visitors exploring the product portfolio, professional services, company information, portfolio, careers, policies, and sales or support contact options.

This repository is the company website only. It is not the standalone MylesNet marketing site, and it must not be mapped to a MylesNet product domain without an explicit deployment decision.

## Repository scope

| Item | Value |
| --- | --- |
| Package | `mylescorp-website` |
| Application type | Public marketing website |
| Canonical public URL | `https://www.mylescorptech.com` |
| Default local URL | `http://localhost:3000` |
| Deployment configuration | Vercel project `mylesoft-website` |
| Source layout | Next.js App Router in `src/app` |
| Package manager | npm |

The public site must use the approved MylesCorp name and contact configuration. Do not add unsupported customer claims, invented testimonials, fake locations, placeholder records, or user-visible implementation details.

## What the site contains

### Primary pages

| Route | Purpose |
| --- | --- |
| `/` | Company landing page |
| `/about` | Company story, mission, values, and leadership |
| `/products` | Product portfolio index |
| `/products/[slug]` | Product detail pages, including `/products/mylesnet` |
| `/services` | Professional services index |
| `/services/[service]` | Service detail pages |
| `/portfolio` | Published portfolio and product evidence |
| `/pricing` | Service and product pricing information |
| `/contact` | Contact enquiry form and approved contact details |
| `/book-demo` | Demo booking flow |
| `/blog` and `/blog/[slug]` | Public articles |
| `/careers` and `/careers/[slug]` | Careers information and openings |
| `/team`, `/partners`, `/support`, `/coverage`, `/docs`, `/brochure` | Company, support, and reference pages |
| `/privacy-policy`, `/terms-of-service`, `/cookie-policy`, `/compliance` | Public policies |

### Generated and service routes

| Route | Purpose |
| --- | --- |
| `/sitemap.xml` | Search-engine sitemap |
| `/robots.txt` | Crawler rules |
| `/rss.xml` | RSS feed |
| `/api/csrf` | Short-lived CSRF token issuance for public forms |
| `/api/contact` | Contact form submission |
| `/api/newsletter/subscribe` | Newsletter subscription |
| `/api/og`, `/api/og/product`, `/api/og/service` | Dynamic Open Graph images |
| `/api/search/index` | Search indexing endpoint |

The legacy policy URLs under `/legal/*` redirect permanently to their canonical policy pages.

## Architecture

```text
src/
  app/                 Routes, layouts, metadata, route handlers
  components/          Layout, content sections, forms, UI, SEO, integrations
  lib/
    constants/         Product, team, contact, social, and service configuration
    client/             Browser-side CSRF helper
    security/           CSRF issue, validation, and clearing helpers
    validation/         Zod schemas for public form payloads
public/                Approved images, logos, brochures, and portfolio previews
```

Key implementation points:

- `src/app/layout.tsx` establishes global metadata and the shared page shell.
- `src/components/layout/Header.tsx` and `Footer.tsx` own site navigation and footer navigation.
- `src/lib/constants/contact.ts` resolves public contact details from the environment.
- `src/app/api/contact/route.ts` and `src/app/api/newsletter/subscribe/route.ts` validate, rate-limit, and process public submissions.
- `src/lib/security/csrf.ts` owns the server-side CSRF token contract.
- `src/app/sitemap.ts` and `src/app/robots.ts` generate crawler metadata.

## Local development

### Prerequisites

- Node.js version compatible with the lockfile and Vercel runtime
- npm
- A local `.env.local` file containing only the variables needed for the functionality being tested

### Install and run

```bash
npm install
npm run dev
```

Open `http://localhost:3000`.

### Quality checks

```bash
npm run type-check
npm run lint
npm run build
npm audit --audit-level=high
```

`type-check` and `build` must pass before production promotion. Treat audit findings and lint warnings as release blockers until they are understood and resolved or explicitly accepted with a documented exception.

## Environment configuration

Copy `.env.example` to `.env.local` and populate only the values required by enabled features. Never commit `.env.local`, secrets, API keys, recipient addresses, audience IDs, or provider credentials.

| Area | Variables |
| --- | --- |
| Site and public contact | `NEXT_PUBLIC_SITE_URL`, `NEXT_PUBLIC_COMPANY_WEBSITE_URL`, `NEXT_PUBLIC_COMPANY_INFO_EMAIL`, `NEXT_PUBLIC_COMPANY_CONTACT_EMAIL`, `NEXT_PUBLIC_COMPANY_SALES_EMAIL`, `NEXT_PUBLIC_COMPANY_TECHNICAL_PHONE`, `NEXT_PUBLIC_COMPANY_SALES_PHONE`, `NEXT_PUBLIC_COMPANY_LOCATION`, `NEXT_PUBLIC_COMPANY_BUSINESS_HOURS` |
| Contact and newsletter delivery | `RESEND_API_KEY`, `RESEND_FROM_EMAIL`, `RESEND_CONTACT_TO_EMAIL`, `RESEND_AUDIENCE_ID` |
| Analytics | `NEXT_PUBLIC_GA4_MEASUREMENT_ID`, `GOOGLE_ANALYTICS_ID`, `NEXT_PUBLIC_POSTHOG_KEY`, `NEXT_PUBLIC_POSTHOG_HOST`, `POSTHOG_API_KEY` |
| Search | `ALGOLIA_APP_ID`, `ALGOLIA_API_KEY`, `ALGOLIA_SEARCH_API_KEY`, `ALGOLIA_ADMIN_KEY`, `NEXT_PUBLIC_ALGOLIA_APP_ID`, `NEXT_PUBLIC_ALGOLIA_SEARCH_KEY` |
| Maps and chat | `GOOGLE_MAPS_API_KEY`, `NEXT_PUBLIC_GOOGLE_MAPS_API_KEY`, `NEXT_PUBLIC_CRISP_WEBSITE_ID`, `NEXT_PUBLIC_INTERCOM_APP_ID` |
| Booking | `CALCOM_API_KEY`, `CALCOM_EVENT_TYPE_ID`, `CAL_API_KEY`, `CAL_EVENT_TYPE` |
| Media and monitoring | `CLOUDINARY_CLOUD_NAME`, `CLOUDINARY_API_KEY`, `CLOUDINARY_API_SECRET`, `SENTRY_DSN` |
| Content | `NOTION_TOKEN`, `NOTION_DATABASE_ID` |

Public contact values have safe fallbacks in `src/lib/constants/contact.ts`, but deployment configuration should set the approved production values explicitly.

## Public-form security contract

The contact and newsletter clients first request a CSRF token from `/api/csrf`, then send it in the `x-csrf-token` header with their mutating request. The server validates that header against the `__mylescorp_csrf` cookie, which is:

- HTTP-only and secure
- `SameSite=Lax`
- scoped to `/`
- valid for 15 minutes
- domain-scoped for `mylescorptech.com` hosts
- cleared server-side after each submission attempt

Both form handlers also apply payload validation, HTML escaping where email HTML is rendered, professional client-facing errors, and request rate limiting. Production deployments must configure the required sending settings before public submissions are enabled.

## Deployment

This checkout is linked to the Vercel project `mylesoft-website`, as recorded in `.vercel/project.json`. Deploy from this repository only after the local checks pass and production configuration is confirmed.

```bash
vercel --prod
```

Before assigning a custom domain, verify all of the following:

1. The domain is intended for this company-website project.
2. The domain is not already assigned to another Vercel project.
3. DNS access is available to add the verification record or CNAME that Vercel returns.
4. `NEXT_PUBLIC_SITE_URL` and `NEXT_PUBLIC_COMPANY_WEBSITE_URL` match the approved canonical URL when the canonical domain changes.
5. The deployed site, public forms, sitemap, robots file, redirects, and response headers have been checked on the production hostname.

## Operational guardrails

- Keep `.env.local` local and untracked.
- Do not expose framework, hosting, authentication, provider, or raw error details in public UI or API responses.
- Do not use placeholder data, generic testimonials, invented offices, or unsupported metrics.
- Keep public copy, product claims, contact details, social links, and footer copy aligned with the MylesCorp Brain vault.
- Do not attach a product-specific domain, including a MylesNet hostname, to this project unless the deployment scope is explicitly approved.

## Contributing

1. Check the relevant vault product record and active tasks before changing public claims or deployment settings.
2. Keep changes narrowly scoped and preserve unrelated working-tree changes.
3. Run the quality checks above.
4. Review the generated production build and key routes locally.
5. Commit only source, asset, configuration-template, and documentation changes. Never stage local secrets.

## License

Proprietary. Copyright 2026 MylesCorp Technologies Ltd. All rights reserved.
