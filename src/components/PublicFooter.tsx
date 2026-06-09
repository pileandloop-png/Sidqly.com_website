import React from 'react';
import { Link } from 'react-router-dom';

const PublicFooter: React.FC = () => {
  return (
    <footer className="bg-navy text-white py-16">
      <div className="max-w-7xl mx-auto px-4 grid md:grid-cols-4 gap-12">
        <div>
          <div className="text-2xl font-bold mb-6 text-mint">Sidqly</div>
          <p className="text-gray-400 text-sm leading-relaxed">
            Premium Islamic operating platform for verified giving. Protected dignity. Clear impact.
          </p>
        </div>
        <div>
          <h4 className="font-bold mb-6 text-gold">Solutions</h4>
          <ul className="space-y-3 text-sm text-gray-300">
            <li><Link to="/qurbani-management-software" className="hover:text-mint">Qurbani Management</Link></li>
            <li><Link to="/ramadan-donation-management" className="hover:text-mint">Ramadan Management</Link></li>
            <li><Link to="/zakat-fund-separation" className="hover:text-mint">Zakat Operations</Link></li>
            <li><Link to="/mosque-donation-management" className="hover:text-mint">Mosque Operations</Link></li>
          </ul>
        </div>
        <div>
          <h4 className="font-bold mb-6 text-gold">Trust & Proof</h4>
          <ul className="space-y-3 text-sm text-gray-300">
            <li><Link to="/trust-and-dignity" className="hover:text-mint">Trust and Dignity</Link></li>
            <li><Link to="/proof-trust-engine" className="hover:text-mint">Proof Trust Engine</Link></li>
            <li><Link to="/donor-safe-impact" className="hover:text-mint">Donor-Safe Impact</Link></li>
            <li><Link to="/manual-payment-review" className="hover:text-mint">Payment Review</Link></li>
          </ul>
        </div>
        <div>
          <h4 className="font-bold mb-6 text-gold">Connect</h4>
          <ul className="space-y-3 text-sm text-gray-300">
            <li>team@sidqly.com</li>
            <li><a href="https://calendly.com/d/dvzs-3zf-cgz" className="text-mint hover:underline">Book a Demo</a></li>
            <li><a href="https://forms.gle/bvSMog9pw2Ri4kMt9" className="text-mint hover:underline">Inquiry Form</a></li>
          </ul>
        </div>
      </div>
      <div className="max-w-7xl mx-auto px-4 mt-12 pt-8 border-t border-gray-800 text-xs text-gray-500 text-center">
        &copy; {new Date().getFullYear()} Sidqly. All rights reserved. Premium Islamic Operations.
      </div>
    </footer>
  );
};

export default PublicFooter;
