import React from 'react';
import { Lock, Users, Globe } from 'lucide-react';

const DignitySafeDiagram: React.FC = () => {
  return (
    <div className="py-12">
      <div className="max-w-4xl mx-auto space-y-6">
        {/* Layer 1: Private */}
        <div className="bg-red-50 border border-red-100 p-8 rounded-3xl">
          <div className="flex items-center gap-3 mb-4 text-red-900">
            <Lock className="w-6 h-6" />
            <h4 className="text-xl font-bold">Private Information</h4>
          </div>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4 text-sm text-red-800/70 italic">
            <span>Full Name</span>
            <span>Phone/Email</span>
            <span>Exact Address</span>
            <span>ID/CNIC/Passport</span>
            <span>Medical Docs</span>
            <span>Hardship Notes</span>
            <span>Private Images</span>
          </div>
        </div>

        {/* Layer 2: Internal */}
        <div className="bg-sidqly-deepGreen text-white p-8 rounded-3xl relative overflow-hidden">
          <div className="absolute right-0 top-0 p-4 opacity-10">
            <Users className="w-24 h-24" />
          </div>
          <div className="flex items-center gap-3 mb-4">
            <Users className="w-6 h-6 text-sidqly-goldAccent" />
            <h4 className="text-xl font-bold">Internal Organization View</h4>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 text-sm text-sidqly-softGreen">
            <div className="border-l-2 border-sidqly-goldAccent pl-4">
              <div className="font-bold text-white mb-1">Reviewer Notes</div>
              Eligibility and internal scoring.
            </div>
            <div className="border-l-2 border-sidqly-goldAccent pl-4">
              <div className="font-bold text-white mb-1">Workflow Status</div>
              Delivery and assignment details.
            </div>
            <div className="border-l-2 border-sidqly-goldAccent pl-4">
              <div className="font-bold text-white mb-1">Raw Proof</div>
              Full access for quality control.
            </div>
          </div>
        </div>

        {/* Layer 3: Donor/Public */}
        <div className="bg-sidqly-softGreen/10 border border-sidqly-softGreen/30 p-8 rounded-3xl">
          <div className="flex items-center gap-3 mb-4 text-sidqly-deepGreen">
            <Globe className="w-6 h-6" />
            <h4 className="text-xl font-bold">Donor/Public Safe View</h4>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 text-sm text-sidqly-deepGreen">
            <div className="bg-white/50 p-4 rounded-xl border border-sidqly-softGreen/20">
              <div className="font-bold mb-1">Safe Case Code</div>
              ZKT-2026-014 (Anonymous)
            </div>
            <div className="bg-white/50 p-4 rounded-xl border border-sidqly-softGreen/20">
              <div className="font-bold mb-1">Impact Summary</div>
              "Family received monthly ration"
            </div>
            <div className="bg-white/50 p-4 rounded-xl border border-sidqly-softGreen/20">
              <div className="font-bold mb-1">Dignity-Safe Proof</div>
              Blurred or non-identifying photos.
            </div>
          </div>
        </div>
      </div>

      <div className="mt-12 text-center text-sidqly-slateText text-sm max-w-2xl mx-auto italic">
        "Private data remains protected. Only dignity-safe summaries and verified proof are shared with external stakeholders."
      </div>
    </div>
  );
};

export default DignitySafeDiagram;
