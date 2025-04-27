import { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import "../../assets/product.css";
import Swal from "sweetalert2";
import {addUser, getUsers } from "../../services/api";

export default function AddUser() {
  const navigate = useNavigate();

  const [users, setUsers] = useState([]);
  const [userData, setUserData] = useState({
    name: "",
    username: "",
    email: "",
    password: "",
    address: "",
  });

  // Fetch existing products and calculate new product ID
  useEffect(() => {
    getUsers().then(setUsers);
  }, []);

  const maxId = Math.max(...users.map((user) => parseInt(user.id, 10)));
  const userId = (maxId + 1).toString();

  // Handle form input changes
  const handleChange = (e) => {
    const { name, value } = e.target;
    setUserData((prevData) => ({
      ...prevData,
      [name]: value,
    }));
  };

  // Handle form submission
  const handleSubmit = async (e) => {
    e.preventDefault();

    // Prepare new product object
    const newUser = {
      id: userId,
      name: userData.name,
      username: userData.username,
      email: userData.email,
      password: userData.password,
      address: userData.address,
    };

    try {
      // Add the product using the addProduct API
      await addUser(newUser);

      // Show success message
      Swal.fire({
        position: "top-end",
        icon: "success",
        title: "User added successfully",
        showConfirmButton: false,
        timer: 3000,
      });

      // Navigate back to the users page after submitting
      navigate("/admin/users");
    } catch (error) {
      // Handle error
      Swal.fire({
        position: "top-end",
        icon: "error",
        title: "Failed to add User",
        showConfirmButton: false,
        timer: 3000,
      });
    }
  };

  return (
    <div className="universal-form">
      <h2>New User</h2>
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
          <label htmlFor="username">Username</label>
          <textarea
            id="username"
            name="username"
            value={userData.username}
            onChange={handleChange}
            required
          />
        </div>

        <div className="form-group">
          <label htmlFor="email">email</label>
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

        <button type="submit">Add User</button>
      </form>
    </div>
  );
}
