import React from 'react';
import { XCircle, CheckCircle2 } from 'lucide-react';

interface ComparisonItem {
  before: string;
  after: string;
}

interface BeforeAfterComparisonProps {
  titleBefore?: string;
  titleAfter?: string;
  items: ComparisonItem[];
  className?: string;
}

const BeforeAfterComparison: React.FC<BeforeAfterComparisonProps> = ({
  titleBefore = "Traditional Process",
  titleAfter = "With Sidqly",
  items,
  className = ""
}) => {
  return (
    <div className={`grid grid-cols-1 md:grid-cols-2 gap-8 ${className}`}>
      <div className="bg-red-50/50 p-8 rounded-3xl border border-red-100">
        <h4 className="text-xl font-bold text-red-900 mb-6 flex items-center gap-2">
          <XCircle className="w-6 h-6 text-red-500" />
          {titleBefore}
        </h4>
        <ul className="space-y-4">
          {items.map((item, index) => (
            <li key={index} className="flex gap-3 text-red-800/70 text-sm italic">
              <span className="shrink-0 mt-1">•</span>
              {item.before}
            </li>
          ))}
        </ul>
      </div>

      <div className="bg-sidqly-softGreen/10 p-8 rounded-3xl border border-sidqly-softGreen/30 relative overflow-hidden">
        <div className="absolute top-0 right-0 p-4 opacity-5">
           <CheckCircle2 className="w-32 h-32" />
        </div>
        <h4 className="text-xl font-bold text-sidqly-deepGreen mb-6 flex items-center gap-2">
          <CheckCircle2 className="w-6 h-6 text-sidqly-emeraldGreen" />
          {titleAfter}
        </h4>
        <ul className="space-y-4">
          {items.map((item, index) => (
            <li key={index} className="flex gap-3 text-sidqly-deepGreen font-medium text-sm">
              <CheckCircle2 className="w-5 h-5 text-sidqly-emeraldGreen shrink-0" />
              {item.after}
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
};

export default BeforeAfterComparison;
