import SEO from '../components/SEO';
import PageHeader from '../components/PageHeader';

const Privacy = () => {
  return (
    <>
      <SEO
        title="Privacy Policy"
        description="Learn how Sidqly protects the privacy and dignity of organizations, donors, and recipients."
        canonical="/privacy"
      />

      <PageHeader
        title="Privacy Policy"
        description="Our commitment to protecting your data and the dignity of those you serve."
        category="Legal"
      />

      <section className="py-24 bg-white">
        <div className="max-w-4xl mx-auto px-4 prose prose-emerald">
           <h2>Protecting Recipient Dignity</h2>
           <p>
             Recipient privacy is a core pillar of Sidqly. Our system is designed to ensure that donors can see proof of impact without ever exposing the private identity, exact address, or sensitive personal data of help requesters.
           </p>

           <h2>Data Collection</h2>
           <p>
             We collect the minimum amount of data necessary to provide our premium operating services. This includes organization details, team member information, and operational logs.
           </p>

           <h2>Manual Oversight</h2>
           <p>
             Sidqly is an operating platform, not an automated data engine. All sensitive actions, including Zakat eligibility and proof approval, are subject to manual review by organization administrators.
           </p>

           <h2>Contact Us</h2>
           <p>
             For any privacy-related inquiries, please contact <a href="mailto:team@sidqly.com">team@sidqly.com</a>.
           </p>
        </div>
      </section>
    </>
  );
};

export default Privacy;
