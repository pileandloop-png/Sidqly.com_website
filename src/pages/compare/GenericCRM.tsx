import React from 'react';
import SEO from '../../components/SEO';
import { generateWebSiteSchema } from '../../lib/schema';

const GenericCRM: React.FC = () => (
  <>
    <SEO title="Sidqly vs Generic CRMs | Sidqly" description="Generic CRMs aren't built for Zakat separation or recipient dignity. Discover why Sidqly is the specialized choice." canonical="https://sidqly.com/compare/generic-crm" schema={generateWebSiteSchema()} />
    <div className="max-w-4xl mx-auto py-20 px-4">
      <h1 className="text-4xl font-bold mb-8 text-emerald">Sidqly vs Generic CRMs</h1>
      <p className="text-xl text-gray-600">Generic CRMs are not built specifically for Zakat, Qurbani, Ramadan, Sadaqah, or Islamic service workflows. Sidqly handles these with specialized modules.</p>
    </div>
  </>
);

export default GenericCRM;
