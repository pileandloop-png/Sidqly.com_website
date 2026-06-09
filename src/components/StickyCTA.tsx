import { Calendar, FileText, Mail } from 'lucide-react';

const StickyCTA = () => {
  return (
    <div className="fixed bottom-6 right-6 z-[60] flex flex-col gap-3 group">
      {/* Expanded Actions */}
      <div className="flex flex-col gap-3 opacity-0 group-hover:opacity-100 translate-y-10 group-hover:translate-y-0 transition-all duration-300">
        <a
          href="https://forms.gle/bvSMog9pw2Ri4kMt9"
          target="_blank"
          rel="noopener noreferrer"
          className="bg-white text-secondary shadow-2xl p-3 rounded-2xl hover:bg-emerald-50 transition-colors flex items-center gap-3 border border-gray-100"
          title="Fill Inquiry Form"
        >
          <div className="bg-emerald-100 p-2 rounded-xl text-primary"><FileText className="h-5 w-5" /></div>
          <span className="font-bold text-sm pr-2">Fill Form</span>
        </a>
        <a
          href="mailto:team@sidqly.com?subject=Sidqly%20Inquiry"
          className="bg-white text-secondary shadow-2xl p-3 rounded-2xl hover:bg-emerald-50 transition-colors flex items-center gap-3 border border-gray-100"
          title="Email Us"
        >
          <div className="bg-emerald-100 p-2 rounded-xl text-primary"><Mail className="h-5 w-5" /></div>
          <span className="font-bold text-sm pr-2">Email Us</span>
        </a>
      </div>

      {/* Primary Action Button */}
      <a
        href="https://calendly.com/d/dvzs-3zf-cgz"
        target="_blank"
        rel="noopener noreferrer"
        className="bg-primary text-white shadow-2xl p-4 rounded-full hover:bg-emerald-700 transition-all flex items-center gap-3 group/main"
      >
        <Calendar className="h-6 w-6" />
        <span className="font-bold pr-2 max-w-0 overflow-hidden group-hover:max-w-xs group-hover/main:max-w-xs transition-all duration-500 whitespace-nowrap">Book Demo</span>
      </a>
    </div>
  );
};

export default StickyCTA;
