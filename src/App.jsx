
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import ProductList from './pages/ProductList';
import ProductDetails from './pages/ProductDetails';
import Navbar from "./components/Navbar"; 
import { Footer } from './layout.jsx';
import "./assets/dashboard.css"


import CartPage from './pages/ CartPage.jsx';
import React, { useState, useEffect } from "react";

// Dashboard imports
import Sidebar from './components/dashboard/Sidebar';
import Header from './components/dashboard/Navbar';
import Dashboard from './pages/dashboard/Dashboard';
import Products from './pages/dashboard/Products';
import Orders from './pages/dashboard/Orders';
import Users from './pages/dashboard/Users';



const App = () => {
  const [cart, setCart] = useState(() => {
    const savedCart = localStorage.getItem("cart");
    return savedCart ? JSON.parse(savedCart) : [];
  });

  useEffect(() => {
    localStorage.setItem("cart", JSON.stringify(cart));
  }, [cart]);

  const handleAddToCart = (product) => {
    setCart((prev) => {
      const exists = prev.find((item) => item.id === product.id);
      if (exists) {
        return prev.map((item) =>
          item.id === product.id
            ? { ...item, quantity: item.quantity + 1 }
            : item
        );
      }
      return [...prev, { ...product, quantity: 1 }];
    });
  };

  const handleRemoveItem = (id) => {
    setCart((prev) => prev.filter((item) => item.id !== id));
  };

  const handleQuantityChange = (id, qty) => {
    setCart((prev) =>
      prev.map((item) => (item.id === id ? { ...item, quantity: qty } : item))
    );
  };

  const handleClearCart = () => {
    setCart([]);
    localStorage.removeItem("cart");
  };

  const cartCount = cart.reduce((sum, item) => sum + item.quantity, 0);
  return (
    <Router>
      <Routes>
        {/* CUSTOMER-FACING ROUTES */}
        <Route
          path="/*"
          element={
            <>
              <Navbar cartCount={cartCount} />
              <Routes>
                <Route path="/" element={<ProductList />} />
                <Route path="/product/:id" element={<ProductDetails />} />
                <Route
                  path="/cart"
                  element={
                    <CartPage
                      cartItems={cart}
                      onRemoveItem={handleRemoveItem}
                      onQuantityChange={handleQuantityChange}
                      onClearCart={handleClearCart}
                    />
                  }
                />
              </Routes>
              <Footer />
            </>
          }
        />

        {/* DASHBOARD ROUTES */}
        <Route
          path="/admin/*"
          element={
            <div className="flex">
              <Sidebar />
              <div className="flex-1 p-4">
                <Header />
                <Routes>
                  <Route path="dashboard" element={<Dashboard />} />
                  <Route path="products" element={<Products />} />
                  <Route path="orders" element={<Orders />} />
                  <Route path="users" element={<Users />} />
                </Routes>
              </div>
            </div>
          }
        />
      </Routes>
    </Router>
  );
}

export default App;
