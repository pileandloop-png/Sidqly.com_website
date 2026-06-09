import React from 'react';
import { CreditCard } from 'lucide-react';

export const PaymentDetailsBox: React.FC = () => {
  return (
    <div className="bg-white p-6 rounded-xl border border-gray-200 shadow-sm space-y-4">
      <div className="flex items-center space-x-2 text-sidqly-primary font-bold">
        <CreditCard className="h-5 w-5" />
        <span>Official Payment Details</span>
      </div>

      <div className="space-y-3">
        <div className="p-3 bg-gray-50 rounded border border-gray-100">
          <p className="text-xs uppercase text-gray-500 font-bold tracking-wider">Payment Method</p>
          <p className="text-gray-900 font-medium">Easypaisa Pakistan</p>
        </div>

        <div className="p-3 bg-gray-50 rounded border border-gray-100">
          <p className="text-xs uppercase text-gray-500 font-bold tracking-wider">IBAN</p>
          <p className="text-gray-900 font-mono break-all font-medium">PK19TMFB0000000060685814</p>
        </div>

        <div className="p-3 bg-gray-50 rounded border border-gray-100">
          <p className="text-xs uppercase text-gray-500 font-bold tracking-wider">Confirmation Email</p>
          <p className="text-sidqly-primary font-medium">team@sidqly.com</p>
        </div>
      </div>

      <div className="text-sm text-gray-600 space-y-2 leading-relaxed">
        <p>
          For onboarding, subscription, or setup payments, please use the official Sidqly payment details.
        </p>
        <p>
          After payment, please email your <strong>payment screenshot</strong>, <strong>organization name</strong>, <strong>selected plan</strong>, and <strong>contact person details</strong> to <a href="mailto:team@sidqly.com" className="text-sidqly-primary hover:underline">team@sidqly.com</a>.
        </p>
        <p className="text-xs italic bg-sidqly-secondary p-2 rounded">
          Sidqly payments are manually reviewed. Your subscription or onboarding will be confirmed after payment verification.
        </p>
      </div>
    </div>
  );
};
