import React, { useEffect, useState } from "react";
import ProductCard from "../components/ProductCard";

const ProductList = () => {
  const [products, setProducts] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      const response = await fetch('/db.json'); // Fetch from the public directory
      const data = await response.json();
      setProducts(data.products); // Set the products in state
    };
    fetchData();
  }, []);

  if (!products.length) return <div>Loading...</div>;

  return (
    <div>
      {products.map((product) => (
        <ProductCard key={product.id} product={product} />
      ))}
    </div>
  );
};

export default ProductList;
