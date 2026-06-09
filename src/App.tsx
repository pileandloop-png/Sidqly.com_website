import { BrowserRouter, Routes, Route } from 'react-router-dom';
import PublicLayout from './components/PublicLayout';

// Core Pages
import WhySidqly from './pages/WhySidqly';
import TrustAndDignity from './pages/TrustAndDignity';
import ProofTrustEngine from './pages/ProofTrustEngine';
import VerifiedGiving from './pages/VerifiedGiving';
import ManualPaymentReview from './pages/ManualPaymentReview';
import DonorSafeImpact from './pages/DonorSafeImpact';
import CorporateReporting from './pages/CorporateReporting';
import ZakatFundSeparation from './pages/ZakatFundSeparation';

// Industry Pages
import QurbaniManagement from './pages/QurbaniManagement';
import RamadanManagement from './pages/RamadanManagement';
import CharityRequestManagement from './pages/CharityRequestManagement';
import VendorFulfillmentPlatform from './pages/VendorFulfillmentPlatform';
import IslamicCharitySoftware from './pages/IslamicCharitySoftware';
import MosqueDonationManagement from './pages/MosqueDonationManagement';

// Comparison Pages
import WhatsappExcel from './pages/alternatives/WhatsappExcel';
import BasicDonationForm from './pages/compare/BasicDonationForm';
import MosqueWebsiteCompare from './pages/compare/MosqueWebsite';
import GenericCRMCompare from './pages/compare/GenericCRM';
import ManualSpreadsheetsCompare from './pages/compare/ManualSpreadsheets';

// Resource Pages
import Resources from './pages/resources/Resources';
import IslamicGivingOps from './pages/resources/IslamicGivingOps';
import DonorTrust from './pages/resources/DonorTrust';
import ProofPrivacy from './pages/resources/ProofPrivacy';
import ZakatOps from './pages/resources/ZakatOps';
import QurbaniOps from './pages/resources/QurbaniOps';
import CorporateCSRZakat from './pages/resources/CorporateCSRZakat';

function App() {
  return (
    <BrowserRouter>
      <PublicLayout>
        <Routes>
          <Route path="/" element={<WhySidqly />} />
          <Route path="/why-sidqly" element={<WhySidqly />} />
          <Route path="/trust-and-dignity" element={<TrustAndDignity />} />
          <Route path="/proof-trust-engine" element={<ProofTrustEngine />} />
          <Route path="/verified-giving" element={<VerifiedGiving />} />
          <Route path="/manual-payment-review" element={<ManualPaymentReview />} />
          <Route path="/donor-safe-impact" element={<DonorSafeImpact />} />
          <Route path="/corporate-reporting" element={<CorporateReporting />} />
          <Route path="/zakat-fund-separation" element={<ZakatFundSeparation />} />

          <Route path="/qurbani-management-software" element={<QurbaniManagement />} />
          <Route path="/ramadan-donation-management" element={<RamadanManagement />} />
          <Route path="/charity-request-management" element={<CharityRequestManagement />} />
          <Route path="/vendor-fulfillment-platform" element={<VendorFulfillmentPlatform />} />
          <Route path="/islamic-charity-software" element={<IslamicCharitySoftware />} />
          <Route path="/mosque-donation-management" element={<MosqueDonationManagement />} />

          <Route path="/alternatives/whatsapp-excel" element={<WhatsappExcel />} />
          <Route path="/compare/basic-donation-form" element={<BasicDonationForm />} />
          <Route path="/compare/mosque-website" element={<MosqueWebsiteCompare />} />
          <Route path="/compare/generic-crm" element={<GenericCRMCompare />} />
          <Route path="/compare/manual-spreadsheets" element={<ManualSpreadsheetsCompare />} />

          <Route path="/resources" element={<Resources />} />
          <Route path="/resources/islamic-giving-operations" element={<IslamicGivingOps />} />
          <Route path="/resources/donor-trust" element={<DonorTrust />} />
          <Route path="/resources/proof-and-privacy" element={<ProofPrivacy />} />
          <Route path="/resources/zakat-operations" element={<ZakatOps />} />
          <Route path="/resources/qurbani-operations" element={<QurbaniOps />} />
          <Route path="/resources/corporate-csr-zakat" element={<CorporateCSRZakat />} />
        </Routes>
      </PublicLayout>
    </BrowserRouter>
  );
}

export default App;
