import { createContext, useState } from "react";
import {
  login as doLogin,
  logout as doLogout,
  getCurrentUser,
} from "../services/authService";

export const AuthContext = createContext(null);

export function AuthProvider({ children }) {
  // Shuru me diary (localStorage) se dekho ki koi login hai ya nahi
  const [user, setUser] = useState(getCurrentUser());

  const login = (role) => {
    const loggedInUser = doLogin(role);
    setUser(loggedInUser);
    return loggedInUser;
  };

  const logout = () => {
    doLogout();
    setUser(null);
  };

  return (
    <AuthContext.Provider value={{ user, login, logout }}>
      {children}
    </AuthContext.Provider>
  );
}