import React, { useState } from 'react';
import { ExternalLink, Terminal, CheckCircle2, Clock, Sparkles, Code2, Layers, Cpu } from 'lucide-react';
import { portfolioConfig } from '../data/portfolioData';
import { Project } from '../types/portfolio';
import { GithubIcon } from './Icons';

export const Projects: React.FC = () => {
  const [selectedCategory, setSelectedCategory] = useState<string>('all');
  const [activeProjectModal, setActiveProjectModal] = useState<Project | null>(null);

  const projects = portfolioConfig.featuredProjects;

  const categories = [
    { id: 'all', label: 'All Projects' },
    { id: 'tool', label: 'Terminal & CLI' },
    { id: 'developer-tools', label: 'Developer Tools' },
    { id: 'ml', label: 'Machine Learning' }
  ];

  const filteredProjects = selectedCategory === 'all'
    ? projects
    : projects.filter(p => p.category === selectedCategory);

  const getStatusBadge = (status: Project['status']) => {
    switch (status) {
      case 'In Development':
        return {
          bg: 'bg-emerald-500/10 text-emerald-400 border-emerald-500/30',
          dot: 'bg-emerald-400 animate-pulse',
          icon: <Terminal className="w-3 h-3" />
        };
      case 'Prototype':
        return {
          bg: 'bg-sky-500/10 text-sky-400 border-sky-500/30',
          dot: 'bg-sky-400',
          icon: <Code2 className="w-3 h-3" />
        };
      case 'Planned':
        return {
          bg: 'bg-amber-500/10 text-amber-400 border-amber-500/30',
          dot: 'bg-amber-400',
          icon: <Clock className="w-3 h-3" />
        };
      default:
        return {
          bg: 'bg-slate-500/10 text-slate-400 border-slate-500/30',
          dot: 'bg-slate-400',
          icon: <CheckCircle2 className="w-3 h-3" />
        };
    }
  };

  return (
    <section id="projects" className="py-20 md:py-28 relative bg-[#08090d]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-12">
          <div>
            <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-emerald-500/10 text-emerald-400 text-xs font-mono font-medium border border-emerald-500/20 mb-3">
              <Sparkles className="w-3 h-3" /> Portfolio Showcase
            </div>
            <h2 className="text-3xl sm:text-4xl font-extrabold text-white tracking-tight">
              Featured <span className="text-transparent bg-clip-text bg-gradient-to-r from-emerald-400 to-lime-300">Projects & Builds</span>
            </h2>
            <p className="mt-2 text-slate-400 max-w-xl text-sm sm:text-base">
              Practical utilities and applications built to solve genuine developer friction and everyday problems.
            </p>
          </div>

          {/* Filter Pills */}
          <div className="mt-6 md:mt-0 flex flex-wrap gap-2">
            {categories.map((c) => (
              <button
                key={c.id}
                onClick={() => setSelectedCategory(c.id)}
                className={`px-3.5 py-1.5 rounded-lg text-xs font-medium transition-all ${
                  selectedCategory === c.id
                    ? 'bg-emerald-500 text-slate-950 font-bold shadow-sm shadow-emerald-500/30'
                    : 'glass-panel text-slate-400 hover:text-slate-200 hover:border-slate-700'
                }`}
              >
                {c.label}
              </button>
            ))}
          </div>
        </div>

        {/* Project Cards Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {filteredProjects.map((project, idx) => {
            const statusConfig = getStatusBadge(project.status);

            return (
              <div
                key={project.id}
                className="group rounded-2xl glass-panel border border-slate-800/80 hover:border-emerald-500/40 p-6 flex flex-col justify-between transition-all duration-300 hover:shadow-xl hover:shadow-emerald-500/5 hover:-translate-y-1.5 relative overflow-hidden"
              >
                {/* Subtle top card glow */}
                <div className="absolute top-0 left-0 right-0 h-1 bg-gradient-to-r from-emerald-500/0 via-emerald-500/50 to-lime-400/0 opacity-0 group-hover:opacity-100 transition-opacity"></div>

                <div>
                  {/* Top Header: Category & Status */}
                  <div className="flex items-center justify-between mb-4">
                    <span className="text-xs font-mono text-slate-500 uppercase tracking-wider">
                      Project #{idx + 1}
                    </span>
                    <span className={`inline-flex items-center gap-1.5 px-2.5 py-1 rounded-full text-[11px] font-mono border ${statusConfig.bg}`}>
                      <span className={`w-1.5 h-1.5 rounded-full ${statusConfig.dot}`}></span>
                      <span>{project.status}</span>
                    </span>
                  </div>

                  {/* Project Title */}
                  <h3 className="text-xl font-bold text-white group-hover:text-emerald-300 transition-colors">
                    {project.title}
                  </h3>

                  {/* Tagline / Subtitle */}
                  <p className="text-xs text-emerald-400/90 font-mono mt-1">
                    {project.tagline}
                  </p>

                  {/* Visual Mockup Preview Box */}
                  <div className="my-5 rounded-xl bg-[#090b10] border border-slate-800/90 p-3.5 font-mono text-xs overflow-hidden relative group-hover:border-slate-700 transition-colors">
                    <div className="flex items-center justify-between pb-2 mb-2 border-b border-slate-800/80 text-[10px] text-slate-500">
                      <span className="flex items-center gap-1">
                        <Terminal className="w-3 h-3 text-emerald-400" />
                        {project.id}.sh
                      </span>
                      <span>preview</span>
                    </div>

                    {project.id === 'nl-to-terminal' && (
                      <div className="space-y-1 text-slate-300">
                        <p className="text-slate-400">$ nlt <span className="text-emerald-400">"find all pdfs over 10MB in Downloads"</span></p>
                        <p className="text-cyan-400">&gt; Command: find ~/Downloads -name "*.pdf" -size +10M</p>
                        <p className="text-emerald-400/90">&gt; [OK] Executing safely in current shell...</p>
                      </div>
                    )}

                    {project.id === 'run-my-readme' && (
                      <div className="space-y-1 text-slate-300">
                        <p className="text-slate-400">$ docverify <span className="text-sky-400">./README.md</span></p>
                        <p className="text-slate-400">[✓] Extracted 4 code snippets</p>
                        <p className="text-emerald-400">[PASS] All dependencies & commands verified</p>
                      </div>
                    )}

                    {project.id === 'ml-capsule' && (
                      <div className="space-y-1 text-slate-300">
                        <p className="text-amber-400">🧠 ML-CaPsule: python -m ml_capsule</p>
                        <p className="text-slate-400">📊 Modules: Supervised, Neural Nets & EDA</p>
                        <p className="text-emerald-400">[Ready] Open curriculum for practical ML learning</p>
                      </div>
                    )}
                  </div>

                  {/* Description */}
                  <p className="text-sm text-slate-300 leading-relaxed mb-4">
                    {project.description}
                  </p>

                  {/* Highlights Bullet List */}
                  <div className="space-y-1.5 mb-6">
                    {project.highlights.map((h, i) => (
                      <div key={i} className="flex items-start gap-2 text-xs text-slate-400">
                        <span className="text-emerald-400 mt-0.5">•</span>
                        <span>{h}</span>
                      </div>
                    ))}
                  </div>
                </div>

                <div>
                  {/* Tech Stack Tags */}
                  <div className="flex flex-wrap gap-1.5 mb-6 pt-4 border-t border-slate-800/80">
                    {project.technologies.map((tech) => (
                      <span
                        key={tech}
                        className="text-[11px] font-mono px-2 py-0.5 rounded-md bg-slate-900 text-slate-300 border border-slate-800"
                      >
                        {tech}
                      </span>
                    ))}
                  </div>

                  {/* Action Links */}
                  <div className="flex items-center gap-3">
                    {project.githubUrl ? (
                      <a
                        href={project.githubUrl}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="flex-1 inline-flex items-center justify-center gap-2 px-4 py-2.5 rounded-xl bg-slate-900 hover:bg-slate-800 text-slate-200 hover:text-white border border-slate-800 hover:border-slate-700 text-xs font-medium transition-all"
                      >
                        <GithubIcon className="w-3.5 h-3.5" />
                        <span>Source Code</span>
                      </a>
                    ) : (
                      <span className="flex-1 inline-flex items-center justify-center gap-2 px-4 py-2.5 rounded-xl bg-slate-900/40 text-slate-500 border border-slate-800/40 text-xs font-mono">
                        Repo In Prep
                      </span>
                    )}

                    {project.liveUrl ? (
                      <a
                        href={project.liveUrl}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="inline-flex items-center justify-center gap-1.5 px-4 py-2.5 rounded-xl bg-emerald-500 hover:bg-emerald-400 text-slate-950 text-xs font-bold transition-all shadow-sm shadow-emerald-500/20"
                      >
                        <span>Live Demo</span>
                        <ExternalLink className="w-3 h-3" />
                      </a>
                    ) : (
                      <button
                        onClick={() => setActiveProjectModal(project)}
                        className="inline-flex items-center justify-center gap-1.5 px-3 py-2.5 rounded-xl text-xs text-slate-400 hover:text-emerald-400 hover:bg-slate-800/50 transition-colors"
                        title="Architecture & notes"
                      >
                        <Layers className="w-3.5 h-3.5" />
                        <span>Specs</span>
                      </button>
                    )}
                  </div>
                </div>
              </div>
            );
          })}
        </div>

        {/* Modal for Deep Project Specs */}
        {activeProjectModal && (
          <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/80 backdrop-blur-sm animate-fadeIn">
            <div className="max-w-xl w-full rounded-2xl glass-panel border border-slate-700 p-6 md:p-8 space-y-5 relative shadow-2xl">
              <div className="flex items-start justify-between">
                <div>
                  <span className="text-xs font-mono text-emerald-400">{activeProjectModal.status}</span>
                  <h3 className="text-2xl font-bold text-white mt-1">{activeProjectModal.title}</h3>
                </div>
                <button
                  onClick={() => setActiveProjectModal(null)}
                  className="p-1 rounded-lg text-slate-400 hover:text-white hover:bg-slate-800 transition-colors"
                >
                  ✕
                </button>
              </div>

              <div className="space-y-3 text-sm text-slate-300">
                <div>
                  <h4 className="text-xs font-mono text-slate-400 uppercase tracking-wider mb-1">Architecture & Purpose</h4>
                  <p className="leading-relaxed">{activeProjectModal.longDescription || activeProjectModal.description}</p>
                </div>

                {activeProjectModal.architectureNotes && (
                  <div className="p-3 rounded-lg bg-slate-900/80 border border-slate-800">
                    <h5 className="text-xs font-mono text-emerald-400 mb-1 flex items-center gap-1.5">
                      <Cpu className="w-3.5 h-3.5" /> System Design Note:
                    </h5>
                    <p className="text-xs text-slate-300 font-mono">{activeProjectModal.architectureNotes}</p>
                  </div>
                )}

                <div>
                  <h4 className="text-xs font-mono text-slate-400 uppercase tracking-wider mb-2">Key Highlights</h4>
                  <ul className="space-y-1.5">
                    {activeProjectModal.highlights.map((h, i) => (
                      <li key={i} className="text-xs text-slate-300 flex items-center gap-2">
                        <CheckCircle2 className="w-3.5 h-3.5 text-emerald-400 shrink-0" />
                        <span>{h}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>

              <div className="pt-4 border-t border-slate-800 flex justify-end">
                <button
                  onClick={() => setActiveProjectModal(null)}
                  className="px-5 py-2 rounded-xl bg-slate-800 hover:bg-slate-700 text-white text-xs font-medium transition-colors"
                >
                  Close
                </button>
              </div>
            </div>
          </div>
        )}

      </div>
    </section>
  );
};
