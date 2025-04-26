import { useState, useEffect, useRef } from "react";
import { FaUserCircle } from "react-icons/fa";
import "../../assets/navbar.css";

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const dropdownRef = useRef(null);

  const toggleDropdown = () => setIsOpen(!isOpen);

  // Close dropdown on outside click
  useEffect(() => {
    const handleClickOutside = (event) => {
      if (dropdownRef.current && !dropdownRef.current.contains(event.target)) {
        setIsOpen(false);
      }
    };

    document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, []);

  return (
    <header className="navbar">
      <h1 className="navbar-title">Admin Dashboard</h1>

      <div className="user-section" ref={dropdownRef}>
        <div className="user-info" onClick={toggleDropdown}>
          <FaUserCircle size={24} />
          <span className="username">Admin</span>
        </div>

        {isOpen && (
          <div className="dropdown">
            <button className="dropdown-item">Profile</button>
            <button className="dropdown-item">Settings</button>
            <button className="dropdown-item">Logout</button>
          </div>
        )}
      </div>
    </header>
  );
}
