import { Moon, Package, Users, MapPin } from 'lucide-react';
import SEO from '../../components/SEO';
import PageHeader from '../../components/PageHeader';
import CTASection from '../../components/CTASection';

const RamadanDrives = () => {
  return (
    <>
      <SEO
        title="Solutions for Ramadan Food Drives"
        description="Coordinate large-scale Ramadan distribution. Track food packs, iftar drives, and family support with full transparency."
        canonical="/solutions/ramadan-food-drives"
      />

      <PageHeader
        title="Professional Ramadan coordination"
        description="Powerful tools to manage food parcel distribution, family lists, and donor updates during the holy month."
        category="Solutions / Ramadan Food Drives"
      />

      <section className="py-24 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
           <div className="grid lg:grid-cols-4 gap-8">
             {[
               { icon: <Package className="h-8 w-8"/>, title: "Inventory", desc: "Track food pack contents and quantities." },
               { icon: <Users className="h-8 w-8"/>, title: "Families", desc: "Manage verified recipient lists." },
               { icon: <MapPin className="h-8 w-8"/>, title: "Locations", desc: "Coordinate multiple distribution centers." },
               { icon: <Moon className="h-8 w-8"/>, title: "Real-time", desc: "Daily progress updates for your team." }
             ].map((item, i) => (
               <div key={i} className="text-center">
                 <div className="mx-auto w-16 h-16 bg-emerald-50 text-primary rounded-full flex items-center justify-center mb-6">{item.icon}</div>
                 <h4 className="font-bold text-secondary mb-2">{item.title}</h4>
                 <p className="text-gray-500 text-xs leading-relaxed">{item.desc}</p>
               </div>
             ))}
           </div>
        </div>
      </section>

      <CTASection />
    </>
  );
};

export default RamadanDrives;
