import React from 'react';
import { Quote } from 'lucide-react';

interface TestimonialItem {
  category: string;
  quote: string;
  author: string;
  subtitle: string;
}

const testimonials: TestimonialItem[] = [
  {
    category: "20+ Years Coaching · Long-Term Health",
    quote: "I've been training with Hayden as my personal trainer for over 20 years now. Over the past two decades, Hayden has adapted and changed the way I train to meet the changes in my body and goals. His personal care, commitment, and expertise in the industry is equal to any health professional and has been an invaluable investment in my long-term wellbeing.",
    author: "Jeff Kerkhofs",
    subtitle: "Verified Client · 20+ Year Partnership"
  },
  {
    category: "10+ Years Coaching · Injury & Health Recovery",
    quote: "I've trained with Hayden for over 10 years. He’s incredibly knowledgeable about the human body and takes the time to understand your personal concerns. He’s helped me recover from multiple injuries and health issues along the way, always adjusting my program to keep me safe and moving forward. Highly recommend Hayden to anyone looking for a trainer who genuinely cares about your long-term health.",
    author: "Melanie Grace",
    subtitle: "Verified Client · 10+ Year Partnership"
  },
  {
    category: "Low-Intimidation Environment",
    quote: "What a gem of a training space and personal trainer. The atmosphere is 100% supportive with zero judgment. Trainers, equipment, and the people coming here are pure gold.",
    author: "Katie Roggisch",
    subtitle: "Boutique In-Person Client"
  },
  {
    category: "Boutique Setting & Coaching",
    quote: "I’ve been training with Hayden for years and he continually brings ingenuity to our sessions, making each one unique and purposeful. The facility has an exclusive, welcoming feel—clean, modern, full of natural light, and parking is effortless.",
    author: "Susannah Kenton",
    subtitle: "Long-Term Coaching Client"
  }
];

export const Testimonials: React.FC<{ className?: string; contextBridge?: string }> = ({ 
  className = '',
  contextBridge
}) => {
  return (
    <section className={`py-20 px-4 md:px-8 bg-canvas border-t border-charcoal/5 ${className}`}>
      <div className="max-w-6xl mx-auto">
        {/* Section Header */}
        <div className="max-w-3xl">
          <span className="text-xs uppercase tracking-[0.2em] font-sans text-spruce-800 font-semibold mb-3 block">
            PROVEN COACHING FOUNDATIONS
          </span>
          <h2 className="font-serif text-3xl sm:text-4xl text-charcoal font-bold tracking-tight mb-4">
            Trusted for Over Two Decades.
          </h2>
          <p className="text-charcoal/75 max-w-2xl text-base leading-relaxed">
            Whether navigating clinical recovery, adapting around injuries, or establishing sustainable strength habits for life—real experiences from long-term clients working with Hayden.
          </p>
          {contextBridge && (
            <div className="mt-5 p-4 rounded-xl bg-sand-100 border-l-4 border-spruce-800 text-charcoal/90 text-sm md:text-base leading-relaxed italic">
              "{contextBridge}"
            </div>
          )}
        </div>

        {/* Testimonials Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 max-w-6xl mx-auto mt-12">
          {testimonials.map((item, idx) => (
            <div
              key={idx}
              className="bg-sand-50/70 border border-charcoal/10 rounded-2xl p-6 sm:p-8 flex flex-col justify-between shadow-sm hover:shadow-md transition-shadow relative"
            >
              <div>
                <div className="flex items-center justify-between mb-4">
                  <span className="bg-spruce-800/10 text-spruce-800 text-[11px] font-semibold uppercase tracking-wider px-3 py-1 rounded-full w-fit">
                    {item.category}
                  </span>
                  <Quote size={20} className="text-charcoal/20 shrink-0" aria-hidden="true" />
                </div>
                <blockquote className="text-charcoal/85 text-sm sm:text-base leading-relaxed m-0 font-normal italic">
                  "{item.quote}"
                </blockquote>
              </div>
              <div className="pt-6 border-t border-charcoal/5 mt-6">
                <div className="font-serif font-bold text-charcoal text-base">
                  {item.author}
                </div>
                <div className="text-xs text-charcoal/60 mt-0.5 font-medium">
                  {item.subtitle}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
