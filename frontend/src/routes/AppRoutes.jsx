import { Navigate, Outlet, Route, Routes } from "react-router-dom";
import useAuth from "../hooks/useAuth";
import { ROLES, ROLE_HOME } from "../utils/constants";

import Sidebar from "../components/Sidebar";
import Navbar from "../components/Navbar";

import Login from "../pages/Login";
import Register from "../pages/Register";
import EmployeeDashboard from "../pages/EmployeeDashboard";
import MyTickets from "../pages/MyTickets";
import CreateTicket from "../pages/CreateTicket";
import AgentDashboard from "../pages/AgentDashboard";
import AssignedTickets from "../pages/AssignedTickets";
import AdminDashboard from "../pages/AdminDashboard";
import AdminUsers from "../pages/AdminUsers";
import AdminAgents from "../pages/AdminAgents";
import AdminTickets from "../pages/AdminTickets";
import AdminCategories from "../pages/AdminCategories";
import TicketDetails from "../pages/TicketDetails";

// Ghar ka dhancha: Sidebar + Navbar + beech me page
function Layout() {
  const { user } = useAuth();

  // Login nahi hai to login page par bhejo
  if (!user) return <Navigate to="/login" replace />;

  return (
    <div className="app">
      <Sidebar />
      <main className="main">
        <Navbar />
        <section className="content">
          <Outlet />
        </section>
      </main>
    </div>
  );
}

// Sirf sahi role ko andar jaane do
function RequireRole({ role }) {
  const { user } = useAuth();
  if (user.role !== role) {
    return <Navigate to={ROLE_HOME[user.role]} replace />;
  }
  return <Outlet />;
}

// "/" par: login hai to dashboard, nahi to login
function Home() {
  const { user } = useAuth();
  return <Navigate to={user ? ROLE_HOME[user.role] : "/login"} replace />;
}

function AppRoutes() {
  return (
    <Routes>
      <Route path="/login" element={<Login />} />
      <Route path="/register" element={<Register />} />

      <Route element={<Layout />}>
        <Route element={<RequireRole role={ROLES.EMPLOYEE} />}>
          <Route path="/employee" element={<EmployeeDashboard />} />
          <Route path="/employee/tickets" element={<MyTickets />} />
          <Route path="/employee/create" element={<CreateTicket />} />
        </Route>

        <Route element={<RequireRole role={ROLES.AGENT} />}>
          <Route path="/agent" element={<AgentDashboard />} />
          <Route path="/agent/tickets" element={<AssignedTickets />} />
        </Route>

        <Route element={<RequireRole role={ROLES.ADMIN} />}>
          <Route path="/admin" element={<AdminDashboard />} />
          <Route path="/admin/users" element={<AdminUsers />} />
          <Route path="/admin/agents" element={<AdminAgents />} />
          <Route path="/admin/tickets" element={<AdminTickets />} />
          <Route path="/admin/categories" element={<AdminCategories />} />
        </Route>

        <Route path="/ticket/:id" element={<TicketDetails />} />
      </Route>

      <Route path="*" element={<Home />} />
    </Routes>
  );
}

export default AppRoutes;