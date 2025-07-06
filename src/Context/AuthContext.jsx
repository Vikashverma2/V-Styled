import { createContext, useState, useEffect } from "react";

export const AuthContext = createContext();

export const AuthProvider = ({ children }) => {
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const [user, setUser] = useState(null);

  useEffect(() => {
    const email = localStorage.getItem("user_email");
    const name = localStorage.getItem("user_name");
    if (email && name) {
      setIsLoggedIn(true);
      setUser({ email, name });
    }
  }, []);

  const login = (name, email) => {
    localStorage.setItem("user_name", name);
    localStorage.setItem("user_email", email);
    setIsLoggedIn(true);
    setUser({ name, email });
  };

  const logout = () => {
    const email = localStorage.getItem("user_email");
    if (email) {
      localStorage.removeItem(`cartItems_${email}`);
    }
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
