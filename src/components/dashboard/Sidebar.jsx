import { NavLink } from 'react-router-dom';

export default function Sidebar() {
  return (
    <aside className="sidebar">
      <h2 className="sidebar-title">ElectroStore</h2>
      <div className="sidebar-separator"></div>
      <nav className="sidebar-nav">
        <NavLink 
          to="/admin/dashboard" 
          className={({ isActive }) => isActive ? "active-link" : ""}
        >
          Dashboard
        </NavLink>
        <NavLink 
          to="/admin/products" 
          className={({ isActive }) => isActive ? "active-link" : ""}
        >
          Products
        </NavLink>
        <NavLink 
          to="/admin/orders" 
          className={({ isActive }) => isActive ? "active-link" : ""}
        >
          Orders
        </NavLink>
        <NavLink 
          to="/admin/users" 
          className={({ isActive }) => isActive ? "active-link" : ""}
        >
          Users
        </NavLink>
      </nav>
    </aside>
  );
}
