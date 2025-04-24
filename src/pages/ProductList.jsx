<<<<<<< HEAD


import React, { useEffect, useState } from "react";
import ProductCard from "../components/card/ProductCard";
=======
import React, { useEffect, useState } from "react";
import ProductCard from "../components/ProductCard";
>>>>>>> 13b3757482241d4c89707b68f89f31c04c221bb9

const ProductList = () => {
  const [products, setProducts] = useState([]);
  const [searchTerm, setSearchTerm] = useState("");
<<<<<<< HEAD
  const [categoryFilter, setCategoryFilter] = useState("");
  const [sortOption, setSortOption] = useState("");
  const [loading, setLoading] = useState(true);

  const assignCategory = (name) => {
    const lowerName = name.toLowerCase();
    if (lowerName.includes("phone")) return "Phone";
    if (lowerName.includes("laptop")) return "Laptop";
    if (lowerName.includes("tablet")) return "Tablet";
    if (lowerName.includes("watch")) return "Accessories";
    if (
      lowerName.includes("earbuds") ||
      lowerName.includes("speaker") ||
      lowerName.includes("mouse") ||
      lowerName.includes("keyboard") ||
      lowerName.includes("power bank") ||
      lowerName.includes("charger") ||
      lowerName.includes("stand") ||
      lowerName.includes("webcam") ||
      lowerName.includes("flash drive") ||
      lowerName.includes("hard drive")
    )
      return "Accessories";
    if (lowerName.includes("tv")) return "TV";
    if (lowerName.includes("console")) return "Gaming";
    if (lowerName.includes("vr")) return "VR";
    if (lowerName.includes("drone")) return "Drone";
    if (lowerName.includes("camera")) return "Camera";
    if (lowerName.includes("router")) return "Networking";
    return "Other";
  };

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetch("/db.json");
        const data = await response.json();
        const productsWithCategories = data.products.map((product) => ({
          ...product,
          category: assignCategory(product.name),
        }));
        setProducts(productsWithCategories);
        setLoading(false);
      } catch (error) {
        console.error("Error fetching products:", error);
        setLoading(false);
      }
=======

  useEffect(() => {
    const fetchData = async () => {
      const response = await fetch("/db.json"); // Fetch from public directory
      const data = await response.json();
      setProducts(data.products);
>>>>>>> 13b3757482241d4c89707b68f89f31c04c221bb9
    };
    fetchData();
  }, []);

<<<<<<< HEAD
  const categories = [...new Set(products.map((p) => p.category))];

  const filteredProducts = products
    .filter((product) =>
      product.name.toLowerCase().includes(searchTerm.toLowerCase())
    )
    .filter((product) =>
      categoryFilter ? product.category === categoryFilter : true
    )
    .sort((a, b) => {
      if (sortOption === "price-asc") return a.price - b.price;
      if (sortOption === "price-desc") return b.price - a.price;
      if (sortOption === "name") return a.name.localeCompare(b.name);
      return 0;
    });

  if (loading)
    return (
      <div className="flex justify-center p-6">
        <div className="animate-spin rounded-full h-12 w-12 border-t-2 border-b-2 border-blue-700"></div>
      </div>
    );

  return (
    <div className="container mx-auto p-6 bg-gradient-to-b from-gray-50 to-gray-100 min-h-screen">
      <div className="flex items-center gap-3 mb-6">
        {/* <svg
          className="w-8 h-8 text-blue-700"
          fill="none"
          stroke="currentColor"
          viewBox="0 0 24 24"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth="2"
            d="M9.75 17L9 20l-1 1h8l-1-1-.75-3M3 13h18M5 17h14a2 2 0 002-2V5a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"
          />
        </svg> */}
        <h2 className="text-4xl font-bold text-gray-800">Our Products</h2>
      </div>
      <div className="mb-6 flex flex-col sm:flex-row gap-4 bg-white p-6 rounded-xl shadow-lg">
        <div className="relative w-full sm:w-1/3">
          
          <input
            type="text"
            placeholder="Search by name..."
            value={searchTerm}
            onChange={(e) => setSearchTerm(e.target.value)}
            className="border rounded-lg p-2 pl-10 w-full focus:ring-2 focus:ring-blue-500 focus:outline-none"
          />
        </div>
        <select
          value={categoryFilter}
          onChange={(e) => setCategoryFilter(e.target.value)}
          className="border rounded-lg p-2 w-full sm:w-1/3 focus:ring-2 focus:ring-blue-500 focus:outline-none"
        >
          <option value="">All Categories</option>
          {categories.map((category) => (
            <option key={category} value={category}>
              {category}
            </option>
          ))}
        </select>
        <select
          value={sortOption}
          onChange={(e) => setSortOption(e.target.value)}
          className="border rounded-lg p-2 w-full sm:w-1/3 focus:ring-2 focus:ring-blue-500 focus:outline-none"
        >
          <option value="">Sort By</option>
          <option value="name">Name</option>
          <option value="price-asc">Price: Low to High</option>
          <option value="price-desc">Price: High to Low</option>
        </select>
      </div>
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
        {filteredProducts.length ? (
=======
  const filteredProducts = products.filter((product) =>
    product.name.toLowerCase().includes(searchTerm.toLowerCase())
  );

  if (!products.length) return <div>Loading...</div>;

  return (
    <div className="product-list-container">
      <div className="product-list-header">
        <h2 className="product-list-title">Our Products</h2>

        <input
          type="text"
          className="search-input"
          placeholder="🔍 Search products..."
          value={searchTerm}
          onChange={(e) => setSearchTerm(e.target.value)}
        />
      </div>

      <div className="product-grid">
        {filteredProducts.length > 0 ? (
>>>>>>> 13b3757482241d4c89707b68f89f31c04c221bb9
          filteredProducts.map((product) => (
            <ProductCard key={product.id} product={product} />
          ))
        ) : (
<<<<<<< HEAD
          <div className="text-center col-span-full py-12">
            <svg
              className="w-16 h-16 mx-auto text-gray-400"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M9.75 17L9 20l-1 1h8l-1-1-.75-3M3 13h18M5 17h14a2 2 0 002-2V5a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"
              />
            </svg>
            <p className="text-gray-700 text-lg mt-4">No products found.</p>
          </div>
=======
          <p style={{ textAlign: "center" }}>❌ No products found.</p>
>>>>>>> 13b3757482241d4c89707b68f89f31c04c221bb9
        )}
      </div>
    </div>
  );
};

<<<<<<< HEAD
export default ProductList;
=======
export default ProductList;
>>>>>>> 13b3757482241d4c89707b68f89f31c04c221bb9
