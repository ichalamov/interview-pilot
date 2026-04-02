import React from 'react';

function GradientButton({ 
  children, 
  onClick, 
  variant = 'primary', 
  size = 'md',
  disabled = false,
  className = '',
  icon: Icon
}) {
  const baseStyles = 'inline-flex items-center justify-center font-medium rounded-lg transition-all duration-200 cursor-pointer disabled:opacity-50 disabled:cursor-not-allowed';
  
  const variants = {
    primary: 'bg-gradient-primary text-navy-900 hover:shadow-glow hover:-translate-y-0.5',
    secondary: 'bg-navy-750 text-cyan-400 border border-cyan-800/30 hover:border-cyan-700/50 hover:bg-navy-700',
    ghost: 'text-gray-400 hover:text-white hover:bg-navy-750',
    outline: 'bg-transparent text-cyan-400 border border-cyan-800/30 hover:border-cyan-700/50',
  };

  const sizes = {
    sm: 'px-3 py-1.5 text-sm',
    md: 'px-5 py-2.5 text-base',
    lg: 'px-8 py-3.5 text-lg',
  };

  return (
    <button
      onClick={onClick}
      disabled={disabled}
      className={`${baseStyles} ${variants[variant]} ${sizes[size]} ${className}`}
    >
      {Icon && <Icon className="w-5 h-5 mr-2" />}
      {children}
    </button>
  );
}

export default GradientButton;
