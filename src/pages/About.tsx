import { Heart } from 'lucide-react';
import SEO from '../components/SEO';
import PageHeader from '../components/PageHeader';
import CTASection from '../components/CTASection';

const About = () => {
  return (
    <>
      <SEO
        title="About Us"
        description="Learn about Sidqly's mission to professionalize Islamic charity operations and build radical transparency and trust."
        canonical="/about"
      />

      <PageHeader
        title="Our Mission"
        description="We're building the premium infrastructure for a more transparent and trustworthy charitable future."
        category="About"
      />

      <section className="py-24 bg-white">
        <div className="max-w-4xl mx-auto px-4">
           <div className="prose prose-lg prose-emerald mx-auto">
             <p className="text-xl text-gray-600 leading-relaxed mb-12 font-medium">
               Sidqly was born from a simple observation: modern Islamic charities and mosques are doing incredible work, but their back-office operations are often stuck in the past.
             </p>

             <h2 className="text-3xl font-bold text-secondary mb-8">Professionalizing Compassion</h2>
             <p className="text-gray-600 leading-relaxed mb-8">
               We believe that the management of Zakat, Sadaqah, and Qurbani deserves the same level of professional infrastructure as any top-tier corporate operation. Our goal is to provide that platform.
             </p>

             <div className="bg-emerald-50 p-12 rounded-3xl border border-emerald-100 my-16">
               <Heart className="text-primary h-12 w-12 mb-6" />
               <h3 className="text-2xl font-bold text-secondary mb-4">Trust is Earned</h3>
               <p className="text-gray-600 leading-relaxed italic">
                 "In an age of increasing scrutiny, transparency isn't just a feature—it's a requirement. Sidqly empowers organizations to show their impact with dignity and professional clarity."
               </p>
             </div>
           </div>
        </div>
      </section>

      <CTASection />
    </>
  );
};

export default About;
