import React,{ useState, useEffect } from "react";
import { useNavigate, useLocation } from "react-router-dom";
import { editProduct } from "../../services/api";
import "../../assets/product.css";
import Swal from "sweetalert2";

export default function EditProduct() {
  const navigate = useNavigate();
  const location = useLocation();
  const { product } = location.state;

  // State to handle form inputs
  const [productData, setProductData] = useState({
    name: product.name,
    description: product.description,
    price: product.price,
    stock: product.stock,
    image: product.image,
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setProductData((prevData) => ({
      ...prevData,
      [name]: value,
    }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    const updatedProduct = {
      id: product.id,
      name: productData.name,
      description: productData.description,
      price: productData.price,
      stock: productData.stock,
      image: productData.image,
    };

    try {
      await editProduct(product.id, updatedProduct);
      Swal.fire({
        position: "top-end",
        icon: "success",
        title: "Product updated successfully",
        showConfirmButton: false,
        timer: 3000,
      });

      // Navigate back to the products page after updating the product
      navigate("/admin/products");
    } catch (error) {
      Swal.fire({
        position: "top-end",
        icon: "error",
        title: "Failed to update the product",
        showConfirmButton: false,
        timer: 3000,
      });
    }
  };

  return (
    <div className="product-form">
      <h2>Edit Product</h2>
      <form onSubmit={handleSubmit}>
        <div className="form-group">
          <label htmlFor="name">Name</label>
          <input
            type="text"
            id="name"
            name="name"
            value={productData.name}
            onChange={handleChange}
            required
          />
        </div>

        <div className="form-group">
          <label htmlFor="description">Description</label>
          <textarea
            id="description"
            name="description"
            value={productData.description}
            onChange={handleChange}
            required
          />
        </div>

        <div className="form-group">
          <label htmlFor="price">Price</label>
          <input
            type="number"
            id="price"
            name="price"
            value={productData.price}
            onChange={handleChange}
            required
          />
        </div>

        <div className="form-group">
          <label htmlFor="stock">Stock</label>
          <input
            type="number"
            id="stock"
            name="stock"
            value={productData.stock}
            onChange={handleChange}
            required
          />
        </div>

        <div className="form-group">
          <label htmlFor="image">Image URL</label>
          <input
            type="text"
            id="image"
            name="image"
            value={productData.image}
            onChange={handleChange}
            required
          />
        </div>

        <button type="submit">Update Product</button>
      </form>
    </div>
  );
}
