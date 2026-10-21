import { useState } from "react";
import { CATEGORIES, PRIORITY } from "../utils/constants";

function TicketForm({ onSubmit, onCancel }) {
  const [title, setTitle] = useState("");
  const [category, setCategory] = useState(CATEGORIES[0]);
  const [priority, setPriority] = useState(PRIORITY.MEDIUM);
  const [description, setDescription] = useState("");

  const handleSubmit = () => {
    if (!title || !description) {
      alert("Please enter title and description");
      return;
    }
    onSubmit({ title, category, priority, description });
  };

  return (
    <div>
      <div className="form-grid">
        <div className="form-group full">
          <label>Title</label>
          <input
            value={title}
            onChange={(e) => setTitle(e.target.value)}
            placeholder="Enter issue title"
          />
        </div>

        <div className="form-group">
          <label>Category</label>
          <select value={category} onChange={(e) => setCategory(e.target.value)}>
            {CATEGORIES.map((c) => (
              <option key={c}>{c}</option>
            ))}
          </select>
        </div>

        <div className="form-group">
          <label>Priority</label>
          <select value={priority} onChange={(e) => setPriority(e.target.value)}>
            {Object.values(PRIORITY).map((p) => (
              <option key={p}>{p}</option>
            ))}
          </select>
        </div>

        <div className="form-group full">
          <label>Description</label>
          <textarea
            value={description}
            onChange={(e) => setDescription(e.target.value)}
            placeholder="Describe your issue"
          />
        </div>
      </div>

      <div style={{ display: "flex", justifyContent: "flex-end", gap: "10px", marginTop: "20px" }}>
        <button className="btn btn-secondary" onClick={onCancel}>
          Cancel
        </button>
        <button className="btn btn-primary" onClick={handleSubmit}>
          Create Ticket
        </button>
      </div>
    </div>
  );
}

export default TicketForm;