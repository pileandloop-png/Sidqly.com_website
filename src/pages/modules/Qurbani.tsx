import { Beef, ShieldCheck, CheckCircle2 } from 'lucide-react';
import SEO from '../../components/SEO';
import PageHeader from '../../components/PageHeader';
import CTASection from '../../components/CTASection';

const Qurbani = () => {
  return (
    <>
      <SEO
        title="Qurbani Operations Module"
        description="The ultimate operating system for Eid-ul-Adha. Manage animals, slaughtering, and distribution with Sidqly's Qurbani module."
        canonical="/modules/qurbani"
      />

      <PageHeader
        title="Qurbani Operations Module"
        description="Transform your Eid coordination with real-time tracking and donor-safe proof systems."
        category="Modules / Qurbani"
      />

      <section className="py-24 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
           <div className="grid lg:grid-cols-2 gap-20">
             <div className="space-y-12">
               <div>
                 <h2 className="text-3xl font-bold text-secondary mb-6">Built for the busiest days</h2>
                 <p className="text-gray-600 leading-relaxed">
                   Qurbani operations are uniquely high-pressure. Our module is designed to handle thousands of orders while maintaining the transparency your donors expect.
                 </p>
               </div>

               <div className="space-y-8">
                 {[
                   { title: "Animal Lifecycle Tracking", desc: "Track every animal from sourcing to slaughter and distribution." },
                   { title: "Vendor Photo Proof", desc: "Suppliers can upload proof images that are automatically linked to donor orders." },
                   { title: "Distribution Verification", desc: "Confirm each meat pack reaches a verified recipient with QR or photo proof." }
                 ].map((item, i) => (
                   <div key={i} className="flex gap-6">
                     <div className="shrink-0 bg-emerald-50 p-3 rounded-xl h-fit text-primary"><CheckCircle2 /></div>
                     <div>
                       <h4 className="font-bold text-secondary mb-2">{item.title}</h4>
                       <p className="text-gray-500 text-sm leading-relaxed">{item.desc}</p>
                     </div>
                   </div>
                 ))}
               </div>
             </div>
             <div className="bg-secondary rounded-3xl p-12 text-white flex flex-col justify-center">
               <Beef className="h-32 w-32 text-primary mb-8" />
               <h3 className="text-2xl font-bold mb-6">Premium Qurbani Features</h3>
               <ul className="space-y-4 text-gray-400">
                 <li>• Dynamic Order Dashboard</li>
                 <li>• Meat Distribution Logistics</li>
                 <li>• Automated Donor Notifications</li>
                 <li>• Vendor Performance Tracking</li>
                 <li>• Audit-ready Financial Reconciliation</li>
               </ul>
             </div>
           </div>
        </div>
      </section>

      <CTASection />
    </>
  );
};

export default Qurbani;
