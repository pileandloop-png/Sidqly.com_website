import React from 'react';
import { Layout } from '../layouts/Layout';
import { Link } from 'react-router-dom';
import { Button } from '../components/ui/Button';
import { Landmark, HeartHandshake, Building2, Users2 } from 'lucide-react';

const SOLUTIONS = [
  {
    title: "For Mosques",
    desc: "Manage Zakat and Sadaqah funds with clear separation. Provide your community with transparent updates and professional receipts.",
    icon: <Landmark className="h-10 w-10" />
  },
  {
    title: "For Islamic Charities",
    desc: "Scale your Ramadan and Qurbani operations without the spreadsheet chaos. Track vendor delivery and volunteer tasks in one place.",
    icon: <HeartHandshake className="h-10 w-10" />
  },
  {
    title: "For Corporate CSR",
    desc: "Board-ready reporting for Zakat and CSR programs. Give your stakeholders audit-ready logs and verified proof of impact.",
    icon: <Building2 className="h-10 w-10" />
  },
  {
    title: "For Zakat Committees",
    desc: "Manage charity requests (intake) and manual payment reviews with a team-friendly workflow designed for manual review.",
    icon: <Users2 className="h-10 w-10" />
  }
];

const Solutions: React.FC = () => {
  return (
    <Layout>
      <section className="bg-white py-20">
        <div className="max-w-7xl mx-auto px-4">
          <div className="text-center mb-16">
            <h1 className="text-4xl md:text-5xl font-extrabold text-gray-900 mb-6">Solutions for Every <br />Giving Workflow</h1>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">Sidqly is built to adapt to the unique needs of organizations dedicated to social impact and religious giving.</p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
            {SOLUTIONS.map((s, i) => (
              <div key={i} className="flex gap-6 p-8 rounded-2xl bg-gray-50 border border-gray-100 hover:shadow-md transition-shadow">
                <div className="shrink-0 text-sidqly-primary mt-1">{s.icon}</div>
                <div className="space-y-4">
                  <h3 className="text-2xl font-bold text-gray-900">{s.title}</h3>
                  <p className="text-gray-600 text-lg leading-relaxed">{s.desc}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="bg-sidqly-primary py-20 text-white">
        <div className="max-w-4xl mx-auto px-4 text-center">
          <h2 className="text-3xl font-bold mb-6">Don't see your specific workflow?</h2>
          <p className="text-xl text-white/80 mb-10">We specialize in building future-ready structures for complex giving operations. Let's talk about your needs.</p>
          <Link to="/contact-sales">
            <Button size="lg" className="bg-white text-sidqly-primary hover:bg-gray-100">Talk to Our Team</Button>
          </Link>
        </div>
      </section>
    </Layout>
  );
};

export default Solutions;
