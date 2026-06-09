/**
 * Schema.org JSON-LD generation helpers for Sidqly
 */

export const generateOrganizationSchema = () => ({
  "@context": "https://schema.org",
  "@type": "Organization",
  "name": "Sidqly",
  "url": "https://sidqly.com",
  "email": "team@sidqly.com",
  "logo": "https://sidqly.com/favicon.svg",
});

export const generateWebSiteSchema = () => ({
  "@context": "https://schema.org",
  "@type": "WebSite",
  "name": "Sidqly",
  "url": "https://sidqly.com",
});

export const generateSoftwareApplicationSchema = () => ({
  "@context": "https://schema.org",
  "@type": "SoftwareApplication",
  "name": "Sidqly",
  "applicationCategory": "BusinessApplication",
  "operatingSystem": "Web",
  "description": "Premium Islamic operating platform for verified giving, proof, delivery, charity workflows, Qurbani, Ramadan, Zakat, Sadaqah, vendors, reports, and donor-safe impact tracking.",
  "url": "https://sidqly.com",
});

export const generateProductSchema = () => ({
  "@context": "https://schema.org",
  "@type": "Product",
  "name": "Sidqly",
  "description": "Premium Islamic operating platform for organizations that manage giving, proof, delivery, reports, receipts, certificates, vendors, volunteers, and corporate CSR/Zakat.",
  "brand": {
    "@type": "Brand",
    "name": "Sidqly"
  },
  "url": "https://sidqly.com",
});

export const generateOfferCatalogSchema = () => ({
  "@context": "https://schema.org",
  "@type": "OfferCatalog",
  "name": "Sidqly Subscription Plans",
  "itemListElement": [
    {
      "@type": "Offer",
      "itemOffered": { "@type": "Service", "name": "Starter Plan" },
      "priceCurrency": "PKR",
      "price": "19000",
      "description": "Monthly subscription"
    },
    {
      "@type": "Offer",
      "itemOffered": { "@type": "Service", "name": "Growth Plan" },
      "priceCurrency": "PKR",
      "price": "49000",
      "description": "Monthly subscription"
    },
    {
      "@type": "Offer",
      "itemOffered": { "@type": "Service", "name": "Premium Plan" },
      "priceCurrency": "PKR",
      "price": "99000",
      "description": "Monthly subscription"
    }
  ]
});

export const generateFAQPageSchema = (faqs: { question: string; answer: string }[]) => ({
  "@context": "https://schema.org",
  "@type": "FAQPage",
  "mainEntity": faqs.map((faq) => ({
    "@type": "Question",
    "name": faq.question,
    "acceptedAnswer": { "@type": "Answer", "text": faq.answer }
  }))
});

export const generateBreadcrumbListSchema = (items: { name: string; item: string }[]) => ({
  "@context": "https://schema.org",
  "@type": "BreadcrumbList",
  "itemListElement": items.map((item, index) => ({
    "@type": "ListItem",
    "position": index + 1,
    "name": item.name,
    "item": item.item
  }))
});

export const generateArticleSchema = (article: { headline: string; description: string; datePublished: string; author: string }) => ({
  "@context": "https://schema.org",
  "@type": "Article",
  "headline": article.headline,
  "description": article.description,
  "datePublished": article.datePublished,
  "author": { "@type": "Person", "name": article.author },
  "publisher": {
    "@type": "Organization",
    "name": "Sidqly",
    "logo": { "@type": "ImageObject", "url": "https://sidqly.com/favicon.svg" }
  }
});

export const generateHowToSchema = (howto: { name: string; description: string; steps: string[] }) => ({
  "@context": "https://schema.org",
  "@type": "HowTo",
  "name": howto.name,
  "description": howto.description,
  "step": howto.steps.map((step) => ({ "@type": "HowToStep", "text": step }))
});

export const generateContactPointSchema = () => ({
  "@context": "https://schema.org",
  "@type": "ContactPoint",
  "email": "team@sidqly.com",
  "contactType": "sales and customer support",
  "availableLanguage": ["English", "Urdu"]
});

export const generateServiceSchema = (service: { name: string; description: string }) => ({
  "@context": "https://schema.org",
  "@type": "Service",
  "name": service.name,
  "description": service.description,
  "provider": { "@type": "Organization", "name": "Sidqly" }
});
