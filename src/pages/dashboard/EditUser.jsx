import React,{ useState, useEffect } from "react";
import { useNavigate, useLocation } from "react-router-dom";
import { editUser } from "../../services/api";
import "../../assets/product.css";
import Swal from "sweetalert2";

export default function EditUser() {
  const navigate = useNavigate();
  const location = useLocation();
  const { user } = location.state;

  // State to handle form inputs
  const [userData, setuserData] = useState({
    name: user.name,
      username: user.username,
      email: user.email,
      password: user.password,
      address: user.address,
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setuserData((prevData) => ({
      ...prevData,
      [name]: value,
    }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    const updateduser = {
      id: user.id,
      name: userData.name,
      username: userData.username,
      email: userData.email,
      password: userData.password,
      address: userData.address,
    };

    try {
      await editUser(user.id, updateduser);
      Swal.fire({
        position: "top-end",
        icon: "success",
        title: "User updated successfully",
        showConfirmButton: false,
        timer: 3000,
      });

      // Navigate back to the users page after updating the user
      navigate("/admin/users");
    } catch (error) {
      Swal.fire({
        position: "top-end",
        icon: "error",
        title: "Failed to update the user",
        showConfirmButton: false,
        timer: 3000,
      });
    }
  };

  return (
    <div className="universal-form">
      <h2>Edit user</h2>
      <form onSubmit={handleSubmit}>
        <div className="form-group">
          <label htmlFor="name">Name</label>
          <input
            type="text"
            id="name"
            name="name"
            value={userData.name}
            onChange={handleChange}
            required
          />
        </div>

        <div className="form-group">
          <label htmlFor="username">username</label>
          <input
            type="text"
            id="username"
            name="username"
            value={userData.username}
            onChange={handleChange}
            required
          />
        </div>

        <div className="form-group">
          <label htmlFor="email">Email</label>
          <input
            type="email"
            id="email"
            name="email"
            value={userData.email}
            onChange={handleChange}
            required
          />
        </div>

        <div className="form-group">
          <label htmlFor="password">Password</label>
          <input
            type="password"
            id="password"
            name="password"
            value={userData.password}
            onChange={handleChange}
            required
          />
        </div>

        <div className="form-group">
          <label htmlFor="address">User Address</label>
          <input
            type="text"
            id="address"
            name="address"
            value={userData.address}
            onChange={handleChange}
            required
          />
        </div>

        <button type="submit">Update user</button>
      </form>
    </div>
  );
}
