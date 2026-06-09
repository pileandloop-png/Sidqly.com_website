import SEO from '../../components/SEO';
import PageHeader from '../../components/PageHeader';

const Corporates = () => {
  return (
    <>
      <SEO title="Help for Corporates" description="Guides and resources for corporate CSR departments using Sidqly." canonical="/help/corporates" />
      <PageHeader title="Help for Corporates" description="Resources for tracking social impact and board reporting." category="Help Center" />
      <section className="py-24 bg-white"><div className="max-w-4xl mx-auto px-4 prose prose-emerald"><h3>Common Articles</h3><ul><li>Generating CSR impact reports</li><li>Audit-ready data logs</li><li>Collaborating with NGOs</li></ul></div></section>
    </>
  );
};

export default Corporates;
