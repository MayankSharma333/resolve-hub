import { useState } from "react";
import { useNavigate } from "react-router-dom";
import useAuth from "../hooks/useAuth";
import StatusBadge from "../components/StatusBadge";
import { getMyTickets } from "../services/ticketService";
import { formatTicketNumber } from "../utils/helpers";

function MyTickets() {
  const { user } = useAuth();
  const navigate = useNavigate();
  const [search, setSearch] = useState("");

  // Search ke hisaab se tickets chhaanto
  const tickets = getMyTickets(user.name).filter((t) =>
    (t.title + t.category + t.status + t.priority)
      .toLowerCase()
      .includes(search.toLowerCase())
  );

  return (
    <div>
      <div className="page-header">
        <div>
          <h1>My Tickets</h1>
          <p>Tickets created by you.</p>
        </div>
        <button
          className="btn btn-primary"
          onClick={() => navigate("/employee/create")}
        >
          + Create Ticket
        </button>
      </div>

      <div className="card">
        <div className="table-header">
          <h3>My Tickets</h3>
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
              <th>Title</th>
              <th>Category</th>
              <th>Priority</th>
              <th>Status</th>
              <th>Created</th>
              <th>Action</th>
            </tr>
          </thead>
          <tbody>
            {tickets.map((t) => (
              <tr key={t.id}>
                <td>{formatTicketNumber(t.id)}</td>
                <td>{t.title}</td>
                <td>{t.category}</td>
                <td>
                  <StatusBadge value={t.priority} type="priority" />
                </td>
                <td>
                  <StatusBadge value={t.status} />
                </td>
                <td>{t.createdAt}</td>
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
    </div>
  );
}

export default MyTickets;