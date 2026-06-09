import SEO from '../components/SEO';
import PageHeader from '../components/PageHeader';

const Terms = () => {
  return (
    <>
      <SEO
        title="Terms of Service"
        description="The terms and conditions for using Sidqly's premium operating platform."
        canonical="/terms"
      />

      <PageHeader
        title="Terms of Service"
        description="Guidelines and agreements for using the Sidqly platform."
        category="Legal"
      />

      <section className="py-24 bg-white">
        <div className="max-w-4xl mx-auto px-4 prose prose-emerald">
           <h2>1. Premium Platform Use</h2>
           <p>
             Sidqly is provided as a premium operating platform for Islamic charities, mosques, and Zakat teams. Use of the platform is subject to active subscription and compliance with these terms.
           </p>

           <h2>2. Manual Review & Responsibility</h2>
           <p>
             Sidqly is a tool for teams to manage their mission. Organizations are responsible for their own manual review of Zakat eligibility, proof approval, and religious compliance. Sidqly does not provide automatic religious rulings.
           </p>

           <h2>3. Payments & Onboarding</h2>
           <p>
             Onboarding and subscription payments are made via official channels (Easypaisa Pakistan) and are manually reviewed. Access to the platform is granted only after payment verification.
           </p>

           <h2>4. Acceptable Use</h2>
           <p>
             Users must not use the platform for any fraudulent or illegal activity. We reserve the right to terminate access for any organization that violates our community standards or mission of trust and dignity.
           </p>
        </div>
      </section>
    </>
  );
};

export default Terms;
