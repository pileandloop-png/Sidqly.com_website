import SEO from '../../components/SEO';
import PageHeader from '../../components/PageHeader';

const Donors = () => {
  return (
    <>
      <SEO title="Help for Donors" description="Guides and resources for donors using Sidqly to track their impact." canonical="/help/donors" />
      <PageHeader title="Help for Donors" description="Learn how to use Sidqly to verify your impact and receive reports." category="Help Center" />
      <section className="py-24 bg-white"><div className="max-w-4xl mx-auto px-4 prose prose-emerald"><h3>Common Articles</h3><ul><li>How to verify impact with Sidqly</li><li>Understanding donor reports</li><li>Protecting recipient privacy</li></ul></div></section>
    </>
  );
};

export default Donors;
