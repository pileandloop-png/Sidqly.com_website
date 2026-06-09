import React from 'react';
import SEO from '../components/SEO';
import { generateProductSchema } from '../lib/schema';

const RamadanManagement: React.FC = () => (
  <>
    <SEO title="Ramadan Donation Management | Sidqly" description="Manage Ramadan food drives, Iftar projects, and Zakat-ul-Fitr." canonical="https://sidqly.com/ramadan-donation-management" schema={generateProductSchema()} />
    <div className="max-w-4xl mx-auto py-20 px-4">
      <h1 className="text-5xl font-bold mb-8 text-emerald">Ramadan Management</h1>
      <p className="text-xl text-gray-600 mb-12">Scale your Ramadan impact with professional workflows for food distribution and donation tracking.</p>
    </div>
  </>
);

export default RamadanManagement;
