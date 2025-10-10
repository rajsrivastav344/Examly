// DSA.jsx
import React, { useState } from "react";
import "./Webdev.css"; // reuse same styling

export default function DSA() {
  const [selected, setSelected] = useState("Introduction to DSA");
  const [sidebarWidth, setSidebarWidth] = useState(250);
  const [isDragging, setIsDragging] = useState(false);
  const [searchTerm, setSearchTerm] = useState("");

  const sections = {
    "📚 Data Structures & Algorithms": {
      // Basics
      "Introduction to DSA": {
        title: "Introduction to DSA",
        content:
          "Data Structures and Algorithms (DSA) are used to store, organize, and process data efficiently. They form the foundation for problem-solving in programming.",
        example: "<p>Example: Using arrays, stacks, queues to organize data.</p>",
        image:
          "https://upload.wikimedia.org/wikipedia/commons/5/5a/Data_structure.svg",
      },
      "Complexity Analysis": {
        title: "Complexity Analysis",
        content:
          "Analyze algorithms based on Time and Space complexity using Big O, Big Theta, and Big Omega notations.",
        example: "<p>Example: Linear Search - O(n), Binary Search - O(log n)</p>",
        image:
          "https://upload.wikimedia.org/wikipedia/commons/2/22/Complexity_classes.svg",
      },
      "Arrays": {
        title: "Arrays",
        content:
          "Arrays are a collection of elements stored at contiguous memory locations.",
        example:
          "<pre><code>let arr = [1, 2, 3, 4];\nconsole.log(arr[0]); // 1</code></pre>",
        image:
          "https://upload.wikimedia.org/wikipedia/commons/0/0d/Array_Representation.svg",
      },
      "Linked Lists": {
        title: "Linked Lists",
        content:
          "Linked List is a linear data structure where elements are stored in nodes connected using pointers.",
        example:
          "<pre><code>class Node {\n constructor(data){ this.data = data; this.next = null; }\n}</code></pre>",
        image:
          "https://upload.wikimedia.org/wikipedia/commons/6/6d/Singly-linked-list.svg",
      },
      "Stacks": {
        title: "Stacks",
        content:
          "Stack is a linear data structure that follows LIFO (Last In First Out) principle.",
        example:
          "<pre><code>let stack = [];\nstack.push(1);\nstack.pop();</code></pre>",
        image:
          "https://upload.wikimedia.org/wikipedia/commons/6/6a/Stack_Example.svg",
      },
      "Queues": {
        title: "Queues",
        content:
          "Queue is a linear data structure that follows FIFO (First In First Out) principle.",
        example:
          "<pre><code>let queue = [];\nqueue.push(1);\nqueue.shift();</code></pre>",
        image:
          "https://upload.wikimedia.org/wikipedia/commons/1/11/Queue.svg",
      },
      // Searching & Sorting
      "Linear Search": {
        title: "Linear Search",
        content: "Sequentially checks each element until a match is found.",
        example:
          "<pre><code>function linearSearch(arr, x){\n for(let i=0;i<arr.length;i++){\n  if(arr[i]===x) return i;\n }\n return -1;\n}</code></pre>",
        image:
          "https://upload.wikimedia.org/wikipedia/commons/c/c2/Linear-search-animation.gif",
      },
      "Binary Search": {
        title: "Binary Search",
        content:
          "Search in a sorted array by repeatedly dividing the search interval in half.",
        example:
          "<pre><code>function binarySearch(arr,x){\n let low=0, high=arr.length-1;\n while(low<=high){\n  let mid=Math.floor((low+high)/2);\n  if(arr[mid]===x) return mid;\n  else if(arr[mid]<x) low=mid+1;\n  else high=mid-1;\n }\n return -1;\n}</code></pre>",
        image:
          "https://upload.wikimedia.org/wikipedia/commons/d/d5/Binary_search_tree.svg",
      },
      "Bubble Sort": {
        title: "Bubble Sort",
        content:
          "Repeatedly swap adjacent elements if they are in the wrong order.",
        example:
          "<pre><code>function bubbleSort(arr){\n let n=arr.length;\n for(let i=0;i<n-1;i++){\n  for(let j=0;j<n-i-1;j++){\n   if(arr[j]>arr[j+1]) [arr[j],arr[j+1]]=[arr[j+1],arr[j]];\n  }\n }\n return arr;\n}</code></pre>",
        image:
          "https://upload.wikimedia.org/wikipedia/commons/c/c8/Bubble-sort-example-300px.gif",
      },
      "Dynamic Programming": {
        title: "Dynamic Programming",
        content:
          "Optimization technique used to solve problems by breaking them down into subproblems and storing results.",
        example:
          "<pre><code>function fib(n,memo={}){\n if(n<=1) return n;\n if(n in memo) return memo[n];\n memo[n]=fib(n-1,memo)+fib(n-2,memo);\n return memo[n];\n}</code></pre>",
        image:
          "https://upload.wikimedia.org/wikipedia/commons/5/5e/Fibonacci_memoization.svg",
      },
      // Graphs
      "Graphs": {
        title: "Graphs",
        content:
          "A graph is a collection of nodes (vertices) connected by edges. Can be directed or undirected.",
        example:
          "<pre><code>let graph = { A:['B','C'], B:['A','D'], C:['A'], D:['B'] };</code></pre>",
        image:
          "https://upload.wikimedia.org/wikipedia/commons/5/5b/Simple_graph.svg",
      },
      "BFS & DFS": {
        title: "BFS & DFS",
        content:
          "BFS explores neighbors level by level, DFS explores by going deep first.",
        example:
          "<pre><code>// BFS\nfunction bfs(graph,start){\n let queue=[start],visited=new Set();\n visited.add(start);\n while(queue.length){\n  let node=queue.shift();\n  console.log(node);\n  for(let neighbor of graph[node]){\n   if(!visited.has(neighbor)){\n    visited.add(neighbor);\n    queue.push(neighbor);\n   }\n  }\n }\n}</code></pre>",
        image:
          "https://upload.wikimedia.org/wikipedia/commons/4/46/Breadth-first-tree.svg",
      },
    },
  };

  // Sidebar resize handlers
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
        <h1>📚 Data Structures & Algorithms Dashboard</h1>
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
