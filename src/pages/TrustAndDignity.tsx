import React from 'react';
import SEO from '../components/SEO';
import { generateWebSiteSchema } from '../lib/schema';

const TrustAndDignity: React.FC = () => (
  <>
    <SEO title="Trust and Dignity in Islamic Giving | Sidqly" description="Learn how Sidqly protects recipient dignity while building donor trust. We separate private information from donor-safe impact updates." canonical="https://sidqly.com/trust-and-dignity" schema={generateWebSiteSchema()} />
    <div className="max-w-4xl mx-auto py-20 px-4">
      <h1 className="text-5xl font-bold mb-8 text-emerald">Trust and Dignity</h1>
      <div className="bg-emerald text-white p-10 rounded-2xl mb-12 shadow-lg">
        <p className="text-2xl font-bold mb-4">“Trust is not only about showing proof. Trust is about showing the right proof safely.”</p>
        <p className="text-xl opacity-90">Sidqly helps organizations build donor confidence without exposing the people they are trying to help.</p>
      </div>
      <section className="grid md:grid-cols-2 gap-12 mb-20">
        <div className="p-8 border-2 border-red-100 rounded-2xl bg-red-50/30">
          <h2 className="text-2xl font-bold mb-6 text-red-700">Dignity Risks</h2>
          <ul className="space-y-4 text-gray-700">
            <li>Exposing full recipient names</li>
            <li>Sharing exact home addresses</li>
            <li>Showing private documents publicly</li>
            <li>Unreviewed proof in WhatsApp groups</li>
          </ul>
        </div>
        <div className="p-8 border-2 border-emerald-100 rounded-2xl bg-emerald-50/30">
          <h2 className="text-2xl font-bold mb-6 text-emerald">The Sidqly Standard</h2>
          <ul className="space-y-4 text-gray-700">
            <li>Donor-safe impact updates</li>
            <li>Masked private information</li>
            <li>Approved, dignity-safe imagery</li>
            <li>Manual review of all public proof</li>
          </ul>
        </div>
      </section>
      <div className="bg-navy text-white p-12 rounded-3xl text-center">
        <h2 className="text-3xl font-bold mb-6">Uphold Dignity. Grow Trust.</h2>
        <a href="https://calendly.com/d/dvzs-3zf-cgz" className="bg-emerald text-white px-8 py-4 rounded-xl font-bold inline-block">See Our Safe Workflows</a>
      </div>
    </div>
  </>
);

export default TrustAndDignity;
