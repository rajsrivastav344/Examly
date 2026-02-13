// CProgramming.jsx - Corrected & Expanded Version (January 2026 ready)
import React, { useState } from "react";
import ReactMarkdown from "react-markdown";
import "./All.css";

export default function CProgramming() {
  const [selected, setSelected] = useState("C Introduction");
  const [sidebarWidth, setSidebarWidth] = useState(280);
  const [isDragging, setIsDragging] = useState(false);
  const [searchTerm, setSearchTerm] = useState("");

  const sections = {
    "🖥️ C Programming Fundamentals": {
      "C Introduction": {
        title: "Introduction to C Programming",
        content: `
**C** is a **high-level, general-purpose, procedural** programming language developed in **1972** by **Dennis Ritchie** at Bell Labs.

It is the mother of many modern languages (C++, Java, Python internals, Rust, Go, etc.) and remains extremely relevant in 2026 for:

- Operating systems (Linux kernel is written in C)
- Embedded systems & microcontrollers (IoT, automotive, robotics)
- Performance-critical software (games, databases, compilers)
- Low-level system programming
- Competitive programming (fast execution, minimal overhead)

**Key Features**:
- Structured programming support
- Direct memory access via **pointers**
- Minimal runtime & small standard library
- Portable across platforms (with care)
- Compiled → very fast native code
- Close to hardware — no garbage collection, no exceptions

**Hello World** (classic first program):

\`\`\`c
#include <stdio.h>

int main(void) {
    printf("Hello, World!\\n");
    return 0;
}
\`\`\`

**Why learn C in 2026?**
- Understand how computers *really* work (memory, pointers, stack, heap)
- Foundation for learning C++, Rust, Zig, systems programming
- Essential for cracking coding interviews at top companies
- Still dominant in firmware, OS, embedded/IoT industries
        `,
        example: `#include <stdio.h>

int main(void) {
    printf("Hello, World!\\n");
    return 0;
}`
      },

      "C Program Life Cycle": {
        title: "C Program Life Cycle (Compilation Process)",
        content: `
1. **Preprocessing** — \`#include\`, \`#define\`, macros expanded  
2. **Compilation** — source (.c) → assembly (.s)  
3. **Assembly** — .s → object code (.o / .obj)  
4. **Linking** — object files + libraries → executable (.exe / a.out)

**Common compilers (2026)**:
- **GCC** / **Clang** — open source, most used
- **MSVC** — Microsoft Visual C++ (Windows)
- **TCC** — Tiny C Compiler (extremely fast for learning/testing)

**Command-line example**:
\`\`\`bash
gcc -Wall -o myprogram main.c utils.c
./myprogram
\`\`\`
        `
      },

      "C Comments & Coding Style": {
        title: "Comments & Good Coding Style in C",
        content: `
**Two comment styles**:
- \`// Single-line comment\` (C99+)
- \`/* Multi-line comment */\`

**Recommended style** (follow for clean, readable code):
- Use meaningful variable/function names
- Indent with **4 spaces** (most common in C)
- Use braces even for single-line blocks
- Comment *why*, not *what*
- Follow **K&R** or **Allman** brace style

**Example**:
\`\`\`c
// Calculate factorial recursively
/* Warning: large n will cause stack overflow */
int factorial(int n) {
    if (n <= 1) {
        return 1;
    }
    return n * factorial(n - 1);
}
\`\`\`
        `
      }
    },

    "📊 Data Types, Variables & Storage": {
      "C Data Types – Complete List": {
        title: "C Data Types – Size & Range",
        content: `
| Type          | Typical Size | Format Specifier | Range / Precision (approx)               |
|---------------|--------------|------------------|------------------------------------------|
| char          | 1 byte       | %c, %d           | -128 to 127 (signed) / 0–255 (unsigned)  |
| short         | 2 bytes      | %hd              | -32,768 to 32,767                        |
| int           | 4 bytes      | %d               | -2³¹ to 2³¹-1                            |
| long          | 4/8 bytes    | %ld              | depends on system                        |
| long long     | 8 bytes      | %lld             | -2⁶³ to 2⁶³-1                            |
| float         | 4 bytes      | %f               | ~6 decimal digits                        |
| double        | 8 bytes      | %lf              | ~15 decimal digits                       |
| long double   | 10/16 bytes  | %Lf              | higher precision                         |
| void          | —            | —                | no value                                 |

**Important** — use \`sizeof(type)\` or \`sizeof variable\` to check actual size on your system.
        `
      },

      "Storage Classes in Depth": {
        title: "Storage Classes – auto, register, static, extern",
        content: `
| Storage Class | Keyword    | Storage Duration | Scope          | Default Value | Typical Use Case                          |
|---------------|------------|------------------|----------------|---------------|--------------------------------------------|
| auto          | auto       | Block            | Block          | Indeterminate | Local variables (rarely written explicitly) |
| register      | register   | Block            | Block          | Indeterminate | Variables used very frequently (compiler hint) |
| static        | static     | Program lifetime | Block / File   | Zero          | Persistent counters, file-private functions/variables |
| extern        | extern     | Program lifetime | Global         | Zero          | Declare global variables/functions defined in other files |

**Common patterns**:
\`\`\`c
static int counter = 0;         // file-private, persists across calls

extern int globalVar;           // declared here, defined in another .c file

void func(void) {
    static int calls = 0;       // persists between function calls
    calls++;
    printf("Called %d times\\n", calls);
}
\`\`\`
        `
      },

      "Type Qualifiers – const, volatile, restrict": {
        title: "Type Qualifiers: const, volatile, restrict",
        content: `
- **const** — object cannot be modified after initialization
- **volatile** — value may change at any time (hardware registers, interrupts, shared memory)
- **restrict** — pointer is the only way to access the object (optimization hint, C99)

**Real-world examples**:
\`\`\`c
const int MAX_USERS = 100;          // constant

volatile uint8_t *port = (uint8_t *)0x4000;  // hardware register

void fast_copy(int *restrict dst, const int *restrict src, int n) {
    // compiler can optimize assuming no aliasing
}
\`\`\`
        `
      }
    },

    // ... (rest of your sections remain the same)

    "🏆 Advanced & Interview Topics": {
      "Linked List Implementation": {
        title: "Singly Linked List in C",
        content: `
\`\`\`c
#include <stdio.h>
#include <stdlib.h>

struct Node {
    int data;
    struct Node *next;
};

struct Node *head = NULL;

void insert(int val) {
    struct Node *newNode = (struct Node *)malloc(sizeof(struct Node));
    if (newNode == NULL) {
        printf("Memory allocation failed!\\n");
        return;
    }
    newNode->data = val;
    newNode->next = head;
    head = newNode;
}

void printList() {
    struct Node *temp = head;
    while (temp != NULL) {
        printf("%d -> ", temp->data);
        temp = temp->next;
    }
    printf("NULL\\n");
}

int main() {
    insert(30);
    insert(20);
    insert(10);
    printList();  // 10 -> 20 -> 30 -> NULL
    return 0;
}
\`\`\`

**Common interview tasks**:
- Reverse linked list
- Detect cycle (Floyd’s tortoise-hare)
- Merge two sorted lists
- Find middle element
        `
      },

      "Common Interview Questions": {
        title: "Top 15 C Interview Questions (2026)",
        content: `
1. Difference between \`malloc\` and \`calloc\`?  
2. What is a **dangling pointer**? How to avoid it?  
3. Explain all **storage classes** with memory diagram.  
4. Why and when to use \`const\` and \`volatile\`?  
5. Difference between **array** and **pointer**?  
6. What causes **segmentation fault**? How to debug?  
7. Write a function to **reverse a string in-place**.  
8. Implement **strcpy** without using library function.  
9. What is **undefined behavior**? Give 5 examples.  
10. Explain **function pointers** with real callback example.  
11. Difference between **struct** and **union**?  
12. How does **pointer arithmetic** work?  
13. Explain **static** vs **global** variables.  
14. What is **stack overflow**? How to prevent in recursion?  
15. Implement **binary search** using recursion.
        `
      }
    }
  };

  // ────────────────────────────────────────────────
  // Resize logic & rendering (unchanged)
  // ────────────────────────────────────────────────

  const handleMouseDown = () => setIsDragging(true);

  const handleMouseMove = (e) => {
    if (isDragging) {
      const newWidth = Math.min(Math.max(e.clientX, 180), 480);
      setSidebarWidth(newWidth);
    }
  };

  const handleMouseUp = () => setIsDragging(false);

  const allTopics = Object.values(sections).reduce(
    (acc, group) => ({ ...acc, ...group }),
    {}
  );

  const selectedContent = allTopics[selected] || null;

  return (
    <div
      className="dashboard"
      onMouseMove={handleMouseMove}
      onMouseUp={handleMouseUp}
      onMouseLeave={handleMouseUp}
    >
      <header className="header">
        <h1>🖥️ C Programming – Complete Mastery Guide</h1>
        <input
          type="text"
          placeholder="Search topics (pointer, struct, malloc, linked list, interview...)"
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

      <div className="resizer" onMouseDown={handleMouseDown} />

      <main className="content">
        {selectedContent ? (
          <>
            <h2>{selectedContent.title}</h2>

            <div className="content-text markdown-body">
              <ReactMarkdown>{selectedContent.content}</ReactMarkdown>
            </div>

            {selectedContent.example && (
              <div className="example-section">
                <h4>Example Code</h4>
                <pre className="code-block c">
                  <code>{selectedContent.example}</code>
                </pre>
              </div>
            )}
          </>
        ) : (
          <p style={{ color: "#888", padding: "2rem", fontStyle: "italic" }}>
            Select a C programming topic from the sidebar
          </p>
        )}
      </main>
    </div>
  );
}