import React, { useState } from 'react';
import { Code2, Wrench, Globe, Cpu, BookOpen, Sparkles, CheckCircle2 } from 'lucide-react';
import { portfolioConfig } from '../data/portfolioData';

export const Skills: React.FC = () => {
  const [activeTab, setActiveTab] = useState<number>(0);

  const categories = portfolioConfig.skills;

  const getCategoryIcon = (title: string) => {
    switch (title.toLowerCase()) {
      case 'programming languages':
        return <Code2 className="w-4 h-4 text-emerald-400" />;
      case 'web development':
        return <Globe className="w-4 h-4 text-cyan-400" />;
      case 'developer tools':
        return <Wrench className="w-4 h-4 text-amber-400" />;
      case 'technologies & concepts':
      case 'technologies':
        return <Cpu className="w-4 h-4 text-indigo-400" />;
      case 'currently learning':
        return <BookOpen className="w-4 h-4 text-lime-400" />;
      default:
        return <Sparkles className="w-4 h-4 text-emerald-400" />;
    }
  };

  const getLevelBadge = (level: string) => {
    switch (level) {
      case 'Core':
        return 'bg-emerald-500/10 text-emerald-400 border-emerald-500/30';
      case 'Proficient':
        return 'bg-sky-500/10 text-sky-400 border-sky-500/30';
      case 'Exploring':
        return 'bg-amber-500/10 text-amber-400 border-amber-500/30';
      case 'Learning':
        return 'bg-lime-500/10 text-lime-400 border-lime-500/30';
      default:
        return 'bg-slate-500/10 text-slate-400 border-slate-500/30';
    }
  };

  return (
    <section id="skills" className="py-20 md:py-28 relative bg-[#090a0f]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-12">
          <div>
            <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-emerald-500/10 text-emerald-400 text-xs font-mono font-medium border border-emerald-500/20 mb-3">
              <Code2 className="w-3.5 h-3.5" /> Technical Arsenal
            </div>
            <h2 className="text-3xl sm:text-4xl font-extrabold text-white tracking-tight">
              Skills & <span className="text-transparent bg-clip-text bg-gradient-to-r from-emerald-400 to-lime-300">Technologies</span>
            </h2>
            <p className="mt-2 text-slate-400 max-w-xl text-sm sm:text-base">
              Hands-on tools, languages, and systems I actively code with and study. Transparently categorized by practical proficiency.
            </p>
          </div>

          <div className="mt-4 md:mt-0 text-xs font-mono text-slate-500">
            Easily updated via <code className="text-emerald-400">src/data/portfolioData.ts</code>
          </div>
        </div>

        {/* Category Filter Tabs */}
        <div className="flex items-center gap-2 overflow-x-auto pb-3 mb-8 no-scrollbar">
          {categories.map((cat, idx) => (
            <button
              key={cat.title}
              onClick={() => setActiveTab(idx)}
              className={`flex items-center gap-2 px-4 py-2.5 rounded-xl text-xs sm:text-sm font-medium whitespace-nowrap transition-all ${
                activeTab === idx
                  ? 'bg-slate-800 text-emerald-300 border border-emerald-500/40 shadow-sm shadow-emerald-500/10 font-bold'
                  : 'glass-panel text-slate-400 hover:text-slate-200 hover:border-slate-700'
              }`}
            >
              {getCategoryIcon(cat.title)}
              <span>{cat.title}</span>
              <span className="text-[10px] px-1.5 py-0.2 rounded-full bg-slate-900 text-slate-400">
                {cat.skills.length}
              </span>
            </button>
          ))}
        </div>

        {/* Active Category Display */}
        <div className="rounded-2xl glass-panel border border-slate-800/90 p-6 sm:p-8">
          <div className="mb-6 pb-4 border-b border-slate-800/80 flex flex-col sm:flex-row sm:items-center justify-between gap-2">
            <div>
              <h3 className="text-xl font-bold text-white flex items-center gap-2">
                {getCategoryIcon(categories[activeTab].title)}
                <span>{categories[activeTab].title}</span>
              </h3>
              <p className="text-xs sm:text-sm text-slate-400 mt-1">
                {categories[activeTab].description}
              </p>
            </div>
            <span className="text-xs font-mono text-emerald-400/90">
              {categories[activeTab].skills.length} competencies listed
            </span>
          </div>

          {/* Skills Grid */}
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
            {categories[activeTab].skills.map((skill) => (
              <div
                key={skill.name}
                className="rounded-xl bg-[#0b0e16] border border-slate-800/90 hover:border-emerald-500/30 p-4 space-y-2 transition-all duration-200 hover:-translate-y-0.5 group"
              >
                <div className="flex items-center justify-between">
                  <span className="font-bold text-white text-sm group-hover:text-emerald-300 transition-colors">
                    {skill.name}
                  </span>
                  <span className={`text-[10px] font-mono px-2 py-0.5 rounded border ${getLevelBadge(skill.level)}`}>
                    {skill.level}
                  </span>
                </div>
                {skill.description && (
                  <p className="text-xs text-slate-400 leading-relaxed font-sans">
                    {skill.description}
                  </p>
                )}
              </div>
            ))}
          </div>
        </div>

        {/* All Skills Summary Matrix / Chips */}
        <div className="mt-12 pt-8 border-t border-slate-800/80">
          <h4 className="text-xs font-mono text-slate-400 uppercase tracking-wider mb-4">
            Complete Stack Snapshot at a Glance
          </h4>
          <div className="flex flex-wrap gap-2">
            {categories.flatMap(c => c.skills).map((s, i) => (
              <span
                key={i}
                className="inline-flex items-center gap-1.5 px-3 py-1 rounded-lg bg-slate-900/80 text-slate-300 border border-slate-800 text-xs font-mono hover:border-emerald-500/40 hover:text-white transition-colors"
              >
                <CheckCircle2 className="w-3 h-3 text-emerald-400" />
                {s.name}
              </span>
            ))}
          </div>
        </div>

      </div>
    </section>
  );
};
