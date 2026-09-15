import React from 'react';

const Snapshot = () => {
  const stats = [
    { label: 'Education', value: 'B.Tech CSE — Chitkara University' },
    { label: 'Primary Language', value: 'Java' },
    { label: 'Focus', value: 'Web Development + DSA' },
    { label: 'Interests', value: 'Software Development + Problem Solving' },
    { label: 'Projects', value: '3+ shipped' },
    { label: 'Hackathons', value: '2+ experiences' }
  ];

  return (
    <section className="py-8 border-y border-border-subtle bg-bg-elevated/30">
      <div className="max-w-[1180px] mx-auto px-6 md:px-8">
        <div className="flex overflow-x-auto pb-4 md:pb-0 hide-scrollbar snap-x snap-mandatory">
          {stats.map((stat, idx) => (
            <div 
              key={idx} 
              className="flex-shrink-0 w-64 md:w-auto md:flex-1 snap-start first:pl-0 pl-8 pr-8 border-r border-border-subtle last:border-0 first:ml-0"
            >
              <p className="text-xs font-mono text-text-muted mb-1 uppercase tracking-wider">{stat.label}</p>
              <p className="text-sm font-medium text-text-primary">{stat.value}</p>
            </div>
          ))}
        </div>
      </div>
      <style dangerouslySetInnerHTML={{__html: `
        .hide-scrollbar::-webkit-scrollbar {
          display: none;
        }
        .hide-scrollbar {
          -ms-overflow-style: none;
          scrollbar-width: none;
        }
      `}} />
    </section>
  );
};

export default Snapshot;
