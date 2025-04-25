import { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import "../../assets/addProducts.css";
import Swal from "sweetalert2";
import { getProducts, addProduct } from "../../services/api";

export default function AddProduct() {
  const navigate = useNavigate();

  const [products, setProducts] = useState([]);
  const [productData, setProductData] = useState({
    name: "",
    description: "",
    price: "",
    stock: "",
    image: "",
  });

  // Fetch existing products and calculate new product ID
  useEffect(() => {
    getProducts().then(setProducts);
  }, []);

  const maxId = Math.max(...products.map((product) => parseInt(product.id, 10)));
  const productId = (maxId + 1).toString();

  // Handle form input changes
  const handleChange = (e) => {
    const { name, value } = e.target;
    setProductData((prevData) => ({
      ...prevData,
      [name]: value,
    }));
  };

  // Handle form submission
  const handleSubmit = async (e) => {
    e.preventDefault();

    // Prepare new product object
    const newProduct = {
      id: productId,
      name: productData.name,
      description: productData.description,
      price: productData.price,
      stock: productData.stock,
      image: productData.image,
    };

    try {
      // Add the product using the addProduct API
      await addProduct(newProduct);

      // Show success message
      Swal.fire({
        position: "top-end",
        icon: "success",
        title: "Product added successfully",
        showConfirmButton: false,
        timer: 3000,
      });

      // Navigate back to the products page after submitting
      navigate("/admin/products");
    } catch (error) {
      // Handle error
      Swal.fire({
        position: "top-end",
        icon: "error",
        title: "Failed to add product",
        showConfirmButton: false,
        timer: 3000,
      });
    }
  };

  return (
    <div className="add-product-form">
      <h2>New Product</h2>
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

        <button type="submit">Add Product</button>
      </form>
    </div>
  );
}
