import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import ProductList from "./pages/ProductList";
import ProductDetails from "./pages/ProductDetails";
import Navbar from "./components/Navbar";
import  Footer  from "./components/Footer";
import "./assets/dashboard.css";

import CartPage from "./pages/ CartPage.jsx";
import React, { useState, useEffect } from "react";

// Dashboard imports
import Sidebar from "./components/dashboard/Sidebar";
import Header from "./components/dashboard/Navbar";
import Dashboard from "./pages/dashboard/Dashboard";
import Products from "./pages/dashboard/Products";
import Orders from "./pages/dashboard/Orders";
import Users from "./pages/dashboard/Users";
import AddUser from "./pages/dashboard/AddUser";
import EditUser from "./pages/dashboard/EditUser";
import DashboardFooter from "./components/dashboard/DashboardFooter";
import AddProduct from "./pages/dashboard/AddProduct";
import EditProduct from "./pages/dashboard/EditProduct";
import ViewOrder from "./pages/dashboard/ViewOrder";

const App = () => {
  const [cart, setCart] = useState(() => {
    const savedCart = localStorage.getItem("cart");
    return savedCart ? JSON.parse(savedCart) : [];
  });

  useEffect(() => {
    localStorage.setItem("cart", JSON.stringify(cart));
  }, [cart]);

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
            <div className="flex min-h-screen">
              {/* Sidebar stays on the left */}
              <Sidebar />

              {/* Right side: Header + Main content + Footer */}
              <div className="flex-1 flex flex-col">
                {/* Header with no gap above and flush with sidebar */}
                <Header />

                {/* Main content */}
                <div className="flex-1 p-4">
                  <Routes>
                    <Route path="dashboard" element={<Dashboard />} />
                    <Route path="products" element={<Products />} />
                    <Route path="products/add" element={<AddProduct />} />
                    <Route path="edit-product" element={<EditProduct />} />
                    <Route path="orders" element={<Orders />} />
                    <Route path="view-order" element={<ViewOrder />} />
                    <Route path="users" element={<Users />} />
                    <Route path="users/add" element={<AddUser />} />
                    <Route path="users/edit" element={<EditUser />} />
                  </Routes>
                </div>

                {/* Footer */}
                <DashboardFooter />
              </div>
            </div>
          }
        />
      </Routes>
    </Router>
  );
};

export default App;
