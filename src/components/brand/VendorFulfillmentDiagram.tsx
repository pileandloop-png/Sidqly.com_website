import React from 'react';
import {
  ClipboardList,
  UserPlus,
  PlayCircle,
  Upload,
  CheckSquare
} from 'lucide-react';
import VisualWorkflow from './VisualWorkflow';

const VendorFulfillmentDiagram: React.FC = () => {
  const steps = [
    {
      title: "Task Creation",
      description: "Admin creates work orders based on donor contributions.",
      icon: <ClipboardList className="w-6 h-6" />
    },
    {
      title: "Vendor Assignment",
      description: "Trusted vendors or field staff are assigned to the task.",
      icon: <UserPlus className="w-6 h-6" />
    },
    {
      title: "Work in Progress",
      description: "Vendor updates status as they prepare and deliver items.",
      icon: <PlayCircle className="w-6 h-6" />
    },
    {
      title: "Proof Submission",
      description: "Vendor uploads completion proof (e.g., delivery photo).",
      icon: <Upload className="w-6 h-6" />
    },
    {
      title: "Fulfillment Review",
      description: "Admin verifies the delivery before closing the task.",
      icon: <CheckSquare className="w-6 h-6" />
    }
  ];

  return (
    <div className="py-8">
      <VisualWorkflow steps={steps} />
    </div>
  );
};

export default VendorFulfillmentDiagram;
