import SEO from '../../components/SEO';
import PageHeader from '../../components/PageHeader';

const Vendors = () => {
  return (
    <>
      <SEO title="Help for Vendors" description="Guides and resources for supply chain partners using Sidqly." canonical="/help/vendors" />
      <PageHeader title="Help for Vendors" description="Resources for managing orders and providing proof of fulfillment." category="Help Center" />
      <section className="py-24 bg-white"><div className="max-w-4xl mx-auto px-4 prose prose-emerald"><h3>Common Articles</h3><ul><li>Accepting order requests</li><li>Uploading proof of service</li><li>Managing delivery tasks</li></ul></div></section>
    </>
  );
};

export default Vendors;
