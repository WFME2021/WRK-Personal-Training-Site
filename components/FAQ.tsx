
import React, { useState } from 'react';
import { Plus, Minus } from 'lucide-react';

interface FAQItem {
  question: string;
  answer: string;
}

interface FAQProps {
  items: FAQItem[];
  title?: string;
}

export const FAQ: React.FC<FAQProps> = ({ items, title = "Frequently Asked Questions" }) => {
  const [openIndex, setOpenIndex] = useState<number | null>(0);

  const toggle = (index: number) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  // Generate FAQ Schema
  const schema = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    "mainEntity": items.map(item => ({
      "@type": "Question",
      "name": item.question,
      "acceptedAnswer": {
        "@type": "Answer",
        "text": item.answer
      }
    }))
  };

  return (
    <section className="py-20 px-6 bg-primary border-t border-border transition-colors duration-300">
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }} />
      
      <div className="max-w-3xl mx-auto">
        <h2 className="font-display text-3xl md:text-4xl font-bold mb-12 text-text-primary">{title}</h2>
        
        <div className="space-y-4">
          {items.map((item, index) => (
            <div key={index} className="border border-border rounded-2xl overflow-hidden bg-secondary transition-all duration-300 hover:border-accent/50">
              <button 
                onClick={() => toggle(index)}
                className="w-full flex items-center justify-between p-6 text-left transition-colors hover:bg-primary"
              >
                <span className="font-bold text-lg text-text-primary pr-8">{item.question}</span>
                <span className={`p-2 rounded-full transition-colors ${openIndex === index ? 'bg-accent text-white' : 'bg-primary text-text-secondary'}`}>
                  {openIndex === index ? <Minus size={16} /> : <Plus size={16} />}
                </span>
              </button>
              
              <div 
                className={`overflow-hidden transition-all duration-300 ease-in-out ${
                  openIndex === index ? 'max-h-96 opacity-100' : 'max-h-0 opacity-0'
                }`}
              >
                <div className="p-6 pt-0 text-text-secondary leading-relaxed border-t border-border/50 mt-2">
                  {item.answer}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
