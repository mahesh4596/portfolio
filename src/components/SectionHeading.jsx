import React from 'react';

const SectionHeading = ({ number, title }) => {
  return (
    <div className="mb-12">
      <h2 className="text-3xl md:text-4xl font-heading text-text-primary">
        {title}
      </h2>
    </div>
  );
};

export default SectionHeading;
