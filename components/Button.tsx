
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
  ...props 
}) => {
  const baseStyles = "inline-flex items-center justify-center font-bold tracking-wide rounded-[8px] transition-all duration-300 focus:outline-none focus:ring-2 focus:ring-accent/50 disabled:opacity-50 disabled:cursor-not-allowed uppercase";
  
  const sizeStyles = {
    sm: "px-5 py-3 text-[13px] md:text-[14px]",
    md: "px-7 py-4.5 md:py-4 text-[15px] md:text-[16px]",
    lg: "px-8 py-5 md:py-5 text-[15px] md:text-[16px]" 
  };

  const variants = {
    primary: "bg-orange-burnt text-white hover:bg-orange-hover hover:shadow-lg hover:shadow-orange-burnt/20 hover:-translate-y-[2px]",
    secondary: "bg-white text-navy hover:bg-off-white hover:shadow-lg hover:shadow-black/10 hover:-translate-y-[2px]",
    outline: "bg-transparent border-[2px] border-white/30 text-white hover:border-white hover:bg-white/5",
    text: "text-orange-burnt tracking-[0.1em] text-[13px] hover:text-orange-hover p-0 border-none bg-transparent hover:after:w-full relative after:absolute after:bottom-[-2px] after:left-0 after:h-[1px] after:w-0 after:bg-orange-hover after:transition-all after:duration-300"
  };

  const widthClass = fullWidth ? 'w-full' : 'w-full md:w-auto';

  return (
    <button 
      className={`${baseStyles} ${variant !== 'text' ? sizeStyles[size] : ''} ${variants[variant]} ${widthClass} ${className}`}
      {...props}
    >
      {children}
    </button>
  );
};
