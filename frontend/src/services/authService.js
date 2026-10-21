import { ROLES } from "../utils/constants";

// Nakli users (UI wale same)
const demoUsers = {
  [ROLES.EMPLOYEE]: {
    name: "Mayank ji",
    email: "mayank@company.com",
    role: ROLES.EMPLOYEE,
  },
  [ROLES.AGENT]: {
    name: "Rahul Kumar",
    email: "rahul@company.com",
    role: ROLES.AGENT,
  },
  [ROLES.ADMIN]: {
    name: "Admin User",
    email: "admin@company.com",
    role: ROLES.ADMIN,
  },
};

// Login karo aur diary me likh do
export function login(role) {
  const user = demoUsers[role];
  localStorage.setItem("user", JSON.stringify(user));
  return user;
}

// Logout: diary se mita do
export function logout() {
  localStorage.removeItem("user");
  localStorage.removeItem("token");
}

// Abhi kaun login hai? (koi nahi to null)
export function getCurrentUser() {
  const saved = localStorage.getItem("user");
  return saved ? JSON.parse(saved) : null;
}