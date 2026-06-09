import { Moon, Package, ClipboardCheck } from 'lucide-react';
import SEO from '../../components/SEO';
import PageHeader from '../../components/PageHeader';
import CTASection from '../../components/CTASection';

const Ramadan = () => {
  return (
    <>
      <SEO
        title="Ramadan Food Drive Module"
        description="Professional tools for large-scale Ramadan distribution. Track food packs, family lists, and donor updates with Sidqly."
        canonical="/modules/ramadan"
      />

      <PageHeader
        title="Ramadan Food Drive Module"
        description="Streamline your holy month operations with real-time inventory and delivery verification."
        category="Modules / Ramadan"
      />

      <section className="py-24 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
           <div className="text-center mb-16">
             <h2 className="text-3xl font-bold text-secondary mb-4">Precision in the Holy Month</h2>
             <p className="text-gray-500 max-w-2xl mx-auto">Coordinate complex logistics across multiple teams and locations with ease.</p>
           </div>
           <div className="grid md:grid-cols-3 gap-8">
             <div className="p-8 bg-gray-50 rounded-3xl">
               <Package className="h-10 w-10 text-primary mb-6" />
               <h4 className="font-bold text-secondary mb-4">Inventory Tracking</h4>
               <p className="text-gray-500 text-sm">Monitor food parcel contents and stock levels across multiple warehouses.</p>
             </div>
             <div className="p-8 bg-gray-50 rounded-3xl">
               <ClipboardCheck className="h-10 w-10 text-primary mb-6" />
               <h4 className="font-bold text-secondary mb-4">Recipient Management</h4>
               <p className="text-gray-500 text-sm">Maintain verified lists of families and individuals to ensure aid reaches the most needy.</p>
             </div>
             <div className="p-8 bg-gray-50 rounded-3xl">
               <Moon className="h-10 w-10 text-primary mb-6" />
               <h4 className="font-bold text-secondary mb-4">Impact Reports</h4>
               <p className="text-gray-500 text-sm">Generate daily or weekly summaries of distribution progress for your board and donors.</p>
             </div>
           </div>
        </div>
      </section>

      <CTASection />
    </>
  );
};

export default Ramadan;
