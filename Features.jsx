import React from "react";
import { Link } from "react-router";
import { motion } from "framer-motion";

export default function Features() {
  return (
    <div>
      <style>
        {`
          .features-section {
            padding: 100px 20px;
            background: linear-gradient(to right, #fcb322ff, #f65920ff);
            text-align: center;
          }
          .features-section h2 {
            font-size: 48px;
            font-weight: 700;
            margin-bottom: 60px;
            color: #111;
          }
          .features-container {
            max-width: 1200px;
            margin: 0 auto;
            display: grid;
            grid-template-columns: 1fr 1fr;
            gap: 40px;
          }
          .feature-card {
            background: #fff;
            padding: 50px 30px;
            border-radius: 20px;
            box-shadow: 0 8px 20px rgba(0,0,0,0.1);
            transition: transform 0.3s ease;
          }
          .feature-card:hover {
            transform: scale(1.05);
          }
          .feature-card h3 {
            font-size: 28px;
            margin-bottom: 15px;
            color: #333;
          }
          .feature-card p {
            font-size: 18px;
            color: #666;
            margin-bottom: 30px;
            line-height: 1.6;
          }
          .feature-card a {
            display: inline-block;
            background: #ed268dff;
            color: #fff;
            padding: 12px 25px;
            border-radius: 30px;
            text-decoration: none;
            font-weight: bold;
            transition: background 0.3s ease, transform 0.2s;
          }
          .feature-card a:hover {
            background: #3730a3;
            transform: scale(1.05);
          }
          @media (max-width: 768px) {
            .features-container {
              grid-template-columns: 1fr;
            }
          }
                /* Footer Styling */
          footer {
            background: #1e1e2f;
            padding: 100px 20px 20px;
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
        `}
      </style>

      <div className="features-section">
        <h2>Features</h2>

        <div className="features-container">
          {/* User Dashboard Feature */}
          <motion.div whileHover={{ scale: 1.05 }} className="feature-card">
            <h3>🎓 User Dashboard</h3>
            <p>
              Students can view exams, attempt questions, check results, and track performance.
            </p>
            <Link to="/login">Login as Student</Link>
          </motion.div>

          {/* Admin Dashboard Feature */}
          <motion.div whileHover={{ scale: 1.05 }} className="feature-card">
            <h3>🛠️ Admin Dashboard</h3>
            <p>
              Admins can manage exams, subjects, users, and view analytics.
            </p>
            <Link to="/adlogin">Login as Admin</Link>
          </motion.div>
        </div>
      </div>
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
    
  
