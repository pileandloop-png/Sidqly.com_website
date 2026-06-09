import { ShieldCheck, Camera, EyeOff } from 'lucide-react';
import SEO from '../../components/SEO';
import PageHeader from '../../components/PageHeader';
import CTASection from '../../components/CTASection';

const ProofTrust = () => {
  return (
    <>
      <SEO
        title="Proof & Trust System"
        description="The core engine for capturing and sharing dignity-safe verification for every impact point. Build donor trust with Sidqly."
        canonical="/modules/proof-trust"
      />

      <PageHeader
        title="Dignity-Safe Proof System"
        description="Build radical transparency while protecting the honor of those you serve."
        category="Modules / Proof & Trust"
      />

      <section className="py-24 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
           <div className="grid lg:grid-cols-3 gap-12">
             <div className="p-10 rounded-3xl border border-gray-100 hover:shadow-2xl transition-all">
               <Camera className="h-10 w-10 text-primary mb-8" />
               <h4 className="text-xl font-bold text-secondary mb-4">Smart Capture</h4>
               <p className="text-gray-500 text-sm leading-relaxed">Field teams can capture high-quality proof images with automatic location and timestamp metadata.</p>
             </div>
             <div className="p-10 rounded-3xl border border-gray-100 hover:shadow-2xl transition-all">
               <EyeOff className="h-10 w-10 text-primary mb-8" />
               <h4 className="text-xl font-bold text-secondary mb-4">Privacy Protection</h4>
               <p className="text-gray-500 text-sm leading-relaxed">Sidqly is designed so that donors never see private recipient identities or exact addresses.</p>
             </div>
             <div className="p-10 rounded-3xl border border-gray-100 hover:shadow-2xl transition-all">
               <ShieldCheck className="h-10 w-10 text-primary mb-8" />
               <h4 className="text-xl font-bold text-secondary mb-4">Manual Approval</h4>
               <p className="text-gray-500 text-sm leading-relaxed">Proof images are only shared with donors after a manual review by your organization's administrators.</p>
             </div>
           </div>
        </div>
      </section>

      <CTASection />
    </>
  );
};

export default ProofTrust;
