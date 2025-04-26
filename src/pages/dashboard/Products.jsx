import ProductTable from '../../components/dashboard/ProductTable';
import { useNavigate } from 'react-router-dom';

export default function Products() {
    const navigate = useNavigate(); 

    const handleAddProduct = () => {
      navigate('/admin/products/add');
    };
  return (
    <div>
      <h2 className="mb-4">Products</h2>
       {/* Add Product Button */}
       <button className="add-button" onClick={handleAddProduct}>
        Add Product
      </button>
      <ProductTable />
    </div>
  );
}