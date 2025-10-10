// DL.jsx
import React, { useState } from "react";
import "./Webdev.css"; // reuse same styling

export default function DL() {
  const [selected, setSelected] = useState("Deep Learning Introduction");
  const [sidebarWidth, setSidebarWidth] = useState(250);
  const [isDragging, setIsDragging] = useState(false);
  const [searchTerm, setSearchTerm] = useState("");

  const sections = {
    "🧠 Deep Learning": {
      "Deep Learning Introduction": {
        title: "Deep Learning Introduction",
        content:
          "Deep Learning (DL) is a specialized branch of Machine Learning that uses neural networks with many layers (deep architectures) to model complex patterns in data.",
        example:
          "<p>Example: A deep neural network recognizing objects in an image.</p>",
        image:
          "https://miro.medium.com/v2/resize:fit:1400/1*V3KZzjDqZVG7jOXJtHecTw.jpeg",
      },
      "Neural Networks Basics": {
        title: "Neural Networks Basics",
        content:
          "A neural network is made up of interconnected nodes (neurons) organized into layers — input, hidden, and output layers. Each connection has a weight that adjusts during training.",
        example:
          "<ul><li>Input Layer: Receives data</li><li>Hidden Layers: Extract features</li><li>Output Layer: Produces final prediction</li></ul>",
        image:
          "https://miro.medium.com/v2/resize:fit:1400/1*2oAw8Rp1t6Mf4VJDR4g1EA.png",
      },
      "Convolutional Neural Networks (CNN)": {
        title: "Convolutional Neural Networks (CNN)",
        content:
          "CNNs are designed for image-related tasks. They use convolutional layers to extract features like edges, shapes, and textures from images.",
        example:
          "<p>Example: CNN used in facial recognition or medical image analysis.</p>",
        image:
          "https://miro.medium.com/v2/resize:fit:1400/1*m0MZ6F6mA8zKkCZ-FINR1A.png",
      },
      "Recurrent Neural Networks (RNN)": {
        title: "Recurrent Neural Networks (RNN)",
        content:
          "RNNs are specialized for sequential data like text or time series. They have loops that allow information to persist, enabling memory of previous steps.",
        example:
          "<p>Example: Predicting the next word in a sentence using an RNN.</p>",
        image:
          "https://miro.medium.com/v2/resize:fit:1400/1*3k3SgA3NfJ6nB4xWuj0ZKw.png",
      },
      "Applications of Deep Learning": {
        title: "Applications of Deep Learning",
        content:
          "Deep Learning powers cutting-edge technologies in vision, speech, and natural language processing.",
        example:
          "<ul><li>Image classification (e.g., Google Photos)</li><li>Speech recognition (e.g., Siri, Alexa)</li><li>Text generation (e.g., ChatGPT)</li></ul>",
        image:
          "https://builtin.com/sites/www.builtin.com/files/styles/ckeditor_optimize/public/inline-images/deep-learning-applications.png",
      },
      "Future of Deep Learning": {
        title: "Future of Deep Learning",
        content:
          "Future advancements in Deep Learning include energy-efficient models, explainable AI, and integration with quantum computing and neuroscience.",
        example:
          "<p>Example: Hybrid AI systems that combine symbolic reasoning with deep networks.</p>",
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
        <h1>🧠 Deep Learning Dashboard</h1>
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
