import { Routes, Route } from "react-router-dom";

import PublicLayout from "./layouts/PublicLayout";

import Home from "./pages/Home/Home";
import About from "./pages/About/About";
import Products from "./pages/Products/Products";
import ProductDetails from "./pages/Products/ProductDetails";
import Services from "./pages/Services/Services";
import Projects from "./pages/Projects/Projects";
import Gallery from "./pages/Gallery/Gallery";
import Contact from "./pages/Contact/Contact";

import Auth from "./pages/Auth/Auth";
import Admin from "./pages/Admin/Admin";

import ProtectedRoute from "./Components/ProtectedRoute/ProtectedRoute";

function App() {
  return (
    <Routes>

      {/* ================= PUBLIC WEBSITE ================= */}

      <Route element={<PublicLayout />}>

        <Route path="/" element={<Home />} />

        <Route path="/about" element={<About />} />

        <Route path="/products" element={<Products />} />

        <Route
          path="/products/:slug"
          element={<ProductDetails />}
        />

        <Route path="/services" element={<Services />} />

        <Route path="/projects" element={<Projects />} />

        <Route path="/gallery" element={<Gallery />} />

        <Route path="/contact" element={<Contact />} />

      </Route>


      {/* ================= AUTH ================= */}

      <Route path="/auth" element={<Auth />} />


      {/* ================= ADMIN ================= */}

      <Route
        path="/admin"
        element={
          <ProtectedRoute>
            <Admin />
          </ProtectedRoute>
        }
      />


      {/* ================= 404 ================= */}

      <Route
        path="*"
        element={
          <div
            style={{
              minHeight: "100vh",
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
              flexDirection: "column",
              gap: "10px",
              fontFamily: "Arial",
            }}
          >
            <h1>404</h1>
            <p>Page Not Found</p>
          </div>
        }
      />

    </Routes>
  );
}

export default App;