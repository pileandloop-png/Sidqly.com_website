import SEO from '../../components/SEO';
import PageHeader from '../../components/PageHeader';

const Requesters = () => {
  return (
    <>
      <SEO title="Help for Requesters" description="Information for individuals and families seeking assistance through Sidqly." canonical="/help/requesters" />
      <PageHeader title="Help for Requesters" description="Understanding how we protect your dignity and manage your requests." category="Help Center" />
      <section className="py-24 bg-white"><div className="max-w-4xl mx-auto px-4 prose prose-emerald"><h3>Common Articles</h3><ul><li>How we protect your privacy</li><li>Submitting a help request</li><li>Understanding the review process</li></ul></div></section>
    </>
  );
};

export default Requesters;
