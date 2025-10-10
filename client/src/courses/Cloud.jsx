// Cloud.jsx
import React, { useState } from "react";
import "./Webdev.css";

export default function Cloud() {
  const [selected, setSelected] = useState("Cloud Introduction");
  const [sidebarWidth, setSidebarWidth] = useState(250);
  const [isDragging, setIsDragging] = useState(false);
  const [searchTerm, setSearchTerm] = useState("");

  const sections = {
    "☁️ Cloud Computing": {
      "Cloud Introduction": {
        title: "Cloud Introduction",
        content: `
Cloud computing is the delivery of computing services over the internet (the cloud), including servers, storage, databases, networking, software, and analytics.
Key benefits:
- Cost efficiency
- Scalability
- Flexibility
- On-demand services`,
        example: `<p>Example: Storing files on Google Drive or Dropbox instead of local storage.</p>`,
        image: "https://miro.medium.com/v2/resize:fit:1400/1*0V0t7Uo9sVd6XPJj6-1Ygg.png",
      },
      "SaaS (Software as a Service)": {
        title: "SaaS (Software as a Service)",
        content: `
SaaS delivers software applications over the internet on a subscription basis.
- Users access via browser
- No need for installation or maintenance
- Updates handled by provider`,
        example: `<ul><li>Google Workspace (Docs, Sheets, Gmail)</li><li>Salesforce</li><li>Zoom</li></ul>`,
        image: "https://www.simplilearn.com/ice9/free_resources_article_thumb/SaaS.png",
      },
      "PaaS (Platform as a Service)": {
        title: "PaaS (Platform as a Service)",
        content: `
PaaS provides a platform for developers to build, test, and deploy applications without managing underlying infrastructure.
- Provides runtime, OS, and databases
- Focus on development rather than hardware`,
        example: `<ul><li>Heroku</li><li>Google App Engine</li><li>Microsoft Azure App Service</li></ul>`,
        image: "https://www.simplilearn.com/ice9/free_resources_article_thumb/PaaS.png",
      },
      "IaaS (Infrastructure as a Service)": {
        title: "IaaS (Infrastructure as a Service)",
        content: `
IaaS provides virtualized computing resources over the internet.
- Users manage OS, applications, and storage
- Providers manage hardware, networking, and virtualization
- Ideal for flexible, scalable infrastructure`,
        example: `<ul><li>Amazon Web Services (AWS EC2)</li><li>Microsoft Azure Virtual Machines</li><li>Google Compute Engine</li></ul>`,
        image: "https://www.simplilearn.com/ice9/free_resources_article_thumb/IaaS.png",
      },
      "Cloud Real-World Example": {
        title: "Real-World Example",
        content: `
Example: Netflix
- Uses AWS to stream videos to millions of users
- Auto-scales servers based on demand
- Stores vast amounts of data in cloud storage
- SaaS apps for internal operations and analytics`,
        example: `<p>Netflix leverages cloud for scalability, reliability, and cost efficiency.</p>`,
        image: "https://miro.medium.com/v2/resize:fit:1400/1*V0u7bXr2H98R87R2v6WzPQ.png",
      },
    },
  };

  // === Sidebar Resize ===
  const handleMouseDown = () => setIsDragging(true);
  const handleMouseMove = (e) => {
    if (isDragging) {
      const newWidth = Math.min(Math.max(e.clientX, 180), 400);
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
        <h1>☁️ Cloud Computing Dashboard</h1>
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
              <pre className="code-block">
                <code>{selectedContent.example}</code>
              </pre>
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
