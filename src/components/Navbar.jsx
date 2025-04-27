import React from "react";
import { Link } from "react-router-dom";
import "./Navbar.css";

const Navbar = ({ cartCount }) => {
  return (
    <nav className="navbar">
      <div className="navbar-logo">
        <Link to="/" className="navbar-link">
          ElectroStore
        </Link>
      </div>
      <div className="navbar-links">
        <Link to="/" className="navbar-link homeLink">
          Home
        </Link>
        <Link to="/cart" className="navbar-link cart-link">
          🛒 Cart{cartCount > 0 && <span className="cart-badge">{cartCount}</span>}
        </Link>
      </div>
    </nav>
  );
};

export default Navbar;
