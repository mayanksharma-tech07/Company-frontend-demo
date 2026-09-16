import React, { useState } from "react";
import { Link } from "react-router-dom";
import "./Services.css";

function Services() {

  const [activeCategory, setActiveCategory] = useState("All");

  const services = [
    {
      id: 1,
      title: "Sliding System",
      category: "Windows",
      tag: "01",
      description:
        "Smooth and space-efficient sliding solutions designed for modern residential and commercial spaces.",
      image:
        "https://images.unsplash.com/photo-1600607687920-4e2a09cf159d?auto=format&fit=crop&w=1000&q=85"
    },
    {
      id: 2,
      title: "Casement Windows",
      category: "Windows",
      tag: "02",
      description:
        "Elegant casement systems offering excellent ventilation, durability and contemporary aesthetics.",
      image:
        "https://images.unsplash.com/photo-1600566753190-17f0baa2a6c3?auto=format&fit=crop&w=1000&q=85"
    },
    {
      id: 3,
      title: "Slim Profile",
      category: "Windows",
      tag: "03",
      description:
        "Minimal-frame aluminium systems created for larger views and clean architectural lines.",
      image:
        "https://images.unsplash.com/photo-1600607688969-a5bfcd646154?auto=format&fit=crop&w=1000&q=85"
    },
    {
      id: 4,
      title: "Spider Fitting",
      category: "Glass",
      tag: "04",
      description:
        "High-quality structural glass fitting solutions for visually open and sophisticated spaces.",
      image:
        "https://images.unsplash.com/photo-1600210492486-724fe5c67fb0?auto=format&fit=crop&w=1000&q=85"
    },
    {
      id: 5,
      title: "Patch Fitting",
      category: "Glass",
      tag: "05",
      description:
        "Precision glass hardware systems that combine clean design with dependable performance.",
      image:
        "https://images.unsplash.com/photo-1600607687920-4e2a09cf159d?auto=format&fit=crop&w=1000&q=85"
    },
    {
      id: 6,
      title: "Invisible Grill",
      category: "Safety",
      tag: "06",
      description:
        "Subtle safety solutions that maintain uninterrupted views while providing everyday protection.",
      image:
        "https://images.unsplash.com/photo-1600607687939-ce8a6c25118c?auto=format&fit=crop&w=1000&q=85"
    },
    {
      id: 7,
      title: "Shower Cubical",
      category: "Glass",
      tag: "07",
      description:
        "Contemporary shower enclosures designed for elegant bathrooms and practical everyday use.",
      image:
        "https://images.unsplash.com/photo-1600566753086-00f18fb6b3ea?auto=format&fit=crop&w=1000&q=85"
    },
    {
      id: 8,
      title: "Wardrobe Profile",
      category: "Interior",
      tag: "08",
      description:
        "Refined aluminium wardrobe systems that add functionality and modern character to interiors.",
      image:
        "https://images.unsplash.com/photo-1618221195710-dd6b41faaea6?auto=format&fit=crop&w=1000&q=85"
    },
    {
      id: 9,
      title: "ACP Glazing Work",
      category: "Facade",
      tag: "09",
      description:
        "Modern ACP glazing solutions for attractive, durable and professionally finished facades.",
      image:
        "https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?auto=format&fit=crop&w=1000&q=85"
    },
    {
      id: 10,
      title: "Facade & Curtain Wall",
      category: "Facade",
      tag: "10",
      description:
        "Architectural facade systems engineered to create distinctive commercial building exteriors.",
      image:
        "https://images.unsplash.com/photo-1487958449943-2429e8be8625?auto=format&fit=crop&w=1000&q=85"
    },
    {
      id: 11,
      title: "Modular System Railing",
      category: "Safety",
      tag: "11",
      description:
        "Strong and stylish railing systems suitable for balconies, staircases and modern buildings.",
      image:
        "https://images.unsplash.com/photo-1600607687920-4e2a09cf159d?auto=format&fit=crop&w=1000&q=85"
    },
    {
      id: 12,
      title: "System Windows & Doors",
      category: "Windows",
      tag: "12",
      description:
        "Complete aluminium window and door systems combining performance, security and aesthetics.",
      image:
        "https://images.unsplash.com/photo-1600607687920-4e2a09cf159d?auto=format&fit=crop&w=1000&q=85"
    }
  ];

  const categories = [
    "All",
    "Windows",
    "Glass",
    "Facade",
    "Safety",
    "Interior"
  ];

  const filteredServices =
    activeCategory === "All"
      ? services
      : services.filter(
          (service) => service.category === activeCategory
        );

  return (
    <main className="services-page">

      {/* ================= HEADER ================= */}

      <section className="services-header">

        <div className="services-header-content">

          <span className="services-eyebrow">
            WHAT WE DO
          </span>

          <h1>
            Solutions made for
            <span> modern spaces.</span>
          </h1>

          <p>
            From precision aluminium systems to sophisticated glass
            installations, explore our complete range of architectural
            solutions.
          </p>

        </div>

        <div className="services-header-number">
          03
        </div>

      </section>


      {/* ================= FILTER ================= */}

      <section className="services-filter-section">

        <div className="services-filter-top">

          <div>
            <span>OUR EXPERTISE</span>
            <h2>Explore our services</h2>
          </div>

          <p>
            Select a category to discover the right solution
            for your space.
          </p>

        </div>

        <div className="services-filter">

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

      </section>


      {/* ================= SERVICE GRID ================= */}

      <section className="services-grid-section">

        <div className="services-grid">

          {filteredServices.map((service) => (

            <article
              className="service-item"
              key={service.id}
            >

              <div className="service-image">

                <img
                  src={service.image}
                  alt={service.title}
                />

                <div className="service-number">
                  {service.tag}
                </div>

                <div className="service-category">
                  {service.category}
                </div>

              </div>


              <div className="service-content">

                <h3>{service.title}</h3>

                <p>
                  {service.description}
                </p>

                <Link to="/contact">
                  Enquire Now
                  <span>↗</span>
                </Link>

              </div>

            </article>

          ))}

        </div>

      </section>


      {/* ================= CTA ================= */}

      <section className="services-cta">

        <div className="services-cta-glow"></div>

        <div className="services-cta-content">

          <span>
            HAVE A SPECIFIC REQUIREMENT?
          </span>

          <h2>
            Tell us about your
            <strong> project.</strong>
          </h2>

          <p>
            Our team can help you select the right system,
            material and finish for your requirements.
          </p>

        </div>

        <Link to="/contact">
          Get a Free Consultation
          <span>↗</span>
        </Link>

      </section>

    </main>
  );
}

export default Services;