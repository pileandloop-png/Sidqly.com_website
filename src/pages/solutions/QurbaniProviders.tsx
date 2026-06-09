import { Truck, CheckCircle, FileText } from 'lucide-react';
import SEO from '../../components/SEO';
import PageHeader from '../../components/PageHeader';
import CTASection from '../../components/CTASection';

const QurbaniProviders = () => {
  return (
    <>
      <SEO
        title="Solutions for Qurbani Providers"
        description="Streamline your Eid-ul-Adha operations. Manage orders, vendors, and delivery proof with Sidqly's Qurbani module."
        canonical="/solutions/qurbani-providers"
      />

      <PageHeader
        title="Manage Qurbani at scale"
        description="Professional tools to track animal sourcing, slaughtering status, and distribution proof in real-time."
        category="Solutions / Qurbani Providers"
      />

      <section className="py-24 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl mx-auto text-center mb-16">
            <h2 className="text-3xl font-bold text-secondary mb-6">Eid-ul-Adha Operations, Simplified</h2>
            <p className="text-gray-600 leading-relaxed">
              Don't let the peak season chaos compromise your transparency. Sidqly's Qurbani module is built for the high-pressure demands of Eid coordination.
            </p>
          </div>
          <div className="grid md:grid-cols-2 gap-8">
            {[
              { title: "Order Management", desc: "Consolidate all Qurbani orders from various channels into one dashboard." },
              { title: "Vendor Coordination", desc: "Track fulfillment with slaughterhouses and meat processing partners." },
              { title: "Proof of Slaughter", desc: "Capture and tag images for each order to build donor trust." },
              { title: "Distribution Logistics", desc: "Manage delivery routes and verify recipient receipt." }
            ].map((item, i) => (
              <div key={i} className="p-8 rounded-3xl bg-gray-50 flex items-start gap-6">
                <CheckCircle className="h-6 w-6 text-primary shrink-0 mt-1" />
                <div>
                  <h4 className="font-bold text-secondary mb-2">{item.title}</h4>
                  <p className="text-gray-600 text-sm leading-relaxed">{item.desc}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <CTASection />
    </>
  );
};

export default QurbaniProviders;
