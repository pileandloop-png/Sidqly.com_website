import React from 'react';
import SEO from '../../components/SEO';
import { generateWebSiteSchema } from '../../lib/schema';

const ManualSpreadsheets: React.FC = () => (
  <>
    <SEO title="Sidqly vs Manual Spreadsheets | Sidqly" description="Scaling with spreadsheets leads to errors and security risks. Discover how Sidqly secures your giving data." canonical="https://sidqly.com/compare/manual-spreadsheets" schema={generateWebSiteSchema()} />
    <div className="max-w-4xl mx-auto py-20 px-4">
      <h1 className="text-4xl font-bold mb-8 text-emerald">Sidqly vs Manual Spreadsheets</h1>
      <p className="text-xl text-gray-600">Spreadsheets become a risk as your operations scale. Sidqly provides role-based access, audit trails, and data integrity that spreadsheets cannot offer.</p>
    </div>
  </>
);

export default ManualSpreadsheets;
