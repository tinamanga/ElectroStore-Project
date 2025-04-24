import React, { useEffect, useState } from "react";
import ProductCard from "../components/ProductCard";


const ProductList = () => {
  const [products, setProducts] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      const response = await fetch("/db.json"); // Fetch from public directory
      const data = await response.json();
      setProducts(data.products);
    };
    fetchData();
  }, []);

  if (!products.length) return <div>Loading...</div>;

  return (
    <div className="product-list-container">
      <h2>Our Products</h2>
      <div className="product-grid">
        {products.map((product) => (
          <ProductCard key={product.id} product={product} />
        ))}
      </div>
    </div>
  );
};

export default ProductList;

