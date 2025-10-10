// DevOps.jsx
import React, { useState } from "react";
import "./Webdev.css"; // reuse same styling

export default function DevOps() {
  const [selected, setSelected] = useState("DevOps Introduction");
  const [sidebarWidth, setSidebarWidth] = useState(250);
  const [isDragging, setIsDragging] = useState(false);
  const [searchTerm, setSearchTerm] = useState("");

  const sections = {
    "⚙️ DevOps": {
      "DevOps Introduction": {
        title: "DevOps Introduction",
        content:
          "DevOps is a set of practices that combines software development (Dev) and IT operations (Ops). It aims to shorten the system development life cycle and deliver high-quality software continuously. DevOps emphasizes automation, collaboration, and continuous feedback between development and operations teams.",
        example:
          "<p>Example: A company using CI/CD pipelines to deploy code automatically after passing all tests, reducing manual work and deployment errors.</p>",
        image:
          "https://miro.medium.com/v2/resize:fit:1400/1*0gYXVR8RkZfXvPdzfDMOlg.jpeg",
      },
      "DevOps Lifecycle": {
        title: "DevOps Lifecycle",
        content:
          "The DevOps lifecycle consists of multiple stages — Continuous Development, Continuous Integration, Continuous Testing, Continuous Deployment, Continuous Monitoring, and Continuous Feedback. Each stage ensures rapid and reliable delivery of applications.",
        example:
          "<ul><li><b>Plan & Code:</b> Developers plan and write code using tools like Git.</li><li><b>Build:</b> Jenkins or GitHub Actions automate builds.</li><li><b>Test:</b> Tools like Selenium, JUnit ensure quality.</li><li><b>Deploy:</b> Kubernetes or Docker used for containerized deployment.</li><li><b>Monitor:</b> Tools like Prometheus, Grafana monitor performance.</li></ul>",
        image:
          "https://miro.medium.com/v2/resize:fit:1400/1*nWMpWe6FMMzK5wo-4D1p4w.png",
      },
      "DevOps Tools": {
        title: "DevOps Tools",
        content:
          "DevOps relies on a combination of tools that automate various stages of the pipeline, often referred to as the 'DevOps Toolchain'.",
        example:
          "<ul><li><b>Git:</b> Version control system for code management.</li><li><b>Jenkins:</b> Automates building, testing, and deployment.</li><li><b>Docker:</b> Containerizes applications for consistent environments.</li><li><b>Kubernetes:</b> Orchestrates container deployment at scale.</li><li><b>Ansible:</b> Automates server configuration.</li><li><b>Prometheus + Grafana:</b> Monitor and visualize metrics.</li></ul>",
        image:
          "https://miro.medium.com/v2/resize:fit:1400/1*qwof-JhFf5MbAo2dRZV0iQ.jpeg",
      },
      "DevOps Real-World Example": {
        title: "DevOps Real-World Example",
        content:
          "Netflix is one of the best examples of successful DevOps implementation. With thousands of daily deployments, Netflix relies on automation, continuous delivery, and real-time monitoring to ensure uninterrupted streaming service worldwide.",
        example:
          "<p>Example: Netflix uses Spinnaker (open-source CD platform) and Chaos Monkey (for resilience testing) to ensure system reliability even when failures occur.</p>",
        image:
          "https://miro.medium.com/v2/resize:fit:1400/1*2Q8CXzHCA_MO_UYb6bzLKw.jpeg",
      },
      "DevOps Benefits": {
        title: "DevOps Benefits",
        content:
          "Implementing DevOps offers numerous benefits such as faster software delivery, improved collaboration, higher deployment success rates, and early problem detection.",
        example:
          "<ul><li>50% faster time-to-market</li><li>Improved communication between Dev & Ops</li><li>Continuous monitoring for early bug detection</li><li>Automation reduces manual workload</li></ul>",
        image:
          "https://miro.medium.com/v2/resize:fit:1400/1*V_d9x6eOE1nYDFYbU8VErA.jpeg",
      },
      "DevOps vs Traditional IT": {
        title: "DevOps vs Traditional IT",
        content:
          "In traditional IT, development and operations work in silos — leading to slow delivery and conflicts. DevOps unites both through automation, CI/CD, and shared responsibility.",
        example:
          "<p><b>Traditional IT:</b> Manual testing and deployment.<br/><b>DevOps:</b> Automated pipelines, faster feedback loops.</p>",
        image:
          "https://miro.medium.com/v2/resize:fit:1400/1*h6HGEHcwc0W3qV3FThQuuw.png",
      },
      "Future of DevOps": {
        title: "Future of DevOps",
        content:
          "The future of DevOps will see tighter integration with AI and Cloud. Concepts like AIOps (AI for Operations), GitOps, and DevSecOps are gaining traction to automate decision-making, strengthen security, and enhance scalability.",
        example:
          "<p>Example: Using AI-based monitoring tools to predict failures before they happen, or automating security checks within the CI/CD pipeline.</p>",
        image:
          "https://miro.medium.com/v2/resize:fit:1400/1*IO6M4-0cZTzBQod7iVCU6g.jpeg",
      },
    },
  };

  // === Sidebar Resize ===
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
        <h1>⚙️ DevOps Dashboard</h1>
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
