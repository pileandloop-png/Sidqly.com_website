import React from 'react';
import {
  UserCog,
  ShieldCheck,
  Wallet,
  Users,
  Truck,
  UserCircle,
  Heart,
  Building2
} from 'lucide-react';

const RoleMapDiagram: React.FC = () => {
  const roles = [
    {
      role: "Org Owner",
      task: "Sets policy, manages team, and oversees all modules.",
      icon: <UserCog className="w-5 h-5" />
    },
    {
      role: "Finance Officer",
      task: "Reviews manual payments and issues official receipts.",
      icon: <Wallet className="w-5 h-5" />
    },
    {
      role: "Admin/Reviewer",
      task: "Reviews requests and ground proof for compliance.",
      icon: <ShieldCheck className="w-5 h-5" />
    },
    {
      role: "Staff / Volunteer",
      task: "Coordinates tasks and manages field operations.",
      icon: <Users className="w-5 h-5" />
    },
    {
      role: "Vendor",
      task: "Accepts tasks, updates progress, and uploads proof.",
      icon: <Truck className="w-5 h-5" />
    },
    {
      role: "Donor",
      task: "Tracks safe progress and receives impact certificates.",
      icon: <Heart className="w-5 h-5" />
    },
    {
      role: "Requester",
      task: "Submits request and receives safe status updates.",
      icon: <UserCircle className="w-5 h-5" />
    },
    {
      role: "Corporate Sponsor",
      task: "Views high-level board reports and CSR impact.",
      icon: <Building2 className="w-5 h-5" />
    }
  ];

  return (
    <div className="py-12">
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
        {roles.map((role, index) => (
          <div key={index} className="bg-white p-6 rounded-2xl border border-sidqly-mutedBorder hover:border-sidqly-softGreen transition-colors">
            <div className="w-10 h-10 rounded-lg bg-sidqly-softGreen/20 flex items-center justify-center text-sidqly-emeraldGreen mb-4">
              {role.icon}
            </div>
            <div className="font-bold text-sidqly-deepNavy mb-1">{role.role}</div>
            <div className="text-sidqly-slateText text-xs leading-relaxed">{role.task}</div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default RoleMapDiagram;
