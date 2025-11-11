import React from 'react';
import { ChevronDown } from 'lucide-react';

interface FAQItem {
  q: string;
  a: string;
}

interface FAQProps {
  faqs: FAQItem[];
  expandedFaq: number | null;
  onSetExpandedFaq: (index: number | null) => void;
}

export default function FAQ({ faqs, expandedFaq, onSetExpandedFaq }: FAQProps) {
  return (
    <section className="py-20 bg-gradient-to-b from-gray-50 to-white">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">
            Frequently Asked Questions
          </h2>
          <p className="text-xl text-gray-600">Everything you need to know about SeaMoss</p>
        </div>

        <div className="space-y-4">
          {faqs.map((faq, index) => (
            <div
              key={index}
              className="bg-white rounded-2xl shadow-md overflow-hidden border-2 border-gray-100 hover:border-emerald-200 transition"
            >
              <button
                onClick={() => onSetExpandedFaq(expandedFaq === index ? null : index)}
                className="w-full p-6 text-left flex items-center justify-between gap-4"
              >
                <span className="font-bold text-lg text-gray-900">{faq.q}</span>
                <ChevronDown
                  className={`w-6 h-6 text-emerald-600 flex-shrink-0 transition-transform ${
                    expandedFaq === index ? 'rotate-180' : ''
                  }`}
                />
              </button>
              {expandedFaq === index && (
                <div className="px-6 pb-6">
                  <p className="text-gray-700 leading-relaxed">{faq.a}</p>
                </div>
              )}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
