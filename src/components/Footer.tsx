import React from 'react';
import { Link } from 'react-router-dom';
import { brand } from '../config/brand';
import { Mail, Calendar, FileText } from 'lucide-react';

const Footer: React.FC = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-sidqly-navy text-white pt-20 pb-10">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 mb-16">
          <div>
            <Link to="/" className="flex items-center gap-3 mb-6">
              <img src="/brand/sidqly-mark.svg" alt="Sidqly" className="h-10 w-10 brightness-0 invert" />
              <span className="text-2xl font-bold tracking-tight">Sidqly</span>
            </Link>
            <p className="text-gray-400 text-sm leading-relaxed mb-8">
              The premium Islamic operating platform for verified giving, protected dignity, and clear impact. Audit-ready and donor-safe.
            </p>
            <div className="space-y-3">
              <a href={brand.calendlyUrl} className="flex items-center gap-2 text-sidqly-green-soft hover:text-white transition-colors text-sm font-medium">
                <Calendar size={18} /> Book a Demo
              </a>
              <a href={brand.inquiryFormUrl} className="flex items-center gap-2 text-sidqly-green-soft hover:text-white transition-colors text-sm font-medium">
                <FileText size={18} /> Fill Inquiry Form
              </a>
              <a href={`mailto:${brand.email}`} className="flex items-center gap-2 text-sidqly-green-soft hover:text-white transition-colors text-sm font-medium">
                <Mail size={18} /> {brand.email}
              </a>
            </div>
          </div>

          <div>
            <h4 className="text-lg font-bold mb-6">Solutions</h4>
            <ul className="space-y-4 text-sm text-gray-400">
              <li><Link to="/solutions/mosques" className="hover:text-white transition-colors">Mosques</Link></li>
              <li><Link to="/solutions/islamic-charities" className="hover:text-white transition-colors">Islamic Charities</Link></li>
              <li><Link to="/solutions/qurbani-providers" className="hover:text-white transition-colors">Qurbani Providers</Link></li>
              <li><Link to="/solutions/ramadan-food-drives" className="hover:text-white transition-colors">Ramadan Drives</Link></li>
              <li><Link to="/solutions/zakat-teams" className="hover:text-white transition-colors">Zakat Teams</Link></li>
              <li><Link to="/solutions/corporate-csr-zakat" className="hover:text-white transition-colors">Corporate CSR</Link></li>
            </ul>
          </div>

          <div>
            <h4 className="text-lg font-bold mb-6">Modules</h4>
            <ul className="space-y-4 text-sm text-gray-400">
              <li><Link to="/modules/qurbani" className="hover:text-white transition-colors">Qurbani Management</Link></li>
              <li><Link to="/modules/ramadan" className="hover:text-white transition-colors">Ramadan Operations</Link></li>
              <li><Link to="/modules/zakat" className="hover:text-white transition-colors">Zakat Fund Separation</Link></li>
              <li><Link to="/modules/proof-trust" className="hover:text-white transition-colors">Proof Trust Engine</Link></li>
              <li><Link to="/modules/reports" className="hover:text-white transition-colors">Professional Reports</Link></li>
              <li><Link to="/modules/vendor-fulfillment" className="hover:text-white transition-colors">Vendor Fulfillment</Link></li>
            </ul>
          </div>

          <div>
            <h4 className="text-lg font-bold mb-6">Resources</h4>
            <ul className="space-y-4 text-sm text-gray-400">
              <li><Link to="/faqs" className="hover:text-white transition-colors">Help & FAQs</Link></li>
              <li><Link to="/blog" className="hover:text-white transition-colors">Blog & Guides</Link></li>
              <li><Link to="/brand" className="hover:text-white transition-colors">Brand Assets</Link></li>
              <li><Link to="/trust-center" className="hover:text-white transition-colors">Trust Center</Link></li>
              <li><Link to="/security" className="hover:text-white transition-colors">Security</Link></li>
              <li><Link to="/privacy" className="hover:text-white transition-colors">Privacy Policy</Link></li>
            </ul>
          </div>
        </div>

        <div className="pt-10 border-t border-white/5 flex flex-col md:flex-row justify-between items-center gap-6">
          <p className="text-gray-500 text-xs">
            © {currentYear} {brand.name}. All rights reserved. Registered trademark of Sidqly Operations.
          </p>
          <div className="flex gap-8">
             <Link to="/terms" className="text-gray-500 hover:text-white text-xs transition-colors">Terms</Link>
             <Link to="/accessibility" className="text-gray-500 hover:text-white text-xs transition-colors">Accessibility</Link>
             <Link to="/billing" className="text-gray-500 hover:text-white text-xs transition-colors">Billing</Link>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
