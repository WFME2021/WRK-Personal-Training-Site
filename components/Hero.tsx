import React from 'react';
import { Link } from 'react-router-dom';
import { ArrowRight } from 'lucide-react';
import { Button } from './Button';

interface HeroProps {
  image: string;
  title: string;
  subtitle: string;
  bullets: string[];
  kicker?: string;
  eyebrow?: string;
  className?: string;
  secondaryCta?: {
    label: string;
    href: string;
  };
}

export const Hero: React.FC<HeroProps> = ({
  image,
  title,
  subtitle,
  bullets,
  kicker,
  eyebrow,
  className = '',
  secondaryCta
}) => {
  return (
    <section className={`relative min-h-[90vh] flex flex-col overflow-hidden ${className}`}>
      {/* Background Image */}
      <div className="absolute inset-0 z-0">
        <img 
          src={image} 
          alt={title} 
          className="w-full h-full object-cover grayscale contrast-125"
          loading="eager"
          referrerPolicy="no-referrer"
        />
        {/* Dark Overlay for Text Readability */}
        <div className="absolute inset-0 bg-black/60"></div>
        <div className="absolute inset-0 bg-gradient-to-t from-primary via-transparent to-transparent"></div>
      </div>

      {/* Content */}
      <div className="relative z-10 w-full max-w-[1800px] mx-auto px-4 md:px-8 text-center flex flex-col items-center py-24 md:py-32 my-auto">
          {eyebrow && (
            <span className="text-accent font-bold uppercase tracking-widest text-xs md:text-sm mb-6 block">
              {eyebrow}
            </span>
          )}
          <h1 
            className="font-display text-[12vw] md:text-[10vw] leading-[0.9] font-bold uppercase tracking-tighter text-white max-w-6xl mb-8"
            dangerouslySetInnerHTML={{ __html: title }}
          />
          
          <div className="max-w-3xl mx-auto space-y-8">
            <p className="text-lg md:text-2xl text-white/90 font-medium leading-relaxed">
              {subtitle}
            </p>
            
            {/* Micro-proof bullets */}
            {bullets && bullets.length > 0 && (
              <div className="flex flex-wrap justify-center gap-4 md:gap-8 text-white/70 text-sm font-medium uppercase tracking-wider">
                {bullets.map((bullet, index) => (
                  <span key={index} className="flex items-center">
                    <span className="w-1.5 h-1.5 bg-accent rounded-full mr-2"></span>
                    {bullet}
                  </span>
                ))}
              </div>
            )}
            
            <div className="flex flex-col md:flex-row gap-4 justify-center pt-4">
              <Link to="/contact">
                <Button variant="primary" className="px-10 py-5 text-lg shadow-xl hover:scale-105 transition-transform flex items-center">
                  Book a consult <ArrowRight size={20} className="ml-2" />
                </Button>
              </Link>
              {secondaryCta ? (
                <Link to={secondaryCta.href}>
                  <Button variant="outline" className="backdrop-blur-md bg-white/10 border-white/50 text-white hover:bg-white hover:text-black px-10 py-5 text-lg">
                    {secondaryCta.label}
                  </Button>
                </Link>
              ) : (
                <Link to="/assessment">
                  <Button variant="outline" className="backdrop-blur-md bg-white/10 border-white/50 text-white hover:bg-white hover:text-black px-10 py-5 text-lg">
                    Take the assessment
                  </Button>
                </Link>
              )}
            </div>

            {kicker && (
              <p className="text-base md:text-lg text-white/80 font-light leading-relaxed mt-4">
                {kicker}
              </p>
            )}
          </div>
      </div>
    </section>
  );
};

