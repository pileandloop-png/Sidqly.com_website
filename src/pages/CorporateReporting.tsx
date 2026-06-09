import React from 'react';
import SEO from '../components/SEO';
import { generateServiceSchema } from '../lib/schema';

const CorporateReporting: React.FC = () => (
  <>
    <SEO title="Corporate CSR and Zakat Reporting | Sidqly" description="Professional, board-ready reporting for corporate CSR and Zakat sponsors." canonical="https://sidqly.com/corporate-reporting" schema={generateServiceSchema({
      name: "Corporate CSR Reporting",
      description: "Board-ready impact summaries and audit-ready records."
    })} />
    <div className="max-w-4xl mx-auto py-20 px-4">
      <h1 className="text-5xl font-bold mb-8 text-emerald">Corporate Reporting</h1>
      <p className="text-xl text-gray-600 mb-12 text-center">Elevate your corporate partnerships with professional-grade transparency.</p>
      <div className="grid md:grid-cols-2 gap-8">
        <div className="p-8 bg-white border border-gray-100 rounded-2xl shadow-sm">
          <h2 className="text-xl font-bold mb-4">Board-Ready Reports</h2>
          <p className="text-sm text-gray-500">Satisfy internal compliance and auditing with verified impact data.</p>
        </div>
        <div className="p-8 bg-white border border-gray-100 rounded-2xl shadow-sm">
          <h2 className="text-xl font-bold mb-4">Corporate-Safe Proof</h2>
          <p className="text-sm text-gray-500">Provide visibility without violating privacy standards.</p>
        </div>
      </div>
    </div>
  </>
);

export default CorporateReporting;
