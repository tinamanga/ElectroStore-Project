


import React, { useContext, useState } from "react";
import { CartContext } from "../../context/CartContext";
import "./checkout.css";

const Checkout = () => {
  const { cart } = useContext(CartContext);
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    address: "",
    city: "",
    postalCode: "",
    shippingAddress: "",
    shippingCity: "",
    shippingPostalCode: "",
  });
  const [errors, setErrors] = useState({});

  const total = cart.reduce((sum, item) => sum + item.price * item.quantity, 0);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
    setErrors({ ...errors, [name]: "" });
  };

  const validateForm = () => {
    const newErrors = {};
    if (!formData.name.trim()) newErrors.name = "Name is required";
    if (!formData.email.trim()) newErrors.email = "Email is required";
    else if (!/\S+@\S+\.\S+/.test(formData.email)) newErrors.email = "Invalid email format";
    if (!formData.address.trim()) newErrors.address = "Address is required";
    if (!formData.city.trim()) newErrors.city = "City is required";
    if (!formData.postalCode.trim()) newErrors.postalCode = "Postal code is required";
    if (!formData.shippingAddress.trim()) newErrors.shippingAddress = "Shipping address is required";
    if (!formData.shippingCity.trim()) newErrors.shippingCity = "Shipping city is required";
    if (!formData.shippingPostalCode.trim()) newErrors.shippingPostalCode = "Shipping postal code is required";
    return newErrors;
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const formErrors = validateForm();
    if (Object.keys(formErrors).length > 0) {
      setErrors(formErrors);
      return;
    }
    alert("Order placed successfully!");
    // Optionally clear cart or redirect
  };

  return (
    <div className="checkout-container">
      <div className="checkout-header">
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
            d="M5 13l4 4L19 7"
          />
        </svg>
        <h2 className="header-title">Checkout</h2>
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
        <div className="checkout-content">
          <form className="checkout-form" onSubmit={handleSubmit}>
            <h3 className="section-title">Billing Information</h3>
            <div className="form-group">
              <label htmlFor="name">Full Name</label>
              <input
                type="text"
                id="name"
                name="name"
                value={formData.name}
                onChange={handleChange}
                className="form-input"
              />
              {errors.name && <span className="error-text">{errors.name}</span>}
            </div>
            <div className="form-group">
              <label htmlFor="email">Email</label>
              <input
                type="email"
                id="email"
                name="email"
                value={formData.email}
                onChange={handleChange}
                className="form-input"
              />
              {errors.email && <span className="error-text">{errors.email}</span>}
            </div>
            <div className="form-group">
              <label htmlFor="address">Address</label>
              <input
                type="text"
                id="address"
                name="address"
                value={formData.address}
                onChange={handleChange}
                className="form-input"
              />
              {errors.address && <span className="error-text">{errors.address}</span>}
            </div>
            <div className="form-group">
              <label htmlFor="city">City</label>
              <input
                type="text"
                id="city"
                name="city"
                value={formData.city}
                onChange={handleChange}
                className="form-input"
              />
              {errors.city && <span className="error-text">{errors.city}</span>}
            </div>
            <div className="form-group">
              <label htmlFor="postalCode">Postal Code</label>
              <input
                type="text"
                id="postalCode"
                name="postalCode"
                value={formData.postalCode}
                onChange={handleChange}
                className="form-input"
              />
              {errors.postalCode && <span className="error-text">{errors.postalCode}</span>}
            </div>
            <h3 className="section-title">Shipping Information</h3>
            <div className="form-group">
              <label htmlFor="shippingAddress">Shipping Address</label>
              <input
                type="text"
                id="shippingAddress"
                name="shippingAddress"
                value={formData.shippingAddress}
                onChange={handleChange}
                className="form-input"
              />
              {errors.shippingAddress && <span className="error-text">{errors.shippingAddress}</span>}
            </div>
            <div className="form-group">
              <label htmlFor="shippingCity">Shipping City</label>
              <input
                type="text"
                id="shippingCity"
                name="shippingCity"
                value={formData.shippingCity}
                onChange={handleChange}
                className="form-input"
              />
              {errors.shippingCity && <span className="error-text">{errors.shippingCity}</span>}
            </div>
            <div className="form-group">
              <label htmlFor="shippingPostalCode">Shipping Postal Code</label>
              <input
                type="text"
                id="shippingPostalCode"
                name="shippingPostalCode"
                value={formData.shippingPostalCode}
                onChange={handleChange}
                className="form-input"
              />
              {errors.shippingPostalCode && <span className="error-text">{errors.shippingPostalCode}</span>}
            </div>
          </form>
          <div className="cart-summary">
            <h3 className="section-title">Order Summary</h3>
            <ul className="summary-items">
              {cart.map((item) => (
                <li key={item.id} className="summary-item">
                  <img
                    src={item.image}
                    alt={item.name}
                    className="summary-image"
                    onError={(e) => (e.target.src = "https://via.placeholder.com/150?text=Image+Not+Found")}
                  />
                  <div className="summary-details">
                    <span className="item-name">{item.name}</span>
                    <span className="item-quantity">Qty: {item.quantity}</span>
                    <span className="item-price">
                      Ksh {(item.price * item.quantity).toLocaleString("en-KE", { minimumFractionDigits: 2 })}
                    </span>
                  </div>
                </li>
              ))}
            </ul>
            <div className="summary-total">
              <span className="total-text">Total:</span>
              <span className="total-amount">
                Ksh {total.toLocaleString("en-KE", { minimumFractionDigits: 2 })}
              </span>
            </div>
            <button className="place-order-button" onClick={handleSubmit}>
              <svg
                className="place-order-icon"
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
              Place Order
            </button>
          </div>
        </div>
      )}
    </div>
  );
};

export default Checkout;
