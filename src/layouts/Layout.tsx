import React from 'react';
import { Link } from 'react-router-dom';
import { StickyCTA } from '../components/ui/StickyCTA';

const Navbar: React.FC = () => {
  return (
    <nav className="bg-white border-b sticky top-0 z-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between h-16">
          <div className="flex items-center">
            <Link to="/" className="text-2xl font-bold text-sidqly-primary">Sidqly</Link>
            <div className="hidden md:ml-10 md:flex md:space-x-8">
              <Link to="/features" className="text-gray-600 hover:text-sidqly-primary font-medium">Features</Link>
              <Link to="/solutions" className="text-gray-600 hover:text-sidqly-primary font-medium">Solutions</Link>
              <Link to="/pricing" className="text-gray-600 hover:text-sidqly-primary font-medium">Pricing</Link>
              <Link to="/faqs" className="text-gray-600 hover:text-sidqly-primary font-medium">FAQs</Link>
            </div>
          </div>
          <div className="flex items-center space-x-4">
            <Link to="/contact-sales" className="text-gray-600 hover:text-sidqly-primary font-medium hidden sm:block">Sales</Link>
            <Link to="/book-demo" className="bg-sidqly-primary text-white px-4 py-2 rounded-md font-medium hover:bg-opacity-90 transition-all">Book Demo</Link>
          </div>
        </div>
      </div>
    </nav>
  );
};

const Footer: React.FC = () => {
  return (
    <footer className="bg-gray-50 border-t py-12">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
          <div className="col-span-2 md:col-span-1">
            <Link to="/" className="text-2xl font-bold text-sidqly-primary">Sidqly</Link>
            <p className="mt-4 text-sm text-gray-500">Premium giving operations platform for trusted organizations.</p>
          </div>
          <div>
            <h3 className="text-sm font-bold text-gray-900 uppercase tracking-wider">Product</h3>
            <ul className="mt-4 space-y-2">
              <li><Link to="/features" className="text-sm text-gray-600 hover:text-sidqly-primary">Features</Link></li>
              <li><Link to="/pricing" className="text-sm text-gray-600 hover:text-sidqly-primary">Pricing</Link></li>
              <li><Link to="/solutions" className="text-sm text-gray-600 hover:text-sidqly-primary">Solutions</Link></li>
            </ul>
          </div>
          <div>
            <h3 className="text-sm font-bold text-gray-900 uppercase tracking-wider">Support</h3>
            <ul className="mt-4 space-y-2">
              <li><Link to="/faqs" className="text-sm text-gray-600 hover:text-sidqly-primary">FAQs</Link></li>
              <li><a href="mailto:team@sidqly.com" className="text-sm text-gray-600 hover:text-sidqly-primary">Email Support</a></li>
              <li><Link to="/contact-sales" className="text-sm text-gray-600 hover:text-sidqly-primary">Contact Sales</Link></li>
            </ul>
          </div>
          <div>
            <h3 className="text-sm font-bold text-gray-900 uppercase tracking-wider">Legal</h3>
            <ul className="mt-4 space-y-2">
              <li><span className="text-sm text-gray-600">Privacy (Internal)</span></li>
              <li><span className="text-sm text-gray-600">Terms (Internal)</span></li>
            </ul>
          </div>
        </div>
        <div className="mt-12 border-t pt-8 flex flex-col md:flex-row justify-between items-center text-sm text-gray-500">
          <p>© 2024 Sidqly. All rights reserved.</p>
          <div className="flex space-x-6 mt-4 md:mt-0">
            <span>Trusted</span>
            <span>Secure</span>
            <span>Dignity-Safe</span>
          </div>
        </div>
        <div className="mt-8 grid grid-cols-1 md:grid-cols-3 gap-4">
          <a href="https://calendly.com/d/dvzs-3zf-cgz" target="_blank" rel="noopener noreferrer" className="text-xs text-center p-2 bg-white rounded border hover:border-sidqly-primary transition-colors">Book Demo on Calendly</a>
          <a href="https://forms.gle/bvSMog9pw2Ri4kMt9" target="_blank" rel="noopener noreferrer" className="text-xs text-center p-2 bg-white rounded border hover:border-sidqly-primary transition-colors">Fill Detailed Inquiry Form</a>
          <a href="mailto:team@sidqly.com" className="text-xs text-center p-2 bg-white rounded border hover:border-sidqly-primary transition-colors">Email team@sidqly.com</a>
        </div>
      </div>
    </footer>
  );
};

export const Layout: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  return (
    <div className="min-h-screen flex flex-col bg-white">
      <Navbar />
      <main className="flex-grow">
        {children}
      </main>
      <Footer />
      <StickyCTA />
    </div>
  );
};
