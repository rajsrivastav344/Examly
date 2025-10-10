// DataAnalytics.jsx
import React, { useState } from "react";
import "./Webdev.css"; // reuse same styling

export default function DataAnalytics() {
  const [selected, setSelected] = useState("Introduction to Data Analytics");
  const [sidebarWidth, setSidebarWidth] = useState(250);
  const [isDragging, setIsDragging] = useState(false);
  const [searchTerm, setSearchTerm] = useState("");

  const sections = {
    "📊 Data Analytics": {
      "Introduction to Data Analytics": {
        title: "Introduction to Data Analytics",
        content:
          "Data Analytics is the process of examining raw data to uncover trends, patterns, and insights that help in decision-making.",
        example: "<p>Example: Analyzing sales data to optimize product inventory.</p>",
        image: "https://miro.medium.com/max/1400/1*YpWaqHedzj7qjHo0V9C7LQ.png",
      },
      "Types of Data Analytics": {
        title: "Types of Data Analytics",
        content:
          "1. Descriptive Analytics: What happened?<br/>2. Diagnostic Analytics: Why did it happen?<br/>3. Predictive Analytics: What will happen?<br/>4. Prescriptive Analytics: What should we do?",
        example:
          "<p>Example: E-commerce uses descriptive analytics for sales reports, predictive analytics for customer behavior.</p>",
        image: "https://cdn.analyticsvidhya.com/wp-content/uploads/2020/09/Analytics-Types.png",
      },
      "Data Collection": {
        title: "Data Collection",
        content:
          "Gathering data from various sources such as databases, web logs, surveys, IoT devices, or APIs.",
        example:
          "<p>Example: Collecting customer purchase history from a retail database.</p>",
        image: "https://www.analyticssteps.com/sites/default/files/2020-07/Data-Collection-Methods.png",
      },
      "Data Cleaning": {
        title: "Data Cleaning",
        content:
          "Removing errors, duplicates, missing values, and inconsistencies to improve data quality.",
        example:
          "<p>Example: Removing records with missing customer email addresses before analysis.</p>",
        image: "https://data-flair.training/blogs/wp-content/uploads/sites/2/2020/12/Data-Cleaning.jpg",
      },
      "Data Visualization": {
        title: "Data Visualization",
        content:
          "Representing data graphically using charts, graphs, dashboards, or interactive visualizations.",
        example:
          "<p>Example: Using bar charts to compare monthly sales.</p>",
        image: "https://miro.medium.com/max/1400/1*9pF7t8Gk8nN4rZZcVYFybg.png",
      },
      "Statistical Analysis": {
        title: "Statistical Analysis",
        content:
          "Using statistics to summarize, interpret, and infer conclusions from data.",
        example:
          "<p>Example: Calculating mean, median, standard deviation of customer ratings.</p>",
        image: "https://www.simplilearn.com/ice9/free_resources_article_thumb/Statistics_for_Data_Analysis.jpg",
      },
      "Data Mining": {
        title: "Data Mining",
        content:
          "Extracting useful patterns from large datasets using algorithms and machine learning.",
        example:
          "<p>Example: Identifying buying patterns of customers using clustering.</p>",
        image: "https://miro.medium.com/max/1400/1*Kqz8fQz1HlpG6Z6QvR3Pog.png",
      },
      "Predictive Analytics": {
        title: "Predictive Analytics",
        content:
          "Using historical data to forecast future trends using regression, time series, or ML models.",
        example:
          "<p>Example: Predicting next month’s sales using historical data.</p>",
        image: "https://www.datapine.com/blog/wp-content/uploads/2019/07/Predictive-Analytics-Example.png",
      },
      "Tools for Data Analytics": {
        title: "Tools for Data Analytics",
        content:
          "Popular tools include Excel, Python (Pandas, NumPy, Matplotlib), R, SQL, Tableau, Power BI, and Google Data Studio.",
        example:
          "<p>Example: Using Tableau to create an interactive sales dashboard.</p>",
        image: "https://dataconomy.com/wp-content/uploads/2019/11/Data-analytics-tools.jpg",
      },
      "Real-World Applications": {
        title: "Real-World Applications",
        content:
          "Data analytics is used in healthcare, finance, marketing, retail, sports, and more to make data-driven decisions.",
        example:
          "<ul><li>Healthcare: Predict patient readmissions</li><li>Retail: Personalized recommendations</li><li>Finance: Fraud detection</li></ul>",
        image: "https://www.analyticsinsight.net/wp-content/uploads/2020/05/data-analytics-in-real-world.jpg",
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
        <h1>📊 Data Analytics Dashboard</h1>
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
