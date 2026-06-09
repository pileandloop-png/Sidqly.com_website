import React, { useState } from 'react';
import { LeadFormShell } from '../components/forms/LeadFormShell';
import { FormField } from '../components/ui/FormField';
import { FormSelect } from '../components/ui/FormSelect';
import { FormTextarea } from '../components/ui/FormTextarea';
import { CheckboxGroup } from '../components/ui/CheckboxGroup';
import { Button } from '../components/ui/Button';
import { TrustNote } from '../components/forms/TrustNote';
import { PaymentDetailsBox } from '../components/forms/PaymentDetailsBox';
import { useLeadSource } from '../hooks/useLeadSource';
import { useNavigate } from 'react-router-dom';
import { LeadActions } from '../components/forms/LeadActions';

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

const PLANS = [
  { value: 'Starter', label: 'Starter' },
  { value: 'Growth', label: 'Growth' },
  { value: 'Premium', label: 'Premium' },
  { value: 'Enterprise / Custom', label: 'Enterprise / Custom' },
  { value: 'Not sure yet', label: 'Not sure yet' },
];

const PlanInquiry: React.FC = () => {
  const { getMailtoBodyString } = useLeadSource();
  const navigate = useNavigate();
  const [selectedModules, setSelectedModules] = useState<string[]>([]);

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const formData = new FormData(e.currentTarget);
    const data = Object.fromEntries(formData.entries());

    const fullData = {
      ...data,
      required_modules: selectedModules,
    };

    const body = getMailtoBodyString(fullData);
    const mailtoUrl = `mailto:team@sidqly.com?subject=Sidqly Plan Inquiry&body=${encodeURIComponent(body)}`;

    window.location.href = mailtoUrl;
    navigate('/thank-you/pricing');
  };

  return (
    <LeadFormShell
      title="Find the Right Sidqly Plan"
      subtitle="Tell us about your organization and we’ll help you choose the right Sidqly setup."
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

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4 mb-10">
        {[
          { name: 'Starter', desc: 'For small mosques, small charities, and early pilot teams.' },
          { name: 'Growth', desc: 'For active charities, Ramadan drives, Qurbani teams, and growing organizations.' },
          { name: 'Premium', desc: 'For serious organizations that need stronger operations, reporting, and donor trust.' },
          { name: 'Enterprise', desc: 'For large charities, multi-city operations, corporate CSR/Zakat programs, and partner networks.' },
        ].map((p) => (
          <div key={p.name} className="p-4 rounded-lg border border-gray-100 bg-gray-50">
            <p className="font-bold text-gray-900 mb-1">{p.name}</p>
            <p className="text-xs text-gray-600 leading-relaxed">{p.desc}</p>
          </div>
        ))}
      </div>

      <form onSubmit={handleSubmit} className="space-y-6">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <FormField label="Name" name="full_name" required id="full_name" />
          <FormField label="Email" name="email" type="email" required id="email" />
          <FormField label="Organization Name" name="org_name" required id="org_name" />
          <FormSelect label="Organization Type" name="org_type" options={ORG_TYPES} required id="org_type" />
          <FormField label="Country/City" name="location" required id="location" />
          <FormField label="Expected Monthly Giving Volume" name="volume" id="volume" />
          <FormField label="Number of Users" name="users_count" id="users_count" />
          <FormField label="Number of Branches" name="branches_count" id="branches_count" />
        </div>

        <CheckboxGroup
          label="Required Modules"
          options={MODULES}
          selectedValues={selectedModules}
          onChange={setSelectedModules}
        />

        <FormSelect label="Interested Plan" name="interested_plan" options={PLANS} required id="interested_plan" />

        <FormTextarea label="Message" name="message" id="message" />

        <div className="pt-4">
          <Button type="submit" size="lg" className="w-full">
            Inquire About Plans
          </Button>
          <TrustNote />
        </div>
      </form>

      <div className="mt-12">
        <PaymentDetailsBox />
      </div>
    </LeadFormShell>
  );
};

export default PlanInquiry;
