import React from 'react';
import { Layout } from '../layouts/Layout';
import { LeadActions } from '../components/forms/LeadActions';
import { SEO } from '../seo/SEO';
import { getFAQSchema } from '../seo/schemaData';

const FAQS = [
  {
    q: "How does the manual payment review work?",
    a: "Sidqly provides a dedicated interface where your team can review bank transfers and e-wallet payments. You can match screenshots or transaction IDs to donation records to ensure every gift is accounted for."
  },
  {
    q: "What is the 'Proof Trust Engine'?",
    a: "It's our system for capturing and organizing delivery proof (photos, GPS, time-stamps) in a way that protects recipient dignity. It makes it easy for you to show donors where their contribution went without exposing sensitive information."
  },
  {
    q: "Can we start with a pilot?",
    a: "Yes! We highly recommend starting with a pilot for a single campaign (like a Ramadan drive or Qurbani) to see how the system fits your team's workflow."
  },
  {
    q: "Is my organization's data secure?",
    a: "Absolutely. Sidqly is a premium platform built with security at its core. Your data is organized, encrypted, and accessible only to authorized team members."
  },
  {
    q: "What kind of reports does Sidqly generate?",
    a: "Sidqly generates board-ready professional reports including donation summaries, campaign performance, vendor fulfillment logs, and proof of delivery reports."
  },
  {
    q: "How do I choose the right plan?",
    a: "Our team is happy to help! You can inquire through our 'Find Your Plan' page, and we'll recommend a setup based on your giving volume and team size."
  }
];

const FAQs: React.FC = () => {
  return (
    <Layout>
      <SEO
        title="Frequently Asked Questions"
        description="Find answers to common questions about Sidqly platform, payments, and proof trust engine."
        schema={[getFAQSchema(FAQS)]}
      />
      <section className="py-20 max-w-4xl mx-auto px-4">
        <div className="text-center mb-16">
          <h1 className="text-4xl font-bold text-gray-900 mb-4">Frequently Asked Questions</h1>
          <p className="text-xl text-gray-600">Everything you need to know about the Sidqly platform.</p>
        </div>

        <div className="space-y-8">
          {FAQS.map((faq, i) => (
            <div key={i} className="bg-white p-6 rounded-xl border border-gray-100 shadow-sm">
              <h3 className="text-lg font-bold text-gray-900 mb-2">{faq.q}</h3>
              <p className="text-gray-600 leading-relaxed">{faq.a}</p>
            </div>
          ))}
        </div>

        <div className="mt-20">
          <div className="text-center mb-10">
            <h2 className="text-3xl font-bold text-gray-900">Still have questions?</h2>
            <p className="text-gray-600 mt-2">Our team is ready to help you simplify your operations.</p>
          </div>
          <LeadActions />
        </div>
      </section>
    </Layout>
  );
};

export default FAQs;
