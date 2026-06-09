import React, { useState } from 'react';
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

const SERVICES = [
  { value: 'Donations', label: 'Donations' },
  { value: 'Zakat', label: 'Zakat' },
  { value: 'Sadaqah', label: 'Sadaqah' },
  { value: 'Qurbani', label: 'Qurbani' },
  { value: 'Ramadan meals', label: 'Ramadan meals' },
  { value: 'Ration packs', label: 'Ration packs' },
  { value: 'Charity requests', label: 'Charity requests' },
  { value: 'Emergency aid', label: 'Emergency aid' },
  { value: 'Corporate CSR/Zakat', label: 'Corporate CSR/Zakat' },
  { value: 'Vendor delivery', label: 'Vendor delivery' },
  { value: 'Volunteer operations', label: 'Volunteer operations' },
  { value: 'Other', label: 'Other' },
];

const PLANS = [
  { value: 'Starter', label: 'Starter' },
  { value: 'Growth', label: 'Growth' },
  { value: 'Premium', label: 'Premium' },
  { value: 'Enterprise / Custom', label: 'Enterprise / Custom' },
  { value: 'Not sure yet', label: 'Not sure yet' },
];

const ContactSales: React.FC = () => {
  const { getMailtoBodyString } = useLeadSource();
  const navigate = useNavigate();
  const [selectedServices, setSelectedServices] = useState<string[]>([]);

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const formData = new FormData(e.currentTarget);
    const data = Object.fromEntries(formData.entries());

    const fullData = {
      ...data,
      services_managed: selectedServices,
    };

    const body = getMailtoBodyString(fullData);
    const mailtoUrl = `mailto:team@sidqly.com?subject=Sidqly Sales Inquiry&body=${encodeURIComponent(body)}`;

    window.location.href = mailtoUrl;
    navigate('/thank-you/contact');
  };

  return (
    <LeadFormShell
      title="Talk to Sidqly Sales"
      subtitle="Tell us about your organization, your current operations, and where you need more clarity, trust, proof, and reporting."
    >
      <div className="mb-8 p-4 bg-sidqly-secondary rounded-lg text-sidqly-primary font-medium">
        Sidqly is designed for organizations that want to move beyond scattered WhatsApp updates, spreadsheets, manual proof folders, and delayed donor reporting.
      </div>

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
          <FormField label="Name" name="full_name" required id="full_name" />
          <FormField label="Email" name="email" type="email" required id="email" />
          <FormField label="Organization Name" name="org_name" required id="org_name" />
          <FormSelect label="Organization Type" name="org_type" options={ORG_TYPES} required id="org_type" />
          <FormField label="Country/City" name="location" required id="location" />
          <FormSelect label="Interested Plan" name="interested_plan" options={PLANS} required id="interested_plan" />
          <FormField label="Number of Expected Users" name="users_count" id="users_count" />
          <FormField label="Number of Branches or Locations" name="branches_count" id="branches_count" />
        </div>

        <CheckboxGroup
          label="Services you manage"
          options={SERVICES}
          selectedValues={selectedServices}
          onChange={setSelectedServices}
        />

        <FormTextarea label="Main operational challenge" name="challenge" required id="challenge" />
        <FormTextarea label="Message" name="message" id="message" />

        <div className="pt-4">
          <Button type="submit" size="lg" className="w-full">
            Contact Sales
          </Button>
          <TrustNote />
        </div>
      </form>
    </LeadFormShell>
  );
};

export default ContactSales;
