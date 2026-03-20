import React from 'react';

const SCREENSHOTS = [
  { src: "/images/exercise-videos.png", alt: "Exercise Videos & Form" },
  { src: "/images/exercise-history.png", alt: "Exercise History & Tracking" },
  { src: "/images/macro-tracking-app.jpg", alt: "Macro Tracking" },
  { src: "/images/habit-tracking.png", alt: "Daily Habit Tracking" },
  { src: "/images/fat-loss-tracking.png", alt: "Progress Tracking" },
  { src: "/images/recipe-tracking.png", alt: "Recipe Database" },
  { src: "/images/barcode-scanner.png", alt: "Barcode Scanner" },
  { src: "/images/celebrating-wins.png", alt: "Celebrating Wins" }
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
