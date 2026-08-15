import React, { useEffect } from 'react';
import { ResearchSection } from '../components/research/ResearchSection';

export const ResearchPage = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <div className="animate-fadeIn">
      <ResearchSection />
    </div>
  );
};

export default ResearchPage;
