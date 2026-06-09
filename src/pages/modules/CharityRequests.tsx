import { FileSearch, CheckCircle2 } from 'lucide-react';
import SEO from '../../components/SEO';
import PageHeader from '../../components/PageHeader';
import CTASection from '../../components/CTASection';

const CharityRequests = () => {
  return (
    <>
      <SEO
        title="Charity Requests Management"
        description="A professional intake system for charity requests. Manage applications with dignity and structured oversight."
        canonical="/modules/charity-requests"
      />

      <PageHeader
        title="Charity Requests Management"
        description="Replace chaotic manual tracking with a professional intake and review system."
        category="Modules / Charity Requests"
      />

      <section className="py-24 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
           <div className="grid md:grid-cols-2 gap-16">
             <div className="bg-emerald-50 p-10 rounded-3xl">
               <h3 className="text-2xl font-bold text-secondary mb-6">Centralized Intake</h3>
               <p className="text-gray-600 leading-relaxed mb-8">
                 Collect all requests for help through a single, secure portal. Say goodbye to lost paper forms and unread WhatsApp messages.
               </p>
               <div className="space-y-4">
                 <div className="flex items-center gap-3 text-sm font-bold text-secondary">
                   <CheckCircle2 className="text-primary h-5 w-5" /> Structured Data Collection
                 </div>
                 <div className="flex items-center gap-3 text-sm font-bold text-secondary">
                   <CheckCircle2 className="text-primary h-5 w-5" /> Document Attachments
                 </div>
                 <div className="flex items-center gap-3 text-sm font-bold text-secondary">
                   <CheckCircle2 className="text-primary h-5 w-5" /> Secure Storage
                 </div>
               </div>
             </div>
             <div className="bg-gray-900 p-10 rounded-3xl text-white">
               <h3 className="text-2xl font-bold mb-6">Structured Review</h3>
               <p className="text-gray-400 leading-relaxed mb-8">
                 Track every request through its lifecycle: from submission to verification, approval, and fulfillment.
               </p>
               <div className="space-y-4">
                 <div className="flex items-center gap-3 text-sm font-bold">
                   <CheckCircle2 className="text-primary h-5 w-5" /> Internal Notes & Audit Trails
                 </div>
                 <div className="flex items-center gap-3 text-sm font-bold">
                   <CheckCircle2 className="text-primary h-5 w-5" /> Eligibility Status Tracking
                 </div>
                 <div className="flex items-center gap-3 text-sm font-bold">
                   <CheckCircle2 className="text-primary h-5 w-5" /> Team Collaboration
                 </div>
               </div>
             </div>
           </div>
        </div>
      </section>

      <CTASection />
    </>
  );
};

export default CharityRequests;
