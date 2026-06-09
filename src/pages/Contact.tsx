import React from 'react';
import { Mail, MessageSquare, Send, Calendar, FileText } from 'lucide-react';
import SEO from '../components/SEO';
import PageHeader from '../components/PageHeader';

const Contact = () => {
  return (
    <>
      <SEO
        title="Contact Sales"
        description="Get in touch with the Sidqly team to learn how our premium operating platform can transform your Islamic charity operations."
        canonical="/contact"
      />

      <PageHeader
        title="Contact our sales team"
        description="Have questions about Sidqly? We're here to help you find the right solution for your organization."
        category="Contact"
      />

      <section className="py-24 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-20">
            <div>
              <h2 className="text-3xl font-bold text-secondary mb-8">Let's talk about your mission</h2>
              <p className="text-gray-600 mb-12 leading-relaxed">
                Whether you're starting a new initiative or upgrading your existing operations,
                our team is ready to support you with the premium tools your organization deserves.
              </p>

              <div className="space-y-8">
                <div className="flex items-start gap-6">
                  <div className="bg-emerald-50 p-4 rounded-2xl text-primary">
                    <Calendar className="h-6 w-6" />
                  </div>
                  <div>
                    <h4 className="font-bold text-secondary mb-1">Book a Demo</h4>
                    <a href="https://calendly.com/d/dvzs-3zf-cgz" target="_blank" rel="noopener noreferrer" className="text-primary font-bold hover:underline">calendly.com/sidqly-demo</a>
                  </div>
                </div>
                <div className="flex items-start gap-6">
                  <div className="bg-emerald-50 p-4 rounded-2xl text-primary">
                    <FileText className="h-6 w-6" />
                  </div>
                  <div>
                    <h4 className="font-bold text-secondary mb-1">Inquiry Form</h4>
                    <a href="https://forms.gle/bvSMog9pw2Ri4kMt9" target="_blank" rel="noopener noreferrer" className="text-primary font-bold hover:underline">Complete Detailed Inquiry</a>
                  </div>
                </div>
                <div className="flex items-start gap-6">
                  <div className="bg-emerald-50 p-4 rounded-2xl text-primary">
                    <Mail className="h-6 w-6" />
                  </div>
                  <div>
                    <h4 className="font-bold text-secondary mb-1">Email Us</h4>
                    <a href="mailto:team@sidqly.com" className="text-gray-500 hover:text-primary transition-colors">team@sidqly.com</a>
                  </div>
                </div>
              </div>

              <div className="mt-16 p-8 bg-gray-50 rounded-3xl border border-gray-100">
                <h4 className="font-bold text-secondary mb-4">Official Payment Details</h4>
                <div className="space-y-4 text-sm">
                  <div>
                    <span className="text-gray-400 block uppercase text-[10px] font-bold tracking-widest mb-1">Method</span>
                    <span className="font-semibold">Easypaisa Pakistan</span>
                  </div>
                  <div>
                    <span className="text-gray-400 block uppercase text-[10px] font-bold tracking-widest mb-1">IBAN</span>
                    <span className="font-mono">PK19TMFB0000000060685814</span>
                  </div>
                </div>
              </div>
            </div>

            <div className="bg-white border border-gray-100 shadow-2xl rounded-3xl p-8 md:p-12 text-center">
              <h3 className="text-2xl font-bold text-secondary mb-8">Ready to get started?</h3>
              <div className="space-y-4">
                <a
                  href="https://calendly.com/d/dvzs-3zf-cgz"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-full bg-primary text-white py-4 rounded-xl font-bold text-lg hover:bg-emerald-700 transition-all flex items-center justify-center gap-2"
                >
                  <Calendar className="h-5 w-5" /> Book Demo via Calendly
                </a>
                <a
                  href="https://forms.gle/bvSMog9pw2Ri4kMt9"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-full bg-secondary text-white py-4 rounded-xl font-bold text-lg hover:bg-slate-800 transition-all flex items-center justify-center gap-2"
                >
                  <FileText className="h-5 w-5" /> Detailed Inquiry Form
                </a>
                <a
                  href="mailto:team@sidqly.com?subject=Sidqly%20Sales%20Inquiry"
                  className="w-full bg-white border border-gray-200 text-secondary py-4 rounded-xl font-bold text-lg hover:bg-gray-50 transition-all flex items-center justify-center gap-2"
                >
                  <Mail className="h-5 w-5" /> Email Sales Team
                </a>
              </div>
              <p className="text-[10px] text-gray-400 uppercase tracking-widest mt-12">
                All communications are manually reviewed to ensure premium service.
              </p>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default Contact;
