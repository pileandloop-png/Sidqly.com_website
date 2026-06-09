import React from 'react';

interface SEOProps {
  title: string;
  description: string;
  canonical?: string;
  schema?: object;
}

const SEO: React.FC<SEOProps> = ({ title, description, canonical, schema }) => {
  React.useEffect(() => {
    document.title = title;
    const metaDesc = document.querySelector('meta[name="description"]');
    if (metaDesc) {
      metaDesc.setAttribute('content', description);
    } else {
      const meta = document.createElement('meta');
      meta.name = 'description';
      meta.content = description;
      document.head.appendChild(meta);
    }

    if (schema) {
      const script = document.createElement('script');
      script.type = 'application/ld+json';
      script.className = 'sidqly-schema';
      script.text = JSON.stringify(schema);
      document.head.appendChild(script);
      return () => {
        const existing = document.querySelector('.sidqly-schema');
        if (existing) document.head.removeChild(existing);
      };
    }
  }, [title, description, schema]);

  return (
    <>
      {canonical && <link rel="canonical" href={canonical} />}
    </>
  );
};

export default SEO;
