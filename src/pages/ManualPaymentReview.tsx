import React from 'react';
import SEO from '../components/SEO';
import { generateHowToSchema } from '../lib/schema';

const ManualPaymentReview: React.FC = () => (
  <>
    <SEO title="Manual Payment Review Workflow | Sidqly" description="Support bank transfers, Easypaisa, and cash with Sidqly's manual payment review system." canonical="https://sidqly.com/manual-payment-review" schema={generateHowToSchema({
      name: "Manual Payment Review",
      description: "How to verify donations manually in Sidqly",
      steps: ["Select manual payment", "Upload proof", "Finance review", "Verification", "Receipt issued"]
    })} />
    <div className="max-w-4xl mx-auto py-20 px-4">
      <h1 className="text-5xl font-bold mb-8 text-emerald">Manual Payment Review</h1>
      <div className="bg-gold/10 border-l-4 border-gold p-6 mb-12">
        <p className="font-bold text-navy">Sidqly payments are manually reviewed. Subscription or onboarding is confirmed after verification.</p>
      </div>
      <section className="space-y-8">
        <h2 className="text-3xl font-bold text-navy">Professional Finance Workflows</h2>
        <p className="text-lg text-gray-600">Sidqly supports various manual payment methods including bank transfers, cash, Easypaisa, and JazzCash. Our system provides a clear queue for finance teams to verify every screenshot and transfer before issuing receipts.</p>
      </section>
    </div>
  </>
);

export default ManualPaymentReview;
