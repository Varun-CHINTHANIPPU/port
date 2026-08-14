import React, { useState } from 'react';
import { initialPortfolioData } from './data/portfolioData';
import { SimpleLoadingScreen } from './components/intro/SimpleLoadingScreen';
import { Navbar } from './components/layout/Navbar';
import { HeroSection } from './components/hero/HeroSection';
import { ProjectsSection } from './components/projects/ProjectsSection';
import { ResearchSection } from './components/research/ResearchSection';
import { AboutSection } from './components/about/AboutSection';
import { ActivitySection } from './components/activity/ActivitySection';
import { ContactSection } from './components/contact/ContactSection';
import { Footer } from './components/layout/Footer';

export const App = () => {
  const [data] = useState(() => initialPortfolioData);
  const [loading, setLoading] = useState(true);

  return (
    <div className="relative min-h-screen bg-[#09090b] text-zinc-100 selection:bg-zinc-800 selection:text-white font-sans">
      {/* Short Elegant Loading Screen */}
      {loading && (
        <SimpleLoadingScreen onComplete={() => setLoading(false)} />
      )}

      {/* Clean Navigation (15.5px typography, prominent presence) */}
      <Navbar />

      {/* Main Content Sections with Unified Spacing Rhythm */}
      <main className="relative z-10">
        {/* 1. Hero */}
        <HeroSection profile={data.profile} />

        {/* 2. Selected Work (4 major projects with visible 24px gap) */}
        <ProjectsSection />

        {/* 3. Research & Explorations (Editorial list with visible 24px gap) */}
        <ResearchSection />

        {/* 4. About & Background */}
        <AboutSection 
          profile={data.profile} 
          certifications={data.certifications} 
          leadership={data.leadership} 
        />

        {/* 5. Activity & Live Platforms */}
        <ActivitySection />

        {/* 6. Elsewhere */}
        <ContactSection profile={data.profile} />
      </main>

      {/* Minimal Footer */}
      <Footer />
    </div>
  );
};

export default App;
