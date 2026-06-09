import React from 'react';

interface LeadFormShellProps {
  title: string;
  subtitle: string;
  children: React.ReactNode;
}

export const LeadFormShell: React.FC<LeadFormShellProps> = ({ title, subtitle, children }) => {
  return (
    <div className="max-w-3xl mx-auto px-4 py-12 md:py-20">
      <div className="mb-10 text-center">
        <h1 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">{title}</h1>
        <p className="text-lg text-gray-600 max-w-2xl mx-auto">{subtitle}</p>
      </div>
      <div className="bg-white p-6 md:p-10 rounded-xl shadow-sm border border-gray-100">
        {children}
      </div>
    </div>
  );
};
