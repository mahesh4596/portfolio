import React from 'react';
import { motion } from 'framer-motion';
import SectionHeading from '../components/SectionHeading';

const About = () => {
  return (
    <section id="about" className="py-14 md:py-30 max-w-[1180px] mx-auto px-6 md:px-8">
      <SectionHeading number="01" title="About" />
      
      <div className="grid md:grid-cols-2 gap-12 lg:gap-24">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.6 }}
          className="prose prose-invert"
        >
          <p className="text-text-secondary text-base sm:text-[17px] leading-[1.6] mb-6 text-balance">
            I'm currently studying Computer Science Engineering at Chitkara University, where most of my time goes into Java, web development, and data structures & algorithms.
          </p>
          <p className="text-text-secondary text-base sm:text-[17px] leading-[1.6] mb-6 text-balance">
            I like problem-solving in both directions — algorithmic problems on platforms like LeetCode and GeeksforGeeks, and the more open-ended kind that comes from actually building and shipping a project end to end.
          </p>
          <p className="text-text-secondary text-base sm:text-[17px] leading-[1.6] text-balance">
            I'm not claiming expert-level experience here — I'm a student who prefers learning by building things that work, then going back and making them work better.
          </p>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.6, delay: 0.2 }}
        >
          <div className="bg-bg-elevated border border-border-subtle rounded-2xl p-8">
            <h3 className="font-heading text-xl text-text-primary mb-6">Quick Facts</h3>
            <ul className="space-y-4">
              <li className="flex flex-col sm:flex-row sm:items-baseline border-b border-border-subtle pb-4 last:border-0 last:pb-0">
                <span className="text-sm font-mono text-text-muted sm:w-1/3 mb-1 sm:mb-0">Location</span>
                <span className="text-text-primary">India</span>
              </li>
              <li className="flex flex-col sm:flex-row sm:items-baseline border-b border-border-subtle pb-4 last:border-0 last:pb-0">
                <span className="text-sm font-mono text-text-muted sm:w-1/3 mb-1 sm:mb-0">Degree</span>
                <span className="text-text-primary">B.Tech in Computer Science</span>
              </li>
              <li className="flex flex-col sm:flex-row sm:items-baseline border-b border-border-subtle pb-4 last:border-0 last:pb-0">
                <span className="text-sm font-mono text-text-muted sm:w-1/3 mb-1 sm:mb-0">Focus</span>
                <span className="text-text-primary">Full-stack & Java Development</span>
              </li>
            </ul>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default About;
