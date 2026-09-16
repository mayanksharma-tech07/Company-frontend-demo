import React from "react";
import { Link } from "react-router-dom";
import "./ProjectCard.css";

function ProjectCard({ project }) {
  return (
    <article className="project-card">

      {/* IMAGE */}
      <div className="project-image-wrap">

        <img
          src={project.image}
          alt={project.title}
          className="project-image"
        />

        <div className="project-overlay"></div>

        <span className="project-category">
          {project.category || "FEATURED PROJECT"}
        </span>

        <span className="project-number">
          {String(project.id).padStart(2, "0")}
        </span>

        <div className="project-image-title">
          <span>ANANT ENTERPRISES</span>
          <h3>{project.title}</h3>
        </div>

      </div>


      {/* CONTENT */}
      <div className="project-content">

        <div className="project-meta">

          <span>
            {project.location || "India"}
          </span>

          <span>
            {project.year || "2026"}
          </span>

        </div>

        <p>
          {project.description ||
            "A thoughtfully executed architectural project combining modern design, premium materials and lasting performance."}
        </p>

        <div className="project-bottom">

          <div className="project-scope">
            <span>PROJECT SCOPE</span>

            <strong>
              {project.scope || "Aluminium & Glass"}
            </strong>
          </div>

          <Link
            to={`/projects/${project.id}`}
            className="project-view"
          >
            Explore
            <span>↗</span>
          </Link>

        </div>

      </div>

    </article>
  );
}

export default ProjectCard;