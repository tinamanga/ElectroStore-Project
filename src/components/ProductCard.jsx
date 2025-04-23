import React, { useContext } from "react";
import { CartContext } from "../context/CartContext";
import { Link } from "react-router-dom";

const ProductCard = ({ product }) => {
  const { addToCart } = useContext(CartContext);

  const handleAddToCart = () => {
    addToCart(product);
  };

  return (
    <div className="product-card" style={styles.card}>
      <Link to={`/product/${product.id}`} style={styles.link}>
        <img src={product.image} alt={product.name} style={styles.image} />
        <h3>{product.name}</h3>
        <p>Ksh {product.price}</p>
      </Link>
      <button onClick={handleAddToCart} style={styles.button}>
        Add to Cart
      </button>
    </div>
  );
};

const styles = {
  card: {
    border: "1px solid #ccc",
    borderRadius: "10px",
    padding: "16px",
    margin: "10px",
    textAlign: "center",
    width: "200px",
    boxShadow: "0 2px 5px rgba(0,0,0,0.1)"
  },
  link: {
    textDecoration: "none",
    color: "inherit"
  },
  image: {
    width: "100%",
    height: "150px",
    objectFit: "cover"
  },
  button: {
    marginTop: "10px",
    padding: "10px 20px",
    backgroundColor: "#007bff",
    color: "white",
    border: "none",
    borderRadius: "5px",
    cursor: "pointer"
  }
};

export default ProductCard;
