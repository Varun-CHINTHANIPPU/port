import React, { useEffect } from 'react';
import { initialPortfolioData } from '../data/portfolioData';
import { AboutSection } from '../components/about/AboutSection';

export const AboutPage = () => {
  const data = initialPortfolioData;

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <div className="pt-28 sm:pt-36 pb-20 animate-fadeIn">
      <AboutSection 
        profile={data.profile} 
        certifications={data.certifications} 
        leadership={data.leadership} 
      />
    </div>
  );
};

export default AboutPage;
