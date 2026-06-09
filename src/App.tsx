import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { SEOProvider } from './seo/SEO';
import Home from './pages/Home';
import Pricing from './pages/Pricing';
import FAQs from './pages/FAQs';
import Features from './pages/Features';
import Solutions from './pages/Solutions';
import BookDemo from './pages/BookDemo';
import ContactSales from './pages/ContactSales';
import StartPilot from './pages/StartPilot';
import PlanInquiry from './pages/PlanInquiry';
import DemoThankYou from './pages/ThankYou/Demo';
import ContactThankYou from './pages/ThankYou/Contact';
import PilotThankYou from './pages/ThankYou/Pilot';
import PricingThankYou from './pages/ThankYou/Pricing';
import ThankYouPage from './pages/ThankYou/index';

function App() {
  return (
    <SEOProvider>
    <Router>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/pricing" element={<Pricing />} />
        <Route path="/faqs" element={<FAQs />} />
        <Route path="/features" element={<Features />} />
        <Route path="/solutions" element={<Solutions />} />
        <Route path="/book-demo" element={<BookDemo />} />
        <Route path="/contact-sales" element={<ContactSales />} />
        <Route path="/start-pilot" element={<StartPilot />} />
        <Route path="/plan-inquiry" element={<PlanInquiry />} />
        <Route path="/thank-you" element={<ThankYouPage />} />
        <Route path="/thank-you/demo" element={<DemoThankYou />} />
        <Route path="/thank-you/contact" element={<ContactThankYou />} />
        <Route path="/thank-you/pilot" element={<PilotThankYou />} />
        <Route path="/thank-you/pricing" element={<PricingThankYou />} />
      </Routes>
    </Router>
    </SEOProvider>
  );
}

export default App;
