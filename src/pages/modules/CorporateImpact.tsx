import { Building, Globe, ShieldCheck } from 'lucide-react';
import SEO from '../../components/SEO';
import PageHeader from '../../components/PageHeader';
import CTASection from '../../components/CTASection';

const CorporateImpact = () => {
  return (
    <>
      <SEO
        title="Corporate Impact Module"
        description="Specifically designed for CSR departments to track and share their social contribution with audit-ready transparency. Sidqly for business."
        canonical="/modules/corporate-impact"
      />

      <PageHeader
        title="Corporate Impact Module"
        description="Professional tools for CSR departments to manage, track, and report on their charitable initiatives."
        category="Modules / Corporate Impact"
      />

      <section className="py-24 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
           <div className="bg-secondary p-12 md:p-20 rounded-[3rem] text-white">
             <div className="max-w-3xl mx-auto text-center mb-16">
               <h2 className="text-3xl font-bold mb-6">Empower Your CSR Strategy</h2>
               <p className="text-gray-400">Sidqly provides the premium infrastructure required by modern businesses to maintain the highest standards of social accountability.</p>
             </div>
             <div className="grid md:grid-cols-2 gap-12">
               <div className="flex gap-6">
                 <Building className="h-10 w-10 text-primary shrink-0" />
                 <div>
                   <h4 className="font-bold mb-2">Company-wide Transparency</h4>
                   <p className="text-gray-400 text-sm">Provide your board and shareholders with verifiable data on every rupee spent and every life touched.</p>
                 </div>
               </div>
               <div className="flex gap-6">
                 <Globe className="h-10 w-10 text-primary shrink-0" />
                 <div>
                   <h4 className="font-bold mb-2">Social Contribution Mapping</h4>
                   <p className="text-gray-400 text-sm">Visualize your organization's impact across different geographic regions and project types.</p>
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

export default CorporateImpact;
