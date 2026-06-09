import React from 'react';
import { ChevronDown, ChevronUp } from 'lucide-react';

interface FAQ {
  question: string;
  answer: React.ReactNode;
}

interface FAQAccordionProps {
  faqs: FAQ[];
}

const FAQAccordion = ({ faqs }: FAQAccordionProps) => {
  const [openIndex, setOpenIndex] = React.useState<number | null>(null);

  const toggle = (index: number) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <div className="space-y-4 max-w-4xl mx-auto">
      {faqs.map((faq, index) => (
        <div
          key={index}
          className="border border-gray-100 rounded-2xl overflow-hidden bg-white shadow-sm hover:shadow-md transition-shadow"
        >
          <button
            onClick={() => toggle(index)}
            className="w-full flex items-center justify-between p-6 text-left focus:outline-none"
          >
            <span className="font-semibold text-secondary pr-8">{faq.question}</span>
            {openIndex === index ? (
              <ChevronUp className="h-5 w-5 text-primary shrink-0" />
            ) : (
              <ChevronDown className="h-5 w-5 text-gray-400 shrink-0" />
            )}
          </button>
          <div
            className={`px-6 overflow-hidden transition-all duration-300 ${
              openIndex === index ? 'pb-6 max-h-96' : 'max-h-0'
            }`}
          >
            <div className="text-gray-600 leading-relaxed text-sm">
              {faq.answer}
            </div>
          </div>
        </div>
      ))}
    </div>
  );
};

export default FAQAccordion;
