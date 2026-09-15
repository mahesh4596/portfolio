import React from 'react';
import { motion } from 'framer-motion';
import SectionHeading from '../components/SectionHeading';
import { achievements } from '../data/achievements';

const Achievements = () => {
  return (
    <section id="achievements" className="py-14 md:py-30 bg-bg-elevated/30 border-y border-border-subtle">
      <div className="max-w-[1180px] mx-auto px-6 md:px-8">
        <SectionHeading number="04" title="Hackathons & Achievements" />
        
        <div className="relative mt-12 max-w-3xl">
          {/* Vertical Timeline Rail */}
          <div className="absolute left-[15px] sm:left-1/2 top-0 bottom-0 w-[1px] bg-border-strong sm:-translate-x-1/2"></div>
          
          <div className="space-y-12">
            {achievements.map((item, index) => {
              const isEven = index % 2 === 0;
              
              return (
                <motion.div
                  key={item.id}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true, margin: "-50px" }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                  className="relative flex flex-col sm:flex-row items-start sm:items-center w-full"
                >
                  {/* Marker point */}
                  <div className="absolute left-[11px] sm:left-1/2 w-2 h-2 rounded-full bg-accent sm:-translate-x-1/2 top-6 sm:top-auto z-10 outline outline-4 outline-bg-elevated"></div>
                  
                  {/* Content Container */}
                  <div className={`w-full sm:w-1/2 pl-12 sm:px-8 ${isEven ? 'sm:text-right sm:pr-12' : 'sm:order-2 sm:pl-12'}`}>
                    <div className={`bg-bg-elevated border border-border-subtle rounded-xl p-6 hover:border-border-strong transition-colors relative ${isEven ? 'sm:ml-auto' : ''}`}>
                      <span className="inline-block px-2 py-1 bg-bg-elevated-2 border border-border-subtle rounded text-xs font-mono text-accent mb-4">
                        {item.year}
                      </span>
                      <h3 className="text-lg font-heading text-text-primary mb-2">
                        {item.title}
                      </h3>
                      <div className="flex flex-col gap-1 text-sm text-text-secondary">
                        <span className="font-medium text-text-primary">Role: {item.role}</span>
                        <span>{item.organization}</span>
                        <span className="text-text-muted">{item.date}</span>
                      </div>
                    </div>
                  </div>
                </motion.div>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Achievements;
