
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import ProductList from './pages/ProductList';
import ProductDetails from './pages/ProductDetails';
import Navbar from "./components/Navbar"; 
import { Footer } from './layout.jsx';
import CartPage from './pages/ CartPage.jsx';
import React, { useState, useEffect } from "react";


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
  return (
    <Router>
      <Navbar cartCount={cart.reduce((sum, item) => sum + item.quantity, 0)} />
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
    </Router>
    
  );
}

export default App;
