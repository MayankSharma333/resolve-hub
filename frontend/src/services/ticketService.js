import { TICKET_STATUS } from "../utils/constants";

// Nakli tickets (UI wali)
const tickets = [
  {
    id: 1001,
    title: "VPN is not working",
    description:
      "I am unable to connect to the company VPN. The VPN connection fails after entering my credentials.",
    category: "Network",
    priority: "HIGH",
    status: TICKET_STATUS.IN_PROGRESS,
    employee: "Anvith S",
    agent: "Rahul Kumar",
    createdAt: "19 Oct 2026",
  },
  {
    id: 1002,
    title: "Unable to access email",
    description: "I cannot access my company email account.",
    category: "Email",
    priority: "MEDIUM",
    status: TICKET_STATUS.OPEN,
    employee: "Anvith S",
    agent: "",
    createdAt: "18 Oct 2026",
  },
  {
    id: 1003,
    title: "Laptop overheating",
    description: "Laptop becomes extremely hot during normal usage.",
    category: "Hardware",
    priority: "LOW",
    status: TICKET_STATUS.RESOLVED,
    employee: "Anvith S",
    agent: "Rahul Kumar",
    createdAt: "17 Oct 2026",
  },
  {
    id: 1004,
    title: "Laptop not starting",
    description: "Laptop is not booting after pressing the power button.",
    category: "Hardware",
    priority: "CRITICAL",
    status: TICKET_STATUS.IN_PROGRESS,
    employee: "Priya",
    agent: "Arjun Sharma",
    createdAt: "19 Oct 2026",
  },
  {
    id: 1005,
    title: "Software installation",
    description: "Need installation of approved development software.",
    category: "Software",
    priority: "LOW",
    status: TICKET_STATUS.ASSIGNED,
    employee: "Rahul",
    agent: "Rahul Kumar",
    createdAt: "18 Oct 2026",
  },
  {
    id: 1006,
    title: "Password reset",
    description: "Need password reset for company account.",
    category: "Access",
    priority: "LOW",
    status: TICKET_STATUS.RESOLVED,
    employee: "Ramesh",
    agent: "Priya",
    createdAt: "16 Oct 2026",
  },
];

// Saari tickets (Admin)
export function getAllTickets() {
  return tickets;
}

// Employee ki apni tickets
export function getMyTickets(employeeName) {
  return tickets.filter((t) => t.employee === employeeName);
}

// Agent ko assign hui tickets
export function getAssignedTickets(agentName) {
  return tickets.filter((t) => t.agent === agentName);
}

// Ek ticket id se dhundo
export function getTicketById(id) {
  return tickets.find((t) => t.id === Number(id));
}

// Nayi ticket banao
export function createTicket(data, employeeName) {
  const newTicket = {
    id: 1000 + tickets.length + 1,
    title: data.title,
    description: data.description,
    category: data.category,
    priority: data.priority,
    status: TICKET_STATUS.OPEN,
    employee: employeeName,
    agent: "",
    createdAt: new Date().toLocaleDateString("en-GB", {
      day: "2-digit",
      month: "short",
      year: "numeric",
    }),
  };
  tickets.unshift(newTicket);
  return newTicket;
}

// Status badlo
export function updateTicketStatus(id, status) {
  const ticket = getTicketById(id);
  if (ticket) {
    ticket.status = status;
  }
  return ticket;
}

// Ticket Details ke nakli comments
export function getComments() {
  return [
    {
      id: 1,
      author: "Rahul Kumar",
      time: "10 minutes ago",
      text: "I have started investigating the VPN configuration.",
    },
    {
      id: 2,
      author: "Mayank ji",
      time: "1 hour ago",
      text: "The issue started this morning.",
    },
  ];
}

// Ticket Details ki nakli history
export function getHistory() {
  return [
    { id: 1, text: "Ticket created", time: "19 Oct 2026 09:20" },
    { id: 2, text: "Ticket assigned to Rahul", time: "19 Oct 2026 09:30" },
    { id: 3, text: "Agent started working", time: "19 Oct 2026 10:10" },
  ];
}