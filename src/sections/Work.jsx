import React, { useState } from 'react';
import { motion, useReducedMotion } from 'framer-motion';
import { ExternalLink } from 'lucide-react';
import { FiGithub } from 'react-icons/fi';
import SectionHeading from '../components/SectionHeading';
import ProjectModal from '../components/ProjectModal';
import { projects } from '../data/projects';

const Work = () => {
  const [selectedProject, setSelectedProject] = useState(null);
  const shouldReduceMotion = useReducedMotion();

  return (
    <section id="work" className="py-14 md:py-30 max-w-[1180px] mx-auto px-6 md:px-8">
      <SectionHeading number="03" title="Selected Work" />
      
      <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
        {projects.map((project, idx) => (
          <motion.div
            key={project.id}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-50px" }}
            transition={{ duration: 0.5, delay: idx * 0.1 }}
            className="group flex flex-col bg-bg-elevated border border-border-subtle rounded-2xl overflow-hidden cursor-pointer hover:border-border-strong transition-colors"
            onClick={() => setSelectedProject(project)}
            onKeyDown={(e) => {
              if (e.key === 'Enter' || e.key === ' ') {
                e.preventDefault();
                setSelectedProject(project);
              }
            }}
            tabIndex={0}
            role="button"
            aria-label={`View details for ${project.title}`}
          >
            {/* Project Cover */}
            {project.image ? (
              <div className="relative h-48 md:h-56 w-full overflow-hidden bg-bg-elevated">
                <motion.img 
                  src={project.image} 
                  alt={`${project.title} screenshot`} 
                  className="w-full h-full object-cover object-top"
                  whileHover={!shouldReduceMotion ? { scale: 1.05 } : {}}
                  transition={{ duration: 0.4 }}
                />
                <div className="absolute inset-0 bg-gradient-to-t from-bg-elevated to-transparent opacity-60"></div>
              </div>
            ) : (
              <div className={`relative h-48 md:h-56 w-full ${project.imagePlaceholder} overflow-hidden`}>
                <motion.div 
                  className="absolute inset-0 flex items-center justify-center opacity-80"
                  whileHover={!shouldReduceMotion ? { scale: 1.02 } : {}}
                  transition={{ duration: 0.3 }}
                >
                  <span className="font-mono text-2xl font-bold tracking-widest text-text-primary/50 mix-blend-overlay rotate-[-10deg]">
                    {project.title.toUpperCase()}
                  </span>
                </motion.div>
                <div className="absolute inset-0 bg-gradient-to-t from-bg-elevated to-transparent opacity-60"></div>
              </div>
            )}
            
            {/* Card Content */}
            <div className="p-6 flex flex-col flex-grow">
              <h3 className="text-xl font-heading text-text-primary mb-3 group-hover:text-accent transition-colors">
                {project.title}
              </h3>
              <p className="text-text-secondary text-sm mb-6 line-clamp-3">
                {project.description}
              </p>
              
              <div className="mt-auto pt-4 border-t border-border-subtle flex items-center justify-between">
                <span className="text-xs font-mono text-accent">View Details &rarr;</span>
                <div className="flex space-x-3 text-text-muted">
                  {project.github && <FiGithub size={18} className="group-hover:text-text-primary transition-colors" />}
                  {project.liveDemo && <ExternalLink size={18} className="group-hover:text-text-primary transition-colors" />}
                </div>
              </div>
            </div>
          </motion.div>
        ))}
      </div>

      <ProjectModal 
        project={selectedProject} 
        isOpen={!!selectedProject} 
        onClose={() => setSelectedProject(null)} 
      />
    </section>
  );
};

export default Work;
