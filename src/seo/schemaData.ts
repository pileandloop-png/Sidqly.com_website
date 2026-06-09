export const organizationSchema = {
  "@context": "https://schema.org",
  "@type": "Organization",
  "name": "Sidqly",
  "url": "https://sidqly.com",
  "logo": "https://sidqly.com/logo.png",
  "contactPoint": {
    "@type": "ContactPoint",
    "email": "team@sidqly.com",
    "contactType": "customer service"
  }
};

export const softwareApplicationSchema = {
  "@context": "https://schema.org",
  "@type": "SoftwareApplication",
  "name": "Sidqly",
  "operatingSystem": "Web",
  "applicationCategory": "BusinessApplication",
  "offers": {
    "@type": "Offer",
    "price": "0",
    "priceCurrency": "USD"
  }
};

export const getFAQSchema = (faqs: { q: string; a: string }[]) => ({
  "@context": "https://schema.org",
  "@type": "FAQPage",
  "mainEntity": faqs.map((f) => ({
    "@type": "Question",
    "name": f.q,
    "acceptedAnswer": {
      "@type": "Answer",
      "text": f.a
    }
  }))
});

export const getProductSchema = (plans: any[]) => ({
  "@context": "https://schema.org",
  "@type": "Product",
  "name": "Sidqly Subscription",
  "description": "Premium Islamic operating platform for mosques and charities.",
  "offers": {
    "@type": "AggregateOffer",
    "offerCount": plans.length,
    "priceCurrency": "PKR",
    "offers": plans.map(p => ({
      "@type": "Offer",
      "name": p.name,
      "description": p.description
    }))
  }
});
