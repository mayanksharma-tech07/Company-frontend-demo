import React, { useState } from "react";
import "./Contact.css";

function Contact() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    service: "",
    message: "",
  });

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    // Backend/API baad mein yahin connect hoga
    console.log(formData);

    alert("Thank you! Your enquiry has been submitted.");
  };

  return (
    <main className="contact-page">

      {/* ================= HERO ================= */}

      <section className="contact-hero">

        <div className="contact-hero-content">

          <span className="contact-eyebrow">
            ANANT ENTERPRISES • CONTACT
          </span>

          <h1>
            Let's build
            <span> something better.</span>
          </h1>

          <p>
            Have a project in mind? Tell us what you are looking
            for and our team will get back to you with the right
            solution.
          </p>

        </div>

        <div className="contact-hero-number">
          06
        </div>

      </section>


      {/* ================= CONTACT BODY ================= */}

      <section className="contact-main">

        {/* LEFT SIDE */}

        <div className="contact-information">

          <span className="contact-label">
            GET IN TOUCH
          </span>

          <h2>
            Start a
            <strong> conversation.</strong>
          </h2>

          <p className="contact-description">
            Whether you are planning a new project, renovating
            an existing space or simply exploring possibilities,
            we would love to hear from you.
          </p>


          <div className="contact-details">

            <div className="contact-detail">

              <div className="contact-icon">
                ✉
              </div>

              <div>
                <span>Email</span>
                <a href="mailto:info@anantenterprises.com">
                  info@anantenterprises.com
                </a>
              </div>

            </div>


            <div className="contact-detail">

              <div className="contact-icon">
                ☎
              </div>

              <div>
                <span>Phone</span>
                <a href="tel:+919876543210">
                  +91 98765 43210
                </a>
              </div>

            </div>


            <div className="contact-detail">

              <div className="contact-icon">
                ◎
              </div>

              <div>
                <span>Office</span>
                <p>
                  Gurugram, Haryana
                  <br />
                  India
                </p>
              </div>

            </div>

          </div>


          {/* SOCIAL */}

          <div className="contact-social">

            <span>FOLLOW OUR WORK</span>

            <div className="social-links">

              <a href="#" aria-label="Instagram">
                IG
              </a>

              <a href="#" aria-label="LinkedIn">
                IN
              </a>

              <a href="#" aria-label="Facebook">
                FB
              </a>

            </div>

          </div>

        </div>


        {/* RIGHT SIDE FORM */}

        <div className="contact-form-wrapper">

          <div className="form-heading">

            <span>PROJECT ENQUIRY</span>

            <h3>
              Tell us about
              <strong> your project.</strong>
            </h3>

          </div>


          <form onSubmit={handleSubmit}>

            <div className="form-row">

              <div className="form-group">

                <label>Your Name</label>

                <input
                  type="text"
                  name="name"
                  placeholder="Enter your name"
                  value={formData.name}
                  onChange={handleChange}
                  required
                />

              </div>


              <div className="form-group">

                <label>Email Address</label>

                <input
                  type="email"
                  name="email"
                  placeholder="Enter your email"
                  value={formData.email}
                  onChange={handleChange}
                  required
                />

              </div>

            </div>


            <div className="form-row">

              <div className="form-group">

                <label>Phone Number</label>

                <input
                  type="tel"
                  name="phone"
                  placeholder="Enter phone number"
                  value={formData.phone}
                  onChange={handleChange}
                  required
                />

              </div>


              <div className="form-group">

                <label>Required Service</label>

                <select
                  name="service"
                  value={formData.service}
                  onChange={handleChange}
                  required
                >

                  <option value="">
                    Select a service
                  </option>

                  <option value="Aluminium">
                    Aluminium Solutions
                  </option>

                  <option value="Glass">
                    Glass Solutions
                  </option>

                  <option value="Facade">
                    Facade Solutions
                  </option>

                  <option value="Interior">
                    Interior Solutions
                  </option>

                  <option value="Other">
                    Other Requirement
                  </option>

                </select>

              </div>

            </div>


            <div className="form-group">

              <label>Project Details</label>

              <textarea
                name="message"
                rows="6"
                placeholder="Tell us a little about your project..."
                value={formData.message}
                onChange={handleChange}
                required
              ></textarea>

            </div>


            <div className="form-bottom">

              <p>
                By submitting this form, you agree to be
                contacted regarding your enquiry.
              </p>

              <button type="submit">
                Send Enquiry
                <span>↗</span>
              </button>

            </div>

          </form>

        </div>

      </section>


      {/* ================= SERVICE STRIP ================= */}

      <section className="contact-services">

        <div className="contact-services-heading">

          <span>WHAT HAPPENS NEXT</span>

          <h2>
            Simple process.
            <strong> Clear communication.</strong>
          </h2>

        </div>


        <div className="contact-process">

          <div className="process-item">

            <span>01</span>

            <h3>Share your requirement</h3>

            <p>
              Tell us about your project, timeline and
              requirements.
            </p>

          </div>


          <div className="process-item">

            <span>02</span>

            <h3>We understand & plan</h3>

            <p>
              Our team reviews your requirement and
              recommends the right approach.
            </p>

          </div>


          <div className="process-item">

            <span>03</span>

            <h3>Let's make it happen</h3>

            <p>
              Once everything is aligned, our team moves
              towards execution.
            </p>

          </div>

        </div>

      </section>


      {/* ================= CTA ================= */}

      <section className="contact-cta">

        <div>

          <span>READY WHEN YOU ARE</span>

          <h2>
            Have a project
            <strong> in mind?</strong>
          </h2>

        </div>

        <a href="tel:+919876543210">
          Call Our Team
          <span>↗</span>
        </a>

      </section>

    </main>
  );
}

export default Contact;