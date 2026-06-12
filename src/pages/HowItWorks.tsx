import React from 'react';
import SEO from '../components/SEO';
import OperatingJourney from '../components/diagrams/OperatingJourney';
import { brand } from '../config/brand';
import { CheckCircle2 } from 'lucide-react';

const HowItWorks: React.FC = () => {
  return (
    <>
      <SEO title="How It Works" canonical="/how-it-works" />
      <section className="py-20 bg-sidqly-navy text-white text-center">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <h1 className="text-4xl md:text-6xl font-extrabold mb-8">Simple. Professional. Trusted.</h1>
          <p className="text-xl text-sidqly-green-soft leading-relaxed">
            Sidqly transforms messy manual processes into clear, verified workflows. Here is how we help your organization manage impact.
          </p>
        </div>
      </section>

      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
           <OperatingJourney />

           <div className="mt-32 space-y-24">
              {[
                { title: "Intake with Precision", desc: "Donations are logged and aid requests are captured through standardized forms. No more scattered WhatsApp messages or loose papers.", icon: "01" },
                { title: "Verify with Integrity", desc: "Every payment and case undergoes manual review. Your team maintains full control while Sidqly handles the audit trail.", icon: "02" },
                { title: "Fulfill with Clarity", desc: "Assign tasks to vendors and volunteers. Track distribution in real-time, whether it's Qurbani meat or Ramadan ration packs.", icon: "03" },
                { title: "Proof with Dignity", desc: "Collect impact proof safely. Our platform automatically blurs faces and generates secure updates for your donors.", icon: "04" }
              ].map((step, i) => (
                <div key={i} className={`flex flex-col ${i % 2 === 0 ? 'md:flex-row' : 'md:flex-row-reverse'} gap-12 items-center`}>
                   <div className="flex-1">
                      <div className="text-6xl font-extrabold text-sidqly-green-soft/30 mb-4">{step.icon}</div>
                      <h3 className="text-3xl font-bold text-sidqly-navy mb-6">{step.title}</h3>
                      <p className="text-lg text-gray-600 leading-relaxed mb-8">{step.desc}</p>
                      <div className="flex items-center gap-2 text-sidqly-green-emerald font-bold">
                         Amanah-Safe Workflow <CheckCircle2 size={20} />
                      </div>
                   </div>
                   <div className="flex-1 w-full aspect-video bg-sidqly-ivory rounded-[40px] border border-gray-100 flex items-center justify-center">
                      <div className="text-gray-400 font-bold uppercase tracking-widest text-sm italic">Sidqly Interface Preview</div>
                   </div>
                </div>
              ))}
           </div>
        </div>
      </section>

      <section className="py-20 bg-sidqly-ivory">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
           <h2 className="text-3xl font-bold text-sidqly-navy mb-8">Ready to see it in action?</h2>
           <p className="text-gray-600 mb-12">
              Book a Sidqly demo to discuss your giving operations, payment tracking, proof process, and reporting needs.
           </p>
           <div className="flex flex-wrap justify-center gap-4">
              <a href={brand.calendlyUrl} className="bg-sidqly-green-deep text-white px-8 py-4 rounded-xl font-bold hover:shadow-lg transition-all">Book Demo</a>
              <a href={brand.inquiryFormUrl} className="bg-white border border-gray-200 text-sidqly-navy px-8 py-4 rounded-xl font-bold hover:bg-gray-50 transition-all">Fill Inquiry Form</a>
           </div>
        </div>
      </section>
    </>
  );
};

export default HowItWorks;
