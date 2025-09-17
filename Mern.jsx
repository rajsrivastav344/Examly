import React, { useState } from "react";
import "./Mern.css";

export default function Mern() {
  const [selected, setSelected] = useState("MERN Home");
  const [sidebarWidth, setSidebarWidth] = useState(250);
  const [isDragging, setIsDragging] = useState(false);

  // Sections with detailed 500-word-like content
  const sections = {
    "🟠 Node.js": {
      "MERN Home": "Welcome to the MERN stack tutorial! Here, you'll learn step-by-step how to set up Node.js, Express.js, MongoDB, and React to build full-stack web applications. Each section provides installation instructions, examples, output, and images for clarity. Start by learning Node.js, the runtime environment for server-side JavaScript. Node.js allows developers to use JavaScript outside the browser and is essential for creating the backend of MERN apps. This tutorial is designed for beginners to advanced users who want hands-on examples and comprehensive explanations. Continue through Express.js for backend frameworks, MongoDB for database management, and React for frontend development.",
      
      "Node.js Installation": {
        title: "Node.js Installation",
        content: `Node.js is a JavaScript runtime built on Chrome's V8 engine, enabling developers to run JS code outside a browser environment. It's widely used for building backend applications, server-side scripting, and REST APIs. To install Node.js, first go to the official website (https://nodejs.org). Choose the LTS (Long Term Support) version for stability. Download the installer and run it. On Windows, follow the prompts and select default options. On macOS, use the .pkg file. On Linux, you can use a package manager like 'apt' or 'yum'. After installation, verify by opening a terminal and running 'node -v' to check Node.js version and 'npm -v' for the Node Package Manager (npm). Node.js comes bundled with npm, allowing you to install libraries and frameworks. Understanding Node.js fundamentals, including modules, asynchronous programming, and the event loop, is crucial before starting MERN projects. This installation guide ensures your environment is ready for backend development. Node.js enables you to run scripts, create web servers, and manage project dependencies easily.`,
        example: `console.log("Node.js is running!");`,
        image: "https://nodejs.org/static/images/logos/nodejs-new-pantone-black.svg",
      },
      "Node.js Example": {
        title: "Node.js Example",
        content: `After installing Node.js, you can create a simple server using the built-in 'http' module. This server listens for incoming HTTP requests and responds with plain text. The server code demonstrates how Node.js can serve content without a browser and handle multiple connections asynchronously. Understanding server setup, routing, and response handling is critical before moving on to Express.js. Node.js allows you to manage packages with npm, so you can extend functionality easily. This example highlights the simplicity and power of Node.js as the backend foundation for MERN applications.`,
        example: `
const http = require('http');
const server = http.createServer((req, res) => {
  res.writeHead(200, {'Content-Type': 'text/plain'});
  res.end('Hello from Node.js server!');
});
server.listen(3000, () => console.log('Server running on port 3000'));`,
        image: "https://upload.wikimedia.org/wikipedia/commons/d/d9/Node.js_logo.svg",
      },
    },

    "🔵 Express.js": {
      "Express Installation": {
        title: "Express Installation",
        content: `Express.js is a minimal and flexible Node.js web application framework providing robust features for web and mobile apps. It simplifies routing, middleware integration, and handling HTTP requests. To install Express, first ensure Node.js and npm are installed. Open your terminal and run 'npm init' to create a new project. Then install Express with 'npm install express'. Express enables rapid API development and provides middleware support for logging, authentication, and error handling. Understanding Express is key for building scalable backend services in the MERN stack. The framework supports templating engines, RESTful API creation, and integration with MongoDB for database operations.`,
        example: `
const express = require('express');
const app = express();
app.get('/', (req, res) => res.send('Hello Express!'));
app.listen(3000, () => console.log('Server running'));`,
        image: "https://upload.wikimedia.org/wikipedia/commons/6/64/Expressjs.png",
      },
      "Express Example": {
        title: "Express Example",
        content: `In this example, Express routes handle HTTP requests efficiently. You can define multiple routes, each responding differently. Middleware can be added to intercept requests for logging, authentication, or validation. Express simplifies backend development by abstracting repetitive Node.js boilerplate. The framework integrates seamlessly with MongoDB, allowing data persistence and API creation for your frontend React app. Understanding routing and middleware in Express is essential for developing full-stack MERN applications.`,
        example: `
app.get('/about', (req, res) => res.send('About Page'));`,
        image: "https://expressjs.com/images/express-facebook-share.png",
      },
    },

    "🟢 MongoDB": {
      "MongoDB Installation": {
        title: "MongoDB Installation",
        content: `MongoDB is a NoSQL database storing data in flexible, JSON-like documents. Unlike relational databases, MongoDB allows dynamic schema design, making it ideal for MERN applications. You can install MongoDB locally from the official website or use MongoDB Atlas for cloud deployment. For local setup, download the installer and follow instructions for your operating system. Use 'mongo --version' to confirm installation. Once installed, start the MongoDB server using 'mongod'. MongoDB databases consist of collections, which hold documents similar to JSON objects. CRUD operations can be performed directly in the Mongo shell or programmatically through Mongoose, a Node.js ODM. MongoDB Atlas offers free-tier cloud hosting, which is convenient for development and deployment.`,
        example: `
use mydatabase
db.createCollection("users")`,
        image: "https://webassets.mongodb.com/_com_assets/cms/mongodb-logo-rgb-j6w271g1xn.jpg",
      },
      "MongoDB Example": {
        title: "MongoDB Example",
        content: `MongoDB collections store multiple documents with dynamic schemas. You can insert, query, update, and delete documents easily. Connecting Node.js to MongoDB using Mongoose simplifies these operations and ensures data consistency. This example demonstrates how to insert a user document and query the database. Understanding MongoDB is crucial for persisting backend data for MERN applications. This database flexibility, combined with Express and Node.js, forms the backend of the MERN stack, while React manages the frontend UI.`,
        example: `
db.users.insertOne({name: "Alice", age: 25})
db.users.find()`,
        image: "https://www.mongodb.com/assets/images/global/leaf.png",
      },
    },

    "🟣 React.js": {
      "React Installation": {
        title: "React Installation",
        content: `React.js is a frontend library for building interactive user interfaces with reusable components. To install, use 'npx create-react-app my-app', which sets up the environment automatically. React uses JSX syntax combining HTML with JavaScript. Components have state and props, allowing dynamic rendering and data flow. The virtual DOM optimizes updates and improves performance. React integrates with APIs and backend services, making it ideal for MERN applications. Learning React basics, component lifecycle, and state management is crucial for developing responsive and dynamic frontend applications.`,
        example: `
npx create-react-app my-app
cd my-app
npm start`,
        image: "https://upload.wikimedia.org/wikipedia/commons/a/a7/React-icon.svg",
      },
      "React Example": {
        title: "React Example",
        content: `In this example, a simple React component renders "Hello React". Components can be nested, reused, and manage state independently. React’s virtual DOM ensures only necessary elements are updated, enhancing performance. React Router enables navigation between pages without full reloads. Understanding React is essential for building dynamic user interfaces that consume Express APIs and MongoDB data in MERN applications.`,
        example: `
function App() {
  return <h1>Hello React!</h1>;
}
export default App;`,
        image: "https://reactjs.org/logo-og.png",
      },
    },
  };

  // Drag handlers
  const handleMouseDown = () => setIsDragging(true);
  const handleMouseMove = (e) => {
    if (isDragging) {
      setSidebarWidth(e.clientX < 150 ? 150 : e.clientX > 400 ? 400 : e.clientX);
    }
  };
  const handleMouseUp = () => setIsDragging(false);

  const getSectionName = (topic) => {
    for (let section in sections) {
      if (Object.keys(sections[section]).includes(topic)) return section;
    }
    return null;
  };

  const selectedContent =
    Object.values(sections)
      .map((topics) => topics[selected])
      .filter(Boolean)[0] || "";
  const selectedSection = getSectionName(selected);

  return (
    <div
      className="mern-dashboard"
      onMouseMove={handleMouseMove}
      onMouseUp={handleMouseUp}
      onMouseLeave={handleMouseUp}
    >
      <header className="mern-header">
        <h1>📘 MERN Stack Dashboard</h1>
        <input type="text" placeholder="Search..." className="mern-search" />
      </header>

      <aside className="mern-sidebar" style={{ width: sidebarWidth }}>
        {Object.keys(sections).map((section) => (
          <div key={section} className="mern-section">
            <h3 className="mern-section-title">{section}</h3>
            <ul>
              {Object.keys(sections[section]).map((topic) => (
                <li
                  key={topic}
                  onClick={() => setSelected(topic)}
                  className={selected === topic ? "mern-active" : ""}
                >
                  {topic}
                </li>
              ))}
            </ul>
            <hr />
          </div>
        ))}
      </aside>

      <div className="mern-resizer" onMouseDown={handleMouseDown}></div>

      <main className="mern-content">
        <h2>{selected}</h2>

        {typeof selectedContent === "object" ? (
          <div>
            <p>{selectedContent.content}</p>

            {selectedContent.example && (
              <div className="mern-example-container">
                <pre className="mern-code-block">
                  <code>{selectedContent.example}</code>
                </pre>

                <iframe
                  title="example-output"
                  className="mern-output-frame"
                  srcDoc={selectedContent.example}
                />
              </div>
            )}

            {selectedContent.image && (
              <img
                src={selectedContent.image}
                alt="Example"
                className="mern-topic-img"
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
