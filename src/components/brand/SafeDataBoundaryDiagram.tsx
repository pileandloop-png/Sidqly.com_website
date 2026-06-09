import React from 'react';
import { ShieldCheck, Lock, EyeOff } from 'lucide-react';

const SafeDataBoundaryDiagram: React.FC = () => {
  return (
    <div className="relative py-12 px-4">
      <div className="max-w-5xl mx-auto">
        <div className="flex flex-col md:flex-row gap-8 items-stretch">
          {/* Internal Side */}
          <div className="flex-1 bg-sidqly-deepNavy p-8 rounded-3xl text-white">
            <div className="flex items-center gap-3 mb-6">
              <Lock className="w-6 h-6 text-sidqly-goldAccent" />
              <h4 className="text-xl font-bold">Internal Ops</h4>
            </div>
            <ul className="space-y-4">
              <li className="flex items-start gap-3 text-sm text-gray-400">
                <span className="w-1.5 h-1.5 rounded-full bg-sidqly-goldAccent mt-1.5 shrink-0"></span>
                Raw IDs, Addresses, Phone Numbers
              </li>
              <li className="flex items-start gap-3 text-sm text-gray-400">
                <span className="w-1.5 h-1.5 rounded-full bg-sidqly-goldAccent mt-1.5 shrink-0"></span>
                Unfiltered Field Photos
              </li>
              <li className="flex items-start gap-3 text-sm text-gray-400">
                <span className="w-1.5 h-1.5 rounded-full bg-sidqly-goldAccent mt-1.5 shrink-0"></span>
                Sensitive Hardship Narratives
              </li>
            </ul>
          </div>

          {/* The Boundary */}
          <div className="flex flex-col items-center justify-center gap-4 text-center px-4">
            <div className="h-full w-px bg-sidqly-mutedBorder relative hidden md:block">
              <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 bg-white p-3 rounded-full border border-sidqly-mutedBorder">
                <ShieldCheck className="w-6 h-6 text-sidqly-emeraldGreen" />
              </div>
            </div>
            <div className="md:hidden flex flex-col items-center gap-2">
               <ShieldCheck className="w-8 h-8 text-sidqly-emeraldGreen" />
               <span className="text-xs font-bold text-sidqly-deepGreen uppercase tracking-tighter">Dignity Filter</span>
            </div>
          </div>

          {/* External Side */}
          <div className="flex-1 bg-sidqly-softGreen/10 p-8 rounded-3xl border border-sidqly-softGreen/30">
            <div className="flex items-center gap-3 mb-6 text-sidqly-deepGreen">
              <EyeOff className="w-6 h-6 text-sidqly-emeraldGreen" />
              <h4 className="text-xl font-bold">Donor/Public View</h4>
            </div>
            <ul className="space-y-4">
              <li className="flex items-start gap-3 text-sm text-sidqly-slateText">
                <span className="w-1.5 h-1.5 rounded-full bg-sidqly-emeraldGreen mt-1.5 shrink-0"></span>
                Masked Case Codes (e.g. ZKT-XXXX)
              </li>
              <li className="flex items-start gap-3 text-sm text-sidqly-slateText">
                <span className="w-1.5 h-1.5 rounded-full bg-sidqly-emeraldGreen mt-1.5 shrink-0"></span>
                Dignity-Safe / Blurred Proof
              </li>
              <li className="flex items-start gap-3 text-sm text-sidqly-slateText">
                <span className="w-1.5 h-1.5 rounded-full bg-sidqly-emeraldGreen mt-1.5 shrink-0"></span>
                Aggregated Impact Stats
              </li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SafeDataBoundaryDiagram;
