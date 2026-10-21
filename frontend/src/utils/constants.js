// 3 log (roles)
export const ROLES = {
  EMPLOYEE: "EMPLOYEE",
  AGENT: "AGENT",
  ADMIN: "ADMIN",
};

// Role ka naam screen par kaisa dikhega
export const ROLE_LABEL = {
  EMPLOYEE: "Employee",
  AGENT: "Agent",
  ADMIN: "Administrator",
};

// Login ke baad kis page par jana hai
export const ROLE_HOME = {
  EMPLOYEE: "/employee",
  AGENT: "/agent",
  ADMIN: "/admin",
};

// Ticket ki halat (status)
export const TICKET_STATUS = {
  OPEN: "OPEN",
  ASSIGNED: "ASSIGNED",
  IN_PROGRESS: "IN_PROGRESS",
  RESOLVED: "RESOLVED",
  CLOSED: "CLOSED",
  REOPENED: "REOPENED",
};

// Ticket kitni zaruri hai (priority)
export const PRIORITY = {
  LOW: "LOW",
  MEDIUM: "MEDIUM",
  HIGH: "HIGH",
  CRITICAL: "CRITICAL",
};

// Ticket ki categories
export const CATEGORIES = ["Network", "Hardware", "Software", "Email", "Access"];

// Status ko kaunsa rang (CSS class) milega
export const STATUS_CLASS = {
  OPEN: "open",
  ASSIGNED: "assigned",
  IN_PROGRESS: "progress",
  RESOLVED: "resolved",
  CLOSED: "closed",
  REOPENED: "critical",
};

// Priority ko kaunsa rang (CSS class) milega
export const PRIORITY_CLASS = {
  LOW: "low",
  MEDIUM: "medium",
  HIGH: "high",
  CRITICAL: "critical",
};