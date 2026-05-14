<div align="center">

<img src="https://raw.githubusercontent.com/MylesCorp-Technologies/.github/main/assets/mylesoft-logo.png" width="200"/>

# Mylesoft Website
### Official Company Website — www.mylescorptech.com

[![Status](https://img.shields.io/badge/Status-In%20Development-C4972A?style=for-the-badge)](https://www.mylescorptech.com)
[![License](https://img.shields.io/badge/License-Proprietary-C4972A?style=for-the-badge)](LICENSE)

**The official marketing and company website for MylesCorp Technologies Limited.**

[Live Site](https://www.mylescorptech.com) · [Report Bug](https://github.com/MylesCorp-Technologies/mylesoft-website/issues/new?template=bug_report.md) · [Request Feature](https://github.com/MylesCorp-Technologies/mylesoft-website/issues/new?template=feature_request.md)

</div>

---

## 🌍 About

This repository contains the source code for the official MylesCorp Technologies Limited website at [www.mylescorptech.com](https://www.mylescorptech.com).

The website serves as the primary marketing and information hub for MylesCorp, showcasing our products, services, team, company story, and contact information to prospective clients, partners, and investors across East Africa and beyond.

Brand colour guidance lives in [docs/brand-colour-guidelines.md](docs/brand-colour-guidelines.md) for future landing page and SaaS UI work.

---

## 📄 Pages

| Page | Description |
|------|-------------|
| `/` | Homepage — Hero, products overview, impact stats, testimonials |
| `/about` | Company story, mission, vision, M.Y.L.E.S. values, team |
| `/products` | Full product catalogue across all 18 sectors |
| `/services` | Professional services and consulting packages |
| `/pricing` | Product pricing in KES with comparison tables |
| `/blog` | Thought leadership, product updates, and industry insights |
| `/careers` | Open positions at MylesCorp Technologies |
| `/contact` | Contact form, office location, and department emails |
| `/book-demo` | Cal.com integrated demo booking |

---

## 🏗️ Tech Stack

| Layer | Technologies |
|-------|-------------|
| Framework | Next.js 15 |
| Styling | Tailwind CSS |
| Language | TypeScript |
| Animation | Framer Motion |
| CMS | Notion API / Contentful |
| Email | Resend |
| Scheduling | Cal.com |
| Analytics | Vercel Analytics |
| Hosting | Vercel |

---

## 🎨 Brand Guidelines

| Element | Value |
|---------|-------|
| Primary | `#1B3A6B` (Navy Blue) |
| Accent | `#C4972A` (Gold) |
| Font | Inter / Plus Jakarta Sans |
| Logo | See `/public/logo/` |

---

## 🚀 Getting Started

```bash
git clone https://github.com/MylesCorp-Technologies/mylesoft-website.git
cd mylesoft-website
npm install
cp .env.example .env.local
npm run dev
```

Open [http://localhost:3000](http://localhost:3000) in your browser.

### Environment Variables

```env
NEXT_PUBLIC_SITE_URL=https://www.mylescorptech.com
RESEND_API_KEY=
CAL_API_KEY=
NEXT_PUBLIC_GA_ID=
```

---

## 🌿 Branch Structure

```
main       ← Production (auto-deploys to www.mylescorptech.com)
develop    ← Staging
feature/*  ← New pages and features
fix/*      ← Bug fixes
```

---

## 🤝 Contributing

Please read our [Contributing Guide](https://github.com/Mylesoft-Technologies/.github/blob/main/CONTRIBUTING.md) before submitting a PR.

---

## 📬 Contact

| | |
|--|--|
| 🌐 Website | [www.mylescorptech.com](https://www.mylescorptech.com) |
| 📧 General | [info@mylescorptech.com](mailto:info@mylescorptech.com) |
| 📍 Location | Westlands, Nairobi, Kenya |
| 📞 Phone | +254 743 993 715 |

---

<div align="center">

*© 2025 MylesCorp Technologies Limited. All Rights Reserved.*

**Transforming Industries, Empowering Generations.** 🌍

</div>
