import React from 'react';
import {
  Camera,
  ListChecks,
  ShieldAlert,
  UserCheck,
  RefreshCcw,
  Share2
} from 'lucide-react';
import VisualWorkflow from './VisualWorkflow';

const ProofTrustDiagram: React.FC = () => {
  const steps = [
    {
      title: "Proof Upload",
      description: "Field team uploads raw photos or videos directly from the site.",
      icon: <Camera className="w-6 h-6" />
    },
    {
      title: "Checklist",
      description: "Mandatory compliance checklist must be completed by the uploader.",
      icon: <ListChecks className="w-6 h-6" />
    },
    {
      title: "Risk Flags",
      description: "System highlights potential privacy or dignity risks for review.",
      icon: <ShieldAlert className="w-6 h-6" />
    },
    {
      title: "Admin Review",
      description: "Human admin reviews the proof against organization standards.",
      icon: <UserCheck className="w-6 h-6" />
    },
    {
      title: "Approval/Correction",
      description: "Proof is approved or sent back for better quality/privacy.",
      icon: <RefreshCcw className="w-6 h-6" />
    },
    {
      title: "Safe Sharing",
      description: "Dignity-safe version is made visible to the donor.",
      icon: <Share2 className="w-6 h-6" />
    }
  ];

  return (
    <div className="py-8">
      <VisualWorkflow steps={steps} direction="vertical" className="mb-8" />
      <div className="bg-sidqly-deepGreen text-white p-6 rounded-2xl border border-sidqly-emeraldGreen">
        <p className="text-sm leading-relaxed">
          <strong>Why this matters:</strong> Proof should not be a random image in a chat. Sidqly connects proof to specific tasks, human review, and donor-safe visibility.
        </p>
      </div>
    </div>
  );
};

export default ProofTrustDiagram;
