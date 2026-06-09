import React from 'react';
import {
  Eye,
  Upload,
  Clock,
  CheckCircle2,
  FileText
} from 'lucide-react';
import VisualWorkflow from './VisualWorkflow';

const ManualPaymentFlow: React.FC = () => {
  const steps = [
    {
      title: "View Instructions",
      description: "Donor sees organization's manual payment details (e.g. IBAN).",
      icon: <Eye className="w-6 h-6" />
    },
    {
      title: "Submit Proof",
      description: "Donor uploads screenshot of the transfer or bank receipt.",
      icon: <Upload className="w-6 h-6" />
    },
    {
      title: "Under Review",
      description: "Finance team is notified to verify the actual bank credit.",
      icon: <Clock className="w-6 h-6" />
    },
    {
      title: "Verification",
      description: "Payment is verified, rejected, or more info is requested.",
      icon: <CheckCircle2 className="w-6 h-6" />
    },
    {
      title: "Receipt Issued",
      description: "Professional digital receipt is generated for the donor.",
      icon: <FileText className="w-6 h-6" />
    }
  ];

  return (
    <div className="py-8">
      <VisualWorkflow steps={steps} className="mb-8" />
      <div className="bg-sidqly-warmIvory p-4 rounded-xl border border-sidqly-mutedBorder text-center">
        <p className="text-sidqly-deepGreen text-sm font-medium italic">
          Note: Sidqly payments are manually reviewed. No payment is auto-confirmed without human review.
        </p>
      </div>
    </div>
  );
};

export default ManualPaymentFlow;
