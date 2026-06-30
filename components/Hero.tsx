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
  disableGrayscale?: boolean;
  secondaryCta?: {
    label: string;
    href?: string;
    onClick?: () => void;
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
  disableGrayscale = false,
  secondaryCta
}) => {
  return (
    <section className={`relative pt-16 md:pt-24 pb-12 px-4 md:px-8 text-center flex flex-col items-center ${className}`}>
      {eyebrow && (
        <span className="text-text-secondary font-semibold uppercase tracking-[0.2em] text-xs mb-8 block">
          {eyebrow}
        </span>
      )}
      <h1 
        className="font-display text-[12vw] md:text-[8vw] leading-[1.25] uppercase text-text-primary max-w-7xl mb-12"
        dangerouslySetInnerHTML={{ __html: title }}
      />
      
      <div className="w-full max-w-[1800px] h-[60vh] md:h-[75vh] mx-auto relative rounded-[2rem] md:rounded-[3rem] overflow-hidden">
        <img 
          src={image} 
          alt="Hero background" 
          className={`w-full h-full object-cover object-center ${disableGrayscale ? '' : 'grayscale contrast-125'}`}
          referrerPolicy="no-referrer"
        />
        <div className="absolute inset-0 bg-black/40"></div>
        
        {/* Overlay Text Container */}
        <div className="absolute inset-0 p-8 md:p-16 flex flex-col justify-center sm:justify-end md:justify-center items-center sm:items-start text-center sm:text-left">
          <div className="max-w-xl w-full">
            {kicker && (
              <span className="text-accent bg-accent/20 border border-accent rounded-full px-4 py-1.5 text-xs font-bold uppercase tracking-widest mb-6 inline-flex">
                {kicker}
              </span>
            )}
            
            <p className="text-white/90 text-xl font-medium mb-8 leading-snug">
              {subtitle}
            </p>

            {bullets && bullets.length > 0 && (
              <div className="flex flex-col gap-3 mb-8 text-white/80 font-medium text-sm sm:text-left text-center">
                {bullets.map((bullet, index) => (
                  <span key={index} className="flex items-center justify-center sm:justify-start">
                    <span className="w-1.5 h-1.5 bg-accent rounded-full mr-3 shrink-0"></span>
                    {bullet}
                  </span>
                ))}
              </div>
            )}
            
            <div className="flex flex-col sm:flex-row items-center gap-4">
              <Link to="/contact" className="w-full sm:w-auto">
                <Button 
                  size="lg" 
                  className="px-8 py-6 text-lg rounded-full w-full sm:w-auto uppercase tracking-widest font-black flex items-center justify-center gap-2 group"
                >
                  START NOW <ArrowRight size={20} className="group-hover:translate-x-1 transition-transform" />
                </Button>
              </Link>
              
              {secondaryCta ? (
                secondaryCta.href ? (
                  <Link to={secondaryCta.href} className="w-full sm:w-auto flex items-center justify-center gap-3 text-white hover:text-accent font-bold uppercase tracking-widest text-sm transition-colors mt-4 sm:mt-0">
                    <div className="w-12 h-12 rounded-full bg-white/20 flex items-center justify-center backdrop-blur-sm shrink-0">
                      <ArrowRight size={18} />
                    </div>
                    {secondaryCta.label}
                  </Link>
                ) : (
                  <button onClick={secondaryCta.onClick} className="w-full sm:w-auto flex items-center justify-center gap-3 text-white hover:text-accent font-bold uppercase tracking-widest text-sm transition-colors mt-4 sm:mt-0">
                    <div className="w-12 h-12 rounded-full bg-white/20 flex items-center justify-center backdrop-blur-sm shrink-0">
                      <ArrowRight size={18} />
                    </div>
                    {secondaryCta.label}
                  </button>
                )
              ) : (
                <Link to="/assessment" className="w-full sm:w-auto flex items-center justify-center gap-3 text-white hover:text-accent font-bold uppercase tracking-widest text-sm transition-colors mt-4 sm:mt-0">
                  <div className="w-12 h-12 rounded-full bg-white/20 flex items-center justify-center backdrop-blur-sm shrink-0">
                    <ArrowRight size={18} />
                  </div>
                  Take the Assessment
                </Link>
              )}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

