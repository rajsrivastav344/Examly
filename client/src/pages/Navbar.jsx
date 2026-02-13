import React, { useState } from "react";
import { Link } from "react-router-dom";
import "./Navbar.css"; // external CSS

const Navbar = () => {
  const [selected, setSelected] = useState("home");

  const handleSelect = (id) => {
    setSelected(id);
  };

  return (
    <nav className="navbar">
      {/* Brand / Logo */}
      <div className="brand">
        <img src="logo.png" alt="Examly Logo" className="logo" />
        <span className="brand-name">Examly</span>
      </div>

      {/* Navigation Links */}
      <div className="nav-links">
        <Link
          to="/"
          className={selected === "home" ? "active" : ""}
          onClick={() => handleSelect("home")}
        >
          Home
        </Link>

        <Link
          to="/about"
          className={selected === "about" ? "active" : ""}
          onClick={() => handleSelect("about us")}
        >
          About
        </Link>

        <Link
          to="/features"
          className={selected === "features" ? "active" : ""}
          onClick={() => handleSelect("features")}
        >
          Features
        </Link>

        <Link
          to="/course"
          className={selected === "course" ? "active" : ""}
          onClick={() => handleSelect("course")}
        >
          Course
        </Link>

        <Link
          to="/login"
          className={`btn ${selected === "login" ? "active-btn" : ""}`}
          onClick={() => handleSelect("login")}
        >
          Login
        </Link>

        {/* Animated Selector */}
        <div className="selector"></div>
      </div>
    </nav>
  );
};

export default Navbar;
