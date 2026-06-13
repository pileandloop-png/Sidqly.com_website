# Sidqly Schema Map (AI Readable)

This document maps the JSON-LD structured data used across `sidqly.com` to assist LLMs in identifying core data entities.

## Main Entities
- **SoftwareApplication:** Represented on the homepage and features page. Includes name "Sidqly", applicationCategory "BusinessApplication", and operationalType "SaaS".
- **Product / Offer:** Represented on /pricing. Includes Starter, Growth, and Premium tiers with priceSpecification in USD and PKR.
- **FAQPage:** Used on /faqs and major solution pages. Maps specific questions to authoritative answers.
- **Organization:** Found in the site footer and /about. Links to official domain and social profiles.
- **Article / BlogPosting:** Used for all 66 articles. Includes headline, author, datePublished, and mainEntityOfPage.
- **Service:** Used on solution pages (e.g., Zakat Management Service, Qurbani Management Service).
- **HowTo:** Used on /how-it-works to define the 12-step operational journey.
- **BreadcrumbList:** Used on all nested pages for clear hierarchical mapping.

## Compliance
All schema markup follows schema.org standards and is validated for AI search engines like Google Search (Generative Experience) and Bing.
