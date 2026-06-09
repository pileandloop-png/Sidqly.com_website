import { Coins, ShieldCheck, FileCheck, Users } from 'lucide-react';
import SEO from '../../components/SEO';
import PageHeader from '../../components/PageHeader';
import CTASection from '../../components/CTASection';

const ZakatTeams = () => {
  return (
    <>
      <SEO
        title="Solutions for Zakat Teams"
        description="A specialized operating system for Zakat management. Handle intake, eligibility, and disbursement with professional standards."
        canonical="/solutions/zakat-teams"
      />

      <PageHeader
        title="Professional Zakat Management"
        description="Structured tools for Zakat teams to manage the entire lifecycle of disbursement with trust and dignity."
        category="Solutions / Zakat Teams"
      />

      <section className="py-24 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
           <div className="bg-secondary rounded-3xl p-12 text-white">
             <h2 className="text-3xl font-bold mb-12 text-center">Built for Accountability</h2>
             <div className="grid md:grid-cols-2 gap-12">
               <div className="space-y-6">
                 <h4 className="text-primary font-bold uppercase tracking-widest text-xs">The Intake Process</h4>
                 <p className="text-gray-400">Standardize how your organization receives help requests. Eliminate paper forms and scattered messages.</p>
               </div>
               <div className="space-y-6">
                 <h4 className="text-primary font-bold uppercase tracking-widest text-xs">Manual Eligibility</h4>
                 <p className="text-gray-400">Sidqly empowers your scholars and experts to manually review and approve Zakat eligibility cases.</p>
               </div>
             </div>
           </div>
        </div>
      </section>

      <CTASection />
    </>
  );
};

export default ZakatTeams;
