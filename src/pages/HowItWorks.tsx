import { PlayCircle, ShieldCheck, FileCheck, CheckCircle2 } from 'lucide-react';
import SEO from '../components/SEO';
import PageHeader from '../components/PageHeader';
import CTASection from '../components/CTASection';
import OperatingJourney from '../components/brand/OperatingJourney';
import RoleMapDiagram from '../components/brand/RoleMapDiagram';
import SupportQueryFlow from '../components/brand/SupportQueryFlow';

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
           <OperatingJourney />
        </div>
      </section>

      <section className="py-24 bg-sidqly-warmIvory/50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl font-bold text-sidqly-deepNavy mb-4">Roles & Responsibilities</h2>
            <p className="text-sidqly-slateText max-w-2xl mx-auto">Everyone in your organization has a clear place in the Sidqly workflow.</p>
          </div>
          <RoleMapDiagram />
        </div>
      </section>

      <section className="py-24 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl font-bold text-sidqly-deepNavy mb-4">Onboarding Process</h2>
            <p className="text-sidqly-slateText max-w-2xl mx-auto">From first inquiry to going live, we support your team at every step.</p>
          </div>
          <SupportQueryFlow />
        </div>
      </section>

      <CTASection />
    </>
  );
};

export default HowItWorks;
