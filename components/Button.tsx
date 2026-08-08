
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
  const baseStyles = "inline-flex items-center justify-center font-semibold tracking-wide rounded-2xl transition-all duration-300 ease-in-out focus:outline-none focus:ring-2 focus:ring-teal-500/50 disabled:opacity-70 disabled:cursor-not-allowed";
  
  const sizeStyles = {
    sm: "px-5 py-3 text-sm",
    md: "px-7 py-4 text-base",
    lg: "px-8 py-5 text-base" 
  };

  const variants = {
    primary: "bg-teal-600 text-white hover:bg-teal-500 hover:shadow-lg hover:shadow-teal-900/30 hover:-translate-y-1",
    secondary: "bg-neutral-800 text-neutral-100 hover:bg-neutral-700 hover:shadow-lg hover:shadow-black/20 hover:-translate-y-1",
    outline: "bg-transparent border-2 border-neutral-700 text-neutral-100 hover:border-teal-500 hover:bg-neutral-800 hover:-translate-y-1",
    text: "text-teal-400 text-sm hover:text-teal-300 p-0 border-none bg-transparent hover:after:w-full relative after:absolute after:bottom-[-2px] after:left-0 after:h-[1px] after:w-0 after:bg-teal-300 after:transition-all after:duration-300"
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
