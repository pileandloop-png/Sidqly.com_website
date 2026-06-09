import { QrCode, ShieldAlert, CheckCircle } from 'lucide-react';
import SEO from '../../components/SEO';
import PageHeader from '../../components/PageHeader';
import CTASection from '../../components/CTASection';

const QRVerification = () => {
  return (
    <>
      <SEO
        title="QR Verification System"
        description="Anti-fraud tools to ensure deliveries reach the intended recipients with full accountability. Modernize your field ops with Sidqly."
        canonical="/modules/qr-verification"
      />

      <PageHeader
        title="QR-Verified Deliveries"
        description="Eliminate distribution errors and prevent fraud with secure, unique QR verification."
        category="Modules / QR Verification"
      />

      <section className="py-24 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
           <div className="flex flex-col md:flex-row gap-12 items-center bg-gray-50 rounded-[3rem] p-12 md:p-20">
             <div className="shrink-0">
               <div className="bg-white p-8 rounded-3xl shadow-xl">
                 <QrCode className="h-40 w-40 text-secondary" />
               </div>
             </div>
             <div className="space-y-8">
               <h2 className="text-3xl font-bold text-secondary">Real-world Accountability</h2>
               <div className="space-y-6">
                 <div className="flex gap-4">
                   <div className="shrink-0 h-6 w-6 rounded-full bg-primary flex items-center justify-center text-white text-[10px] font-bold">1</div>
                   <p className="text-gray-600"><span className="font-bold text-secondary">Unique QR Generation:</span> Every recipient or order gets a unique, secure QR code.</p>
                 </div>
                 <div className="flex gap-4">
                   <div className="shrink-0 h-6 w-6 rounded-full bg-primary flex items-center justify-center text-white text-[10px] font-bold">2</div>
                   <p className="text-gray-600"><span className="font-bold text-secondary">Field Scan:</span> Volunteers scan the code at the point of delivery.</p>
                 </div>
                 <div className="flex gap-4">
                   <div className="shrink-0 h-6 w-6 rounded-full bg-primary flex items-center justify-center text-white text-[10px] font-bold">3</div>
                   <p className="text-gray-600"><span className="font-bold text-secondary">Instant Verification:</span> The system confirms the identity and logs the delivery instantly.</p>
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

export default QRVerification;
