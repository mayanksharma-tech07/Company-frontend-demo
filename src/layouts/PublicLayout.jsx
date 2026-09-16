import React from "react";
import { Outlet } from "react-router-dom";

import Navbar from "../Components/Navbar/Navbar";
import Footer from "../Components/Footar/Footar";

import "./PublicLayout.css";

function PublicLayout() {
  return (
    <div className="public-layout">

      {/* Navbar */}
      <Navbar />

      {/* Every routed page will appear here */}
      <main className="public-content">
        <Outlet />
      </main>

      {/* Footer */}
      <Footer />

    </div>
  );
}

export default PublicLayout;