import React from 'react';
import { Button } from '../ui/Button';
import { Calendar, ClipboardList, Mail } from 'lucide-react';

export const LeadActions: React.FC = () => {
  return (
    <div className="grid grid-cols-1 md:grid-cols-3 gap-6 my-12">
      <div className="bg-white p-6 rounded-xl border border-gray-100 shadow-sm flex flex-col items-center text-center">
        <div className="mb-4 p-3 bg-sidqly-secondary rounded-full">
          <Calendar className="h-6 w-6 text-sidqly-primary" />
        </div>
        <h3 className="text-lg font-bold text-gray-900 mb-2">Book a Demo</h3>
        <p className="text-sm text-gray-600 mb-6 flex-grow">
          Book a Sidqly demo to discuss your giving operations, payment tracking, proof process, reporting needs, and how Sidqly can support your team.
        </p>
        <a href="https://calendly.com/d/dvzs-3zf-cgz" target="_blank" rel="noopener noreferrer" className="w-full">
          <Button className="w-full">Schedule on Calendly</Button>
        </a>
      </div>

      <div className="bg-white p-6 rounded-xl border border-gray-100 shadow-sm flex flex-col items-center text-center ring-2 ring-sidqly-primary/10">
        <div className="mb-4 p-3 bg-sidqly-secondary rounded-full">
          <ClipboardList className="h-6 w-6 text-sidqly-primary" />
        </div>
        <h3 className="text-lg font-bold text-gray-900 mb-2">Fill Detailed Inquiry</h3>
        <p className="text-sm text-gray-600 mb-6 flex-grow">
          Fill the detailed inquiry form so the Sidqly team can understand your organization type, current tools, active services, and biggest operational challenges before recommending the right plan, pilot, or demo focus.
        </p>
        <a href="https://forms.gle/bvSMog9pw2Ri4kMt9" target="_blank" rel="noopener noreferrer" className="w-full">
          <Button className="w-full">Open Google Form</Button>
        </a>
      </div>

      <div className="bg-white p-6 rounded-xl border border-gray-100 shadow-sm flex flex-col items-center text-center">
        <div className="mb-4 p-3 bg-sidqly-secondary rounded-full">
          <Mail className="h-6 w-6 text-sidqly-primary" />
        </div>
        <h3 className="text-lg font-bold text-gray-900 mb-2">Email Sidqly</h3>
        <p className="text-sm text-gray-600 mb-6 flex-grow">
          Prefer traditional email? Send us your organization name, contact details, and the problem you want Sidqly to solve.
        </p>
        <a href="mailto:team@sidqly.com" className="w-full">
          <Button variant="outline" className="w-full">team@sidqly.com</Button>
        </a>
      </div>
    </div>
  );
};
