import { useNavigate } from "react-router-dom";
import useAuth from "../hooks/useAuth";
import StatusBadge from "../components/StatusBadge";
import { getAssignedTickets } from "../services/ticketService";
import { formatTicketNumber } from "../utils/helpers";

function AssignedTickets() {
  const { user } = useAuth();
  const navigate = useNavigate();

  const tickets = getAssignedTickets(user.name);

  return (
    <div>
      <div className="page-header">
        <div>
          <h1>Assigned Tickets</h1>
          <p>Tickets currently assigned to you.</p>
        </div>
      </div>

      <div className="card">
        <table>
          <thead>
            <tr>
              <th>ID</th>
              <th>Employee</th>
              <th>Issue</th>
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
                    Open
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

export default AssignedTickets;