import React from "react";
import { Link } from "react-router-dom";
import "./Footar.css";

function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="site-footer">

      {/* TOP FOOTER */}
      <div className="footer-main">

        <div className="footer-container">

          {/* BRAND */}
          <div className="footer-brand">

            <Link to="/" className="footer-logo">
              <span className="footer-logo-mark">AE</span>

              <span className="footer-logo-text">
                <small>ANANT</small>
                ENTERPRISES
              </span>
            </Link>

            <p>
              Premium aluminium and glass solutions designed for
              modern spaces, lasting performance and refined
              architectural aesthetics.
            </p>

            <Link to="/contact" className="footer-quote">
              Discuss Your Project
              <span>→</span>
            </Link>

          </div>


          {/* COMPANY */}
          <div className="footer-column">

            <h4>Company</h4>

            <Link to="/about">About Us</Link>
            <Link to="/projects">Our Projects</Link>
            <Link to="/gallery">Gallery</Link>
            <Link to="/contact">Contact Us</Link>

          </div>


          {/* SOLUTIONS */}
          <div className="footer-column">

            <h4>Solutions</h4>

            <Link to="/products">Aluminium Windows</Link>
            <Link to="/products/sliding-system">Sliding Systems</Link>
            <Link to="/products/casement">Casement Systems</Link>
            <Link to="/products/slim-profile">Slim Profile</Link>
            <Link to="/products/curtain-wall">Curtain Wall</Link>

          </div>


          {/* SERVICES */}
          <div className="footer-column">

            <h4>Services</h4>

            <Link to="/services">Our Services</Link>
            <Link to="/services">Installation</Link>
            <Link to="/services">Glass Solutions</Link>
            <Link to="/services">Facade Solutions</Link>
            <Link to="/services">Custom Projects</Link>

          </div>


          {/* CONTACT */}
          <div className="footer-column footer-contact">

            <h4>Get In Touch</h4>

            <a href="tel:+919584749870">
              <span>☎</span>
              +91 95847 49870
            </a>

            <a href="mailto:info@anantenterprises.in">
              <span>✉</span>
              info@anantenterprises.in
            </a>

            <div className="footer-address">
              <span>⌖</span>
              <p>
                Anant Enterprises<br />
                Aluminium & Glass Solutions<br />
                India
              </p>
            </div>

          </div>

        </div>

      </div>


      {/* CTA STRIP */}
      <div className="footer-cta">

        <div className="footer-container footer-cta-inner">

          <div>
            <span className="footer-cta-label">
              BUILD BETTER. DESIGN BETTER.
            </span>

            <h3>
              Have a project in mind?
            </h3>
          </div>

          <Link to="/contact" className="footer-cta-button">
            Get a Free Consultation
            <span>↗</span>
          </Link>

        </div>

      </div>


      {/* BOTTOM FOOTER */}
      <div className="footer-bottom">

        <div className="footer-container footer-bottom-inner">

          <p>
            © {currentYear} Anant Enterprises. All rights reserved.
          </p>

          <div className="footer-bottom-links">

            <Link to="/contact">Privacy</Link>
            <Link to="/contact">Terms</Link>

            {/* ADMIN PANEL */}
            <Link to="/dashboard" className="admin-panel-link">
              Admin Panel
            </Link>

          </div>

        </div>

      </div>

    </footer>
  );
}

export default Footer;