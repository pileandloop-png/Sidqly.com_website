import React from 'react';
import {
  UserCircle,
  FileCheck,
  ShieldCheck,
  Wallet,
  Users,
  Truck,
  Camera,
  ClipboardCheck,
  Bell,
  BarChart3
} from 'lucide-react';
import VisualWorkflow from './VisualWorkflow';

const OperatingJourney: React.FC = () => {
  const steps = [
    {
      title: "Donor gives",
      description: "Organization receives donation through their preferred channel.",
      icon: <UserCircle className="w-6 h-6" />
    },
    {
      title: "Payment proof",
      description: "Donor uploads payment screenshot or receipt for verification.",
      icon: <FileCheck className="w-6 h-6" />
    },
    {
      title: "Finance review",
      description: "Internal finance team manually verifies the payment in the bank.",
      icon: <ShieldCheck className="w-6 h-6" />
    },
    {
      title: "Funds allocated",
      description: "Verified funds are moved to the specific campaign or fund pool.",
      icon: <Wallet className="w-6 h-6" />
    },
    {
      title: "Task assigned",
      description: "Work orders created for vendors, staff, or volunteers.",
      icon: <Users className="w-6 h-6" />
    },
    {
      title: "Service fulfilled",
      description: "The actual ground work (delivery/service) is completed.",
      icon: <Truck className="w-6 h-6" />
    },
    {
      title: "Proof uploaded",
      description: "On-ground team uploads photos or documents as proof of work.",
      icon: <Camera className="w-6 h-6" />
    },
    {
      title: "Admin review",
      description: "Admin reviews proof for quality and dignity compliance.",
      icon: <ClipboardCheck className="w-6 h-6" />
    },
    {
      title: "Donor update",
      description: "Donor receives a dignity-safe notification of their impact.",
      icon: <Bell className="w-6 h-6" />
    },
    {
      title: "Impact reporting",
      description: "Professional reports and certificates are automatically generated.",
      icon: <BarChart3 className="w-6 h-6" />
    }
  ];

  return (
    <div className="py-12">
      <div className="text-center mb-12">
        <h3 className="text-2xl md:text-3xl font-bold text-sidqly-deepNavy mb-4">
          How Sidqly turns scattered giving into clear operations
        </h3>
        <p className="text-sidqly-slateText max-w-2xl mx-auto">
          A complete operational lifecycle designed for trust, transparency, and dignity.
        </p>
      </div>
      <VisualWorkflow steps={steps} direction="vertical" className="max-w-4xl mx-auto" />
    </div>
  );
};

export default OperatingJourney;
