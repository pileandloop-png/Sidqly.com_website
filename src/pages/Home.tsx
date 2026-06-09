import { Link } from 'react-router-dom';
import {
  ArrowRight,
  ShieldCheck,
  Users,
  Zap,
  FileText,
  CheckCircle2,
  LayoutDashboard,
  MessageSquareOff,
  AlertCircle,
  Mail,
  Calendar,
  FileSearch
} from 'lucide-react';
import SEO from '../components/SEO';
import CTASection from '../components/CTASection';
import { brand } from '../config/brand';
import OperatingJourney from '../components/brand/OperatingJourney';
import BeforeAfterComparison from '../components/brand/BeforeAfterComparison';
import TrustPillarsInfographic from '../components/brand/TrustPillarsInfographic';
import { DashboardPreviewCard } from '../components/brand/VisualMockups';

const Home = () => {
  const beforeAfterItems = [
    { before: "Scattered WhatsApp messages everywhere", after: "One clear operating platform" },
    { before: "Spreadsheets hard to reconcile", after: "Real-time workflow status" },
    { before: "Proof images lost in chat history", after: "Manual payment and proof review" },
    { before: "Donor updates delayed or forgotten", after: "Donor-safe updates and receipts" },
    { before: "Private information at risk of exposure", after: "Dignity-safe sharing" }
  ];

  const solutions = [
    {
      title: "One Clear Operating Platform",
      desc: "Consolidate your entire charity workflow into a single, premium interface.",
      icon: <LayoutDashboard className="h-10 w-10 text-primary" />
    },
    {
      title: "Dignity-Safe Proof",
      desc: "Collect and share verification photos while protecting recipient privacy.",
      icon: <ShieldCheck className="h-10 w-10 text-primary" />
    },
    {
      title: "Real-time Operational Clarity",
      desc: "Instantly see the status of every Zakat request, Qurbani order, or food drive.",
      icon: <Zap className="h-10 w-10 text-primary" />
    },
    {
      title: "Corporate-Ready Reporting",
      desc: "Generate professional audit-ready reports and donor impact certificates.",
      icon: <FileText className="h-10 w-10 text-primary" />
    }
  ];

  return (
    <>
      <SEO
        title="Premium Islamic Operating Platform"
        description="Sidqly helps mosques and charities manage Zakat, Qurbani, and Sadaqah with real-time clarity and donor-safe updates."
        canonical="/"
      />

      {/* Hero Section */}
      <section className="relative pt-32 pb-32 overflow-hidden bg-soft-gradient">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-4xl mx-auto mb-20">
            <h1 className="text-5xl md:text-7xl font-bold text-sidqly-deepNavy mb-8 leading-[1.1] tracking-tight">
              Verified giving. <span className="text-sidqly-emeraldGreen">Protected dignity.</span> Clear impact.
            </h1>
            <p className="text-xl text-sidqly-slateText mb-12 leading-relaxed">
              Stop managing operations via scattered WhatsApp groups and manual spreadsheets.
              The operating platform for <span className="text-sidqly-deepGreen font-semibold italic">amanah-driven</span> organizations.
            </p>
            <div className="flex flex-col sm:flex-row items-center justify-center gap-6">
              <Link
                to="/demo"
                className="w-full sm:w-auto bg-sidqly-deepGreen text-white px-10 py-5 rounded-full font-bold text-lg hover:bg-sidqly-emeraldGreen transition-all shadow-xl hover:shadow-2xl"
              >
                Book a Demo
              </Link>
              <Link
                to="/how-it-works"
                className="w-full sm:w-auto flex items-center justify-center gap-2 text-sidqly-deepNavy font-bold text-lg hover:text-sidqly-emeraldGreen transition-colors"
              >
                See How Sidqly Works <ArrowRight className="h-5 w-5" />
              </Link>
            </div>
          </div>

          <div className="flex justify-center max-w-5xl mx-auto">
            <DashboardPreviewCard />
          </div>
        </div>
      </section>

      {/* Comparison Section */}
      <section className="py-24 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-sidqly-deepNavy mb-4">Moving from Chaos to Clarity</h2>
            <p className="text-sidqly-slateText max-w-2xl mx-auto">Traditional coordination methods are breaking donor trust and exhausting teams. Sidqly provides a professional alternative.</p>
          </div>
          <BeforeAfterComparison items={beforeAfterItems} />
        </div>
      </section>

      {/* Operating Journey */}
      <section className="py-24 bg-sidqly-warmIvory/50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <OperatingJourney />
        </div>
      </section>

      {/* Trust Section */}
      <section className="py-24 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
           <TrustPillarsInfographic />
        </div>
      </section>

      {/* Best Fit Section */}
      <section className="py-24 bg-sidqly-deepNavy text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            <div>
              <h2 className="text-3xl md:text-4xl font-bold mb-6">Best fit for Sidqly</h2>
              <p className="text-gray-400 mb-8">Sidqly is a strong fit for organizations that value operational integrity over simple automation.</p>
              <ul className="space-y-4">
                {[
                  "Manage Islamic giving and charity requests",
                  "Run Qurbani or Ramadan campaigns",
                  "Handle Zakat or Sadaqah funds separately",
                  "Work with multiple vendors or volunteers",
                  "Need donor proof and professional receipts",
                  "Serve corporate sponsors with board reports"
                ].map((item, i) => (
                  <li key={i} className="flex items-center gap-3">
                    <CheckCircle2 className="h-5 w-5 text-sidqly-emeraldGreen shrink-0" />
                    <span className="text-gray-300">{item}</span>
                  </li>
                ))}
              </ul>
            </div>
            <div className="bg-white/5 p-8 rounded-3xl border border-white/10">
              <h3 className="text-xl font-bold mb-6">What you get instead</h3>
              <div className="space-y-6">
                {[
                  { title: "One Operating Platform", desc: "No more disconnected tools." },
                  { title: "Role-Based Workflows", desc: "Defined tasks for team and vendors." },
                  { title: "Dignity-Safe Updates", desc: "Share impact without exposing data." },
                  { title: "Audit-Ready Logs", desc: "Full history of every decision." }
                ].map((item, i) => (
                  <div key={i} className="flex gap-4">
                    <div className="w-1.5 h-1.5 rounded-full bg-sidqly-goldAccent mt-2 shrink-0"></div>
                    <div>
                      <div className="font-bold text-white">{item.title}</div>
                      <div className="text-sm text-gray-400">{item.desc}</div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Start Section */}
      <section className="py-24 bg-white text-center">
        <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl md:text-4xl font-bold text-sidqly-deepNavy mb-6">Not sure where to start?</h2>
          <p className="text-sidqly-slateText mb-12">Our team is ready to help you map your existing workflows to a more secure, dignified system.</p>
          <div className="grid sm:grid-cols-3 gap-6">
            <a href={brand.calendlyUrl} target="_blank" rel="noopener noreferrer" className="p-6 rounded-2xl bg-sidqly-softGreen/10 border border-sidqly-softGreen/30 hover:shadow-md transition-all group">
              <Calendar className="w-8 h-8 text-sidqly-deepGreen mx-auto mb-4 group-hover:scale-110 transition-transform" />
              <div className="font-bold text-sidqly-deepGreen">Book Demo</div>
            </a>
            <a href={brand.inquiryFormUrl} target="_blank" rel="noopener noreferrer" className="p-6 rounded-2xl bg-sidqly-goldAccent/10 border border-sidqly-goldAccent/30 hover:shadow-md transition-all group">
              <FileSearch className="w-8 h-8 text-sidqly-goldAccent mx-auto mb-4 group-hover:scale-110 transition-transform" />
              <div className="font-bold text-sidqly-deepNavy">Fill Inquiry</div>
            </a>
            <a href={`mailto:${brand.email}`} className="p-6 rounded-2xl bg-sidqly-deepNavy/5 border border-sidqly-deepNavy/10 hover:shadow-md transition-all group">
              <Mail className="w-8 h-8 text-sidqly-deepNavy mx-auto mb-4 group-hover:scale-110 transition-transform" />
              <div className="font-bold text-sidqly-deepNavy">Email Sales</div>
            </a>
          </div>
        </div>
      </section>

      <CTASection />
    </>
  );
};

export default Home;
