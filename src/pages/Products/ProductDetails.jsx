import React from "react";
import { Link, useParams } from "react-router-dom";
import "./ProductDetails.css";

function ProductDetails() {

  const { slug } = useParams();

  const products = [
    {
      id: 1,
      slug: "sliding-aluminium-window",
      name: "Sliding Aluminium Window",
      category: "Windows",
      type: "SLIDING SYSTEM",
      image:
        "https://images.unsplash.com/photo-1600607687939-ce8a6c25118c?auto=format&fit=crop&w=1200&q=80",
      description:
        "Elegant sliding aluminium window designed for modern residential and commercial spaces.",
      features: [
        "Slim aluminium profile",
        "Smooth sliding operation",
        "Excellent natural lighting",
        "Modern architectural appearance"
      ]
    },
    {
      id: 2,
      slug: "premium-glass-door",
      name: "Premium Glass Door",
      category: "Doors",
      type: "GLASS SYSTEM",
      image:
        "https://images.unsplash.com/photo-1600566753086-00f18fb6b3ea?auto=format&fit=crop&w=1200&q=80",
      description:
        "Premium glass door system combining clean design, durability and natural light.",
      features: [
        "Premium glass finish",
        "Minimal frame design",
        "Strong and durable system",
        "Suitable for modern interiors"
      ]
    },
    {
      id: 3,
      slug: "modern-facade-system",
      name: "Modern Facade System",
      category: "Facade",
      type: "ARCHITECTURAL SYSTEM",
      image:
        "https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?auto=format&fit=crop&w=1200&q=80",
      description:
        "Contemporary facade solution created for visually striking architectural projects.",
      features: [
        "Contemporary appearance",
        "Architectural flexibility",
        "Premium exterior finish",
        "Designed for commercial spaces"
      ]
    },
    {
      id: 4,
      slug: "office-partition",
      name: "Office Glass Partition",
      category: "Partitions",
      type: "INTERIOR SYSTEM",
      image:
        "https://images.unsplash.com/photo-1497366811353-6870744d04b2?auto=format&fit=crop&w=1200&q=80",
      description:
        "Minimal glass partition system for premium and productive office environments.",
      features: [
        "Clean office appearance",
        "Better space separation",
        "Natural light flow",
        "Modern interior solution"
      ]
    }
  ];

  const product = products.find((item) => item.slug === slug);

  if (!product) {
    return (
      <div className="product-not-found">
        <h2>Product Not Found</h2>
        <Link to="/products">Back to Products</Link>
      </div>
    );
  }

  return (
    <section className="product-details-page">

      <div className="product-details-image">
        <img src={product.image} alt={product.name} />
      </div>

      <div className="product-details-content">

        <span className="details-category">
          {product.category}
        </span>

        <small>{product.type}</small>

        <h1>{product.name}</h1>

        <p className="details-description">
          {product.description}
        </p>

        <div className="details-features">
          <h3>Key Features</h3>

          <ul>
            {product.features.map((feature, index) => (
              <li key={index}>{feature}</li>
            ))}
          </ul>
        </div>

        <Link to="/products" className="back-products">
          ← Back to Products
        </Link>

      </div>

    </section>
  );
}

export default ProductDetails;