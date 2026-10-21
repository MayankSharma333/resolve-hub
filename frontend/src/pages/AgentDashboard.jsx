import { useState } from "react";
import { useNavigate } from "react-router-dom";
import useAuth from "../hooks/useAuth";
import StatCard from "../components/StatCard";
import StatusBadge from "../components/StatusBadge";
import { getAssignedTickets } from "../services/ticketService";
import { formatTicketNumber } from "../utils/helpers";

function AgentDashboard() {
  const { user } = useAuth();
  const navigate = useNavigate();
  const [search, setSearch] = useState("");

  const tickets = getAssignedTickets(user.name).filter((t) =>
    (t.title + t.employee + t.status + t.priority)
      .toLowerCase()
      .includes(search.toLowerCase())
  );

  return (
    <div>
      <div className="page-header">
        <div>
          <h1>Agent Dashboard</h1>
          <p>Manage and resolve assigned support tickets.</p>
        </div>
      </div>

      {/* UI wale numbers */}
      <div className="stats">
        <StatCard icon="📥" label="Assigned" value={12} />
        <StatCard icon="⚙️" label="In Progress" value={5} />
        <StatCard icon="✅" label="Resolved Today" value={7} />
        <StatCard icon="🚨" label="Critical" value={2} />
      </div>

      <div className="card">
        <div className="table-header">
          <h3>Assigned Tickets</h3>
          <input
            className="search"
            placeholder="Search tickets..."
            value={search}
            onChange={(e) => setSearch(e.target.value)}
          />
        </div>

        <table>
          <thead>
            <tr>
              <th>ID</th>
              <th>Employee</th>
              <th>Title</th>
              <th>Priority</th>
              <th>Status</th>
              <th>Action</th>
            </tr>
          </thead>
          <tbody>
            {tickets.map((t) => (
              <tr key={t.id}>
                <td>{formatTicketNumber(t.id)}</td>
                <td>{t.employee}</td>
                <td>{t.title}</td>
                <td>
                  <StatusBadge value={t.priority} type="priority" />
                </td>
                <td>
                  <StatusBadge value={t.status} />
                </td>
                <td>
                  <button
                    className="btn btn-primary"
                    onClick={() => navigate("/ticket/" + t.id)}
                  >
                    Handle
                  </button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
}

export default AgentDashboard;