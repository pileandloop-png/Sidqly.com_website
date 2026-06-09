interface PageHeaderProps {
  title: string;
  description: string;
  category?: string;
}

const PageHeader = ({ title, description, category }: PageHeaderProps) => {
  return (
    <section className="bg-secondary pt-32 pb-20 relative overflow-hidden">
      <div className="absolute top-0 right-0 w-1/3 h-full bg-primary/5 -skew-x-12 transform translate-x-1/2"></div>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {category && (
          <span className="text-primary font-semibold tracking-widest uppercase text-xs mb-4 block animate-in fade-in slide-in-from-bottom-2 duration-700">
            {category}
          </span>
        )}
        <h1 className="text-4xl md:text-6xl font-bold text-white mb-6 leading-[1.1] animate-in fade-in slide-in-from-bottom-4 duration-700">
          {title}
        </h1>
        <p className="text-gray-400 text-lg md:text-xl max-w-3xl leading-relaxed animate-in fade-in slide-in-from-bottom-6 duration-700">
          {description}
        </p>
      </div>
    </section>
  );
};

export default PageHeader;
