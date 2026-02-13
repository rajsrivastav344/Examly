// Course.jsx - All Courses Overview Page
import React from "react";
import { Link } from "react-router-dom"; // Correct import for React Router v6+
import Chatbot from "../Chatbot/Chatbot";
import "./Courses.css"; // Reuse your global CSS (or create Courses.css)

export default function Course() {
  const courseList = [
    {
      title: "🌐 Web Development",
      desc: "Learn HTML, CSS, JavaScript, and modern frameworks to build responsive websites.",
      link: "/courses/webdev",
    },
    {
      title: "⚡ MERN Stack",
      desc: "Master MongoDB, Express.js, React.js, and Node.js for full-stack web apps.",
      link: "/courses/mern",
    },
    {
      title: "☕ Java Full Stack",
      desc: "Develop enterprise-grade applications using Java, Spring Boot, and React.",
      link: "/courses/javafullstack",
    },
    {
      title: "🤖 Artificial Intelligence",
      desc: "Explore AI fundamentals, NLP, computer vision, and real-world applications.",
      link: "/courses/ai",
    },
    {
      title: "📊 Machine Learning",
      desc: "Hands-on ML algorithms, model training, evaluation, and industry projects.",
      link: "/courses/ml",
    },
    {
      title: "📚 Data Structures & Algorithms",
      desc: "Crack coding interviews with strong DSA and problem-solving skills.",
      link: "/courses/dsa",
    },
    {
      title: "☁️ Cloud Computing",
      desc: "Master AWS, Azure, GCP — design, deploy, and manage cloud applications.",
      link: "/courses/cloud",
    },
    {
      title: "🛡️ Cyber Security",
      desc: "Practical knowledge of protecting systems, networks, and data from attacks.",
      link: "/courses/cyber",
    },
    {
      title: "🐘 PHP Development",
      desc: "Build dynamic websites and applications with PHP and MySQL.",
      link: "/courses/php",
    },
    {
      title: "🐍 Python Programming",
      desc: "Learn Python basics, OOP, data science, and frameworks like Django/Flask.",
      link: "/courses/python",
    },
    {
      title: "📈 Data Analyst",
      desc: "Master data visualization, SQL, Excel, Power BI, and business intelligence.",
      link: "/courses/dataanalytics",
    },
    {
      title: "💻 Operating System",
      desc: "Understand OS concepts: processes, threads, memory management, file systems.",
      link: "/courses/os",
    },
    {
      title: "🗄️ DBMS",
      desc: "Database design, normalization, SQL, transactions, and concurrency control.",
      link: "/courses/dbms",
    },
    {
      title: "💾 MySQL",
      desc: "Master SQL queries, joins, indexes, triggers, stored procedures, and optimization.",
      link: "/courses/mysql",
    },
    {
      title: "🐘 DevOps",
      desc: "CI/CD pipelines, Docker, Kubernetes, Jenkins, AWS DevOps tools, and automation.",
      link: "/courses/devops",
    },
    {
      title: "🔤 C Programming",
      desc: "Learn low-level programming, pointers, memory management, and system-level coding.",
      link: "/courses/c",
    },
    {
      title: "➕➕ C++ Programming",
      desc: "OOP, STL, templates, advanced DSA, and modern C++ features.",
      link: "/courses/cpp",
    },
    {
      title: "☕ Core Java",
      desc: "Java fundamentals, OOP, collections, multithreading, and exception handling.",
      link: "/courses/java",
    },
    {
      title: "📜 JavaScript",
      desc: "Master JS fundamentals, ES6+, DOM manipulation, async programming, and APIs.",
      link: "/courses/javascript",
    },
    {
      title: "🧠 Deep Learning",
      desc: "Neural networks, CNNs, RNNs, TensorFlow, PyTorch, and advanced projects.",
      link: "/courses/dl",
    },
    {
      title: "⛓️ Blockchain",
      desc: "Blockchain fundamentals, Ethereum, smart contracts, DeFi, and Web3.",
      link: "/courses/blockchain",
    },
    {
      title: "⚙️ Compiler Design",
      desc: "Lexical analysis, parsing, syntax trees, code generation, and optimization.",
      link: "/courses/compiler",
    },
    {
      title: "🖥️ Computer Architecture & Networks",
      desc: "CPU design, memory hierarchy, pipelining, TCP/IP, OSI model, and protocols.",
      link: "/courses/computer",
    },
    {
      title: "🐙 Git & GitHub",
      desc: "Version control, branching strategies, collaboration, GitHub workflows, and CI/CD.",
      link: "/courses/github",
    },
  ];

  return (
    <div className="course-page">
      <h1>📚 Our Courses</h1>
      <p>Boost your career with our industry-ready programs.</p>

      <div className="courses-grid">
        {courseList.map((course, index) => (
          <div className="course-card" key={index}>
            <h3>{course.title}</h3>
            <p>{course.desc}</p>
            <Link to={course.link} className="btn">
              Explore →
            </Link>
          </div>
        ))}
      </div>

      {/* Chatbot – positioned bottom-right */}
      <Chatbot />
    </div>
  );
}