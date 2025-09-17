import React from "react";
import { Link } from "react-router";

export default function Course() {
  const courseList = [
    {
      title: "🌐 Web Development",
      desc: "Learn HTML, CSS, JavaScript, and modern frameworks to build websites.",
      link: "/courses/webdev",
    },
    {
      title: "⚡ MERN Stack",
      desc: "Master MongoDB, Express.js, React.js, and Node.js for full-stack apps.",
      link: "/courses/mern",
    },
    {
      title: "☕ Java Full Stack",
      desc: "Develop enterprise-grade apps using Java, Spring Boot, and React.",
      link: "/courses/java-fullstack",
    },
    {
      title: "🤖 Artificial Intelligence",
      desc: "Explore AI fundamentals, NLP, and computer vision applications.",
      link: "/courses/ai",
    },
    {
      title: "📊 Machine Learning",
      desc: "Hands-on ML algorithms, model training, and real-world projects.",
      link: "/courses/ml",
    },
    {
      title: "📚 Data Structures & Algorithms",
      desc: "Crack coding interviews with strong DSA and problem-solving skills.",
      link: "/courses/dsa",
    },
    {
      title: "☁️ Cloud Computing",
      desc: "Master AWS, Azure, and GCP to design and deploy cloud apps.",
      link: "/courses/cloud",
    },
    {
      title: "🛡️ Cyber Security",
      desc: "Practical knowledge of protecting devices from unauthorized access.",
      link: "/courses/cyber",
    },
    {
      title: "🐘 PHP Development",
      desc: "Build dynamic web applications with PHP and MySQL.",
      link: "/courses/php",
    },
    {
      title: "🐍 Python Programming",
      desc: "Learn Python basics, OOP, and frameworks like Django/Flask.",
      link: "/courses/python",
    },
    {
      title: "📈 Data Analyst",
      desc: "Master data visualization, SQL, and business intelligence tools.",
      link: "/courses/data-analyst",
    },
    {
      title: "💻 Operating System",
      desc: "Understand OS concepts: processes, memory, and file systems.",
      link: "/courses/os",
    },
    {
      title: "🗄️ DBMS",
      desc: "Database design, normalization, and transaction management.",
      link: "/courses/dbms",
    },
    {
      title: "💾 MySQL",
      desc: "Master SQL queries, joins, triggers, and stored procedures.",
      link: "/courses/mysql",
    },
    {
      title: "🐘 Devops",
      desc: "Big data concepts with HDFS, MapReduce, and Hive.",
      link: "/courses/Devops",
    },
    {
      title: "🔤 C Programming",
      desc: "Learn low-level programming with pointers and memory management.",
      link: "/courses/c",
    },
    {
      title: "➕➕ C++ Programming",
      desc: "Object-oriented programming, STL, and advanced DSA in C++.",
      link: "/courses/cpp",
    },
    {
      title: "☕ Core Java",
      desc: "Java fundamentals, OOP, collections, and multithreading.",
      link: "/courses/java",
    },
    {
      title: "📜 JavaScript",
      desc: "Master JS fundamentals, ES6+, DOM, and async programming.",
      link: "/courses/javascript",
    },
    {
      title: "🧠 Deep Learning",
      desc: "Neural networks, TensorFlow, and PyTorch projects.",
      link: "/courses/dl",
    },
    {
      title: "⛓️ Blockchain",
      desc: "Learn blockchain fundamentals, Ethereum, and smart contracts.",
      link: "/courses/blockchain",
    },
    {
      title: "⚙️ Compiler Design",
      desc: "Lexical analysis, parsing, code generation, and optimization.",
      link: "/courses/compiler-design",
    },
    {
      title: "🖥️ Computer Architecture & Networks",
      desc: "Study CPU design, memory hierarchy, and networking protocols.",
      link: "/courses/ca-network",
    },
    {
      title: "🐙 Git & GitHub",
      desc: "Version control, branching, and collaboration with GitHub.",
      link: "/courses/github",
    },
  ];

  return (
    <div>
      <style>
        {`
          body {
            margin: 0;
            font-family: 'Segoe UI', sans-serif;
            background: linear-gradient(to right, #fcb322ff, #f65920ff);
            color: #fff;
          }
          .course-page {
            padding: 100px 20px 60px;
            text-align: center;
          }
          .course-page h1 {
            font-size: 48px;
            margin-bottom: 20px;
            text-shadow: 2px 2px 6px rgba(0,0,0,0.3);
          }
          .course-page p {
            font-size: 18px;
            margin-bottom: 40px;
            color: #f0f0f0;
          }
          .courses-grid {
            display: grid;
            grid-template-columns: repeat(auto-fit, minmax(280px, 1fr));
            gap: 25px;
            max-width: 1200px;
            margin: auto;
          }
          .course-card {
            background: #fff;
            color: #333;
            padding: 30px;
            border-radius: 15px;
            box-shadow: 0 6px 15px rgba(0,0,0,0.2);
            transition: transform 0.3s, box-shadow 0.3s;
          }
          .course-card:hover {
            transform: translateY(-10px);
            box-shadow: 0 12px 25px rgba(0,0,0,0.3);
          }
          .course-card h3 {
            font-size: 22px;
            margin-bottom: 12px;
            color: #ed268dff;
          }
          .course-card p {
            font-size: 15px;
            color: #555;
            margin-bottom: 20px;
          }
          .btn {
            background: linear-gradient(45deg, #2575fc, #6a11cb);
            color: #fff;
            padding: 10px 20px;
            border: none;
            border-radius: 50px;
            font-size: 16px;
            cursor: pointer;
            text-decoration: none;
            transition: all 0.3s ease;
          }
          .btn:hover {
            background: linear-gradient(45deg, #6a11cb, #2575fc);
            transform: scale(1.05);
          }
        `}
      </style>

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
      </div>
    </div>
  );
}
