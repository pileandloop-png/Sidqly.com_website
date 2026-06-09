import React from 'react';
import SEO from '../../components/SEO';
import { generateWebSiteSchema } from '../../lib/schema';

const WhatsappExcel: React.FC = () => (
  <>
    <SEO title="Sidqly vs WhatsApp and Excel | Sidqly" description="Are you outgrowing WhatsApp and Excel? Professionalize your charity work with Sidqly." canonical="https://sidqly.com/alternatives/whatsapp-excel" schema={generateWebSiteSchema()} />
    <div className="max-w-4xl mx-auto py-20 px-4">
      <h1 className="text-4xl font-bold mb-8 text-emerald text-center">Sidqly vs WhatsApp and Excel</h1>
      <div className="grid md:grid-cols-2 gap-8">
        <div className="p-8 border-2 border-red-50 rounded-2xl">
          <h2 className="text-xl font-bold mb-4 text-red-600">WhatsApp & Excel</h2>
          <ul className="space-y-2 text-sm text-gray-500">
            <li>Scattered messages & lost proof</li>
            <li>Hard to track payment status</li>
            <li>Risky privacy sharing</li>
            <li>Manual, time-consuming reports</li>
          </ul>
        </div>
        <div className="p-8 border-2 border-emerald-50 rounded-2xl bg-emerald-50/20">
          <h2 className="text-xl font-bold mb-4 text-emerald">Sidqly</h2>
          <ul className="space-y-2 text-sm text-gray-700">
            <li>Clear, centralized workflows</li>
            <li>Manual payment review module</li>
            <li>Dignity-safe & role-based access</li>
            <li>Corporate-ready automatic reports</li>
          </ul>
        </div>
      </div>
    </div>
  </>
);

export default WhatsappExcel;
