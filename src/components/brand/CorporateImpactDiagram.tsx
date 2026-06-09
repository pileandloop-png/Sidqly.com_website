import React from 'react';
import {
  Building2,
  ArrowDownCircle,
  LayoutDashboard,
  PieChart,
  FileCheck,
  ShieldCheck
} from 'lucide-react';

const CorporateImpactDiagram: React.FC = () => {
  return (
    <div className="py-12">
      <div className="max-w-4xl mx-auto">
        <div className="flex flex-col items-center gap-6">
          {/* Top: Corporate Sponsor */}
          <div className="bg-sidqly-deepNavy p-6 rounded-2xl text-white w-full max-w-xs text-center border-b-4 border-sidqly-goldAccent">
             <Building2 className="w-10 h-10 mx-auto mb-3 text-sidqly-goldAccent" />
             <div className="font-bold">Corporate Sponsor</div>
             <div className="text-xs text-gray-400">CSR or Zakat Budget</div>
          </div>

          <ArrowDownCircle className="w-8 h-8 text-sidqly-mutedBorder" />

          {/* Middle: Internal Sidqly Flow */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-4 w-full">
            <div className="bg-white p-4 rounded-xl border border-sidqly-mutedBorder text-center">
              <div className="text-xs font-bold uppercase mb-2 text-sidqly-slateText">Approval</div>
              <div className="text-sm">Internal CSR Workflow</div>
            </div>
            <div className="bg-white p-4 rounded-xl border border-sidqly-mutedBorder text-center">
              <div className="text-xs font-bold uppercase mb-2 text-sidqly-slateText">Allocation</div>
              <div className="text-sm">Campaign Distribution</div>
            </div>
            <div className="bg-white p-4 rounded-xl border border-sidqly-mutedBorder text-center">
              <div className="text-xs font-bold uppercase mb-2 text-sidqly-slateText">Verification</div>
              <div className="text-sm">Verified Proof Hub</div>
            </div>
          </div>

          <ArrowDownCircle className="w-8 h-8 text-sidqly-mutedBorder" />

          {/* Bottom: Corporate Output */}
          <div className="bg-sidqly-softGreen/10 border border-sidqly-softGreen/30 p-8 rounded-3xl w-full">
            <div className="flex items-center gap-3 mb-6 text-sidqly-deepGreen justify-center">
              <LayoutDashboard className="w-6 h-6" />
              <h4 className="text-xl font-bold">Corporate-Safe View</h4>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
              <div className="bg-white p-4 rounded-xl shadow-sm border border-sidqly-mutedBorder flex flex-col items-center">
                <PieChart className="w-6 h-6 text-sidqly-emeraldGreen mb-2" />
                <span className="text-xs font-bold">Impact Wallet</span>
              </div>
              <div className="bg-white p-4 rounded-xl shadow-sm border border-sidqly-mutedBorder flex flex-col items-center">
                <FileCheck className="w-6 h-6 text-sidqly-emeraldGreen mb-2" />
                <span className="text-xs font-bold">Board Pack Report</span>
              </div>
              <div className="bg-white p-4 rounded-xl shadow-sm border border-sidqly-mutedBorder flex flex-col items-center">
                <ShieldCheck className="w-6 h-6 text-sidqly-emeraldGreen mb-2" />
                <span className="text-xs font-bold">Verified Certificates</span>
              </div>
            </div>
          </div>
        </div>

        <div className="mt-8 bg-sidqly-warmIvory p-4 rounded-xl border border-sidqly-mutedBorder text-center">
          <p className="text-sidqly-slateText text-sm">
            <strong>Key Privacy Control:</strong> Corporate sponsors see corporate-safe impact data, not private requester identities.
          </p>
        </div>
      </div>
    </div>
  );
};

export default CorporateImpactDiagram;
