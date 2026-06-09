import { HeartHandshake, CheckCircle2 } from 'lucide-react';
import SEO from '../../components/SEO';
import PageHeader from '../../components/PageHeader';
import CTASection from '../../components/CTASection';

const Sadaqah = () => {
  return (
    <>
      <SEO
        title="Sadaqah Projects Module"
        description="Manage your ongoing Sadaqah initiatives with transparency. Track projects from funding to completion with Sidqly."
        canonical="/modules/sadaqah"
      />

      <PageHeader
        title="Sadaqah Projects Module"
        description="Powerful tools to manage water wells, school support, and community welfare initiatives."
        category="Modules / Sadaqah"
      />

      <section className="py-24 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
           <div className="max-w-3xl mx-auto">
             <h2 className="text-3xl font-bold text-secondary mb-12 text-center">Complete Project Lifecycle</h2>
             <div className="space-y-4">
               {[
                 "Project intake and planning",
                 "Resource allocation and tracking",
                 "Field verification and photo proof",
                 "Donor-safe impact certificates",
                 "Final project reporting"
               ].map((item, i) => (
                 <div key={i} className="flex items-center gap-4 p-5 border border-gray-100 rounded-2xl hover:border-primary transition-colors">
                   <CheckCircle2 className="text-primary" />
                   <span className="font-semibold text-secondary">{item}</span>
                 </div>
               ))}
             </div>
           </div>
        </div>
      </section>

      <CTASection />
    </>
  );
};

export default Sadaqah;
