import React from 'react';
import SEO from '../../components/SEO';
import { generateWebSiteSchema } from '../../lib/schema';

const MosqueWebsite: React.FC = () => (
  <>
    <SEO title="Sidqly vs Mosque Websites | Sidqly" description="Mosque websites are for announcements. Sidqly is for the operational backbone of your mosque." canonical="https://sidqly.com/compare/mosque-website" schema={generateWebSiteSchema()} />
    <div className="max-w-4xl mx-auto py-20 px-4">
      <h1 className="text-4xl font-bold mb-8 text-emerald text-center">Sidqly vs Mosque Websites</h1>
      <p className="text-xl text-center text-gray-600">Mosque websites are useful for info. Sidqly is for the backend infrastructure to manage Zakat, Sadaqah, and charity requests.</p>
    </div>
  </>
);

export default MosqueWebsite;
