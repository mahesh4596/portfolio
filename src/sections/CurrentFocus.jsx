import React from 'react';
import { motion } from 'framer-motion';

const CurrentFocus = () => {
  const topics = [
    'Core Java',
    'Data Structures & Algorithms',
    'Web Development',
    'Core CS Fundamentals',
    'Real-world Project Development'
  ];

  return (
    <section className="py-12 border-t border-border-subtle bg-bg-elevated/30">
      <div className="max-w-[1180px] mx-auto px-6 md:px-8">
        <div className="flex flex-col md:flex-row md:items-center gap-6 md:gap-12">
          <h3 className="font-mono text-sm text-accent uppercase tracking-wider shrink-0">Currently Learning:</h3>
          <div className="flex flex-wrap gap-3">
            {topics.map((topic, idx) => (
              <motion.span
                key={topic}
                initial={{ opacity: 0, scale: 0.9 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 0.3, delay: idx * 0.05 }}
                className="px-3 py-1.5 bg-bg-primary border border-border-subtle rounded-full text-sm text-text-secondary flex items-center gap-2"
              >
                <span className="w-1.5 h-1.5 rounded-full bg-border-strong"></span>
                {topic}
              </motion.span>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default CurrentFocus;
