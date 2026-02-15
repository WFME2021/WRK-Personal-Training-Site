
import React from 'react';

interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: 'primary' | 'secondary' | 'outline' | 'black';
  size?: 'sm' | 'md' | 'lg';
  fullWidth?: boolean;
}

export const Button: React.FC<ButtonProps> = ({ 
  children, 
  variant = 'primary', 
  size = 'md',
  fullWidth = false, 
  className = '',
  ...props 
}) => {
  const baseStyles = "inline-flex items-center justify-center font-bold uppercase tracking-widest font-display rounded-full transition-all duration-300 focus:outline-none focus:ring-2 focus:ring-offset-2 disabled:opacity-50 disabled:cursor-not-allowed transform hover:-translate-y-1";
  
  const sizeStyles = {
    sm: "px-6 py-2.5 text-xs",
    md: "px-8 py-4 text-sm",
    lg: "px-10 py-5 text-base"
  };

  const variants = {
    // Primary: Accent BG, White Text (High Contrast in both modes)
    primary: "bg-accent text-white hover:bg-text-primary hover:text-primary border border-transparent shadow-lg",
    
    // Black: Alias for specific dark action, uses text-primary in dark mode (white), dark in light
    black: "bg-text-primary text-primary hover:bg-accent hover:text-white border border-transparent shadow-lg",

    // Secondary: Secondary BG (Cards), Text Primary
    secondary: "bg-secondary text-text-primary hover:bg-accent hover:text-white border border-border hover:border-accent shadow-md",
    
    // Outline: Border only
    outline: "border-2 border-text-primary text-text-primary hover:bg-text-primary hover:text-primary"
  };

  return (
    <button 
      className={`${baseStyles} ${sizeStyles[size]} ${variants[variant]} ${fullWidth ? 'w-full' : ''} ${className}`}
      {...props}
    >
      {children}
    </button>
  );
};
