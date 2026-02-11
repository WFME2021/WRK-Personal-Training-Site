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
    // Primary: Black BG, White Text (Dominant)
    primary: "bg-brand-black text-white hover:bg-brand-orange hover:text-white border border-transparent shadow-lg",
    
    // Black: Alias for Primary
    black: "bg-brand-black text-white hover:bg-brand-orange hover:text-white border border-transparent shadow-lg",

    // Secondary: Orange BG
    secondary: "bg-brand-orange text-white hover:bg-brand-black hover:text-white border border-transparent shadow-md",
    
    // Outline: Black Border
    outline: "border-2 border-brand-black text-brand-black hover:bg-brand-black hover:text-white"
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