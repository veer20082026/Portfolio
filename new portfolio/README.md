# Veer Pratap Singh — Developer Portfolio

A modern, high-performance developer portfolio built with **React**, **TypeScript**, **Tailwind CSS**, and the **GitHub REST API**. Designed with a sleek dark aesthetic, electric emerald/lime accents, interactive developer terminal, dynamic project showcases, and live repository telemetry.

> **"I build things, break things, and learn by creating."**

---

## ⚡ Key Highlights & Features

- **Developer-Inspired Interactive Terminal**:
  - Live UNIX-style terminal emulator in the Hero section.
  - Interactive commands (`whoami`, `about`, `projects`, `skills`, `contact`, `github`, `quote`, `clear`).
  - Clickable quick-action command chips for effortless mobile & desktop interaction.
- **Flagship Projects Showcase**:
  - **Natural Language to Terminal** (`nlt`): Conversational English to safe shell commands with safety checks.
  - **RunMyREADME / DocVerify**: Developer tool validating README steps, extracting shell blocks & catching documentation decay.
  - **Finance Management Application**: Local-first encrypted personal finance tracker with interactive analytics.
  - Interactive System Architecture modal ("Specs") and terminal code previews.
- **Real-Time GitHub REST API Integration**:
  - Automatically fetches live public repositories, programming languages, star counts, fork counts, and recent commits from [@veer20082026](https://github.com/veer20082026).
  - Built-in caching (`localStorage` with 10-minute TTL) and automatic fallback to verified snapshot to prevent GitHub unauthenticated rate limiting (HTTP 403).
  - Search filter and language pills to browse all public repositories effortlessly.
  - Manual "Refresh" sync button with live/cached status indicator.
- **Dedicated LinkedIn Integration**:
  - Prominent "Connect on LinkedIn" card in the Contact section.
  - Direct icons in the header navbar and footer.
  - Easily customizable URL in `src/data/portfolioData.ts`.
- **Skills Matrix & First-Year Learning Journey**:
  - Grouped into Programming Languages, Web Development, Developer Tools, Technologies & Concepts, and Currently Learning.
  - Interactive milestone timeline highlighting Veer's journey as a first-semester CS student at Newton School of Technology, Pune.
- **Functional Contact Section**:
  - Form validation with error reporting and animated confetti celebration upon sending.
  - 1-click email copy button (`veer20082026@gmail.com`).
  - Direct links to GitHub and LinkedIn.

---

## 🚀 Getting Started

### 1. Prerequisites
Ensure you have Node.js (v18+) and npm installed:
```bash
node -v
npm -v
```

### 2. Development Mode
To start the live hot-reloading development server:
```bash
npm run dev
```
Open [http://localhost:5173](http://localhost:5173) in your browser.

### 3. Production Build & Preview
To compile TypeScript and bundle optimized assets:
```bash
npm run build
npm run preview
```
Open [http://localhost:4173](http://localhost:4173) in your browser.

---

## 🛠️ Customization Guide

All personal identity information, project data, skills, and journey milestones are centralized in a single configuration file:

📁 **[`src/data/portfolioData.ts`](file:///Users/veerpratapsingh/Anti%20gravity/new%20portfolio/src/data/portfolioData.ts)**

### Update LinkedIn URL
Open `src/data/portfolioData.ts` and update the `linkedinUrl` field:
```typescript
personal: {
  name: "Veer Pratap Singh",
  // ...
  linkedinUrl: "https://www.linkedin.com/in/YOUR_CUSTOM_HANDLE",
}
```

### Add or Edit Projects
Add an entry to the `featuredProjects` array:
```typescript
{
  id: "new-project",
  title: "Project Name",
  tagline: "Short one-liner",
  description: "What the project does",
  technologies: ["React", "Python", "Tailwind"],
  status: "In Development", // 'In Development' | 'Active' | 'Planned' | 'Prototype' | 'Completed'
  githubUrl: "https://github.com/veer20082026/your-repo",
  liveUrl: "https://your-demo-url.com", // Optional: leave undefined if not deployed yet
  featured: true,
  category: "tool", // 'tool' | 'developer-tools' | 'web' | 'ai' | 'finance'
  highlights: ["Feature 1", "Feature 2"],
}
```

### Add or Update Skills
Edit categories inside the `skills` array:
```typescript
{
  title: "Currently Learning",
  description: "Active technical goals",
  skills: [
    { name: "Distributed Systems", level: "Learning", description: "Consensus algorithms" }
  ]
}
```

---

## 📦 Deployment Options

### Vercel (Recommended)
1. Push this repository to GitHub: `git push -u origin main`.
2. Go to [vercel.com](https://vercel.com) and import the repository.
3. Framework preset: **Vite**.
4. Click **Deploy** — your portfolio will be live in seconds!

### GitHub Pages
1. Install `gh-pages`: `npm install -D gh-pages`
2. Add `"base": "./"` in `vite.config.ts`.
3. Add deploy script in `package.json`: `"deploy": "npm run build && gh-pages -d dist"`
4. Run `npm run deploy`.

---

© 2026 Veer Pratap Singh. Built with passion at Newton School of Technology, Pune.
