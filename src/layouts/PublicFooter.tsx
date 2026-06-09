import { Link } from 'react-router-dom';
import { Heart, Mail, Calendar, FileText } from 'lucide-react';

interface NavLink {
  name: string;
  href: string;
  external?: boolean;
}

interface FooterSection {
  title: string;
  links: NavLink[];
}

const PublicFooter = () => {
  const currentYear = new Date().getFullYear();

  const sections: FooterSection[] = [
    {
      title: 'Solutions',
      links: [
        { name: 'Mosques', href: '/solutions/mosques' },
        { name: 'Islamic Charities', href: '/solutions/islamic-charities' },
        { name: 'Qurbani Providers', href: '/solutions/qurbani-providers' },
        { name: 'Zakat Teams', href: '/solutions/zakat-teams' },
      ],
    },
    {
      title: 'Modules',
      links: [
        { name: 'Zakat Management', href: '/modules/zakat' },
        { name: 'Qurbani Operations', href: '/modules/qurbani' },
        { name: 'Proof of Trust', href: '/modules/proof-trust' },
        { name: 'Donor Reports', href: '/modules/reports' },
      ],
    },
    {
      title: 'Company',
      links: [
        { name: 'About Us', href: '/about' },
        { name: 'Contact Sales', href: '/contact' },
        { name: 'Pricing', href: '/pricing' },
        { name: 'Help Center', href: '/help' },
      ],
    },
    {
      title: 'Lead Capture',
      links: [
        { name: 'Book Demo (Calendly)', href: 'https://calendly.com/d/dvzs-3zf-cgz', external: true },
        { name: 'Detailed Inquiry Form', href: 'https://forms.gle/bvSMog9pw2Ri4kMt9', external: true },
        { name: 'Email Sales', href: 'mailto:team@sidqly.com', external: true },
      ],
    },
  ];

  return (
    <footer className="bg-secondary text-white pt-20 pb-10">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-12 mb-16">
          <div className="col-span-2 lg:col-span-1">
            <Link to="/" className="flex items-center space-x-2 mb-6">
              <div className="bg-primary p-1.5 rounded-lg">
                <Heart className="h-5 w-5 text-white" />
              </div>
              <span className="text-xl font-bold tracking-tight">Sidqly</span>
            </Link>
            <p className="text-gray-400 text-sm leading-relaxed mb-6">
              The premium Islamic operating platform for modern charities, mosques, and Zakat teams.
            </p>
            <div className="flex items-center space-x-2 text-gray-400 text-sm mb-2">
              <Mail className="h-4 w-4" />
              <a href="mailto:team@sidqly.com" className="hover:text-primary transition-colors">team@sidqly.com</a>
            </div>
            <div className="flex items-center space-x-2 text-gray-400 text-sm mb-2">
              <Calendar className="h-4 w-4" />
              <a href="https://calendly.com/d/dvzs-3zf-cgz" target="_blank" rel="noopener noreferrer" className="hover:text-primary transition-colors">Book a Demo</a>
            </div>
            <div className="flex items-center space-x-2 text-gray-400 text-sm">
              <FileText className="h-4 w-4" />
              <a href="https://forms.gle/bvSMog9pw2Ri4kMt9" target="_blank" rel="noopener noreferrer" className="hover:text-primary transition-colors">Inquiry Form</a>
            </div>
          </div>

          {sections.map((section) => (
            <div key={section.title}>
              <h3 className="font-semibold text-sm uppercase tracking-wider mb-6 text-gray-300">
                {section.title}
              </h3>
              <ul className="space-y-4">
                {section.links.map((link) => (
                  <li key={link.name}>
                    {link.external ? (
                      <a
                        href={link.href}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="text-gray-400 hover:text-primary text-sm transition-colors"
                      >
                        {link.name}
                      </a>
                    ) : (
                      <Link
                        to={link.href}
                        className="text-gray-400 hover:text-primary text-sm transition-colors"
                      >
                        {link.name}
                      </Link>
                    )}
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        <div className="border-t border-gray-800 pt-8 flex flex-col md:flex-row justify-between items-center gap-4 text-center md:text-left">
          <p className="text-gray-500 text-xs">
            © {currentYear} Sidqly. All rights reserved. Premium Islamic Operations.
          </p>
          <div className="text-gray-500 text-[10px] uppercase tracking-widest">
            Sidqly Public Website v1.5
          </div>
        </div>
      </div>
    </footer>
  );
};

export default PublicFooter;
