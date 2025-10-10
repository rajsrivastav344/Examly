// CppProgramming.jsx
import React, { useState } from "react";
import "./Webdev.css"; // reuse the same styling

export default function CppProgramming() {
  const [selected, setSelected] = useState("C++ Introduction");
  const [sidebarWidth, setSidebarWidth] = useState(250);
  const [isDragging, setIsDragging] = useState(false);
  const [searchTerm, setSearchTerm] = useState("");

  const sections = {
    "🖥️ C++ Programming": {
      "C++ Introduction": {
        title: "C++ Introduction",
        content: `
C++ is an extension of C, developed by Bjarne Stroustrup in 1983.
It supports object-oriented programming, generic programming, and low-level memory manipulation.
Key Features:
- Object-Oriented
- Faster execution
- Standard Template Library (STL)
        `,
        example: `#include <iostream>
using namespace std;

int main() {
    cout << "Hello, C++!" << endl;
    return 0;
}`,
      },
      "C++ Data Types": {
        title: "C++ Data Types",
        content: `
C++ data types include:
- Basic: int, float, double, char, bool
- Derived: array, pointer, reference
- User-defined: class, struct, enum
- Void type
        `,
        example: `int age = 25;
float salary = 45000.50;
char grade = 'A';
bool isActive = true;`,
      },
      "C++ Operators": {
        title: "C++ Operators",
        content: `
Operators in C++:
- Arithmetic: +, -, *, /, %
- Relational: ==, !=, >, <, >=, <=
- Logical: &&, ||, !
- Assignment: =, +=, -=, *=, /=
- Bitwise: &, |, ^, ~, <<, >>
- Increment/Decrement: ++, --
        `,
        example: `int a = 5, b = 3;
int sum = a + b;
if(a > b && b > 0) {
    cout << "a is greater than b" << endl;
}`,
      },
      "C++ Functions": {
        title: "C++ Functions",
        content: `
Functions are reusable blocks of code. 
Structure:
- Declaration: function prototype
- Definition: function body
- Call: invoking the function
Supports default arguments, function overloading, recursion.
        `,
        example: `#include <iostream>
using namespace std;

int add(int a, int b); // Declaration

int main() {
    int result = add(5,3); // Call
    cout << "Sum = " << result;
    return 0;
}

int add(int a, int b) { // Definition
    return a + b;
}`,
      },
      "C++ Loops": {
        title: "C++ Loops",
        content: `
Loops in C++:
- for loop
- while loop
- do-while loop
Used for repeating tasks
        `,
        example: `for(int i=0;i<5;i++) {
    cout << i << endl;
}

int j = 0;
while(j < 5) {
    cout << j << endl;
    j++;
}`,
      },
      "C++ Arrays & Vectors": {
        title: "C++ Arrays & Vectors",
        content: `
Arrays store multiple elements of the same type.
Vectors are dynamic arrays provided by STL.
        `,
        example: `int arr[5] = {1,2,3,4,5};
cout << arr[2]; // prints 3

#include <vector>
vector<int> v = {1,2,3};
v.push_back(4);`,
      },
      "C++ Pointers & References": {
        title: "C++ Pointers & References",
        content: `
Pointers store memory addresses.
References are aliases for variables.
        `,
        example: `int x = 10;
int *ptr = &x;
int &ref = x;
cout << *ptr << ", " << ref; // 10, 10`,
      },
      "C++ Classes & OOP": {
        title: "C++ Classes & OOP",
        content: `
C++ supports Object-Oriented Programming:
- Encapsulation: class
- Inheritance
- Polymorphism
- Abstraction
        `,
        example: `#include <iostream>
using namespace std;

class Person {
public:
    string name;
    void greet() { cout << "Hello " << name; }
};

int main() {
    Person p;
    p.name = "Raj";
    p.greet();
    return 0;
}`,
      },
      "C++ STL": {
        title: "C++ STL",
        content: `
Standard Template Library (STL) provides ready-to-use data structures:
- Vectors, Lists, Sets, Maps
- Algorithms: sort, find, etc.
- Iterators for traversing
        `,
        example: `#include <iostream>
#include <vector>
#include <algorithm>
using namespace std;

int main() {
    vector<int> v = {3,1,4,2};
    sort(v.begin(), v.end());
    for(int n : v) cout << n << " ";
}`,
      },
      "C++ Real-World Example": {
        title: "Real-World Example",
        content: `
Example: Employee Management System
- Uses classes, vectors, and functions
- Add, display, and calculate salaries
- Demonstrates OOP and STL
        `,
        example: `#include <iostream>
#include <vector>
using namespace std;

class Employee {
public:
    string name;
    double salary;
    void display() { cout << name << ": $" << salary << endl; }
};

int main() {
    vector<Employee> emps = {{"Raj",5000},{"Anita",6000}};
    for(auto e : emps) e.display();
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
        <h1>🖥️ C++ Programming Dashboard</h1>
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
            <pre className="code-block cpp">
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
