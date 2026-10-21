import { useState } from "react";
import { useNavigate } from "react-router-dom";
import useAuth from "../hooks/useAuth";
import { ROLES, ROLE_HOME } from "../utils/constants";

function Login() {
  const { login } = useAuth();
  const navigate = useNavigate();

  const [email, setEmail] = useState("demo@resolvehub.com");
  const [password, setPassword] = useState("password");

  // Role se login karo aur uske dashboard par bhejo
  const loginAs = (role) => {
    login(role);
    navigate(ROLE_HOME[role]);
  };

  // Normal Login button (abhi nakli: Employee bana dega)
  const handleLogin = () => {
    if (!email) {
      alert("Please enter email");
      return;
    }
    loginAs(ROLES.EMPLOYEE);
  };

  return (
    <div className="login-screen">
      <div className="login-box">
        <div className="login-logo">
          Resolve<span>Hub</span>
        </div>

        <div className="form-group">
          <label>Email</label>
          <input
            type="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          />
        </div>

        <div className="form-group">
          <label>Password</label>
          <input
            type="password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
          />
        </div>

        <button className="btn btn-primary" onClick={handleLogin}>
          Login
        </button>

        <div className="demo-roles">
          <button onClick={() => loginAs(ROLES.EMPLOYEE)}>Employee</button>
          <button onClick={() => loginAs(ROLES.AGENT)}>Agent</button>
          <button onClick={() => loginAs(ROLES.ADMIN)}>Admin</button>
        </div>
      </div>
    </div>
  );
}

export default Login;