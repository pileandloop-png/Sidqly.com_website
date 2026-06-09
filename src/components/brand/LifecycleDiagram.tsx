import React from 'react';

interface LifecycleStep {
  title: string;
  description: string;
  icon: React.ReactNode;
  status?: 'completed' | 'current' | 'pending';
}

interface LifecycleDiagramProps {
  steps: LifecycleStep[];
  className?: string;
}

const LifecycleDiagram: React.FC<LifecycleDiagramProps> = ({ steps, className = "" }) => {
  return (
    <div className={`relative ${className}`}>
      <div className="absolute left-8 top-0 bottom-0 w-0.5 bg-sidqly-mutedBorder hidden md:block"></div>
      <div className="space-y-8">
        {steps.map((step, index) => (
          <div key={index} className="flex flex-col md:flex-row gap-6 relative">
            <div className="hidden md:flex items-center justify-center w-16 h-16 rounded-full bg-white border-4 border-sidqly-mutedBorder z-10 shrink-0">
              <div className={`w-4 h-4 rounded-full ${
                step.status === 'completed' ? 'bg-sidqly-success' :
                step.status === 'current' ? 'bg-sidqly-goldAccent' : 'bg-sidqly-mutedBorder'
              }`}></div>
            </div>
            <div className="bg-white p-6 rounded-2xl border border-sidqly-mutedBorder shadow-sm flex-1">
              <div className="flex items-center gap-4 mb-3">
                <div className="p-2 rounded-lg bg-sidqly-softGreen/10 text-sidqly-emeraldGreen">
                  {step.icon}
                </div>
                <h4 className="text-lg font-bold text-sidqly-deepNavy">{step.title}</h4>
              </div>
              <p className="text-sidqly-slateText text-sm leading-relaxed">{step.description}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default LifecycleDiagram;
