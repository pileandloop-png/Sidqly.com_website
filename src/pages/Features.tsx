import {
  BarChart3,
  Shield,
  Camera,
  FileCheck,
  Users,
  Layout,
  Globe,
  Cloud,
  Lock,
  ArrowRight
} from 'lucide-react';
import SEO from '../components/SEO';
import PageHeader from '../components/PageHeader';
import CTASection from '../components/CTASection';
import FAQAccordion from '../components/FAQAccordion';
import { Link } from 'react-router-dom';
import RoleMapDiagram from '../components/brand/RoleMapDiagram';
import ProofTrustDiagram from '../components/brand/ProofTrustDiagram';
import BeforeAfterComparison from '../components/brand/BeforeAfterComparison';

const Features = () => {
  const features = [
    {
      title: "Real-time Operations Dashboard",
      desc: "Get a bird's-eye view of all your charitable activities. Track progress, manage requests, and allocate resources instantly.",
      icon: <Layout className="h-8 w-8" />,
    },
    {
      title: "Dignity-First Proof System",
      desc: "Verify every delivery with photos and location data while automatically protecting the privacy of recipients.",
      icon: <Camera className="h-8 w-8" />,
    },
    {
      title: "Zakat Eligibility Management",
      desc: "Organize requester profiles and manage eligibility workflows with manual oversight and professional standards.",
      icon: <FileCheck className="h-8 w-8" />,
    },
    {
      title: "Corporate-Ready Reporting",
      desc: "Generate professional impact reports and donor certificates with a single click. Ready for board meetings and audits.",
      icon: <BarChart3 className="h-8 w-8" />,
    },
    {
      title: "Secure Team Collaboration",
      desc: "Replace chaotic WhatsApp groups with structured team permissions, audit logs, and internal notes.",
      icon: <Users className="h-8 w-8" />,
    },
    {
      title: "QR Verification",
      desc: "Ensure the right items reach the right people. Use secure QR codes to verify delivery and prevent fraud.",
      icon: <Shield className="h-8 w-8" />,
    },
  ];

  const faqs = [
    {
      question: "Is Sidqly a basic donation form?",
      answer: "No. Sidqly is a premium operating platform designed to manage the entire lifecycle of charitable operations, from intake to proof of delivery and reporting."
    },
    {
      question: "How does Sidqly protect recipient dignity?",
      answer: "Our system is designed so that donors never see private recipient identities or exact addresses. Proof of impact is shared only after manual approval."
    }
  ];

  return (
    <>
      <SEO
        title="Premium Platform Features"
        description="Explore the features that make Sidqly the leading operating system for modern Islamic charities and Zakat teams."
        canonical="/features"
      />

      <PageHeader
        title="Professional tools for your mission"
        description="Powerful features designed to bring transparency, efficiency, and trust to your charitable operations."
        category="Features"
      />

      <section className="py-24 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-12">
            {features.map((feature, i) => (
              <div key={i} className="group p-8 rounded-3xl border border-sidqly-mutedBorder hover:border-sidqly-emeraldGreen hover:shadow-xl transition-all duration-300">
                <div className="mb-6 bg-sidqly-softGreen/20 text-sidqly-deepGreen p-4 rounded-2xl w-fit group-hover:bg-sidqly-emeraldGreen group-hover:text-white transition-colors">
                  {feature.icon}
                </div>
                <h3 className="text-xl font-bold text-sidqly-deepNavy mb-4">{feature.title}</h3>
                <p className="text-sidqly-slateText leading-relaxed text-sm">{feature.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="py-24 bg-sidqly-warmIvory/50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl font-bold text-sidqly-deepNavy mb-4">Unified Operations for Every Role</h2>
            <p className="text-sidqly-slateText max-w-2xl mx-auto">Sidqly brings everyone onto the same page, from finance officers to ground volunteers.</p>
          </div>
          <RoleMapDiagram />
        </div>
      </section>

      <section className="py-24 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl font-bold text-sidqly-deepNavy mb-4">The Proof Trust Engine</h2>
            <p className="text-sidqly-slateText max-w-2xl mx-auto">Replace informal chat photos with a structured verification and audit trail.</p>
          </div>
          <ProofTrustDiagram />
        </div>
      </section>

      <section className="py-24 bg-sidqly-deepNavy text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl font-bold mb-4">What Sidqly helps you replace</h2>
            <p className="text-gray-400 max-w-2xl mx-auto">Upgrade from fragmented tools to a professional operating system.</p>
          </div>
          <BeforeAfterComparison
            items={[
              { before: "Scattered WhatsApp updates", after: "One clear operating platform" },
              { before: "Disconnected spreadsheets", after: "Real-time status tracking" },
              { before: "Manual proof folders", after: "Role-based workflows" },
              { before: "Delayed donor receipts", after: "Safer proof approval" },
              { before: "Unclear approval history", after: "Donor-safe updates" },
              { before: "Unsafe sharing of private details", after: "Receipts and certificates" },
              { before: "Slow reporting", after: "Corporate-ready reports" },
              { before: "Repeated donor follow-ups", after: "Dignity-safe charity support" }
            ]}
          />
        </div>
      </section>

      <section className="py-24 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl font-bold text-secondary mb-4 text-center">Frequently Asked Questions</h2>
          </div>
          <FAQAccordion faqs={faqs} />
        </div>
      </section>

      <CTASection />
    </>
  );
};

export default Features;
