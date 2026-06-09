import React from 'react';
import {
  Target,
  Wallet,
  Users,
  Utensils,
  Truck,
  Camera,
  BarChart3
} from 'lucide-react';
import VisualWorkflow from './VisualWorkflow';

const RamadanOperationsDiagram: React.FC = () => {
  const steps = [
    {
      title: "Target Setting",
      description: "Daily meal or monthly ration targets defined for the drive.",
      icon: <Target className="w-6 h-6" />
    },
    {
      title: "Fund Collection",
      description: "Donations verified and allocated to the Ramadan fund.",
      icon: <Wallet className="w-6 h-6" />
    },
    {
      title: "On-ground Logistics",
      description: "Vendors, staff, and volunteers assigned to preparation.",
      icon: <Users className="w-6 h-6" />
    },
    {
      title: "Preparation & Packing",
      description: "Food preparation or ration packing started and tracked.",
      icon: <Utensils className="w-6 h-6" />
    },
    {
      title: "Distribution",
      description: "Daily Iftar or Ration distribution to families.",
      icon: <Truck className="w-6 h-6" />
    },
    {
      title: "Proof & Impact",
      description: "Daily proof approved and impact report updated in real-time.",
      icon: <Camera className="w-6 h-6" />
    }
  ];

  return (
    <div className="py-12">
      <VisualWorkflow steps={steps} direction="vertical" className="max-w-4xl mx-auto" />
    </div>
  );
};

export default RamadanOperationsDiagram;
