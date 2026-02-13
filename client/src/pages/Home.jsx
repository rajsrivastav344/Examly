import React, { useState, useEffect } from "react";
import { Link } from "react-router";
import Chatbot from "../Chatbot/Chatbot";


export default function Home() {
  const images = [
    "https://www.thoughtco.com/thmb/PCVPjqDcfiY4az_kycvn-EJA-e8=/1500x0/filters:no_upscale():max_bytes(150000):strip_icc()/swarthmore-college-Eric-Behrens-flickr-5706ffe35f9b581408d48cb3.jpg",
    "https://images.unsplash.com/photo-1503676260728-1c00da094a0b",
    "https://images.unsplash.com/photo-1523580846011-d3a5bc25702b",
  ];

  const [current, setCurrent] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrent((prev) => (prev + 1) % images.length);
    }, 4000);
    return () => clearInterval(interval);
  }, [images.length]);

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
          nav {
            display: flex;
            justify-content: space-between;
            align-items: center;
            padding: 15px 40px;
            background: #fe8c8c transparent;
            color: #333;
            box-shadow: 0 4px 6px rgba(0,0,0,0.1);
            position: fixed;
            top: 0;
            left: 0;
            right: 0;
            z-index: 1000;
          }
          nav a {
            margin: 0 15px;
            text-decoration: none;
            color: #333;
            font-weight: bold;
            transition: color 0.3s;
          }
          nav a:hover {
            color: #ed268dff;
          }
          nav .brand {
            font-size: 28px;
            font-weight: 800;
            color: #f65a06ff;
          }
          .hero {
            text-align: center;
            padding: 180px 20px 60px;
            
          }
          .hero h1 {
            font-size: 56px;
            margin-bottom: 20px;
            text-shadow: 2px 2px 8px rgba(0,0,0,0.2);
          }
          .hero p {
            font-size: 20px;
            margin-bottom: 30px;
            color: #f0f0f0;
          }
          .btn {
            background: #fff;
            color: #ed268dff;
            padding: 14px 30px;
            border: none;
            border-radius: 50px;
            font-size: 18px;
            cursor: pointer;
            transition: all 0.3s ease;
            box-shadow: 0 5px 15px rgba(0,0,0,0.2);
          }
          .btn:hover {
            background: #f3f3f3;
            transform: scale(1.05);
          }

          /* Slider */
          .slider {
            position: relative;
            width: 100%;
            max-width: 1000px;
            margin: 50px auto;
            overflow: hidden;
            border-radius: 15px;
            box-shadow: 0 8px 20px rgba(0,0,0,0.3);
          }
          .slide {
            width: 100%;
            height: 450px;
            object-fit: cover;
            display: none;
          }
          .slide.active {
            display: block;
            animation: fade 1s ease-in-out;
          }
          @keyframes fade {
            from { opacity: 0.4; }
            to { opacity: 1; }
          }
          .dots {
            text-align: center;
            margin-top: 12px;
          }
          .dot {
            height: 14px;
            width: 14px;
            margin: 0 5px;
            background-color: #bbb;
            border-radius: 50%;
            display: inline-block;
            transition: background-color 0.3s;
            cursor: pointer;
          }
          .dot.active {
            background-color: #4f46e5;
          }

          /* Achievements */
          .section {
            padding: 80px 20px;
            text-align: center;
          }
          .section h2 {
            font-size: 40px;
            margin-bottom: 20px;
            text-shadow: 1px 1px 5px rgba(0,0,0,0.3);
          }
          .cards {
            display: flex;
            justify-content: center;
            flex-wrap: wrap;
            gap: 25px;
            margin-top: 40px;
          }
          .card {
            background: #fff;
            color: #333;
            padding: 30px;
            border-radius: 15px;
            width: 300px;
            box-shadow: 0 6px 15px rgba(0,0,0,0.2);
            transition: transform 0.3s;
          }
          .card:hover {
            transform: translateY(-10px);
          }
          .card h3 {
            font-size: 22px;
            margin-bottom: 10px;
            color: #ed268dff;
          }
          .card p {
            font-size: 15px;
            color: #555;
          }

          /* Footer Styling */
          footer {
            background: #1e1e2f;
            padding: 50px 20px 20px;
            text-align: center;
            margin-top: 100px;
          }
          footer h3 {
            font-size: 22px;
            margin-bottom: 15px;
            color: #fff;
          }
          footer p {
            font-size: 14px;
            color: #bbb;
            margin-bottom: 20px;
          }
          .footer-links {
            margin: 15px 0;
          }
          .footer-links a {
            margin: 0 12px;
            text-decoration: none;
            color: #ddd;
            font-size: 15px;
            transition: color 0.3s;
          }
          .footer-links a:hover {
            color: #ffd700;
          }
          .social-icons a {
            margin: 0 8px;
            font-size: 20px;
            color: #ddd;
            transition: color 0.3s, transform 0.3s;
          }
          .social-icons a:hover {
            color: #ffd700;
            transform: scale(1.2);
          }
          .footer-bottom {
            margin-top: 25px;
            font-size: 13px;
            color: #777;
          }
            .logo {
  height: 40px;   /* adjust size */
  margin-right: 10px;
  vertical-align: middle;
}
.brand {
  display: flex;
  align-items: center;
  font-size: 28px;
  font-weight: 800;
  color: #f65a06ff;
}

        `}
      </style>

      {/* Navbar */}
      <nav>
        <div className="brand">
          <img
            src="logo.png"
         
            className="logo"
          />
          Examly
        </div>
        <div>
          <Link to="/">Home</Link>
          <Link to="/about">About</Link>
          <Link to="/features">Features</Link>
          <Link to="/course">Course</Link>
          <Link to="/login" className="btn">Login</Link>
        </div>
      </nav>

      {/* Hero Section */}
      <section className="hero">
        <h1>Welcome to Examly</h1>
        <p>Your smart platform to prepare, manage, and excel in exams with ease.</p>
        <Link to="/register">
          <button className="btn">🚀 Get Started</button>
        </Link>
      </section>
       <div>
                  <Chatbot/>
                </div>
   

      {/* Image Slider */}
      <div className="slider">
        {images.map((img, index) => (
          <img
            key={index}
            src={img}
            alt={`slide-${index}`}
            className={`slide ${index === current ? "active" : ""}`}
          />
        ))}
        <div className="dots">
          {images.map((_, index) => (
            <span
              key={index}
              className={`dot ${index === current ? "active" : ""}`}
              onClick={() => setCurrent(index)}
            ></span>
          ))}
        </div>
      </div>

      {/* Achievements Section */}
      <section className="section">
        <h2>🏆 Achievements</h2>
        <div className="cards">
          <div className="card">
            <h3>10,000+ Students</h3>
            <p>Trusted by learners across universities and colleges.</p>
          </div>
          <div className="card">
            <h3>50+ Institutions</h3>
            <p>Adopted by top educational institutes for exam management.</p>
          </div>
          <div className="card">
            <h3>95% Satisfaction</h3>
            <p>High student and faculty satisfaction rate.</p>
          </div>
        </div>
      </section>

      {/* Certifications Section */}
      <section className="section" style={{ background: "#f9f9f9", color: "#333" }}>
        <h2>📜 Certifications</h2>
        <div className="cards">
          <div className="card">
            <h3>ISO Certified</h3>
            <p>International standards for secure and reliable exams.</p>
          </div>
          <div className="card">
            <h3>AI Proctoring</h3>
            <p>Smart AI-based cheating prevention certified system.</p>
          </div>
          <div className="card">
            <h3>Data Security</h3>
            <p>End-to-end encryption for all sensitive student data.</p>
          </div>
        </div>
      </section>

      {/* Innovation Section */}
      <section className="section">
        <h2>💡 Innovation</h2>
        <div className="cards">
          <div className="card">
            <h3>Smart Analytics</h3>
            <p>Track performance with real-time analytics dashboards.</p>
          </div>
          <div className="card">
            <h3>Adaptive Exams</h3>
            <p>AI-powered exams that adapt to student skill levels.</p>
          </div>
          <div className="card">
            <h3>Cloud-Based</h3>
            <p>Seamless exam management anytime, anywhere.</p>
          </div>
        </div>
      </section>

      {/* Footer Section */}
      <footer>
        <h3>Examly</h3>
        <p>Smart platform to prepare, manage, and excel in exams with ease.</p>

        <div className="footer-links">
          <Link to="/">Home</Link>
          <Link to="/features">Features</Link>
          <Link to="/login">Student Login</Link>
          <Link to="/adlogin">Admin Login</Link>
          <Link to="/contact">Contact</Link>
        </div>

        <div className="social-icons">
          <a href="https://facebook.com" target="_blank" rel="noreferrer">
            <i className="fab fa-facebook-f"></i>
          </a>
          <a href="https://twitter.com" target="_blank" rel="noreferrer">
            <i className="fab fa-twitter"></i>
          </a>
          <a href="https://instagram.com" target="_blank" rel="noreferrer">
            <i className="fab fa-instagram"></i>
          </a>
          <a href="https://linkedin.com" target="_blank" rel="noreferrer">
            <i className="fab fa-linkedin-in"></i>
          </a>
        </div>

        <div className="footer-bottom">
          © {new Date().getFullYear()} Examly. All Rights Reserved.
        </div>
      </footer>
    </div>
  );
}
