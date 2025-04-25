import { Link } from 'react-router-dom';

export default function Sidebar() {
    return (
        <aside>
          <h2>Admin Panel</h2>
          <nav>
            <Link to="/admin/dashboard">Dashboard</Link>
            <Link to="/admin/products">Products</Link>
            <Link to="/admin/orders">Orders</Link>
            <Link to="/admin/users">Users</Link>
          </nav>
        </aside>
      );
    }