import { Users, Smartphone, MapPin } from 'lucide-react';
import SEO from '../../components/SEO';
import PageHeader from '../../components/PageHeader';
import CTASection from '../../components/CTASection';

const Volunteers = () => {
  return (
    <>
      <SEO
        title="Solutions for Volunteers"
        description="Empower your volunteer teams with mobile-first tools to capture proof, verify deliveries, and track their impact safely."
        canonical="/solutions/volunteers"
      />

      <PageHeader
        title="Empowering your field team"
        description="Simple yet powerful tools for volunteers to execute their missions with professional precision."
        category="Solutions / Volunteers"
      />

      <section className="py-24 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <div className="grid md:grid-cols-3 gap-12">
            <div>
              <Smartphone className="h-12 w-12 text-primary mx-auto mb-6" />
              <h4 className="font-bold text-secondary mb-4">Mobile Capture</h4>
              <p className="text-gray-500 text-sm">Easily take and upload proof images directly from the field.</p>
            </div>
            <div>
              <MapPin className="h-12 w-12 text-primary mx-auto mb-6" />
              <h4 className="font-bold text-secondary mb-4">Location Verification</h4>
              <p className="text-gray-500 text-sm">Automatically tag delivery locations for audit-ready records.</p>
            </div>
            <div>
              <Users className="h-12 w-12 text-primary mx-auto mb-6" />
              <h4 className="font-bold text-secondary mb-4">Task Management</h4>
              <p className="text-gray-500 text-sm">See assigned delivery routes and recipient details in real-time.</p>
            </div>
          </div>
        </div>
      </section>

      <CTASection />
    </>
  );
};

export default Volunteers;
