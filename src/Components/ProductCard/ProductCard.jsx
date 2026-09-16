import React from "react";
import { Link } from "react-router-dom";
import "./ProductCard.css";

function ProductCard({ product }) {
  return (
    <article className="product-card">

      <div className="product-image-wrap">

        <img
          src={product.image}
          alt={product.name}
          className="product-image"
        />

        {product.category && (
          <span className="product-category">
            {product.category}
          </span>
        )}

        <div className="product-number">
          {String(product.id).padStart(2, "0")}
        </div>

      </div>

      <div className="product-content">

        <span className="product-type">
          {product.type || "ARCHITECTURAL SYSTEM"}
        </span>

        <h3>{product.name}</h3>

        <p>
          {product.description ||
            "Premium architectural solution designed for modern spaces, durability and refined performance."}
        </p>

        <div className="product-card-bottom">

          <div className="product-spec">
            <span>FEATURE</span>
            <strong>
              {product.feature || "Premium Finish"}
            </strong>
          </div>

          <Link
            to={`/products/${product.id}`}
            className="product-view-btn"
          >
            View Details
            <span>↗</span>
          </Link>

        </div>

      </div>

    </article>
  );
}

export default ProductCard;