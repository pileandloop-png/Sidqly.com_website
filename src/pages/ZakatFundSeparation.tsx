import React from 'react';
import SEO from '../components/SEO';
import { generateServiceSchema } from '../lib/schema';

const ZakatFundSeparation: React.FC = () => (
  <>
    <SEO title="Zakat Fund Separation | Sidqly" description="Manage Zakat funds with professional integrity. Separate Zakat from other donations with clear audit trails." canonical="https://sidqly.com/zakat-fund-separation" schema={generateServiceSchema({
      name: "Zakat Fund Separation",
      description: "Professional management and tracking of Zakat funds."
    })} />
    <div className="max-w-4xl mx-auto py-20 px-4">
      <h1 className="text-5xl font-bold mb-8 text-emerald">Zakat Fund Separation</h1>
      <div className="bg-mint p-8 rounded-2xl border border-emerald/10 mb-12">
        <p className="font-medium text-emerald italic">“Sidqly supports operational control. Religious eligibility decisions remain with the organization’s authorized reviewers, scholars, or policy team.”</p>
      </div>
      <p className="text-lg text-gray-600 leading-relaxed">
        Mixing Zakat with other donations is a major risk. Sidqly provides the structural guardrails to ensure Zakat funds are tagged, tracked, and disbursed with audit-ready precision.
      </p>
    </div>
  </>
);

export default ZakatFundSeparation;
