import { GitHubUserProfile, GitHubRepoItem, GitHubEventItem } from '../types/portfolio';
import { portfolioConfig } from '../data/portfolioData';

const GITHUB_USERNAME = portfolioConfig.personal.githubUsername;
const CACHE_KEY_PROFILE = `gh_cache_profile_${GITHUB_USERNAME}`;
const CACHE_KEY_REPOS = `gh_cache_repos_${GITHUB_USERNAME}`;
const CACHE_KEY_EVENTS = `gh_cache_events_${GITHUB_USERNAME}`;
const CACHE_KEY_TIME = `gh_cache_timestamp_${GITHUB_USERNAME}`;
const CACHE_TTL_MS = 10 * 60 * 1000; // 10 minutes

export interface GitHubDataState {
  profile: GitHubUserProfile;
  repos: GitHubRepoItem[];
  events: GitHubEventItem[];
  isLoading: boolean;
  error: string | null;
  dataSource: 'live' | 'cached' | 'fallback';
  lastRefreshed: Date;
  rateLimitRemaining?: number;
}

export async function fetchGitHubData(forceRefresh = false): Promise<GitHubDataState> {
  const now = Date.now();
  
  // Check local cache if not forced
  if (!forceRefresh) {
    try {
      const cachedTime = localStorage.getItem(CACHE_KEY_TIME);
      const cachedProfile = localStorage.getItem(CACHE_KEY_PROFILE);
      const cachedRepos = localStorage.getItem(CACHE_KEY_REPOS);
      const cachedEvents = localStorage.getItem(CACHE_KEY_EVENTS);

      if (cachedTime && cachedProfile && cachedRepos) {
        const age = now - parseInt(cachedTime, 10);
        if (age < CACHE_TTL_MS) {
          return {
            profile: JSON.parse(cachedProfile),
            repos: JSON.parse(cachedRepos),
            events: cachedEvents ? JSON.parse(cachedEvents) : [],
            isLoading: false,
            error: null,
            dataSource: 'cached',
            lastRefreshed: new Date(parseInt(cachedTime, 10))
          };
        }
      }
    } catch {
      // LocalStorage access issues - continue to live fetch
    }
  }

  try {
    const headers: HeadersInit = {
      'Accept': 'application/vnd.github.v3+json',
    };

    const [userRes, reposRes, eventsRes] = await Promise.all([
      fetch(`https://api.github.com/users/${GITHUB_USERNAME}`, { headers }),
      fetch(`https://api.github.com/users/${GITHUB_USERNAME}/repos?sort=updated&per_page=100`, { headers }),
      fetch(`https://api.github.com/users/${GITHUB_USERNAME}/events/public?per_page=30`, { headers })
    ]);

    // Check rate limits
    const rateLimitRemaining = userRes.headers.get('x-ratelimit-remaining')
      ? parseInt(userRes.headers.get('x-ratelimit-remaining')!, 10)
      : undefined;

    if (userRes.status === 403 || reposRes.status === 403) {
      throw new Error('GitHub API rate limit reached. Using verified local snapshot.');
    }

    if (!userRes.ok || !reposRes.ok) {
      throw new Error(`GitHub API returned status ${userRes.status}`);
    }

    const profileData: GitHubUserProfile = await userRes.json();
    const reposDataRaw: any[] = await reposRes.json();
    const eventsDataRaw: any[] = eventsRes.ok ? await eventsRes.json() : [];

    // Filter out forks or keep them sorted by updated
    const reposData: GitHubRepoItem[] = reposDataRaw.map(repo => ({
      id: repo.id,
      name: repo.name,
      full_name: repo.full_name,
      description: repo.description,
      html_url: repo.html_url,
      language: repo.language,
      stargazers_count: repo.stargazers_count,
      forks_count: repo.forks_count,
      updated_at: repo.updated_at,
      created_at: repo.created_at,
      homepage: repo.homepage,
      topics: repo.topics || [],
      fork: repo.fork
    }));

    const eventsData: GitHubEventItem[] = Array.isArray(eventsDataRaw) ? eventsDataRaw.slice(0, 15) : [];

    // Save to cache
    try {
      localStorage.setItem(CACHE_KEY_PROFILE, JSON.stringify(profileData));
      localStorage.setItem(CACHE_KEY_REPOS, JSON.stringify(reposData));
      localStorage.setItem(CACHE_KEY_EVENTS, JSON.stringify(eventsData));
      localStorage.setItem(CACHE_KEY_TIME, now.toString());
    } catch {
      // ignore storage quota limits
    }

    return {
      profile: profileData,
      repos: reposData,
      events: eventsData,
      isLoading: false,
      error: null,
      dataSource: 'live',
      lastRefreshed: new Date(),
      rateLimitRemaining
    };

  } catch (err: any) {
    // Attempt to return stale cache first, otherwise reliable fallback
    try {
      const cachedProfile = localStorage.getItem(CACHE_KEY_PROFILE);
      const cachedRepos = localStorage.getItem(CACHE_KEY_REPOS);
      const cachedEvents = localStorage.getItem(CACHE_KEY_EVENTS);

      if (cachedProfile && cachedRepos) {
        return {
          profile: JSON.parse(cachedProfile),
          repos: JSON.parse(cachedRepos),
          events: cachedEvents ? JSON.parse(cachedEvents) : [],
          isLoading: false,
          error: err.message || 'API temporarily restricted. Loaded cached snapshot.',
          dataSource: 'cached',
          lastRefreshed: new Date()
        };
      }
    } catch {}

    return {
      profile: portfolioConfig.fallbackGitHubProfile,
      repos: portfolioConfig.fallbackRepos,
      events: [],
      isLoading: false,
      error: err.message || 'Connecting to verified snapshot data.',
      dataSource: 'fallback',
      lastRefreshed: new Date()
    };
  }
}
