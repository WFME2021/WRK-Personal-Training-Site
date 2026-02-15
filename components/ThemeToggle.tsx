
import React from 'react';
import { Moon, Sun } from 'lucide-react';
import { useTheme } from '../context/ThemeContext';

export const ThemeToggle: React.FC = () => {
  const { theme, toggleTheme } = useTheme();

  return (
    <button
      onClick={toggleTheme}
      className="p-2 rounded-full text-text-primary hover:bg-secondary border border-transparent hover:border-border transition-all duration-300"
      aria-label="Toggle Theme"
    >
      {theme === 'dark' ? (
        <Sun size={20} className="text-accent" />
      ) : (
        <Moon size={20} className="text-text-secondary hover:text-accent" />
      )}
    </button>
  );
};
