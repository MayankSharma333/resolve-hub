import { useState } from "react";
import { getAllUsers } from "../services/userService";

// Role ka rang (UI wala)
const roleClass = {
  EMPLOYEE: "open",
  AGENT: "progress",
  ADMIN: "critical",
};

function AdminUsers() {
  const [search, setSearch] = useState("");

  const users = getAllUsers().filter((u) =>
    (u.name + u.email + u.role).toLowerCase().includes(search.toLowerCase())
  );

  return (
    <div>
      <div className="page-header">
        <div>
          <h1>User Management</h1>
          <p>Manage employees, agents and administrators.</p>
        </div>
        <button
          className="btn btn-primary"
          onClick={() => alert("Add user form opened")}
        >
          + Add User
        </button>
      </div>

      <div className="card">
        <div className="table-header">
          <h3>All Users</h3>
          <input
            className="search"
            placeholder="Search users..."
            value={search}
            onChange={(e) => setSearch(e.target.value)}
          />
        </div>

        <table>
          <thead>
            <tr>
              <th>Name</th>
              <th>Email</th>
              <th>Role</th>
              <th>Status</th>
              <th>Created</th>
              <th>Action</th>
            </tr>
          </thead>
          <tbody>
            {users.map((u) => (
              <tr key={u.id}>
                <td>{u.name}</td>
                <td>{u.email}</td>
                <td>
                  <span className={"badge " + roleClass[u.role]}>{u.role}</span>
                </td>
                <td>
                  <span className="badge resolved">{u.status}</span>
                </td>
                <td>{u.createdAt}</td>
                <td>
                  {u.role === "AGENT" ? (
                    <button
                      className="btn btn-warning"
                      onClick={() => alert("Edit user")}
                    >
                      Edit
                    </button>
                  ) : (
                    <button
                      className="btn btn-secondary"
                      onClick={() => alert("User details opened")}
                    >
                      View
                    </button>
                  )}
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
}

export default AdminUsers;