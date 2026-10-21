import { useLocation, useNavigate } from "react-router-dom";
import useAuth from "../hooks/useAuth";
import { ROLE_LABEL } from "../utils/constants";

// Har role ka menu
const menus = {
  EMPLOYEE: [
    { icon: "🏠", label: "Dashboard", path: "/employee" },
    { icon: "🎫", label: "My Tickets", path: "/employee/tickets" },
    { icon: "➕", label: "Create Ticket", path: "/employee/create" },
  ],
  AGENT: [
    { icon: "🏠", label: "Dashboard", path: "/agent" },
    { icon: "🎫", label: "Assigned Tickets", path: "/agent/tickets" },
  ],
  ADMIN: [
    { icon: "🏠", label: "Dashboard", path: "/admin" },
    { icon: "👥", label: "Users", path: "/admin/users" },
    { icon: "🎧", label: "Agents", path: "/admin/agents" },
    { icon: "🎫", label: "All Tickets", path: "/admin/tickets" },
    { icon: "📁", label: "Categories", path: "/admin/categories" },
  ],
};

function Sidebar() {
  const { user, logout } = useAuth();
  const navigate = useNavigate();
  const location = useLocation();

  const menu = menus[user.role];

  const handleLogout = () => {
    logout();
    navigate("/login");
  };

  return (
    <aside className="sidebar">
      <div className="logo">
        Resolve<span>Hub</span>
      </div>

      <div className="role-label">{ROLE_LABEL[user.role]}</div>

      <nav className="nav">
        {menu.map((item) => (
          <button
            key={item.path}
            className={location.pathname === item.path ? "active" : ""}
            onClick={() => navigate(item.path)}
          >
            <span>{item.icon}</span> {item.label}
          </button>
        ))}
      </nav>

      <div className="sidebar-bottom">
        <div className="user-mini">
          <strong>{user.name}</strong>
          <small>{ROLE_LABEL[user.role]}</small>
        </div>
        <button
          className="btn btn-danger"
          style={{ width: "100%" }}
          onClick={handleLogout}
        >
          Logout
        </button>
      </div>
    </aside>
  );
}

export default Sidebar;