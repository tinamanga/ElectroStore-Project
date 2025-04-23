import React, { useEffect, useState } from 'react';
import ProductCard from '../components/ProductCard';
import productData from '../data/products.json';


const ProductList = () => {
  const [products, setProducts] = useState([]);

  useEffect(() => {
    setProducts(productData); // mock fetch
  }, []);

  return (
    <div className="product-list">
      <h2>Electronic Products</h2>
      <div className="product-grid">
        {products.map(product => (
          <ProductCard key={product.id} product={product} />
        ))}
      </div>
    </div>
  );
};

export default ProductList;
