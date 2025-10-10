// GitHub.jsx
import React, { useState } from "react";
import "./Webdev.css"; // reuse same styling

export default function GitHub() {
  const [selected, setSelected] = useState("Introduction to GitHub");
  const [sidebarWidth, setSidebarWidth] = useState(250);
  const [isDragging, setIsDragging] = useState(false);
  const [searchTerm, setSearchTerm] = useState("");

  const sections = {
    "🐙 GitHub": {
      "Introduction to GitHub": {
        title: "Introduction to GitHub",
        content:
          "GitHub is a cloud-based platform for version control and collaboration using Git. It allows multiple developers to work on projects simultaneously.",
        example: "<p>Example: Hosting and collaborating on open-source projects.</p>",
        image: "https://about.gitlab.com/images/press/git-logo.png",
      },
      "Git vs GitHub": {
        title: "Git vs GitHub",
        content:
          "Git is a version control system that tracks changes in code. GitHub is a platform to host Git repositories online.",
        example: "<ul><li>Git: Local version control</li><li>GitHub: Remote repository hosting</li></ul>",
        image: "https://miro.medium.com/v2/resize:fit:1400/format:webp/1*dUQeb-2PCbtZP5FzHVJRFg.png",
      },
      "GitHub Features": {
        title: "GitHub Features",
        content:
          "GitHub provides features like repository hosting, pull requests, branches, issues, actions, project management boards, and collaboration tools.",
        example: "<ul><li>Branches & Pull Requests</li><li>Issues & Project Boards</li><li>GitHub Actions (CI/CD)</li></ul>",
        image: "https://www.tutorialspoint.com/github/images/github_dashboard.png",
      },
      "Repositories": {
        title: "Repositories",
        content:
          "A repository (repo) is a storage space for your project. Can be public (open-source) or private.",
        example: "<p>Example: Creating a repo to store your React project.</p>",
        image: "https://www.freecodecamp.org/news/content/images/2020/11/github-repo.png",
      },
      "Branches": {
        title: "Branches",
        content:
          "Branches allow you to work on different features independently without affecting the main codebase (usually 'main' or 'master').",
        example: "<p>Example: Feature branch for adding login functionality.</p>",
        image: "https://www.atlassian.com/dam/jcr:e82e5480-ff64-4ee3-9da0-2bce73ed17b2/branching-hero.png",
      },
      "Commits": {
        title: "Commits",
        content:
          "A commit records changes made to the code with a message describing the update. Commits are tracked in Git history.",
        example: "<p>Example: Commit message: 'Added user authentication'.</p>",
        image: "https://wac-cdn.atlassian.com/dam/jcr:e2a2e2d6-567b-4e07-851f-2dc7b6d3a6e7/commits.png",
      },
      "Pull Requests": {
        title: "Pull Requests (PR)",
        content:
          "PR allows developers to notify team members about changes pushed to a branch. The team can review, discuss, and merge the code.",
        example: "<p>Example: Submit a PR from 'feature/login' branch to 'main' branch.</p>",
        image: "https://blog.gitguardian.com/content/images/2021/06/pull-request.png",
      },
      "Issues": {
        title: "Issues",
        content:
          "GitHub Issues are used for bug tracking, feature requests, or project discussions.",
        example: "<p>Example: Create an issue to fix a login bug.</p>",
        image: "https://miro.medium.com/max/1400/1*oMDbxBoeQCh0Cm0Qh5UewQ.png",
      },
      "GitHub Actions": {
        title: "GitHub Actions (CI/CD)",
        content:
          "GitHub Actions automate workflows like testing, building, and deploying projects when changes occur.",
        example: "<p>Example: Auto-deploy website to Netlify on code push.</p>",
        image: "https://miro.medium.com/max/1400/1*2KZoqJQZguGrG3fUuwOaJQ.png",
      },
      "Forking Repositories": {
        title: "Forking Repositories",
        content:
          "Forking creates a personal copy of someone else's repository to freely experiment without affecting the original project.",
        example: "<p>Example: Fork an open-source library to modify for your project.</p>",
        image: "https://cdn.educba.com/academy/wp-content/uploads/2021/03/Forking-a-repository-on-GitHub.png",
      },
      "Cloning Repositories": {
        title: "Cloning Repositories",
        content:
          "Cloning copies a repository from GitHub to your local machine for development.",
        example: "<p>Example: `git clone https://github.com/user/repo.git`</p>",
        image: "https://wac-cdn.atlassian.com/dam/jcr:1ee0c593-7b1f-4dbd-9b91-bd6369b8b6cb/clone-repo.png",
      },
      "Real-World Examples": {
        title: "Real-World GitHub Usage",
        content:
          "GitHub is widely used by open-source communities, startups, and enterprises to manage code and collaborate globally.",
        example: "<ul><li>Open-Source: Linux Kernel</li><li>Startups: Airbnb, Netflix</li><li>Enterprise: Microsoft, Google internal projects</li></ul>",
        image: "https://education.github.com/git-cheat-sheet/assets/images/gh-logo.png",
      },
    },
  };

  // Sidebar Resize
  const handleMouseDown = () => setIsDragging(true);
  const handleMouseMove = (e) => {
    if (isDragging) {
      const newWidth = Math.min(Math.max(e.clientX, 150), 400);
      setSidebarWidth(newWidth);
    }
  };
  const handleMouseUp = () => setIsDragging(false);

  const selectedContent =
    Object.values(sections)
      .map((topics) => topics[selected])
      .filter(Boolean)[0] || "";

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
          const filteredTopics = Object.keys(sections[section]).filter((topic) =>
            topic.toLowerCase().includes(searchTerm.toLowerCase())
          );
          if (filteredTopics.length === 0) return null;
          return (
            <div key={section} className="section">
              <h3 className="section-title">{section}</h3>
              <ul>
                {filteredTopics.map((topic) => (
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
        {typeof selectedContent === "object" ? (
          <div>
            <p>{selectedContent.content}</p>
            {selectedContent.example && (
              <div className="example-container">
                <pre className="code-block">
                  <code>{selectedContent.example}</code>
                </pre>
                <iframe
                  title="example-output"
                  className="output-frame"
                  srcDoc={selectedContent.example}
                />
              </div>
            )}
            {selectedContent.image && (
              <img
                src={selectedContent.image}
                alt="Example"
                className="topic-img"
              />
            )}
          </div>
        ) : (
          <p>{selectedContent}</p>
        )}
      </main>
    </div>
  );
}
