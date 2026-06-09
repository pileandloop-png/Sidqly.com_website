import React from 'react';

interface StatsHighlightCardProps {
  label: string;
  value: string;
  description?: string;
  icon?: React.ReactNode;
}

const StatsHighlightCard: React.FC<StatsHighlightCardProps> = ({ label, value, description, icon }) => {
  return (
    <div className="bg-white p-6 rounded-2xl border border-sidqly-mutedBorder shadow-sm hover:shadow-md transition-shadow">
      <div className="flex items-center gap-4 mb-4">
        {icon && (
          <div className="w-12 h-12 rounded-xl bg-sidqly-softGreen/20 flex items-center justify-center text-sidqly-emeraldGreen">
            {icon}
          </div>
        )}
        <div className="text-sidqly-slateText text-sm font-medium uppercase tracking-wider">{label}</div>
      </div>
      <div className="text-3xl font-bold text-sidqly-deepNavy mb-2">{value}</div>
      {description && <div className="text-sidqly-slateText text-sm">{description}</div>}
    </div>
  );
};

export default StatsHighlightCard;
