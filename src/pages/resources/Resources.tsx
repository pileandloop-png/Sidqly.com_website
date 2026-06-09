import React from 'react';
import SEO from '../../components/SEO';
import { generateBreadcrumbListSchema } from '../../lib/schema';

const Resources: React.FC = () => (
  <>
    <SEO title="Resources for Islamic Giving Operations | Sidqly" description="Access guides and resources on managing Zakat, Qurbani, donor trust, and charity operations." canonical="https://sidqly.com/resources" schema={generateBreadcrumbListSchema([{ name: "Resources", item: "https://sidqly.com/resources" }])} />
    <div className="max-w-7xl mx-auto py-20 px-4">
      <h1 className="text-5xl font-bold mb-12 text-emerald">Resources Center</h1>
      <div className="grid md:grid-cols-3 gap-8">
        {[
          { n: "Islamic Giving Ops", p: "/resources/islamic-giving-operations" },
          { n: "Donor Trust", p: "/resources/donor-trust" },
          { n: "Proof & Privacy", p: "/resources/proof-and-privacy" },
          { n: "Zakat Operations", p: "/resources/zakat-operations" },
          { n: "Qurbani Operations", p: "/resources/qurbani-operations" },
          { n: "Corporate CSR & Zakat", p: "/resources/corporate-csr-zakat" }
        ].map((r, i) => (
          <a key={i} href={r.p} className="p-8 border-2 border-gray-50 rounded-2xl bg-white hover:border-emerald transition-all shadow-sm">
            <h2 className="text-xl font-bold mb-2 text-navy">{r.n}</h2>
            <p className="text-sm text-gray-400">Best practices and professional guides.</p>
          </a>
        ))}
      </div>
    </div>
  </>
);

export default Resources;
