import React from 'react';
import { BackgroundEffects } from './components/BackgroundEffects';
import { CursorSpotlight } from './components/CursorSpotlight';
import { ScrollToTop } from './components/ScrollToTop';
import { Navbar } from './components/Navbar';
import { Hero } from './components/Hero';
import { About } from './components/About';
import { Skills } from './components/Skills';
import { Projects } from './components/Projects';
import { Education } from './components/Education';
import { Contact } from './components/Contact';
import { Footer } from './components/Footer';

export const App: React.FC = () => {
  return (
    <div className="relative min-h-screen bg-[#080c14] text-slate-100 selection:bg-cyan-500/30 selection:text-cyan-200">
      {/* Interactive Constellation & Ambient Cyber Background */}
      <BackgroundEffects />

      {/* Futuristic Mouse Cursor Spotlight Glow */}
      <CursorSpotlight />

      {/* 1. HEADER (Sticky Navbar + Hero Content) */}
      <Navbar />
      <Hero />

      {/* 2. ABOUT ME */}
      <About />

      {/* 3. SKILLS */}
      <Skills />

      {/* 4. PROJECTS */}
      <Projects />

      {/* 5. EDUCATION */}
      <Education />

      {/* 6. CONTACT */}
      <Contact />

      {/* Footer */}
      <Footer />

      {/* Floating Scroll-to-Top with Circular Progress Ring */}
      <ScrollToTop />
    </div>
  );
};

export default App;
