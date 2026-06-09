import React from 'react';
import { Layout } from '../layouts/Layout';
import { Button } from '../components/ui/Button';
import { Link } from 'react-router-dom';
import { Check } from 'lucide-react';
import { PaymentDetailsBox } from '../components/forms/PaymentDetailsBox';
import { LeadActions } from '../components/forms/LeadActions';
import { SEO } from '../seo/SEO';
import { getProductSchema } from '../seo/schemaData';
import { cn } from '../utils/cn';

const PLANS = [
  {
    name: "Starter",
    description: "For small mosques, small charities, and early pilot teams.",
    price: "Custom",
    features: [
      "Manual Payment Review",
      "Basic Donation Tracking",
      "Single Branch Support",
      "Standard Proof Upload",
      "Basic Reporting",
      "Email Support"
    ],
    cta: "Start Pilot",
    link: "/start-pilot"
  },
  {
    name: "Growth",
    description: "For active charities, Ramadan drives, and growing organizations.",
    price: "Custom",
    features: [
      "Everything in Starter",
      "Multi-campaign Management",
      "Vendor Task Flow",
      "Volunteer Onboarding",
      "Dignity-Safe Proof Trust Engine",
      "Custom Receipts & Certificates",
      "Priority Support"
    ],
    cta: "Contact Sales",
    link: "/contact-sales",
    popular: true
  },
  {
    name: "Premium",
    description: "For serious organizations that need stronger operations.",
    price: "Custom",
    features: [
      "Everything in Growth",
      "Advanced Proof Verification",
      "Multiple Branches/Locations",
      "Board-Ready Professional Reporting",
      "QR-Based Verification",
      "Audit-Ready Logs",
      "Dedicated Account Manager"
    ],
    cta: "Book Demo",
    link: "/book-demo"
  },
  {
    name: "Enterprise",
    description: "For large charities, corporate CSR, and partner networks.",
    price: "Custom",
    features: [
      "Full Platform Suite",
      "Custom Module Development",
      "Corporate Sponsor Portal",
      "Network-wide Visibility",
      "Advanced System Integration",
      "SLA Guarantee",
      "On-site Training"
    ],
    cta: "Contact Sales",
    link: "/contact-sales"
  }
];

const Pricing: React.FC = () => {
  return (
    <Layout>
      <SEO
        title="Pricing Plans"
        description="Choose the right Sidqly plan for your organization. From small mosques to large charities."
        schema={[getProductSchema(PLANS)]}
      />
      <section className="bg-gray-50 py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h1 className="text-4xl font-extrabold text-gray-900 mb-4">Choose Your Sidqly Plan</h1>
            <p className="text-xl text-gray-600 max-w-2xl mx-auto">
              Tell us about your organization and we’ll help you choose the right Sidqly setup.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mb-20">
            {PLANS.map((plan) => (
              <div
                key={plan.name}
                className={cn(
                  "bg-white rounded-2xl p-8 flex flex-col border shadow-sm transition-all hover:shadow-md",
                  plan.popular ? "border-sidqly-primary ring-1 ring-sidqly-primary relative" : "border-gray-200"
                )}
              >
                {plan.popular && (
                  <span className="absolute top-0 right-0 transform translate-x-1/4 -translate-y-1/2 bg-sidqly-primary text-white text-xs font-bold uppercase tracking-wider px-3 py-1 rounded-full">
                    Most Popular
                  </span>
                )}
                <h3 className="text-2xl font-bold text-gray-900">{plan.name}</h3>
                <p className="mt-2 text-sm text-gray-500 min-h-[40px]">{plan.description}</p>
                <div className="mt-4 mb-8">
                  <span className="text-3xl font-bold text-gray-900">{plan.price}</span>
                  <span className="text-gray-500 ml-1">pricing</span>
                </div>
                <ul className="space-y-4 mb-8 flex-grow">
                  {plan.features.map((feature, i) => (
                    <li key={i} className="flex items-start space-x-3 text-sm text-gray-600">
                      <Check className="h-4 w-4 text-sidqly-primary shrink-0 mt-0.5" />
                      <span>{feature}</span>
                    </li>
                  ))}
                </ul>
                <Link to={plan.link}>
                  <Button className="w-full" variant={plan.popular ? 'primary' : 'outline'}>
                    {plan.cta}
                  </Button>
                </Link>
              </div>
            ))}
          </div>

          <div className="mb-20">
            <div className="text-center mb-10">
              <h2 className="text-3xl font-bold text-gray-900">Ready to Get Started?</h2>
              <p className="text-gray-600 mt-2">Connect with our team to find the perfect fit for your organization.</p>
            </div>
            <LeadActions />
          </div>

          <div className="max-w-3xl mx-auto">
            <div className="text-center mb-8">
              <h2 className="text-2xl font-bold text-gray-900">Subscription & Onboarding Payments</h2>
              <p className="text-gray-600 mt-2">Sidqly payments are manually reviewed and verified.</p>
            </div>
            <PaymentDetailsBox />
          </div>
        </div>
      </section>
    </Layout>
  );
};

export default Pricing;
