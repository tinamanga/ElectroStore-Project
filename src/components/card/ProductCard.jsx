
import React, { useContext, useState, useEffect } from "react";
import { Link } from "react-router-dom";
import { CartContext } from "../../context/CartContext";
import "./card.css";

const ProductCard = ({ product }) => {
  const { addToCart } = useContext(CartContext);
  const [isLoading, setIsLoading] = useState(true);
  const [hasError, setHasError] = useState(false);
  const [rating, setRating] = useState(0);

  
  const assignCategory = (name) => {
    const lowerName = name.toLowerCase();
    if (lowerName.includes("phone")) return "Phone";
    if (lowerName.includes("laptop")) return "Laptop";
    if (lowerName.includes("tablet")) return "Tablet";
    if (
      lowerName.includes("watch") ||
      lowerName.includes("earbuds") ||
      lowerName.includes("speaker") ||
      lowerName.includes("mouse") ||
      lowerName.includes("keyboard") ||
      lowerName.includes("power bank") ||
      lowerName.includes("charger") ||
      lowerName.includes("stand") ||
      lowerName.includes("webcam") ||
      lowerName.includes("flash drive") ||
      lowerName.includes("hard drive")
    )
      return "Accessories";
    if (lowerName.includes("tv")) return "TV";
    if (lowerName.includes("console")) return "Gaming";
    if (lowerName.includes("vr")) return "VR";
    if (lowerName.includes("drone")) return "Drone";
    if (lowerName.includes("camera")) return "Camera";
    if (lowerName.includes("router")) return "Networking";
    return "Other";
  };

  const category = assignCategory(product.name);
  const isOnSale = product.price < 10000; 

  return (
    <div className="card">
      {/* Badges */}
      <span className="badge category-badge">{category}</span>
      {isOnSale && <span className="badge sale-badge">Sale</span>}
      <Link to={`/product/${product.id}`} className="card-link">
        {/* Image Container */}
        <div className="image-container">
          {isLoading && (
            <div className="loading-spinner">
              <svg
                className="spinner-icon"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M4 16l4.586-4.586a2 2 0 012.828 0L16 16m-2-2l1.586-1.586a2 2 0 012.828 0L20 14m-6-6h.01M6 20h12a2 2 0 002-2V6a2 2 0 00-2-2H6a2 2 0 00-2 2v12a2 2 0 002 2z"
                />
              </svg>
            </div>
          )}
          <img
            src={product.image}
            alt={product.name}
            className={`product-image ${isLoading || hasError ? "hidden" : ""}`}
            onLoad={() => setIsLoading(false)}
            onError={(e) => {
              setIsLoading(false);
              setHasError(true);
              e.target.src = "https://placehold.co/150x150?text=Image+Not+Found";
            }}
          />
          {/* Device Icon */}
          <div className="device-icon">
            {category === "Phone" && (
              <svg
                className="icon"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M12 18h.01M8 21h8a2 2 0 002-2V5a2 2 0 00-2-2H8a2 2 0 00-2 2v14a2 2 0 002 2z"
                />
              </svg>
            )}
            {category === "Laptop" && (
              <svg
                className="icon"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M9.75 17L9 20l-1 1h8l-1-1-.75-3M3 13h18M5 17h14a2 2 0 002-2V5a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"
                />
              </svg>
            )}
            {category === "Accessories" && (
              <svg
                className="icon"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M7 7h10m0 0v10m0-10l-4 4m4-4H7"
                />
              </svg>
            )}
            {category === "VR" && (
              <svg
                className="icon"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M15 12a3 3 0 11-6 0 3 3 0 016 0z"
                />
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M2.458 12C3.732 7.943 7.523 5 12 5c4.478 0 8.268 2.943 9.542 7-1.274 4.057-5.064 7-9.542 7-4.477 0-8.268-2.943-9.542-7z"
                />
              </svg>
            )}
            {category === "Gaming" && (
              <svg
                className="icon"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M14.828 14.828a4 4 0 01-5.656 0M9 10h.01M15 10h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z"
                />
              </svg>
            )}
            {category === "TV" && (
              <svg
                className="icon"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M9.75 17L9 20l-1 1h8l-1-1-.75-3M3 13h18M5 17h14a2 2 0 002-2V5a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"
                />
              </svg>
            )}
          </div>
        </div>
        {/* Product Info */}
        <h3 className="product-title">{product.name}</h3>
        <p className="product-price">
          Ksh {product.price.toLocaleString("en-KE", { minimumFractionDigits: 2 })}
        </p>
        <p className="stock-status">
          {stock > 10 ? "In Stock" : stock > 0 ? "Low Stock" : "Out of Stock"}
        </p>
        <div className="rating">
          {[...Array(5)].map((_, i) => (
            <svg
              key={i}
              className={`star ${i < rating ? "filled" : ""}`}
              fill="currentColor"
              viewBox="0 0 20 20"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
            </svg>
          ))}
          <span className="rating-text">
            ({rating || "No reviews"})
          </span>
        </div>
      </Link>
      <button
        onClick={() => addToCart(product)}
        className="add-to-cart"
      >
        <svg
          className="cart-icon"
          fill="none"
          stroke="currentColor"
          viewBox="0 0 24 24"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth="2"
            d="M3 3h2l.4 2M7 13h10l4-8H5.4M7 13L5.4 5M7 13l-2.293 2.293c-.63.63-.184 1.707.707 1.707H17m0 0a2 2 0 100 4 2 2 0 000-4zm-8 2a2 2 0 11-4 0 2 2 0 014 0z"
          />
        </svg>
        Add to Cart
      </button>
    </div>
  );
};

export default ProductCard;
