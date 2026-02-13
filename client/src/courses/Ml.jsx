
import React, { useState } from "react";
import "./All.css";

export default function ML() {
  const [selected, setSelected] = useState("ML Introduction");
  const [sidebarWidth, setSidebarWidth] = useState(250);
  const [isDragging, setIsDragging] = useState(false);
  const [searchTerm, setSearchTerm] = useState("");

  const sections = {
    "📊 Machine Learning": {
      "ML Introduction": {
        title: "ML Introduction",
        content:
          "Machine Learning (ML) is a subset of AI that focuses on enabling computers to learn patterns from data and make predictions or decisions without being explicitly programmed.",
        example:
          "<p>Example: Predicting house prices based on features like size, location, and age.</p>",
        image:
          "https://miro.medium.com/v2/resize:fit:1400/1*sWbS6Oq9zqLxL-4iV8nRRA.jpeg",
      },
      "Types of Machine Learning": {
        title: "Types of Machine Learning",
        content:
          "ML is generally divided into three main types: Supervised Learning, Unsupervised Learning, and Reinforcement Learning.",
        example:
          "<ul><li><b>Supervised:</b> Predict outcomes using labeled data.</li><li><b>Unsupervised:</b> Find hidden patterns in unlabeled data.</li><li><b>Reinforcement:</b> Learn by trial and error with feedback.</li></ul>",
        image:
          "https://miro.medium.com/v2/resize:fit:1400/1*rDN4A7fBrX1g6Xv1F-Z5GA.png",
      },
      "Common ML Algorithms": {
        title: "Common ML Algorithms",
        content:
          "Some popular algorithms include Linear Regression, Decision Trees, K-Nearest Neighbors (KNN), Support Vector Machines (SVM), and Random Forest.",
        example:
          "<ul><li>Linear Regression – predicts continuous values</li><li>Decision Trees – classify data based on feature rules</li><li>KNN – classifies based on nearest neighbors</li></ul>",
        image:
          "https://miro.medium.com/v2/resize:fit:1400/1*-xZ2vSwWvJ7htvwKqXFTjw.png",
      },
      "Applications of ML": {
        title: "Applications of ML",
        content:
          "Machine Learning is used in various domains such as healthcare, e-commerce, marketing, and autonomous systems.",
        example:
          "<ul><li>Spam email filtering</li><li>Product recommendation systems</li><li>Credit risk prediction</li></ul>",
        image:
          "https://builtin.com/sites/www.builtin.com/files/styles/ckeditor_optimize/public/inline-images/machine-learning-applications-examples.png",
      },
      "ML vs AI": {
        title: "ML vs AI",
        content:
          "AI is the broader concept of creating intelligent machines, while ML is a subset of AI focused on learning from data.",
        example:
          "<p><b>AI:</b> Imitates human intelligence.<br/><b>ML:</b> Learns from data to make predictions.</p>",
        image:
          "https://miro.medium.com/v2/resize:fit:1400/1*ZJj5btMwh8_3L0PnZbPgbg.jpeg",
      },
      "Future of ML": {
        title: "Future of ML",
        content:
          "The future of ML involves automated machine learning (AutoML), edge computing, and integration with AI for smarter, adaptive systems.",
        example:
          "<p>Example: AutoML tools like Google Cloud AutoML simplify model creation for non-experts.</p>",
        image:
          "https://miro.medium.com/v2/resize:fit:1400/1*jD3xAQ35p3cQdT31BGuYQg.jpeg",
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
        <h1>📊 Machine Learning Dashboard</h1>
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
