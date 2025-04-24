import React from "react";
import "../assets/Cart.css";

const Cart = ({ cartItems, onRemoveItem, onQuantityChange }) => {
  const getTotalPrice = () =>
    cartItems.reduce((total, item) => total + item.price * item.quantity, 0);

 

  return (
    <div className="cart-container">
      <h2>Your Shopping Cart</h2>
      {cartItems.length === 0 ? (
        <p className="empty">Your cart is empty.</p>
      ) : (
        <>
          <div className="cart-list">
            {cartItems.map((item) => (
              <div key={item.id} className="cart-item">
                <img src={item.image} alt={item.name} />
                <div className="cart-info">
                  <h4>{item.name}</h4>
                  <p>Ksh.{item.price.toFixed(2)}</p>
                  <div className="cart-controls">
                    <label>Qty:</label>
                    <input
                      type="number"
                      value={item.quantity}
                      min="1"
                      onChange={(e) => {
                        const value = parseInt(e.target.value);
                        if (!isNaN(value) && value > 0) {
                          onQuantityChange(item.id, value);
                        }
                      }}
                    />
                    <button onClick={() => onRemoveItem(item.id)}>
                      Remove
                    </button>
                  </div>
                </div>
              </div>
            ))}
          </div>

          <div className="cart-summary">
            <h3>Total: Ksh.{getTotalPrice().toFixed(2)}</h3>
          </div>
        </>
      )}
    </div>
  );
};

export default Cart;
