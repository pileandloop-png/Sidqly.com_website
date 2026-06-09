import React from 'react';
import SEO from '../components/SEO';
import PageHeader from '../components/PageHeader';
import FAQAccordion from '../components/FAQAccordion';
import CTASection from '../components/CTASection';

const FAQs = () => {
  const faqCategories = [
    {
      title: "General & Platform",
      faqs: [
        { question: "What is Sidqly?", answer: "Sidqly is a premium Islamic operating platform designed for modern charities, mosques, and Zakat teams to manage their mission with professional clarity and donor trust." },
        { question: "Why is Sidqly better than using WhatsApp and Excel?", answer: "WhatsApp and Excel lead to scattered coordination, manual errors, and lost data. Sidqly centralizes your operations, provides real-time status tracking, ensures audit-ready logs, and automates reporting that would take days to compile manually." },
        { question: "Is Sidqly just a donation form?", answer: "No. Sidqly is a full operating system. While basic forms only collect money, Sidqly manages the entire lifecycle: intake, verification, fulfillment tracking, proof of impact, and reporting." },
        { question: "How does Sidqly protect recipient dignity?", answer: "Dignity is at our core. We ensure that donors see proof of impact without ever exposing the private identity, exact address, or sensitive data of those being helped." },
        { question: "Does Sidqly use AI for Zakat eligibility?", answer: "No. We believe in human-led expertise for religious compliance. Sidqly provides the workflow for your team to manually review and approve Zakat eligibility cases." }
      ]
    },
    {
      title: "Organizations & Management",
      faqs: [
        { question: "Who should use Sidqly?", answer: "Sidqly is built for mosques, registered charities, informal Zakat teams, Qurbani providers, and corporate CSR departments seeking professional transparency." },
        { question: "How do we onboard our team?", answer: "After subscription, our team provides personalized onboarding to set up your workspace, define team roles, and train your staff and volunteers on the platform." },
        { question: "Can we manage multiple locations?", answer: "Yes. Sidqly supports multi-city and multi-project coordination, allowing you to track separate missions from one central dashboard." },
        { question: "Is there a limit to how many users we can have?", answer: "User limits depend on your plan. Our Premium and Enterprise plans support unlimited team members for large-scale operations." }
      ]
    },
    {
      title: "Zakat, Sadaqah & Ramadan",
      faqs: [
        { question: "How does Zakat fund separation work?", answer: "Sidqly provides clear tagging and tracking for Zakat, Sadaqah, and other fund types to ensure they are disbursed according to their specific requirements." },
        { question: "Why is manual Zakat eligibility important?", answer: "Religious eligibility requires specific expertise. Sidqly provides the tools for your scholars to document their findings and manually approve cases, rather than relying on automated engines." },
        { question: "How does Ramadan meal tracking work?", answer: "Our Ramadan module allows you to track food parcels and iftar distributions daily, ensuring no duplicate distribution and full coverage of your target areas." },
        { question: "Can we manage recurring Sadaqah projects?", answer: "Yes. You can create dedicated project spaces for ongoing initiatives like water wells or educational support, tracking every milestone from funding to completion." }
      ]
    },
    {
      title: "Qurbani Operations",
      faqs: [
        { question: "How does Qurbani tracking work in Sidqly?", answer: "We track the entire process: animal sourcing, order matching, slaughter verification, and meat distribution. Every step is logged for donor-safe proof." },
        { question: "Can vendors upload proof of slaughter directly?", answer: "Yes. Vendors get their own portal to upload proof images which are automatically linked to the specific orders they are fulfilling." },
        { question: "How do we handle meat distribution logistics?", answer: "Use Sidqly to assign delivery routes to volunteers and verify recipient receipt using our QR or photo verification system." }
      ]
    },
    {
      title: "Proof & Verification",
      faqs: [
        { question: "How does donor-safe proof work?", answer: "Field teams capture proof points. Administrators manually review these images. Once approved, the system generates a donor update that shows impact without exposing private requester details." },
        { question: "What is QR-verified delivery?", answer: "Unique QR codes are assigned to orders or recipients. Volunteers scan these codes at the point of delivery to prevent fraud and ensure aid reaches the right person." },
        { question: "Can donors see exact addresses of recipients?", answer: "No. Sidqly intentionally hides exact addresses and private identities from donors to maintain the highest standards of dignity." },
        { question: "Is proof approval automatic?", answer: "No. Every piece of proof is manually reviewed by your organization's administrators to ensure it meets both quality and privacy standards." }
      ]
    },
    {
      title: "Vendors & Volunteers",
      faqs: [
        { question: "How do vendors use Sidqly?", answer: "Vendors like grocery stores or slaughterhouses access a simplified portal to receive orders and upload proof of fulfillment." },
        { question: "What tools do volunteers have?", answer: "Volunteers use our mobile-friendly tools to see their delivery tasks, scan QR codes, and capture proof of impact in the field." },
        { question: "Do volunteers see all our data?", answer: "No. Volunteers only see the specific tasks and recipient information (protected as needed) required for their current mission." }
      ]
    },
    {
      title: "Corporate Sponsors",
      faqs: [
        { question: "How do corporate sponsors get reports?", answer: "Corporate partners receive professional impact certificates and board-ready PDF reports generated directly from the operational data." },
        { question: "Is the reporting audit-ready?", answer: "Yes. Every disbursement and delivery in Sidqly is logged with metadata, making it suitable for internal and external corporate audits." },
        { question: "Can we track our CSR impact across multiple NGOs?", answer: "Sidqly's corporate module is designed to give you a bird's-eye view of your contributions across different partners and regions." }
      ]
    },
    {
      title: "Payments & Pricing",
      faqs: [
        { question: "How does pricing work?", answer: "Pricing is based on organization size, selected modules, and support needs. We offer Starter, Growth, and Premium tiers, plus custom Enterprise solutions." },
        { question: "How do I pay using Easypaisa Pakistan IBAN?", answer: "Transfer the subscription or onboarding fee to IBAN PK19TMFB0000000060685814. Ensure you save the payment screenshot." },
        { question: "Where do I send payment confirmation?", answer: "Email your payment screenshot, organization name, and selected plan to team@sidqly.com." },
        { question: "Are payments reviewed manually?", answer: "Yes. Our team manually verifies every payment to ensure the highest standards of premium service for our organizations." },
        { question: "Do you offer discounts for small mosques?", answer: "Our Starter plan is specifically priced to be accessible for small mosques and early-stage pilot teams." }
      ]
    },
    {
      title: "Demo & Contact",
      faqs: [
        { question: "How do I book a demo?", answer: "You can book a personalized walkthrough via our official Calendly: https://calendly.com/d/dvzs-3zf-cgz or use the contact form." },
        { question: "Why should I fill the inquiry form?", answer: "The detailed inquiry form (https://forms.gle/bvSMog9pw2Ri4kMt9) helps us understand your needs better before our first call, ensuring we provide the best solution for you." },
        { question: "How do I contact team@sidqly.com?", answer: "You can email us directly at team@sidqly.com for any sales, support, or partnership inquiries." },
        { question: "How long does it take to get a response?", answer: "We typically respond to demo requests and inquiries within 24-48 business hours." }
      ]
    },
    {
      title: "More Technical & Support",
      faqs: [
        { question: "Is the platform mobile-responsive?", answer: "Yes. Sidqly is designed to work seamlessly across desktops, tablets, and mobile devices for both office and field teams." },
        { question: "Do you provide technical support?", answer: "Yes. All plans include email support, with Growth and Premium plans receiving priority assistance and dedicated account management." },
        { question: "Can we export our data?", answer: "Yes. You have full ownership of your data and can export reports and logs in standard formats for your records." },
        { question: "Does Sidqly provide religious rulings?", answer: "No. Sidqly is an operating platform. We provide the tools for your experts to manage their own religious and operational compliance." },
        { question: "Can we use our own branding?", answer: "Premium and Enterprise plans offer options for custom branding and field-ready identification." },
        { question: "How do we handle data privacy for requesters?", answer: "We use granular permissions and privacy-first data structures. Only authorized administrators see full requester details." },
        { question: "What happens if a volunteer loses their phone?", answer: "You can instantly revoke access for any user account from your central administrator dashboard." },
        { question: "Can we track cash disbursements?", answer: "Yes. Sidqly allows you to log and verify cash disbursements with the same rigor as digital or in-kind aid." },
        { question: "How are donor reports delivered?", answer: "Reports can be automatically generated as PDFs and shared via email or through the donor portal." },
        { question: "Is there an onboarding fee?", answer: "Standard onboarding is included in some plans. Custom or Enterprise implementations may involve an initial setup fee." },
        { question: "Can we use Sidqly for non-Islamic charities?", answer: "While Sidqly is optimized for Islamic operations like Zakat, its core engine is powerful enough for any mission-driven charity." },
        { question: "How do you handle multi-currency projects?", answer: "Sidqly allows you to track and report on projects in multiple currencies for international operations." },
        { question: "Is there a limit on how many projects we can run?", answer: "Most plans allow for multiple active projects and modules simultaneously." },
        { question: "Do you provide on-site training?", answer: "On-site training is available for our Enterprise partners as part of our implementation packages." },
        { question: "Can we integrate with our existing systems?", answer: "Our Enterprise plan offers integration options for organizations with established software ecosystems." },
        { question: "How do we update our subscription?", answer: "Contact team@sidqly.com to upgrade your plan as your organization grows." },
        { question: "Is there a trial period?", answer: "We offer guided demos and pilot phases for eligible organizations to experience the platform first-hand." },
        { question: "How do you prevent duplicate aid requests?", answer: "Our centralized intake system identifies potential duplicate records based on your organization's unique requirements." },
        { question: "Can we track historical impact?", answer: "Yes. Sidqly maintains a secure history of all your missions, allowing you to show growth and impact over time." },
        { question: "Do you have a mobile app?", answer: "Our platform is a high-performance web app that works perfectly on mobile browsers without needing a separate installation." },
        { question: "Is Sidqly audit-ready?", answer: "Yes. We maintain detailed logs of every operational action, providing the transparency required for modern charity audits." },
        { question: "How do we handle Zakat on animals?", answer: "Our specialized Qurbani and Zakat modules are designed to manage the unique data requirements of animal-based aid." },
        { question: "Can we use Sidqly for student scholarships?", answer: "Yes. Many organizations use our Zakat and help request modules to manage educational support programs." },
        { question: "How do we handle emergency relief drives?", answer: "Launch an emergency drive in minutes using our modular setup, tracking rapid distribution with real-time field data." },
        { question: "Is Sidqly available in multiple languages?", answer: "Currently, our primary interface is in English, but we support data entry in various languages to suit your community's needs." }
      ]
    }
  ];

  const totalFaqs = faqCategories.reduce((acc, cat) => acc + cat.faqs.length, 0);

  return (
    <>
      <SEO
        title="Frequently Asked Questions (60+ FAQs)"
        description="Comprehensive answers to 60+ questions about Sidqly's premium operating platform, modules, pricing, and how we build donor trust."
        canonical="/faqs"
        schema={{
          "@context": "https://schema.org",
          "@type": "FAQPage",
          "mainEntity": faqCategories.flatMap(cat =>
            cat.faqs.map(faq => ({
              "@type": "Question",
              "name": faq.question,
              "acceptedAnswer": {
                "@type": "Answer",
                "text": faq.answer
              }
            }))
          )
        }}
      />

      <PageHeader
        title="Knowledge Base & FAQs"
        description={`We've answered ${totalFaqs} of the most common questions to help you understand how Sidqly can transform your mission.`}
        category="Support"
      />

      <section className="py-24 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
           <div className="space-y-20">
             {faqCategories.map((cat, i) => (
               <div key={i}>
                 <div className="flex items-center gap-4 mb-10">
                   <h2 className="text-2xl font-bold text-secondary whitespace-nowrap">{cat.title}</h2>
                   <div className="h-px bg-gray-100 w-full"></div>
                 </div>
                 <FAQAccordion faqs={cat.faqs} />
               </div>
             ))}
           </div>
        </div>
      </section>

      <CTASection
        title="Still have questions?"
        description="Book a personalized demo or reach out to our team directly. We're here to help you build trust."
        primaryCtaText="Book a Demo"
        primaryCtaHref="/demo"
        secondaryCtaText="Contact Sales"
        secondaryCtaHref="/contact"
      />
    </>
  );
};

export default FAQs;
