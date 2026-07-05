<div align="center">

<img src="https://raw.githubusercontent.com/mylescorp/mylescorp-website/main/public/mylescorp-logo.png" width="200"/>

# MylesCorp Website
### Official Company Website — www.mylescorptech.com

[![Status](https://img.shields.io/badge/Status-In%20Development-C4972A?style=for-the-badge)](https://www.mylescorptech.com)
[![License](https://img.shields.io/badge/License-Proprietary-C4972A?style=for-the-badge)](LICENSE)

**The official marketing and company website for MylesCorp Technologies Ltd.**

[Live Site](https://www.mylescorptech.com) · [Repository](https://github.com/mylescorp/mylescorp-website) · [Vercel Deployment](https://www.mylescorptech.com)

</div>

---

## 🌍 About

This repository contains the source code for the official MylesCorp Technologies Ltd website at [www.mylescorptech.com](https://www.mylescorptech.com).

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
| `/contact` | Contact form, approved company contact, and department routing |
| `/book-demo` | Cal.com integrated demo booking |

---

## 🏗️ Tech Stack

| Layer | Technologies |
|-------|-------------|
| Framework | Next.js 16.2 |
| Styling | Tailwind CSS |
| Language | TypeScript |
| Animation | Framer Motion |
| CMS | Notion API |
| Email | Resend |
| Scheduling | Cal.com |
| Analytics | Google Analytics / PostHog |
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
git clone https://github.com/mylescorp/mylescorp-website.git
cd mylescorp-website
npm install
cp .env.example .env.local
npm run dev
```

Open [http://localhost:3000](http://localhost:3000) in your browser.

### Environment Variables

```env
NEXT_PUBLIC_SITE_URL=https://www.mylescorptech.com
NEXT_PUBLIC_COMPANY_INFO_EMAIL=info@mylescorptech.com
NEXT_PUBLIC_COMPANY_CONTACT_EMAIL=contact@mylescorptech.com
NEXT_PUBLIC_COMPANY_SALES_EMAIL=sales@mylescorptech.com
NEXT_PUBLIC_COMPANY_TECHNICAL_PHONE="+254 743 993 715"
NEXT_PUBLIC_COMPANY_SALES_PHONE="+254 714 660 729"
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

Please read our contributing standards in the vault before submitting a PR.

---

## 📬 Contact

| | |
|--|--|
| 🌐 Website | [www.mylescorptech.com](https://www.mylescorptech.com) |
| 📧 General | [info@mylescorptech.com](mailto:info@mylescorptech.com) |
| 📍 Location | Westlands, Nairobi, Kenya |
| 📞 Technical | +254 743 993 715 |
| 📞 Sales | +254 714 660 729 |

---

<div align="center">

*© 2026 Powered by [MylesCorp Technologies](https://mylescorptech.com/) · All rights reserved.*

**Transforming Industries, Empowering Generations.**

</div>
