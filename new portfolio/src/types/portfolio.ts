export interface Project {
  id: string;
  title: string;
  tagline: string;
  description: string;
  longDescription?: string;
  technologies: string[];
  status: 'In Development' | 'Active' | 'Planned' | 'Prototype' | 'Completed';
  githubUrl?: string;
  liveUrl?: string;
  featured: boolean;
  category: 'tool' | 'developer-tools' | 'web' | 'ai' | 'finance';
  highlights: string[];
  iconName?: string;
  architectureNotes?: string;
}

export interface SkillCategory {
  title: string;
  description: string;
  skills: {
    name: string;
    level: 'Core' | 'Proficient' | 'Exploring' | 'Learning';
    icon?: string;
    description?: string;
  }[];
}

export interface JourneyMilestone {
  year: string;
  period: string;
  title: string;
  subtitle: string;
  description: string;
  category: 'foundation' | 'exploring' | 'project' | 'challenge' | 'future';
  tags: string[];
  keyTakeaway?: string;
}

export interface GitHubUserProfile {
  login: string;
  name: string;
  avatar_url: string;
  html_url: string;
  bio: string | null;
  location: string | null;
  public_repos: number;
  followers: number;
  following: number;
  created_at: string;
  updated_at: string;
}

export interface GitHubRepoItem {
  id: number;
  name: string;
  full_name: string;
  description: string | null;
  html_url: string;
  language: string | null;
  stargazers_count: number;
  forks_count: number;
  updated_at: string;
  created_at: string;
  homepage: string | null;
  topics?: string[];
  fork: boolean;
}

export interface GitHubEventItem {
  id: string;
  type: string;
  repo: {
    name: string;
    url: string;
  };
  created_at: string;
  payload?: any;
}
