<<<<<<< HEAD
import PropTypes from 'prop-types';

function ProductCard({ name, image, category, price }) {
  return (
    <div className="border rounded-xl p-4 shadow-md bg-white">
      <img src={image} alt={name} className="w-full h-40 object-cover rounded-md mb-2" />
      <h2 className="font-semibold text-lg">{name}</h2>
      <p className="text-sm text-gray-600">{category}</p>
      <p className="text-green-600 font-bold">${price.toFixed(2)}</p>
    </div>
  );
}

ProductCard.propTypes = {
  name: PropTypes.string.isRequired,
  image: PropTypes.string.isRequired,
  category: PropTypes.string.isRequired,
  price: PropTypes.number.isRequired,
=======
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
>>>>>>> 13b3757482241d4c89707b68f89f31c04c221bb9
};

export default ProductCard;
