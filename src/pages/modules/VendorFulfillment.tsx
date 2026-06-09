import { Store, ListChecks, MessageSquare } from 'lucide-react';
import SEO from '../../components/SEO';
import PageHeader from '../../components/PageHeader';
import CTASection from '../../components/CTASection';

const VendorFulfillment = () => {
  return (
    <>
      <SEO
        title="Vendor Fulfillment Module"
        description="Collaborate with grocery stores and suppliers with clear task management and proof. Professionalize your supply chain with Sidqly."
        canonical="/modules/vendor-fulfillment"
      />

      <PageHeader
        title="Vendor Fulfillment Module"
        description="Connect your operations directly to your supply chain partners for seamless fulfillment."
        category="Modules / Vendor Fulfillment"
      />

      <section className="py-24 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
           <div className="grid lg:grid-cols-3 gap-12">
             <div className="p-8 bg-gray-50 rounded-3xl">
               <ListChecks className="h-10 w-10 text-primary mb-6" />
               <h4 className="font-bold text-secondary mb-4">Task Allocation</h4>
               <p className="text-gray-500 text-sm">Assign specific orders or delivery tasks to your external vendors.</p>
             </div>
             <div className="p-8 bg-gray-50 rounded-3xl">
               <Store className="h-10 w-10 text-primary mb-6" />
               <h4 className="font-bold text-secondary mb-4">Partner Portal</h4>
               <p className="text-gray-500 text-sm">Vendors get their own view to see pending orders and update fulfillment status.</p>
             </div>
             <div className="p-8 bg-gray-50 rounded-3xl">
               <MessageSquare className="h-10 w-10 text-primary mb-6" />
               <h4 className="font-bold text-secondary mb-4">Live Coordination</h4>
               <p className="text-gray-500 text-sm">Keep all communications within the platform to avoid the chaos of external chats.</p>
             </div>
           </div>
        </div>
      </section>

      <CTASection />
    </>
  );
};

export default VendorFulfillment;
