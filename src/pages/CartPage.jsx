import React, { useEffect, useState } from "react";
import Cart from "../components/Cart";
import { useNavigate, Link } from "react-router-dom";
import "../assets/CartPage.css";

const CartPage = () => {
  const navigate = useNavigate();
  const [cartItems, setCartItems] = useState([]);

  // Load cart items from localStorage on component mount
  useEffect(() => {
    const savedCart = JSON.parse(localStorage.getItem("cart")) || [];
    setCartItems(savedCart);
  }, []);

  const updateLocalStorage = (items) => {
    localStorage.setItem("cart", JSON.stringify(items));
  };

  const handleRemoveItem = (productId) => {
    const updated = cartItems.filter(item => item.id !== productId);
    setCartItems(updated);
    updateLocalStorage(updated);
  };

  const handleQuantityChange = (productId, quantity) => {
    const updated = cartItems.map(item =>
      item.id === productId ? { ...item, quantity } : item
    );
    setCartItems(updated);
    updateLocalStorage(updated);
  };

  const handleClearCart = () => {
    setCartItems([]);
    localStorage.removeItem("cart");
  };

  const handleCheckout = async () => {
    if (cartItems.length === 0) {
      alert("🛒 Your cart is empty!");
      return;
    }

    const userId = 1;

    const res = await fetch("http://localhost:5000/products");
    const products = await res.json();

    const orderItems = [];
    let totalAmount = 0;

    cartItems.forEach(item => {
      const product = products.find(p => p.id === item.id);
      if (product) {
        orderItems.push({
          productId: product.id,
          quantity: item.quantity
        });
        totalAmount += product.price * item.quantity;
      }
    });

    const order = {
      orderId: Date.now(),
      userId,
      items: orderItems,
      totalAmount,
      status: "processing",
      orderDate: new Date().toLocaleDateString("en-CA")
    };

    await fetch("http://localhost:5000/orders", {
      method: "POST",
      headers: {
        "Content-Type": "application/json"
      },
      body: JSON.stringify(order)
    });

    handleClearCart();
    alert("✅ Order placed successfully!");
    navigate("/");
  };

  return (
    <div className="cart-page">
      <div className="cart-buttons">
        <Link to="/" className="continue-btn">← Continue Shopping</Link>
      </div>
      <Cart
        cartItems={cartItems}
        onRemoveItem={handleRemoveItem}
        onQuantityChange={handleQuantityChange}

      />

      {cartItems.length > 0 && (
        <div style={{ textAlign: "right", marginTop: "20px" }}>
          <button className="checkout-btn" onClick={handleCheckout}>
            Proceed to Checkout
          </button>
        </div>
      )}
    </div>
  );
};

export default CartPage;
