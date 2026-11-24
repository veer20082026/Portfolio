import React from 'react';
import { Milestone, CheckCircle2, Target, AlertTriangle, Compass, Sparkles } from 'lucide-react';
import { portfolioConfig } from '../data/portfolioData';
import { JourneyMilestone } from '../types/portfolio';

export const Journey: React.FC = () => {
  const milestones = portfolioConfig.journey;

  const getCategoryConfig = (category: JourneyMilestone['category']) => {
    switch (category) {
      case 'foundation':
        return {
          color: 'text-emerald-400',
          badge: 'bg-emerald-500/10 text-emerald-400 border-emerald-500/30',
          icon: <Compass className="w-4 h-4" />
        };
      case 'project':
        return {
          color: 'text-sky-400',
          badge: 'bg-sky-500/10 text-sky-400 border-sky-500/30',
          icon: <CheckCircle2 className="w-4 h-4" />
        };
      case 'exploring':
        return {
          color: 'text-indigo-400',
          badge: 'bg-indigo-500/10 text-indigo-400 border-indigo-500/30',
          icon: <Sparkles className="w-4 h-4" />
        };
      case 'challenge':
        return {
          color: 'text-amber-400',
          badge: 'bg-amber-500/10 text-amber-400 border-amber-500/30',
          icon: <AlertTriangle className="w-4 h-4" />
        };
      case 'future':
        return {
          color: 'text-lime-400',
          badge: 'bg-lime-500/10 text-lime-400 border-lime-500/30',
          icon: <Target className="w-4 h-4" />
        };
      default:
        return {
          color: 'text-slate-400',
          badge: 'bg-slate-500/10 text-slate-400 border-slate-500/30',
          icon: <Milestone className="w-4 h-4" />
        };
    }
  };

  return (
    <section id="journey" className="py-20 md:py-28 relative bg-[#08090d]">
      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="text-center max-w-2xl mx-auto mb-16">
          <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-emerald-500/10 text-emerald-400 text-xs font-mono font-medium border border-emerald-500/20 mb-3">
            <Milestone className="w-3.5 h-3.5" /> First-Year Engineering Roadmap
          </div>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-white tracking-tight">
            My Learning <span className="text-transparent bg-clip-text bg-gradient-to-r from-emerald-400 to-lime-300">Journey</span>
          </h2>
          <p className="mt-2 text-slate-400 text-sm sm:text-base">
            From Day 1 at Newton School of Technology to building autonomous developer tools. The milestones, hurdles, and technical horizons.
          </p>
        </div>

        {/* Timeline Container */}
        <div className="relative pl-6 sm:pl-8 border-l border-slate-800 space-y-12">
          {milestones.map((item, idx) => {
            const config = getCategoryConfig(item.category);

            return (
              <div key={idx} className="relative group">
                
                {/* Timeline Dot Indicator */}
                <div className="absolute -left-[31px] sm:-left-[39px] top-1.5 w-6 h-6 rounded-full bg-[#08090d] border-2 border-slate-700 flex items-center justify-center group-hover:border-emerald-400 group-hover:scale-110 transition-all">
                  <div className="w-2 h-2 rounded-full bg-emerald-400"></div>
                </div>

                {/* Milestone Card */}
                <div className="rounded-2xl glass-panel border border-slate-800/80 group-hover:border-slate-700/80 p-6 sm:p-7 space-y-4 transition-all duration-200">
                  
                  {/* Card Top Meta */}
                  <div className="flex flex-wrap items-center justify-between gap-2">
                    <div className="flex items-center gap-2">
                      <span className={`inline-flex items-center gap-1.5 px-2.5 py-0.5 rounded-full text-xs font-mono border ${config.badge}`}>
                        {config.icon}
                        <span className="capitalize">{item.category}</span>
                      </span>
                      <span className="text-xs font-mono text-slate-400">
                        {item.period} • {item.year}
                      </span>
                    </div>

                    <span className="text-xs font-mono text-slate-500">
                      Phase #{idx + 1}
                    </span>
                  </div>

                  {/* Title & Subtitle */}
                  <div>
                    <h3 className="text-lg sm:text-xl font-bold text-white group-hover:text-emerald-300 transition-colors">
                      {item.title}
                    </h3>
                    <p className="text-xs sm:text-sm font-medium text-slate-400 mt-0.5">
                      {item.subtitle}
                    </p>
                  </div>

                  {/* Description */}
                  <p className="text-sm text-slate-300 leading-relaxed">
                    {item.description}
                  </p>

                  {/* Key Takeaway Box */}
                  {item.keyTakeaway && (
                    <div className="p-3 rounded-xl bg-slate-900/70 border border-slate-800 text-xs font-mono text-slate-300">
                      <span className="text-emerald-400 font-semibold">Key Takeaway: </span>
                      <span className="italic">"{item.keyTakeaway}"</span>
                    </div>
                  )}

                  {/* Tags */}
                  <div className="flex flex-wrap gap-1.5 pt-2">
                    {item.tags.map((tag) => (
                      <span
                        key={tag}
                        className="text-[11px] font-mono px-2 py-0.5 rounded bg-[#090b10] text-slate-400 border border-slate-800"
                      >
                        #{tag}
                      </span>
                    ))}
                  </div>

                </div>

              </div>
            );
          })}
        </div>

      </div>
    </section>
  );
};
