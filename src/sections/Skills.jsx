import React from 'react';
import { motion } from 'framer-motion';
import SectionHeading from '../components/SectionHeading';
import { skills } from '../data/skills';

const Skills = () => {
  return (
    <section id="skills" className="py-14 md:py-30 bg-bg-elevated/30 border-y border-border-subtle">
      <div className="max-w-[1180px] mx-auto px-6 md:px-8">
        <SectionHeading number="02" title="Skills" />
        
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          {skills.map((skillGroup, idx) => (
            <motion.div
              key={skillGroup.category}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-50px" }}
              transition={{ duration: 0.5, delay: idx * 0.1 }}
              className="bg-bg-elevated border border-border-subtle rounded-xl p-6 hover:border-border-strong transition-colors"
            >
              <h3 className="font-heading text-lg text-text-primary mb-6 flex items-center">
                <span className="w-8 h-[1px] bg-accent mr-3"></span>
                {skillGroup.category}
              </h3>
              <div className="flex flex-wrap gap-2">
                {skillGroup.items.map(item => (
                  <span 
                    key={item}
                    className="px-3 py-1.5 bg-bg-elevated-2 border border-border-subtle rounded-md text-sm text-text-secondary transition-colors hover:text-text-primary hover:border-border-strong"
                  >
                    {item}
                  </span>
                ))}
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Skills;
