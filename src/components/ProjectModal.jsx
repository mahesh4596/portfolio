import React, { useEffect, useRef } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { ExternalLink, X } from 'lucide-react';
import { FiGithub } from 'react-icons/fi';
import Button from './Button';

const ProjectModal = ({ project, isOpen, onClose }) => {
  const modalRef = useRef(null);

  useEffect(() => {
    const handleKeyDown = (e) => {
      if (e.key === 'Escape' && isOpen) {
        onClose();
      }
    };

    if (isOpen) {
      document.body.style.overflow = 'hidden';
      document.addEventListener('keydown', handleKeyDown);
      
      // Focus the modal for accessibility
      setTimeout(() => {
        if (modalRef.current) {
          modalRef.current.focus();
        }
      }, 100);
    }

    return () => {
      document.body.style.overflow = 'unset';
      document.removeEventListener('keydown', handleKeyDown);
    };
  }, [isOpen, onClose]);

  if (!isOpen || !project) return null;

  return (
    <AnimatePresence>
      <div className="fixed inset-0 z-50 flex items-center justify-center p-4 sm:p-6">
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          className="absolute inset-0 bg-[#0B0C0F]/80 backdrop-blur-sm"
          onClick={onClose}
        />
        
        <motion.div
          ref={modalRef}
          tabIndex="-1"
          role="dialog"
          aria-modal="true"
          aria-labelledby={`modal-title-${project.id}`}
          initial={{ opacity: 0, y: 20, scale: 0.95 }}
          animate={{ opacity: 1, y: 0, scale: 1 }}
          exit={{ opacity: 0, y: 20, scale: 0.95 }}
          className="relative w-full max-w-3xl bg-bg-elevated border border-border-strong rounded-2xl shadow-2xl overflow-hidden max-h-[90vh] flex flex-col focus:outline-none"
        >
          <div className="flex items-center justify-between p-6 border-b border-border-subtle">
            <h3 id={`modal-title-${project.id}`} className="text-2xl font-heading text-text-primary">
              {project.title}
            </h3>
            <button
              onClick={onClose}
              className="p-2 text-text-secondary hover:text-text-primary hover:bg-bg-elevated-2 rounded-lg transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-accent"
              aria-label="Close modal"
            >
              <X size={24} />
            </button>
          </div>

          <div className="p-6 overflow-y-auto">
            <div className="space-y-8">
              <section>
                <p className="text-text-secondary text-lg leading-relaxed">
                  {project.overview}
                </p>
              </section>

              <div className="grid md:grid-cols-2 gap-8">
                <section>
                  <p className="text-text-secondary leading-relaxed">
                    {project.problem}
                  </p>
                </section>
                
                <section>
                  <p className="text-text-secondary leading-relaxed">
                    {project.solution}
                  </p>
                </section>
              </div>

              <section>
                <ul className="list-none space-y-3">
                  {project.features.map((feature, idx) => (
                    <li key={idx} className="flex items-start">
                      <span className="text-accent mr-3 mt-1.5 leading-none">▹</span>
                      <span className="text-text-secondary leading-relaxed">{feature}</span>
                    </li>
                  ))}
                </ul>
              </section>

              <section>
                <div className="flex flex-wrap gap-2">
                  {project.techStack.map((tech) => (
                    <span 
                      key={tech} 
                      className="px-3 py-1 bg-bg-elevated-2 border border-border-subtle rounded-full text-sm text-text-secondary"
                    >
                      {tech}
                    </span>
                  ))}
                </div>
              </section>
            </div>
          </div>

          <div className="p-6 border-t border-border-subtle flex flex-wrap gap-4 bg-bg-elevated/50">
            {project.github && (
              <Button href={project.github} target="_blank" rel="noopener noreferrer" variant="outline" className="gap-2">
                <FiGithub size={18} />
                <span>View Code</span>
              </Button>
            )}
            {project.liveDemo && (
              <Button href={project.liveDemo} target="_blank" rel="noopener noreferrer" variant="solid" className="gap-2">
                <ExternalLink size={18} />
                <span>Live Demo</span>
              </Button>
            )}
          </div>
        </motion.div>
      </div>
    </AnimatePresence>
  );
};

export default ProjectModal;
