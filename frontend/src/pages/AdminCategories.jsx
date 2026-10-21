import { getAllCategories } from "../services/userService";

function AdminCategories() {
  const categories = getAllCategories();

  return (
    <div>
      <div className="page-header">
        <div>
          <h1>Categories</h1>
          <p>Configure ticket categories.</p>
        </div>
        <button
          className="btn btn-primary"
          onClick={() => alert("Category form opened")}
        >
          + Add Category
        </button>
      </div>

      <div className="card">
        <table>
          <thead>
            <tr>
              <th>ID</th>
              <th>Name</th>
              <th>Description</th>
              <th>Tickets</th>
              <th>Action</th>
            </tr>
          </thead>
          <tbody>
            {categories.map((c) => (
              <tr key={c.id}>
                <td>{c.id}</td>
                <td>{c.name}</td>
                <td>{c.description}</td>
                <td>{c.tickets}</td>
                <td>
                  <button
                    className="btn btn-warning"
                    onClick={() => alert("Edit category")}
                  >
                    Edit
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

export default AdminCategories;
