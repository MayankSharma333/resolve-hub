import { useNavigate } from "react-router-dom";
import useAuth from "../hooks/useAuth";
import TicketForm from "../components/TicketForm";
import { createTicket } from "../services/ticketService";

function CreateTicket() {
  const { user } = useAuth();
  const navigate = useNavigate();

  const handleSubmit = (data) => {
    createTicket(data, user.name);
    alert("Ticket created successfully");
    navigate("/employee/tickets");
  };

  return (
    <div>
      <div className="page-header">
        <div>
          <h1>Create Ticket</h1>
          <p>Describe your IT issue and we will help you.</p>
        </div>
      </div>

      <div className="panel" style={{ maxWidth: "600px" }}>
        <TicketForm
          onSubmit={handleSubmit}
          onCancel={() => navigate("/employee")}
        />
      </div>
    </div>
  );
}

export default CreateTicket;