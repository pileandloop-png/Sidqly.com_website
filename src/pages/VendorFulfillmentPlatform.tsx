import React from 'react';
import SEO from '../components/SEO';
import { generateProductSchema } from '../lib/schema';

const VendorFulfillmentPlatform: React.FC = () => (
  <>
    <SEO title="Vendor Fulfillment Platform | Sidqly" description="Coordinate with vendors and suppliers for charity projects. Manage invoices and delivery tracking." canonical="https://sidqly.com/vendor-fulfillment-platform" schema={generateProductSchema()} />
    <div className="max-w-4xl mx-auto py-20 px-4">
      <h1 className="text-5xl font-bold mb-8 text-emerald">Vendor Fulfillment</h1>
      <p className="text-xl text-gray-600 mb-12">Integrate vendors into your giving operations for seamless project execution and real-time delivery proof.</p>
    </div>
  </>
);

export default VendorFulfillmentPlatform;
