import React from 'react';
import { ArrowRight, CheckCircle2 } from 'lucide-react';
import { portfolioConfig } from '../data/portfolioData';
import { LinkedinIcon } from './Icons';

interface LinkedInCardProps {
  onOpenEditModal?: () => void;
}

export const LinkedInCard: React.FC<LinkedInCardProps> = () => {
  const { personal } = portfolioConfig;

  return (
    <div className="rounded-2xl glass-panel border border-sky-500/20 p-6 sm:p-8 relative overflow-hidden bg-gradient-to-br from-[#0c1322] via-[#0e172a] to-[#090b10]">
      {/* Decorative radial highlight */}
      <div className="absolute top-0 right-0 w-48 h-48 bg-sky-500/10 rounded-full blur-3xl pointer-events-none"></div>

      <div className="relative z-10 flex flex-col md:flex-row items-start md:items-center justify-between gap-6">
        <div className="space-y-3 max-w-xl">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-sky-500/10 text-sky-400 border border-sky-500/20 text-xs font-mono">
            <LinkedinIcon className="w-3.5 h-3.5" /> Professional Network
          </div>

          <h3 className="text-2xl font-bold text-white tracking-tight">
            Connect with me on <span className="text-sky-400">LinkedIn</span>
          </h3>

          <p className="text-sm text-slate-300 leading-relaxed">
            I share my build updates, open-source milestones, technical lessons learned at Newton School of Technology, and thoughts on AI developer tools.
          </p>

          <div className="flex flex-wrap items-center gap-4 text-xs font-mono text-slate-400 pt-1">
            <span className="flex items-center gap-1.5">
              <CheckCircle2 className="w-3.5 h-3.5 text-sky-400" /> Open to internship conversations
            </span>
            <span className="flex items-center gap-1.5">
              <CheckCircle2 className="w-3.5 h-3.5 text-sky-400" /> Technical collaborations
            </span>
          </div>
        </div>

        <div className="flex flex-col sm:flex-row items-stretch sm:items-center gap-3 w-full md:w-auto">
          <a
            href={personal.linkedinUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center justify-center gap-2 px-6 py-3.5 rounded-xl bg-[#0a66c2] hover:bg-[#004182] text-white text-sm font-bold shadow-lg shadow-sky-900/30 transition-all duration-200 active:scale-95 group"
          >
            <LinkedinIcon className="w-4 h-4" />
            <span>View LinkedIn Profile</span>
            <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
          </a>
        </div>
      </div>
    </div>
  );
};
