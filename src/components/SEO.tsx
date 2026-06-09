import React from 'react';
import { Helmet } from 'react-helmet-async';

interface SEOProps {
  title: string;
  description: string;
  canonical?: string;
  ogTitle?: string;
  ogDescription?: string;
  ogType?: string;
  schema?: any;
}

const SEO = ({
  title,
  description,
  canonical,
  ogTitle,
  ogDescription,
  ogType = 'website',
  schema,
}: SEOProps) => {
  const siteUrl = 'https://sidqly.com';
  const fullTitle = `${title} | Sidqly`;
  const fullCanonical = canonical ? `${siteUrl}${canonical}` : undefined;

  const defaultSchema = [
    {
      "@context": "https://schema.org",
      "@type": "Organization",
      "name": "Sidqly",
      "url": siteUrl,
      "logo": `${siteUrl}/brand/sidqly-logo.svg`,
      "contactPoint": {
        "@type": "ContactPoint",
        "email": "team@sidqly.com",
        "contactType": "sales",
        "areaServed": "PK",
        "availableLanguage": "English"
      }
    },
    {
      "@context": "https://schema.org",
      "@type": "SoftwareApplication",
      "name": "Sidqly",
      "operatingSystem": "Web",
      "applicationCategory": "BusinessApplication",
      "offers": {
        "@type": "Offer",
        "priceCurrency": "PKR"
      }
    }
  ];

  const combinedSchema = schema ? (Array.isArray(schema) ? [...defaultSchema, ...schema] : [...defaultSchema, schema]) : defaultSchema;

  return (
    <Helmet>
      <title>{fullTitle}</title>
      <meta name="description" content={description} />
      {fullCanonical && <link rel="canonical" href={fullCanonical} />}

      <meta property="og:site_name" content="Sidqly" />
      <meta property="og:title" content={ogTitle || fullTitle} />
      <meta property="og:description" content={ogDescription || description} />
      <meta property="og:type" content={ogType} />
      <meta property="og:url" content={fullCanonical || siteUrl} />
      <meta property="og:image" content={`${siteUrl}/brand/sidqly-og.svg`} />

      <meta name="twitter:card" content="summary_large_image" />
      <meta name="twitter:image" content={`${siteUrl}/brand/sidqly-og.svg`} />
      <meta name="twitter:title" content={ogTitle || fullTitle} />
      <meta name="twitter:description" content={ogDescription || description} />

      <script type="application/ld+json">
        {JSON.stringify(combinedSchema)}
      </script>
    </Helmet>
  );
};

export default SEO;
