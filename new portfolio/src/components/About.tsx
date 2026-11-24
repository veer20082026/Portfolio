import React from 'react';
import { 
  Terminal, 
  Cpu, 
  Rocket, 
  GraduationCap, 
  BrainCircuit, 
  Compass 
} from 'lucide-react';
import { portfolioConfig } from '../data/portfolioData';

export const About: React.FC = () => {
  const { personal } = portfolioConfig;

  const pillars = [
    {
      icon: <Terminal className="w-5 h-5 text-emerald-400" />,
      title: "Learning by Building",
      description: "Theory comes alive when converted into code. Rather than passive tutorials, I learn by getting my hands dirty—writing command line utilities, building prototypes, and breaking things to understand how they work under the hood."
    },
    {
      icon: <BrainCircuit className="w-5 h-5 text-cyan-400" />,
      title: "AI & Practical Automation",
      description: "Fascinated by applying LLMs and modern APIs to solve real developer bottlenecks. From Natural Language terminal interfaces to automated doc checkers, I focus on pragmatic utilities that save time."
    },
    {
      icon: <Cpu className="w-5 h-5 text-indigo-400" />,
      title: "Strong Foundations First",
      description: "Diving deep into computer science fundamentals in my first semester at Newton School of Technology: algorithmic problem solving, clean system design, and operating systems principles."
    },
    {
      icon: <Rocket className="w-5 h-5 text-amber-400" />,
      title: "Builder & Product Mindset",
      description: "Interested in the intersection of engineering and entrepreneurship. Software isn't just code; it's about delivering intuitive, reliable tools that make someone's workflow noticeably smoother."
    }
  ];

  return (
    <section id="about" className="py-20 md:py-28 relative bg-[#08090d]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="max-w-3xl mb-16">
          <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-emerald-500/10 text-emerald-400 text-xs font-mono font-medium border border-emerald-500/20 mb-3">
            <GraduationCap className="w-3.5 h-3.5" /> Identity & Philosophy
          </div>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-white tracking-tight">
            About <span className="text-transparent bg-clip-text bg-gradient-to-r from-emerald-400 to-lime-300">Me</span>
          </h2>
          <p className="mt-3 text-slate-300 text-base sm:text-lg leading-relaxed">
            I am a first-semester Computer Science student at <strong className="text-white">{personal.college}</strong>, driven by an obsession with understanding how software works from first principles.
          </p>
        </div>

        {/* Narrative & Quote Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-stretch mb-16">
          
          {/* Main Story Text */}
          <div className="lg:col-span-7 rounded-2xl glass-panel border border-slate-800/80 p-7 sm:p-8 space-y-4">
            <h3 className="text-xl font-bold text-white flex items-center gap-2">
              <Compass className="w-5 h-5 text-emerald-400" />
              <span>Who I Am & How I Work</span>
            </h3>

            <p className="text-slate-300 text-sm sm:text-base leading-relaxed">
              My engineering journey began with curious experimentation: writing bash snippets, tweaking web interfaces, and taking apart existing scripts to see how they tick. As a student at Newton School of Technology, I balance rigorous academic lectures with late-night project shipping.
            </p>

            <p className="text-slate-300 text-sm sm:text-base leading-relaxed">
              I don't believe in vanity metrics or exaggerated buzzwords. I believe in writing readable code, pushing regular commits to GitHub, learning from build errors, and iteratively refining architecture until a tool feels effortless to use.
            </p>

            <div className="pt-3 border-t border-slate-800 flex flex-wrap gap-4 text-xs font-mono text-slate-400">
              <div className="flex items-center gap-1.5">
                <span className="w-1.5 h-1.5 rounded-full bg-emerald-400"></span>
                <span>Institution: Newton School of Technology, Pune</span>
              </div>
              <div className="flex items-center gap-1.5">
                <span className="w-1.5 h-1.5 rounded-full bg-emerald-400"></span>
                <span>Program: B.Tech Computer Science</span>
              </div>
              <div className="flex items-center gap-1.5">
                <span className="w-1.5 h-1.5 rounded-full bg-emerald-400"></span>
                <span>Status: First Year, First Semester</span>
              </div>
            </div>
          </div>

          {/* Philosophy Showcase Box */}
          <div className="lg:col-span-5 rounded-2xl glass-panel border border-emerald-500/30 p-7 sm:p-8 flex flex-col justify-between relative overflow-hidden bg-gradient-to-br from-[#0c1017] to-[#090b10]">
            <div className="absolute top-0 right-0 w-32 h-32 bg-emerald-500/10 rounded-full blur-2xl pointer-events-none"></div>

            <div className="space-y-4">
              <span className="text-xs font-mono text-emerald-400 uppercase tracking-widest">Guiding Principle</span>
              <blockquote className="text-2xl sm:text-3xl font-bold text-white tracking-tight leading-snug">
                "{personal.philosophy}"
              </blockquote>
              <p className="text-xs sm:text-sm text-slate-400 leading-relaxed">
                Failure in a compile step or test runner isn't a dead-end; it's the exact feedback loop where real learning happens. Every bug fixed is a concept permanently understood.
              </p>
            </div>

            <div className="pt-6 mt-6 border-t border-slate-800/80 flex items-center justify-between text-xs font-mono text-slate-400">
              <span className="text-emerald-400 font-bold">— Veer Pratap Singh</span>
              <span>Pune, Maharashtra</span>
            </div>
          </div>

        </div>

        {/* 4 Pillars Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {pillars.map((pillar, idx) => (
            <div
              key={idx}
              className="rounded-xl glass-panel border border-slate-800/80 hover:border-emerald-500/30 p-6 space-y-3 transition-all duration-200 hover:-translate-y-1"
            >
              <div className="p-2.5 rounded-lg bg-slate-900 w-fit border border-slate-800">
                {pillar.icon}
              </div>
              <h4 className="text-base font-bold text-white">{pillar.title}</h4>
              <p className="text-xs text-slate-400 leading-relaxed">{pillar.description}</p>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
};
