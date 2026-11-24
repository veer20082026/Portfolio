import React from 'react';
import { ArrowRight, MapPin, GraduationCap } from 'lucide-react';
import { portfolioConfig } from '../data/portfolioData';
import { Terminal } from './Terminal';
import { GithubIcon, LinkedinIcon } from './Icons';

interface HeroProps {
  onOpenLinkedInModal?: () => void;
}

export const Hero: React.FC<HeroProps> = ({ onOpenLinkedInModal }) => {
  const { personal } = portfolioConfig;

  const scrollToSection = (id: string) => {
    const el = document.getElementById(id);
    if (el) {
      el.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <section id="hero" className="relative pt-28 pb-20 md:pt-36 md:pb-28 overflow-hidden bg-radial-gradient">
      {/* Decorative ambient background glows */}
      <div className="absolute top-1/4 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[550px] h-[350px] bg-emerald-500/10 rounded-full blur-[130px] pointer-events-none"></div>
      <div className="absolute top-1/3 right-10 w-[300px] h-[300px] bg-lime-500/5 rounded-full blur-[110px] pointer-events-none"></div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-8 items-center">
          
          {/* Left Column: Core Identity & CTAs */}
          <div className="lg:col-span-7 space-y-6">
            
            {/* Live Status Badge */}
            <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full glass-panel border border-emerald-500/30 text-emerald-300 text-xs font-mono shadow-sm">
              <span className="relative flex h-2 w-2">
                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-75"></span>
                <span className="relative inline-flex rounded-full h-2 w-2 bg-emerald-500"></span>
              </span>
              <span>{personal.statusBadge}</span>
              <span className="text-slate-500">|</span>
              <span className="text-slate-400 flex items-center gap-1">
                <MapPin className="w-3 h-3 text-slate-400" /> {personal.location}
              </span>
            </div>

            {/* Name & Academic Tag */}
            <div className="space-y-2">
              <div className="flex items-center gap-2 text-slate-400 text-sm font-medium">
                <GraduationCap className="w-4 h-4 text-emerald-400" />
                <span>{personal.college} • {personal.currentSemester}</span>
              </div>
              <h1 className="text-4xl sm:text-5xl lg:text-6xl font-extrabold tracking-tight text-white">
                Hi, I'm <span className="text-transparent bg-clip-text bg-gradient-to-r from-emerald-400 via-emerald-300 to-lime-300">{personal.name}</span>
              </h1>
            </div>

            {/* Headline / Philosophy */}
            <div className="relative pl-4 border-l-2 border-emerald-500/50 py-1">
              <p className="text-xl sm:text-2xl font-semibold text-slate-100 tracking-tight glow-accent">
                "{personal.headline}"
              </p>
            </div>

            {/* Description */}
            <p className="text-base sm:text-lg text-slate-300 leading-relaxed max-w-2xl">
              {personal.description}
            </p>

            {/* Action Buttons & Social Links */}
            <div className="pt-2 flex flex-wrap items-center gap-4">
              <button
                onClick={() => scrollToSection('projects')}
                className="inline-flex items-center gap-2.5 px-6 py-3.5 rounded-xl bg-gradient-to-r from-emerald-500 to-emerald-600 hover:from-emerald-400 hover:to-emerald-500 text-slate-950 font-bold text-sm tracking-wide shadow-lg shadow-emerald-500/25 transition-all duration-200 active:scale-95 group cursor-pointer"
              >
                <span>Explore My Projects</span>
                <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
              </button>

              <button
                onClick={() => scrollToSection('contact')}
                className="inline-flex items-center gap-2 px-6 py-3.5 rounded-xl glass-panel text-slate-200 hover:text-white font-medium text-sm hover:border-emerald-500/40 transition-all duration-200 active:scale-95 cursor-pointer"
              >
                <span>Let's Connect</span>
              </button>

              {/* Social Icons */}
              <div className="flex items-center gap-2.5 pl-1 sm:pl-2">
                <a
                  href={personal.githubUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="p-3 rounded-xl glass-panel text-slate-300 hover:text-white hover:border-emerald-500/40 hover:bg-emerald-500/10 transition-all duration-200 active:scale-95"
                  title="View GitHub Profile (veer20082026)"
                  aria-label="GitHub Profile"
                >
                  <GithubIcon className="w-5 h-5" />
                </a>

                <a
                  href={personal.linkedinUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  onClick={(e) => {
                    if (personal.linkedinUrl.includes('INSERT YOUR') && onOpenLinkedInModal) {
                      e.preventDefault();
                      onOpenLinkedInModal();
                    }
                  }}
                  className="p-3 rounded-xl glass-panel text-slate-300 hover:text-[#0a66c2] hover:border-sky-500/40 hover:bg-sky-500/10 transition-all duration-200 active:scale-95"
                  title="Connect on LinkedIn"
                  aria-label="LinkedIn Profile"
                >
                  <LinkedinIcon className="w-5 h-5" />
                </a>
              </div>
            </div>

            {/* Quick Metrics Bar */}
            <div className="pt-4 grid grid-cols-3 gap-4 max-w-lg border-t border-slate-800/80">
              <div>
                <p className="text-2xl font-bold text-white font-mono">1st</p>
                <p className="text-xs text-slate-400">Year / Sem 1 CS</p>
              </div>
              <div>
                <p className="text-2xl font-bold text-emerald-400 font-mono">10+</p>
                <p className="text-xs text-slate-400">Public Repos</p>
              </div>
              <div>
                <p className="text-2xl font-bold text-white font-mono">100%</p>
                <p className="text-xs text-slate-400">Hands-on Learning</p>
              </div>
            </div>

          </div>

          {/* Right Column: Interactive Developer Terminal */}
          <div className="lg:col-span-5 flex justify-center lg:justify-end">
            <Terminal />
          </div>

        </div>
      </div>
    </section>
  );
};
