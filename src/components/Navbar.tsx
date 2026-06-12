import React, { useState } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { Menu, X, ChevronDown } from 'lucide-react';
import { brand } from '../config/brand';

const Navbar: React.FC = () => {
  const [isOpen, setIsOpen] = useState(false);
  const location = useLocation();

  const navigation = [
    { name: 'Features', href: '/features' },
    {
      name: 'Solutions',
      href: '/solutions',
      children: [
        { name: 'Mosques', href: '/solutions/mosques' },
        { name: 'Islamic Charities', href: '/solutions/islamic-charities' },
        { name: 'Qurbani Providers', href: '/solutions/qurbani-providers' },
        { name: 'Ramadan Teams', href: '/solutions/ramadan-food-drives' },
        { name: 'Zakat Teams', href: '/solutions/zakat-teams' },
        { name: 'Corporate CSR', href: '/solutions/corporate-csr-zakat' },
      ]
    },
    {
      name: 'Modules',
      href: '/modules',
      children: [
        { name: 'Qurbani', href: '/modules/qurbani' },
        { name: 'Ramadan', href: '/modules/ramadan' },
        { name: 'Zakat', href: '/modules/zakat' },
        { name: 'Proof Trust', href: '/modules/proof-trust' },
        { name: 'Vendor Fulfillment', href: '/modules/vendor-fulfillment' },
        { name: 'Reports', href: '/modules/reports' },
      ]
    },
    { name: 'Pricing', href: '/pricing' },
    { name: 'FAQs', href: '/faqs' },
    { name: 'Blog', href: '/blog' },
  ];

  return (
    <nav className="bg-white border-b border-gray-100 sticky top-0 z-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between h-20">
          <div className="flex items-center">
            <Link to="/" className="flex-shrink-0 flex items-center gap-3">
              <img src="/brand/sidqly-mark.svg" alt="Sidqly" className="h-10 w-10" />
              <span className="text-sidqly-navy text-2xl font-bold tracking-tight">Sidqly</span>
            </Link>
          </div>

          {/* Desktop Nav */}
          <div className="hidden lg:flex items-center space-x-8">
            {navigation.map((item) => (
              <div key={item.name} className="relative group">
                {item.children ? (
                  <button
                    className="flex items-center gap-1 text-gray-600 hover:text-sidqly-green-deep font-medium transition-colors"
                  >
                    {item.name} <ChevronDown size={16} />
                  </button>
                ) : (
                  <Link
                    to={item.href}
                    className={`font-medium transition-colors ${location.pathname === item.href ? 'text-sidqly-green-deep' : 'text-gray-600 hover:text-sidqly-green-deep'}`}
                  >
                    {item.name}
                  </Link>
                )}

                {item.children && (
                  <div className="absolute left-0 mt-2 w-56 bg-white border border-gray-100 rounded-xl shadow-xl opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-200 transform origin-top-left">
                    <div className="py-2">
                      {item.children.map((child) => (
                        <Link
                          key={child.name}
                          to={child.href}
                          className="block px-4 py-2.5 text-sm text-gray-600 hover:bg-sidqly-ivory hover:text-sidqly-green-deep transition-colors"
                        >
                          {child.name}
                        </Link>
                      ))}
                    </div>
                  </div>
                )}
              </div>
            ))}
            <a
              href={brand.calendlyUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="bg-sidqly-green-deep text-white px-6 py-2.5 rounded-lg font-bold hover:shadow-lg transition-all"
            >
              Book Demo
            </a>
          </div>

          {/* Mobile menu button */}
          <div className="lg:hidden flex items-center">
            <button
              onClick={() => setIsOpen(!isOpen)}
              className="text-gray-600 hover:text-sidqly-green-deep p-2"
            >
              {isOpen ? <X size={28} /> : <Menu size={28} />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Nav */}
      {isOpen && (
        <div className="lg:hidden bg-white border-t border-gray-50 overflow-y-auto max-h-[calc(100vh-80px)]">
          <div className="px-4 pt-4 pb-8 space-y-2">
            {navigation.map((item) => (
              <div key={item.name}>
                <Link
                  to={item.href}
                  className="block px-3 py-3 text-lg font-bold text-sidqly-navy"
                  onClick={() => setIsOpen(false)}
                >
                  {item.name}
                </Link>
                {item.children && (
                  <div className="pl-6 space-y-1">
                    {item.children.map((child) => (
                      <Link
                        key={child.name}
                        to={child.href}
                        className="block px-3 py-2 text-gray-600"
                        onClick={() => setIsOpen(false)}
                      >
                        {child.name}
                      </Link>
                    ))}
                  </div>
                )}
              </div>
            ))}
            <div className="pt-6 px-3">
              <a
                href={brand.calendlyUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="block w-full text-center bg-sidqly-green-deep text-white py-4 rounded-xl font-bold"
              >
                Book Demo
              </a>
            </div>
          </div>
        </div>
      )}
    </nav>
  );
};

export default Navbar;
