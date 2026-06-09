import React, { Suspense, lazy } from 'react';
import { BrowserRouter as Router, Routes, Route, Navigate } from 'react-router-dom';
import { HelmetProvider } from 'react-helmet-async';
import PublicLayout from './layouts/PublicLayout';

// Lazy load pages
const Home = lazy(() => import('./pages/Home'));
const Features = lazy(() => import('./pages/Features'));
const Solutions = lazy(() => import('./pages/Solutions'));
const Modules = lazy(() => import('./pages/Modules'));
const Pricing = lazy(() => import('./pages/Pricing'));
const HowItWorks = lazy(() => import('./pages/HowItWorks'));
const Demo = lazy(() => import('./pages/Demo'));
const FAQs = lazy(() => import('./pages/FAQs'));
const Help = lazy(() => import('./pages/Help'));
const About = lazy(() => import('./pages/About'));
const Contact = lazy(() => import('./pages/Contact'));
const Privacy = lazy(() => import('./pages/Privacy'));
const Terms = lazy(() => import('./pages/Terms'));
const Security = lazy(() => import('./pages/Security'));

// Solution subpages
const MosqueSolution = lazy(() => import('./pages/solutions/Mosques'));
const IslamicCharitySolution = lazy(() => import('./pages/solutions/IslamicCharities'));
const QurbaniProviderSolution = lazy(() => import('./pages/solutions/QurbaniProviders'));
const RamadanDriveSolution = lazy(() => import('./pages/solutions/RamadanDrives'));
const ZakatTeamSolution = lazy(() => import('./pages/solutions/ZakatTeams'));
const CorporateCSRSolution = lazy(() => import('./pages/solutions/CorporateCSR'));
const VendorSolution = lazy(() => import('./pages/solutions/Vendors'));
const VolunteerSolution = lazy(() => import('./pages/solutions/Volunteers'));

// Module subpages
const QurbaniModule = lazy(() => import('./pages/modules/Qurbani'));
const RamadanModule = lazy(() => import('./pages/modules/Ramadan'));
const ZakatModule = lazy(() => import('./pages/modules/Zakat'));
const SadaqahModule = lazy(() => import('./pages/modules/Sadaqah'));
const CharityRequestsModule = lazy(() => import('./pages/modules/CharityRequests'));
const ProofTrustModule = lazy(() => import('./pages/modules/ProofTrust'));
const QRVerificationModule = lazy(() => import('./pages/modules/QRVerification'));
const ReportsModule = lazy(() => import('./pages/modules/Reports'));
const VendorFulfillmentModule = lazy(() => import('./pages/modules/VendorFulfillment'));
const CorporateImpactModule = lazy(() => import('./pages/modules/CorporateImpact'));

// Help subpages
const DonorHelp = lazy(() => import('./pages/help/Donors'));
const OrganizationHelp = lazy(() => import('./pages/help/Organizations'));
const VendorHelp = lazy(() => import('./pages/help/Vendors'));
const CorporateHelp = lazy(() => import('./pages/help/Corporates'));
const RequesterHelp = lazy(() => import('./pages/help/Requesters'));

const App = () => {
  return (
    <HelmetProvider>
      <Router>
        <Suspense fallback={<div className="h-screen flex items-center justify-center text-primary font-bold">Loading Sidqly...</div>}>
          <Routes>
            <Route element={<PublicLayout />}>
              <Route path="/" element={<Home />} />
              <Route path="/features" element={<Features />} />

              <Route path="/solutions">
                <Route index element={<Solutions />} />
                <Route path="mosques" element={<MosqueSolution />} />
                <Route path="islamic-charities" element={<IslamicCharitySolution />} />
                <Route path="qurbani-providers" element={<QurbaniProviderSolution />} />
                <Route path="ramadan-food-drives" element={<RamadanDriveSolution />} />
                <Route path="zakat-teams" element={<ZakatTeamSolution />} />
                <Route path="corporate-csr-zakat" element={<CorporateCSRSolution />} />
                <Route path="vendors" element={<VendorSolution />} />
                <Route path="volunteers" element={<VolunteerSolution />} />
              </Route>

              <Route path="/modules">
                <Route index element={<Modules />} />
                <Route path="qurbani" element={<QurbaniModule />} />
                <Route path="ramadan" element={<RamadanModule />} />
                <Route path="zakat" element={<ZakatModule />} />
                <Route path="sadaqah" element={<SadaqahModule />} />
                <Route path="charity-requests" element={<CharityRequestsModule />} />
                <Route path="proof-trust" element={<ProofTrustModule />} />
                <Route path="qr-verification" element={<QRVerificationModule />} />
                <Route path="reports" element={<ReportsModule />} />
                <Route path="vendor-fulfillment" element={<VendorFulfillmentModule />} />
                <Route path="corporate-impact" element={<CorporateImpactModule />} />
              </Route>

              <Route path="/how-it-works" element={<HowItWorks />} />
              <Route path="/pricing" element={<Pricing />} />
              <Route path="/demo" element={<Demo />} />
              <Route path="/faqs" element={<FAQs />} />

              <Route path="/help">
                <Route index element={<Help />} />
                <Route path="donors" element={<DonorHelp />} />
                <Route path="organizations" element={<OrganizationHelp />} />
                <Route path="vendors" element={<VendorHelp />} />
                <Route path="corporates" element={<CorporateHelp />} />
                <Route path="requesters" element={<RequesterHelp />} />
              </Route>

              <Route path="/about" element={<About />} />
              <Route path="/contact" element={<Contact />} />
              <Route path="/privacy" element={<Privacy />} />
              <Route path="/terms" element={<Terms />} />
              <Route path="/security" element={<Security />} />

              <Route path="*" element={<Navigate to="/" replace />} />
            </Route>
          </Routes>
        </Suspense>
      </Router>
    </HelmetProvider>
  );
};

export default App;
