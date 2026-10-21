import { useState } from "react";
import { useNavigate, useParams } from "react-router-dom";
import useAuth from "../hooks/useAuth";
import StatusBadge from "../components/StatusBadge";
import {
  getTicketById,
  updateTicketStatus,
  getComments,
  getHistory,
} from "../services/ticketService";
import { formatTicketNumber } from "../utils/helpers";
import { ROLES, TICKET_STATUS } from "../utils/constants";

function TicketDetails() {
  const { id } = useParams();
  const { user } = useAuth();
  const navigate = useNavigate();

  const ticket = getTicketById(id);
  const [status, setStatus] = useState(ticket ? ticket.status : "");
  const [comments, setComments] = useState(getComments());
  const [commentText, setCommentText] = useState("");
  const history = getHistory();

  if (!ticket) {
    return (
      <div>
        <p>Ticket not found.</p>
        <button className="btn btn-secondary" onClick={() => navigate(-1)}>
          ← Back
        </button>
      </div>
    );
  }

  // Status badlo aur message dikhao
  const changeStatus = (newStatus, message) => {
    updateTicketStatus(ticket.id, newStatus);
    setStatus(newStatus);
    alert(message);
  };

  const handleAdminStatus = () => {
    const value = window.prompt(
      "Enter status: OPEN / ASSIGNED / IN_PROGRESS / RESOLVED / CLOSED"
    );
    if (value) {
      const newStatus = value.toUpperCase().replace(" ", "_");
      if (TICKET_STATUS[newStatus]) {
        changeStatus(newStatus, "Ticket status updated");
      } else {
        alert("Invalid status");
      }
    }
  };

  const handleDelete = () => {
    if (window.confirm("Delete this ticket?")) {
      alert("Ticket deleted");
      navigate("/admin/tickets");
    }
  };

  const addComment = () => {
    const text = commentText.trim();
    if (!text) {
      alert("Enter a comment");
      return;
    }
    const newComment = {
      id: Date.now(),
      author: user.name,
      time: "Just now",
      text,
    };
    setComments([newComment, ...comments]);
    setCommentText("");
  };

  return (
    <div>
      <div className="page-header">
        <div>
          <h1>Ticket Details</h1>
          <p>{formatTicketNumber(ticket.id)}</p>
        </div>
        <button className="btn btn-secondary" onClick={() => navigate(-1)}>
          ← Back
        </button>
      </div>

      <div className="ticket-layout">
        <div className="ticket-main">
          <StatusBadge value={status} />
          <h2 className="ticket-title">{ticket.title}</h2>
          <p className="ticket-description">{ticket.description}</p>

          <div className="ticket-meta">
            <div className="meta-box">
              <small>Created By</small>
              <strong>{ticket.employee}</strong>
            </div>
            <div className="meta-box">
              <small>Assigned To</small>
              <strong>{ticket.agent || "Not assigned"}</strong>
            </div>
            <div className="meta-box">
              <small>Category</small>
              <strong>{ticket.category}</strong>
            </div>
            <div className="meta-box">
              <small>Priority</small>
              <strong>{ticket.priority}</strong>
            </div>
          </div>

          {/* Role ke hisaab se buttons */}
          <div className="actions">
            {user.role === ROLES.EMPLOYEE && (
              <>
                <button
                  className="btn btn-warning"
                  onClick={() =>
                    changeStatus(TICKET_STATUS.CLOSED, "Ticket closed successfully")
                  }
                >
                  Close Ticket
                </button>
                <button
                  className="btn btn-danger"
                  onClick={() =>
                    changeStatus(TICKET_STATUS.REOPENED, "Ticket reopened successfully")
                  }
                >
                  Reopen
                </button>
              </>
            )}

            {user.role === ROLES.AGENT && (
              <>
                <button
                  className="btn btn-primary"
                  onClick={() =>
                    changeStatus(TICKET_STATUS.IN_PROGRESS, "Ticket moved to IN PROGRESS")
                  }
                >
                  Start Work
                </button>
                <button
                  className="btn btn-success"
                  onClick={() =>
                    changeStatus(TICKET_STATUS.RESOLVED, "Ticket resolved successfully")
                  }
                >
                  Resolve
                </button>
              </>
            )}

            {user.role === ROLES.ADMIN && (
              <>
                <button
                  className="btn btn-primary"
                  onClick={() => alert("Assign agent dialog opened")}
                >
                  Assign Agent
                </button>
                <button className="btn btn-warning" onClick={handleAdminStatus}>
                  Change Status
                </button>
                <button className="btn btn-danger" onClick={handleDelete}>
                  Delete
                </button>
              </>
            )}
          </div>

          <hr style={{ margin: "25px 0", border: 0, borderTop: "1px solid #eee" }} />

          <h3>Comments</h3>
          <div>
            {comments.map((c) => (
              <div className="comment" key={c.id}>
                <strong>{c.author}</strong>
                <small>{c.time}</small>
                <p>{c.text}</p>
              </div>
            ))}
          </div>

          <div className="comment-box">
            <textarea
              placeholder="Write a comment..."
              value={commentText}
              onChange={(e) => setCommentText(e.target.value)}
            />
            <button className="btn btn-primary" onClick={addComment}>
              Send
            </button>
          </div>
        </div>

        <div className="ticket-side">
          <h3>Ticket History</h3>
          {history.map((h) => (
            <div className="activity" key={h.id}>
              <div className="activity-dot"></div>
              <div>
                {h.text}
                <small>{h.time}</small>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

export default TicketDetails;