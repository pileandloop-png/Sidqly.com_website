import React from 'react';
import SEO from '../components/SEO';
import { brand } from '../config/brand';
import { Check, Info, ArrowRight } from 'lucide-react';

const Pricing: React.FC = () => {
  const plans = [
    {
      name: "Starter",
      monthly: "19,000",
      annual: "190,000",
      description: "For small teams and mosques starting their digital journey.",
      features: ["Up to 2 modules", "Basic reporting", "Email support", "Manual payment review", "Donor safe proof"],
      cta: "Fill Inquiry Form",
      popular: false
    },
    {
      name: "Growth",
      monthly: "49,000",
      annual: "490,000",
      description: "Ideal for growing organizations with multiple service lines.",
      features: ["Up to 5 modules", "Advanced reporting", "Priority support", "Vendor fulfillment", "Board-ready dashboard", "Audit-ready logs"],
      cta: "Fill Inquiry Form",
      popular: true
    },
    {
      name: "Premium",
      monthly: "99,000",
      annual: "990,000",
      description: "Complete operational control for large-scale organizations.",
      features: ["All modules included", "Custom reporting", "Dedicated manager", "Unlimited users", "API readiness", "White-labeled updates"],
      cta: "Book a Demo",
      popular: false
    }
  ];

  return (
    <>
      <SEO
        title="Pricing Plans"
        description="Choose the right Sidqly plan for your organization. Professional tools for mosques, charities, and Zakat teams."
        canonical="/pricing"
      />

      <section className="py-20 bg-sidqly-ivory">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h1 className="text-4xl md:text-5xl font-extrabold text-sidqly-navy mb-6">Simple, transparent pricing</h1>
            <p className="text-xl text-gray-600 max-w-2xl mx-auto">Investment in your organization's trust, dignity, and clarity.</p>
          </div>

          <div className="grid lg:grid-cols-3 gap-8 mb-20">
            {plans.map((plan) => (
              <div key={plan.name} className={`bg-white rounded-[32px] p-8 md:p-10 shadow-sm border ${plan.popular ? 'border-sidqly-green-emerald ring-4 ring-sidqly-green-soft/20 relative' : 'border-gray-100'}`}>
                {plan.popular && (
                  <div className="absolute top-0 left-1/2 -translate-x-1/2 -translate-y-1/2 bg-sidqly-green-emerald text-white px-4 py-1 rounded-full text-xs font-bold uppercase tracking-widest">
                    Most Popular
                  </div>
                )}
                <h3 className="text-2xl font-bold text-sidqly-navy mb-2">{plan.name}</h3>
                <p className="text-gray-500 text-sm mb-8 leading-relaxed h-12">{plan.description}</p>
                <div className="mb-8">
                  <div className="flex items-baseline gap-1">
                    <span className="text-sm font-bold text-gray-400">PKR</span>
                    <span className="text-4xl font-extrabold text-sidqly-navy">{plan.monthly}</span>
                    <span className="text-gray-400 font-medium">/mo</span>
                  </div>
                  <div className="text-sidqly-green-emerald text-sm font-bold mt-2">
                    or PKR {plan.annual} / year
                  </div>
                </div>
                <div className="space-y-4 mb-10">
                  {plan.features.map((feature, i) => (
                    <div key={i} className="flex items-center gap-3 text-sm font-medium text-gray-600">
                      <Check size={18} className="text-sidqly-green-emerald" /> {feature}
                    </div>
                  ))}
                </div>
                <a
                  href={plan.name === 'Premium' ? brand.calendlyUrl : brand.inquiryFormUrl}
                  className={`block w-full text-center py-4 rounded-xl font-bold transition-all ${plan.popular ? 'bg-sidqly-green-deep text-white hover:bg-sidqly-green-emerald hover:shadow-lg' : 'bg-sidqly-ivory text-sidqly-navy hover:bg-gray-100'}`}
                >
                  {plan.cta}
                </a>
              </div>
            ))}
          </div>

          <div className="bg-white rounded-3xl p-8 md:p-12 border border-gray-100 shadow-sm">
            <div className="flex flex-col md:flex-row gap-12 items-center">
              <div className="flex-1">
                <h3 className="text-2xl font-bold text-sidqly-navy mb-4">Enterprise & Large Scale</h3>
                <p className="text-gray-600 leading-relaxed mb-6">
                  For organizations requiring custom modules, integration with existing systems, or multi-branch management.
                </p>
                <a href={brand.calendlyUrl} className="inline-flex items-center gap-2 text-sidqly-green-emerald font-bold hover:gap-3 transition-all">
                  Contact for custom quote <ArrowRight size={20} />
                </a>
              </div>
              <div className="w-px h-24 bg-gray-100 hidden md:block"></div>
              <div className="flex-1">
                 <div className="flex items-start gap-4 p-4 rounded-2xl bg-sidqly-ivory">
                    <Info className="text-sidqly-green-deep mt-1 flex-shrink-0" size={20} />
                    <p className="text-xs text-gray-500 leading-relaxed">
                      Pricing may vary based on organization size, active modules, number of users, implementation needs, and support requirements. All prices are in PKR.
                    </p>
                 </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="py-20 bg-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-bold text-sidqly-navy mb-12 text-center">How to Purchase Sidqly</h2>
          <div className="space-y-6">
            {[
              { title: "Review plans", desc: "Choose the plan that best fits your current operational needs." },
              { title: "Fill the inquiry form", desc: "Share details about your organization and goals with us." },
              { title: "Book demo if needed", desc: "We'll show you how Sidqly works specifically for your use case." },
              { title: "Choose plan & payment", desc: "Confirm your selection and proceed with the payment." },
              { title: "Manual verification", desc: "The Sidqly team manually verifies your payment details." },
              { title: "Onboarding starts", desc: "Get access to your platform and start your setup journey." }
            ].map((step, i) => (
              <div key={i} className="flex gap-6 items-start p-6 rounded-2xl border border-gray-50 hover:border-sidqly-green-soft transition-all group">
                <div className="w-10 h-10 rounded-xl bg-sidqly-ivory flex items-center justify-center text-sidqly-green-deep font-bold flex-shrink-0 group-hover:bg-sidqly-green-deep group-hover:text-white transition-all">
                  {i + 1}
                </div>
                <div>
                  <h4 className="font-bold text-sidqly-navy mb-1">{step.title}</h4>
                  <p className="text-sm text-gray-600">{step.desc}</p>
                </div>
              </div>
            ))}
          </div>

          <div className="mt-16 p-8 rounded-3xl bg-sidqly-navy text-white">
             <h4 className="font-bold mb-6 text-xl">Official Payment Details</h4>
             <div className="space-y-4 mb-8">
                <div className="flex flex-col sm:flex-row sm:justify-between border-b border-white/10 pb-4">
                   <span className="text-gray-400 text-sm">Payment Method</span>
                   <span className="font-bold">{brand.payment.method}</span>
                </div>
                <div className="flex flex-col sm:flex-row sm:justify-between border-b border-white/10 pb-4">
                   <span className="text-gray-400 text-sm">IBAN</span>
                   <span className="font-bold break-all">{brand.payment.iban}</span>
                </div>
                <div className="flex flex-col sm:flex-row sm:justify-between border-b border-white/10 pb-4">
                   <span className="text-gray-400 text-sm">Confirmation Email</span>
                   <span className="font-bold">{brand.payment.confirmationEmail}</span>
                </div>
             </div>
             <p className="text-xs text-gray-400 italic">
               Note: Sidqly payments are manually reviewed. Subscription, onboarding, or setup is confirmed only after verification.
             </p>
          </div>
        </div>
      </section>
    </>
  );
};

export default Pricing;
