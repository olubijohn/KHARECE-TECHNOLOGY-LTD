import React from 'react';
import { motion } from 'framer-motion';

export const Button = ({ children, variant = 'primary', className = '', ...props }) => {
  const baseStyles = 'relative px-6 py-3 rounded-full font-semibold transition-all duration-300 flex items-center justify-center gap-2 overflow-hidden group';
  
  const variants = {
    primary: 'bg-primary text-primary-foreground shadow-lg shadow-primary/20',
    secondary: 'bg-secondary text-secondary-foreground border border-white/10',
    ghost: 'hover:bg-white/5 text-foreground'
  };

  return (
    <motion.button
      whileHover={{ scale: 1.05 }}
      whileTap={{ scale: 0.95 }}
      className={`${baseStyles} ${variants[variant]} ${className}`}
      {...props}
    >
      {/* Animated Border Effect for Primary/Secondary Buttons */}
      {(variant === 'primary' || variant === 'secondary') && (
        <span className="absolute inset-0 rounded-full p-[1px] pointer-events-none">
          <span className="absolute inset-[-1000%] animate-[spin_3s_linear_infinite] bg-[conic-gradient(from_90deg_at_50%_50%,#E2CBFF_0%,#3984ff_50%,#E2CBFF_100%)] opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
        </span>
      )}
      
      {/* Button Content Overlay to keep background and border distinct */}
      <span className="relative z-10 flex items-center gap-2 w-full h-full bg-inherit rounded-full">
        {children}
      </span>
      
      {/* Glowing Shadow on Hover */}
      <span className="absolute inset-0 rounded-full group-hover:shadow-[0_0_20px_rgba(59,130,246,0.5)] transition-shadow duration-300 pointer-events-none" />
    </motion.button>
  );
};

export const Section = ({ children, id, className = '', container = true }) => {
  return (
    <section id={id} className={`section-padding ${className}`}>
      <div className={container ? 'container' : ''}>
        {children}
      </div>
    </section>
  );
};
