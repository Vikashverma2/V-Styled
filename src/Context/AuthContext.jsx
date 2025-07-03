import { createContext, useState, useEffect } from "react";

export const AuthContext = createContext();

export const AuthProvider = ({ children }) => {
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const [user, setUser] = useState(null);

  useEffect(() => {
    // Check localStorage on first load
    const userName = localStorage.getItem("user_name");
    const userEmail = localStorage.getItem("user_email");
    if (userName && userEmail) {
      setIsLoggedIn(true);
      setUser({ name: userName, email: userEmail });
    }
  }, []);

  const login = (name, email) => {
    localStorage.setItem("user_name", name);
    localStorage.setItem("user_email", email);
    setIsLoggedIn(true);
    setUser({ name, email });
  };

  const logout = () => {
    localStorage.removeItem("user_name");
    localStorage.removeItem("user_email");
    setIsLoggedIn(false);
    setUser(null);
  };

  return (
    <AuthContext.Provider value={{ isLoggedIn, user, login, logout }}>
      {children}
    </AuthContext.Provider>
  );
};
