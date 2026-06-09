import React from 'react';
import SEO from '../../components/SEO';
import { generateArticleSchema } from '../../lib/schema';

const IslamicGivingOps: React.FC = () => (
  <>
    <SEO title="Best Practices for Islamic Giving Operations | Sidqly" description="A guide to professionalizing your charity operations." canonical="https://sidqly.com/resources/islamic-giving-operations" schema={generateArticleSchema({
      headline: "Islamic Giving Operations Guide",
      description: "Professionalizing charity operations.",
      datePublished: "2024-01-01",
      author: "Sidqly Team"
    })} />
    <div className="max-w-4xl mx-auto py-20 px-4">
      <h1 className="text-4xl font-bold mb-8 text-emerald">Islamic Giving Operations</h1>
      <p className="text-xl text-gray-600">Learn how to move from reactive giving to organized, professional operations that scale.</p>
    </div>
  </>
);

export default IslamicGivingOps;
