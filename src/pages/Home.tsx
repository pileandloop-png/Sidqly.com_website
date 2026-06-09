import React from 'react';
import { Layout } from '../layouts/Layout';
import { Button } from '../components/ui/Button';
import { Link } from 'react-router-dom';
import { Shield, Zap, CheckCircle2, Lock } from 'lucide-react';
import { LeadActions } from '../components/forms/LeadActions';
import { SEO } from '../seo/SEO';
import { organizationSchema, softwareApplicationSchema } from '../seo/schemaData';

const Home: React.FC = () => {
  return (
    <Layout>
      <SEO
        title="Dignity-Safe Giving Operations"
        description="Premium Islamic operating platform for mosques and charities. Manage donations, proof, and donor updates with trust."
        schema={[organizationSchema, softwareApplicationSchema]}
      />
      {/* Hero Section */}
      <section className="bg-sidqly-secondary py-20 md:py-32">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="text-4xl md:text-6xl font-extrabold text-gray-900 tracking-tight mb-6">
            Dignity-Safe Giving <br /><span className="text-sidqly-primary">Operations for Trusted Teams</span>
          </h1>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto mb-10 leading-relaxed">
            Move beyond scattered WhatsApp updates and spreadsheets. Sidqly provides a <strong>secure</strong>, <strong>organized</strong>, and <strong>premium</strong> platform for mosques and charities to manage donations, proof, and donor updates with absolute <strong>trust</strong>.
          </p>
          <div className="flex flex-col sm:flex-row justify-center gap-4">
            <Link to="/book-demo">
              <Button size="lg" className="w-full sm:w-auto">Book a Demo</Button>
            </Link>
            <Link to="/start-pilot">
              <Button size="lg" variant="outline" className="w-full sm:w-auto">Start a Pilot</Button>
            </Link>
          </div>
        </div>
      </section>

      {/* Trust & Features */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl font-bold text-gray-900">Built for Professional Giving Teams</h2>
            <p className="mt-4 text-gray-600">Sidqly ensures your organization is <strong>donor-ready</strong> and <strong>board-ready</strong>.</p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-12">
            {[
              {
                icon: <Shield className="h-8 w-8 text-sidqly-primary" />,
                title: "Secure & Trusted",
                desc: "Every transaction and proof is encrypted and organized for audit-ready reporting."
              },
              {
                icon: <Zap className="h-8 w-8 text-sidqly-primary" />,
                title: "Real-time Workflows",
                desc: "Fast processing of donations and manual payment reviews with clear team-friendly task lists."
              },
              {
                icon: <Lock className="h-8 w-8 text-sidqly-primary" />,
                title: "Dignity-Safe",
                desc: "Professional reporting that protects recipient dignity while providing donors with proof of delivery."
              }
            ].map((feature, i) => (
              <div key={i} className="flex flex-col items-center text-center p-6 rounded-xl hover:bg-gray-50 transition-colors border border-transparent hover:border-gray-100">
                <div className="mb-4 p-3 bg-sidqly-secondary rounded-full">{feature.icon}</div>
                <h3 className="text-xl font-bold text-gray-900 mb-2">{feature.title}</h3>
                <p className="text-gray-600 leading-relaxed">{feature.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Core Modules Preview */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col md:flex-row items-center gap-16">
            <div className="flex-1 space-y-6">
              <h2 className="text-3xl md:text-4xl font-bold text-gray-900 leading-tight">
                Clear workflows for every giving campaign.
              </h2>
              <p className="text-lg text-gray-600">
                Whether it's Zakat, Qurbani, Ramadan drives, or ongoing Sadaqah, Sidqly brings order to the chaos.
              </p>
              <ul className="space-y-4">
                {[
                  "Manual payment review for all bank/e-wallet transfers",
                  "QR-verified proof trust engine",
                  "Staff and volunteer task management",
                  "Donor-ready reporting and certificates"
                ].map((item, i) => (
                  <li key={i} className="flex items-center space-x-3 text-gray-700">
                    <CheckCircle2 className="h-5 w-5 text-sidqly-primary shrink-0" />
                    <span className="font-medium">{item}</span>
                  </li>
                ))}
              </ul>
              <div className="pt-4">
                <Link to="/features">
                  <Button variant="outline">Explore All Features</Button>
                </Link>
              </div>
            </div>
            <div className="flex-1 w-full aspect-video bg-white rounded-2xl shadow-xl border border-gray-200 flex items-center justify-center p-8 overflow-hidden">
               <div className="space-y-4 w-full">
                  <div className="h-4 bg-sidqly-secondary rounded w-3/4 animate-pulse"></div>
                  <div className="h-4 bg-gray-100 rounded w-full"></div>
                  <div className="h-4 bg-gray-100 rounded w-5/6"></div>
                  <div className="h-20 bg-sidqly-secondary/30 rounded w-full flex items-center justify-center border border-dashed border-sidqly-primary/30">
                    <span className="text-sidqly-primary font-bold text-sm">Dashboard Preview</span>
                  </div>
                  <div className="grid grid-cols-3 gap-4">
                    <div className="h-16 bg-gray-50 rounded"></div>
                    <div className="h-16 bg-gray-50 rounded"></div>
                    <div className="h-16 bg-gray-50 rounded"></div>
                  </div>
               </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-white relative overflow-hidden">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-5xl font-bold text-gray-900 leading-tight">Ready to simplify your giving operations?</h2>
            <p className="mt-4 text-xl text-gray-600 max-w-2xl mx-auto">
              Join professional organizations that trust Sidqly for their most critical workflows.
            </p>
          </div>
          <LeadActions />
        </div>
        <div className="absolute top-0 right-0 -translate-y-1/2 translate-x-1/3 h-96 w-96 rounded-full bg-sidqly-secondary/50"></div>
        <div className="absolute bottom-0 left-0 translate-y-1/2 -translate-x-1/3 h-96 w-96 rounded-full bg-sidqly-secondary/50"></div>
      </section>
    </Layout>
  );
};

export default Home;
