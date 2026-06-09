import { Store, Truck, CheckCircle2 } from 'lucide-react';
import SEO from '../../components/SEO';
import PageHeader from '../../components/PageHeader';
import CTASection from '../../components/CTASection';

const Vendors = () => {
  return (
    <>
      <SEO
        title="Solutions for Vendors & Partners"
        description="Collaborate with charities effectively. Manage orders, track fulfillment, and provide proof of service with Sidqly."
        canonical="/solutions/vendors"
      />

      <PageHeader
        title="Fulfillment for Partners"
        description="A professional platform for grocery stores, slaughterhouses, and logistics partners to collaborate with charities."
        category="Solutions / Vendors"
      />

      <section className="py-24 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
           <div className="grid md:grid-cols-2 gap-16 items-center">
             <div>
               <h2 className="text-3xl font-bold text-secondary mb-8">Streamline your partnerships</h2>
               <p className="text-gray-600 mb-8 leading-relaxed">
                 Sidqly makes it easy for vendors to receive orders, confirm fulfillment, and provide the necessary proof images that charities require for their donors.
               </p>
               <ul className="space-y-4">
                 <li className="flex items-center gap-3">
                   <CheckCircle2 className="h-5 w-5 text-primary" />
                   <span className="text-gray-700">Receive digital order requests</span>
                 </li>
                 <li className="flex items-center gap-3">
                   <CheckCircle2 className="h-5 w-5 text-primary" />
                   <span className="text-gray-700">Upload proof of slaughter or delivery</span>
                 </li>
                 <li className="flex items-center gap-3">
                   <CheckCircle2 className="h-5 w-5 text-primary" />
                   <span className="text-gray-700">Track pending and completed tasks</span>
                 </li>
               </ul>
             </div>
             <div className="bg-emerald-50 rounded-3xl p-12">
               <Store className="h-48 w-48 text-primary/20 mx-auto" />
             </div>
           </div>
        </div>
      </section>

      <CTASection />
    </>
  );
};

export default Vendors;
