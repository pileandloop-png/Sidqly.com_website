import React from 'react';
import { Helmet, HelmetProvider } from 'react-helmet-async';

interface SEOProps {
  title: string;
  description: string;
  canonical?: string;
  ogTitle?: string;
  ogDescription?: string;
  noindex?: boolean;
  schema?: Record<string, any>[];
}

export const SEO: React.FC<SEOProps> = ({
  title,
  description,
  canonical = 'https://sidqly.com',
  ogTitle,
  ogDescription,
  noindex,
  schema,
}) => {
  const fullTitle = `${title} | Sidqly`;
  const currentUrl = canonical.startsWith('http') ? canonical : `https://sidqly.com${canonical}`;

  return (
    <Helmet>
      <title>{fullTitle}</title>
      <meta name="description" content={description} />
      <link rel="canonical" href={currentUrl} />

      {noindex && <meta name="robots" content="noindex, nofollow" />}

      <meta property="og:type" content="website" />
      <meta property="og:title" content={ogTitle || fullTitle} />
      <meta property="og:description" content={ogDescription || description} />
      <meta property="og:url" content={currentUrl} />
      <meta property="og:site_name" content="Sidqly" />

      <meta name="twitter:card" content="summary_large_image" />
      <meta name="twitter:title" content={ogTitle || fullTitle} />
      <meta name="twitter:description" content={ogDescription || description} />

      {schema && schema.map((s, i) => (
        <script key={i} type="application/ld+json">
          {JSON.stringify(s)}
        </script>
      ))}
    </Helmet>
  );
};

export const SEOProvider: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  return <HelmetProvider>{children}</HelmetProvider>;
};
