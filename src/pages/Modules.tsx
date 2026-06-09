import {
  Beef,
  Moon,
  Coins,
  HeartHandshake,
  FileSearch,
  ShieldCheck,
  QrCode,
  FileBarChart,
  Store,
  Building
} from 'lucide-react';
import SEO from '../components/SEO';
import PageHeader from '../components/PageHeader';
import CTASection from '../components/CTASection';
import { Link } from 'react-router-dom';

const Modules = () => {
  const modules = [
    {
      title: "Qurbani Operations",
      desc: "Manage the entire Eid-ul-Adha lifecycle, from order intake to vendor tracking and proof of distribution.",
      href: "/modules/qurbani",
      icon: <Beef className="h-10 w-10" />
    },
    {
      title: "Ramadan Food Drives",
      desc: "Streamline large-scale food distribution with real-time inventory and delivery verification.",
      href: "/modules/ramadan",
      icon: <Moon className="h-10 w-10" />
    },
    {
      title: "Zakat Management",
      desc: "Handle sensitive Zakat applications with manual oversight and professional eligibility tracking.",
      href: "/modules/zakat",
      icon: <Coins className="h-10 w-10" />
    },
    {
      title: "Sadaqah Projects",
      desc: "Launch and manage specific projects like water wells or school support with dedicated tracking.",
      href: "/modules/sadaqah",
      icon: <HeartHandshake className="h-10 w-10" />
    },
    {
      title: "Charity Requests",
      desc: "A centralized portal for community members to submit and track their requests for help.",
      href: "/modules/charity-requests",
      icon: <FileSearch className="h-10 w-10" />
    },
    {
      title: "Proof & Trust",
      desc: "The core engine for capturing and sharing dignity-safe verification for every impact point.",
      href: "/modules/proof-trust",
      icon: <ShieldCheck className="h-10 w-10" />
    },
    {
      title: "QR Verification",
      desc: "Anti-fraud tools to ensure deliveries reach the intended recipients with full accountability.",
      href: "/modules/qr-verification",
      icon: <QrCode className="h-10 w-10" />
    },
    {
      title: "Premium Reporting",
      desc: "Professional board-ready and donor-ready reports generated in seconds.",
      href: "/modules/reports",
      icon: <FileBarChart className="h-10 w-10" />
    },
    {
      title: "Vendor Fulfillment",
      desc: "Collaborate with grocery stores and suppliers with clear task management and proof.",
      href: "/modules/vendor-fulfillment",
      icon: <Store className="h-10 w-10" />
    },
    {
      title: "Corporate Impact",
      desc: "Tools designed specifically for CSR departments to track and share their social contribution.",
      href: "/modules/corporate-impact",
      icon: <Building className="h-10 w-10" />
    }
  ];

  return (
    <>
      <SEO
        title="Modules & Capabilities"
        description="Discover the powerful modules that power Sidqly, from Zakat management to QR-verified Qurbani operations."
        canonical="/modules"
      />

      <PageHeader
        title="Modular tools for your mission"
        description="Select the specific capabilities your organization needs to run professional and transparent operations."
        category="Modules"
      />

      <section className="py-24 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {modules.map((mod, i) => (
              <Link
                key={i}
                to={mod.href}
                className="group p-8 rounded-3xl bg-gray-50 border border-transparent hover:bg-white hover:border-primary hover:shadow-xl transition-all duration-300"
              >
                <div className="mb-6 text-primary group-hover:scale-110 transition-transform duration-300">
                  {mod.icon}
                </div>
                <h3 className="text-xl font-bold text-secondary mb-3">{mod.title}</h3>
                <p className="text-gray-500 text-sm leading-relaxed mb-6">{mod.desc}</p>
                <div className="text-primary font-bold text-sm">Explore Module →</div>
              </Link>
            ))}
          </div>
        </div>
      </section>

      <CTASection />
    </>
  );
};

export default Modules;
