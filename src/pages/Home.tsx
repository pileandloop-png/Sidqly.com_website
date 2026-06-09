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
  AlertCircle
} from 'lucide-react';
import SEO from '../components/SEO';
import CTASection from '../components/CTASection';

const Home = () => {
  const painPoints = [
    {
      title: "Scattered WhatsApp Coordination",
      desc: "Information lost in endless group chats and private messages.",
      icon: <MessageSquareOff className="h-6 w-6 text-red-500" />
    },
    {
      title: "Manual Spreadsheets",
      desc: "Prone to errors, outdated data, and version control nightmares.",
      icon: <AlertCircle className="h-6 w-6 text-red-500" />
    },
    {
      title: "Unclear Payment Tracking",
      desc: "Difficulty reconciling donations with operational spending.",
      icon: <AlertCircle className="h-6 w-6 text-red-500" />
    },
    {
      title: "Lost Proof Images",
      desc: "Evidence of impact buried in galleries or deleted by accident.",
      icon: <AlertCircle className="h-6 w-6 text-red-500" />
    }
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
      <section className="relative pt-20 pb-32 overflow-hidden">
        <div className="absolute top-0 left-0 w-full h-full bg-emerald-50/30 -z-10"></div>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-4xl mx-auto mb-20">
            <h1 className="text-5xl md:text-7xl font-bold text-secondary mb-8 leading-[1.1] tracking-tight">
              The <span className="text-primary">Premium</span> Operating Platform for Islamic Charities
            </h1>
            <p className="text-xl text-gray-600 mb-12 leading-relaxed">
              Stop managing operations via scattered WhatsApp groups and manual spreadsheets.
              Bring professional clarity, donor trust, and dignity-safe proof to your organization.
            </p>
            <div className="flex flex-col sm:flex-row items-center justify-center gap-6">
              <Link
                to="/demo"
                className="w-full sm:w-auto bg-primary text-white px-10 py-5 rounded-full font-bold text-lg hover:bg-emerald-700 transition-all shadow-xl hover:shadow-2xl"
              >
                Book a Demo
              </Link>
              <Link
                to="/how-it-works"
                className="w-full sm:w-auto flex items-center justify-center gap-2 text-secondary font-bold text-lg hover:text-primary transition-colors"
              >
                See How Sidqly Works <ArrowRight className="h-5 w-5" />
              </Link>
            </div>
          </div>

          <div className="relative rounded-3xl overflow-hidden shadow-2xl border border-gray-100 bg-white p-4 md:p-8">
            <div className="aspect-video bg-gray-50 rounded-2xl flex items-center justify-center text-gray-400">
               [Premium Platform Dashboard Preview]
            </div>
          </div>
        </div>
      </section>

      {/* Problem Section */}
      <section className="py-24 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-secondary mb-4">Why Organizations Choose Sidqly</h2>
            <p className="text-gray-500 max-w-2xl mx-auto">Traditional coordination methods are breaking donor trust and exhausting teams.</p>
          </div>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {painPoints.map((point, i) => (
              <div key={i} className="p-8 rounded-3xl bg-red-50/30 border border-red-50 hover:border-red-100 transition-all">
                <div className="mb-6">{point.icon}</div>
                <h3 className="text-lg font-bold text-secondary mb-3">{point.title}</h3>
                <p className="text-gray-600 text-sm leading-relaxed">{point.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Solution Section */}
      <section className="py-24 bg-secondary text-white relative overflow-hidden">
        <div className="absolute inset-0 bg-primary/5 -skew-y-6 transform origin-right"></div>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            <div>
              <h2 className="text-3xl md:text-5xl font-bold mb-8 leading-tight">
                Position Your Organization as a Premium Leader
              </h2>
              <div className="space-y-10">
                {solutions.map((sol, i) => (
                  <div key={i} className="flex gap-6">
                    <div className="shrink-0 bg-white/10 p-3 rounded-2xl h-fit">
                      {sol.icon}
                    </div>
                    <div>
                      <h3 className="text-xl font-bold mb-2">{sol.title}</h3>
                      <p className="text-gray-400 leading-relaxed">{sol.desc}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
            <div className="bg-white/5 rounded-3xl p-8 border border-white/10">
              <h4 className="text-primary font-bold uppercase tracking-widest text-xs mb-6">Premium Features</h4>
              <ul className="space-y-4">
                {[
                  "Automated Zakat Certificates",
                  "QR-Code Verification for Deliveries",
                  "Donor-Safe Impact Updates",
                  "Privacy-First Requester Management",
                  "Multi-User Team Permissions",
                  "Audit-Ready Financial Logs"
                ].map((feature, i) => (
                  <li key={i} className="flex items-center gap-3 text-lg">
                    <CheckCircle2 className="h-6 w-6 text-primary shrink-0" />
                    <span>{feature}</span>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* Trust Section */}
      <section className="py-24 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl md:text-4xl font-bold text-secondary mb-16">Designed for Trust & Dignity</h2>
          <div className="grid md:grid-cols-3 gap-12">
            <div className="space-y-4">
              <div className="mx-auto w-16 h-16 bg-emerald-100 rounded-full flex items-center justify-center">
                <Users className="h-8 w-8 text-primary" />
              </div>
              <h3 className="text-xl font-bold">Recipient Privacy</h3>
              <p className="text-gray-500 text-sm leading-relaxed">Donors see proof of impact without exposing the private identity or exact address of those in need.</p>
            </div>
            <div className="space-y-4">
              <div className="mx-auto w-16 h-16 bg-emerald-100 rounded-full flex items-center justify-center">
                <ShieldCheck className="h-8 w-8 text-primary" />
              </div>
              <h3 className="text-xl font-bold">Manual Oversight</h3>
              <p className="text-gray-500 text-sm leading-relaxed">Sidqly empowers humans. Zakat eligibility and proof approval are always manually reviewed by your experts.</p>
            </div>
            <div className="space-y-4">
              <div className="mx-auto w-16 h-16 bg-emerald-100 rounded-full flex items-center justify-center">
                <CheckCircle2 className="h-8 w-8 text-primary" />
              </div>
              <h3 className="text-xl font-bold">Not Just a Form</h3>
              <p className="text-gray-500 text-sm leading-relaxed">Unlike basic donation forms, Sidqly is a full operating system for your entire mission lifecycle.</p>
            </div>
          </div>
        </div>
      </section>

      <CTASection />
    </>
  );
};

export default Home;
