import React from 'react';
import { Check, Mail, Calendar, FileText } from 'lucide-react';
import SEO from '../components/SEO';
import PageHeader from '../components/PageHeader';
import CTASection from '../components/CTASection';

const Pricing = () => {
  const [billingCycle, setBillingCycle] = React.useState<'monthly' | 'annual'>('monthly');

  const plans = [
    {
      name: "Starter",
      monthlyPrice: "19,000",
      annualPrice: "190,000",
      desc: "For small mosques, small charities, and early pilot teams.",
      features: [
        "Core Operations Dashboard",
        "Zakat & Sadaqah Tracking",
        "Dignity-Safe Proof Capture",
        "Up to 3 Team Members",
        "Email Support"
      ]
    },
    {
      name: "Growth",
      monthlyPrice: "49,000",
      annualPrice: "490,000",
      popular: true,
      desc: "For active charities, Ramadan drives, and Qurbani teams.",
      features: [
        "Everything in Starter",
        "QR Verification Tools",
        "Vendor Fulfillment Module",
        "Up to 10 Team Members",
        "Priority Support",
        "Donor Impact Certificates"
      ]
    },
    {
      name: "Premium",
      monthlyPrice: "99,000",
      annualPrice: "990,000",
      desc: "For serious organizations that need stronger operations.",
      features: [
        "Everything in Growth",
        "Advanced Analytics",
        "Multi-City Coordination",
        "Unlimited Team Members",
        "Custom Field Branding",
        "Audit-Ready Logs"
      ]
    },
    {
      name: "Enterprise",
      price: "Custom",
      desc: "For large charities and partner networks.",
      features: [
        "Everything in Premium",
        "Custom Implementation",
        "Enterprise Integration",
        "Dedicated Account Manager",
        "On-Site Training",
        "SLA Guarantees"
      ]
    }
  ];

  return (
    <>
      <SEO
        title="Premium Pricing & Plans"
        description="Choose the right plan for your organization's mission. From small mosques to large charities, Sidqly scales with you."
        canonical="/pricing"
      />

      <PageHeader
        title="Investment in Trust"
        description="Sidqly is designed as a premium operating platform, not a basic donation form. Choose the plan that fits your organization's scale."
        category="Pricing"
      />

      <section className="py-24 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          {/* Tabs */}
          <div className="flex justify-center mb-16">
            <div className="bg-gray-100 p-1 rounded-full flex items-center">
              <button
                onClick={() => setBillingCycle('monthly')}
                className={`px-8 py-2.5 rounded-full text-sm font-bold transition-all ${
                  billingCycle === 'monthly' ? 'bg-white text-secondary shadow-sm' : 'text-gray-500 hover:text-secondary'
                }`}
              >
                Monthly
              </button>
              <button
                onClick={() => setBillingCycle('annual')}
                className={`px-8 py-2.5 rounded-full text-sm font-bold transition-all ${
                  billingCycle === 'annual' ? 'bg-white text-secondary shadow-sm' : 'text-gray-500 hover:text-secondary'
                }`}
              >
                Annual <span className="ml-1 text-primary text-[10px] uppercase font-black">2 Months Free</span>
              </button>
            </div>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8 mb-20">
            {plans.map((plan, i) => (
              <div
                key={i}
                className={`relative p-8 rounded-3xl border ${
                  plan.popular ? 'border-primary shadow-xl ring-1 ring-primary/20' : 'border-gray-100'
                } bg-white flex flex-col`}
              >
                {plan.popular && (
                  <span className="absolute top-0 left-1/2 -translate-x-1/2 -translate-y-1/2 bg-primary text-white text-[10px] font-black uppercase tracking-widest px-4 py-1.5 rounded-full">
                    Most Popular
                  </span>
                )}
                <div className="mb-8">
                  <h3 className="text-xl font-bold text-secondary mb-2">{plan.name}</h3>
                  <p className="text-gray-500 text-sm leading-relaxed">{plan.desc}</p>
                </div>
                <div className="mb-8">
                  <div className="flex items-baseline gap-1">
                    <span className="text-sm font-bold text-secondary">PKR</span>
                    <span className="text-4xl font-black text-secondary">
                      {plan.price || (billingCycle === 'monthly' ? plan.monthlyPrice : plan.annualPrice)}
                    </span>
                    {plan.monthlyPrice && (
                      <span className="text-gray-400 text-sm font-medium">
                        /{billingCycle === 'monthly' ? 'mo' : 'yr'}
                      </span>
                    )}
                  </div>
                </div>
                <ul className="space-y-4 mb-10 flex-grow">
                  {plan.features.map((feature, j) => (
                    <li key={j} className="flex items-start gap-3 text-sm">
                      <Check className="h-4 w-4 text-primary shrink-0 mt-0.5" />
                      <span className="text-gray-600">{feature}</span>
                    </li>
                  ))}
                </ul>
                <a
                  href="https://calendly.com/d/dvzs-3zf-cgz"
                  target="_blank"
                  rel="noopener noreferrer"
                  className={`w-full py-4 rounded-xl font-bold text-sm transition-all text-center ${
                  plan.popular ? 'bg-primary text-white hover:bg-emerald-700 shadow-lg' : 'bg-secondary text-white hover:bg-slate-800'
                }`}>
                  Book a Demo
                </a>
              </div>
            ))}
          </div>

          <div className="max-w-3xl mx-auto p-8 rounded-3xl bg-gray-50 border border-gray-100 mb-12">
             <p className="text-sm text-gray-500 text-center leading-relaxed">
              Pricing may vary based on organization size, active modules, number of users, implementation needs, and support requirements.
              <br /><br />
              Sidqly is designed as a premium operating platform, not a basic donation form.
            </p>
          </div>

          <div className="flex flex-col sm:flex-row justify-center gap-4">
             <a href="https://forms.gle/bvSMog9pw2Ri4kMt9" target="_blank" rel="noopener noreferrer" className="flex items-center justify-center gap-2 px-8 py-4 bg-white border border-gray-200 rounded-full font-bold text-secondary hover:bg-gray-50 transition-all">
               <FileText className="h-5 w-5" /> Detailed Inquiry Form
             </a>
             <a href="mailto:team@sidqly.com" className="flex items-center justify-center gap-2 px-8 py-4 bg-white border border-gray-200 rounded-full font-bold text-secondary hover:bg-gray-50 transition-all">
               <Mail className="h-5 w-5" /> Contact Sales
             </a>
          </div>
        </div>
      </section>

      {/* Payment Details Section */}
      <section className="py-24 bg-secondary text-white">
        <div className="max-w-4xl mx-auto px-4 text-center">
          <h2 className="text-3xl font-bold mb-12">Official Payment Details</h2>
          <div className="bg-white/5 p-8 rounded-3xl border border-white/10 text-left">
            <div className="grid md:grid-cols-2 gap-12">
              <div className="space-y-6">
                <div>
                  <h4 className="text-primary font-bold uppercase tracking-widest text-xs mb-2">Payment Method</h4>
                  <p className="text-xl font-semibold">Easypaisa Pakistan</p>
                </div>
                <div>
                  <h4 className="text-primary font-bold uppercase tracking-widest text-xs mb-2">IBAN</h4>
                  <p className="text-xl font-mono tracking-wider break-all">PK19TMFB0000000060685814</p>
                </div>
              </div>
              <div className="space-y-6">
                <div>
                  <h4 className="text-primary font-bold uppercase tracking-widest text-xs mb-2">Confirmation Email</h4>
                  <div className="flex items-center gap-2">
                    <Mail className="h-5 w-5 text-gray-400" />
                    <p className="text-xl font-semibold">team@sidqly.com</p>
                  </div>
                </div>
              </div>
            </div>

            <div className="mt-12 pt-12 border-t border-white/10 text-sm text-gray-400 space-y-4">
              <p>For onboarding, subscription, or setup payments, please use the official Sidqly payment details above and email payment confirmation to the Sidqly team.</p>
              <p>After payment, please email your payment screenshot, organization name, selected plan, and contact person details to <span className="text-white">team@sidqly.com</span>.</p>
              <p className="font-semibold text-white">Sidqly payments are manually reviewed. Your subscription or onboarding will be confirmed after payment verification.</p>
            </div>
          </div>
        </div>
      </section>

      <CTASection />
    </>
  );
};

export default Pricing;
