import React from 'react';
import SEO from '../components/SEO';
import { generateSoftwareApplicationSchema } from '../lib/schema';

const ProofTrustEngine: React.FC = () => (
  <>
    <SEO title="Proof Trust Engine | Sidqly" description="Replace messy WhatsApp proof with Sidqly's Proof Trust Engine. Professional workflows for proof review and donor-safe updates." canonical="https://sidqly.com/proof-trust-engine" schema={generateSoftwareApplicationSchema()} />
    <div className="max-w-4xl mx-auto py-20 px-4">
      <h1 className="text-5xl font-bold mb-8 text-emerald">Proof Trust Engine</h1>
      <p className="text-xl text-gray-600 mb-12">Proof should not be a random image in a WhatsApp chat. It should be linked to a task, payment, and approval status.</p>
      <section className="space-y-6 mb-20">
        {[
          "Proof Upload: Tied to specific operational tasks.",
          "Checklist Review: Finance and Ops verification steps.",
          "Risk Flags: Identifying potential issues early.",
          "Donor-Safe Approval: Human-controlled visibility.",
          "History: Full audit trail of all verified proof."
        ].map((step, i) => (
          <div key={i} className="flex items-center gap-6 p-6 bg-white border border-gray-100 rounded-xl shadow-sm">
            <div className="w-10 h-10 bg-emerald text-white rounded-full flex items-center justify-center font-bold">{i+1}</div>
            <p className="text-lg font-medium text-navy">{step}</p>
          </div>
        ))}
      </section>
    </div>
  </>
);

export default ProofTrustEngine;
