import { getAllAgents } from "../services/userService";

// Agent ke status ka rang (UI wala)
const statusClass = {
  ONLINE: "resolved",
  AWAY: "assigned",
};

function AdminAgents() {
  const agents = getAllAgents();

  return (
    <div>
      <div className="page-header">
        <div>
          <h1>Agent Management</h1>
          <p>Manage support agents and workload.</p>
        </div>
        <button
          className="btn btn-primary"
          onClick={() => alert("Assign agent form opened")}
        >
          + Add Agent
        </button>
      </div>

      <div className="card">
        <table>
          <thead>
            <tr>
              <th>Agent</th>
              <th>Email</th>
              <th>Assigned</th>
              <th>In Progress</th>
              <th>Resolved</th>
              <th>Status</th>
              <th>Action</th>
            </tr>
          </thead>
          <tbody>
            {agents.map((a) => (
              <tr key={a.id}>
                <td>{a.name}</td>
                <td>{a.email}</td>
                <td>{a.assigned}</td>
                <td>{a.inProgress}</td>
                <td>{a.resolved}</td>
                <td>
                  <span className={"badge " + statusClass[a.status]}>
                    {a.status}
                  </span>
                </td>
                <td>
                  <button
                    className="btn btn-secondary"
                    onClick={() => alert("Agent details opened")}
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

export default AdminAgents;