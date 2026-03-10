import React from 'react';

const SCREENSHOTS = [
  { src: "https://i.postimg.cc/WzHzvp7V/exercise-videos.png", alt: "Exercise Videos & Form" },
  { src: "https://i.postimg.cc/3w5FjthV/exercise-history.png", alt: "Exercise History & Tracking" },
  { src: "https://i.postimg.cc/YSrhwFz6/macro-tracking-app.jpg", alt: "Macro Tracking" },
  { src: "https://i.postimg.cc/XqmjPHVV/habit-tracking.png", alt: "Daily Habit Tracking" },
  { src: "https://i.postimg.cc/8CS5D0LN/fat-loss-tracking.png", alt: "Progress Tracking" },
  { src: "https://i.postimg.cc/ZRgR3MtP/recipe-tracking.png", alt: "Recipe Database" },
  { src: "https://i.postimg.cc/CLcHRbm3/barcode-scanner.png", alt: "Barcode Scanner" },
  { src: "https://i.postimg.cc/cHT6FBgH/celebrating-wins.png", alt: "Celebrating Wins" }
];

export const AppScreenshots: React.FC<{ limit?: number, className?: string }> = ({ limit, className = "" }) => {
  const displayShots = limit ? SCREENSHOTS.slice(0, limit) : SCREENSHOTS;
  
  return (
    <div className={`grid grid-cols-2 md:grid-cols-4 gap-4 ${className}`}>
      {displayShots.map((shot, i) => (
        <div key={i} className="relative rounded-2xl overflow-hidden border border-border shadow-lg group">
          <img 
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
