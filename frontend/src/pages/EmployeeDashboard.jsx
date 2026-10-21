import { useNavigate } from "react-router-dom";
import useAuth from "../hooks/useAuth";
import StatCard from "../components/StatCard";
import StatusBadge from "../components/StatusBadge";
import { getMyTickets } from "../services/ticketService";
import { formatTicketNumber } from "../utils/helpers";

function EmployeeDashboard() {
  const { user } = useAuth();
  const navigate = useNavigate();

  // Is employee ki tickets
  const tickets = getMyTickets(user.name);

  return (
    <div>
      <div className="page-header">
        <div>
          <h1>Employee Dashboard</h1>
          <p>Track your IT support requests.</p>
        </div>
        <button
          className="btn btn-primary"
          onClick={() => navigate("/employee/create")}
        >
          + Create Ticket
        </button>
      </div>

      {/* Upar ke 4 number wale dabbe (UI wale numbers) */}
      <div className="stats">
        <StatCard icon="🎫" label="My Tickets" value={8} />
        <StatCard icon="🔵" label="Open" value={3} />
        <StatCard icon="⚙️" label="In Progress" value={2} />
        <StatCard icon="✅" label="Resolved" value={3} />
      </div>

      <div className="dashboard-grid">
        {/* Recent Tickets */}
        <div className="panel">
          <h3>Recent Tickets</h3>
          <table>
            <thead>
              <tr>
                <th>ID</th>
                <th>Title</th>
                <th>Status</th>
                <th>Priority</th>
                <th></th>
              </tr>
            </thead>
            <tbody>
              {tickets.map((t) => (
                <tr key={t.id}>
                  <td>{formatTicketNumber(t.id)}</td>
                  <td>{t.title}</td>
                  <td>
                    <StatusBadge value={t.status} />
                  </td>
                  <td>
                    <StatusBadge value={t.priority} type="priority" />
                  </td>
                  <td>
                    <button
                      className="btn btn-secondary"
                      onClick={() => navigate("/ticket/" + t.id)}
                    >
                      View
                    </button>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>

        {/* Recent Activity */}
        <div className="panel">
          <h3>Recent Activity</h3>
          <div className="activity">
            <div className="activity-dot"></div>
            <div>
              Agent started working on VPN issue
              <small>10 minutes ago</small>
            </div>
          </div>
          <div className="activity">
            <div className="activity-dot"></div>
            <div>
              Your ticket was assigned to Rahul
              <small>1 hour ago</small>
            </div>
          </div>
          <div className="activity">
            <div className="activity-dot"></div>
            <div>
              Ticket RH-1003 resolved
              <small>Yesterday</small>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default EmployeeDashboard;