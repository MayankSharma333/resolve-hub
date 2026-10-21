import StatusBadge from "./StatusBadge";
import { formatTicketNumber } from "../utils/helpers";

function TicketCard({ ticket, onView }) {
  return (
    <div
      className="panel"
      style={{
        marginBottom: "12px",
        display: "flex",
        justifyContent: "space-between",
        alignItems: "center",
        gap: "12px",
      }}
    >
      <div>
        <small style={{ color: "#6b7280" }}>
          {formatTicketNumber(ticket.id)} • {ticket.category}
        </small>
        <h4 style={{ margin: "5px 0 8px" }}>{ticket.title}</h4>
        <StatusBadge value={ticket.status} />{" "}
        <StatusBadge value={ticket.priority} type="priority" />
      </div>

      <button className="btn btn-secondary" onClick={() => onView(ticket.id)}>
        View
      </button>
    </div>
  );
}

export default TicketCard;