import { Building2, CheckCircle2 } from 'lucide-react';
import SEO from '../../components/SEO';
import PageHeader from '../../components/PageHeader';
import CTASection from '../../components/CTASection';
import FAQAccordion from '../../components/FAQAccordion';

const Mosques = () => {
  const faqs = [
    {
      question: "How does Sidqly help with local community Zakat?",
      answer: "Sidqly provides a structured portal for mosques to intake help requests, verify eligibility manually, and track disbursements with full transparency for the committee."
    },
    {
      question: "Can we use Sidqly for our annual Ramadan food drive?",
      answer: "Yes, Sidqly has a dedicated Ramadan module designed to manage food parcel distribution and donor-safe proof of delivery."
    }
  ];

  return (
    <>
      <SEO
        title="Solutions for Mosques"
        description="Empower your mosque with professional tools to manage community Zakat, local charity, and donor trust with Sidqly."
        canonical="/solutions/mosques"
      />

      <PageHeader
        title="Professional operations for your Mosque"
        description="Bring transparency and efficiency to your community's Zakat, Sadaqah, and social welfare programs."
        category="Solutions / Mosques"
      />

      <section className="py-24 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            <div className="space-y-8">
              <h2 className="text-3xl font-bold text-secondary">The platform for community trust</h2>
              <p className="text-gray-600 leading-relaxed">
                Mosques are the heart of the community. Sidqly provides the premium infrastructure to manage that responsibility with the highest standards of accountability. Stop relying on manual lists and start using an integrated operating platform.
              </p>
              <ul className="space-y-4">
                {[
                  "Manage local Zakat applications",
                  "Coordinate Ramadan food distribution",
                  "Track Sadaqah Jariyah projects",
                  "Provide proof of impact to your congregation",
                  "Securely store community records"
                ].map((item, i) => (
                  <li key={i} className="flex items-center gap-3">
                    <CheckCircle2 className="h-5 w-5 text-primary shrink-0" />
                    <span className="text-gray-700 font-medium">{item}</span>
                  </li>
                ))}
              </ul>
            </div>
            <div className="bg-gray-50 rounded-3xl p-12 flex items-center justify-center">
              <Building2 className="h-48 w-48 text-primary/20" />
            </div>
          </div>
        </div>
      </section>

      <section className="py-24 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-bold text-secondary mb-12 text-center">Frequently Asked Questions</h2>
          <FAQAccordion faqs={faqs} />
        </div>
      </section>

      <CTASection
        title="Upgrade your mosque's operations today"
        description="Join leading mosques using Sidqly to build deeper trust with their donors and community."
      />
    </>
  );
};

export default Mosques;
