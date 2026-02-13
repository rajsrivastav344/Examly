// GitHub.jsx
import React, { useState } from "react";
import "./All.css";

export default function GitHub() {
  const [selected, setSelected] = useState("Introduction to GitHub");
  const [sidebarWidth, setSidebarWidth] = useState(250);
  const [isDragging, setIsDragging] = useState(false);
  const [searchTerm, setSearchTerm] = useState("");

  const sections = {
    "🐙 Git & GitHub Fundamentals": {
      "Introduction to GitHub": {
        title: "Introduction to GitHub",
        content: `
GitHub is the world's largest platform for version control and collaborative software development, built on top of Git.

Key facts (2025–2026):
- Over 150 million repositories
- 120+ million developers
- Owned by Microsoft since 2018
- Powers open source (Linux kernel, TensorFlow, React, VS Code) and private enterprise work

Core value:
- Version history & collaboration
- Code review via Pull Requests
- Automation via GitHub Actions
- Project management (Issues, Projects, Discussions)`,
        example: `<p>Developers worldwide collaborate on open-source projects like React or Kubernetes without ever meeting.</p>`,
        graphic: `<svg width="400" height="180" viewBox="0 0 400 180" xmlns="http://www.w3.org/2000/svg">
  <circle cx="100" cy="90" r="40" fill="#f5f5f5" stroke="#24292e" stroke-width="4"/>
  <text x="100" y="95" text-anchor="middle" font-size="28" fill="#24292e">Git</text>
  <polygon points="160,90 180,70 200,90 180,110" fill="#f5f5f5" stroke="#24292e" stroke-width="4"/>
  <text x="180" y="95" text-anchor="middle" font-size="20">+</text>
  <rect x="220" y="50" width="140" height="80" rx="10" fill="#24292e"/>
  <text x="290" y="95" text-anchor="middle" fill="white" font-size="24">GitHub</text>
  <text x="290" y="120" text-anchor="middle" fill="white" font-size="14">Cloud + Collaboration</text>
</svg>`,
      },
      "Git vs GitHub vs GitLab vs Bitbucket": {
        title: "Git vs GitHub vs GitLab vs Bitbucket",
        content: `
- Git: Local version control system (command-line tool)
- GitHub: Cloud hosting + collaboration platform (Microsoft)
- GitLab: Full DevOps platform (CI/CD built-in, self-hosted option)
- Bitbucket: Atlassian product, strong Jira integration

2025–2026 trends:
- GitHub dominates open source & enterprises
- GitLab popular for self-hosted & integrated DevSecOps
- GitHub Codespaces & GitLab Duo (AI features)`,
        example: `<p>Git: git commit -m "fix bug"</p>
<p>GitHub: Pull Request + Review + Merge</p>`,
      },
    },

    "📁 Core Git & GitHub Concepts": {
      "Repositories (Repos)": {
        title: "Repositories (Repos)",
        content: `
A repo is a project folder tracked by Git.

Types:
- Public (open source)
- Private (team/enterprise)
- Internal (GitHub Enterprise)
- Archived (read-only)

Features:
- README.md (project info)
- .gitignore (ignore files)
- LICENSE file
- GitHub Pages (free static hosting)`,
        example: `<p>Create repo → git init → git remote add origin https://github.com/user/repo.git</p>`,
      },
      "Branches & Git Flow": {
        title: "Branches & Git Flow",
        content: `
Branches allow parallel development.

Common models:
- GitHub Flow: main + feature branches + PR
- Git Flow: main + develop + feature/release/hotfix branches
- Trunk-based: short-lived branches, frequent merges to main

2025 best practice: Trunk-based + feature flags for continuous deployment`,
        example: `<pre><code>git checkout -b feature/login
# work...
git add .
git commit -m "add login page"
git push origin feature/login</code></pre>`,
        graphic: `<svg width="420" height="220" viewBox="0 0 420 220">
  <line x1="60" y1="100" x2="360" y2="100" stroke="#24292e" stroke-width="4"/>
  <text x="210" y="80" text-anchor="middle">main</text>
  <line x1="120" y1="100" x2="120" y2="160" stroke="#28a745" stroke-width="3" stroke-dasharray="5,5"/>
  <text x="120" y="180" text-anchor="middle" fill="#28a745">feature/login</text>
  <line x1="240" y1="100" x2="240" y2="140" stroke="#6f42c1" stroke-width="3" stroke-dasharray="5,5"/>
  <text x="240" y="160" text-anchor="middle" fill="#6f42c1">bugfix/header</text>
  <circle cx="60" cy="100" r="8" fill="#24292e"/>
  <circle cx="360" cy="100" r="8" fill="#24292e"/>
</svg>`,
      },
      "Commits & Commit Messages": {
        title: "Commits & Commit Messages",
        content: `
A commit is a snapshot of changes with metadata.

Best practices (Conventional Commits):
- feat: new feature
- fix: bug fix
- docs: documentation
- refactor: code change without behavior change
- test: adding tests
- chore: maintenance

Example format:
feat(auth): add OAuth2 login flow`,
        example: `<pre><code>git commit -m "feat: add dark mode toggle"
git commit -m "fix: resolve navbar overlap on mobile"</code></pre>`,
      },
    },

    "🔄 Collaboration & Review": {
      "Pull Requests (PRs) & Code Review": {
        title: "Pull Requests (PRs) & Code Review",
        content: `
Pull Request = proposed changes + discussion + review.

Features:
- Draft PRs
- Required reviews
- Status checks (CI)
- Comments, suggestions, approvals
- Re-request review
- Squash / Rebase / Merge commit

2025: AI code review assistants (GitHub Copilot for PRs, CodeRabbit)`,
        example: `<p>Create PR → Request review → Approve → Merge → Auto-deploy</p>`,
      },
      "Issues, Discussions & Projects": {
        title: "Issues, Discussions & Projects",
        content: `
- Issues: Bugs, tasks, enhancements (labels, assignees, milestones)
- Discussions: Forum-style (Q&A, ideas)
- Projects (classic & new): Kanban boards, tables, roadmaps

Integration:
- Link PRs to issues (#123)
- Close issues automatically on merge (fixes #123)`,
        example: `<p>Issue #45: "Add password reset" → linked PR → closes on merge</p>`,
      },
    },

    "🚀 Automation & CI/CD": {
      "GitHub Actions": {
        title: "GitHub Actions",
        content: `
Native CI/CD inside GitHub.

Features:
- YAML workflows (.github/workflows/)
- Marketplace actions (thousands)
- Matrix builds
- Secrets & environments
- Self-hosted runners

2025–2026: Reusable workflows, larger runner pools, AI-generated actions`,
        example: `<pre><code>name: CI
on: [push, pull_request]
jobs:
  test:
    runs-on: ubuntu-latest
    steps:
      - uses: actions/checkout@v4
      - run: npm ci
      - run: npm test</code></pre>`,
      },
      "GitHub Packages & Container Registry": {
        title: "GitHub Packages & Container Registry",
        content: `
Store & share:
- Docker images (ghcr.io)
- npm, Maven, NuGet, RubyGems, etc.
- Private & public packages

Integrated with Actions & Dependabot`,
        example: `<p>docker push ghcr.io/username/my-app:latest</p>`,
      },
    },

    "🛡️ Security & Enterprise Features": {
      "GitHub Security Tools": {
        title: "GitHub Security Tools",
        content: `
- Dependabot (auto PRs for dependency updates)
- Code scanning (CodeQL)
- Secret scanning
- Dependency graph & insights
- Security overview dashboard

2025: GitHub Advanced Security widely adopted in enterprises`,
      },
      "GitHub Enterprise & Copilot": {
        title: "GitHub Enterprise & Copilot",
        content: `
Enterprise:
- Self-hosted (GitHub Enterprise Server)
- SAML/SSO, audit logs, IP allow lists

GitHub Copilot:
- AI pair programmer
- Copilot Chat, Workspace, Agents (2025–2026)
- Copilot for PRs, security fixes`,
      },
    },

    "🌍 Real-World GitHub Usage": {
      "Open Source Powerhouses": {
        title: "Open Source Powerhouses",
        content: `
- Linux kernel
- TensorFlow, PyTorch
- VS Code, React, Kubernetes
- Home Assistant, OBS Studio

GitHub stars & forks indicate popularity & community health`,
        example: `<p>freeCodeCamp: 400k+ stars, massive contributor community</p>`,
      },
      "Enterprise Adoption": {
        title: "Enterprise Adoption",
        content: `
- Microsoft (owns GitHub)
- Google, Amazon, Apple (internal + public)
- NASA, CERN, SpaceX public repos
- Banks & finance (secure private repos)`,
      },
    },
  };

  // ────────────────────────────────────────────────
  const handleMouseDown = () => setIsDragging(true);
  const handleMouseMove = (e) => {
    if (isDragging) {
      const newWidth = Math.min(Math.max(e.clientX, 180), 400);
      setSidebarWidth(newWidth);
    }
  };
  const handleMouseUp = () => setIsDragging(false);

  let selectedContent = null;
  for (const section in sections) {
    if (sections[section][selected]) {
      selectedContent = sections[section][selected];
      break;
    }
  }
  if (!selectedContent) selectedContent = { title: selected, content: "Select a topic from the sidebar." };

  return (
    <div
      className="dashboard"
      onMouseMove={handleMouseMove}
      onMouseUp={handleMouseUp}
      onMouseLeave={handleMouseUp}
    >
      <header className="header">
        <h1>🐙 GitHub Dashboard</h1>
        <input
          type="text"
          placeholder="Search topics..."
          className="search"
          value={searchTerm}
          onChange={(e) => setSearchTerm(e.target.value)}
        />
      </header>

      <aside className="sidebar" style={{ width: sidebarWidth }}>
        {Object.keys(sections).map((section) => {
          const filtered = Object.keys(sections[section]).filter((t) =>
            t.toLowerCase().includes(searchTerm.toLowerCase())
          );
          if (filtered.length === 0) return null;
          return (
            <div key={section} className="section">
              <h3 className="section-title">{section}</h3>
              <ul>
                {filtered.map((topic) => (
                  <li
                    key={topic}
                    onClick={() => setSelected(topic)}
                    className={selected === topic ? "active" : ""}
                  >
                    {topic}
                  </li>
                ))}
              </ul>
              <hr />
            </div>
          );
        })}
      </aside>

      <div className="resizer" onMouseDown={handleMouseDown}></div>

      <main className="content">
        <h2>{selected}</h2>
        <div>
          <p style={{ whiteSpace: "pre-wrap", lineHeight: 1.6 }}>{selectedContent.content}</p>

          {selectedContent.example && (
            <pre className="code-block">
              <code>{selectedContent.example}</code>
            </pre>
          )}

          {selectedContent.graphic && (
            <div
              dangerouslySetInnerHTML={{ __html: selectedContent.graphic }}
              style={{ textAlign: "center", margin: "20px 0" }}
            />
          )}
        </div>
      </main>
    </div>
  );
}