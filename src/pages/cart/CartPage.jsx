
import React, { useContext } from "react";
import { CartContext } from "../../context/CartContext";
import "./cart.css";

const CartPage = () => {
  const { cart, removeFromCart, updateQuantity } = useContext(CartContext);

  const total = cart.reduce((sum, item) => sum + item.price * item.quantity, 0);

  return (
    <div className="cart-container">
      <div className="cart-header">
        <svg
          className="header-icon"
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
        <h2 className="header-title">Your Shopping Cart</h2>
      </div>
      {cart.length === 0 ? (
        <div className="empty-cart">
          <svg
            className="empty-cart-icon"
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
          <p className="empty-cart-text">Your cart is empty.</p>
        </div>
      ) : (
        <div className="cart-content">
          <div className="cart-headings">
            <span className="heading-product">Product</span>
            <span className="heading-price">Price</span>
            <span className="heading-quantity">Quantity</span>
            <span className="heading-actions">Actions</span>
          </div>
          <ul className="cart-items">
            {cart.map((item) => (
              <li key={item.id} className="cart-item">
                <div className="item-product">
                  <img
                    src={item.image}
                    alt={item.name}
                    className="item-image"
                    onError={(e) => (e.target.src = "https://via.placeholder.com/150?text=Image+Not+Found")}
                  />
                  <span className="item-name">{item.name}</span>
                </div>
                <span className="item-price">
                  Ksh {item.price.toLocaleString("en-KE", { minimumFractionDigits: 2 })}
                </span>
                <input
                  type="number"
                  min="1"
                  value={item.quantity}
                  onChange={(e) =>
                    updateQuantity(item.id, parseInt(e.target.value) || 1)
                  }
                  className="item-quantity"
                />
                <button
                  onClick={() => removeFromCart(item.id)}
                  className="remove-button"
                >
                  <svg
                    className="remove-icon"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth="2"
                      d="M6 18L18 6M6 6l12 12"
                    />
                  </svg>
                  Remove
                </button>
              </li>
            ))}
          </ul>
          <div className="cart-footer">
            <h3 className="total-text">
              Total: Ksh {total.toLocaleString("en-KE", { minimumFractionDigits: 2 })}
            </h3>
            <button
              className="checkout-button"
              onClick={() => alert("Proceeding to checkout...")}
            >
              <svg
                className="checkout-icon"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M5 13l4 4L19 7"
                />
              </svg>
              Checkout
            </button>
          </div>
        </div>
      )}
    </div>
  );
};

export default CartPage;