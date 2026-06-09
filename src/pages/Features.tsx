import React from 'react';
import { Layout } from '../layouts/Layout';
import { Link } from 'react-router-dom';
import { Button } from '../components/ui/Button';
import { Shield, Eye, BarChart, Package, FileCheck, ClipboardList } from 'lucide-react';

const FEATURES = [
  {
    title: "Donation Management",
    desc: "Track every donation in real-time. From manual payment review to automated receipts, stay organized as you scale.",
    icon: <BarChart className="h-6 w-6" />
  },
  {
    title: "Manual Payment Review",
    desc: "A secure workflow to verify bank transfers, e-wallet receipts, and cash donations before they hit your books.",
    icon: <FileCheck className="h-6 w-6" />
  },
  {
    title: "Proof Trust Engine",
    desc: "The gold standard for giving proof. Capture delivery photos and logs while strictly maintaining recipient dignity.",
    icon: <Shield className="h-6 w-6" />
  },
  {
    title: "Campaign Operations",
    desc: "Dedicated modules for Qurbani, Ramadan drives, and Ration packs. Built-in logic for case management and distribution.",
    icon: <Package className="h-6 w-6" />
  },
  {
    title: "Staff & Volunteer Tasks",
    desc: "Assign tasks to your team and vendors. Track progress from inquiry to fulfillment with clear accountability.",
    icon: <ClipboardList className="h-6 w-6" />
  },
  {
    title: "Professional Reporting",
    desc: "Board-ready reports available at the click of a button. Transparency for donors and clarity for your team.",
    icon: <Eye className="h-6 w-6" />
  }
];

const Features: React.FC = () => {
  return (
    <Layout>
      <section className="bg-sidqly-secondary py-20">
        <div className="max-w-7xl mx-auto px-4 text-center">
          <h1 className="text-4xl md:text-5xl font-extrabold text-gray-900 mb-6">Powerful Features for <br />Trust-Safe Giving</h1>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">Sidqly replaces scattered manual processes with a single, premium platform built for organizations that value transparency.</p>
        </div>
      </section>

      <section className="py-20">
        <div className="max-w-7xl mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-12">
            {FEATURES.map((f, i) => (
              <div key={i} className="space-y-4">
                <div className="p-3 bg-sidqly-secondary rounded-lg w-fit text-sidqly-primary">{f.icon}</div>
                <h3 className="text-xl font-bold text-gray-900">{f.title}</h3>
                <p className="text-gray-600 leading-relaxed">{f.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="bg-gray-50 py-20 border-t">
        <div className="max-w-4xl mx-auto px-4 text-center">
          <h2 className="text-3xl font-bold text-gray-900 mb-8">Ready to see these features in action?</h2>
          <div className="flex flex-col sm:flex-row justify-center gap-4">
            <Link to="/book-demo">
              <Button size="lg">Book a Demo</Button>
            </Link>
            <Link to="/start-pilot">
              <Button variant="outline" size="lg">Start a Pilot</Button>
            </Link>
          </div>
        </div>
      </section>
    </Layout>
  );
};

export default Features;
