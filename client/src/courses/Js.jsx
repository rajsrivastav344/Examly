// JavaScript.jsx
import React, { useState } from "react";import "./All.css";
export default function JavaScript() {
  const [selected, setSelected] = useState("JS Introduction");
  const [sidebarWidth, setSidebarWidth] = useState(250);
  const [isDragging, setIsDragging] = useState(false);
  const [searchTerm, setSearchTerm] = useState("");

  const sections = {
    "🟢 JavaScript Basics": {
      "JS Introduction": {
        title: "JS Introduction",
        content: `
JavaScript is a versatile, high-level programming language primarily used for web development.
It enables interactive behavior, dynamic content, and asynchronous requests on websites.
Key features:
- Client-side and server-side (Node.js)
- Event-driven and functional programming
- DOM manipulation and AJAX support
        `,
        example: `
console.log("Hello, JavaScript!");
alert("Welcome to JS Dashboard!");
        `,
      },
      "JS Data Types": {
        title: "JS Data Types",
        content: `
JavaScript has two main categories of data types:
1. Primitive Types: string, number, boolean, null, undefined, symbol, bigint
2. Non-Primitive Types: Object (arrays, functions, objects)
        `,
        example: `
let name = "Raj"; // string
let age = 25; // number
let isActive = true; // boolean
let items = [1,2,3]; // array
let user = {name:"Raj", age:25}; // object
        `,
      },
      "JS Operators": {
        title: "JS Operators",
        content: `
JS operators include:
- Arithmetic: +, -, *, /, %
- Assignment: =, +=, -=
- Comparison: ==, ===, !=, !==, >, <
- Logical: &&, ||, !
- Ternary: condition ? true : false
        `,
        example: `
let a = 10, b = 5;
console.log(a + b); // 15
console.log(a > b ? "A>B" : "B>A"); // "A>B"
        `,
      },
      "JS Functions": {
        title: "JS Functions",
        content: `
Functions are reusable blocks of code. Types:
- Function Declaration
- Function Expression
- Arrow Functions
- Anonymous Functions
        `,
        example: `
// Function Declaration
function greet(name) {
    return "Hello " + name;
}

// Function Expression
const add = function(a,b) {
    return a+b;
}

// Arrow Function
const square = x => x*x;

console.log(greet("Raj"));
console.log(add(5,3));
console.log(square(4));
        `,
      },
      "JS Events": {
        title: "JS Events",
        content: `
Events are actions performed by users or the browser.
Types:
- Mouse Events: click, dblclick, mouseover, mouseout
- Keyboard Events: keydown, keyup
- Form Events: submit, change, input
- Window Events: load, resize, scroll
        `,
        example: `
// HTML: <button id="btn">Click Me</button>
document.getElementById("btn").addEventListener("click", function() {
    alert("Button clicked!");
});

// Keyboard example
document.addEventListener("keydown", function(event) {
    console.log("Key pressed: " + event.key);
});
        `,
      },
      "JS DOM Manipulation": {
        title: "JS DOM Manipulation",
        content: `
The DOM represents the HTML structure of a page. JS can manipulate elements dynamically.
- getElementById / querySelector
- createElement, appendChild
- innerHTML, textContent
- classList.add/remove/toggle
        `,
        example: `
// HTML: <div id="container"></div>
const div = document.createElement("div");
div.textContent = "Hello from JS!";
div.style.color = "blue";
document.getElementById("container").appendChild(div);
        `,
      },
      "JS Loops & Conditionals": {
        title: "JS Loops & Conditionals",
        content: `
Loops: for, while, do-while, for...in, for...of
Conditionals: if-else, switch
        `,
        example: `
for(let i=0;i<5;i++) {
    console.log("Count: " + i);
}

let color = "red";
switch(color) {
    case "red": console.log("Stop"); break;
    case "green": console.log("Go"); break;
    default: console.log("Unknown");
}
        `,
      },
      "JS Arrays & Objects": {
        title: "JS Arrays & Objects",
        content: `
Arrays store ordered data, Objects store key-value pairs.
Array methods: push, pop, shift, unshift, map, filter, reduce
Object methods: Object.keys(), Object.values(), Object.entries()
        `,
        example: `
let arr = [1,2,3];
arr.push(4); // [1,2,3,4]

let user = {name:"Raj", age:25};
console.log(Object.keys(user)); // ["name","age"]
        `,
      },
      "JS Async & Fetch": {
        title: "JS Async & Fetch",
        content: `
JavaScript supports asynchronous operations using:
- Callbacks
- Promises
- async/await
- fetch API for server requests
        `,
        example: `
async function getData() {
    try {
        let response = await fetch("https://jsonplaceholder.typicode.com/posts/1");
        let data = await response.json();
        console.log(data);
    } catch(err) {
        console.error(err);
    }
}
getData();
        `,
      },
      "JS Real-World Example": {
        title: "Real-World Example",
        content: `
Example: Todo List App
- HTML buttons and input fields
- JS to add, remove, and mark tasks as complete
- DOM events like click, input
        `,
        example: `
// HTML: <input id="task"><button id="addBtn">Add</button><ul id="list"></ul>
document.getElementById("addBtn").addEventListener("click", function() {
    const task = document.getElementById("task").value;
    if(task) {
        const li = document.createElement("li");
        li.textContent = task;
        document.getElementById("list").appendChild(li);
        document.getElementById("task").value = "";
    }
});
        `,
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
        <h1>🟢 JavaScript Dashboard</h1>
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
            <pre className="code-block js">
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
