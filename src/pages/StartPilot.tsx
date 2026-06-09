import React from 'react';
import { LeadFormShell } from '../components/forms/LeadFormShell';
import { FormField } from '../components/ui/FormField';
import { FormSelect } from '../components/ui/FormSelect';
import { FormTextarea } from '../components/ui/FormTextarea';
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

const PILOT_TYPES = [
  { value: 'Qurbani pilot', label: 'Qurbani pilot' },
  { value: 'Ramadan drive pilot', label: 'Ramadan drive pilot' },
  { value: 'Zakat case pilot', label: 'Zakat case pilot' },
  { value: 'Sadaqah campaign pilot', label: 'Sadaqah campaign pilot' },
  { value: 'Charity request intake pilot', label: 'Charity request intake pilot' },
  { value: 'Vendor fulfillment pilot', label: 'Vendor fulfillment pilot' },
  { value: 'Corporate sponsor report pilot', label: 'Corporate sponsor report pilot' },
  { value: 'Full organization pilot', label: 'Full organization pilot' },
];

const StartPilot: React.FC = () => {
  const { getMailtoBodyString } = useLeadSource();
  const navigate = useNavigate();

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const formData = new FormData(e.currentTarget);
    const data = Object.fromEntries(formData.entries());

    const body = getMailtoBodyString(data);
    const mailtoUrl = `mailto:team@sidqly.com?subject=Sidqly Pilot Request&body=${encodeURIComponent(body)}`;

    window.location.href = mailtoUrl;
    navigate('/thank-you/pilot');
  };

  return (
    <LeadFormShell
      title="Start a Sidqly Pilot"
      subtitle="Run a focused pilot for one campaign, one branch, one service, or one giving workflow before expanding across your organization."
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

      <div className="mb-10">
        <h2 className="text-xl font-bold text-gray-900 mb-4">What a Sidqly pilot can help you test:</h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
          {[
            "manual payment review",
            "proof upload and approval",
            "donor-safe updates",
            "receipts and certificates",
            "vendor or staff task flow",
            "delivery verification",
            "reports",
            "team adoption",
            "privacy and dignity controls"
          ].map((item, i) => (
            <div key={i} className="flex items-center space-x-2 text-gray-700 capitalize">
              <span className="h-1.5 w-1.5 bg-sidqly-primary rounded-full" />
              <span>{item}</span>
            </div>
          ))}
        </div>
      </div>

      <form onSubmit={handleSubmit} className="space-y-6">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <FormField label="Name" name="full_name" required id="full_name" />
          <FormField label="Email" name="email" type="email" required id="email" />
          <FormField label="Organization Name" name="org_name" required id="org_name" />
          <FormSelect label="Organization Type" name="org_type" options={ORG_TYPES} required id="org_type" />
          <FormSelect label="Pilot Type" name="pilot_type" options={PILOT_TYPES} required id="pilot_type" />
          <FormField label="Expected Pilot Size" name="pilot_size" placeholder="e.g. 100 cases, 1 branch" id="pilot_size" />
          <FormField label="Expected Start Date" name="start_date" type="date" id="start_date" />
        </div>

        <FormTextarea label="Current Problem" name="current_problem" required id="current_problem" />
        <FormTextarea label="What success would look like" name="success_criteria" id="success_criteria" />
        <FormTextarea label="Message" name="message" id="message" />

        <div className="pt-4">
          <Button type="submit" size="lg" className="w-full">
            Start Pilot Interest
          </Button>
          <TrustNote />
        </div>
      </form>
    </LeadFormShell>
  );
};

export default StartPilot;
