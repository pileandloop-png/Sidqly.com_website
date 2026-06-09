import {
  Building2,
  Users,
  Heart,
  Globe,
  Truck,
  UserSquare2,
  Building,
  GraduationCap,
  ArrowRight
} from 'lucide-react';
import SEO from '../components/SEO';
import PageHeader from '../components/PageHeader';
import CTASection from '../components/CTASection';
import { Link } from 'react-router-dom';

const Solutions = () => {
  const solutions = [
    {
      title: "Mosques",
      desc: "Manage community Zakat, food drives, and local sadaqah requests with transparency.",
      href: "/solutions/mosques",
      icon: <Building2 className="h-10 w-10" />
    },
    {
      title: "Islamic Charities",
      desc: "Scale your operations with professional reporting and donor-safe proof systems.",
      href: "/solutions/islamic-charities",
      icon: <Heart className="h-10 w-10" />
    },
    {
      title: "Qurbani Providers",
      desc: "Track orders, vendor fulfillment, and delivery proof in real-time during Eid.",
      href: "/solutions/qurbani-providers",
      icon: <Truck className="h-10 w-10" />
    },
    {
      title: "Ramadan Food Drives",
      desc: "Coordinate distribution across multiple cities and track impact daily.",
      href: "/solutions/ramadan-food-drives",
      icon: <Globe className="h-10 w-10" />
    },
    {
      title: "Zakat Teams",
      desc: "Professional intake, eligibility verification, and disbursement tracking.",
      href: "/solutions/zakat-teams",
      icon: <Users className="h-10 w-10" />
    },
    {
      title: "Corporate CSR",
      desc: "Provide audit-ready transparency for your company's Zakat and charity initiatives.",
      href: "/solutions/corporate-csr-zakat",
      icon: <Building className="h-10 w-10" />
    },
    {
      title: "Vendors & Partners",
      desc: "Manage fulfillment and logistics with professional accountability.",
      href: "/solutions/vendors",
      icon: <UserSquare2 className="h-10 w-10" />
    },
    {
      title: "Volunteers",
      desc: "Empower your team with tools to capture proof and track their impact safely.",
      href: "/solutions/volunteers",
      icon: <GraduationCap className="h-10 w-10" />
    }
  ];

  return (
    <>
      <SEO
        title="Solutions for Every Organization"
        description="Sidqly provides tailored operating solutions for mosques, charities, and corporate CSR teams to manage their mission with trust."
        canonical="/solutions"
      />

      <PageHeader
        title="Tailored solutions for every mission"
        description="Whether you're a small local mosque or a large international charity, Sidqly provides the premium infrastructure you need."
        category="Solutions"
      />

      <section className="py-24 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {solutions.map((sol, i) => (
              <Link
                key={i}
                to={sol.href}
                className="group p-8 rounded-3xl border border-gray-100 hover:border-primary hover:shadow-xl transition-all duration-300 flex flex-col h-full"
              >
                <div className="mb-6 text-primary group-hover:scale-110 transition-transform duration-300">
                  {sol.icon}
                </div>
                <h3 className="text-xl font-bold text-secondary mb-3">{sol.title}</h3>
                <p className="text-gray-500 text-sm leading-relaxed mb-6 flex-grow">{sol.desc}</p>
                <div className="flex items-center text-primary font-bold text-sm">
                  View Solution <ArrowRight className="ml-2 h-4 w-4" />
                </div>
              </Link>
            ))}
          </div>
        </div>
      </section>

      <CTASection />
    </>
  );
};

export default Solutions;
