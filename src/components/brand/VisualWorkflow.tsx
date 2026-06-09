import React from 'react';
import { ChevronRight, ChevronDown } from 'lucide-react';

interface WorkflowStep {
  title: string;
  description: string;
  icon: React.ReactNode;
}

interface VisualWorkflowProps {
  steps: WorkflowStep[];
  direction?: 'horizontal' | 'vertical';
  className?: string;
}

const VisualWorkflow: React.FC<VisualWorkflowProps> = ({
  steps,
  direction = 'horizontal',
  className = ""
}) => {
  return (
    <div className={`flex ${direction === 'horizontal' ? 'flex-col md:flex-row' : 'flex-col'} gap-4 items-center justify-center ${className}`}>
      {steps.map((step, index) => (
        <React.Fragment key={index}>
          <div className="flex-1 w-full max-w-sm">
            <div className="bg-white p-6 rounded-2xl border border-sidqly-mutedBorder shadow-sm hover:shadow-md transition-all group h-full">
              <div className="w-12 h-12 rounded-xl bg-sidqly-softGreen/20 flex items-center justify-center text-sidqly-emeraldGreen mb-4 group-hover:bg-sidqly-emeraldGreen group-hover:text-white transition-colors">
                {step.icon}
              </div>
              <h4 className="text-lg font-bold text-sidqly-deepNavy mb-2">{step.title}</h4>
              <p className="text-sidqly-slateText text-sm leading-relaxed">{step.description}</p>
              <div className="mt-4 text-xs font-mono text-sidqly-softGreen uppercase tracking-widest">
                Step {String(index + 1).padStart(2, '0')}
              </div>
            </div>
          </div>
          {index < steps.length - 1 && (
            <div className={`flex items-center justify-center text-sidqly-softGreen ${direction === 'horizontal' ? 'rotate-90 md:rotate-0' : ''}`}>
              {direction === 'horizontal' ? <ChevronRight className="w-8 h-8" /> : <ChevronDown className="w-8 h-8" />}
            </div>
          )}
        </React.Fragment>
      ))}
    </div>
  );
};

export default VisualWorkflow;
