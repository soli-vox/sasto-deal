import { useContext } from "react";
import { AdminAuthContext } from "../../context/AdminAuthContext";
import { Link } from "react-router-dom";

const Sidebar = () => {
  const { logout } = useContext(AdminAuthContext);
  return (
    <div className="card shadow mb-4 sidebar">
      <div className="card-body p-4">
        <ul>
          <li>
            <Link to="/admin/dashboard">Dashboard</Link>
          </li>
          <li>
            <Link to="/admin/category/show">Categories</Link>
          </li>
          <li>
            <Link to="/admin/brand/show">Brands</Link>
          </li>
          <li>
            <Link to="/admin/product/show">Products</Link>
          </li>
          <li>
            <a href="">Orders</a>
          </li>
          <li>
            <a href="">Shipping</a>
          </li>
          <li>
            <a href="">Users</a>
          </li>
          <li>
            <a href="">Settings</a>
          </li>
          <li>
            <a href="#" onClick={logout}>
              Logout
            </a>
          </li>
        </ul>
      </div>
    </div>
  );
};

export default Sidebar;
