import React from 'react';
import {
  Split,
  CheckCircle2,
  UserSearch,
  Wallet,
  ShieldCheck,
  FileText
} from 'lucide-react';
import VisualWorkflow from './VisualWorkflow';

const ZakatSeparationDiagram: React.FC = () => {
  const steps = [
    {
      title: "Collection & Proof",
      description: "Zakat is collected and payment proof is manually verified by finance.",
      icon: <Wallet className="w-6 h-6" />
    },
    {
      title: "Fund Separation",
      description: "System keeps Zakat strictly separate from Sadaqah and service fees.",
      icon: <Split className="w-6 h-6" />
    },
    {
      title: "Eligibility Review",
      description: "Organization reviewers manually confirm Shariah-eligibility of the case.",
      icon: <UserSearch className="w-6 h-6" />
    },
    {
      title: "Allocation Approval",
      description: "Admin approves specific fund disbursement for the verified case.",
      icon: <CheckCircle2 className="w-6 h-6" />
    },
    {
      title: "Tracking & Proof",
      description: "Full proof of delivery is uploaded and reviewed for the Zakat task.",
      icon: <ShieldCheck className="w-6 h-6" />
    },
    {
      title: "Safe Report",
      description: "Zakat impact report is generated without compromising recipient dignity.",
      icon: <FileText className="w-6 h-6" />
    }
  ];

  return (
    <div className="py-12">
      <div className="bg-sidqly-softGreen/10 border border-sidqly-softGreen/30 p-8 rounded-3xl mb-12">
        <h4 className="text-xl font-bold text-sidqly-deepGreen mb-6 text-center">Strict Fund Separation</h4>
        <div className="flex flex-wrap justify-center gap-4">
          <div className="px-6 py-3 rounded-full bg-sidqly-deepGreen text-white font-bold">Zakat Pool</div>
          <div className="px-2 py-3">≠</div>
          <div className="px-6 py-3 rounded-full border border-sidqly-mutedBorder text-sidqly-slateText">Sadaqah</div>
          <div className="px-6 py-3 rounded-full border border-sidqly-mutedBorder text-sidqly-slateText">General</div>
          <div className="px-6 py-3 rounded-full border border-sidqly-mutedBorder text-sidqly-slateText">Admin Fees</div>
        </div>
      </div>

      <VisualWorkflow steps={steps} direction="vertical" className="max-w-4xl mx-auto mb-12" />

      <div className="bg-sidqly-warmIvory p-6 rounded-2xl border border-sidqly-mutedBorder max-w-3xl mx-auto">
        <p className="text-xs text-sidqly-slateText text-center leading-relaxed">
          <strong>Note:</strong> Sidqly supports operational control and fund segregation. Religious eligibility decisions remain with the organization's authorized reviewers, scholars, or policy team.
        </p>
      </div>
    </div>
  );
};

export default ZakatSeparationDiagram;
