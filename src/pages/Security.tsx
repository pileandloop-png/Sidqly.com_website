import SEO from '../components/SEO';
import PageHeader from '../components/PageHeader';

const Security = () => {
  return (
    <>
      <SEO
        title="Security"
        description="Learn about the measures Sidqly takes to ensure the security and integrity of your organization's data."
        canonical="/security"
      />

      <PageHeader
        title="Security at Sidqly"
        description="Protecting the data that powers your mission."
        category="Legal"
      />

      <section className="py-24 bg-white">
        <div className="max-w-4xl mx-auto px-4 prose prose-emerald">
           <h2>Data Protection</h2>
           <p>
             All data transmitted through Sidqly is encrypted using industry-standard protocols. We prioritize the security of your organizational data and the privacy of your beneficiaries.
           </p>

           <h2>Access Control</h2>
           <p>
             Sidqly allows organizations to define granular user permissions. Ensure that only authorized team members have access to sensitive Zakat or recipient information.
           </p>

           <h2>Manual Verification</h2>
           <p>
             Our approach to security includes manual oversight of critical processes. This human-in-the-loop design ensures that high-impact actions are always reviewed by qualified administrators.
           </p>

           <h2>Reporting Security Issues</h2>
           <p>
             If you believe you have found a security vulnerability in our platform, please report it immediately to <a href="mailto:team@sidqly.com">team@sidqly.com</a>.
           </p>
        </div>
      </section>
    </>
  );
};

export default Security;
