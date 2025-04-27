import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { deleteOrder, getOrders } from "../../services/api";
import Swal from "sweetalert2";


export default function OrderTable() {
  const [orders, setOrders]=useState([]);
  const [search, setSearch] = useState("");
  const [openDropdown, setOpenDropdown] = useState(null);
  const [currentPage, setCurrentPage] = useState(1);
  const itemsPerPage = 5;

  const toggleDropdown = (id) => {
    setOpenDropdown(openDropdown === id ? null : id);
  };

  const navigate = useNavigate();

  const handleView = (order) => {
    navigate("/admin/view-order", { state: { order } });
  };

//   Delete Order
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
        await deleteOrder(id);
        setOrders((prevOrders) => prevOrders.filter(order => order.id !== id));
        Swal.fire(
          'Deleted!',
          'The order has been deleted.',
          'success'
        );
      } catch (error) {
        Swal.fire(
          'Error!',
          `There was an error deleting the order due to '${error}`,
          'error'
        );
      }
    }
  };

  useEffect(() => {
    getOrders().then(setOrders);
  }, []);

  const filteredOrders = orders.filter((p) =>
    p.orderId.toString().includes(search)
  );
  const totalPages = Math.ceil(filteredOrders.length / itemsPerPage);
  const paginatedOrders = filteredOrders.slice(
    (currentPage - 1) * itemsPerPage,
    currentPage * itemsPerPage
  );

  return (
    <div className="table-container">
      <div className="search-container">
        <input
          type="text"
          placeholder="Search orders..."
          value={search}
          onChange={(e) => setSearch(e.target.value)}
          className="search-input"
        />
      </div>
      <table>
        <thead>
          <tr>
            <th>ID</th>
            <th>Order Id</th>
            <th>Items</th>
            <th>Total Amount</th>
            <th>Order Date</th>
            <th>Order Status</th>
            <th>Action</th>
          </tr>
        </thead>
        <tbody>
          {paginatedOrders.map((order) => (
            <tr key={order.id}>
                 <td>{order.id}</td>
              <td>{order.orderId}</td>
              <td>{order.items.length}</td>
              <td>{order.totalAmount}</td>
              <td>{order.orderDate}</td>
              <td>{order.status}</td>
            
              <td>
                <div className="dropdown-wrapper">
                  <button
                    className="dropdown-toggle"
                    onClick={() => toggleDropdown(order.id)}
                  >
                    Action
                  </button>
                  {openDropdown === order.id && (
                    <div className="dropdown-menu">
                      <button onClick={() => handleView(order)}>
                        View
                      </button>
                      <button onClick={() => handleDelete(order.id)}>
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
