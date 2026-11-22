
import React from 'react';

interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: 'primary' | 'secondary' | 'outline' | 'text';
  size?: 'sm' | 'md' | 'lg';
  fullWidth?: boolean;
}

export const Button: React.FC<ButtonProps> = ({ 
  children, 
  variant = 'primary', 
  size = 'md',
  fullWidth = false, 
  className = '',
  disabled,
  ...props 
}) => {
  const baseStyles = "inline-flex items-center justify-center font-semibold tracking-wide rounded-2xl transition-all duration-300 ease-in-out focus:outline-none focus:ring-2 focus:ring-forest/40 disabled:opacity-60 disabled:cursor-not-allowed";
  
  const sizeStyles = {
    sm: "px-5 py-3 text-sm",
    md: "px-7 py-4 text-base",
    lg: "px-8 py-5 text-base" 
  };

  const variants = {
    primary: "bg-citron text-forest hover:brightness-95 border border-forest/20 hover:shadow-md hover:-translate-y-0.5",
    secondary: "bg-quiet text-forest hover:bg-forest/10 border border-forest/15 hover:-translate-y-0.5",
    outline: "bg-transparent border border-forest/30 text-forest hover:bg-quiet hover:border-forest hover:-translate-y-0.5",
    text: "text-forest text-sm hover:opacity-80 p-0 border-none bg-transparent hover:after:w-full relative after:absolute after:bottom-[-2px] after:left-0 after:h-[1px] after:w-0 after:bg-forest after:transition-all after:duration-300"
  };

  const widthClass = fullWidth ? 'w-full' : 'w-full md:w-auto';

  return (
    <button 
      className={`${baseStyles} ${variant !== 'text' ? sizeStyles[size] : ''} ${variants[variant]} ${widthClass} ${className}`}
      disabled={disabled}
      {...props}
    >
      {children}
    </button>
  );
};
