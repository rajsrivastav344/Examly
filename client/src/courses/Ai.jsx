// AI.jsx
import React, { useState } from "react";
import "./Webdev.css";

export default function Ai() {
  const [selected, setSelected] = useState("AI Introduction");
  const [sidebarWidth, setSidebarWidth] = useState(250);
  const [isDragging, setIsDragging] = useState(false);
  const [searchTerm, setSearchTerm] = useState("");

  const sections = {
    "🤖 Artificial Intelligence": {
      "AI Introduction": {
        title: "AI Introduction",
        content:
          "Artificial Intelligence (AI) is the simulation of human intelligence processes by machines. It enables systems to think, learn, and make decisions like humans.",
        example:
          "<p>Example: ChatGPT responding intelligently to user input.</p>",
        image:
          "https://miro.medium.com/v2/resize:fit:1400/1*ot9M0LxoXgF3gMGr-Qi5Lg.jpeg",
      },
      "AI History": {
        title: "AI History",
        content:
          "AI research began in the 1950s. The term ‘Artificial Intelligence’ was coined at the Dartmouth Conference in 1956 by John McCarthy.",
        example:
          "<p>1956: Dartmouth Workshop — the birth of AI as a scientific field.</p>",
        image:
          "https://upload.wikimedia.org/wikipedia/commons/e/e4/John_McCarthy_Stanford.jpg",
      },
      "AI Applications": {
        title: "AI Applications",
        content:
          "AI is transforming industries such as healthcare, finance, education, and entertainment. It powers applications like chatbots, virtual assistants, and recommendation systems.",
        example:
          "<ul><li>Healthcare diagnosis</li><li>Fraud detection</li><li>Self-driving cars</li></ul>",
        image:
          "https://builtin.com/sites/www.builtin.com/files/styles/ckeditor_optimize/public/inline-images/artificial-intelligence-examples.jpg",
      },
      "AI vs Human Intelligence": {
        title: "AI vs Human Intelligence",
        content:
          "AI can process large amounts of data faster than humans but lacks creativity, emotions, and consciousness.",
        example:
          "<p><b>AI:</b> Logical and data-driven<br/><b>Humans:</b> Emotional and creative</p>",
        image:
          "https://miro.medium.com/v2/resize:fit:1400/1*qLTgK4kQ4VfVGZejdsm2Rg.jpeg",
      },
      "Future of AI": {
        title: "Future of AI",
        content:
          "The future of AI involves developing general intelligence capable of reasoning and problem-solving across diverse tasks. Ethics and regulation will play key roles in its advancement.",
        example:
          "<p>AI in 2030: Personalized learning, smart cities, ethical robots.</p>",
        image:
          "https://miro.medium.com/v2/resize:fit:1400/1*D_2OeEqj1RXu6pfxWqZ-rA.jpeg",
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
        <h1>🤖 Artificial Intelligence Dashboard</h1>
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
