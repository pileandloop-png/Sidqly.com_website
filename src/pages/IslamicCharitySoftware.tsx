import React from 'react';
import SEO from '../components/SEO';
import { generateProductSchema } from '../lib/schema';

const IslamicCharitySoftware: React.FC = () => (
  <>
    <SEO title="Islamic Charity Management Software | Sidqly" description="The premium operating platform for modern Islamic charities. Manage Zakat, Sadaqah, and impact tracking." canonical="https://sidqly.com/islamic-charity-software" schema={generateProductSchema()} />
    <div className="max-w-4xl mx-auto py-20 px-4">
      <h1 className="text-5xl font-bold mb-8 text-emerald">Islamic Charity Software</h1>
      <p className="text-xl text-gray-600 mb-12">Sidqly is built specifically for the unique operational needs of Islamic charities, focusing on trust, proof, and dignity.</p>
    </div>
  </>
);

export default IslamicCharitySoftware;
