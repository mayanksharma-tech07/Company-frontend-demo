import React, { useState } from "react";
import "./Gallery.css";

const galleryData = [
  {
    id: 1,
    title: "Modern Residence",
    category: "Residential",
    location: "Gurugram",
    image:
      "https://images.unsplash.com/photo-1600607687920-4e2a09cf159d?auto=format&fit=crop&w=1400&q=90",
  },
  {
    id: 2,
    title: "Contemporary Interior",
    category: "Interior",
    location: "Delhi",
    image:
      "https://images.unsplash.com/photo-1600210492486-724fe5c67fb0?auto=format&fit=crop&w=1200&q=90",
  },
  {
    id: 3,
    title: "Corporate Architecture",
    category: "Commercial",
    location: "Noida",
    image:
      "https://images.unsplash.com/photo-1497366754035-f200968a6e72?auto=format&fit=crop&w=1400&q=90",
  },
  {
    id: 4,
    title: "Luxury Living Space",
    category: "Residential",
    location: "Lucknow",
    image:
      "https://images.unsplash.com/photo-1600566753190-17f0baa2a6c3?auto=format&fit=crop&w=1200&q=90",
  },
  {
    id: 5,
    title: "Architectural Facade",
    category: "Facade",
    location: "Jaipur",
    image:
      "https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?auto=format&fit=crop&w=1400&q=90",
  },
  {
    id: 6,
    title: "Premium Glass Space",
    category: "Glass",
    location: "Mumbai",
    image:
      "https://images.unsplash.com/photo-1600607688969-a5bfcd646154?auto=format&fit=crop&w=1200&q=90",
  },
  {
    id: 7,
    title: "Elegant Villa",
    category: "Residential",
    location: "Chandigarh",
    image:
      "https://images.unsplash.com/photo-1600607687939-ce8a6c25118c?auto=format&fit=crop&w=1400&q=90",
  },
  {
    id: 8,
    title: "Commercial Workspace",
    category: "Commercial",
    location: "Noida",
    image:
      "https://images.unsplash.com/photo-1497366811353-6870744d04b2?auto=format&fit=crop&w=1200&q=90",
  },
];

function Gallery() {
  const [activeCategory, setActiveCategory] = useState("All");

  const categories = [
    "All",
    "Residential",
    "Commercial",
    "Facade",
    "Glass",
    "Interior",
  ];

  const filteredGallery =
    activeCategory === "All"
      ? galleryData
      : galleryData.filter(
          (item) => item.category === activeCategory
        );

  return (
    <main className="gallery-page">

      {/* ================= HERO ================= */}

      <section className="gallery-hero">

        <div className="gallery-hero-content">

          <span className="gallery-eyebrow">
            ANANT ENTERPRISES • VISUAL STORIES
          </span>

          <h1>
            See the
            <span> difference.</span>
          </h1>

          <p>
            A glimpse into the spaces, details and architectural
            solutions we have brought to life.
          </p>

        </div>

        <div className="gallery-hero-number">
          05
        </div>

      </section>


      {/* ================= INTRO ================= */}

      <section className="gallery-intro">

        <div className="gallery-intro-label">
          <span>OUR GALLERY</span>
        </div>

        <div>

          <h2>
            Details that speak
            <strong> for themselves.</strong>
          </h2>

          <p>
            Explore our work across residences, commercial spaces,
            facades and interiors. Every image represents our focus
            on quality, precision and contemporary design.
          </p>

        </div>

      </section>


      {/* ================= FILTER ================= */}

      <section className="gallery-section">

        <div className="gallery-filter">

          {categories.map((category) => (

            <button
              key={category}
              className={
                activeCategory === category
                  ? "active"
                  : ""
              }
              onClick={() => setActiveCategory(category)}
            >
              {category}
            </button>

          ))}

        </div>


        {/* ================= GALLERY ================= */}

        <div className="gallery-grid">

          {filteredGallery.map((item, index) => (

            <article
              className={`gallery-item ${
                index % 5 === 0 ? "gallery-large" : ""
              }`}
              key={item.id}
            >

              <img
                src={item.image}
                alt={item.title}
              />

              <div className="gallery-overlay">

                <div className="gallery-info">

                  <span>{item.category}</span>

                  <h3>{item.title}</h3>

                  <p>{item.location}</p>

                </div>

                <div className="gallery-arrow">
                  ↗
                </div>

              </div>

            </article>

          ))}

        </div>

      </section>


      {/* ================= EXPERIENCE ================= */}

      <section className="gallery-experience">

        <div className="experience-number">
          01
        </div>

        <div className="experience-content">

          <span>BEYOND APPEARANCE</span>

          <h2>
            Beautiful design is only
            <strong> the beginning.</strong>
          </h2>

          <p>
            Behind every finished project is a process built around
            material selection, technical precision, skilled
            installation and attention to detail.
          </p>

        </div>

      </section>


      {/* ================= CTA ================= */}

      <section className="gallery-cta">

        <div>

          <span>INSPIRED BY WHAT YOU SEE?</span>

          <h2>
            Let's bring your
            <strong> vision to life.</strong>
          </h2>

        </div>

        <button>
          Discuss Your Project
          <span>↗</span>
        </button>

      </section>

    </main>
  );
}

export default Gallery;