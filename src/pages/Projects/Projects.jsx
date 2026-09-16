import React, { useState } from "react";
import "./Projects.css";

const projects = [
  {
    id: 1,
    number: "01",
    title: "Luxury Residence",
    category: "Residential",
    location: "Gurugram",
    description:
      "Premium aluminium windows and large-format glass systems designed for a contemporary luxury residence.",
    image:
      "https://images.unsplash.com/photo-1600607687920-4e2a09cf159d?auto=format&fit=crop&w=1400&q=90",
  },
  {
    id: 2,
    number: "02",
    title: "Corporate Office",
    category: "Commercial",
    location: "Noida",
    description:
      "Modern facade and glass solutions developed to give a corporate workspace a clean architectural identity.",
    image:
      "https://images.unsplash.com/photo-1497366754035-f200968a6e72?auto=format&fit=crop&w=1400&q=90",
  },
  {
    id: 3,
    number: "03",
    title: "Urban Apartment",
    category: "Residential",
    location: "Delhi",
    description:
      "Minimal sliding windows and balcony glazing created for an elegant urban apartment development.",
    image:
      "https://images.unsplash.com/photo-1600566753190-17f0baa2a6c3?auto=format&fit=crop&w=1400&q=90",
  },
  {
    id: 4,
    number: "04",
    title: "Commercial Facade",
    category: "Facade",
    location: "Jaipur",
    description:
      "A complete architectural facade package combining aluminium profiles, glazing and contemporary detailing.",
    image:
      "https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?auto=format&fit=crop&w=1400&q=90",
  },
  {
    id: 5,
    number: "05",
    title: "Premium Villa",
    category: "Residential",
    location: "Lucknow",
    description:
      "Slim-profile windows, glass railings and custom aluminium doors for a modern private villa.",
    image:
      "https://images.unsplash.com/photo-1600607688969-a5bfcd646154?auto=format&fit=crop&w=1400&q=90",
  },
  {
    id: 6,
    number: "06",
    title: "Retail Experience Centre",
    category: "Commercial",
    location: "Mumbai",
    description:
      "High-visibility glass frontage and aluminium framing designed for a premium retail environment.",
    image:
      "https://images.unsplash.com/photo-1600210492486-724fe5c67fb0?auto=format&fit=crop&w=1400&q=90",
  },
];

function Projects() {
  const [activeFilter, setActiveFilter] = useState("All");

  const filters = ["All", "Residential", "Commercial", "Facade"];

  const filteredProjects =
    activeFilter === "All"
      ? projects
      : projects.filter(
          (project) => project.category === activeFilter
        );

  return (
    <main className="projects-page">

      {/* ================= HERO ================= */}

      <section className="projects-hero">

        <div className="projects-hero-content">

          <span className="projects-eyebrow">
            OUR WORK • SELECTED PROJECTS
          </span>

          <h1>
            Spaces we've
            <span> transformed.</span>
          </h1>

          <p>
            Explore a selection of residential, commercial and
            architectural projects where precision meets modern design.
          </p>

        </div>

        <div className="projects-hero-mark">
          <span>04</span>
          <small>PROJECTS</small>
        </div>

      </section>


      {/* ================= INTRO ================= */}

      <section className="projects-intro">

        <div className="projects-intro-title">
          <span>PORTFOLIO</span>

          <h2>
            Built for the way
            <br />
            <strong>people live & work.</strong>
          </h2>
        </div>

        <div className="projects-intro-text">

          <p>
            Every project presents a different challenge. Our approach
            is to understand the architecture, select the right systems
            and deliver an installation that feels naturally integrated
            with the space.
          </p>

          <div className="project-stats">

            <div>
              <strong>500+</strong>
              <span>Projects</span>
            </div>

            <div>
              <strong>15+</strong>
              <span>Years</span>
            </div>

            <div>
              <strong>100%</strong>
              <span>Commitment</span>
            </div>

          </div>

        </div>

      </section>


      {/* ================= FILTER ================= */}

      <section className="projects-work">

        <div className="projects-filter">

          {filters.map((filter) => (

            <button
              key={filter}
              className={
                activeFilter === filter ? "active" : ""
              }
              onClick={() => setActiveFilter(filter)}
            >
              {filter}
            </button>

          ))}

        </div>


        {/* ================= PROJECT GRID ================= */}

        <div className="projects-grid">

          {filteredProjects.map((project) => (

            <article
              className="project-card"
              key={project.id}
            >

              <div className="project-image">

                <img
                  src={project.image}
                  alt={project.title}
                />

                <div className="project-image-overlay">

                  <span>VIEW PROJECT</span>

                  <div>↗</div>

                </div>

                <span className="project-card-number">
                  {project.number}
                </span>

              </div>


              <div className="project-card-content">

                <div className="project-meta">
                  <span>{project.category}</span>
                  <span>{project.location}</span>
                </div>

                <h3>{project.title}</h3>

                <p>{project.description}</p>

                <button>
                  Explore Case Study
                  <span>→</span>
                </button>

              </div>

            </article>

          ))}

        </div>

      </section>


      {/* ================= PROCESS ================= */}

      <section className="projects-process">

        <div className="process-heading">

          <span>OUR APPROACH</span>

          <h2>
            From idea
            <br />
            <strong>to installation.</strong>
          </h2>

        </div>


        <div className="process-list">

          <div className="process-item">
            <span>01</span>

            <div>
              <h3>Understand</h3>
              <p>
                We understand your requirements, architecture and
                functional expectations.
              </p>
            </div>
          </div>

          <div className="process-item">
            <span>02</span>

            <div>
              <h3>Design</h3>
              <p>
                The right profile, glass and system are selected around
                the project's design language.
              </p>
            </div>
          </div>

          <div className="process-item">
            <span>03</span>

            <div>
              <h3>Execute</h3>
              <p>
                Skilled installation and attention to detail bring the
                planned solution to life.
              </p>
            </div>
          </div>

          <div className="process-item">
            <span>04</span>

            <div>
              <h3>Deliver</h3>
              <p>
                The finished space is checked carefully before project
                handover.
              </p>
            </div>
          </div>

        </div>

      </section>


      {/* ================= CTA ================= */}

      <section className="projects-cta">

        <div>
          <span>YOUR PROJECT COULD BE NEXT</span>

          <h2>
            Let's create something
            <strong> remarkable.</strong>
          </h2>
        </div>

        <button>
          Start Your Project
          <span>↗</span>
        </button>

      </section>

    </main>
  );
}

export default Projects;