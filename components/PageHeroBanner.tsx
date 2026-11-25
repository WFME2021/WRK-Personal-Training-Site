import React, { useEffect, useState } from 'react';

interface PageHeroBannerProps {
  imageSrc: string;
  fallbackImageSrc?: string;
  imageAlt: string;
  imagePositionClass?: string;
  eyebrow?: React.ReactNode;
  title: React.ReactNode;
  subtitle?: React.ReactNode;
  align?: 'left' | 'center';
  compact?: boolean;
  maxWidthClass?: string;
  contentMaxWidthClass?: string;
  rightSlot?: React.ReactNode;
  children?: React.ReactNode;
}

export const PageHeroBanner: React.FC<PageHeroBannerProps> = ({
  imageSrc,
  fallbackImageSrc = '/images/banner-coaching.jpg',
  imageAlt,
  imagePositionClass = 'object-center',
  eyebrow,
  title,
  subtitle,
  align = 'left',
  compact = false,
  maxWidthClass = 'max-w-6xl',
  contentMaxWidthClass,
  rightSlot,
  children,
}) => {
  const [activeSrc, setActiveSrc] = useState(imageSrc);
  const [imageFailed, setImageFailed] = useState(false);

  useEffect(() => {
    setActiveSrc(imageSrc);
    setImageFailed(false);
  }, [imageSrc]);

  const handleImageError = () => {
    if (fallbackImageSrc && activeSrc !== fallbackImageSrc) {
      setActiveSrc(fallbackImageSrc);
    } else {
      setImageFailed(true);
    }
  };

  const isCentered = align === 'center' && !rightSlot;

  const heightAndPaddingClass = compact
    ? 'min-h-[240px] md:min-h-[300px] pt-20 pb-10 md:pt-28 md:pb-12'
    : 'min-h-[380px] md:min-h-[460px] pt-24 pb-12 md:pt-32 md:pb-16';

  const scrimClass = isCentered
    ? 'bg-gradient-to-b from-forest-deep/90 via-forest/80 to-forest-deep/90'
    : 'bg-gradient-to-r from-forest-deep/95 via-forest/85 to-forest/70 md:to-forest/45';

  const textWrapClass =
    contentMaxWidthClass ||
    (isCentered ? 'max-w-3xl mx-auto text-center' : 'max-w-2xl text-left');

  return (
    <section
      className={`relative bg-forest overflow-hidden flex items-center -mt-14 md:-mt-20 ${heightAndPaddingClass}`}
    >
      {!imageFailed && activeSrc && (
        <img
          src={activeSrc}
          alt={imageAlt}
          referrerPolicy="no-referrer"
          onError={handleImageError}
          className={`absolute inset-0 w-full h-full object-cover ${imagePositionClass} z-0`}
        />
      )}
      <div
        className={`absolute inset-0 ${scrimClass} z-10 pointer-events-none`}
        aria-hidden="true"
      />

      <div className={`relative z-20 w-full ${maxWidthClass} mx-auto px-4 sm:px-6 lg:px-8`}>
        {rightSlot ? (
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-center">
            <div className="lg:col-span-7 text-left">
              {eyebrow && (
                <div className="text-cream/85 text-[11px] sm:text-xs font-semibold tracking-wider sm:tracking-[0.18em] uppercase leading-snug mb-3">
                  {eyebrow}
                </div>
              )}
              <h1 className="font-serif text-3xl sm:text-4xl md:text-5xl text-cream tracking-tight leading-[1.12] text-balance mb-4">
                {title}
              </h1>
              {subtitle && (
                <div className="text-cream/90 text-sm sm:text-lg leading-relaxed max-w-2xl">
                  {subtitle}
                </div>
              )}
              {children}
            </div>
            <div className="lg:col-span-5">{rightSlot}</div>
          </div>
        ) : (
          <div className={textWrapClass}>
            {eyebrow && (
              <div className="text-cream/85 text-[11px] sm:text-xs font-semibold tracking-wider sm:tracking-[0.18em] uppercase leading-snug mb-3">
                {eyebrow}
              </div>
            )}
            <h1 className="font-serif text-3xl sm:text-4xl md:text-5xl text-cream tracking-tight leading-[1.12] text-balance mb-4">
              {title}
            </h1>
            {subtitle && (
              <div
                className={`text-cream/90 text-sm sm:text-lg leading-relaxed ${
                  isCentered ? 'max-w-2xl mx-auto' : 'max-w-2xl'
                }`}
              >
                {subtitle}
              </div>
            )}
            {children}
          </div>
        )}
      </div>
    </section>
  );
};
