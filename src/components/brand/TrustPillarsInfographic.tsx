import React from 'react';
import {
  ShieldCheck,
  CheckCircle2,
  Lock,
  FileSearch
} from 'lucide-react';

const TrustPillarsInfographic: React.FC = () => {
  const pillars = [
    {
      title: "Manual Review",
      description: "Human-in-the-loop verification for every payment and proof. We don't automate trust.",
      icon: <FileSearch className="w-6 h-6" />
    },
    {
      title: "Verified Proof",
      description: "Tamper-evident evidence connected to specific ground-level actions.",
      icon: <CheckCircle2 className="w-6 h-6" />
    },
    {
      title: "Protected Dignity",
      description: "Data boundaries that keep requester identities safe from public exposure.",
      icon: <Lock className="w-6 h-6" />
    },
    {
      title: "Clear Reporting",
      description: "Audit-ready trails for every single rupee/dollar donated and spent.",
      icon: <ShieldCheck className="w-6 h-6" />
    }
  ];

  return (
    <div className="py-12">
      <div className="text-center mb-12">
        <h3 className="text-2xl md:text-3xl font-bold text-sidqly-deepNavy mb-4">
          Built for trust before scale
        </h3>
      </div>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
        {pillars.map((pillar, index) => (
          <div key={index} className="bg-white p-8 rounded-3xl border border-sidqly-mutedBorder hover:border-sidqly-emeraldGreen/50 transition-colors shadow-sm">
            <div className="w-14 h-14 rounded-2xl bg-sidqly-softGreen/20 flex items-center justify-center text-sidqly-emeraldGreen mb-6">
              {pillar.icon}
            </div>
            <h4 className="text-lg font-bold text-sidqly-deepNavy mb-3">{pillar.title}</h4>
            <p className="text-sidqly-slateText text-sm leading-relaxed">{pillar.description}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default TrustPillarsInfographic;
