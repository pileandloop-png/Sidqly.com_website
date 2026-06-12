import React from 'react';
import SEO from '../components/SEO';
import { brand } from '../config/brand';
import { Mail, CreditCard } from 'lucide-react';

const Purchase: React.FC = () => {
  const steps = [
    { title: "Review plans", desc: "Visit our pricing page to choose the right scale for your organization." },
    { title: "Fill inquiry form", desc: "Provide details about your service lines and operational goals." },
    { title: "Book demo", desc: "A optional but recommended step to see Sidqly's modules in action." },
    { title: "Select plan & pay", desc: "Confirm your selection and make the payment via official channels." },
    { title: "Email confirmation", desc: "Send your payment screenshot and organization details to our team." },
    { title: "Manual verification", desc: "The Sidqly team manually reviews your payment within 24 hours." },
    { title: "Onboarding starts", desc: "Access is granted and your professional onboarding journey begins." }
  ];

  return (
    <>
      <SEO title="How to Purchase" description="Simple steps to purchase a Sidqly subscription and begin your onboarding process." canonical="/purchase" />
      <section className="py-20 bg-sidqly-ivory">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h1 className="text-4xl md:text-5xl font-extrabold text-sidqly-navy mb-6">How to Purchase</h1>
            <p className="text-xl text-gray-600 max-w-2xl mx-auto">Sidqly uses a manual, professional onboarding process to ensure every organization is set up for success.</p>
          </div>

          <div className="bg-white p-8 md:p-12 rounded-[40px] shadow-sm border border-gray-100 mb-12">
             <div className="space-y-8">
                {steps.map((step, i) => (
                  <div key={i} className="flex gap-6 items-start">
                     <div className="w-10 h-10 rounded-xl bg-sidqly-green-deep text-white flex items-center justify-center font-bold flex-shrink-0">
                        {i + 1}
                     </div>
                     <div>
                        <h4 className="text-xl font-bold text-sidqly-navy mb-1">{step.title}</h4>
                        <p className="text-gray-600 text-sm leading-relaxed">{step.desc}</p>
                     </div>
                  </div>
                ))}
             </div>
          </div>

          <div className="bg-sidqly-navy text-white p-8 md:p-12 rounded-[40px] mb-12">
             <div className="flex flex-col md:flex-row items-center justify-between gap-8">
                <div>
                   <h2 className="text-2xl font-bold mb-4 flex items-center gap-3">
                      <CreditCard className="text-sidqly-gold" /> Official Payment Details
                   </h2>
                   <div className="space-y-4">
                      <div className="flex flex-col border-b border-white/10 pb-4">
                         <span className="text-gray-400 text-xs uppercase tracking-widest font-bold">Method</span>
                         <span className="font-bold">{brand.payment.method}</span>
                      </div>
                      <div className="flex flex-col border-b border-white/10 pb-4">
                         <span className="text-gray-400 text-xs uppercase tracking-widest font-bold">IBAN</span>
                         <span className="font-bold break-all">{brand.payment.iban}</span>
                      </div>
                   </div>
                </div>
                <div className="bg-white/5 p-8 rounded-3xl border border-white/10 text-center flex-shrink-0">
                   <Mail className="mx-auto mb-4 text-sidqly-green-soft" size={32} />
                   <div className="text-sm text-gray-400 mb-2">Confirmation Email</div>
                   <div className="font-bold">{brand.payment.confirmationEmail}</div>
                </div>
             </div>
             <p className="mt-8 text-xs text-gray-400 italic text-center">
                Note: Sidqly payments are manually reviewed. Subscription, onboarding, or setup is confirmed only after verification.
             </p>
          </div>

          <div className="flex flex-wrap justify-center gap-4">
             <a href={brand.inquiryFormUrl} className="bg-sidqly-green-deep text-white px-10 py-4 rounded-xl font-bold hover:shadow-xl transition-all">Start Purchase Inquiry</a>
          </div>
        </div>
      </section>
    </>
  );
};

export default Purchase;
