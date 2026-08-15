import React from 'react';
import { initialPortfolioData } from '../data/portfolioData';
import { HeroSection } from '../components/hero/HeroSection';
import { ProjectsSection } from '../components/projects/ProjectsSection';
import { ResearchSection } from '../components/research/ResearchSection';
import { AboutSection } from '../components/about/AboutSection';
import { ActivitySection } from '../components/activity/ActivitySection';

export const HomePage = () => {
  const data = initialPortfolioData;

  return (
    <>
      {/* 1. Hero */}
      <HeroSection profile={data.profile} />

      {/* 2. Selected Work (Navigates to dedicated project pages) */}
      <ProjectsSection />

      {/* 3. Research & Explorations */}
      <ResearchSection />

      {/* 4. About & Education & Accreditations */}
      <AboutSection 
        profile={data.profile} 
        certifications={data.certifications} 
        leadership={data.leadership} 
      />

      {/* 5. Activity & Live Platforms */}
      <ActivitySection />
    </>
  );
};

export default HomePage;
