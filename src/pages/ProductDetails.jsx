import React, { useEffect, useState } from "react";
import { useParams, Link } from "react-router-dom";

const ProductDetails = () => {
  const { id } = useParams();
  const [product, setProduct] = useState(null);

  useEffect(() => {
    const fetchProduct = async () => {
      const response = await fetch("/db.json");
      const data = await response.json();
      const foundProduct = data.products.find((p) => p.id.toString() === id);
      setProduct(foundProduct);
    };

    fetchProduct();
  }, [id]);

  if (!product) return <div>Loading...</div>;

  return (
    
    <div className="product-details-container">
      <img src={product.image} alt={product.name} className="product-details-image" />
      <div className="product-details-info">
        <h2>{product.name}</h2>
        <p className="product-details-price">${product.price.toFixed(2)}</p>
        <p>{product.description || "No description available."}</p>
        <button>Add to Cart</button>
      </div>
      <Link to="/" className="back-button">← Back to Products</Link>
    </div>
  );
};

export default ProductDetails;
