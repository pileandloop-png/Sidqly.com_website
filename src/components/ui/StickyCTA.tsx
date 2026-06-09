import React, { useState, useEffect } from 'react';
import { Calendar, ClipboardList, Mail, ChevronUp, ChevronDown } from 'lucide-react';

export const StickyCTA: React.FC = () => {
  const [isVisible, setIsVisible] = useState(false);
  const [isExpanded, setIsExpanded] = useState(false);

  useEffect(() => {
    const toggleVisibility = () => {
      if (window.pageYOffset > 300) {
        setIsVisible(true);
      } else {
        setIsVisible(false);
      }
    };

    window.addEventListener('scroll', toggleVisibility);
    return () => window.removeEventListener('scroll', toggleVisibility);
  }, []);

  if (!isVisible) return null;

  return (
    <div className="fixed bottom-6 right-6 z-50 flex flex-col items-end space-y-3 pointer-events-none">
      {isExpanded && (
        <div className="flex flex-col items-end space-y-3 mb-3 pointer-events-auto animate-in slide-in-from-bottom-5 duration-300">
          <a
            href="https://calendly.com/d/dvzs-3zf-cgz"
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center space-x-3 bg-white text-gray-900 px-4 py-2.5 rounded-full shadow-xl border border-gray-100 hover:bg-gray-50 transition-all group"
          >
            <span className="text-sm font-bold">Book Demo</span>
            <div className="p-1.5 bg-sidqly-secondary rounded-full group-hover:bg-sidqly-primary group-hover:text-white transition-colors">
              <Calendar className="h-4 w-4" />
            </div>
          </a>

          <a
            href="https://forms.gle/bvSMog9pw2Ri4kMt9"
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center space-x-3 bg-white text-gray-900 px-4 py-2.5 rounded-full shadow-xl border border-gray-100 hover:bg-gray-50 transition-all group"
          >
            <span className="text-sm font-bold">Fill Form</span>
            <div className="p-1.5 bg-sidqly-secondary rounded-full group-hover:bg-sidqly-primary group-hover:text-white transition-colors">
              <ClipboardList className="h-4 w-4" />
            </div>
          </a>

          <a
            href="mailto:team@sidqly.com"
            className="flex items-center space-x-3 bg-white text-gray-900 px-4 py-2.5 rounded-full shadow-xl border border-gray-100 hover:bg-gray-50 transition-all group"
          >
            <span className="text-sm font-bold">Email Us</span>
            <div className="p-1.5 bg-sidqly-secondary rounded-full group-hover:bg-sidqly-primary group-hover:text-white transition-colors">
              <Mail className="h-4 w-4" />
            </div>
          </a>
        </div>
      )}

      <button
        onClick={() => setIsExpanded(!isExpanded)}
        className="pointer-events-auto bg-sidqly-primary text-white p-4 rounded-full shadow-2xl hover:scale-105 transition-transform flex items-center justify-center relative overflow-hidden group"
        aria-label="Toggle Quick Actions"
      >
        {isExpanded ? <ChevronDown className="h-6 w-6" /> : <ChevronUp className="h-6 w-6" />}
        <span className="absolute inset-0 bg-white/10 scale-0 group-hover:scale-100 transition-transform rounded-full"></span>
      </button>
    </div>
  );
};
