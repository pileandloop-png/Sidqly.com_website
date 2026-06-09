import React from 'react';
import SEO from '../components/SEO';
import { generateProductSchema } from '../lib/schema';

const CharityRequestManagement: React.FC = () => (
  <>
    <SEO title="Charity Request Management | Sidqly" description="Streamline how you receive, verify, and fulfill charity requests with Sidqly." canonical="https://sidqly.com/charity-request-management" schema={generateProductSchema()} />
    <div className="max-w-4xl mx-auto py-20 px-4">
      <h1 className="text-5xl font-bold mb-8 text-emerald">Charity Request Management</h1>
      <p className="text-xl text-gray-600 mb-12">Move from paper forms and WhatsApp messages to an organized, secure request system with dignity-safe verification.</p>
    </div>
  </>
);

export default CharityRequestManagement;
