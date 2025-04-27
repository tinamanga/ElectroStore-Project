import UsersTable from "../../components/dashboard/UsersTable";
import { useNavigate } from 'react-router-dom';

export default function Users() {
  const navigate = useNavigate(); 

    const handleAddUser = () => {
      navigate('/admin/users/add');
    };
    return (
    <div>
      <h2>Users</h2>
      <button className="add-button" onClick={handleAddUser}>
        Add User
      </button>
    <UsersTable />
    </div>
    
  );
  }