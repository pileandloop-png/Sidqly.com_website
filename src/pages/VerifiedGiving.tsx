import React from 'react';
import SEO from '../components/SEO';
import { generateProductSchema } from '../lib/schema';

const VerifiedGiving: React.FC = () => (
  <>
    <SEO title="Verified Giving Platform | Sidqly" description="Build donor confidence with Sidqly's verified giving platform. From manual payment review to delivery proof." canonical="https://sidqly.com/verified-giving" schema={generateProductSchema()} />
    <div className="max-w-4xl mx-auto py-20 px-4">
      <h1 className="text-5xl font-bold mb-8 text-emerald">Verified Giving</h1>
      <p className="text-xl text-gray-600 mb-12">Verified giving means every donation is tracked through a complete lifecycle with human-controlled approval.</p>
      <div className="grid md:grid-cols-2 gap-8">
        <div className="p-8 bg-white border rounded-2xl shadow-sm hover:border-emerald transition">
          <h2 className="text-2xl font-bold mb-4">Manual Payment Review</h2>
          <p className="text-gray-600">Finance teams verify bank transfers and mobile payments before they are allocated.</p>
        </div>
        <div className="p-8 bg-white border rounded-2xl shadow-sm hover:border-emerald transition">
          <h2 className="text-2xl font-bold mb-4">Donor-Safe Impact</h2>
          <p className="text-gray-600">Approved, dignity-safe updates are shared with donors once the gift is completed.</p>
        </div>
      </div>
    </div>
  </>
);

export default VerifiedGiving;
