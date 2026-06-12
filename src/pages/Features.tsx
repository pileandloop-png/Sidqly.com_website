import React from 'react';
import SEO from '../components/SEO';
import { brand } from '../config/brand';
import { CheckCircle2, Shield, Users, BarChart, Zap } from 'lucide-react';
import OperatingJourney from '../components/diagrams/OperatingJourney';
import ManualPaymentReview from '../components/diagrams/ManualPaymentReview';

const Features: React.FC = () => {
  const featureGroups = [
    {
      title: "Trust & Verification",
      icon: <Shield className="text-sidqly-green-emerald" size={24} />,
      items: [
        "Manual payment review for all donations",
        "Zakat and Sadaqah fund separation",
        "Verified audit trails for every transaction",
        "Role-based access control for team safety"
      ]
    },
    {
      title: "Impact & Dignity",
      icon: <Users className="text-sidqly-green-emerald" size={24} />,
      items: [
        "Proof Trust Engine for impact verification",
        "Automated face-blurring for recipient privacy",
        "Secure donor-safe impact links",
        "Professional certificates and receipts"
      ]
    },
    {
      title: "Operations & Efficiency",
      icon: <Zap className="text-sidqly-green-emerald" size={24} />,
      items: [
        "Dedicated Qurbani share tracking",
        "Ramadan meal distribution management",
        "Vendor fulfillment portal and tasking",
        "Volunteer shift and hours tracking"
      ]
    },
    {
      title: "Reporting & Insights",
      icon: <BarChart className="text-sidqly-green-emerald" size={24} />,
      items: [
        "Board-ready impact dashboards",
        "Real-time donor update system",
        "Customizable reporting exports",
        "Case screening and eligibility review"
      ]
    }
  ];

  return (
    <>
      <SEO title="Platform Features" canonical="/features" />
      <section className="py-20 bg-sidqly-navy text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h1 className="text-4xl md:text-6xl font-extrabold mb-8 text-center">Powerful features for professional teams.</h1>
          <p className="text-xl text-sidqly-green-soft text-center max-w-3xl mx-auto mb-16">
            Sidqly is more than a donation tool. It's an operating platform built for the complexities of modern Islamic giving.
          </p>
          <OperatingJourney />
        </div>
      </section>

      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="mb-20">
             <ManualPaymentReview />
          </div>
          <div className="grid md:grid-cols-2 gap-12">
            {featureGroups.map((group, i) => (
              <div key={i} className="bg-sidqly-ivory p-8 rounded-[40px] border border-gray-100 shadow-sm">
                <div className="w-12 h-12 bg-white rounded-2xl flex items-center justify-center shadow-sm mb-6">
                  {group.icon}
                </div>
                <h3 className="text-2xl font-bold text-sidqly-navy mb-6">{group.title}</h3>
                <ul className="space-y-4">
                  {group.items.map((item, j) => (
                    <li key={j} className="flex items-start gap-3">
                      <CheckCircle2 size={20} className="text-sidqly-green-emerald mt-1 flex-shrink-0" />
                      <span className="text-gray-700 font-medium">{item}</span>
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="py-20 bg-sidqly-ivory">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl font-bold text-sidqly-navy mb-8">Save hundreds of hours every month.</h2>
          <div className="grid grid-cols-2 md:grid-cols-3 gap-8">
             <div className="p-6">
                <div className="text-4xl font-extrabold text-sidqly-green-deep mb-2">90%</div>
                <div className="text-sm text-gray-500 font-bold uppercase tracking-widest">Reduction in manual proof tasks</div>
             </div>
             <div className="p-6">
                <div className="text-4xl font-extrabold text-sidqly-green-deep mb-2">100%</div>
                <div className="text-sm text-gray-500 font-bold uppercase tracking-widest">Zakat fund separation audit trail</div>
             </div>
             <div className="p-6">
                <div className="text-4xl font-extrabold text-sidqly-green-deep mb-2">Seconds</div>
                <div className="text-sm text-gray-500 font-bold uppercase tracking-widest">To generate board reports</div>
             </div>
          </div>
          <div className="mt-16">
             <a href={brand.calendlyUrl} className="bg-sidqly-green-deep text-white px-10 py-4 rounded-xl font-bold hover:shadow-xl transition-all inline-block">
                See it in action
             </a>
          </div>
        </div>
      </section>
    </>
  );
};

export default Features;
