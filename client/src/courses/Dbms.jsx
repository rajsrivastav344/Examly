// DBMS.jsx
import React, { useState } from "react";
import "./Webdev.css"; // reuse same styling

export default function DBMS() {
  const [selected, setSelected] = useState("DBMS Introduction");
  const [sidebarWidth, setSidebarWidth] = useState(250);
  const [isDragging, setIsDragging] = useState(false);
  const [searchTerm, setSearchTerm] = useState("");

  const sections = {
    "🗃️ Database Management System (DBMS)": {
      "DBMS Introduction": {
        title: "DBMS Introduction",
        content:
          "A Database Management System (DBMS) is software that stores, organizes, and manages data efficiently. It allows multiple users to access and manipulate data simultaneously while maintaining consistency, security, and integrity.",
        example:
          "<p>Example: MySQL, Oracle, PostgreSQL, and MongoDB are popular DBMSs used by companies worldwide to manage customer, financial, or operational data.</p>",
        image:
          "https://miro.medium.com/v2/resize:fit:1400/1*JMLv8vVhjsVfwgA2eZqYxg.jpeg",
      },
      "DBMS Architecture": {
        title: "DBMS Architecture",
        content:
          "DBMS architecture defines how data is stored, processed, and accessed. The common architectures are 1-tier, 2-tier, and 3-tier. A 3-tier architecture separates the user interface, application logic, and database layers for better scalability.",
        example:
          "<ul><li><b>1-Tier:</b> DBMS runs on the same machine as the user.</li><li><b>2-Tier:</b> Application communicates directly with the database (e.g., client-server model).</li><li><b>3-Tier:</b> Web applications — frontend → backend → database.</li></ul>",
        image:
          "https://miro.medium.com/v2/resize:fit:1400/1*MBh7LxgPRTURzIMTE6R9Ng.png",
      },
      "ER Model (Entity Relationship Model)": {
        title: "ER Model (Entity Relationship Model)",
        content:
          "The Entity-Relationship (ER) model represents the logical structure of a database. It shows how entities (tables) relate to each other through relationships. Each entity has attributes describing its characteristics.",
        example:
          "<p><b>Real-World Example:</b> A university database with entities like <b>Student</b>, <b>Course</b>, and <b>Instructor</b>. Students <i>enroll</i> in courses, and instructors <i>teach</i> courses.</p>",
        image:
          "https://www.researchgate.net/profile/Rakshit-Agarwal/publication/341992734/figure/fig1/AS:904347593228292@1592111531890/Entity-Relationship-Diagram-ER-Diagram.png",
      },
      "ER Diagram Explanation": {
        title: "ER Diagram Explanation",
        content:
          "An ER Diagram (ERD) uses shapes and connectors to illustrate relationships. Common components include: \n\n• Entities — Represented by rectangles (e.g., STUDENT).\n• Attributes — Represented by ovals (e.g., Name, Roll_No).\n• Relationships — Represented by diamonds (e.g., ENROLLS).\n• Cardinality — Defines how many instances of one entity relate to another (1:1, 1:N, N:M).",
        example:
          "<p><b>Example:</b> One <i>Instructor</i> teaches many <i>Courses</i> — 1:N relationship.</p>",
        image:
          "https://miro.medium.com/v2/resize:fit:1400/1*j6o7M2tY_qyQudR9VdStgA.png",
      },
      "Data Flow Diagram (DFD)": {
        title: "Data Flow Diagram (DFD)",
        content:
          "A DFD shows how data moves through a system — where it originates, how it flows, and where it is stored. It focuses on the process rather than the data structure.",
        example:
          "<ul><li><b>Level 0 (Context Diagram):</b> Shows the system as a single process with external entities (e.g., Student, Admin).</li><li><b>Level 1:</b> Breaks the system into sub-processes like Registration, Course Management, and Grades.</li></ul><p>Each process transforms data (input → output).</p>",
        image:
          "https://creately.com/diagram/example/hm5z1yyl/dfd-level-0-university-management-system",
      },
      "DFD Explanation": {
        title: "DFD Explanation",
        content:
          "A DFD uses standardized symbols to represent data flow:\n\n• Process — Circle or rounded rectangle (e.g., Register Student)\n• Data Flow — Arrows showing data movement (e.g., Student Info)\n• Data Store — Open-ended rectangle (e.g., Database Table)\n• External Entity — Square (e.g., Admin, User)\n\nIt helps visualize how input data transforms into output through processes.",
        example:
          "<p><b>Example:</b> In a Library Management System, the process <i>Issue Book</i> takes <i>User ID</i> and <i>Book ID</i> as input and updates the <i>Book Record</i> store.</p>",
        image:
          "https://creately.com/diagram/example/jx9h2e2a/library-management-system-dfd-level-1",
      },
      "Normalization": {
        title: "Normalization",
        content:
          "Normalization is the process of organizing data in a database to reduce redundancy and improve integrity. It breaks large tables into smaller, related ones. The main normal forms are 1NF, 2NF, 3NF, and BCNF.",
        example:
          "<ul><li><b>1NF:</b> Remove repeating groups.</li><li><b>2NF:</b> Remove partial dependency.</li><li><b>3NF:</b> Remove transitive dependency.</li></ul><p>Example: Storing student address in a separate table instead of duplicating it in every record.</p>",
        image:
          "https://miro.medium.com/v2/resize:fit:1400/1*7aOrJY_FOZkVC-axSh1ayw.png",
      },
      "Real-World Example (Banking System)": {
        title: "Real-World Example (Banking System)",
        content:
          "In a banking DBMS, entities like <b>Customer</b>, <b>Account</b>, and <b>Transaction</b> are interrelated. Customers can own multiple accounts, and each account can have many transactions.\n\nA DFD would show processes like <i>Deposit Money</i> and <i>Withdraw Cash</i> interacting with these data stores.",
        example:
          "<p><b>ER Example:</b> Customer (1:N) Account — A customer can hold multiple accounts.<br/><b>DFD Example:</b> A transaction process updates both Account and Transaction tables simultaneously.</p>",
        image:
          "https://creately.com/diagram/example/hb7fh8d63/er-diagram-for-banking-system",
      },
      "Future of DBMS": {
        title: "Future of DBMS",
        content:
          "Modern DBMSs are evolving with cloud, AI, and distributed systems. Cloud databases like AWS RDS, Azure SQL, and Google BigQuery offer scalability and automation. NoSQL and NewSQL systems are bridging structured and unstructured data for large-scale analytics.",
        example:
          "<p>Example: MongoDB for unstructured data, Snowflake for data warehousing, and Firebase for real-time mobile data sync.</p>",
        image:
          "https://miro.medium.com/v2/resize:fit:1400/1*n-SHPOK6n2SMLqXDTElpDw.png",
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
        <h1>🗃️ DBMS Dashboard</h1>
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
