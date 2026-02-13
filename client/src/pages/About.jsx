import React from "react";

export default function About() {
  return (
    <div>
      <style>
        {`
          body {
            margin: 0;
            font-family: Arial, sans-serif;
            background: linear-gradient(to right, #fcb322ff, #f65920ff);
            color: #fff;
          }
          .about-container {
            max-width: 1000px;
            margin: 120px auto 60px;
            padding: 40px;
            background: rgba(255, 255, 255, 0.1);
            border-radius: 16px;
            box-shadow: 0 8px 20px rgba(0,0,0,0.3);
            text-align: center;
          }
          .about-title {
            font-size: 46px;
            font-weight: bold;
            margin-bottom: 20px;
            text-shadow: 2px 2px 8px rgba(0,0,0,0.3);
          }
          .about-text {
            font-size: 18px;
            line-height: 1.7;
            color: #f0f0f0;
            margin-bottom: 20px;
          }
          .highlight {
            color: #a9f52eff;
            font-weight: bold;
          }
          .about-btn {
            display: inline-block;
            margin-top: 25px;
            padding: 12px 30px;
            background: #fff;
            color:  #ed268dff;
            border-radius: 50px;
            text-decoration: none;
            font-weight: bold;
            font-size: 16px;
            transition: all 0.3s ease;
          }
          .about-btn:hover {
            background: #f3f3f3;
            transform: scale(1.05);
          }
        `}
      </style>

      <div className="about-container">
        <h1 className="about-title">About Examly</h1>
        <p className="about-text">
          Created <span className="highlight">Examly</span>, a comprehensive{" "}
          <span className="highlight">MERN stack-based</span> web application
          designed for conducting exams in universities and colleges.
        </p>
        <p className="about-text">
          The platform features an <span className="highlight">Admin Dashboard</span>, 
          user login, registration, and modules for{" "}
          <span className="highlight">examinees, examinations, question banks, and sessions</span>.
        </p>
        <p className="about-text">
          This project demonstrates my expertise in developing{" "}
          <span className="highlight">scalable web applications</span>, 
          integrating <span className="highlight">user authentication</span>, and 
          managing <span className="highlight">complex data workflows</span> 
          for exam management systems.
        </p>

        <a href="/features" className="about-btn">Explore Features 🚀</a>
      </div>
    </div>
  );
}
