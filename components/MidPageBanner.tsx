import React from 'react';

interface MidPageBannerProps {
  image: string;
  tagline: string;
  support?: string;
  className?: string;
}

export const MidPageBanner: React.FC<MidPageBannerProps> = ({
  image,
  tagline,
  support,
  className = ''
}) => {
  return (
    <section className={`relative h-[60vh] md:h-[500px] flex items-center justify-center overflow-hidden my-24 ${className}`}>
      {/* Background Image */}
      <div className="absolute inset-0 z-0">
        <img 
          src={image} 
          alt={tagline} 
          className="w-full h-full object-cover grayscale contrast-125"
          loading="lazy"
        />
        {/* Dark Overlay */}
        <div className="absolute inset-0 bg-black/60"></div>
      </div>

      {/* Content */}
      <div className="relative z-10 max-w-4xl mx-auto px-6 text-center">
        <h2 className="font-display text-4xl md:text-6xl font-bold uppercase tracking-tighter text-white mb-6 leading-tight">
          {tagline}
        </h2>
        
        {support && (
          <p className="text-lg md:text-xl text-white/90 font-medium leading-relaxed max-w-2xl mx-auto">
            {support}
          </p>
        )}
      </div>
    </section>
  );
};
