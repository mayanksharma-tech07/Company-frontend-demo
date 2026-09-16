import React, { useState } from "react";
import { Link, NavLink } from "react-router-dom";
import "./Navbar.css";

function Navbar() {
  const [menuOpen, setMenuOpen] = useState(false);

  const closeMenu = () => {
    setMenuOpen(false);
  };

  return (
    <header className="navbar">

      <div className="navbar-container">

        {/* LOGO */}
        <Link to="/" className="navbar-logo" onClick={closeMenu}>
          <div className="logo-mark">
            AE
          </div>

          <div className="logo-content">
            <strong>Anant</strong>
            <span>ENTERPRISES</span>
          </div>
        </Link>


        {/* DESKTOP MENU */}
        <nav className={`navbar-menu ${menuOpen ? "active" : ""}`}>

          <NavLink
            to="/"
            className="nav-link"
            onClick={closeMenu}
          >
            Home
          </NavLink>

          <NavLink
            to="/about"
            className="nav-link"
            onClick={closeMenu}
          >
            About
          </NavLink>


          <NavLink
            to="/services"
            className="nav-link"
            onClick={closeMenu}
          >
            Services
          </NavLink>

          <NavLink
            to="/projects"
            className="nav-link"
            onClick={closeMenu}
          >
            Projects
          </NavLink>

          <NavLink
            to="/gallery"
            className="nav-link"
            onClick={closeMenu}
          >
            Gallery
          </NavLink>

          <NavLink
            to="/contact"
            className="nav-link"
            onClick={closeMenu}
          >
            Contact
          </NavLink>

        </nav>


        {/* RIGHT SIDE */}
        <div className="navbar-actions">

          <Link to="/auth" className="nav-login">
            Login
          </Link>

          <Link to="/contact" className="nav-cta">
            Get Quote
            <span>↗</span>
          </Link>

        </div>


        {/* MOBILE BUTTON */}
        <button
          className={`menu-toggle ${menuOpen ? "open" : ""}`}
          onClick={() => setMenuOpen(!menuOpen)}
          aria-label="Toggle navigation"
        >
          <span></span>
          <span></span>
          <span></span>
        </button>

      </div>

    </header>
  );
}

export default Navbar;