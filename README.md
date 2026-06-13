# Sidqly Public Website v1.5

This is the official public marketing website for Sidqly, a premium global operating platform for modern Islamic organizations.

## Project Overview
Sidqly is designed for mosques, charities, and Zakat teams who prioritize **Amanah** (Trust). The platform focuses on verified giving, manual payment review, dignity-safe proof, and board-ready reporting.

## Brand Identity
- **Name:** Sidqly
- **Tagline:** Verified giving. Protected dignity. Clear impact.
- **Logo:** White rounded-square icon with a deep green Islamic geometric border and subtle gold crescent.
- **Colors:** Deep Green (#0F4D3E), Emerald (#15803D), Soft Green (#A7F3D0), Trust Gold (#D4AF37), Charcoal Navy (#0B1D2A), Warm Ivory (#F8FAFC).

## Key Features
- **Dignity-Safe Proof:** Automated face blurring for recipient privacy.
- **Manual Review Gates:** Absolute integrity for religious contributions.
- **Zakat Separation:** Operational filters to keep Zakat and Sadaqah isolated.
- **International:** Specialized views for UK, USA, Europe, MENA, and South Asia.

## Tech Stack
- **Framework:** React 19 + Vite 6
- **Language:** TypeScript
- **Styling:** Tailwind CSS v4
- **SEO:** React Helmet Async + JSON-LD Schema
- **AI Readiness:** LLMS.txt, robots.txt permissions, and markdown summaries.

## Setup & Development
```bash
# Install dependencies
npm install --legacy-peer-deps

# Start development server
npm run dev

# Build for production
npm run build

# Linting and Typecheck
npm run lint
tsc -b
```

## Deployment (Firebase Hosting)
This project is configured for deployment to Firebase Hosting and the custom domain `sidqly.com`.
1. Ensure `firebase-tools` is installed globally.
2. Run `npm run build`.
3. Run `firebase deploy`.

## Official Links
- **Calendly Demo:** https://calendly.com/d/dvzs-3zf-cgz
- **Inquiry Form:** https://forms.gle/bvSMog9pw2Ri4kMt9
- **Email:** team@sidqly.com
- **IBAN (Easypaisa):** PK19TMFB0000000060685814

## Sitemap
The website contains ~199 public routes. See `public/sitemap.xml` or visit `/sitemap` on the live site for a full list of blog articles, solutions, modules, and resources.
