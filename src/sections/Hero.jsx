import React, { useState, useEffect } from 'react';
import { motion, useReducedMotion } from 'framer-motion';
import { ExternalLink } from 'lucide-react';
import { FiGithub, FiLinkedin } from 'react-icons/fi';
import Button from '../components/Button';
import { links } from '../data/links';

const Hero = () => {
  const shouldReduceMotion = useReducedMotion();
  const [typedCode, setTypedCode] = useState('');
  
  const fullCode = `const developer = {
  name: "Mahesh Singla",
  stack: ["Java", "React", "Node.js"],
  focus: "DSA + practical builds",
  status: "shipping"
};`;

  useEffect(() => {
    if (shouldReduceMotion) {
      setTypedCode(fullCode);
      return;
    }

    let currentIndex = 0;
    const interval = setInterval(() => {
      if (currentIndex <= fullCode.length) {
        setTypedCode(fullCode.slice(0, currentIndex));
        currentIndex++;
      } else {
        clearInterval(interval);
      }
    }, 40); // typing speed

    return () => clearInterval(interval);
  }, [shouldReduceMotion, fullCode]);

  // Use simple opacity fades if motion is reduced
  const fadeUpVariant = {
    hidden: { opacity: 0, y: shouldReduceMotion ? 0 : 20 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.6, ease: "easeOut" } }
  };

  const containerVariant = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
        delayChildren: 0.2
      }
    }
  };

  return (
    <section className="min-h-screen flex items-center pt-24 pb-12 overflow-hidden relative">
      {/* Optional subtle glow behind terminal */}
      {!shouldReduceMotion && (
        <div className="absolute top-1/2 right-[10%] -translate-y-1/2 w-[40vw] h-[40vw] bg-accent/5 rounded-full blur-[100px] pointer-events-none" />
      )}
      
      <div className="w-full max-w-[1180px] mx-auto px-6 md:px-8">
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-8 items-center">
          
          {/* Left Column: Content */}
          <motion.div 
            variants={containerVariant}
            initial="hidden"
            animate="visible"
            className="flex flex-col items-start max-w-xl"
          >
            <motion.div variants={fadeUpVariant} className="flex items-center space-x-2 mb-6 bg-bg-elevated border border-border-subtle rounded-full px-4 py-1.5">
              <span className="w-2 h-2 rounded-full bg-success"></span>
              <span className="text-xs font-mono text-text-secondary uppercase tracking-wider">Available for opportunities</span>
            </motion.div>
            
            <motion.h1 variants={fadeUpVariant} className="text-[34px] sm:text-[42px] lg:text-[56px] leading-[1.1] font-heading font-bold text-text-primary mb-4">
              <span className="text-text-secondary font-medium text-2xl sm:text-3xl block mb-2">Hi, I'm</span>
              Mahesh Singla
            </motion.h1>
            
            <motion.h2 variants={fadeUpVariant} className="text-xl sm:text-2xl text-accent font-heading mb-4">
              B.Tech CSE Student @ Chitkara University
            </motion.h2>
            
            <motion.p variants={fadeUpVariant} className="text-text-secondary font-mono text-sm sm:text-base mb-6">
              Java Developer · Web Development · Problem Solver
            </motion.p>
            
            <motion.p variants={fadeUpVariant} className="text-text-secondary text-base sm:text-[17px] leading-[1.6] mb-10 text-balance">
              I'm a Computer Science Engineering student who enjoys building practical applications, solving programming problems, and continuously improving my development skills.
            </motion.p>
            
            <motion.div variants={fadeUpVariant} className="flex flex-wrap gap-4 mb-10">
              <Button href="#work" variant="solid">View My Projects</Button>
              <Button href={links.resume} target="_blank" rel="noopener noreferrer" variant="outline" className="gap-2">
                <span className="font-medium">Resume</span>
              </Button>
              <Button href="#contact" variant="outline">Contact Me</Button>
            </motion.div>
            
            <motion.div variants={fadeUpVariant} className="flex flex-wrap gap-3">
              <a href={links.github} target="_blank" rel="noopener noreferrer" className="inline-flex items-center space-x-2 px-3 py-1.5 bg-bg-elevated border border-border-subtle rounded-md text-text-secondary hover:text-text-primary hover:border-border-strong transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-accent">
                <FiGithub size={16} />
                <span className="text-sm font-medium">GitHub</span>
              </a>
              <a href={links.linkedin} target="_blank" rel="noopener noreferrer" className="inline-flex items-center space-x-2 px-3 py-1.5 bg-bg-elevated border border-border-subtle rounded-md text-text-secondary hover:text-text-primary hover:border-border-strong transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-accent">
                <FiLinkedin size={16} />
                <span className="text-sm font-medium">LinkedIn</span>
              </a>
              <a href={links.leetcode} target="_blank" rel="noopener noreferrer" className="inline-flex items-center space-x-2 px-3 py-1.5 bg-bg-elevated border border-border-subtle rounded-md text-text-secondary hover:text-text-primary hover:border-border-strong transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-accent">
                <ExternalLink size={16} />
                <span className="text-sm font-medium">LeetCode</span>
              </a>
              <a href={links.geeksforgeeks} target="_blank" rel="noopener noreferrer" className="inline-flex items-center space-x-2 px-3 py-1.5 bg-bg-elevated border border-border-subtle rounded-md text-text-secondary hover:text-text-primary hover:border-border-strong transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-accent">
                <ExternalLink size={16} />
                <span className="text-sm font-medium">GeeksforGeeks</span>
              </a>
            </motion.div>
          </motion.div>

          {/* Right Column: Code Terminal Panel */}
          <motion.div
            initial={{ opacity: 0, scale: shouldReduceMotion ? 1 : 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="w-full relative z-10"
          >
            <div className="bg-bg-elevated rounded-xl border border-border-strong overflow-hidden shadow-2xl">
              {/* Terminal header */}
              <div className="bg-bg-elevated-2 px-4 py-3 flex items-center border-b border-border-strong">
                <div className="flex space-x-2">
                  <div className="w-3 h-3 rounded-full bg-[#FF5F56]"></div>
                  <div className="w-3 h-3 rounded-full bg-[#FFBD2E]"></div>
                  <div className="w-3 h-3 rounded-full bg-[#27C93F]"></div>
                </div>
                <div className="mx-auto flex-1 text-center">
                  <span className="text-xs font-mono text-text-muted">developer.js</span>
                </div>
              </div>
              
              {/* Terminal body */}
              <div className="p-6 md:p-8 bg-[#0B0C0F] text-sm md:text-base font-mono overflow-x-auto">
                <pre className="text-left whitespace-pre">
                  <code>
                    <span className="text-[#C678DD]">const</span> <span className="text-[#E5C07B]">developer</span> <span className="text-[#56B6C2]">=</span> {'{\n'}
                    <span className="text-[#D19A66]">  name</span><span className="text-text-primary">:</span> <span className="text-[#98C379]">"Mahesh Singla"</span>{',\n'}
                    <span className="text-[#D19A66]">  stack</span><span className="text-text-primary">:</span> [<span className="text-[#98C379]">"Java"</span>, <span className="text-[#98C379]">"React"</span>, <span className="text-[#98C379]">"Node.js"</span>]{',\n'}
                    <span className="text-[#D19A66]">  focus</span><span className="text-text-primary">:</span> <span className="text-[#98C379]">"DSA + practical builds"</span>{',\n'}
                    <span className="text-[#D19A66]">  status</span><span className="text-text-primary">:</span> <span className="text-[#98C379]">"shipping"</span>{'\n'}
                    {'}'};
                  </code>
                  {/* Overlay typed code to handle syntax highlighting appearance naturally (naive approach) 
                      Since naive approach is hard to match exactly, we'll just use plain text for the typing effect 
                      and fade in the highlighted one, or we can just render the typedCode directly if plain text is ok.
                      Wait, the prompt says "syntax-highlighted code snippet... Animate it as a soft typing effect". 
                      Let's do a simple mask or just use plain text for typing and swap.
                      Actually, CSS `clip-path` or just setting the characters iteratively works if we split the HTML, 
                      but since we just need a simple effect, let's keep it simple and just use the typedCode variable with a single color,
                      then swap to syntax highlighted.
                  */}
                  {!shouldReduceMotion && typedCode.length < fullCode.length && (
                    <div className="absolute inset-0 p-6 md:p-8 bg-[#0B0C0F] text-text-secondary z-10 pointer-events-none">
                      {typedCode}
                      <span className="animate-pulse">_</span>
                    </div>
                  )}
                </pre>
              </div>
            </div>
          </motion.div>
          
        </div>
      </div>
    </section>
  );
};

export default Hero;
