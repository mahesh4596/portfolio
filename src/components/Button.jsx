import React from 'react';

const Button = React.forwardRef(({ 
  children, 
  variant = 'solid', 
  className = '', 
  href, 
  onClick, 
  type = 'button',
  ...props 
}, ref) => {
  const baseStyles = "inline-flex items-center justify-center font-body font-medium transition-colors duration-200 rounded-lg px-6 py-3 min-h-[44px] min-w-[44px] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-accent focus-visible:ring-offset-2 focus-visible:ring-offset-bg-primary";
  
  const variants = {
    solid: "bg-accent text-[#0B0C0F] hover:bg-accent-hover",
    outline: "bg-transparent border border-border-strong text-text-primary hover:bg-accent-muted"
  };

  const combinedClassName = `${baseStyles} ${variants[variant]} ${className}`;

  if (href) {
    return (
      <a 
        ref={ref}
        href={href} 
        className={combinedClassName}
        {...props}
      >
        {children}
      </a>
    );
  }

  return (
    <button 
      ref={ref}
      type={type} 
      onClick={onClick} 
      className={combinedClassName}
      {...props}
    >
      {children}
    </button>
  );
});

Button.displayName = 'Button';

export default Button;
