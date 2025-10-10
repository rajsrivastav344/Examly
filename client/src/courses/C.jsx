// CProgramming.jsx
import React, { useState } from "react";
import "./Webdev.css"; // reuse the same styling

export default function CProgramming() {
  const [selected, setSelected] = useState("C Introduction");
  const [sidebarWidth, setSidebarWidth] = useState(250);
  const [isDragging, setIsDragging] = useState(false);
  const [searchTerm, setSearchTerm] = useState("");

  const sections = {
    "🖥️ C Programming": {
      "C Introduction": {
        title: "C Introduction",
        content: `
C is a high-level, general-purpose programming language developed in 1972 by Dennis Ritchie.
It is widely used for system programming, embedded systems, and performance-critical applications.
Key Features:
- Structured programming
- Low-level memory access
- Portable and fast
        `,
        example: `#include <stdio.h>

int main() {
    printf("Hello, C Programming!\\n");
    return 0;
}`,
      },
      "C Data Types": {
        title: "C Data Types",
        content: `
C has several data types:
- Basic: int, float, double, char
- Derived: array, pointer, struct, union
- Enumeration: enum
- Void type
        `,
        example: `int age = 25;
float salary = 45000.50;
char grade = 'A';`,
      },
      "C Operators": {
        title: "C Operators",
        content: `
Operators in C:
- Arithmetic: +, -, *, /, %
- Relational: ==, !=, >, <, >=, <=
- Logical: &&, ||, !
- Assignment: =, +=, -=, *=, /=
- Bitwise: &, |, ^, ~, <<, >>
        `,
        example: `int a = 5, b = 3;
int sum = a + b;
if(a > b && b > 0) {
    printf("a is greater than b\\n");
}`,
      },
      "C Functions": {
        title: "C Functions",
        content: `
Functions are reusable blocks of code. Structure:
- Declaration: function prototype
- Definition: function body
- Call: invoke function
        `,
        example: `#include <stdio.h>

int add(int a, int b); // Declaration

int main() {
    int result = add(5,3); // Call
    printf("Sum = %d", result);
    return 0;
}

int add(int a, int b) { // Definition
    return a + b;
}`,
      },
      "C Loops": {
        title: "C Loops",
        content: `
Loops in C:
- for loop
- while loop
- do-while loop
Used for repetitive tasks
        `,
        example: `for(int i=0;i<5;i++) {
    printf("%d\\n", i);
}

int j = 0;
while(j < 5) {
    printf("%d\\n", j);
    j++;
}`,
      },
      "C Arrays": {
        title: "C Arrays",
        content: `
Arrays store multiple values of the same type:
- One-dimensional arrays
- Multi-dimensional arrays
        `,
        example: `int arr[5] = {1,2,3,4,5};
printf("%d", arr[2]); // prints 3

int matrix[2][2] = {{1,2},{3,4}};`,
      },
      "C Pointers": {
        title: "C Pointers",
        content: `
Pointers store memory addresses.
- Declaration: int *ptr;
- Referencing: &variable
- Dereferencing: *ptr
        `,
        example: `int x = 10;
int *ptr = &x;
printf("Value: %d", *ptr); // prints 10`,
      },
      "C Structs": {
        title: "C Structs",
        content: `
Structs group variables of different types into a single unit:
        `,
        example: `struct Person {
    char name[50];
    int age;
};

struct Person p1;
strcpy(p1.name, "Raj");
p1.age = 25;`,
      },
      "C File Handling": {
        title: "C File Handling",
        content: `
C allows reading/writing files:
- fopen, fclose
- fprintf, fscanf
- fread, fwrite
        `,
        example: `FILE *fp = fopen("data.txt","w");
if(fp != NULL) {
    fprintf(fp, "Hello File!");
    fclose(fp);
}`,
      },
      "C Real-World Example": {
        title: "Real-World Example",
        content: `
Example: Simple Student Management System
- Stores student data using structs
- Performs add, display operations
- Demonstrates arrays, functions, and file handling
        `,
        example: `#include <stdio.h>
#include <string.h>

struct Student {
    char name[50];
    int roll;
};

int main() {
    struct Student s1;
    strcpy(s1.name,"Raj");
    s1.roll = 101;
    printf("Name: %s, Roll: %d\\n", s1.name, s1.roll);
    return 0;
}`,
      },
    },
  };

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
        <h1>🖥️ C Programming Dashboard</h1>
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
            <pre className="code-block">
              <code>{selectedContent.content}</code>
            </pre>
            <pre className="code-block c">
              <code>{selectedContent.example}</code>
            </pre>
          </div>
        ) : (
          <p>{selectedContent}</p>
        )}
      </main>
    </div>
  );
}
