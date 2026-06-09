import React from 'react';
import SEO from '../components/SEO';
import { generateProductSchema } from '../lib/schema';

const QurbaniManagement: React.FC = () => (
  <>
    <SEO title="Qurbani Management Software | Sidqly" description="Streamline Qurbani operations. Manage animal booking, vendor fulfillment, and verified donor reporting." canonical="https://sidqly.com/qurbani-management-software" schema={generateProductSchema()} />
    <div className="max-w-4xl mx-auto py-20 px-4">
      <h1 className="text-5xl font-bold mb-8 text-emerald">Qurbani Management</h1>
      <p className="text-xl text-gray-600 mb-12">Professionalize seasonal operations with dedicated animal tracking and vendor fulfillment modules.</p>
    </div>
  </>
);

export default QurbaniManagement;
