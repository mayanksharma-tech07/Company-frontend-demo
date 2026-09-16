import React from "react";
import { Link } from "react-router-dom";
import ProductCard from "../../Components/ProductCard/ProductCard";
import "./Products.css";

function Products() {

  const products = [
    {
      id: 1,
      slug: "sliding-aluminium-window",
      name: "Sliding Aluminium Window",
      category: "Windows",
      type: "SLIDING SYSTEM",
      image: "https://images.unsplash.com/photo-1600607687939-ce8a6c25118c?auto=format&fit=crop&w=900&q=80",
      description: "Elegant sliding aluminium window designed for modern residential and commercial spaces."
    },
    {
      id: 2,
      slug: "premium-glass-door",
      name: "Premium Glass Door",
      category: "Doors",
      type: "GLASS SYSTEM",
      image: "https://images.unsplash.com/photo-1600566753086-00f18fb6b3ea?auto=format&fit=crop&w=900&q=80",
      description: "Premium glass door system combining clean design, durability and natural light."
    },
    {
      id: 3,
      slug: "modern-facade-system",
      name: "Modern Facade System",
      category: "Facade",
      type: "ARCHITECTURAL SYSTEM",
      image: "https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?auto=format&fit=crop&w=900&q=80",
      description: "Contemporary facade solution created for visually striking architectural projects."
    },
    {
      id: 4,
      slug: "office-partition",
      name: "Office Glass Partition",
      category: "Partitions",
      type: "INTERIOR SYSTEM",
      image: "https://images.unsplash.com/photo-1497366811353-6870744d04b2?auto=format&fit=crop&w=900&q=80",
      description: "Minimal glass partition system for premium and productive office environments."
    }
  ];

  return (
    <section className="products-page">

      <div className="products-header">
        <span>OUR PRODUCTS</span>

        <h1>
          Designed for
          <strong> modern spaces.</strong>
        </h1>

        <p>
          Explore our collection of aluminium, glass and architectural
          systems designed for modern living and commercial spaces.
        </p>
      </div>

      <div className="products-grid">

        {products.map((product) => (
          <Link
            key={product.id}
            to={`/products/${product.slug}`}
            className="product-link"
          >
            <ProductCard product={product} />
          </Link>
        ))}

      </div>

    </section>
  );
}

export default Products;