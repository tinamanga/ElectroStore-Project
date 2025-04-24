import React from "react";
import Cart from "../components/Cart";
import { useNavigate } from "react-router-dom";
import "../assets/CartPage.css";

const CartPage = ({ cartItems, onRemoveItem, onQuantityChange, onClearCart }) => {
  const navigate = useNavigate();

  const handleCheckout = async () => {
    if (cartItems.length === 0) {
      alert("🛒 Your cart is empty!");
      return;
    }

    // Store cart to localStorage in case it's not already
    localStorage.setItem("cart", JSON.stringify(cartItems));

    // Simulate logged-in user ID
    const userId = 1;

    // Fetch product data from JSON DB
    const res = await fetch("http://localhost:5000/products");
    const products = await res.json();

    // Prepare order items and calculate total
    const orderItems = [];
    let totalAmount = 0;

    cartItems.forEach(item => {
      const product = products.find(p => p.id === item.productId);
      if (product) {
        orderItems.push({
          productId: product.id,
          quantity: item.quantity
        });
        totalAmount += product.price * item.quantity;
      }
    });

    // Build the order object
    const order = {
      orderId: Date.now(),
      userId,
      items: orderItems,
      totalAmount,
      status: "processing",
      orderDate: new Date().toISOString().split("T")[0]
    };

    // Send order to backend
    await fetch("http://localhost:5000/orders", {
      method: "POST",
      headers: {
        "Content-Type": "application/json"
      },
      body: JSON.stringify(order)
    });

    // Clear cart from state and storage
    onClearCart();
    localStorage.removeItem("cart");

    alert("✅ Order placed successfully!");
    navigate("/");
  };

  return (
    <div className="cart-page">
      <Cart
        cartItems={cartItems}
        onRemoveItem={onRemoveItem}
        onQuantityChange={onQuantityChange}
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
