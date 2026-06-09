import { Calendar, FileText, Mail } from 'lucide-react';
import { brand } from '../config/brand';

const StickyCTA = () => {
  return (
    <div className="fixed bottom-6 right-6 z-[60] flex flex-col gap-3 group">
      {/* Expanded Actions */}
      <div className="flex flex-col gap-3 opacity-0 group-hover:opacity-100 translate-y-10 group-hover:translate-y-0 transition-all duration-300">
        <a
          href={brand.inquiryFormUrl}
          target="_blank"
          rel="noopener noreferrer"
          className="bg-white text-sidqly-deepNavy shadow-2xl p-3 rounded-2xl hover:bg-sidqly-softGreen/10 transition-colors flex items-center gap-3 border border-sidqly-mutedBorder"
          title="Fill Inquiry Form"
        >
          <div className="bg-sidqly-softGreen/20 p-2 rounded-xl text-sidqly-emeraldGreen"><FileText className="h-5 w-5" /></div>
          <span className="font-bold text-sm pr-2">Fill Form</span>
        </a>
        <a
          href={`mailto:${brand.email}?subject=Sidqly%20Inquiry`}
          className="bg-white text-sidqly-deepNavy shadow-2xl p-3 rounded-2xl hover:bg-sidqly-softGreen/10 transition-colors flex items-center gap-3 border border-sidqly-mutedBorder"
          title="Email Us"
        >
          <div className="bg-sidqly-softGreen/20 p-2 rounded-xl text-sidqly-emeraldGreen"><Mail className="h-5 w-5" /></div>
          <span className="font-bold text-sm pr-2">Email Us</span>
        </a>
      </div>

      {/* Primary Action Button */}
      <a
        href={brand.calendlyUrl}
        target="_blank"
        rel="noopener noreferrer"
        className="bg-sidqly-deepGreen text-white shadow-2xl p-4 rounded-full hover:bg-sidqly-emeraldGreen transition-all flex items-center gap-3 group/main"
      >
        <Calendar className="h-6 w-6" />
        <span className="font-bold pr-2 max-w-0 overflow-hidden group-hover:max-w-xs group-hover/main:max-w-xs transition-all duration-500 whitespace-nowrap">Book Demo</span>
      </a>
    </div>
  );
};

export default StickyCTA;
