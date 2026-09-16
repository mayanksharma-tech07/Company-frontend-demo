import React from "react";
import { Link } from "react-router-dom";
import "./About.css";

function About() {
  return (
    <main className="about-page">

      {/* ================= PAGE INTRO ================= */}

      <section className="about-intro">

        <div className="about-intro-content">

          <span className="about-eyebrow">
            WHO WE ARE
          </span>

          <h1>
            Building spaces with
            <span> precision & purpose.</span>
          </h1>

          <p>
            Anant Enterprises is a growing aluminium and architectural
            solutions company focused on creating durable, elegant and
            functional spaces for modern homes, offices and commercial
            environments.
          </p>

        </div>

        <div className="about-intro-number">
          <span>01</span>
          <small>ABOUT ANANT</small>
        </div>

      </section>


      {/* ================= STORY ================= */}

      <section className="about-story">

        <div className="about-image-wrap">

          <img
            src="https://images.unsplash.com/photo-1600566753086-00f18fb6b3ea?auto=format&fit=crop&w=1200&q=90"
            alt="Modern architectural interior"
          />

          <div className="experience-card">
            <strong>15+</strong>
            <span>Years of experience</span>
          </div>

        </div>


        <div className="about-story-content">

          <span className="section-label">
            OUR STORY
          </span>

          <h2>
            More than windows.
            <br />
            <span>We shape experiences.</span>
          </h2>

          <p>
            From aluminium windows and doors to sophisticated glass
            systems and architectural installations, we bring together
            thoughtful design, reliable materials and skilled
            workmanship.
          </p>

          <p>
            Every project is approached with attention to detail,
            understanding of the space and a commitment to delivering
            solutions that perform beautifully for years.
          </p>

          <Link to="/contact" className="about-link">
            Discuss Your Project
            <span>↗</span>
          </Link>

        </div>

      </section>


      {/* ================= VALUES ================= */}

      <section className="about-values">

        <div className="values-heading">

          <span className="section-label">
            WHY ANANT
          </span>

          <h2>
            Built around
            <span> quality.</span>
          </h2>

          <p>
            Our approach combines design thinking, technical expertise
            and dependable execution to create solutions that last.
          </p>

        </div>


        <div className="values-grid">

          <div className="value-card">
            <div className="value-number">01</div>

            <div className="value-icon">◇</div>

            <h3>Precision</h3>

            <p>
              Accurate planning and careful installation for every
              detail of your project.
            </p>
          </div>


          <div className="value-card featured">
            <div className="value-number">02</div>

            <div className="value-icon">◈</div>

            <h3>Quality Materials</h3>

            <p>
              Reliable aluminium, glass and hardware selected for
              long-term performance.
            </p>
          </div>


          <div className="value-card">
            <div className="value-number">03</div>

            <div className="value-icon">✦</div>

            <h3>Modern Design</h3>

            <p>
              Clean architectural solutions designed around today's
              modern spaces.
            </p>
          </div>


          <div className="value-card">
            <div className="value-number">04</div>

            <div className="value-icon">↗</div>

            <h3>Reliable Service</h3>

            <p>
              Transparent communication and dependable support from
              consultation to completion.
            </p>
          </div>

        </div>

      </section>


      {/* ================= CTA ================= */}

      <section className="about-cta">

        <div>
          <span>READY TO BUILD SOMETHING BETTER?</span>

          <h2>
            Let's create your
            <strong> next space.</strong>
          </h2>
        </div>

        <Link to="/contact">
          Start a Conversation
          <span>↗</span>
        </Link>

      </section>

    </main>
  );
}

export default About;