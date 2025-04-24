import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import ProductList from "./pages/ProductList";
import ProductDetails from "./pages/ProductDetails";
import CartPage from "./pages/cart/CartPage";
import Checkout from "./pages/checkout/Checkout";
import Footer from "./components/Footer";
import Navbar from "./components/navbar/Navbar";
import { CartProvider } from "./context/CartContext";

function App() {
  return (
    <CartProvider>
      <Router>
        <Navbar />
        <Routes>
          <Route path="/" element={<ProductList />} />
          <Route path="/product/:id" element={<ProductDetails />} />
          <Route path="/cart" element={<CartPage />} />
          <Route path="/checkout" element={<Checkout />} />
          <Route path="/footer" element={<Footer />} />
        </Routes>
        <Footer />
      </Router>
    </CartProvider>
  );
}

export default App;
