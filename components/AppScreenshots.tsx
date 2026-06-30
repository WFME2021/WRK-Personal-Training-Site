import React from 'react';

const SCREENSHOTS = [
  { src: "https://i.postimg.cc/tCGRmr4y/IMG-1925.png", alt: "Exercise Videos & Form" },
  { src: "https://i.postimg.cc/8PgknyPK/IMG-1931.png", alt: "Exercise History & Tracking" },
  { src: "https://i.postimg.cc/L6F40y6r/IMG-1927.png", alt: "Macro Tracking" },
  { src: "https://i.postimg.cc/3JQrbLxM/IMG-1928.png", alt: "Daily Habit Tracking" },
  { src: "https://i.postimg.cc/Hs1WPSsF/IMG-1929.png", alt: "Progress Tracking" },
  { src: "https://i.postimg.cc/SNbQtZN3/IMG-1930.png", alt: "Recipe Database" },
  { src: "https://i.postimg.cc/CLpM6vLv/IMG-1932.png", alt: "Barcode Scanner" },
  { src: "https://i.postimg.cc/bNfYF6NF/IMG-1933.png", alt: "Celebrating Wins" }
];

export const AppScreenshots: React.FC<{ limit?: number, className?: string }> = ({ limit, className = "" }) => {
  const displayShots = limit ? SCREENSHOTS.slice(0, limit) : SCREENSHOTS;
  
  return (
    <div className={`grid grid-cols-2 md:grid-cols-4 gap-4 ${className}`}>
      {displayShots.map((shot, i) => (
        <div key={i} className="relative rounded-2xl overflow-hidden border border-border shadow-lg group">
          <img referrerPolicy="no-referrer" 
            src={shot.src} 
            alt={shot.alt} 
            className="w-full h-auto object-cover transform group-hover:scale-105 transition-transform duration-500"
            loading="lazy"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-end p-4">
            <span className="text-white text-xs font-bold uppercase tracking-wider">{shot.alt}</span>
          </div>
        </div>
      ))}
    </div>
  );
};
