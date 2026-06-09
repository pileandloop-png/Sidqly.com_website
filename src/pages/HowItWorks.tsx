import { PlayCircle, ShieldCheck, FileCheck, CheckCircle2 } from 'lucide-react';
import SEO from '../components/SEO';
import PageHeader from '../components/PageHeader';
import CTASection from '../components/CTASection';

const HowItWorks = () => {
  const steps = [
    {
      title: "Set Up Your Workspace",
      desc: "Customize your Sidqly workspace with your organization's mission, modules, and team members.",
      icon: <PlayCircle className="h-10 w-10" />
    },
    {
      title: "Manage Intake & Verification",
      desc: "Centralize all requests and intake data. Manually verify eligibility using professional standards.",
      icon: <FileCheck className="h-10 w-10" />
    },
    {
      title: "Execute & Capture Proof",
      desc: "Teams and volunteers execute the mission and capture dignity-safe proof points in the field.",
      icon: <ShieldCheck className="h-10 w-10" />
    },
    {
      title: "Verify & Report",
      desc: "Administrators manually review proof and generate professional impact reports for donors.",
      icon: <CheckCircle2 className="h-10 w-10" />
    }
  ];

  return (
    <>
      <SEO
        title="How Sidqly Works"
        description="Learn how Sidqly brings professional clarity and donor trust to your Islamic charity operations in four simple steps."
        canonical="/how-it-works"
      />

      <PageHeader
        title="Simplicity meets sophistication"
        description="Sidqly is designed to be easy for teams to use while providing the complex infrastructure required for premium operations."
        category="Process"
      />

      <section className="py-24 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
           <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
             {steps.map((step, i) => (
               <div key={i} className="relative p-8 rounded-3xl bg-gray-50 flex flex-col items-center text-center">
                 <div className="text-primary mb-6">{step.icon}</div>
                 <h3 className="text-xl font-bold text-secondary mb-4">{step.title}</h3>
                 <p className="text-gray-500 text-sm leading-relaxed">{step.desc}</p>
                 {i < steps.length - 1 && (
                   <div className="hidden lg:block absolute top-1/2 -right-4 translate-y-[-50%] text-gray-200">
                     <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                       <path d="M5 12H19M19 12L12 5M19 12L12 19" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                     </svg>
                   </div>
                 )}
               </div>
             ))}
           </div>
        </div>
      </section>

      <CTASection />
    </>
  );
};

export default HowItWorks;
