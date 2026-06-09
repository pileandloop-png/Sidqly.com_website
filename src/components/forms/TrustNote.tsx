import React from 'react';
import { ShieldCheck } from 'lucide-react';

export const TrustNote: React.FC = () => {
  return (
    <div className="flex items-start space-x-3 p-4 bg-sidqly-secondary rounded-lg border border-gray-100 mt-6">
      <ShieldCheck className="h-5 w-5 text-sidqly-primary mt-0.5" />
      <div>
        <p className="text-sm font-medium text-gray-900">Your information is secure</p>
        <p className="text-xs text-gray-600 mt-1">
          We use your details only to provide the best Sidqly experience. Your organization's data remains private, organized, and dignity-safe.
        </p>
      </div>
    </div>
  );
};
