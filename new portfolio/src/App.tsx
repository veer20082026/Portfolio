import React from 'react';
import { Navbar } from './components/Navbar';
import { Hero } from './components/Hero';
import { About } from './components/About';
import { Projects } from './components/Projects';
import { GitHubShowcase } from './components/GitHubShowcase';
import { Skills } from './components/Skills';
import { Journey } from './components/Journey';
import { Contact } from './components/Contact';
import { Footer } from './components/Footer';

export const App: React.FC = () => {
  return (
    <div className="min-h-screen bg-[#08090d] text-slate-100 flex flex-col font-sans selection:bg-emerald-500/25 selection:text-emerald-300">
      <Navbar />
      
      <main className="flex-1">
        <Hero />
        <About />
        <Projects />
        <GitHubShowcase />
        <Skills />
        <Journey />
        <Contact />
      </main>

      <Footer />
    </div>
  );
};

export default App;
