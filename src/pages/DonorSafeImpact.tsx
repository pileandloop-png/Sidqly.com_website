import React from 'react';
import SEO from '../components/SEO';
import { generateProductSchema } from '../lib/schema';

const DonorSafeImpact: React.FC = () => (
  <>
    <SEO title="Donor-Safe Impact Tracking | Sidqly" description="Share verified impact with donors without compromising recipient dignity." canonical="https://sidqly.com/donor-safe-impact" schema={generateProductSchema()} />
    <div className="max-w-4xl mx-auto py-20 px-4">
      <h1 className="text-5xl font-bold mb-8 text-emerald">Donor-Safe Impact</h1>
      <p className="text-xl italic text-emerald mb-12">“Sidqly helps organizations build donor confidence without exposing the people they are trying to help.”</p>
      <section className="space-y-12">
        <div>
          <h2 className="text-2xl font-bold mb-4">The Workflow</h2>
          <p className="text-gray-600 leading-relaxed">Sensitive field data is captured by staff but only 'safe' fields approved during manual review are included in donor-facing reports and certificates.</p>
        </div>
      </section>
    </div>
  </>
);

export default DonorSafeImpact;
