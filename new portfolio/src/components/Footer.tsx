import React from 'react';
import { ArrowUp, Mail } from 'lucide-react';
import { portfolioConfig } from '../data/portfolioData';
import { GithubIcon, LinkedinIcon } from './Icons';

export const Footer: React.FC = () => {
  const { personal } = portfolioConfig;

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <footer className="border-t border-slate-800/80 bg-[#06070a] text-slate-400 py-12 relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Top Footer Row */}
        <div className="grid grid-cols-1 md:grid-cols-12 gap-8 pb-10 border-b border-slate-800/60">
          
          {/* Identity & Philosophy */}
          <div className="md:col-span-6 space-y-3">
            <div className="flex items-center gap-2">
              <span className="w-2.5 h-2.5 rounded-full bg-emerald-400"></span>
              <span className="text-base font-bold text-white tracking-tight">{personal.name}</span>
            </div>
            
            <p className="text-sm font-mono text-emerald-300 italic">
              "{personal.philosophy}"
            </p>

            <p className="text-xs text-slate-400 max-w-md leading-relaxed">
              B.Tech Computer Science student at {personal.college}. Passionate about systems, developer tooling, and hands-on software engineering.
            </p>
          </div>

          {/* Quick Nav Links */}
          <div className="md:col-span-3 space-y-2">
            <p className="text-xs font-mono text-slate-300 uppercase tracking-wider">Quick Navigation</p>
            <div className="flex flex-col space-y-1.5 text-xs">
              <a href="#about" className="hover:text-emerald-400 transition-colors">About & Philosophy</a>
              <a href="#projects" className="hover:text-emerald-400 transition-colors">Featured Projects</a>
              <a href="#github" className="hover:text-emerald-400 transition-colors">GitHub Repositories</a>
              <a href="#skills" className="hover:text-emerald-400 transition-colors">Technical Skills</a>
              <a href="#journey" className="hover:text-emerald-400 transition-colors">Learning Journey</a>
              <a href="#contact" className="hover:text-emerald-400 transition-colors">Get in Touch</a>
            </div>
          </div>

          {/* Socials & Connect */}
          <div className="md:col-span-3 space-y-3">
            <p className="text-xs font-mono text-slate-300 uppercase tracking-wider">Connect & Follow</p>
            <div className="flex items-center gap-2.5">
              <a
                href={personal.githubUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="p-2.5 rounded-xl glass-panel text-slate-400 hover:text-white hover:border-emerald-500/40 hover:bg-emerald-500/10 transition-all"
                title="GitHub"
              >
                <GithubIcon className="w-4 h-4" />
              </a>

              <a
                href={personal.linkedinUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="p-2.5 rounded-xl glass-panel text-slate-400 hover:text-sky-400 hover:border-sky-500/40 hover:bg-sky-500/10 transition-all"
                title="LinkedIn Profile"
              >
                <LinkedinIcon className="w-4 h-4" />
              </a>

              <a
                href={`mailto:${personal.email}`}
                className="p-2.5 rounded-xl glass-panel text-slate-400 hover:text-emerald-400 hover:border-emerald-500/40 hover:bg-emerald-500/10 transition-all"
                title="Email"
              >
                <Mail className="w-4 h-4" />
              </a>
            </div>

            <p className="text-[11px] text-slate-500 font-mono">
              GitHub: <a href={personal.githubUrl} target="_blank" rel="noreferrer" className="text-slate-400 hover:underline">@{personal.githubUsername}</a>
            </p>
          </div>

        </div>

        {/* Bottom Footer Row: Copyright & Back to Top */}
        <div className="pt-8 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs font-mono text-slate-500">
          <div className="flex items-center gap-1.5 text-center sm:text-left">
            <span>© {new Date().getFullYear()} {personal.name}. Crafted with React, TypeScript & Tailwind CSS.</span>
          </div>

          <button
            onClick={scrollToTop}
            className="inline-flex items-center gap-1.5 text-slate-400 hover:text-emerald-400 transition-colors p-1.5 rounded-lg hover:bg-slate-900 cursor-pointer"
          >
            <span>Back to top</span>
            <ArrowUp className="w-3.5 h-3.5" />
          </button>
        </div>

      </div>
    </footer>
  );
};
