import React from 'react';

function Card({ 
  children, 
  className = '', 
  hover = true,
  glow = false,
  gradient = true
}) {
  const baseStyles = 'rounded-xl p-6 transition-all duration-200';
  
  const gradientBg = gradient 
    ? 'bg-gradient-to-b from-cyan-900/5 to-transparent' 
    : 'bg-navy-800';
  
  const borderStyles = 'border border-cyan-900/20';
  
  const hoverStyles = hover 
    ? 'hover:border-cyan-800/40 hover:shadow-card-hover hover:-translate-y-0.5' 
    : '';
  
  const glowStyles = glow ? 'glow' : '';

  return (
    <div className={`${baseStyles} ${gradientBg} ${borderStyles} ${hoverStyles} ${glowStyles} ${className}`}>
      {children}
    </div>
  );
}

export default Card;
