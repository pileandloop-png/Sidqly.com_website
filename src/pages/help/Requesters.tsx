import SEO from '../../components/SEO';
import PageHeader from '../../components/PageHeader';
import DignitySafeDiagram from '../../components/brand/DignitySafeDiagram';

const Requesters = () => {
  return (
    <>
      <SEO title="Help for Requesters" description="Information for individuals and families seeking assistance through Sidqly." canonical="/help/requesters" />
      <PageHeader title="Help for Requesters" description="Understanding how we protect your dignity and manage your requests." category="Help Center" />
      <section className="py-12 bg-white">
        <div className="max-w-4xl mx-auto px-4">
          <div className="text-center mb-8">
            <h3 className="text-2xl font-bold">Your Dignity is Our Priority</h3>
            <p className="text-gray-600">We use a multi-layer data boundary to ensure your private information is never exposed to the public or donors.</p>
          </div>
          <DignitySafeDiagram />
        </div>
      </section>
      <section className="py-12 bg-gray-50">
        <div className="max-w-4xl mx-auto px-4 prose prose-emerald">
          <h3>Common Articles</h3>
          <ul>
            <li>How we protect your privacy</li>
            <li>Submitting a help request</li>
            <li>Understanding the review process</li>
          </ul>
        </div>
      </section>
    </>
  );
};

export default Requesters;
