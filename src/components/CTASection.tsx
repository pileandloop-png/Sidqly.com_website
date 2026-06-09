import { Link } from 'react-router-dom';

interface CTASectionProps {
  title?: string;
  description?: string;
  primaryCtaText?: string;
  primaryCtaHref?: string;
  secondaryCtaText?: string;
  secondaryCtaHref?: string;
  isExternal?: boolean;
}

const CTASection = ({
  title = "Ready to transform your operations?",
  description = "Join premium organizations using Sidqly to build donor trust and operational excellence.",
  primaryCtaText = "Book a Demo",
  primaryCtaHref = "https://calendly.com/d/dvzs-3zf-cgz",
  secondaryCtaText = "Fill Inquiry Form",
  secondaryCtaHref = "https://forms.gle/bvSMog9pw2Ri4kMt9",
  isExternal = true,
}: CTASectionProps) => {
  return (
    <section className="py-24 bg-primary relative overflow-hidden">
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_right,_var(--tw-gradient-stops))] from-emerald-500/50 via-transparent to-transparent opacity-50"></div>
      <div className="max-w-4xl mx-auto px-4 text-center relative z-10">
        <h2 className="text-3xl md:text-5xl font-bold text-white mb-6 leading-tight">
          {title}
        </h2>
        <p className="text-emerald-50 text-lg md:text-xl mb-10 leading-relaxed max-w-2xl mx-auto">
          {description}
        </p>
        <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
          {isExternal ? (
            <a
              href={primaryCtaHref}
              target="_blank"
              rel="noopener noreferrer"
              className="w-full sm:w-auto bg-white text-primary px-8 py-4 rounded-full font-bold text-lg hover:bg-emerald-50 transition-all shadow-lg hover:shadow-xl"
            >
              {primaryCtaText}
            </a>
          ) : (
            <Link
              to={primaryCtaHref}
              className="w-full sm:w-auto bg-white text-primary px-8 py-4 rounded-full font-bold text-lg hover:bg-emerald-50 transition-all shadow-lg hover:shadow-xl"
            >
              {primaryCtaText}
            </Link>
          )}

          {isExternal ? (
            <a
              href={secondaryCtaHref}
              target="_blank"
              rel="noopener noreferrer"
              className="w-full sm:w-auto bg-primary border-2 border-white/30 text-white px-8 py-4 rounded-full font-bold text-lg hover:bg-white/10 transition-all"
            >
              {secondaryCtaText}
            </a>
          ) : (
            <Link
              to={secondaryCtaHref}
              className="w-full sm:w-auto bg-primary border-2 border-white/30 text-white px-8 py-4 rounded-full font-bold text-lg hover:bg-white/10 transition-all"
            >
              {secondaryCtaText}
            </Link>
          )}
        </div>
      </div>
    </section>
  );
};

export default CTASection;
