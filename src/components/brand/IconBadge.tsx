import React from 'react';

interface IconBadgeProps {
  icon: React.ReactNode;
  label: string;
  className?: string;
}

const IconBadge: React.FC<IconBadgeProps> = ({ icon, label, className = "" }) => {
  return (
    <div className={`inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-sidqly-softGreen/20 border border-sidqly-softGreen/30 text-sidqly-deepGreen text-sm font-medium ${className}`}>
      <span className="w-4 h-4 flex items-center justify-center">
        {icon}
      </span>
      {label}
    </div>
  );
};

export default IconBadge;
