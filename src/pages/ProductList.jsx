import React, { useEffect, useState } from "react";
import ProductCard from "../components/ProductCard";

const ProductList = () => {
  const [products, setProducts] = useState([]);
  const [searchTerm, setSearchTerm] = useState("");

  useEffect(() => {
    const fetchData = async () => {
      const response = await fetch("/db.json"); // Fetch from public directory
      const data = await response.json();
      setProducts(data.products);
    };
    fetchData();
  }, []);

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
          filteredProducts.map((product) => (
            <ProductCard key={product.id} product={product} />
          ))
        ) : (
          <p style={{ textAlign: "center" }}>❌ No products found.</p>
        )}
      </div>
    </div>
  );
};

export default ProductList;
