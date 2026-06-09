import React from 'react';
import {
  Calendar,
  Search,
  Lightbulb,
  MessageSquare,
  ShieldCheck,
  Rocket
} from 'lucide-react';
import VisualWorkflow from './VisualWorkflow';

const SupportQueryFlow: React.FC = () => {
  const steps = [
    {
      title: "Inquiry / Booking",
      description: "Visitor books a demo via Calendly or fills the inquiry form.",
      icon: <Calendar className="w-6 h-6" />
    },
    {
      title: "Need Review",
      description: "Sidqly team reviews your organization's specific operational needs.",
      icon: <Search className="w-6 h-6" />
    },
    {
      title: "Consultation",
      description: "Discovery call to suggest the best-fit plan or pilot modules.",
      icon: <Lightbulb className="w-6 h-6" />
    },
    {
      title: "Setup discussion",
      description: "Onboarding discussion happens to map your existing workflows.",
      icon: <MessageSquare className="w-6 h-6" />
    },
    {
      title: "Verification",
      description: "Setup and payment are manually verified to secure your instance.",
      icon: <ShieldCheck className="w-6 h-6" />
    },
    {
      title: "Go Live",
      description: "Organization starts operating with selected Sidqly modules.",
      icon: <Rocket className="w-6 h-6" />
    }
  ];

  return (
    <div className="py-12">
      <VisualWorkflow steps={steps} direction="vertical" className="max-w-4xl mx-auto" />
    </div>
  );
};

export default SupportQueryFlow;
