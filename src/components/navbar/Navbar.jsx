// import React from "react";
// import { Link } from "react-router-dom";

// const Navbar = () => {
//   return (
//     <nav style={styles.nav}>
//       <div style={styles.logo}>
//         <Link to="/" style={styles.link}>
//           🛒 ElectroStore
//         </Link>
//       </div>
//       <div style={styles.links}>
//         <Link to="/" style={styles.link}>
//           Home
//         </Link>
//         <Link to="/cart" style={styles.link}>
//           Cart
//         </Link>
//       </div>
//     </nav>
//   );
// };

// const styles = {
//   nav: {
//     display: "flex",
//     justifyContent: "space-between",
//     alignItems: "center",
//     padding: "1rem 2rem",
//     backgroundColor: "#007bff",
//     color: "#fff",
//     marginBottom: "20px",
//   },
//   logo: {
//     fontSize: "1.5rem",
//     fontWeight: "bold",
//   },
//   links: {
//     display: "flex",
//     gap: "1rem",
//   },
//   link: {
//     color: "#fff",
//     textDecoration: "none",
//     fontSize: "1rem",
//   },
// };

// export default Navbar;


// import React, { useState } from "react";
// import { Link } from "react-router-dom";

// const Navbar = () => {
//   const [isOpen, setIsOpen] = useState(false);

//   return (
//     <nav className="sticky top-0 z-50 bg-blue-600 text-white shadow-md">
//       <div className="container mx-auto flex justify-between items-center p-4">
//         <div className="text-2xl font-bold">
//           <Link to="/" className="flex items-center gap-2">
//             🛒 ElectroStore
//           </Link>
//         </div>
//         <div className="hidden md:flex gap-6">
//           <Link to="/" className="hover:text-blue-200 transition-colors">
//             Home
//           </Link>
//           <Link to="/cart" className="hover:text-blue-200 transition-colors">
//             Cart
//           </Link>
//         </div>
//         <button
//           className="md:hidden focus:outline-none"
//           onClick={() => setIsOpen(!isOpen)}
//           aria-label="Toggle menu"
//         >
//           <svg
//             className="w-6 h-6"
//             fill="none"
//             stroke="currentColor"
//             viewBox="0 0 24 24"
//             xmlns="http://www.w3.org/2000/svg"
//           >
//             <path
//               strokeLinecap="round"
//               strokeLinejoin="round"
//               strokeWidth="2"
//               d={isOpen ? "M6 18L18 6M6 6l12 12" : "M4 6h16M4 12h16M4 18h16"}
//             ></path>
//           </svg>
//         </button>
//       </div>
//       {isOpen && (
//         <div className="md:hidden bg-blue-700">
//           <Link
//             to="/"
//             className="block px-4 py-2 hover:bg-blue-800 transition-colors"
//             onClick={() => setIsOpen(false)}
//           >
//             Home
//           </Link>
//           <Link
//             to="/cart"
//             className="block px-4 py-2 hover:bg-blue-800 transition-colors"
//             onClick={() => setIsOpen(false)}
//           >
//             Cart
//           </Link>
//         </div>
//       )}
//     </nav>
//   );
// };

// export default Navbar;




import React, { useState, useContext } from "react";
import { Link } from "react-router-dom";
import { CartContext } from "../../context/CartContext";
import "./navbar.css";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const { cart } = useContext(CartContext);
  const itemCount = cart.reduce((sum, item) => sum + item.quantity, 0);

  return (
    <nav className="navbar">
      <div className="nav-container">
        <div className="logo-container">
          <svg
            className="logo-icon"
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="2"
              d="M12 18h.01M8 21h8a2 2 0 002-2V5a2 2 0 00-2-2H8a2 2 0 00-2 2v14a2 2 0 002 2z"
            />
          </svg>
          <Link to="/" className="logo-text">
            ElectroStore
          </Link>
        </div>
        <div className="nav-links">
          <Link to="/" className="nav-link">
            <svg
              className="nav-icon"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M3 12l2-2m0 0l7-7 7 7M5 10v10a1 1 0 001 1h3m10-11l2 2m-2-2v10a1 1 0 01-1 1h-3m-6 0a1 1 0 001-1v-4a1 1 0 011-1h2a1 1 0 011 1v4a1 1 0 001 1m-6 0h6"
              />
            </svg>
            Home
          </Link>
          <Link to="/cart" className="nav-link">
            <svg
              className="nav-icon"
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
            Cart {itemCount > 0 && <span className="cart-badge">{itemCount}</span>}
          </Link>
        </div>
        <button
          className="hamburger"
          onClick={() => setIsOpen(!isOpen)}
          aria-label="Toggle menu"
        >
          <svg
            className="hamburger-icon"
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="2"
              d={isOpen ? "M6 18L18 6M6 6l12 12" : "M4 6h16M4 12h16M4 18h16"}
            />
          </svg>
        </button>
      </div>
      {isOpen && (
        <div className="mobile-menu">
          <Link
            to="/"
            className="mobile-link"
            onClick={() => setIsOpen(false)}
          >
            <svg
              className="mobile-icon"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M3 12l2-2m0 0l7-7 7 7M5 10v10a1 1 0 001 1h3m10-11l2 2m-2-2v10a1 1 0 01-1 1h-3m-6 0a1 1 0 001-1v-4a1 1 0 011-1h2a1 1 0 011 1v4a1 1 0 001 1m-6 0h6"
              />
            </svg>
            Home
          </Link>
          <Link
            to="/cart"
            className="mobile-link"
            onClick={() => setIsOpen(false)}
          >
            <svg
              className="mobile-icon"
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
            Cart {itemCount > 0 && <span className="cart-badge">{itemCount}</span>}
          </Link>
        </div>
      )}
    </nav>
  );
};

export default Navbar;
