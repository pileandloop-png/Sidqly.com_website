import {
  Users,
  Building2,
  Store,
  Building,
  UserSquare2,
  BookOpen,
  LifeBuoy
} from 'lucide-react';
import { Link } from 'react-router-dom';
import SEO from '../components/SEO';
import PageHeader from '../components/PageHeader';

const Help = () => {
  const categories = [
    { title: "For Donors", href: "/help/donors", icon: <Users className="h-6 w-6"/> },
    { title: "For Organizations", href: "/help/organizations", icon: <Building2 className="h-6 w-6"/> },
    { title: "For Vendors", href: "/help/vendors", icon: <Store className="h-6 w-6"/> },
    { title: "For Corporate Sponsors", href: "/help/corporates", icon: <Building className="h-6 w-6"/> },
    { title: "For Charity Requesters", href: "/help/requesters", icon: <UserSquare2 className="h-6 w-6"/> },
  ];

  return (
    <>
      <SEO
        title="Help Center"
        description="Access guides, articles, and support resources for donors, organizations, and partners using Sidqly."
        canonical="/help"
      />

      <PageHeader
        title="How can we help you?"
        description="Explore our comprehensive guides and resources to get the most out of the Sidqly platform."
        category="Help Center"
      />

      <section className="py-24 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
           <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 mb-20">
             {categories.map((cat, i) => (
               <Link key={i} to={cat.href} className="p-8 rounded-3xl border border-gray-100 hover:border-primary hover:shadow-xl transition-all group">
                 <div className="bg-emerald-50 text-primary p-4 rounded-2xl w-fit mb-6 group-hover:bg-primary group-hover:text-white transition-colors">
                   {cat.icon}
                 </div>
                 <h3 className="text-xl font-bold text-secondary mb-2">{cat.title}</h3>
                 <p className="text-gray-500 text-sm">View help articles and guides specifically for your role.</p>
               </Link>
             ))}
           </div>

           <div className="bg-secondary rounded-[3rem] p-12 text-white">
             <div className="flex flex-col md:flex-row gap-12 items-center">
               <div className="bg-white/10 p-6 rounded-3xl">
                 <LifeBuoy className="h-16 w-16 text-primary" />
               </div>
               <div>
                 <h2 className="text-3xl font-bold mb-4">Still need assistance?</h2>
                 <p className="text-gray-400 mb-8 max-w-xl">Our team is available to help organizations with onboarding, technical support, and manual payment verification.</p>
                 <a href="mailto:team@sidqly.com" className="inline-block bg-primary text-white px-8 py-4 rounded-full font-bold hover:bg-emerald-700 transition-all">
                   Contact Support
                 </a>
               </div>
             </div>
           </div>
        </div>
      </section>
    </>
  );
};

export default Help;
