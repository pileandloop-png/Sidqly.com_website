import SEO from '../../components/SEO';
import PageHeader from '../../components/PageHeader';

const Organizations = () => {
  return (
    <>
      <SEO title="Help for Organizations" description="Guides and resources for charities and mosques using Sidqly." canonical="/help/organizations" />
      <PageHeader title="Help for Organizations" description="Resources for managing your team, projects, and donors." category="Help Center" />
      <section className="py-24 bg-white"><div className="max-w-4xl mx-auto px-4 prose prose-emerald"><h3>Common Articles</h3><ul><li>Setting up your workspace</li><li>Managing Zakat eligibility</li><li>Onboarding team members</li></ul></div></section>
    </>
  );
};

export default Organizations;
