import { Project, SkillCategory, JourneyMilestone, GitHubUserProfile, GitHubRepoItem } from '../types/portfolio';

export interface PortfolioConfig {
  personal: {
    name: string;
    headline: string;
    description: string;
    philosophy: string;
    role: string;
    college: string;
    degree: string;
    currentSemester: string;
    location: string;
    email: string;
    githubUsername: string;
    githubUrl: string;
    linkedinUrl: string;
    statusBadge: string;
  };
  featuredProjects: Project[];
  skills: SkillCategory[];
  journey: JourneyMilestone[];
  fallbackGitHubProfile: GitHubUserProfile;
  fallbackRepos: GitHubRepoItem[];
}

export const portfolioConfig: PortfolioConfig = {
  personal: {
    name: "Veer Pratap Singh",
    headline: "I build things, break things, and learn by creating.",
    description: "Computer Science student, aspiring software engineer and builder exploring technology through real-world projects.",
    philosophy: "I build things, break things, and learn by creating.",
    role: "First-Year Computer Science Student & Builder",
    college: "Newton School of Technology, Pune",
    degree: "B.Tech Computer Science",
    currentSemester: "First Year, First Semester",
    location: "Pune, Maharashtra, India",
    email: "veer230022@gmail.com",
    githubUsername: "veer20082026",
    githubUrl: "https://github.com/veer20082026",
    linkedinUrl: "https://www.linkedin.com/in/veer-pratap-singh-9a339841a",
    statusBadge: "Open to Collaborations & Open Source",
  },

  featuredProjects: [
    {
      id: "groq-llm-playground",
      title: "GROQ LLM Playground",
      tagline: "Ultra-fast LLM inference experiments, prompt testing, and API integration harness.",
      description: "An experimental developer harness testing low-latency token generation with the Groq API, evaluating model speeds, prompt templates, and streaming responses.",
      longDescription: "Built to explore and benchmark the ultra-low latency inference capabilities of Groq's LPU hardware. This repository houses test scripts, custom system prompt benchmarks across models like Llama 3 and Mixtral, and utility wrappers that form the intelligence backbone for downstream developer tools.",
      technologies: ["Python", "Groq API", "Llama 3 / Mixtral", "LLM Prompting", "JSON Schema"],
      status: "Active",
      githubUrl: "https://github.com/veer20082026/groq-llm-playground",
      liveUrl: undefined,
      featured: true,
      category: "ai",
      highlights: [
        "Real-time token streaming and inference speed benchmarking",
        "Structured output extraction and automated schema validation",
        "Foundation for conversational terminal utilities and workflow automations"
      ],
      architectureNotes: "Python-based async inference runner with configurable system parameters."
    },
    {
      id: "nl-to-terminal",
      title: "Natural Language to Terminal",
      tagline: "Translating conversational plain English into safe, executable shell commands.",
      description: "A terminal utility that converts basic English instructions into terminal commands and executes them.",
      longDescription: "Built to streamline developer workflows and make terminal operations intuitive. Instead of memorizing obscure flags for tar, find, or ffmpeg, developers write natural intent, which gets parsed, validated with a safety check, and surfaced with an interactive confirmation before execution.",
      technologies: ["Python", "Shell / Bash", "Groq / LLM APIs", "CLI Engine"],
      status: "In Development",
      githubUrl: "https://github.com/veer20082026/groq-llm-playground",
      liveUrl: undefined, // Available when deployed
      featured: true,
      category: "tool",
      highlights: [
        "Prompt-engineered translation pipeline for command generation",
        "Dry-run simulation and destructive command safeguards (rm, fdisk check)",
        "Cross-platform support for macOS zsh and Linux bash environments"
      ],
      architectureNotes: "Interactive CLI loop with subshell execution and security sandboxing."
    },
    {
      id: "run-my-readme",
      title: "RunMyREADME / DocVerify",
      tagline: "Automated verification and validation of README commands and setup workflows.",
      description: "A developer tool that validates README instructions, extracts shell commands and checks project setup workflows.",
      longDescription: "Documentation decay is one of the biggest friction points in open-source onboarding. DocVerify parses markdown README files, detects fenced bash blocks, tests dependency availability, and runs sandbox verification to guarantee that repo instructions work right out of the box.",
      technologies: ["TypeScript", "Node.js", "Markdown AST", "Shell Scripting", "GitHub Actions"],
      status: "Prototype",
      githubUrl: "https://github.com/veer20082026",
      liveUrl: undefined,
      featured: true,
      category: "developer-tools",
      highlights: [
        "AST-based markdown parser to detect environment variables and code snippets",
        "Sequential step dependency checker with early-exit reporting",
        "Generates clean pass/fail reports with suggested documentation fixes"
      ],
      architectureNotes: "Static code analyzer and step runner for developer onboarding verification."
    },
    {
      id: "ml-capsule",
      title: "ML-CaPsule",
      tagline: "Hands-on machine learning repository and practical curriculum for aspiring data practitioners.",
      description: "An open learning project for data science enthusiasts to master Machine Learning, Deep Learning, and real-world applied projects.",
      longDescription: "Created to help developers and students who don't have access to dedicated mentorship learn Machine Learning from scratch. It gathers structured implementations, dataset analyses, core algorithms, and hands-on case studies to help peers become project- and interview-ready.",
      technologies: ["Python", "Machine Learning", "Data Science", "Deep Learning", "Jupyter"],
      status: "Active",
      githubUrl: "https://github.com/veer20082026/ML-CaPsule",
      liveUrl: undefined,
      featured: true,
      category: "ml",
      highlights: [
        "Curated modules covering core supervised and unsupervised algorithms",
        "Hands-on real-world datasets for exploratory data analysis",
        "Clear documentation designed specifically for self-paced peer learners"
      ],
      architectureNotes: "Structured curriculum repository with modular Python notebooks and implementations."
    }
  ],

  skills: [
    {
      title: "Programming Languages",
      description: "Foundational languages used for algorithms, tooling, and system development.",
      skills: [
        { name: "Python", level: "Proficient", description: "Scripting, CLI tools, LLM APIs, and automation" },
        { name: "JavaScript / TypeScript", level: "Proficient", description: "Modern ES6+, async programming, typed interfaces" },
        { name: "SQL", level: "Exploring", description: "Relational queries, database schema design" }
      ]
    },
    {
      title: "Web Development",
      description: "Building responsive, modern, and accessible user interfaces.",
      skills: [
        { name: "React", level: "Proficient", description: "Component state, hooks, responsive layouts" },
        { name: "HTML5 & CSS3", level: "Core", description: "Semantic markup, modern layout techniques" },
        { name: "Tailwind CSS", level: "Proficient", description: "Utility-first modern design systems" },
        { name: "REST APIs", level: "Proficient", description: "Client integration, asynchronous fetch, error handling" },
        { name: "Node.js (Basics)", level: "Exploring", description: "Server runtimes, npm scripts, CLI tools" }
      ]
    },
    {
      title: "Developer Tools",
      description: "Everyday workflow and version control tools.",
      skills: [
        { name: "Git & GitHub", level: "Core", description: "Branching, PRs, version control, GitHub REST API" },
        { name: "VS Code & Neovim", level: "Proficient", description: "Productive editor configuration & debugging" },
        { name: "Linux / Terminal (Zsh/Bash)", level: "Proficient", description: "Shell scripting, command line utilities, pipe workflows" },
        { name: "Homebrew / Package Managers", level: "Core", description: "Environment setup and tooling maintenance" }
      ]
    },
    {
      title: "Technologies & Concepts",
      description: "Core academic and engineering concepts.",
      skills: [
        { name: "Data Structures & Algorithms", level: "Exploring", description: "Arrays, linked lists, recursion, sorting complexity" },
        { name: "Object-Oriented Programming", level: "Core", description: "Encapsulation, inheritance, modular architecture" },
        { name: "AI / LLM Integration", level: "Exploring", description: "Groq API, prompt engineering, terminal automation" },
        { name: "Clean Code & Refactoring", level: "Proficient", description: "Self-documenting code, atomic functions" }
      ]
    },
    {
      title: "Currently Learning",
      description: "Active technical goals and university coursework areas.",
      skills: [
        { name: "Operating Systems Fundamentals", level: "Learning", description: "Processes, threads, file systems (NST OS lectures)" },
        { name: "Full-Stack System Architecture", level: "Learning", description: "Building robust end-to-end full stack web platforms" },
        { name: "Machine Learning Basics", level: "Learning", description: "Exploration through ML-CaPsule repository" },
        { name: "Open Source Contribution", level: "Learning", description: "Reading large codebases and contributing PRs" }
      ]
    }
  ],

  journey: [
    {
      year: "2026",
      period: "July - August",
      title: "Beginning at Newton School of Technology",
      subtitle: "First Semester Foundations",
      description: "Started B.Tech in Computer Science at NST Pune. Dove straight into computer science fundamentals, learning structured programming, command-line basics, and setting up Linux development environments.",
      category: "foundation",
      tags: ["Newton School of Tech", "Programming Fundamentals", "Linux Basics"],
      keyTakeaway: "Building strong fundamentals from first principles is irreplaceable."
    },
    {
      year: "2026",
      period: "September - October",
      title: "Hands-on Experimentation & Version Control",
      subtitle: "Building the GitHub Habit",
      description: "Began pushing code consistently to GitHub. Built practice repositories for lecture coursework (NST_PRACTICE, os1lec, os2lec), created initial mini-projects (minigoogle, minigit), and gained confidence with Git workflows.",
      category: "project",
      tags: ["Git Workflow", "Web Foundations", "System Lectures"],
      keyTakeaway: "Code everyday, even small experiments; momentum breeds confidence."
    },
    {
      year: "2026",
      period: "November",
      title: "Exploring LLMs & Practical Developer Tools",
      subtitle: "Connecting AI to Daily Workflows",
      description: "Created the groq-llm-playground repo to explore low-latency LLM inference. Started architecting 'Natural Language to Terminal' and conceptualizing 'DocVerify' to solve real developer pains in terminal and documentation setup.",
      category: "exploring",
      tags: ["Groq LLM", "Python CLI", "Developer Tools", "ML-CaPsule"],
      keyTakeaway: "The best project ideas come from tools you genuinely wish existed for yourself."
    },
    {
      year: "Present",
      period: "Current Focus",
      title: "Navigating Real-World Engineering Challenges",
      subtitle: "Balancing College & Project Depth",
      description: "Balancing first-semester coursework with ambitious project development. Learning to write modular, well-tested code rather than quick scripts, and understanding asynchronous operations and state management deeply.",
      category: "challenge",
      tags: ["Time Management", "Code Quality", "Async Architecture"],
      keyTakeaway: "Overcoming hurdles by breaking complex problems into smaller, testable components."
    },
    {
      year: "Upcoming",
      period: "Next Semester & Beyond",
      title: "Upcoming Horizons & Product Milestones",
      subtitle: "Building Systems That Others Use",
      description: "Ship the Natural Language to Terminal CLI as an installable open-source tool, expand ML-CaPsule with new real-world notebooks, contribute to active open-source projects, and deepen knowledge of low-level systems programming.",
      category: "future",
      tags: ["Open Source", "CLI Tool Release", "Machine Learning", "Systems Engineering"],
      keyTakeaway: "Moving from learning learner to a builder who creates value for the developer community."
    }
  ],

  // Real snapshot from Veer's actual GitHub profile to guarantee 100% uptime even if GitHub API is offline or rate-limited
  fallbackGitHubProfile: {
    login: "veer20082026",
    name: "VEER PRATAP SINGH",
    avatar_url: "https://avatars.githubusercontent.com/u/297578847?v=4",
    html_url: "https://github.com/veer20082026",
    bio: "Computer Science student at Newton School of Technology. I build things, break things, and learn by creating.",
    location: "Pune, Maharashtra",
    public_repos: 10,
    followers: 0,
    following: 0,
    created_at: "2026-06-28T07:48:58Z",
    updated_at: "2026-11-23T10:28:08Z"
  },

  fallbackRepos: [
    {
      id: 893321451,
      name: "groq-llm-playground",
      full_name: "veer20082026/groq-llm-playground",
      description: "Exploration repository for fast LLM inference with Groq, prompt experiments, and utility scripting.",
      html_url: "https://github.com/veer20082026/groq-llm-playground",
      language: "Python",
      stargazers_count: 0,
      forks_count: 0,
      updated_at: "2026-11-23T16:25:19Z",
      created_at: "2026-11-20T10:00:00Z",
      homepage: null,
      topics: ["python", "groq", "llm", "ai"],
      fork: false
    },
    {
      id: 887201942,
      name: "ML-CaPsule",
      full_name: "veer20082026/ML-CaPsule",
      description: "A Project for beginners and experienced data science enthusiasts who wish to learn Machine Learning with real-world projects.",
      html_url: "https://github.com/veer20082026/ML-CaPsule",
      language: "Python",
      stargazers_count: 0,
      forks_count: 0,
      updated_at: "2026-11-14T05:28:01Z",
      created_at: "2026-11-10T12:00:00Z",
      homepage: null,
      topics: ["machine-learning", "deep-learning", "data-science"],
      fork: false
    },
    {
      id: 881290192,
      name: "minigoogle",
      full_name: "veer20082026/minigoogle",
      description: "Frontend search engine landing page clone and interactive query layout experiment.",
      html_url: "https://github.com/veer20082026/minigoogle",
      language: "HTML",
      stargazers_count: 0,
      forks_count: 0,
      updated_at: "2026-11-03T07:25:38Z",
      created_at: "2026-11-02T15:00:00Z",
      homepage: null,
      topics: ["html", "css", "ui"],
      fork: false
    },
    {
      id: 878190281,
      name: "minigit",
      full_name: "veer20082026/minigit",
      description: "Learning project understanding version control internals, object hashing, and commit snapshots.",
      html_url: "https://github.com/veer20082026/minigit",
      language: "Python",
      stargazers_count: 0,
      forks_count: 0,
      updated_at: "2026-10-29T04:22:00Z",
      created_at: "2026-10-28T09:00:00Z",
      homepage: null,
      topics: ["git", "version-control"],
      fork: false
    },
    {
      id: 876102910,
      name: "Portfolio",
      full_name: "veer20082026/Portfolio",
      description: "Initial personal portfolio project exploring responsive layouts and modern personal branding.",
      html_url: "https://github.com/veer20082026/Portfolio",
      language: "HTML",
      stargazers_count: 0,
      forks_count: 0,
      updated_at: "2026-10-27T11:26:26Z",
      created_at: "2026-10-26T14:00:00Z",
      homepage: null,
      topics: ["portfolio", "html", "css"],
      fork: false
    },
    {
      id: 861902819,
      name: "NST_PRACTICE",
      full_name: "veer20082026/NST_PRACTICE",
      description: "Coursework and hands-on coding practice repository for Newton School of Technology S&AI lectures.",
      html_url: "https://github.com/veer20082026/NST_PRACTICE",
      language: "C",
      stargazers_count: 0,
      forks_count: 0,
      updated_at: "2026-09-23T08:00:31Z",
      created_at: "2026-09-20T11:00:00Z",
      homepage: null,
      topics: ["nst", "college-coursework", "algorithms"],
      fork: false
    }
  ]
};
