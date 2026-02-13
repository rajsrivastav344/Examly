// DSA.jsx
import React, { useState } from "react";
import "./All.css"; // assuming same styling as Cloud.jsx

export default function DSA() {
  const [selected, setSelected] = useState("Introduction to DSA");
  const [sidebarWidth, setSidebarWidth] = useState(250);
  const [isDragging, setIsDragging] = useState(false);
  const [searchTerm, setSearchTerm] = useState("");

  const sections = {
    "📚 DSA Fundamentals": {
      "Introduction to DSA": {
        title: "Introduction to DSA",
        content: `
Data Structures and Algorithms (DSA) form the backbone of efficient programming.
- Data Structures → ways to organize and store data
- Algorithms → step-by-step procedures to solve problems using that data

Why learn DSA?
- Write faster, memory-efficient code
- Crack technical interviews (FAANG, startups, product companies)
- Solve real-world problems scalably
- Understand how libraries/frameworks work under the hood`,
        example: `<ul>
  <li>Google Search → tries + graphs + ranking algorithms</li>
  <li>Navigation apps → shortest path algorithms (Dijkstra)</li>
  <li>Social media feed → priority queues + sorting</li>
</ul>`,
      },
      "Complexity Analysis": {
        title: "Complexity Analysis",
        content: `
Measure efficiency using asymptotic notations:
- Big O (worst case) — upper bound
- Big Ω (best case) — lower bound
- Big Θ (tight bound) — average/growth rate

Common complexities:
- O(1)     constant
- O(log n) logarithmic (binary search, trees)
- O(n)     linear
- O(n log n) linearithmic (efficient sorts)
- O(n²)    quadratic (nested loops)
- O(2^n)   exponential (subset problems)

Space complexity also matters (extra memory used).`,
        example: `<pre><code>// O(n) time, O(1) space
function sum(arr) {
  let total = 0;
  for (let num of arr) total += num;
  return total;
}</code></pre>`,
        graphic: `<svg width="400" height="180" viewBox="0 0 400 180" xmlns="http://www.w3.org/2000/svg">
  <text x="200" y="20" text-anchor="middle">Big-O Common Curves</text>
  <line x1="50" y1="150" x2="350" y2="150" stroke="#000"/>
  <line x1="50" y1="150" x2="50" y2="30" stroke="#000"/>
  <text x="40" y="155">n</text><text x="45" y="80">Time</text>
  <path d="M50 140 L100 130 L150 110 L200 80 L250 50 L300 30" stroke="red" fill="none" stroke-width="3"/>
  <text x="320" y="40" fill="red">O(n²)</text>
  <path d="M50 140 L120 120 L180 100 L240 85 L300 75" stroke="blue" fill="none" stroke-width="3"/>
  <text x="320" y="70" fill="blue">O(n log n)</text>
  <path d="M50 140 L200 70 L300 60" stroke="green" fill="none" stroke-width="3"/>
  <text x="320" y="100" fill="green">O(n)</text>
</svg>`,
      },
      "Recursion Basics": {
        title: "Recursion Basics",
        content: `
Function calls itself to solve smaller instances of same problem.
- Base case (stops recursion)
- Recursive case (calls itself)

Pros: Elegant for trees/graphs/DP
Cons: Stack overflow risk, higher space usage`,
        example: `<pre><code>function factorial(n) {
  if (n <= 1) return 1;          // base
  return n * factorial(n - 1);   // recursive
}</code></pre>`,
      },
    },

    "🗃️ Linear Data Structures": {
      "Arrays & Strings": {
        title: "Arrays & Strings",
        content: `
Fixed-size (static) or dynamic (JS Array).
- O(1) access by index
- O(n) insert/delete (shift elements)

Strings are immutable in many languages → treat as char arrays.

Common problems:
- Two pointers, sliding window
- Kadane’s algorithm (max subarray)
- Rotate array, merge intervals`,
        example: `<pre><code>// Two Pointers - reverse string
function reverse(s) {
  let arr = s.split('');
  let left = 0, right = arr.length - 1;
  while (left < right) {
    [arr[left++], arr[right--]] = [arr[right], arr[left]];
  }
  return arr.join('');
}</code></pre>
Use case: Text editors (undo/redo → stack + arrays), image pixels (2D arrays)`,
      },
      "Linked Lists": {
        title: "Linked Lists",
        content: `
Nodes with data + pointer(s).
- Singly, Doubly, Circular
- O(1) insert/delete at known position
- O(n) access/search

Variants: Skip lists, self-adjusting lists`,
        example: `<pre><code>class Node {
  constructor(val) {
    this.val = val;
    this.next = null;
  }
}

class LinkedList {
  constructor() { this.head = null; }
  // ... add, remove, reverse methods
}</code></pre>`,
        useCase: `Browser history (back/forward → doubly linked), music playlist (next/prev song), dynamic memory allocation`,
        graphic: `<svg width="380" height="80" viewBox="0 0 380 80">
  <rect x="20" y="30" width="60" height="30" fill="#e3f2fd" stroke="#1976d2"/>
  <text x="50" y="50" text-anchor="middle">10</text>
  <line x1="80" y1="45" x2="110" y2="45" stroke="#1976d2" marker-end="url(#arr)"/>
  <rect x="110" y="30" width="60" height="30" fill="#e3f2fd" stroke="#1976d2"/>
  <text x="140" y="50" text-anchor="middle">20</text>
  <line x1="170" y1="45" x2="200" y2="45" stroke="#1976d2" marker-end="url(#arr)"/>
  <rect x="200" y="30" width="60" height="30" fill="#e3f2fd" stroke="#1976d2"/>
  <text x="230" y="50" text-anchor="middle">30</text>
  <line x1="260" y1="45" x2="290" y2="45" stroke="#1976d2" marker-end="url(#arr)"/>
  <text x="320" y="50">null</text>
  <defs><marker id="arr" markerWidth="10" markerHeight="10" refX="8" refY="3" orient="auto"><path d="M0,0 L0,6 L9,3 z" fill="#1976d2"/></marker></defs>
</svg>`,
      },
      "Stacks": {
        title: "Stacks",
        content: `
LIFO structure.
Operations: push, pop, peek, isEmpty
Implement using array or linked list.

Applications:
- Function call stack
- Undo/redo
- Expression evaluation (postfix)
- Backtracking`,
        example: `<pre><code>class Stack {
  constructor() { this.items = []; }
  push(val) { this.items.push(val); }
  pop() { return this.items.pop(); }
  peek() { return this.items[this.items.length-1]; }
}</code></pre>`,
        useCase: `Browser back button, text editor undo, syntax parsing (parentheses matching), DFS traversal`,
      },
      "Queues": {
        title: "Queues",
        content: `
FIFO structure.
Operations: enqueue, dequeue, front, isEmpty

Variants: Circular Queue, Priority Queue, Deque (double-ended)

Applications:
- Task scheduling
- BFS traversal
- Printer job queue
- Buffer in streaming`,
        example: `<pre><code>class Queue {
  constructor() { this.items = []; }
  enqueue(val) { this.items.push(val); }
  dequeue() { return this.items.shift(); }
}</code></pre>`,
        useCase: `CPU scheduling, WhatsApp message queue, ticket booking systems`,
      },
    },

    "🌳 Non-Linear Data Structures": {
      "Binary Trees & Binary Search Trees": {
        title: "Binary Trees & BST",
        content: `
Tree: hierarchical structure with root and nodes.
Binary Tree: ≤2 children per node.
BST: left < root < right → enables O(log n) search/insert/delete.

Traversals:
- Inorder (sorted order for BST)
- Preorder, Postorder
- Level order (BFS)`,
        example: `<pre><code>// Inorder traversal
function inorder(node) {
  if (!node) return;
  inorder(node.left);
  console.log(node.val);
  inorder(node.right);
}</code></pre>`,
        useCase: `File systems (directories), DOM tree, expression trees, autocomplete suggestions (BST variants)`,
        graphic: `<svg width="300" height="200" viewBox="0 0 300 200">
  <circle cx="150" cy="40" r="20" fill="#fff" stroke="#000"/>
  <text x="150" y="45" text-anchor="middle">8</text>
  <line x1="150" y1="60" x2="80" y2="90" stroke="#000"/>
  <circle cx="80" cy="90" r="20" fill="#fff" stroke="#000"/>
  <text x="80" y="95" text-anchor="middle">3</text>
  <line x1="150" y1="60" x2="220" y2="90" stroke="#000"/>
  <circle cx="220" cy="90" r="20" fill="#fff" stroke="#000"/>
  <text x="220" y="95" text-anchor="middle">10</text>
  <line x1="80" y1="110" x2="40" y2="150" stroke="#000"/>
  <circle cx="40" cy="150" r="15" fill="#fff" stroke="#000"/>
  <text x="40" y="155" text-anchor="middle">1</text>
</svg>`,
      },
      "Heaps (Priority Queues)": {
        title: "Heaps (Priority Queues)",
        content: `
Complete binary tree satisfying heap property.
- Min-Heap: parent ≤ children
- Max-Heap: parent ≥ children

Operations: insert O(log n), extract-min/max O(log n)

Used in:
- Dijkstra’s shortest path
- Top K problems
- Median in stream`,
        example: `<pre><code>// JS doesn't have built-in heap → implement or use priority-queue lib
// Min-Heap insert pseudocode
function insert(heap, val) {
  heap.push(val);
  bubbleUp(heap, heap.length - 1);
}</code></pre>`,
        useCase: `Task scheduler (highest priority first), hospital patient triage, live leaderboard (top 10 scorers)`,
      },
      "Graphs": {
        title: "Graphs",
        content: `
Vertices + Edges (directed/undirected, weighted/unweighted).
Representations: Adjacency list, matrix.

Algorithms:
- BFS (shortest path unweighted)
- DFS (cycle detection, topological sort)
- Dijkstra, Bellman-Ford (weighted shortest path)
- Kruskal, Prim (MST)`,
        example: `<pre><code>const graph = {
  A: ['B', 'C'],
  B: ['A', 'D'],
  C: ['A'],
  D: ['B']
};

// BFS
function bfs(start) {
  let queue = [start], visited = new Set([start]);
  while (queue.length) {
    let node = queue.shift();
    console.log(node);
    for (let nei of graph[node] || []) {
      if (!visited.has(nei)) {
        visited.add(nei);
        queue.push(nei);
      }
    }
  }
}</code></pre>`,
        useCase: `Social networks (friends of friends), Google Maps (routes), recommendation systems, dependency resolution (npm install)`,
        graphic: `<svg width="300" height="180">
  <circle cx="50" cy="50" r="20" fill="#e3f2fd" stroke="#1976d2"/>
  <text x="50" y="55" text-anchor="middle">A</text>
  <circle cx="150" cy="30" r="20" fill="#e3f2fd" stroke="#1976d2"/>
  <text x="150" y="35" text-anchor="middle">B</text>
  <circle cx="150" cy="100" r="20" fill="#e3f2fd" stroke="#1976d2"/>
  <text x="150" y="105" text-anchor="middle">C</text>
  <circle cx="250" cy="60" r="20" fill="#e3f2fd" stroke="#1976d2"/>
  <text x="250" y="65" text-anchor="middle">D</text>
  <line x1="70" y1="50" x2="130" y2="30" stroke="#1976d2"/>
  <line x1="70" y1="50" x2="130" y2="100" stroke="#1976d2"/>
  <line x1="170" y1="30" x2="230" y2="60" stroke="#1976d2"/>
  <line x1="170" y1="100" x2="230" y2="60" stroke="#1976d2"/>
</svg>`,
      },
      "Tries (Prefix Trees)": {
        title: "Tries (Prefix Trees)",
        content: `
Tree for efficient string storage/retrieval.
- O(L) insert/search where L = word length
- Great for autocomplete, spell check, IP routing

Each node has children map (usually 26 for lowercase).`,
        example: `<pre><code>class TrieNode {
  constructor() {
    this.children = {};
    this.isEnd = false;
  }
}

class Trie {
  constructor() { this.root = new TrieNode(); }
  insert(word) { /* ... */ }
  search(word) { /* ... */ }
}</code></pre>`,
        useCase: `Google search autocomplete, phone contact search, dictionary apps`,
      },
    },

    "⚡ Searching & Sorting": {
      "Binary Search & Variants": {
        title: "Binary Search & Variants",
        content: `
Requires sorted data → O(log n)
- Find element
- Find first/last occurrence
- Search in rotated sorted array
- Find min in rotated array`,
        example: `<pre><code>function binarySearch(arr, target) {
  let l = 0, r = arr.length - 1;
  while (l <= r) {
    let m = Math.floor((l + r) / 2);
    if (arr[m] === target) return m;
    if (arr[m] < target) l = m + 1;
    else r = m - 1;
  }
  return -1;
}</code></pre>`,
        useCase: `Dictionary lookup, database indexing, finding boundary in sorted logs`,
      },
      "Sorting Algorithms": {
        title: "Sorting Algorithms",
        content: `
- Bubble, Selection, Insertion → O(n²) educational
- Merge Sort → O(n log n) stable, divide & conquer
- Quick Sort → O(n log n) avg, in-place
- Heap Sort → O(n log n) using heap
- Counting, Radix, Bucket → non-comparison sorts for special cases`,
        example: `<pre><code>// Quick Sort
function quickSort(arr) {
  if (arr.length <= 1) return arr;
  let pivot = arr[arr.length - 1];
  let left = [], right = [];
  for (let i = 0; i < arr.length - 1; i++) {
    if (arr[i] < pivot) left.push(arr[i]);
    else right.push(arr[i]);
  }
  return [...quickSort(left), pivot, ...quickSort(right)];
}</code></pre>`,
        useCase: `Leaderboard ranking, file sorting, data visualization`,
      },
    },

    "🔄 Algorithmic Paradigms": {
      "Two Pointers & Sliding Window": {
        title: "Two Pointers & Sliding Window",
        content: `
Two Pointers: solve problems with sorted data or monotonic condition.
Sliding Window: maintain dynamic window size for subarrays/substrings.

Patterns:
- Fast & slow pointers (cycle detection)
- Fixed size window
- Variable size (longest substring without repeat)`,
        example: `<pre><code>// Longest substring without repeating chars
function lengthOfLongestSubstring(s) {
  let map = new Map(), max = 0, left = 0;
  for (let right = 0; right < s.length; right++) {
    if (map.has(s[right])) left = Math.max(left, map.get(s[right]) + 1);
    map.set(s[right], right);
    max = Math.max(max, right - left + 1);
  }
  return max;
}</code></pre>`,
        useCase: `Video streaming buffer, network packet analysis, DNA sequence analysis`,
      },
      "Greedy Algorithms": {
        title: "Greedy Algorithms",
        content: `
Make locally optimal choice hoping global optimum.
Works when problem has greedy choice property + optimal substructure.

Examples:
- Activity selection
- Fractional knapsack
- Huffman coding
- Interval scheduling`,
        example: `<pre><code>// Jump Game - can we reach last index?
function canJump(nums) {
  let maxReach = 0;
  for (let i = 0; i < nums.length; i++) {
    if (i > maxReach) return false;
    maxReach = Math.max(maxReach, i + nums[i]);
    if (maxReach >= nums.length - 1) return true;
  }
  return true;
}</code></pre>`,
        useCase: `Task scheduling, coin change (greedy works for canonical systems), Dijkstra without negative weights`,
      },
      "Dynamic Programming": {
        title: "Dynamic Programming",
        content: `
Solve complex problems by breaking into overlapping subproblems + optimal substructure.
Techniques:
- Memoization (top-down)
- Tabulation (bottom-up)

Classic problems:
- Fibonacci, knapsack
- Longest Common Subsequence
- Matrix Chain Multiplication
- Edit Distance
- Partition problems`,
        example: `<pre><code>// 0/1 Knapsack
function knapsack(W, wt, val, n) {
  let dp = Array(n+1).fill().map(()=>Array(W+1).fill(0));
  for (let i = 1; i <= n; i++) {
    for (let w = 0; w <= W; w++) {
      if (wt[i-1] <= w) {
        dp[i][w] = Math.max(val[i-1] + dp[i-1][w-wt[i-1]], dp[i-1][w]);
      } else {
        dp[i][w] = dp[i-1][w];
      }
    }
  }
  return dp[n][W];
}</code></pre>`,
        useCase: `Resource allocation, shortest path with constraints, string matching (DNA), stock trading problems`,
      },
      "Backtracking": {
        title: "Backtracking",
        content: `
Explore all possible solutions incrementally, abandon partial candidates ("backtrack").
Used for constraint satisfaction problems.

Examples:
- N-Queens
- Sudoku solver
- Subset sum
- Permutations & combinations`,
        example: `<pre><code>// Generate all permutations
function permute(nums) {
  let result = [];
  function backtrack(curr, remaining) {
    if (remaining.length === 0) {
      result.push([...curr]);
      return;
    }
    for (let i = 0; i < remaining.length; i++) {
      curr.push(remaining[i]);
      let newRem = remaining.slice(0,i).concat(remaining.slice(i+1));
      backtrack(curr, newRem);
      curr.pop();
    }
  }
  backtrack([], nums);
  return result;
}</code></pre>`,
        useCase: `Puzzle games (Sudoku), path finding with constraints, compiler design (parsing)`,
      },
    },

    "🛠️ Advanced & Specialized": {
      "Bit Manipulation": {
        title: "Bit Manipulation",
        content: `
Use bitwise operators for fast/low-memory solutions.
Common tricks:
- Check if power of 2: n & (n-1) === 0
- Count set bits: n & (n-1), Brian Kernighan
- Swap without temp: a ^= b; b ^= a; a ^= b;`,
        example: `<pre><code>function isPowerOfTwo(n) {
  return n > 0 && (n & (n - 1)) === 0;
}</code></pre>`,
        useCase: `Graphics programming, encryption, chess engines (board state), compression`,
      },
      "Disjoint Set Union (Union-Find)": {
        title: "Disjoint Set Union (Union-Find)",
        content: `
Track elements partitioned into disjoint sets.
- Find: which set?
- Union: merge sets

With path compression + union by rank → almost O(1)

Applications:
- Kruskal’s MST
- Cycle detection in graph
- Connected components`,
        example: `<pre><code>class UnionFind {
  constructor(size) {
    this.parent = Array.from({length: size}, (_, i) => i);
    this.rank = Array(size).fill(0);
  }
  find(x) {
    if (this.parent[x] !== x) this.parent[x] = this.find(this.parent[x]);
    return this.parent[x];
  }
  union(x, y) {
    let px = this.find(x), py = this.find(y);
    if (px === py) return false;
    if (this.rank[px] < this.rank[py]) [px, py] = [py, px];
    this.parent[py] = px;
    if (this.rank[px] === this.rank[py]) this.rank[px]++;
    return true;
  }
}</code></pre>`,
        useCase: `Social network friend circles, network connectivity, image segmentation`,
      },
    },

    "🎯 Real-World Use Cases Summary": {
      "Real-World Use Cases": {
        title: "Real-World Use Cases",
        content: `
- Navigation (Google Maps) → Graphs + Dijkstra/A*
- Search Engines → Tries + Inverted Index (Hash + Arrays)
- Social Media Feed → Priority Queue + Sorting + Graphs
- Recommendation Systems → Graphs + Collaborative Filtering
- Databases → B-Trees / Hash Indexes
- Compilers → Trees (AST), Stacks (parsing)
- Games → Graphs (pathfinding), Trees (decision), Heaps (AI priority)
- Undo/Redo → Stacks
- Caching (LRU) → HashMap + Doubly Linked List
- File Compression → Huffman Trees + Greedy
- DNA Sequencing → Dynamic Programming + Strings`,
        example: `<p>LRU Cache (most common interview + real system design question):</p>
<pre><code>class LRUCache {
  constructor(capacity) {
    this.capacity = capacity;
    this.map = new Map();
  }
  get(key) { /* move to front */ }
  put(key, value) { /* evict least used if full */ }
}</code></pre>`,
      },
    },
  };

  // ────────────────────────────────────────────────
  // Sidebar resize logic (same as before)
  const handleMouseDown = () => setIsDragging(true);
  const handleMouseMove = (e) => {
    if (isDragging) {
      const newWidth = Math.min(Math.max(e.clientX, 180), 400);
      setSidebarWidth(newWidth);
    }
  };
  const handleMouseUp = () => setIsDragging(false);

  // Better lookup for selected content
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