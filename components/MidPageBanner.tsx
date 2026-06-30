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
    <section className={`px-4 md:px-8 my-24 md:my-32 ${className}`}>
      <div className={`relative h-[60vh] md:h-[70vh] max-w-[1800px] mx-auto flex items-center justify-center overflow-hidden rounded-[2rem] md:rounded-[3rem]`}>
        {/* Background Image */}
        <div className="absolute inset-0 z-0">
          <img referrerPolicy="no-referrer" 
            src={image} 
            alt={tagline} 
            className="w-full h-full object-cover grayscale contrast-125 object-center"
            loading="lazy"
          />
          {/* Dark Overlay */}
          <div className="absolute inset-0 bg-black/50"></div>
        </div>

        {/* Content */}
        <div className="relative z-10 max-w-5xl mx-auto px-6 md:px-16 text-center flex flex-col items-center justify-center h-full">
          <h2 className="font-display text-[8vw] md:text-[5vw] leading-[1.25] uppercase text-white mb-8">
            {tagline}
          </h2>
          
          {support && (
            <p className="text-lg md:text-2xl text-white/90 font-medium leading-relaxed max-w-3xl mx-auto">
              {support}
            </p>
          )}
        </div>
      </div>
    </section>
  );
};
