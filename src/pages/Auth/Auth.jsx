import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import "./Auth.css";

function Auth() {
  const navigate = useNavigate();

  const [showPassword, setShowPassword] = useState(false);

  const [formData, setFormData] = useState({
    email: "",
    password: "",
  });

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const handleLogin = (e) => {
    e.preventDefault();

    if (!formData.email || !formData.password) {
      toast.error("Please enter email and password.");
      return;
    }

    // Temporary login state
    localStorage.setItem("isLoggedIn", "true");

    toast.success("Login successful!");

    setTimeout(() => {
      navigate("/admin");
    }, 900);
  };

  return (
    <div className="auth-page">

      {/* Background Glow */}
      <div className="auth-glow auth-glow-one"></div>
      <div className="auth-glow auth-glow-two"></div>

      <div className="auth-container">

        {/* Left Content */}
        <div className="auth-intro">

          <div className="auth-mini-logo">
            AE
          </div>

          <span className="auth-tag">
            ANANT ENTERPRISES
          </span>

          <h1>
            Built for
            <br />
            <span>better spaces.</span>
          </h1>

          <p>
            Access your Anant Enterprises workspace and manage
            your projects, services and business information from
            one secure place.
          </p>

          <div className="auth-points">

            <div>
              <span>01</span>
              <p>Premium Aluminium Solutions</p>
            </div>

            <div>
              <span>02</span>
              <p>Modern Architectural Systems</p>
            </div>

            <div>
              <span>03</span>
              <p>Professional Project Management</p>
            </div>

          </div>

        </div>

        {/* Login Card */}
        <div className="auth-card">

          <div className="auth-card-top">
            <span>WELCOME BACK</span>

            <div className="auth-status">
              <i></i>
              Secure Access
            </div>
          </div>

          <h2>Sign in to your account</h2>

          <p className="auth-subtitle">
            Enter your details to continue to the admin area.
          </p>

          <form onSubmit={handleLogin}>

            {/* Email */}
            <div className="auth-field">

              <label>Email Address</label>

              <div className="auth-input-box">
                <span className="input-icon">✉</span>

                <input
                  type="email"
                  name="email"
                  placeholder="Enter your email"
                  value={formData.email}
                  onChange={handleChange}
                />
              </div>

            </div>

            {/* Password */}
            <div className="auth-field">

              <div className="password-label">
                <label>Password</label>
                <span>Forgot password?</span>
              </div>

              <div className="auth-input-box">

                <span className="input-icon">⌁</span>

                <input
                  type={showPassword ? "text" : "password"}
                  name="password"
                  placeholder="Enter your password"
                  value={formData.password}
                  onChange={handleChange}
                />

                <button
                  type="button"
                  className="password-toggle"
                  onClick={() => setShowPassword(!showPassword)}
                >
                  {showPassword ? "Hide" : "Show"}
                </button>

              </div>

            </div>

            {/* Remember */}
            <div className="auth-options">

              <label className="remember-box">
                <input type="checkbox" />
                <span>Remember me</span>
              </label>

              <span className="secure-text">
                🔒 Secure login
              </span>

            </div>

            <button type="submit" className="auth-submit">
              Sign In
              <span>↗</span>
            </button>

          </form>

          <div className="auth-divider">
            <span>ANANT ENTERPRISES</span>
          </div>

          <p className="auth-bottom">
            Protected workspace for authorised users only.
          </p>

        </div>

      </div>

      <ToastContainer
        position="top-right"
        autoClose={2200}
        hideProgressBar={false}
        newestOnTop
        closeOnClick
        pauseOnHover
        theme="light"
      />

    </div>
  );
}

export default Auth;