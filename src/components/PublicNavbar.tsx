import React from 'react';
import { Link } from 'react-router-dom';

const PublicNavbar: React.FC = () => {
  return (
    <nav className="border-b bg-ivory sticky top-0 z-50">
      <div className="max-w-7xl mx-auto px-4 h-16 flex items-center justify-between">
        <Link to="/" className="text-2xl font-bold text-emerald">Sidqly</Link>
        <div className="hidden md:flex gap-6 text-navy font-medium">
          <Link to="/why-sidqly" className="hover:text-emerald">Why Sidqly</Link>
          <Link to="/verified-giving" className="hover:text-emerald">Verified Giving</Link>
          <Link to="/resources" className="hover:text-emerald">Resources Center</Link>
        </div>
        <a href="https://calendly.com/d/dvzs-3zf-cgz" className="bg-emerald text-white px-4 py-2 rounded-lg font-bold shadow-sm hover:bg-opacity-90">Book Demo</a>
      </div>
    </nav>
  );
};

export default PublicNavbar;
