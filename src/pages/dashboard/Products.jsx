import ProductTable from '../../components/dashboard/ProductTable';
import { useNavigate } from 'react-router-dom';

export default function Products() {
    const navigate = useNavigate();  // Hook to navigate to the add product page

    const handleAddProduct = () => {
      navigate('/admin/products/add');  // Redirect to add product page
    };
  return (
    <div>
      <h2 className="mb-4">Products</h2>
       {/* Add Product Button */}
       <button className="add-product-button" onClick={handleAddProduct}>
        Add Product
      </button>
      <ProductTable />
    </div>
  );
}