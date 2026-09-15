import React from 'react';
import { motion } from 'framer-motion';
import { Code2, Braces } from 'lucide-react';
import { FiGithub } from 'react-icons/fi';
import SectionHeading from '../components/SectionHeading';
import { links } from '../data/links';

const CodingProfiles = () => {
  const profiles = [
    {
      name: 'LeetCode',
      handle: 'maheshsingla7796',
      link: links.leetcode,
      icon: <Code2 size={24} />
    },
    {
      name: 'GeeksforGeeks',
      handle: 'maheshsingla4596',
      link: links.geeksforgeeks,
      icon: <Braces size={24} />
    },
    {
      name: 'GitHub',
      handle: 'mahesh4596',
      link: links.github,
      icon: <FiGithub size={24} />
    }
  ];

  return (
    <section className="py-14 md:py-30 max-w-[1180px] mx-auto px-6 md:px-8">
      <SectionHeading number="05" title="Code. Practice. Improve." />
      
      <div className="grid sm:grid-cols-2 md:grid-cols-3 gap-6">
        {profiles.map((profile, idx) => (
          <motion.a
            key={profile.name}
            href={profile.link}
            target="_blank"
            rel="noopener noreferrer"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-50px" }}
            transition={{ duration: 0.4, delay: idx * 0.1 }}
            className="group flex flex-col items-center justify-center p-8 bg-bg-elevated border border-border-subtle rounded-2xl hover:border-border-strong hover:bg-bg-elevated-2 transition-colors text-center focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-accent"
          >
            <div className="w-12 h-12 flex items-center justify-center rounded-full bg-bg-elevated-2 border border-border-subtle text-text-secondary group-hover:text-accent group-hover:border-accent/30 transition-colors mb-4">
              {profile.icon}
            </div>
            <h3 className="text-lg font-heading text-text-primary mb-1">{profile.name}</h3>
            <span className="text-sm font-mono text-text-secondary">@{profile.handle}</span>
          </motion.a>
        ))}
      </div>
    </section>
  );
};

export default CodingProfiles;
