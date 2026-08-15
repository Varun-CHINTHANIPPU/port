import React, { useState } from 'react';
import { Routes, Route, Navigate } from 'react-router-dom';
import { SimpleLoadingScreen } from './components/intro/SimpleLoadingScreen';
import { Navbar } from './components/layout/Navbar';
import { Footer } from './components/layout/Footer';
import { HomePage } from './pages/HomePage';
import { WorkPage } from './pages/WorkPage';
import { ProjectDetailPage } from './pages/ProjectDetailPage';
import { ResearchPage } from './pages/ResearchPage';
import { ResearchDetailPage } from './pages/ResearchDetailPage';
import { BlogsPage } from './pages/BlogsPage';
import { BlogDetailPage } from './pages/BlogDetailPage';
import { ContactPage } from './pages/ContactPage';

export const App = () => {
  const [loading, setLoading] = useState(true);

  return (
    <div className="relative min-h-screen bg-[#09090b] text-zinc-100 selection:bg-zinc-800 selection:text-white font-sans flex flex-col justify-between">
      {/* Short Elegant Loading Screen on Initial Visit */}
      {loading && (
        <SimpleLoadingScreen onComplete={() => setLoading(false)} />
      )}

      {/* Global Navigation (Work, Research, Blogs, Contact) */}
      <Navbar />

      {/* AppShell Main Container: Establishes predictable layout separation between Header and Page Content */}
      <main className="site-main">
        <Routes>
          {/* Root Homepage (Hero, About, Activity) */}
          <Route path="/" element={<HomePage />} />

          {/* Dedicated Work Routes */}
          <Route path="/work" element={<WorkPage />} />
          <Route path="/work/:projectId" element={<ProjectDetailPage />} />

          {/* Dedicated Research Routes */}
          <Route path="/research" element={<ResearchPage />} />
          <Route path="/research/:articleId" element={<ResearchDetailPage />} />

          {/* Dedicated Blogs Routes */}
          <Route path="/blogs" element={<BlogsPage />} />
          <Route path="/blogs/:slug" element={<BlogDetailPage />} />

          {/* Dedicated Contact Route */}
          <Route path="/contact" element={<ContactPage />} />

          {/* Catch-all redirect */}
          <Route path="*" element={<Navigate to="/" replace />} />
        </Routes>
      </main>

      {/* Global Minimal Footer with Prominent Email & Social Icons */}
      <Footer />
    </div>
  );
};

export default App;
