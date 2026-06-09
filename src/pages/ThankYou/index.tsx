import React from 'react';
import { Link } from 'react-router-dom';
import { Button } from '../../components/ui/Button';
import { Mail, ArrowRight } from 'lucide-react';
import { SEO } from '../../seo/SEO';

interface ThankYouPageProps {
  title?: string;
  showPayment?: boolean;
}

const ThankYouPage: React.FC<ThankYouPageProps> = ({
  title = "Thank you for your interest in Sidqly.",
  showPayment = false
}) => {
  return (
    <div className="max-w-3xl mx-auto px-4 py-12 md:py-20 text-center">
      <SEO
        title="Thank You"
        description="Your inquiry has been prepared."
        noindex={true}
      />
      <div className="mb-8 flex justify-center">
        <div className="h-20 w-20 bg-sidqly-secondary rounded-full flex items-center justify-center">
          <Mail className="h-10 w-10 text-sidqly-primary" />
        </div>
      </div>

      <h1 className="text-3xl md:text-4xl font-bold text-gray-900 mb-6">{title}</h1>

      <div className="space-y-6 text-lg text-gray-600 mb-10 max-w-2xl mx-auto leading-relaxed">
        <p>
          If your email app opened, please review and <strong>send the prepared message</strong> to team@sidqly.com.
        </p>
        <p>
          If it did not open, you can email us directly at <a href="mailto:team@sidqly.com" className="text-sidqly-primary font-bold hover:underline">team@sidqly.com</a> with your organization name, contact details, interested plan, and the problem you want Sidqly to solve.
        </p>
      </div>

      {showPayment && (
        <div className="mb-10 p-6 bg-sidqly-secondary rounded-xl border border-sidqly-primary/10">
          <p className="font-bold text-sidqly-primary mb-2">Ready to proceed with payment?</p>
          <p className="text-sm text-gray-700 mb-4">You can find our official Easypaisa details on our pricing and inquiry pages.</p>
          <Link to="/plan-inquiry">
            <Button variant="outline">View Payment Details</Button>
          </Link>
        </div>
      )}

      <div className="flex flex-wrap justify-center gap-4 border-t pt-10">
        <Link to="/pricing">
          <Button variant="ghost" className="flex items-center">
            View Pricing <ArrowRight className="ml-2 h-4 w-4" />
          </Button>
        </Link>
        <Link to="/faqs">
          <Button variant="ghost" className="flex items-center">
            Read FAQs <ArrowRight className="ml-2 h-4 w-4" />
          </Button>
        </Link>
        <Link to="/">
          <Button variant="ghost" className="flex items-center">
            Back to Home <ArrowRight className="ml-2 h-4 w-4" />
          </Button>
        </Link>
      </div>
    </div>
  );
};

export default ThankYouPage;
