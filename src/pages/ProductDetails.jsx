import React, { useEffect, useState } from "react";
import { useParams, Link } from "react-router-dom";
import Cart from "../components/Cart";

const ProductDetails = () => {

  const { id } = useParams();
  const [product, setProduct] = useState(null);
  const [related, setRelated] = useState([]);
  const [cart, setCart] = useState(() => {
    // Load from localStorage on initial mount
    const savedCart = localStorage.getItem("cart");
    return savedCart ? JSON.parse(savedCart) : [];
  });

  useEffect(() => {
    localStorage.setItem("cart", JSON.stringify(cart));
    const fetchProduct = async () => {
      const response = await fetch("/db.json");
      const data = await response.json();
      const found = data.products.find((p) => p.id.toString() === id);
      setProduct(found);

      const relatedItems = data.products
        .filter((p) => p.id.toString() !== id)
        .slice(0, 3);
      setRelated(relatedItems);
    };

    fetchProduct();
  },cart [id]);

  const handleAddToCart = () => {
    setCart((prevCart) => {
      const existing = prevCart.find((item) => item.id === product.id);
      if (existing) {
        return prevCart.map((item) =>
          item.id === product.id
            ? { ...item, quantity: item.quantity + 1 }
            : item
        );
      }
      return [...prevCart, { ...product, quantity: 1 }];
    });
  };

  const handleRemoveItem = (itemId) => {
    setCart((prevCart) => prevCart.filter((item) => item.id !== itemId));
  };

  const handleQuantityChange = (itemId, newQty) => {
    setCart((prevCart) =>
      prevCart.map((item) =>
        item.id === itemId ? { ...item, quantity: newQty } : item
      )
    );
  };

  if (!product) return <div>Loading...</div>;

  return (
    <div className="product-details-container">
      <img
        src={product.image}
        alt={product.name}
        className="product-details-image"
      />
      <div className="product-details-info">
        <h2>{product.name}</h2>
        <p className="product-details-price">Ksh.{product.price.toFixed(2)}</p>
        <p>{product.description || "No description available."}</p>
        <button onClick={handleAddToCart}>Add to Cart</button>
      </div>

      <Link to="/" className="back-button">
        ← Back to Products
      </Link>

      {/* Show Cart */}
      <div style={{ marginTop: "40px" }}>
        <Cart
          cartItems={cart}
          onRemoveItem={handleRemoveItem}
          onQuantityChange={handleQuantityChange}
        />
      </div>

      {/* Related products */}
      {/* <h3>Related Products</h3>
      <div className="related-products">
        {related.map((item) => (
          <Link
            to={`/products/${item.id}`}
            key={item.id}
            className="related-card"
          >
            <img src={item.image} alt={item.name} />
            <p>{item.name}</p>
            <span>${item.price.toFixed(2)}</span>
          </Link>
        ))}
      </div> */}
    </div>
  );
};

export default ProductDetails;
