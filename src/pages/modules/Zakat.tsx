import { Coins, FileCheck, ShieldCheck } from 'lucide-react';
import SEO from '../../components/SEO';
import PageHeader from '../../components/PageHeader';
import CTASection from '../../components/CTASection';

const Zakat = () => {
  return (
    <>
      <SEO
        title="Zakat Management Module"
        description="The professional operating system for Zakat. Handle applications, manual eligibility, and disbursement with Sidqly."
        canonical="/modules/zakat"
      />

      <PageHeader
        title="Zakat Management Module"
        description="Structured tools for organizations to manage Zakat with the highest standards of accountability."
        category="Modules / Zakat"
      />

      <section className="py-24 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
           <div className="grid lg:grid-cols-2 gap-16 items-center">
             <div>
               <h2 className="text-3xl font-bold text-secondary mb-8">Trust is the foundation of Zakat</h2>
               <p className="text-gray-600 mb-8 leading-relaxed">
                 Sidqly provides the professional framework needed to manage Zakat sensitive data. Our platform ensures that every step of the Zakat lifecycle is logged and auditable.
               </p>
               <div className="space-y-6">
                 <div className="flex gap-4 p-6 bg-emerald-50 rounded-2xl">
                   <FileCheck className="h-6 w-6 text-primary shrink-0" />
                   <div>
                     <h4 className="font-bold text-secondary mb-1">Manual Eligibility Verification</h4>
                     <p className="text-gray-500 text-sm">Empower your committee to manually review and document Zakat eligibility for each case.</p>
                   </div>
                 </div>
                 <div className="flex gap-4 p-6 bg-emerald-50 rounded-2xl">
                   <ShieldCheck className="h-6 w-6 text-primary shrink-0" />
                   <div>
                     <h4 className="font-bold text-secondary mb-1">Dignity-First Distribution</h4>
                     <p className="text-gray-500 text-sm">Disburse Zakat with verification methods that protect the identity of recipients.</p>
                   </div>
                 </div>
               </div>
             </div>
             <div className="p-12 bg-gray-50 rounded-3xl text-center">
               <Coins className="h-40 w-40 text-primary/20 mx-auto mb-8" />
               <p className="text-gray-500 italic">"Sidqly is not an automatic religious ruling engine; it is a tool for teams to manage their mission professionally."</p>
             </div>
           </div>
        </div>
      </section>

      <CTASection />
    </>
  );
};

export default Zakat;
