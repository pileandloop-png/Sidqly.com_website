import { FileBarChart, PieChart, Download } from 'lucide-react';
import SEO from '../../components/SEO';
import PageHeader from '../../components/PageHeader';
import CTASection from '../../components/CTASection';

const Reports = () => {
  return (
    <>
      <SEO
        title="Premium Reporting & Analytics"
        description="Generate professional board-ready and donor-ready reports in seconds. Track your organization's impact with Sidqly."
        canonical="/modules/reports"
      />

      <PageHeader
        title="Premium Impact Reporting"
        description="Turn your operational data into beautiful, professional reports that build trust and demonstrate impact."
        category="Modules / Reports"
      />

      <section className="py-24 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
           <div className="grid lg:grid-cols-2 gap-20">
             <div>
               <h2 className="text-3xl font-bold text-secondary mb-8">Data-driven transparency</h2>
               <p className="text-gray-600 mb-12 leading-relaxed">
                 Sidqly takes the hard work out of reporting. No more spending days compiling spreadsheets. Generate the reports you need with a single click.
               </p>
               <div className="grid grid-cols-2 gap-8">
                 <div className="space-y-4">
                   <h4 className="font-bold text-secondary flex items-center gap-2"><PieChart className="text-primary h-5 w-5" /> Analytics</h4>
                   <p className="text-gray-500 text-xs">Visualize your distribution data and donor contributions.</p>
                 </div>
                 <div className="space-y-4">
                   <h4 className="font-bold text-secondary flex items-center gap-2"><Download className="text-primary h-5 w-5" /> Export</h4>
                   <p className="text-gray-500 text-xs">Download PDF reports for board meetings and donors.</p>
                 </div>
               </div>
             </div>
             <div className="bg-secondary rounded-3xl p-10 text-white relative overflow-hidden">
               <div className="absolute top-0 right-0 w-full h-full bg-primary/10 -rotate-12 translate-x-1/2"></div>
               <h3 className="text-2xl font-bold mb-8 relative z-10">Board-Ready Output</h3>
               <div className="space-y-6 relative z-10">
                 <div className="h-4 bg-white/10 rounded w-3/4"></div>
                 <div className="h-4 bg-white/10 rounded w-1/2"></div>
                 <div className="h-24 bg-white/10 rounded w-full"></div>
                 <div className="grid grid-cols-3 gap-4">
                   <div className="h-16 bg-primary/20 rounded"></div>
                   <div className="h-16 bg-primary/20 rounded"></div>
                   <div className="h-16 bg-primary/20 rounded"></div>
                 </div>
               </div>
             </div>
           </div>
        </div>
      </section>

      <CTASection />
    </>
  );
};

export default Reports;
