import React from 'react';
import SEO from '../components/SEO';
import { generateOrganizationSchema } from '../lib/schema';

const WhySidqly: React.FC = () => {
  const faqs = [
    {
      question: "Is Sidqly a basic donation app?",
      answer: "No. Sidqly is a premium Islamic operating platform. While simple apps only collect money, Sidqly manages the full lifecycle including payment verification, fund separation, and donor-safe impact tracking."
    },
    {
      question: "Can Sidqly replace WhatsApp and Excel?",
      answer: "Yes. Sidqly centralizes scattered messages, tracks real-time payment status, organizes proof images, and generates professional reports, saving hours of manual work."
    }
  ];

  return (
    <>
      <SEO
        title="Why Sidqly | Premium Islamic Operating Platform"
        description="Discover why Sidqly is the trusted choice for modern Islamic organizations. Go beyond simple donation forms with verified workflows."
        canonical="https://sidqly.com/why-sidqly"
        schema={generateOrganizationSchema()}
      />
      <div className="max-w-4xl mx-auto py-20 px-4">
        <h1 className="text-5xl font-bold mb-8 text-emerald">Why Sidqly</h1>
        <div className="bg-mint p-8 rounded-2xl border border-emerald/10 mb-12">
          <p className="text-2xl font-medium text-emerald leading-relaxed">
            Sidqly is a premium Islamic operating platform for verified giving, manual payment review, proof approval, delivery tracking, donor-safe impact updates, and professional reporting.
          </p>
        </div>
        <section className="space-y-12">
          <div>
            <h2 className="text-3xl font-bold mb-6 text-navy">The Problem with Manual Systems</h2>
            <p className="text-lg text-gray-600 leading-relaxed">
              Many organizations struggle with scattered messages, lost proof, and unclear approval history. Basic donation forms don't provide the real-time clarity needed for professional operations.
            </p>
          </div>
          <div>
            <h2 className="text-3xl font-bold mb-6 text-navy">The Sidqly Solution</h2>
            <p className="text-lg text-gray-600 leading-relaxed">
              We provide structured workflows for Zakat, Qurbani, and Ramadan operations. Our platform ensures every payment is reviewed and every impact update is donor-safe, upholding the highest standards of trust and dignity.
            </p>
          </div>
        </section>
        <section className="mt-20">
          <h2 className="text-3xl font-bold mb-10 text-navy">Frequently Asked Questions</h2>
          <div className="space-y-8">
            {faqs.map((faq, i) => (
              <div key={i} className="border-b border-gray-200 pb-8">
                <h3 className="text-xl font-bold mb-3 text-emerald">{faq.question}</h3>
                <p className="text-gray-600">{faq.answer}</p>
              </div>
            ))}
          </div>
        </section>
        <div className="mt-20 bg-emerald p-12 rounded-3xl text-white text-center shadow-xl">
          <h2 className="text-4xl font-bold mb-6">Build Real Trust Today</h2>
          <p className="text-xl mb-10 opacity-90">Join premium organizations using Sidqly to professionalize their operations.</p>
          <a href="https://calendly.com/d/dvzs-3zf-cgz" className="bg-gold text-navy px-10 py-4 rounded-xl font-black text-lg hover:scale-105 transition-transform inline-block">Book a Demo</a>
        </div>
      </div>
    </>
  );
};

export default WhySidqly;
