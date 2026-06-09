import { Heart, ShieldCheck, BarChart3, Globe, Users } from 'lucide-react';
import SEO from '../../components/SEO';
import PageHeader from '../../components/PageHeader';
import CTASection from '../../components/CTASection';
import FAQAccordion from '../../components/FAQAccordion';

const IslamicCharities = () => {
  const features = [
    {
      title: "Scale Your Mission",
      desc: "Manage multiple projects across different regions with a single, unified operating system.",
      icon: <Globe className="h-8 w-8" />
    },
    {
      title: "Donor-Safe Updates",
      desc: "Share proof of impact without compromising the dignity or privacy of recipients.",
      icon: <ShieldCheck className="h-8 w-8" />
    },
    {
      title: "Impact Reporting",
      desc: "Automatically generate professional reports that satisfy both individual donors and institutional partners.",
      icon: <BarChart3 className="h-8 w-8" />
    }
  ];

  return (
    <>
      <SEO
        title="Solutions for Islamic Charities"
        description="Premium infrastructure for modern Islamic charities. Manage Zakat, Sadaqah, and Qurbani with full transparency and donor trust."
        canonical="/solutions/islamic-charities"
      />

      <PageHeader
        title="Infrastructure for world-class charities"
        description="Sidqly provides the transparency and coordination tools needed by professional Islamic NGOs to operate at scale."
        category="Solutions / Islamic Charities"
      />

      <section className="py-24 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid md:grid-cols-3 gap-12">
            {features.map((f, i) => (
              <div key={i} className="text-center p-8">
                <div className="mx-auto w-16 h-16 bg-emerald-50 text-primary rounded-2xl flex items-center justify-center mb-6">
                  {f.icon}
                </div>
                <h3 className="text-xl font-bold text-secondary mb-4">{f.title}</h3>
                <p className="text-gray-600 leading-relaxed text-sm">{f.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <CTASection />
    </>
  );
};

export default IslamicCharities;
