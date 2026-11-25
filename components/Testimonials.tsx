import React from 'react';
import { Quote } from 'lucide-react';

interface TestimonialItem {
  tag: string;
  quote: string;
  name: string;
  role: string;
}

const testimonials: TestimonialItem[] = [
  {
    tag: '20+ Years Coaching · Long-Term Health',
    quote:
      "\"I've been training with Hayden as my personal trainer for over 20 years now. Over the past two decades, Hayden has adapted and changed the way I train to meet the changes in my body and goals. His personal care, commitment, and expertise in the industry is equal to any health professional and has been an invaluable investment in my long-term wellbeing.\"",
    name: 'Jeff Kerkhofs',
    role: 'Verified Client · 20+ Year Partnership',
  },
  {
    tag: '10+ Years Coaching · Injury & Health Recovery',
    quote:
      "\"I've trained with Hayden for over 10 years. He’s incredibly knowledgeable about the human body and takes the time to understand your personal concerns. He’s helped me recover from multiple injuries and health issues along the way, always adjusting my programme to keep me safe and moving forward. Highly recommend Hayden to anyone looking for a trainer who genuinely cares about your long-term health.\"",
    name: 'Melanie Grace',
    role: 'Verified Client · 10+ Year Partnership',
  },
  {
    tag: 'Low-Intimidation Environment',
    quote:
      '"What a gem of a training space and personal trainer. The atmosphere is 100% supportive with zero judgement. Trainers, equipment, and the people coming here are pure gold."',
    name: 'Katie Roggisch',
    role: 'Boutique In-Person Client',
  },
  {
    tag: 'Boutique Setting & Coaching',
    quote:
      '"I’ve been training with Hayden for years and he continually brings ingenuity to our sessions, making each one unique and purposeful. The facility has an exclusive, welcoming feel—clean, modern, full of natural light, and parking is effortless."',
    name: 'Susannah Kenton',
    role: 'Long-Term Coaching Client',
  },
];

export const Testimonials: React.FC<{ className?: string; contextBridge?: string }> = ({
  className = '',
  contextBridge,
}) => {
  return (
    <section className={`py-20 px-4 md:px-8 bg-cream border-t border-forest/10 ${className}`}>
      <div className="max-w-6xl mx-auto">
        {/* Section Header */}
        <div className="max-w-3xl">
          <span className="text-xs uppercase tracking-[0.2em] font-sans text-forest/75 font-semibold mb-3 block">
            CLIENT FEEDBACK
          </span>
          <h2 className="font-serif text-3xl sm:text-4xl text-forest font-bold tracking-tight mb-4 text-balance">
            What Real Coaching Support Feels Like.
          </h2>
          <p className="text-forest/80 max-w-2xl text-base leading-relaxed">
            In their own words—from Christchurch clients who have trained with Hayden for years in a calm, supportive space.
          </p>
          {contextBridge && (
            <p className="mt-4 p-4 rounded-xl bg-quiet border border-forest/15 text-forest text-sm md:text-base leading-relaxed">
              {contextBridge}
            </p>
          )}
        </div>

        {/* Testimonials Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 max-w-6xl mx-auto mt-10">
          {testimonials.map((item, idx) => (
            <div
              key={idx}
              className="bg-quiet border border-forest/15 rounded-2xl p-6 sm:p-8 flex flex-col justify-between shadow-sm"
            >
              <div>
                <div className="flex items-center justify-between gap-3 mb-4">
                  <span className="text-[11px] font-semibold uppercase tracking-wider text-forest/70">
                    {item.tag}
                  </span>
                  <Quote size={18} className="text-forest/25 shrink-0" aria-hidden="true" />
                </div>
                <blockquote className="text-forest/85 text-sm sm:text-base leading-relaxed m-0 font-normal">
                  {item.quote}
                </blockquote>
              </div>
              <div className="pt-5 border-t border-forest/10 mt-6">
                <div className="font-serif font-bold text-forest text-base">
                  {item.name}
                </div>
                <div className="text-xs text-forest/65 mt-0.5 font-medium">
                  {item.role}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
