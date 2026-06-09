import React from 'react';
import SEO from '../../components/SEO';
import { generateWebSiteSchema } from '../../lib/schema';

const BasicDonationForm: React.FC = () => (
  <>
    <SEO title="Sidqly vs Basic Donation Forms | Sidqly" description="Don't just collect money. Manage the full journey of a gift with Sidqly." canonical="https://sidqly.com/compare/basic-donation-form" schema={generateWebSiteSchema()} />
    <div className="max-w-4xl mx-auto py-20 px-4">
      <h1 className="text-4xl font-bold mb-8 text-emerald">Sidqly vs Basic Donation Forms</h1>
      <p className="text-xl text-gray-600 mb-10">Basic forms only collect money. Sidqly manages the full journey from payment proof to delivery confirmation.</p>
      <div className="grid grid-cols-2 md:grid-cols-3 gap-4">
        {["Payment Proof", "Manual Review", "Fund Separation", "Task Assignment", "Delivery Proof", "Donor Updates", "Receipts", "Certificates", "Audit Trail"].map((f, i) => (
          <div key={i} className="p-4 bg-white border border-emerald-50 rounded-lg text-sm font-bold text-emerald text-center shadow-sm">{f}</div>
        ))}
      </div>
    </div>
  </>
);

export default BasicDonationForm;
