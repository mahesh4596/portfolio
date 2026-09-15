import React from 'react';
import { ArrowUp } from 'lucide-react';

const Footer = () => {
  const currentYear = new Date().getFullYear();

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <footer className="py-8 border-t border-border-subtle bg-bg-primary">
      <div className="max-w-[1180px] mx-auto px-6 md:px-8">
        <div className="flex flex-col md:flex-row items-center justify-between gap-6">
          <div className="flex flex-col items-center md:items-start gap-2">
            <span className="font-heading font-bold text-lg text-text-primary">MS.</span>
            <p className="text-sm text-text-muted">
              Engineering solutions through code.
            </p>
          </div>
          
          <div className="flex items-center gap-6">
            <span className="text-sm font-mono text-text-muted">
              &copy; {currentYear} Mahesh Singla
            </span>
            <button
              onClick={scrollToTop}
              className="p-2 text-text-secondary hover:text-text-primary bg-bg-elevated border border-border-subtle rounded-md transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-accent"
              aria-label="Scroll to top"
            >
              <ArrowUp size={16} />
            </button>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
