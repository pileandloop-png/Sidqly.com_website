import React from 'react';
import SEO from '../components/SEO';
import { generateProductSchema } from '../lib/schema';

const MosqueDonationManagement: React.FC = () => (
  <>
    <SEO title="Mosque Donation & Operations Management | Sidqly" description="Empower your mosque with professional donation tracking and project management." canonical="https://sidqly.com/mosque-donation-management" schema={generateProductSchema()} />
    <div className="max-w-4xl mx-auto py-20 px-4">
      <h1 className="text-5xl font-bold mb-8 text-emerald">Mosque Operations</h1>
      <p className="text-xl text-gray-600 mb-12">Mosque websites are for info. Sidqly is for operations. Track construction, Zakat committees, and community support initiatives.</p>
    </div>
  </>
);

export default MosqueDonationManagement;
