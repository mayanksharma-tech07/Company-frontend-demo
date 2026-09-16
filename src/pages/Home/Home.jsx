import React from "react";
import { Link } from "react-router-dom";
import "./Home.css";

function Home() {
  return (
    <main className="home-page">

      {/* ================= HERO ================= */}
      <section className="home-hero">

        <div className="home-hero-overlay"></div>

        <div className="home-hero-content">

          <div className="home-eyebrow">
            <span></span>
            ALUMINIUM • GLASS • ARCHITECTURAL SOLUTIONS
          </div>

          <h1>
            Spaces Designed
            <br />
            <strong>To Stand Apart.</strong>
          </h1>

          <p>
            Premium aluminium windows, doors, glass systems and
            architectural solutions engineered for modern living
            and commercial spaces.
          </p>

          <div className="home-hero-actions">

            <Link to="/products" className="home-primary-btn">
              Explore Solutions
              <span>↗</span>
            </Link>

            <Link to="/contact" className="home-secondary-btn">
              Start Your Project
            </Link>

          </div>

          <div className="home-trust">

            <div>
              <strong>5000+</strong>
              <span>Projects Delivered</span>
            </div>

            <div>
              <strong>100+</strong>
              <span>Design Solutions</span>
            </div>

            <div>
              <strong>14+</strong>
              <span>Years Experience</span>
            </div>

          </div>

        </div>

        <div className="home-scroll">
          <span></span>
          Scroll to explore
        </div>

      </section>


      {/* ================= INTRO ================= */}
      <section className="home-intro">

        <div className="home-container">

          <div className="section-tag">
            WHO WE ARE
          </div>

          <div className="home-intro-grid">

            <h2>
              Building better spaces
              <br />
              <em>through better systems.</em>
            </h2>

            <div className="home-intro-text">

              <p>
                Anant Enterprises is a professionally driven aluminium
                and glass solutions company focused on creating
                sophisticated, durable and functional architectural
                spaces.
              </p>

              <p>
                From residential windows to large-scale commercial
                facades, we combine quality materials, precision
                engineering and thoughtful design.
              </p>

              <Link to="/about" className="text-link">
                Discover Our Story
                <span>→</span>
              </Link>

            </div>

          </div>

        </div>

      </section>


      {/* ================= SOLUTIONS ================= */}
      <section className="home-solutions">

        <div className="home-container">

          <div className="solutions-heading">

            <div>
              <div className="section-tag">
                WHAT WE DO
              </div>

              <h2>
                Complete architectural
                <br />
                <span>solutions.</span>
              </h2>
            </div>

            <Link to="/services" className="outline-link">
              View All Services
              <span>↗</span>
            </Link>

          </div>


          <div className="solutions-grid">

            <article className="solution-card solution-card-large">

              <div className="solution-number">01</div>

              <div className="solution-icon">▱</div>

              <h3>Aluminium Windows</h3>

              <p>
                High-performance window systems designed for
                strength, ventilation, energy efficiency and
                contemporary aesthetics.
              </p>

              <Link to="/products">
                Explore
                <span>↗</span>
              </Link>

            </article>


            <article className="solution-card">

              <div className="solution-number">02</div>

              <div className="solution-icon">◇</div>

              <h3>Glass Solutions</h3>

              <p>
                Elegant glass systems that bring openness,
                natural light and modern character to every space.
              </p>

              <Link to="/products">
                Explore
                <span>↗</span>
              </Link>

            </article>


            <article className="solution-card">

              <div className="solution-number">03</div>

              <div className="solution-icon">⌗</div>

              <h3>Facade Systems</h3>

              <p>
                Contemporary facade solutions engineered to
                create distinctive and durable building exteriors.
              </p>

              <Link to="/services">
                Explore
                <span>↗</span>
              </Link>

            </article>


            <article className="solution-card">

              <div className="solution-number">04</div>

              <div className="solution-icon">□</div>

              <h3>Custom Projects</h3>

              <p>
                Tailored aluminium and glass solutions developed
                around your project's specific requirements.
              </p>

              <Link to="/contact">
                Discuss
                <span>↗</span>
              </Link>

            </article>

          </div>

        </div>

      </section>


      {/* ================= FEATURE STRIP ================= */}
      <section className="home-feature-strip">

        <div className="home-container">

          <div className="feature-strip-grid">

            <div>
              <span className="feature-icon">✦</span>
              <strong>Premium Materials</strong>
              <p>Selected for durability and performance.</p>
            </div>

            <div>
              <span className="feature-icon">⌁</span>
              <strong>Precision Engineering</strong>
              <p>Built with attention to every detail.</p>
            </div>

            <div>
              <span className="feature-icon">◌</span>
              <strong>Expert Installation</strong>
              <p>Professional execution from start to finish.</p>
            </div>

            <div>
              <span className="feature-icon">↗</span>
              <strong>Long-Term Value</strong>
              <p>Solutions designed for lasting performance.</p>
            </div>

          </div>

        </div>

      </section>


      {/* ================= PROJECT CTA ================= */}
      <section className="home-project">

        <div className="home-project-inner">

          <div className="section-tag">
            YOUR NEXT PROJECT
          </div>

          <h2>
            Let's create something
            <br />
            <span>remarkable together.</span>
          </h2>

          <p>
            Tell us about your requirements and let our team
            help you find the right architectural solution.
          </p>

          <Link to="/contact" className="home-project-btn">
            Talk To Our Team
            <span>↗</span>
          </Link>

        </div>

      </section>

    </main>
  );
}

export default Home;