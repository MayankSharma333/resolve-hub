import { useLocation } from "react-router-dom";
import useAuth from "../hooks/useAuth";
import { getInitial } from "../utils/helpers";

// Kaun se path par kya title dikhana hai
const titles = {
  "/employee": "Employee Dashboard",
  "/employee/tickets": "My Tickets",
  "/employee/create": "Create Ticket",
  "/agent": "Agent Dashboard",
  "/agent/tickets": "Assigned Tickets",
  "/admin": "Admin Dashboard",
  "/admin/users": "User Management",
  "/admin/agents": "Agent Management",
  "/admin/tickets": "All Tickets",
  "/admin/categories": "Categories",
};

function Navbar() {
  const { user } = useAuth();
  const location = useLocation();

  // /ticket/1001 jaise path ke liye alag title
  const title = location.pathname.startsWith("/ticket/")
    ? "Ticket Details"
    : titles[location.pathname] || "ResolveHub";

  return (
    <header className="topbar">
      <h2>{title}</h2>
      <div className="profile">
        <span>{user.name}</span>
        <div className="avatar">{getInitial(user.name)}</div>
      </div>
    </header>
  );
}

export default Navbar;