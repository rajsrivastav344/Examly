// DBMS.jsx
import React, { useState } from "react";
import "./All.css";

export default function DBMS() {
  const [selected, setSelected] = useState("DBMS Introduction");
  const [sidebarWidth, setSidebarWidth] = useState(250);
  const [isDragging, setIsDragging] = useState(false);
  const [searchTerm, setSearchTerm] = useState("");

  const sections = {
    "🗃️ DBMS Fundamentals": {
      "DBMS Introduction": {
        title: "DBMS Introduction",
        content: `
A Database Management System (DBMS) is software that enables users to create, manage, retrieve, and manipulate data in a structured and efficient way.

Key characteristics:
- Data independence (physical & logical)
- Efficient querying & indexing
- Concurrency control
- Transaction management (ACID properties)
- Security & access control
- Backup & recovery

Types:
- Relational (RDBMS): MySQL, PostgreSQL, Oracle, SQL Server
- NoSQL: MongoDB (document), Cassandra (column), Neo4j (graph), Redis (key-value)
- NewSQL: CockroachDB, TiDB (distributed SQL)`,
        example: `<p>Amazon uses multiple DBMSs: Aurora (RDBMS) for orders, DynamoDB (NoSQL) for shopping cart, Neptune (graph) for recommendations.</p>`,
        graphic: `<svg width="400" height="180" viewBox="0 0 400 180" xmlns="http://www.w3.org/2000/svg">
  <rect x="50" y="60" width="300" height="80" fill="#e3f2fd" stroke="#1976d2"/>
  <text x="200" y="105" text-anchor="middle" font-weight="bold">DBMS</text>
  <circle cx="100" cy="30" r="20" fill="#bbdefb"/>
  <text x="100" y="35" text-anchor="middle">Users</text>
  <circle cx="300" cy="30" r="20" fill="#bbdefb"/>
  <text x="300" y="35" text-anchor="middle">Apps</text>
  <line x1="100" y1="50" x2="200" y2="60" stroke="#1976d2" marker-end="url(#arr)"/>
  <line x1="300" y1="50" x2="200" y2="60" stroke="#1976d2" marker-end="url(#arr)"/>
  <defs><marker id="arr" markerWidth="10" markerHeight="10" refX="8" refY="3" orient="auto"><path d="M0,0 L0,6 L9,3 z" fill="#1976d2"/></marker></defs>
</svg>`,
      },
      "DBMS vs File System": {
        title: "DBMS vs File System",
        content: `
File System limitations solved by DBMS:
- Data redundancy & inconsistency
- Difficult data access & querying
- No atomic transactions
- No concurrent access control
- No security & integrity constraints
- No backup & recovery automation

DBMS advantages:
- Centralized control
- Data abstraction
- Multiple views
- ACID transactions
- Query optimization`,
        example: `<p>File system: Multiple Excel files with duplicate customer data → inconsistency. DBMS: Single normalized Customer table → consistent.</p>`,
      },
    },

    "🗺️ Database Design & Modeling": {
      "ER Model & ER Diagram": {
        title: "ER Model & ER Diagram",
        content: `
Entity-Relationship Model is used for conceptual database design.

Components:
- Entity: strong (independent) / weak (dependent)
- Attribute: simple/composite, single/multi-valued, derived, key
- Relationship: unary, binary, ternary
- Cardinality: 1:1, 1:N, N:1, N:M
- Participation: total / partial

Extended ER: specialization/generalization, aggregation`,
        graphic: `<svg width="420" height="280" viewBox="0 0 420 280">
  <!-- Student Entity -->
  <rect x="60" y="60" width="100" height="60" fill="#e3f2fd" stroke="#1976d2" rx="8"/>
  <text x="110" y="95" text-anchor="middle">Student</text>
  <ellipse cx="110" cy="140" rx="40" ry="20" fill="#fff" stroke="#1976d2"/>
  <text x="110" y="145" text-anchor="middle">RollNo (PK)</text>
  <!-- Course Entity -->
  <rect x="260" y="60" width="100" height="60" fill="#e3f2fd" stroke="#1976d2" rx="8"/>
  <text x="310" y="95" text-anchor="middle">Course</text>
  <ellipse cx="310" cy="140" rx="40" ry="20" fill="#fff" stroke="#1976d2"/>
  <text x="310" y="145" text-anchor="middle">CourseID (PK)</text>
  <!-- Relationship -->
  <polygon points="210,90 230,70 250,90 230,110" fill="#fff9c4" stroke="#fbc02d"/>
  <text x="230" y="95" text-anchor="middle">ENROLLS</text>
  <text x="230" y="170" text-anchor="middle">N:M</text>
  <line x1="160" y1="90" x2="210" y2="90" stroke="#fbc02d"/>
  <line x1="250" y1="90" x2="300" y2="90" stroke="#fbc02d"/>
</svg>`,
        example: `<p>Library: Book (1:N) Issued_To → Member (N:1)</p>`,
      },
      "Normalization": {
        title: "Normalization",
        content: `
Process to eliminate redundancy & dependency issues.

Normal Forms:
- 1NF: Atomic values, no repeating groups
- 2NF: 1NF + no partial dependency
- 3NF: 2NF + no transitive dependency
- BCNF: Stronger 3NF (every determinant is candidate key)
- 4NF: Multi-valued dependencies
- 5NF: Join dependencies

Trade-off: Normalization vs Performance (denormalization for OLAP)`,
        example: `<pre><code>Before (unnormalized):
OrderID | Customer | Items
1       | Raj      | Laptop, Mouse

After 3NF:
Orders: OrderID, CustomerID
OrderItems: OrderID, ProductID
Products: ProductID, Name</code></pre>`,
      },
      "Data Models": {
        title: "Data Models",
        content: `
- Hierarchical (IMS) — tree structure (obsolete)
- Network (CODASYL) — graph-like (complex)
- Relational (Codd 1970) — tables, keys, SQL (dominant)
- Object-oriented — objects & classes
- NoSQL: Document, Key-Value, Column-family, Graph

2025–2026: Hybrid (PostgreSQL + JSONB, multi-model like ArangoDB)`,
        example: `<p>Graph model best for social networks (friends-of-friends queries)</p>`,
      },
    },

    "🔄 Transactions & Concurrency": {
      "ACID Properties": {
        title: "ACID Properties",
        content: `
- Atomicity: All or nothing (commit/rollback)
- Consistency: Valid state before & after transaction
- Isolation: Concurrent transactions don't interfere
- Durability: Committed changes persist (even after crash)

Implemented via logs, locks, MVCC (multi-version concurrency control)`,
        example: `<p>Bank transfer: deduct from A + credit to B must be atomic</p>`,
      },
      "Concurrency Control": {
        title: "Concurrency Control",
        content: `
Problems: Lost update, Dirty read, Non-repeatable read, Phantom read

Techniques:
- Locking (2PL, Strict 2PL)
- Timestamp ordering
- Optimistic concurrency (validation phase)
- MVCC (PostgreSQL, Oracle)

Isolation levels (SQL standard): Read Uncommitted → Serializable`,
        example: `<p>Serializable prevents phantom reads but reduces concurrency</p>`,
      },
      "Transaction Logs & Recovery": {
        title: "Transaction Logs & Recovery",
        content: `
Write-Ahead Logging (WAL):
- Log before data change
- Redo (crash recovery)
- Undo (rollback/abort)

ARIES recovery algorithm (widely used):
- Analysis → Redo → Undo phases`,
        example: `<p>After crash → redo committed transactions from log</p>`,
      },
    },

    "🛠️ Modern DBMS & Tools 2025–2026": {
      "Relational DBMS": {
        title: "Relational DBMS",
        content: `
- PostgreSQL (open-source leader, JSONB, extensions)
- MySQL / MariaDB (web apps)
- Oracle (enterprise)
- SQL Server (Microsoft ecosystem)
- Cloud: AWS RDS/Aurora, Azure SQL, Google Cloud SQL, PlanetScale`,
        example: `<p>PostgreSQL supports full-text search, GIS, custom types</p>`,
      },
      "NoSQL & Distributed Databases": {
        title: "NoSQL & Distributed Databases",
        content: `
- Document: MongoDB, CouchDB
- Key-Value: Redis (cache), DynamoDB
- Column: Cassandra, ScyllaDB
- Graph: Neo4j, Amazon Neptune
- Time-series: InfluxDB, TimescaleDB
- NewSQL: CockroachDB, YugabyteDB, TiDB

Use cases: Big data, high write throughput, horizontal scaling`,
        example: `<p>Netflix uses Cassandra for user profiles, DynamoDB for viewing history</p>`,
      },
      "Cloud & Modern Trends": {
        title: "Cloud & Modern Trends",
        content: `
- Serverless databases (Aurora Serverless, FaunaDB)
- Multi-cloud & hybrid
- AI integration (vector search, pgvector, Pinecone)
- Data lakes + warehouses (Snowflake, Databricks Lakehouse)
- Zero-ETL pipelines, real-time analytics`,
        example: `<p>Snowflake separates compute & storage → pay only for usage</p>`,
      },
    },

    "📊 Real-World Case Studies": {
      "E-commerce Database Design": {
        title: "E-commerce Database Design",
        content: `
Entities: User, Product, Order, OrderItem, Payment, Review, Category

Relationships:
- User 1:N Order
- Order 1:N OrderItem
- Product N:M Category
- Product 1:N Review

Normalization + indexes on frequent queries (product search, order history)`,
      },
      "Hospital Management System": {
        title: "Hospital Management System",
        content: `
Entities: Patient, Doctor, Appointment, Prescription, LabTest, Billing

Key features:
- Transactional integrity (appointment + billing)
- Concurrency (multiple doctors booking same slot)
- Security (role-based access: doctor vs patient)`,
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