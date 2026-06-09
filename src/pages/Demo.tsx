import { Calendar, Monitor, UserCheck, Shield, FileText } from 'lucide-react';
import SEO from '../components/SEO';
import PageHeader from '../components/PageHeader';

const Demo = () => {
  return (
    <>
      <SEO
        title="Book a Demo"
        description="See Sidqly in action. Book a personalized demo to see how our premium platform can transform your organization's operations."
        canonical="/demo"
      />

      <PageHeader
        title="Experience the premium platform"
        description="Schedule a personalized walkthrough of Sidqly with our team and see how we can support your mission."
        category="Demo"
      />

      <section className="py-24 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
           <div className="grid lg:grid-cols-2 gap-20 items-center">
             <div>
               <h2 className="text-3xl font-bold text-secondary mb-8">What to expect in your demo</h2>
               <div className="space-y-8">
                 <div className="flex gap-6">
                   <Monitor className="h-8 w-8 text-primary shrink-0" />
                   <div>
                     <h4 className="font-bold text-secondary mb-2">Live Platform Tour</h4>
                     <p className="text-gray-500 text-sm">A deep dive into the dashboard, modules, and reporting features.</p>
                   </div>
                 </div>
                 <div className="flex gap-6">
                   <UserCheck className="h-8 w-8 text-primary shrink-0" />
                   <div>
                     <h4 className="font-bold text-secondary mb-2">Needs Assessment</h4>
                     <p className="text-gray-500 text-sm">We'll discuss your organization's specific challenges and goals.</p>
                   </div>
                 </div>
                 <div className="flex gap-6">
                   <Shield className="h-8 w-8 text-primary shrink-0" />
                   <div>
                     <h4 className="font-bold text-secondary mb-2">Implementation Strategy</h4>
                     <p className="text-gray-500 text-sm">Learn how we help you onboard your team and vendors securely.</p>
                   </div>
                 </div>
               </div>

               <div className="mt-16 p-8 bg-gray-50 rounded-3xl border border-gray-100">
                 <h4 className="font-bold text-secondary mb-4">Lead Capture Links</h4>
                 <div className="space-y-4">
                   <a href="https://calendly.com/d/dvzs-3zf-cgz" target="_blank" rel="noopener noreferrer" className="flex items-center gap-2 text-primary font-bold hover:underline">
                     <Calendar className="h-4 w-4" /> Book Demo on Calendly
                   </a>
                   <a href="https://forms.gle/bvSMog9pw2Ri4kMt9" target="_blank" rel="noopener noreferrer" className="flex items-center gap-2 text-primary font-bold hover:underline">
                     <FileText className="h-4 w-4" /> Detailed Inquiry Form
                   </a>
                 </div>
               </div>
             </div>

             <div className="bg-white border border-gray-100 shadow-2xl rounded-3xl p-8 md:p-12">
               <h3 className="text-2xl font-bold text-secondary mb-8 text-center">Schedule your demo</h3>
               <div className="space-y-6">
                 <a
                   href="https://calendly.com/d/dvzs-3zf-cgz"
                   target="_blank"
                   rel="noopener noreferrer"
                   className="w-full bg-primary text-white py-5 rounded-xl font-bold text-lg hover:bg-emerald-700 transition-all flex items-center justify-center gap-3 shadow-lg"
                 >
                   <Calendar className="h-6 w-6" /> Book via Calendly
                 </a>
                 <div className="flex items-center gap-4">
                   <div className="h-px bg-gray-200 w-full"></div>
                   <span className="text-gray-400 text-xs font-bold uppercase tracking-widest">or</span>
                   <div className="h-px bg-gray-200 w-full"></div>
                 </div>
                 <a
                   href="https://forms.gle/bvSMog9pw2Ri4kMt9"
                   target="_blank"
                   rel="noopener noreferrer"
                   className="w-full bg-secondary text-white py-5 rounded-xl font-bold text-lg hover:bg-slate-800 transition-all flex items-center justify-center gap-3 shadow-lg"
                 >
                   <FileText className="h-6 w-6" /> Fill Inquiry Form
                 </a>
                 <p className="text-[10px] text-gray-400 text-center uppercase tracking-widest pt-4">
                   All inquiries are manually reviewed to maintain premium service standards.
                 </p>
               </div>
             </div>
           </div>
        </div>
      </section>
    </>
  );
};

export default Demo;
