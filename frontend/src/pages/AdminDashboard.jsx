import { useNavigate } from "react-router-dom";
import StatCard from "../components/StatCard";
import StatusBadge from "../components/StatusBadge";
import { getAllTickets } from "../services/ticketService";
import { formatTicketNumber } from "../utils/helpers";

function AdminDashboard() {
  const navigate = useNavigate();

  // UI me IN PROGRESS wali tickets dikh rahi thi
  const tickets = getAllTickets().filter((t) => t.status === "IN_PROGRESS");

  return (
    <div>
      <div className="page-header">
        <div>
          <h1>Admin Dashboard</h1>
          <p>System-wide IT service desk overview.</p>
        </div>
      </div>

      <div className="stats">
        <StatCard icon="👥" label="Total Users" value={248} />
        <StatCard icon="🎫" label="Total Tickets" value="1,248" />
        <StatCard icon="⏳" label="Open Tickets" value={84} />
        <StatCard icon="🚨" label="Critical Issues" value={7} />
      </div>

      <div className="admin-cards">
        <div className="admin-card">
          <p>Total Employees</p>
          <h2>220</h2>
          <small>Active users</small>
        </div>
        <div className="admin-card">
          <p>Support Agents</p>
          <h2>24</h2>
          <small>12 currently online</small>
        </div>
        <div className="admin-card">
          <p>Categories</p>
          <h2>12</h2>
          <small>Configured categories</small>
        </div>
      </div>

      <div className="card">
        <div className="table-header">
          <h3>Recent System Tickets</h3>
          <button
            className="btn btn-primary"
            onClick={() => navigate("/admin/tickets")}
          >
            View All
          </button>
        </div>

        <table>
          <thead>
            <tr>
              <th>ID</th>
              <th>Employee</th>
              <th>Issue</th>
              <th>Agent</th>
              <th>Status</th>
              <th>Priority</th>
            </tr>
          </thead>
          <tbody>
            {tickets.map((t) => (
              <tr key={t.id}>
                <td>{formatTicketNumber(t.id)}</td>
                <td>{t.employee}</td>
                <td>{t.title}</td>
                <td>{t.agent}</td>
                <td>
                  <StatusBadge value={t.status} />
                </td>
                <td>
                  <StatusBadge value={t.priority} type="priority" />
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
}

export default AdminDashboard;