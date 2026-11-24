import React, { useState, useRef, useEffect } from 'react';
import { Terminal as TerminalIcon, CornerDownLeft, Sparkles, Copy, Check } from 'lucide-react';
import { portfolioConfig } from '../data/portfolioData';

interface CommandLog {
  id: string;
  command: string;
  output: React.ReactNode;
  time: string;
}

export const Terminal: React.FC = () => {
  const [input, setInput] = useState('');
  const [copied, setCopied] = useState(false);
  const [history, setHistory] = useState<CommandLog[]>([
    {
      id: 'init-1',
      command: 'whoami',
      output: (
        <div className="space-y-1 text-slate-300">
          <p><span className="text-emerald-400 font-semibold">{portfolioConfig.personal.name}</span> — {portfolioConfig.personal.role}</p>
          <p className="text-slate-400 text-xs">🎓 {portfolioConfig.personal.college} • {portfolioConfig.personal.currentSemester}</p>
          <p className="text-emerald-300/90 italic text-xs mt-1">"{portfolioConfig.personal.philosophy}"</p>
        </div>
      ),
      time: '13:30'
    },
    {
      id: 'init-2',
      command: 'cat status.json',
      output: (
        <div className="text-xs font-mono text-emerald-400/90 bg-emerald-950/20 p-2 rounded border border-emerald-500/20">
          <span className="text-slate-400">{"{"}</span><br />
          &nbsp;&nbsp;<span className="text-emerald-300">"status"</span>: <span className="text-amber-300">"Active Builder"</span>,<br />
          &nbsp;&nbsp;<span className="text-emerald-300">"location"</span>: <span className="text-amber-300">"Pune, Maharashtra"</span>,<br />
          &nbsp;&nbsp;<span className="text-emerald-300">"current_focus"</span>: <span className="text-amber-300">"GROQ LLM Playground & Natural Language Terminal"</span>,<br />
          &nbsp;&nbsp;<span className="text-emerald-300">"learning"</span>: <span className="text-amber-300">"Systems Programming & Full-Stack Architecture"</span><br />
          <span className="text-slate-400">{"}"}</span>
        </div>
      ),
      time: '13:31'
    }
  ]);

  const endRef = useRef<HTMLDivElement>(null);
  const inputRef = useRef<HTMLInputElement>(null);

  useEffect(() => {
    endRef.current?.scrollIntoView({ behavior: 'smooth' });
  }, [history]);

  const handleCommand = (cmdText: string) => {
    const raw = cmdText.trim();
    if (!raw) return;

    const lower = raw.toLowerCase();
    const id = Date.now().toString();
    const time = new Date().toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' });

    let outputNode: React.ReactNode = null;

    switch (lower) {
      case 'help':
        outputNode = (
          <div className="space-y-1.5 text-xs">
            <p className="text-slate-400">Available commands:</p>
            <div className="grid grid-cols-2 sm:grid-cols-3 gap-1.5 pt-1">
              <div><span className="text-emerald-400 font-bold">whoami</span> - Identity & philosophy</div>
              <div><span className="text-emerald-400 font-bold">projects</span> - View top projects</div>
              <div><span className="text-emerald-400 font-bold">skills</span> - Technical skill stacks</div>
              <div><span className="text-emerald-400 font-bold">about</span> - College & background</div>
              <div><span className="text-emerald-400 font-bold">contact</span> - Reach out via email</div>
              <div><span className="text-emerald-400 font-bold">github</span> - Jump to GitHub repos</div>
              <div><span className="text-emerald-400 font-bold">quote</span> - Veer's motto</div>
              <div><span className="text-emerald-400 font-bold">clear</span> - Clear terminal logs</div>
            </div>
          </div>
        );
        break;

      case 'whoami':
        outputNode = (
          <div className="text-xs space-y-1">
            <p className="font-semibold text-emerald-400">{portfolioConfig.personal.name}</p>
            <p className="text-slate-300">{portfolioConfig.personal.description}</p>
            <p className="text-slate-400">Philosophy: <span className="text-emerald-300 font-medium">"{portfolioConfig.personal.philosophy}"</span></p>
          </div>
        );
        break;

      case 'about':
        outputNode = (
          <div className="text-xs space-y-1.5 text-slate-300">
            <p>🏫 <strong className="text-white">College:</strong> {portfolioConfig.personal.college}</p>
            <p>📚 <strong className="text-white">Degree:</strong> {portfolioConfig.personal.degree} ({portfolioConfig.personal.currentSemester})</p>
            <p>💡 <strong className="text-white">Focus:</strong> Practical projects, command-line utilities, AI pipelines, and clean software architecture.</p>
          </div>
        );
        break;

      case 'projects':
        outputNode = (
          <div className="space-y-2 text-xs">
            <p className="text-slate-400">Featured Active & Planned Projects:</p>
            {portfolioConfig.featuredProjects.map((p) => (
              <div key={p.id} className="p-2 rounded bg-slate-900/60 border border-slate-800">
                <div className="flex justify-between items-center">
                  <span className="text-emerald-400 font-bold">{p.title}</span>
                  <span className="text-[10px] px-1.5 py-0.5 rounded bg-emerald-500/10 text-emerald-400 border border-emerald-500/20">{p.status}</span>
                </div>
                <p className="text-slate-300 text-[11px] mt-0.5">{p.description}</p>
                <p className="text-slate-500 text-[10px] mt-1 font-mono">{p.technologies.join(' • ')}</p>
              </div>
            ))}
            <p className="text-[11px] text-emerald-400/80">Scroll down to the Projects section for full cards & deep links!</p>
          </div>
        );
        break;

      case 'skills':
        outputNode = (
          <div className="space-y-1.5 text-xs">
            <p className="text-slate-400">Core technical proficiencies:</p>
            <p><span className="text-emerald-400">Languages:</span> Python, C, JavaScript, TypeScript, SQL</p>
            <p><span className="text-emerald-400">Web & Frontend:</span> React, Tailwind CSS, HTML5/CSS3, REST APIs</p>
            <p><span className="text-emerald-400">Developer Tooling:</span> Git, GitHub, Linux/Zsh, VS Code, Homebrew</p>
            <p><span className="text-emerald-400">Exploring:</span> LLM APIs, OS concepts, Systems Architecture</p>
          </div>
        );
        break;

      case 'contact':
        outputNode = (
          <div className="text-xs space-y-1 text-slate-300">
            <p>📧 Email: <a href={`mailto:${portfolioConfig.personal.email}`} className="text-emerald-400 hover:underline">{portfolioConfig.personal.email}</a></p>
            <p>🐙 GitHub: <a href={portfolioConfig.personal.githubUrl} target="_blank" rel="noreferrer" className="text-emerald-400 hover:underline">{portfolioConfig.personal.githubUrl}</a></p>
            <p>💼 LinkedIn: <a href={portfolioConfig.personal.linkedinUrl} target="_blank" rel="noreferrer" className="text-emerald-400 hover:underline">Veer Pratap Singh</a></p>
          </div>
        );
        break;

      case 'github':
        outputNode = (
          <div className="text-xs text-slate-300">
            <p>Redirecting to GitHub: <a href={portfolioConfig.personal.githubUrl} target="_blank" rel="noreferrer" className="text-emerald-400 hover:underline font-mono">github.com/{portfolioConfig.personal.githubUsername}</a></p>
          </div>
        );
        break;

      case 'quote':
        outputNode = (
          <div className="text-xs font-mono text-emerald-300 p-2 rounded bg-emerald-950/30 border border-emerald-500/30">
            &gt; "I build things, break things, and learn by creating."
          </div>
        );
        break;

      case 'clear':
        setHistory([]);
        setInput('');
        return;

      case 'sudo rm -rf /':
      case 'rm -rf /':
        outputNode = (
          <div className="text-xs text-rose-400 font-mono">
            ⚠️ Permission denied: Nice try! Veer's devbox is immutable and resilient.
          </div>
        );
        break;

      default:
        outputNode = (
          <div className="text-xs text-rose-400/90 font-mono">
            zsh: command not found: {raw}. Type <span className="text-emerald-400 underline cursor-pointer" onClick={() => handleCommand('help')}>help</span> for list of commands.
          </div>
        );
    }

    setHistory((prev) => [...prev, { id, command: raw, output: outputNode, time }]);
    setInput('');
  };

  const onSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    handleCommand(input);
  };

  const copyTerminalContent = () => {
    const text = history.map(h => `$ ${h.command}`).join('\n');
    navigator.clipboard.writeText(text);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  const quickCommands = ['help', 'projects', 'skills', 'about', 'contact', 'clear'];

  return (
    <div className="w-full max-w-2xl rounded-xl overflow-hidden glass-panel border border-slate-800/90 shadow-2xl transition-all duration-300">
      {/* Top Bar Window Header */}
      <div className="bg-[#0b0d14]/90 px-4 py-2.5 flex items-center justify-between border-b border-slate-800/70 select-none">
        <div className="flex items-center space-x-2">
          <div className="w-3 h-3 rounded-full bg-rose-500/80 hover:opacity-100 transition-opacity"></div>
          <div className="w-3 h-3 rounded-full bg-amber-500/80 hover:opacity-100 transition-opacity"></div>
          <div className="w-3 h-3 rounded-full bg-emerald-500/80 hover:opacity-100 transition-opacity"></div>
          <span className="text-xs font-mono text-slate-400 pl-2 flex items-center gap-1.5">
            <TerminalIcon className="w-3.5 h-3.5 text-emerald-400" />
            veer@nst-devbox: ~ (zsh)
          </span>
        </div>

        <div className="flex items-center gap-2">
          <button 
            onClick={copyTerminalContent}
            title="Copy command history"
            className="text-slate-400 hover:text-slate-200 p-1 rounded hover:bg-slate-800/60 transition-colors text-xs flex items-center gap-1"
          >
            {copied ? <Check className="w-3.5 h-3.5 text-emerald-400" /> : <Copy className="w-3.5 h-3.5" />}
          </button>
          <span className="text-[10px] font-mono px-2 py-0.5 rounded-full bg-emerald-500/10 text-emerald-400 border border-emerald-500/20">
            Interactive
          </span>
        </div>
      </div>

      {/* Terminal Content Body */}
      <div 
        onClick={() => inputRef.current?.focus()}
        className="p-4 sm:p-5 font-mono text-sm max-h-[360px] min-h-[260px] overflow-y-auto space-y-3 cursor-text bg-[#07090e]/85 backdrop-blur-md"
      >
        {history.map((item) => (
          <div key={item.id} className="space-y-1.5 animate-fadeIn">
            <div className="flex items-center gap-2 text-xs">
              <span className="text-emerald-400 font-bold">veer@devbox</span>
              <span className="text-slate-600">:</span>
              <span className="text-cyan-400">~</span>
              <span className="text-emerald-400 font-bold">$</span>
              <span className="text-slate-100 font-medium">{item.command}</span>
              <span className="text-[10px] text-slate-600 ml-auto">{item.time}</span>
            </div>
            <div className="pl-4 border-l border-slate-800/80 py-0.5">
              {item.output}
            </div>
          </div>
        ))}

        {/* Live Input Form */}
        <form onSubmit={onSubmit} className="flex items-center gap-2 pt-1">
          <span className="text-emerald-400 font-bold text-xs sm:text-sm">veer@devbox:~$</span>
          <div className="relative flex-1 flex items-center">
            <input
              ref={inputRef}
              type="text"
              value={input}
              onChange={(e) => setInput(e.target.value)}
              placeholder="type 'help' or click chips below..."
              className="w-full bg-transparent text-emerald-300 placeholder:text-slate-600 focus:outline-none font-mono text-xs sm:text-sm"
              autoFocus
            />
            {input && (
              <button 
                type="submit" 
                className="text-emerald-400 hover:text-emerald-300 pr-1 transition-colors"
                title="Execute"
              >
                <CornerDownLeft className="w-3.5 h-3.5" />
              </button>
            )}
          </div>
        </form>

        <div ref={endRef} />
      </div>

      {/* Quick Command Chips Toolbar */}
      <div className="bg-[#0b0d14]/95 px-3 py-2 border-t border-slate-800/60 flex flex-wrap items-center gap-1.5 select-none">
        <span className="text-[11px] text-slate-500 font-mono flex items-center gap-1 pl-1 pr-1">
          <Sparkles className="w-3 h-3 text-emerald-400" /> Run:
        </span>
        {quickCommands.map((cmd) => (
          <button
            key={cmd}
            type="button"
            onClick={() => handleCommand(cmd)}
            className="text-[11px] font-mono px-2 py-0.5 rounded bg-slate-800/80 hover:bg-emerald-500/20 text-slate-300 hover:text-emerald-300 border border-slate-700/60 hover:border-emerald-500/40 transition-all active:scale-95"
          >
            {cmd}
          </button>
        ))}
      </div>
    </div>
  );
};
