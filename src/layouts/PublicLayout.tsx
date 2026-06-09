import React from 'react';
import { Outlet, useLocation } from 'react-router-dom';
import PublicNavbar from './PublicNavbar';
import PublicFooter from './PublicFooter';
import StickyCTA from '../components/StickyCTA';

const PublicLayout = () => {
  const { pathname } = useLocation();

  React.useEffect(() => {
    window.scrollTo(0, 0);
  }, [pathname]);

  return (
    <div className="min-h-screen bg-white flex flex-col">
      <PublicNavbar />
      <main className="flex-grow pt-20">
        <Outlet />
      </main>
      <StickyCTA />
      <PublicFooter />
    </div>
  );
};

export default PublicLayout;
