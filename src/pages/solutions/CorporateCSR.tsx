import { Building, FileBarChart, ShieldCheck } from 'lucide-react';
import SEO from '../../components/SEO';
import PageHeader from '../../components/PageHeader';
import CTASection from '../../components/CTASection';

const CorporateCSR = () => {
  return (
    <>
      <SEO
        title="Corporate CSR & Zakat Solutions"
        description="Empower your company's CSR department with audit-ready transparency and professional impact reporting using Sidqly."
        canonical="/solutions/corporate-csr-zakat"
      />

      <PageHeader
        title="CSR Transparency for Corporates"
        description="Bring professional accountability to your corporate social responsibility and Zakat programs."
        category="Solutions / Corporate CSR"
      />

      <section className="py-24 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl mx-auto space-y-12">
            <p className="text-xl text-gray-600 text-center leading-relaxed font-medium">
              Sidqly provides the premium infrastructure that corporate CSR departments need to track their impact and share it with stakeholders confidently.
            </p>
            <div className="grid md:grid-cols-2 gap-8">
              <div className="p-8 rounded-3xl border border-gray-100">
                <FileBarChart className="h-8 w-8 text-primary mb-6" />
                <h4 className="font-bold text-secondary mb-3">Audit-Ready Logs</h4>
                <p className="text-gray-500 text-sm">Every disbursement and delivery is logged with verifiable data for your internal and external audits.</p>
              </div>
              <div className="p-8 rounded-3xl border border-gray-100">
                <ShieldCheck className="h-8 w-8 text-primary mb-6" />
                <h4 className="font-bold text-secondary mb-3">Board Reporting</h4>
                <p className="text-gray-500 text-sm">Generate professional summaries and impact maps to present at your quarterly board meetings.</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      <CTASection />
    </>
  );
};

export default CorporateCSR;
