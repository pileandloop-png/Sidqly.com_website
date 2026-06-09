import React from 'react';
import {
  CalendarPlus,
  ShoppingCart,
  UserCheck,
  Scissors,
  Truck,
  Camera,
  Award
} from 'lucide-react';
import VisualWorkflow from './VisualWorkflow';

const QurbaniLifecycleDiagram: React.FC = () => {
  const steps = [
    {
      title: "Campaign & Booking",
      description: "Campaigns created; shares or animals booked by donors.",
      icon: <CalendarPlus className="w-6 h-6" />
    },
    {
      title: "Payment Verification",
      description: "Finance manually confirms and verifies animal bookings.",
      icon: <ShoppingCart className="w-6 h-6" />
    },
    {
      title: "Animal Assignment",
      description: "Specific animals or shares assigned to verified donors.",
      icon: <UserCheck className="w-6 h-6" />
    },
    {
      title: "Slaughter & Processing",
      description: "Slaughter scheduled and processing (packing) tracked.",
      icon: <Scissors className="w-6 h-6" />
    },
    {
      title: "Distribution",
      description: "Meat distribution to pre-verified requester families.",
      icon: <Truck className="w-6 h-6" />
    },
    {
      title: "Proof & Certificate",
      description: "Distribution proof approved and Qurbani certificate issued.",
      icon: <Camera className="w-6 h-6" />
    }
  ];

  return (
    <div className="py-12">
      <VisualWorkflow steps={steps} direction="vertical" className="max-w-4xl mx-auto" />
    </div>
  );
};

export default QurbaniLifecycleDiagram;
