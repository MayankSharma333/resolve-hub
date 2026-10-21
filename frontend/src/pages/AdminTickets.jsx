import { useState } from "react";
import { useNavigate } from "react-router-dom";
import StatusBadge from "../components/StatusBadge";
import { getAllTickets } from "../services/ticketService";
import { formatTicketNumber } from "../utils/helpers";

function AdminTickets() {
  const navigate = useNavigate();
  const [search, setSearch] = useState("");

  const tickets = getAllTickets().filter((t) =>
    (t.title + t.employee + t.category + t.agent + t.status + t.priority)
      .toLowerCase()
      .includes(search.toLowerCase())
  );

  return (
    <div>
      <div className="page-header">
        <div>
          <h1>All Tickets</h1>
          <p>Manage every ticket in the system.</p>
        </div>
      </div>

      <div className="card">
        <div className="table-header">
          <h3>Ticket Management</h3>
          <input
            className="search"
            placeholder="Search ticket..."
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
              <th>Category</th>
              <th>Agent</th>
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
                <td>{t.category}</td>
                <td>{t.agent || "-"}</td>
                <td>
                  <StatusBadge value={t.priority} type="priority" />
                </td>
                <td>
                  <StatusBadge value={t.status} />
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
    </div>
  );
}

export default AdminTickets;