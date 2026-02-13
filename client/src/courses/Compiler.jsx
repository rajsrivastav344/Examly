// CompilerDesign.jsx
import React, { useState } from "react";
import "./All.css";

export default function CompilerDesign() {
  const [selected, setSelected] = useState("Compiler Introduction");
  const [sidebarWidth, setSidebarWidth] = useState(250);
  const [isDragging, setIsDragging] = useState(false);
  const [searchTerm, setSearchTerm] = useState("");

  const sections = {
    "🖥️ Compiler Design Fundamentals": {
      "Compiler Introduction": {
        title: "Compiler Introduction",
        content: `
A compiler is a program that translates high-level source code (C, Java, Rust, Python, etc.) into low-level target code (machine code, bytecode, WebAssembly) that a computer can execute or interpret.

Core responsibilities:
- Read & understand source code
- Check for errors (lexical, syntax, semantic)
- Optimize for performance
- Generate efficient target code

Compiler vs Interpreter:
- Compiler: translates once → faster execution
- Interpreter: translates line-by-line → easier debugging, slower`,
        example: `<p>GCC compiles C → x86 assembly/machine code</p>
<p>Javac compiles Java → JVM bytecode</p>`,
        graphic: `<svg width="420" height="140" viewBox="0 0 420 140">
  <rect x="30" y="40" width="100" height="60" fill="#e3f2fd" stroke="#1976d2"/>
  <text x="80" y="75" text-anchor="middle">Source Code</text>
  <polygon points="140,70 160,50 180,70 160,90" fill="#e3f2fd"/>
  <text x="160" y="75" text-anchor="middle">→</text>
  <rect x="190" y="40" width="100" height="60" fill="#fff9c4" stroke="#fbc02d"/>
  <text x="240" y="75" text-anchor="middle">Compiler</text>
  <polygon points="300,70 320,50 340,70 320,90" fill="#fff9c4"/>
  <text x="320" y="75" text-anchor="middle">→</text>
  <rect x="350" y="40" width="100" height="60" fill="#c8e6c9" stroke="#388e3c"/>
  <text x="400" y="75" text-anchor="middle">Machine Code</text>
</svg>`,
      },
      "Phases of a Compiler": {
        title: "Phases of a Compiler",
        content: `
Front-end (language-dependent):
1. Lexical Analysis (scanner) → tokens
2. Syntax Analysis (parser) → parse tree / AST
3. Semantic Analysis → type checking, symbol table

Middle-end (optimization):
4. Intermediate Code Generation → IR (three-address code, LLVM IR)
5. Code Optimization → faster/smaller code

Back-end (machine-dependent):
6. Code Generation → target assembly/machine code
7. Register Allocation, Instruction Selection

Symbol table & error handling run across phases`,
        graphic: `<svg width="600" height="180" viewBox="0 0 600 180">
  <rect x="20" y="60" width="100" height="60" fill="#bbdefb"/>
  <text x="70" y="95" text-anchor="middle">Lexical</text>
  <polygon points="130,90 150,70 170,90 150,110" fill="#bbdefb"/>
  <text x="150" y="95" text-anchor="middle">→</text>
  <rect x="180" y="60" width="100" height="60" fill="#fff9c4"/>
  <text x="230" y="95" text-anchor="middle">Syntax</text>
  <polygon points="290,90 310,70 330,90 310,110" fill="#fff9c4"/>
  <text x="310" y="95" text-anchor="middle">→</text>
  <rect x="340" y="60" width="100" height="60" fill="#c8e6c9"/>
  <text x="390" y="95" text-anchor="middle">Semantic</text>
  <polygon points="450,90 470,70 490,90 470,110" fill="#c8e6c9"/>
  <text x="470" y="95" text-anchor="middle">→</text>
  <rect x="500" y="60" width="100" height="60" fill="#f8bbd0"/>
  <text x="550" y="95" text-anchor="middle">IR + Opt</text>
</svg>`,
      },
    },

    "🔍 Front-End Phases": {
      "Lexical Analysis (Scanning)": {
        title: "Lexical Analysis (Scanning)",
        content: `
First phase: converts source code stream into sequence of tokens.
- Identifies keywords, identifiers, literals, operators, punctuators
- Removes comments & whitespace
- Uses regular expressions & finite automata (DFA)

Tools: Flex, Lex, hand-written scanners`,
        example: `<pre><code>Input: int main() { int x = 42; return 0; }
Tokens: int, main, (, ), {, int, x, =, 42, ;, return, 0, ;, }</code></pre>`,
      },
      "Syntax Analysis (Parsing)": {
        title: "Syntax Analysis (Parsing)",
        content: `
Builds parse tree / Abstract Syntax Tree (AST) based on grammar rules.
- Top-down (LL, recursive descent) vs Bottom-up (LR, LALR, SLR)
- Detects syntax errors

Tools: Yacc, Bison, ANTLR, Tree-sitter (modern)`,
        example: `<p>For expression a + b * c → precedence handled correctly in AST</p>`,
        graphic: `<svg width="320" height="240" viewBox="0 0 320 240">
  <rect x="140" y="20" width="80" height="40" fill="#fffde7" stroke="#fbc02d"/>
  <text x="180" y="45" text-anchor="middle">+</text>
  <rect x="60" y="80" width="80" height="40" fill="#e3f2fd" stroke="#1976d2"/>
  <text x="100" y="105" text-anchor="middle">a</text>
  <rect x="200" y="80" width="80" height="40" fill="#fff9c4" stroke="#fbc02d"/>
  <text x="240" y="105" text-anchor="middle">*</text>
  <rect x="180" y="140" width="80" height="40" fill="#e3f2fd" stroke="#1976d2"/>
  <text x="220" y="165" text-anchor="middle">b</text>
  <rect x="260" y="140" width="80" height="40" fill="#e3f2fd" stroke="#1976d2"/>
  <text x="300" y="165" text-anchor="middle">c</text>
  <line x1="180" y1="60" x2="100" y2="80" stroke="#000"/>
  <line x1="180" y1="60" x2="240" y2="80" stroke="#000"/>
  <line x1="240" y1="120" x2="220" y2="140" stroke="#000"/>
  <line x1="240" y1="120" x2="300" y2="140" stroke="#000"/>
</svg>`,
      },
      "Semantic Analysis": {
        title: "Semantic Analysis",
        content: `
Checks meaning & context:
- Type checking
- Variable declaration & scope
- Function signature matching
- Array bounds (static)
- Label usage

Builds/enriches symbol table with attributes`,
        example: `<pre><code>int x; float y;
x = y;          // Error: type mismatch
void foo(int);  // Declaration
foo("hello");   // Error: argument type mismatch</code></pre>`,
      },
    },

    "⚙️ Middle & Back-End": {
      "Intermediate Code Generation": {
        title: "Intermediate Code Generation",
        content: `
Produces platform-independent representation:
- Three-address code (TAC)
- Postfix / Reverse Polish Notation
- LLVM IR (modern standard)
- Java bytecode, .NET CIL

Advantages: easier optimization, retargeting`,
        example: `<pre><code>// Source: a = b * -c + b * -c;
t1 = -c
t2 = b * t1
t3 = -c
t4 = b * t3
a = t2 + t4</code></pre>`,
      },
      "Code Optimization": {
        title: "Code Optimization",
        content: `
Machine-independent & dependent passes:
- Constant folding / propagation
- Common subexpression elimination
- Dead code elimination
- Loop invariant code motion
- Loop unrolling / fusion
- Strength reduction
- Register allocation (graph coloring)

Modern: LLVM does aggressive optimizations`,
        example: `<p>Before: x = 2 + 3; After: x = 5;</p>`,
      },
      "Code Generation": {
        title: "Code Generation",
        content: `
Final translation to target:
- Instruction selection
- Register allocation
- Peephole optimization
- Instruction scheduling

Targets: x86, ARM, RISC-V, WebAssembly, GPU shaders`,
        example: `<p>TAC → x86 assembly: mov eax, [b]; imul eax, [c]</p>`,
      },
    },

    "🗄️ Supporting Structures": {
      "Symbol Table": {
        title: "Symbol Table",
        content: `
Data structure storing info about identifiers:
- Name, type, scope, storage class
- Memory address/offset
- Function params/return type

Implementations: hash table, tree (for scopes)

Used in all phases after lexical`,
        graphic: `<svg width="380" height="220" viewBox="0 0 380 220">
  <text x="190" y="30" text-anchor="middle">Symbol Table (Hash Map)</text>
  <rect x="40" y="60" width="300" height="140" fill="#f5f5f5" stroke="#616161"/>
  <rect x="50" y="70" width="280" height="30" fill="#e0f2f1" stroke="#00796b"/>
  <text x="190" y="90" text-anchor="middle">Name: x   Type: int   Scope: global   Addr: 0x1000</text>
  <rect x="50" y="110" width="280" height="30" fill="#e3f2fd" stroke="#1976d2"/>
  <text x="190" y="130" text-anchor="middle">Name: main   Type: func   Return: int   Params: ()</text>
  <rect x="50" y="150" width="280" height="30" fill="#fff9c4" stroke="#fbc02d"/>
  <text x="190" y="170" text-anchor="middle">Name: arr   Type: int[]   Scope: local   Size: 20</text>
</svg>`,
      },
      "Error Recovery & Handling": {
        title: "Error Recovery & Handling",
        content: `
Strategies:
- Panic mode (skip until synchronizing token)
- Phrase-level (insert/delete tokens)
- Error productions in grammar
- Global correction (least changes)

Modern compilers give helpful messages (Clang, rustc)`,
        example: `<p>rustc: "expected \`;\`, found \`}\`" with suggestion</p>`,
      },
    },

    "🚀 Advanced & Modern Compilers": {
      "Just-In-Time (JIT) & AOT": {
        title: "Just-In-Time (JIT) & AOT",
        content: `
- AOT (Ahead-of-Time): compile before execution (GCC, Clang)
- JIT: compile at runtime (JVM HotSpot, V8, .NET RyuJIT)
- Hybrid: AOT + JIT (GraalVM, Java 17+)

2025: WebAssembly JIT/AOT in browsers, Rust → WASM`,
      },
      "LLVM & Modern Tooling": {
        title: "LLVM & Modern Tooling",
        content: `
LLVM: modular compiler infrastructure
- Clang (C/C++/Obj-C frontend)
- Rustc, Swift, Julia use LLVM backend
- WebAssembly backend
- MLIR (multi-level IR) for future optimizations

Tools: Flex/Bison (classic), ANTLR, Tree-sitter, LLVM toolchain`,
      },
    },

    "🌍 Real-World Compilers": {
      "Popular Compilers 2025": {
        title: "Popular Compilers 2025",
        content: `
- GCC / Clang (C/C++)
- javac + HotSpot JIT (Java)
- rustc (Rust → LLVM)
- V8 (JavaScript → machine code)
- Go compiler (fast single-binary)
- Python: CPython (interpreter + bytecode), PyPy (JIT)

Trend: WebAssembly everywhere, security-focused compilation (CFI, stack canaries)`,
        example: `<p>Chrome V8 compiles JS → optimized machine code on-the-fly</p>`,
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