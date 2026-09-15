import React from 'react';
import { motion } from 'framer-motion';
import { ExternalLink } from 'lucide-react';
import { FiGithub, FiLinkedin } from 'react-icons/fi';
import { links } from '../data/links';

const Contact = () => {
  return (
    <section id="contact" className="py-20 md:py-32 max-w-[1180px] mx-auto px-6 md:px-8 text-center">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6 }}
        className="max-w-2xl mx-auto"
      >
        <h2 className="text-4xl md:text-5xl lg:text-6xl font-heading font-bold text-text-primary mb-6">
          Let's Build Something
        </h2>
        <p className="text-text-secondary text-lg md:text-xl mb-12 text-balance">
          Open to learning opportunities, collaborations and interesting projects.
        </p>

        <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
          <a
            href={links.linkedin}
            target="_blank"
            rel="noopener noreferrer"
            className="w-full sm:w-auto inline-flex items-center justify-center space-x-3 px-8 py-4 bg-accent text-[#0B0C0F] hover:bg-accent-hover font-medium rounded-lg transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-accent focus-visible:ring-offset-2 focus-visible:ring-offset-bg-primary"
          >
            <FiLinkedin size={20} />
            <span>Connect on LinkedIn</span>
          </a>
          
          <div className="flex items-center gap-4 w-full sm:w-auto mt-4 sm:mt-0">
            <a
              href={links.github}
              target="_blank"
              rel="noopener noreferrer"
              aria-label="GitHub Profile"
              className="flex-1 sm:flex-none flex items-center justify-center p-4 bg-transparent border border-border-strong text-text-primary hover:bg-accent-muted rounded-lg transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-accent"
            >
              <FiGithub size={20} />
            </a>
            <a
              href={links.leetcode}
              target="_blank"
              rel="noopener noreferrer"
              aria-label="LeetCode Profile"
              className="flex-1 sm:flex-none flex items-center justify-center p-4 bg-transparent border border-border-strong text-text-primary hover:bg-accent-muted rounded-lg transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-accent"
            >
              <ExternalLink size={20} />
            </a>
            <a
              href={links.geeksforgeeks}
              target="_blank"
              rel="noopener noreferrer"
              aria-label="GeeksforGeeks Profile"
              className="flex-1 sm:flex-none flex items-center justify-center p-4 bg-transparent border border-border-strong text-text-primary hover:bg-accent-muted rounded-lg transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-accent"
            >
              <ExternalLink size={20} />
            </a>
          </div>
        </div>
      </motion.div>
    </section>
  );
};

export default Contact;
