import React, { useState, useEffect } from 'react';
import { 
  Star, 
  GitFork, 
  RotateCw, 
  ExternalLink, 
  Calendar, 
  BookOpen, 
  Search, 
  Activity, 
  CheckCircle2, 
  AlertCircle,
  MapPin,
  Clock,
  Flame
} from 'lucide-react';
import { fetchGitHubData, GitHubDataState } from '../services/githubService';
import { portfolioConfig } from '../data/portfolioData';
import { GithubIcon } from './Icons';

export const GitHubShowcase: React.FC = () => {
  const [dataState, setDataState] = useState<GitHubDataState>({
    profile: portfolioConfig.fallbackGitHubProfile,
    repos: portfolioConfig.fallbackRepos,
    events: [],
    isLoading: true,
    error: null,
    dataSource: 'fallback',
    lastRefreshed: new Date()
  });

  const [searchTerm, setSearchTerm] = useState('');
  const [selectedLanguage, setSelectedLanguage] = useState<string>('all');
  const [isRefreshing, setIsRefreshing] = useState(false);

  const loadData = async (force = false) => {
    setIsRefreshing(true);
    try {
      const res = await fetchGitHubData(force);
      setDataState(res);
    } catch {
      // Handled in service
    } finally {
      setIsRefreshing(false);
    }
  };

  useEffect(() => {
    loadData(false);
  }, []);

  const { profile, repos, events, dataSource, lastRefreshed } = dataState;

  // Extract distinct languages
  const languages = ['all', ...Array.from(new Set(repos.map(r => r.language).filter(Boolean) as string[]))];

  // Filter repos by search and language
  const filteredRepos = repos.filter(repo => {
    const matchesSearch = 
      repo.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
      (repo.description && repo.description.toLowerCase().includes(searchTerm.toLowerCase()));
    const matchesLang = selectedLanguage === 'all' || repo.language === selectedLanguage;
    return matchesSearch && matchesLang;
  });

  const getLanguageColor = (lang: string | null) => {
    switch (lang?.toLowerCase()) {
      case 'python': return 'bg-amber-400';
      case 'c': return 'bg-blue-500';
      case 'javascript': return 'bg-yellow-400';
      case 'typescript': return 'bg-sky-400';
      case 'html': return 'bg-orange-500';
      case 'css': return 'bg-indigo-400';
      default: return 'bg-emerald-400';
    }
  };

  const formatDate = (dateStr: string) => {
    try {
      const d = new Date(dateStr);
      return d.toLocaleDateString('en-US', { month: 'short', day: 'numeric', year: 'numeric' });
    } catch {
      return dateStr;
    }
  };

  return (
    <section id="github" className="py-20 relative bg-[#090a0f] border-t border-b border-slate-800/60">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">

        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-10 gap-4">
          <div>
            <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-emerald-500/10 text-emerald-400 text-xs font-mono font-medium border border-emerald-500/20 mb-3">
              <GithubIcon className="w-3.5 h-3.5 text-emerald-400" />
              <span>Live GitHub Integration</span>
            </div>
            <h2 className="text-3xl sm:text-4xl font-extrabold text-white tracking-tight">
              Real-time <span className="text-transparent bg-clip-text bg-gradient-to-r from-emerald-400 to-lime-300">Repositories & Activity</span>
            </h2>
            <p className="mt-2 text-slate-400 max-w-xl text-sm sm:text-base">
              Synchronized directly with the GitHub REST API. Real repositories, real commit metrics, no fabricated stats.
            </p>
          </div>

          {/* Sync Status & Refresh Button */}
          <div className="flex items-center gap-3">
            <div className="flex items-center gap-2 text-xs font-mono glass-panel px-3 py-1.5 rounded-lg border border-slate-800">
              {dataSource === 'live' ? (
                <span className="flex items-center gap-1.5 text-emerald-400">
                  <CheckCircle2 className="w-3.5 h-3.5" /> Live Sync
                </span>
              ) : dataSource === 'cached' ? (
                <span className="flex items-center gap-1.5 text-sky-400">
                  <Clock className="w-3.5 h-3.5" /> Cached (Optimized)
                </span>
              ) : (
                <span className="flex items-center gap-1.5 text-amber-400">
                  <AlertCircle className="w-3.5 h-3.5" /> Verified Snapshot
                </span>
              )}
              <span className="text-slate-600">|</span>
              <span className="text-slate-500 text-[11px]">
                {lastRefreshed.toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' })}
              </span>
            </div>

            <button
              onClick={() => loadData(true)}
              disabled={isRefreshing}
              className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-lg glass-panel text-slate-300 hover:text-white hover:border-emerald-500/40 text-xs font-mono transition-all disabled:opacity-50 cursor-pointer"
              title="Refresh repository data"
            >
              <RotateCw className={`w-3.5 h-3.5 ${isRefreshing ? 'animate-spin text-emerald-400' : ''}`} />
              <span>{isRefreshing ? 'Syncing...' : 'Refresh'}</span>
            </button>
          </div>
        </div>

        {/* GitHub Profile Banner Card */}
        <div className="mb-10 rounded-2xl glass-panel border border-slate-800/90 p-6 sm:p-7 relative overflow-hidden">
          <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between gap-6">
            <div className="flex items-center gap-4">
              <div className="relative">
                <img
                  src={profile.avatar_url || "https://avatars.githubusercontent.com/u/297578847?v=4"}
                  alt={profile.name || profile.login}
                  className="w-16 h-16 sm:w-20 sm:h-20 rounded-2xl border-2 border-emerald-500/40 object-cover shadow-lg"
                />
                <span className="absolute -bottom-1 -right-1 p-1 rounded-full bg-slate-900 border border-slate-700 text-emerald-400">
                  <GithubIcon className="w-3.5 h-3.5" />
                </span>
              </div>

              <div className="space-y-1">
                <div className="flex items-center gap-2">
                  <h3 className="text-xl sm:text-2xl font-bold text-white">{profile.name || "VEER PRATAP SINGH"}</h3>
                  <a
                    href={profile.html_url}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-slate-500 hover:text-emerald-400 transition-colors"
                  >
                    <ExternalLink className="w-4 h-4" />
                  </a>
                </div>
                <p className="text-xs sm:text-sm font-mono text-emerald-400">@{profile.login}</p>
                <div className="flex flex-wrap items-center gap-3 text-xs text-slate-400 pt-1">
                  <span className="flex items-center gap-1">
                    <MapPin className="w-3 h-3 text-slate-500" /> {profile.location || 'Pune, Maharashtra'}
                  </span>
                  <span>•</span>
                  <span className="flex items-center gap-1">
                    <Calendar className="w-3 h-3 text-slate-500" /> Joined {formatDate(profile.created_at)}
                  </span>
                </div>
              </div>
            </div>

            {/* GitHub Profile Quick Stats */}
            <div className="flex items-center gap-4 sm:gap-6 w-full sm:w-auto justify-around sm:justify-end border-t sm:border-t-0 pt-4 sm:pt-0 border-slate-800">
              <div className="text-center sm:text-right">
                <p className="text-2xl font-bold text-emerald-400 font-mono">{repos.length}</p>
                <p className="text-xs text-slate-400">Public Repos</p>
              </div>
              <div className="h-8 w-px bg-slate-800"></div>
              <div className="text-center sm:text-right">
                <p className="text-2xl font-bold text-white font-mono">{languages.length - 1}</p>
                <p className="text-xs text-slate-400">Languages</p>
              </div>
              <div className="h-8 w-px bg-slate-800"></div>
              <div className="text-center sm:text-right">
                <a
                  href={profile.html_url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 px-4 py-2 rounded-xl bg-emerald-500 hover:bg-emerald-400 text-slate-950 font-bold text-xs transition-all shadow-sm shadow-emerald-500/20"
                >
                  <GithubIcon className="w-4 h-4" />
                  <span>Follow on GitHub</span>
                </a>
              </div>
            </div>
          </div>
        </div>

        {/* Search & Language Filter Bar */}
        <div className="flex flex-col sm:flex-row items-stretch sm:items-center justify-between gap-4 mb-6">
          <div className="relative flex-1 max-w-md">
            <Search className="w-4 h-4 text-slate-500 absolute left-3.5 top-1/2 -translate-y-1/2" />
            <input
              type="text"
              placeholder="Search repositories by name or keyword..."
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
              className="w-full pl-10 pr-4 py-2.5 rounded-xl glass-panel border border-slate-800 text-xs sm:text-sm text-slate-200 placeholder:text-slate-500 focus:outline-none focus:border-emerald-500/50"
            />
          </div>

          <div className="flex items-center gap-1.5 overflow-x-auto pb-1 sm:pb-0">
            {languages.map((lang) => (
              <button
                key={lang}
                onClick={() => setSelectedLanguage(lang)}
                className={`px-3 py-1.5 rounded-lg text-xs font-mono whitespace-nowrap transition-all ${
                  selectedLanguage === lang
                    ? 'bg-slate-800 text-emerald-400 border border-emerald-500/40 font-bold'
                    : 'text-slate-400 hover:text-slate-200 hover:bg-slate-900/60'
                }`}
              >
                {lang === 'all' ? 'All Languages' : lang}
              </button>
            ))}
          </div>
        </div>

        {/* Repositories Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5">
          {filteredRepos.map((repo) => (
            <div
              key={repo.id}
              className="group rounded-xl glass-panel border border-slate-800/80 hover:border-emerald-500/40 p-5 flex flex-col justify-between transition-all duration-200 hover:-translate-y-1"
            >
              <div>
                <div className="flex items-start justify-between gap-2 mb-2">
                  <div className="flex items-center gap-2">
                    <BookOpen className="w-4 h-4 text-emerald-400 shrink-0" />
                    <a
                      href={repo.html_url}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="font-bold text-white hover:text-emerald-300 text-sm tracking-tight transition-colors flex items-center gap-1 group-hover:underline"
                    >
                      <span>{repo.name}</span>
                    </a>
                  </div>
                  <a
                    href={repo.html_url}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-slate-600 hover:text-emerald-400 transition-colors p-1"
                    title="Open repository"
                  >
                    <ExternalLink className="w-3.5 h-3.5" />
                  </a>
                </div>

                <p className="text-xs text-slate-400 line-clamp-3 leading-relaxed mb-4 min-h-[36px]">
                  {repo.description || "Coursework and development repository for software experiments and learning."}
                </p>
              </div>

              <div>
                {/* Repo Metadata Footer */}
                <div className="flex items-center justify-between text-[11px] font-mono text-slate-500 pt-3 border-t border-slate-800/70">
                  <div className="flex items-center gap-2">
                    {repo.language && (
                      <span className="flex items-center gap-1.5 text-slate-300">
                        <span className={`w-2 h-2 rounded-full ${getLanguageColor(repo.language)}`}></span>
                        <span>{repo.language}</span>
                      </span>
                    )}
                  </div>

                  <div className="flex items-center gap-3">
                    <span className="flex items-center gap-1" title="Stars">
                      <Star className="w-3 h-3 text-slate-400" /> {repo.stargazers_count}
                    </span>
                    <span className="flex items-center gap-1" title="Forks">
                      <GitFork className="w-3 h-3 text-slate-400" /> {repo.forks_count}
                    </span>
                    <span title="Last updated">
                      {formatDate(repo.updated_at)}
                    </span>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Empty Search Fallback */}
        {filteredRepos.length === 0 && (
          <div className="text-center py-12 glass-panel rounded-xl border border-slate-800">
            <p className="text-slate-400 text-sm">No repositories found matching "{searchTerm}"</p>
            <button
              onClick={() => { setSearchTerm(''); setSelectedLanguage('all'); }}
              className="mt-3 text-xs text-emerald-400 underline cursor-pointer"
            >
              Reset filters
            </button>
          </div>
        )}

        {/* Recent GitHub Activity Stream */}
        {events && events.length > 0 && (
          <div className="mt-12 rounded-2xl glass-panel border border-slate-800/80 p-6">
            <div className="flex items-center justify-between mb-4">
              <h3 className="text-base font-bold text-white flex items-center gap-2">
                <Activity className="w-4 h-4 text-emerald-400" />
                <span>Recent Commit & Event Activity</span>
              </h3>
              <span className="text-xs font-mono text-slate-500">Public Event Log</span>
            </div>

            <div className="space-y-3">
              {events.slice(0, 5).map((ev) => (
                <div key={ev.id} className="flex items-center justify-between p-3 rounded-lg bg-slate-900/60 border border-slate-800 text-xs">
                  <div className="flex items-center gap-3">
                    <Flame className="w-3.5 h-3.5 text-amber-400" />
                    <div>
                      <span className="text-slate-300 font-mono">{ev.type.replace('Event', '')}</span>
                      <span className="text-slate-500 mx-1.5">on</span>
                      <a
                        href={`https://github.com/${ev.repo.name}`}
                        target="_blank"
                        rel="noreferrer"
                        className="text-emerald-400 hover:underline font-mono"
                      >
                        {ev.repo.name}
                      </a>
                    </div>
                  </div>
                  <span className="text-[11px] text-slate-500 font-mono">
                    {formatDate(ev.created_at)}
                  </span>
                </div>
              ))}
            </div>
          </div>
        )}

      </div>
    </section>
  );
};
