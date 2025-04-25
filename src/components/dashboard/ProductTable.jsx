import { useEffect, useState } from "react";
import { getProducts, deleteProduct } from "../../services/api";
import Swal from "sweetalert2";


export default function ProductTable() {
  const [products, setProducts] = useState([]);
  const [search, setSearch] = useState("");
  const [openDropdown, setOpenDropdown] = useState(null);
  const [currentPage, setCurrentPage] = useState(1);
  const itemsPerPage = 5;

  const toggleDropdown = (id) => {
    setOpenDropdown(openDropdown === id ? null : id);
  };

  const handleEdit = (id) => alert(`Edit product ${id}`);

//   Delete product
  const handleDelete = async (id) => {
    const result = await Swal.fire({
      title: 'Are you sure?',
      text: "You won't be able to revert this!",
      icon: 'warning',
      showCancelButton: true,
      confirmButtonText: 'Yes, delete it!',
      cancelButtonText: 'No, keep it'
    });

    if (result.isConfirmed) {
      try {
        await deleteProduct(id);
        setProducts((prevProducts) => prevProducts.filter(product => product.id !== id));
        Swal.fire(
          'Deleted!',
          'The product has been deleted.',
          'success'
        );
      } catch (error) {
        Swal.fire(
          'Error!',
          `There was an error deleting the product due to '${error}`,
          'error'
        );
      }
    }
  };

  useEffect(() => {
    getProducts().then(setProducts);
  }, []);

  const filteredProducts = products.filter((p) =>
    p.name.toLowerCase().includes(search.toLowerCase())
  );

  const totalPages = Math.ceil(filteredProducts.length / itemsPerPage);
  const paginatedProducts = filteredProducts.slice(
    (currentPage - 1) * itemsPerPage,
    currentPage * itemsPerPage
  );

  return (
    <div className="table-container">
      <div className="search-container">
        <input
          type="text"
          placeholder="Search products..."
          value={search}
          onChange={(e) => setSearch(e.target.value)}
          className="search-input"
        />
      </div>
      <table>
        <thead>
          <tr>
            <th>ID</th>
            <th>Name</th>
            <th>Description</th>
            <th>Price</th>
            <th>Stock</th>
            <th>Image</th>
            <th>Action</th>
          </tr>
        </thead>
        <tbody>
          {paginatedProducts.map((product) => (
            <tr key={product.id}>
              <td>{product.id}</td>
              <td>{product.name}</td>
              <td>{product.description}</td>
              <td>${product.price}</td>
              <td>{product.stock}</td>
              <td>
                <img
                  src={product.image}
                  alt={product.name}
                  style={styles.image}
                />
              </td>
              <td>
                <div className="dropdown-wrapper">
                  <button
                    className="dropdown-toggle"
                    onClick={() => toggleDropdown(product.id)}
                  >
                    Action
                  </button>
                  {openDropdown === product.id && (
                    <div className="dropdown-menu">
                      <button onClick={() => handleEdit(product.id)}>
                        Edit
                      </button>
                      <button onClick={() => handleDelete(product.id)}>
                        Delete
                      </button>
                    </div>
                  )}
                </div>
              </td>
            </tr>
          ))}
        </tbody>
      </table>

      {/* Pagination Controls */}
      <div className="pagination">
        <div className="pagination-center">
          <span>
            Page {currentPage} of {totalPages}
          </span>
        </div>
        <div className="pagination-right">
          <button
            disabled={currentPage === 1}
            onClick={() => setCurrentPage((p) => p - 1)}
          >
            Prev
          </button>
          <button
            disabled={currentPage === totalPages}
            onClick={() => setCurrentPage((p) => p + 1)}
          >
            Next
          </button>
        </div>
      </div>
    </div>
  );
}

const styles = {
  image: {
    width: "40px",
    height: "40px",
    objectFit: "cover",
  },
};
