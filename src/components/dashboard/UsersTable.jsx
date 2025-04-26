import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { deleteUser, getUsers } from "../../services/api";
import Swal from "sweetalert2";


export default function UsersTable() {
  const [users, setUsers]=useState([]);
  const [search, setSearch] = useState("");
  const [openDropdown, setOpenDropdown] = useState(null);
  const [currentPage, setCurrentPage] = useState(1);
  const itemsPerPage = 5;

  const toggleDropdown = (id) => {
    setOpenDropdown(openDropdown === id ? null : id);
  };

//   Delete user
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
        await deleteUser(id);
        setUsers((prevUsers) => prevUsers.filter(user => user.id !== id));
        Swal.fire(
          'Deleted!',
          'The user has been deleted.',
          'success'
        );
      } catch (error) {
        Swal.fire(
          'Error!',
          `There was an error deleting the user due to '${error}`,
          'error'
        );
      }
    }
  };

  const navigate = useNavigate();

  const handleEdit = (user) => {
    navigate("/admin/users/edit", { state: { user } });
  };


  useEffect(() => {
    getUsers().then(setUsers);
  }, []);

  const filteredUsers = users.filter((p) =>
    p.username.toLowerCase().includes(search.toLowerCase())
  );
  const totalPages = Math.ceil(filteredUsers.length / itemsPerPage);
  const paginatedUsers = filteredUsers.slice(
    (currentPage - 1) * itemsPerPage,
    currentPage * itemsPerPage
  );

  return (
    <div className="table-container">
      <div className="search-container">
        <input
          type="text"
          placeholder="Search username..."
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
            <th>Username</th>
            <th>Email</th>
            <th>Address</th>
            <th>Action</th>
          </tr>
        </thead>
        <tbody>
          {paginatedUsers.map((user) => (
            <tr key={user.id}>
                <td>{user.id}</td>
                 <td>{user.name}</td>
              <td>{user.username}</td>
              <td>{user.email}</td>
              <td>{user.address}</td>
            
             
            
              <td>
                <div className="dropdown-wrapper">
                  <button
                    className="dropdown-toggle"
                    onClick={() => toggleDropdown(user.id)}
                  >
                    Action
                  </button>
                  {openDropdown === user.id && (
                    <div className="dropdown-menu">
                      <button onClick={() => handleEdit(user)}>
                        Update
                      </button>
                      <button onClick={() => handleDelete(user.id)}>
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
