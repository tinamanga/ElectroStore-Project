import React from "react";
import Cart from "../components/Cart";
import { useNavigate } from "react-router-dom";
import "../assets/CartPage.css"

const CartPage = ({ cartItems, onRemoveItem, onQuantityChange, onClearCart }) => {
  const navigate = useNavigate();

  const handleCheckout = () => {
    alert("✅ Checkout complete!");
    onClearCart();
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
