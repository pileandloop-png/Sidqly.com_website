import React, { useState, Fragment } from 'react';
import { LeadFormShell } from '../components/forms/LeadFormShell';
import { FormField } from '../components/ui/FormField';
import { FormSelect } from '../components/ui/FormSelect';
import { FormTextarea } from '../components/ui/FormTextarea';
import { CheckboxGroup } from '../components/ui/CheckboxGroup';
import { Button } from '../components/ui/Button';
import { TrustNote } from '../components/forms/TrustNote';
import { useLeadSource } from '../hooks/useLeadSource';
import { useNavigate } from 'react-router-dom';
import { LeadActions } from '../components/forms/LeadActions';
import { SEO } from '../seo/SEO';
import { PaymentDetailsBox } from '../components/forms/PaymentDetailsBox';

const ORG_TYPES = [
  { value: 'Mosque', label: 'Mosque' },
  { value: 'Islamic charity', label: 'Islamic charity' },
  { value: 'Nonprofit', label: 'Nonprofit' },
  { value: 'Qurbani provider', label: 'Qurbani provider' },
  { value: 'Ramadan food drive', label: 'Ramadan food drive' },
  { value: 'Zakat committee', label: 'Zakat committee' },
  { value: 'Sadaqah campaign', label: 'Sadaqah campaign' },
  { value: 'Corporate CSR/Zakat team', label: 'Corporate CSR/Zakat team' },
  { value: 'Vendor or fulfillment partner', label: 'Vendor or fulfillment partner' },
  { value: 'Other', label: 'Other' },
];

const MODULES = [
  { value: 'Donations', label: 'Donations' },
  { value: 'Manual payment review', label: 'Manual payment review' },
  { value: 'Qurbani', label: 'Qurbani' },
  { value: 'Ramadan', label: 'Ramadan' },
  { value: 'Zakat', label: 'Zakat' },
  { value: 'Sadaqah', label: 'Sadaqah' },
  { value: 'Charity requests', label: 'Charity requests' },
  { value: 'Proof Trust', label: 'Proof Trust' },
  { value: 'QR verification', label: 'QR verification' },
  { value: 'Vendor tasks', label: 'Vendor tasks' },
  { value: 'Staff and volunteers', label: 'Staff and volunteers' },
  { value: 'Corporate reports', label: 'Corporate reports' },
  { value: 'Receipts and certificates', label: 'Receipts and certificates' },
  { value: 'Full platform', label: 'Full platform' },
];

const TOOLS = [
  { value: 'WhatsApp', label: 'WhatsApp' },
  { value: 'Excel or Google Sheets', label: 'Excel or Google Sheets' },
  { value: 'Google Forms', label: 'Google Forms' },
  { value: 'Manual folders', label: 'Manual folders' },
  { value: 'Basic website', label: 'Basic website' },
  { value: 'Donation form', label: 'Donation form' },
  { value: 'Generic CRM', label: 'Generic CRM' },
  { value: 'Custom system', label: 'Custom system' },
  { value: 'Other', label: 'Other' },
];

const PLANS = [
  { value: 'Starter', label: 'Starter' },
  { value: 'Growth', label: 'Growth' },
  { value: 'Premium', label: 'Premium' },
  { value: 'Enterprise / Custom', label: 'Enterprise / Custom' },
  { value: 'Not sure yet', label: 'Not sure yet' },
];

const BookDemo: React.FC = () => {
  const { getMailtoBodyString } = useLeadSource();
  const navigate = useNavigate();
  const contactPageSchema = {
    "@context": "https://schema.org",
    "@type": "ContactPage",
    "name": "Book a Sidqly Demo",
    "description": "Schedule a personalized demo of the Sidqly platform."
  };
  const [selectedModules, setSelectedModules] = useState<string[]>([]);
  const [selectedTools, setSelectedTools] = useState<string[]>([]);

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const formData = new FormData(e.currentTarget);
    const data = Object.fromEntries(formData.entries());

    const fullData = {
      ...data,
      interested_modules: selectedModules,
      current_tools: selectedTools,
    };

    const body = getMailtoBodyString(fullData);
    const mailtoUrl = `mailto:team@sidqly.com?subject=Sidqly Demo Request&body=${encodeURIComponent(body)}`;

    window.location.href = mailtoUrl;
    navigate('/thank-you/demo');
  };

  return (
    <Fragment>
    <SEO
      title="Book a Demo"
      description="Schedule a demo to see how Sidqly can simplify your giving operations."
      schema={[contactPageSchema]}
    />
    <LeadFormShell
      title="Book a Sidqly Demo"
      subtitle="See how Sidqly can help your organization manage giving, payments, proof, delivery, reports, receipts, vendors, volunteers, and donor updates with more trust and less manual work."
    >
      <LeadActions />

      <div className="relative py-10">
        <div className="absolute inset-0 flex items-center" aria-hidden="true">
          <div className="w-full border-t border-gray-200"></div>
        </div>
        <div className="relative flex justify-center text-sm">
          <span className="px-4 bg-white text-gray-500 font-medium italic">Or use our safe mailto fallback form below</span>
        </div>
      </div>

      <form onSubmit={handleSubmit} className="space-y-6">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <FormField label="Full Name" name="full_name" required id="full_name" />
          <FormField label="Work Email" name="email" type="email" required id="email" />
          <FormField label="Organization Name" name="org_name" required id="org_name" />
          <FormSelect label="Organization Type" name="org_type" options={ORG_TYPES} required id="org_type" />
          <FormField label="Country" name="country" required id="country" />
          <FormField label="City" name="city" required id="city" />
          <FormField label="Website or Social Page (Optional)" name="website" id="website" />
          <FormField label="Role in Organization" name="role" required id="role" />
        </div>

        <FormField label="Estimated Monthly Donations or Giving Volume" name="volume" id="volume" />

        <CheckboxGroup
          label="Interested Modules"
          options={MODULES}
          selectedValues={selectedModules}
          onChange={setSelectedModules}
        />

        <CheckboxGroup
          label="Current Tools Used"
          options={TOOLS}
          selectedValues={selectedTools}
          onChange={setSelectedTools}
        />

        <FormTextarea label="Main problem you want Sidqly to solve" name="problem" required id="problem" />

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <FormSelect label="Preferred Plan" name="preferred_plan" options={PLANS} required id="preferred_plan" />
          <FormField label="Preferred Demo Time" name="demo_time" placeholder="e.g. Next Tuesday at 2pm PKT" id="demo_time" />
        </div>

        <FormTextarea label="Message" name="message" id="message" />

        <div className="pt-4">
          <Button type="submit" size="lg" className="w-full">
            Request Demo
          </Button>
          <TrustNote />
        </div>
      </form>

      <div className="mt-12 pt-10 border-t">
        <h3 className="text-lg font-bold text-gray-900 mb-6">Payment and Onboarding Note</h3>
        <PaymentDetailsBox />
      </div>

      <section className="mt-16 border-t pt-10 space-y-10">
        <div>
          <h2 className="text-2xl font-bold text-gray-900 mb-6">What we’ll help you understand</h2>
          <ul className="grid grid-cols-1 md:grid-cols-2 gap-4">
            {[
              "Which Sidqly plan fits your organization",
              "Which modules you should start with",
              "How to replace manual tracking",
              "How to protect recipient dignity",
              "How to give donors better updates",
              "How to prepare reports faster",
              "How to run a pilot without overwhelming your team"
            ].map((item, i) => (
              <li key={i} className="flex items-center space-x-3 text-gray-700">
                <span className="h-2 w-2 bg-sidqly-primary rounded-full shrink-0" />
                <span>{item}</span>
              </li>
            ))}
          </ul>
        </div>

        <div>
          <h2 className="text-2xl font-bold text-gray-900 mb-6">Best fit for Sidqly</h2>
          <p className="text-gray-600 mb-6">Sidqly is a strong fit if your organization:</p>
          <ul className="grid grid-cols-1 md:grid-cols-2 gap-4">
            {[
              "Handles donations, Zakat, Sadaqah, Qurbani, Ramadan, or charity requests",
              "Needs clearer payment and proof tracking",
              "Works with vendors, volunteers, staff, or delivery teams",
              "Wants donor-safe proof and professional receipts",
              "Needs corporate sponsor reports",
              "Wants to reduce WhatsApp and spreadsheet chaos",
              "Wants a premium system before scaling operations"
            ].map((item, i) => (
              <li key={i} className="flex items-start space-x-3 text-gray-700">
                <span className="h-5 w-5 bg-sidqly-secondary text-sidqly-primary flex items-center justify-center rounded-full shrink-0 text-xs font-bold mt-0.5">✓</span>
                <span>{item}</span>
              </li>
            ))}
          </ul>
        </div>
      </section>
    </LeadFormShell>
    </Fragment>
  );
};

export default BookDemo;
