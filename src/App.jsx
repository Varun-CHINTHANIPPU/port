import React, { useState } from 'react';
import { Routes, Route } from 'react-router-dom';
import { SimpleLoadingScreen } from './components/intro/SimpleLoadingScreen';
import { Navbar } from './components/layout/Navbar';
import { Footer } from './components/layout/Footer';
import { HomePage } from './pages/HomePage';
import { ProjectDetailPage } from './pages/ProjectDetailPage';

export const App = () => {
  const [loading, setLoading] = useState(true);

  return (
    <div className="relative min-h-screen bg-[#09090b] text-zinc-100 selection:bg-zinc-800 selection:text-white font-sans">
      {/* Short Elegant Loading Screen on Initial Visit */}
      {loading && (
        <SimpleLoadingScreen onComplete={() => setLoading(false)} />
      )}

      {/* Global Navigation */}
      <Navbar />

      {/* Routes */}
      <main className="relative z-10">
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/work/:projectId" element={<ProjectDetailPage />} />
          <Route path="*" element={<HomePage />} />
        </Routes>
      </main>

      {/* Global Minimal Footer with Social Icons */}
      <Footer />
    </div>
  );
};

export default App;
