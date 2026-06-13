import React from 'react';
import SEO from '../components/SEO';
import { Link } from 'react-router-dom';
import { BookOpen, CheckCircle, Target, ArrowRight } from 'lucide-react';
import { resources } from '../data/resources';

const Resources: React.FC = () => {
  return (
    <>
      <SEO
        title="Resources & Guides"
        description="Professional operational checklists, strategies, and guides for modern Islamic organizations."
        canonical="/resources"
      />

      <section className="py-20 bg-sidqly-navy text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="text-4xl md:text-5xl font-extrabold mb-6">Operational Resources</h1>
          <p className="text-xl text-gray-400 max-w-3xl mx-auto">
            Professional checklists, strategies, and industry standards for organizations committed to Amanah and operational excellence.
          </p>
        </div>
      </section>

      <section className="py-20 bg-sidqly-ivory">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {resources.map((resource) => {
              const Icon = resource.category === 'Checklist' ? CheckCircle : resource.category === 'Strategy' ? Target : BookOpen;
              return (
                <Link
                  key={resource.slug}
                  to={`/resources/${resource.slug}`}
                  className="bg-white p-8 rounded-[32px] border border-gray-100 shadow-sm hover:shadow-xl hover:-translate-y-1 transition-all group flex flex-col"
                >
                  <div className="w-12 h-12 bg-sidqly-ivory rounded-xl flex items-center justify-center text-sidqly-green-deep mb-6 group-hover:bg-sidqly-soft-green transition-colors">
                    <Icon size={24} />
                  </div>
                  <span className="text-xs font-bold text-sidqly-green-emerald uppercase tracking-wider mb-2">
                    {resource.category}
                  </span>
                  <h3 className="text-xl font-bold text-sidqly-navy mb-4 group-hover:text-sidqly-green-emerald transition-colors">
                    {resource.title}
                  </h3>
                  <p className="text-gray-600 text-sm mb-8 flex-grow">
                    {resource.description}
                  </p>
                  <div className="flex items-center gap-2 text-sidqly-green-deep font-bold text-sm">
                    Read Resource <ArrowRight size={16} className="group-hover:translate-x-1 transition-transform" />
                  </div>
                </Link>
              );
            })}
          </div>
        </div>
      </section>

      <section className="py-20 bg-white border-t border-gray-100">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl font-bold text-sidqly-navy mb-6">Need a specific resource?</h2>
          <p className="text-gray-600 mb-10">
            We are constantly developing new operational standards for the Islamic giving sector. If you have a specific workflow challenge, let us know.
          </p>
          <Link
            to="/contact"
            className="inline-flex items-center gap-2 bg-sidqly-navy text-white px-10 py-4 rounded-2xl font-bold hover:shadow-2xl transition-all"
          >
            Contact our Team
          </Link>
        </div>
      </section>
    </>
  );
};

export default Resources;
