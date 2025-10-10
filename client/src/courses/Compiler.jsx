// CompilerDesign.jsx
import React, { useState } from "react";
import "./Webdev.css";

export default function CompilerDesign() {
  const [selected, setSelected] = useState("Compiler Introduction");
  const [sidebarWidth, setSidebarWidth] = useState(250);
  const [isDragging, setIsDragging] = useState(false);
  const [searchTerm, setSearchTerm] = useState("");

  const sections = {
    "🖥️ Compiler Design": {
      "Compiler Introduction": {
        title: "Compiler Introduction",
        content:
          "A compiler is a program that translates high-level programming language code into machine code or intermediate code that a computer can execute.",
        example: "<p>Example: C code converted to machine code by GCC compiler.</p>",
        image: "https://upload.wikimedia.org/wikipedia/commons/3/3c/Compiler.svg",
      },
      "Importance of Compilers": {
        title: "Importance of Compilers",
        content:
          "Compilers provide portability, optimization, error checking, and efficiency by converting human-readable code into executable form.",
        example: "<p>Java programs can run on any system using the JVM compiler.</p>",
        image: "https://cdn.educba.com/academy/wp-content/uploads/2021/03/Importance-of-Compiler.jpg",
      },
      "Lexical Analysis": {
        title: "Lexical Analysis",
        content:
          "The phase where source code is broken into tokens. Removes comments and whitespace and detects lexical errors.",
        example: "<p>int a = 5; → Tokens: int, a, =, 5, ;</p>",
        image: "https://www.tutorialspoint.com/lexical-analysis/images/lexical-analysis.jpg",
      },
      "Syntax Analysis": {
        title: "Syntax Analysis",
        content:
          "Also called parsing. Checks grammar rules and generates a Parse Tree or Abstract Syntax Tree (AST). Detects syntax errors.",
        example: "<p>Expression: a + b → Parse tree showing addition operation.</p>",
        image: "https://www.tutorialspoint.com/compile_theory/images/syntax-analysis.jpg",
      },
      "Semantic Analysis": {
        title: "Semantic Analysis",
        content:
          "Ensures meaningful statements. Checks data types, variable declarations, scope, and function usage.",
        example: "<p>int a; a = 'Hello'; → Type mismatch error.</p>",
        image: "https://www.tutorialspoint.com/compile_theory/images/semantic-analysis.jpg",
      },
      "Intermediate Code Generation": {
        title: "Intermediate Code Generation",
        content:
          "Generates an intermediate representation (IR) of the source code to facilitate optimization and machine independence.",
        example: "<p>Three-address code: t1 = b + c; a = t1;</p>",
        image: "https://www.researchgate.net/profile/Amruth-Kumar/publication/342935318/figure/fig2/AS:911149455916544@1594871099862/Intermediate-Code-Generation.png",
      },
      "Code Optimization": {
        title: "Code Optimization",
        content:
          "Improves performance without changing functionality. Removes redundant code, loop unrolling, common subexpression elimination.",
        example: "<p>Optimized: Reuse previously computed value instead of recalculating.</p>",
        image: "https://miro.medium.com/v2/resize:fit:1200/format:webp/1*zjaT1S_1SPpWbYfXU0sU0g.png",
      },
      "Code Generation": {
        title: "Code Generation",
        content:
          "Converts optimized intermediate code into target machine code, allocating registers and memory.",
        example: "<p>C code compiled to x86 assembly instructions.</p>",
        image: "https://www.tutorialspoint.com/compile_theory/images/code-generation.jpg",
      },
      "Symbol Table": {
        title: "Symbol Table",
        content:
          "Stores information about identifiers: name, type, scope, memory location. Used throughout compilation.",
        example: "<p>Example: variable a, type int, memory 0x01A3</p>",
        image: "https://www.tutorialspoint.com/compile_theory/images/symbol-table.jpg",
      },
      "Error Handling": {
        title: "Error Handling",
        content:
          "Detects lexical, syntax, and semantic errors and may provide suggestions to fix them.",
        example: "<p>Example: Undefined variable usage triggers a compile-time error.</p>",
        image: "https://www.tutorialspoint.com/compile_theory/images/error-handling.jpg",
      },
      "Types of Compilers": {
        title: "Types of Compilers",
        content:
          "Single-pass, Multi-pass, Cross Compiler, Just-in-Time (JIT) compiler. Each serves a specific purpose based on optimization and target platform.",
        example: "<p>Java JIT compiler executes bytecode at runtime.</p>",
        image: "https://upload.wikimedia.org/wikipedia/commons/0/00/Compiler_types.png",
      },
      "Real-world Example": {
        title: "Real-world Example",
        content:
          "Java Compiler converts .java files to bytecode (.class). GCC converts .c files to machine code. Python uses bytecode compilation (.pyc).",
        example: "<p>Example: int a = 10; → Executable machine code or JVM bytecode.</p>",
        image: "https://miro.medium.com/v2/resize:fit:1400/1*3mX5Vhzf1iMMSbSlYr2kAA.png",
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
        <h1>🖥️ Compiler Design Dashboard</h1>
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
