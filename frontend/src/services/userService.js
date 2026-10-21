// Nakli users (UI wale)
const users = [
  {
    id: 1,
    name: "Mayank Ji",
    email: "mayank@company.com",
    role: "EMPLOYEE",
    status: "ACTIVE",
    createdAt: "01 Oct 2026",
  },
  {
    id: 2,
    name: "Rahul Kumar",
    email: "rahul@company.com",
    role: "AGENT",
    status: "ACTIVE",
    createdAt: "01 Sep 2026",
  },
  {
    id: 3,
    name: "Admin User",
    email: "admin@company.com",
    role: "ADMIN",
    status: "ACTIVE",
    createdAt: "01 Aug 2026",
  },
];

// Nakli agents (UI wale)
const agents = [
  {
    id: 1,
    name: "Rahul Kumar",
    email: "rahul@company.com",
    assigned: 12,
    inProgress: 5,
    resolved: 48,
    status: "ONLINE",
  },
  {
    id: 2,
    name: "Arjun Sharma",
    email: "arjun@company.com",
    assigned: 8,
    inProgress: 3,
    resolved: 41,
    status: "AWAY",
  },
];

// Nakli categories (UI wali)
const categories = [
  { id: 1, name: "Network", description: "VPN, Wi-Fi and network issues", tickets: 184 },
  { id: 2, name: "Hardware", description: "Laptop, desktop and printer issues", tickets: 246 },
  { id: 3, name: "Software", description: "Application and software issues", tickets: 312 },
];

// Sab users
export function getAllUsers() {
  return users;
}

// Sab agents
export function getAllAgents() {
  return agents;
}

// Sab categories
export function getAllCategories() {
  return categories;
}