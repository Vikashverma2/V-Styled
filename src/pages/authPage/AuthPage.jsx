import React, { useState, useContext } from 'react';
import { useNavigate } from 'react-router-dom';
import './AuthPage.css';
import loginpng from '../../assets/login.png';
import axios from 'axios';
import { AuthContext } from '../../Context/AuthContext'; // ✅ import context

function AuthPage() {
  const navigate = useNavigate();
  const { login } = useContext(AuthContext); // ✅ get login function
  const [page, setPage] = useState("login");
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [message, setMessage] = useState("");
  const BASE_URL = "https://685c30bc89952852c2dc9047.mockapi.io";

  const resetForm = () => {
    setName("");
    setEmail("");
    setPassword("");
    setMessage("");
  };

  const handleLogin = async () => {
    if (!email || !password) {
      setMessage("Please enter email and password");
      return;
    }

    try {
      const response = await fetch(`${BASE_URL}/users`);
      const users = await response.json();
      const user = users.find((u) => u.email === email && u.password === password);

      if (user) {
        login(user.name, user.email); // ✅ update context
        navigate("/"); // ✅ go to home
      } else {
        setMessage("Invalid email or password");
      }
    } catch (error) {
      console.error("Login error:", error);
      setMessage("Something went wrong. Please try again later.");
    }
  };

  const handleSignup = async () => {
    if (!name || !email || !password) {
      setMessage("Please fill all fields");
      return;
    }

    try {
      const { data: users } = await axios.get(`${BASE_URL}/users`);
      const exists = users.find((u) => u.email === email);
      if (exists) {
        setMessage("User already exists");
        return;
      }

      await axios.post(`${BASE_URL}/users`, { name, email, password });
      setMessage("Signup successful! Please login.");
      resetForm();
      setPage("login");
    } catch (error) {
      console.error("Signup error:", error);
      setMessage("Something went wrong. Please try again.");
    }
  };

  return (
    <div className="auth-page">
      <div className="auth-container">
        <div className="auth-image">
          <img src={loginpng} alt="" />
        </div>
        <div className="auth-box">
          <h2>{page === "login" ? "Login" : "Signup"}</h2>
          {page === "signup" && (
            <input type="text" placeholder="Full Name" value={name} onChange={(e) => setName(e.target.value)} />
          )}
          <input type="email" placeholder="Email" value={email} onChange={(e) => setEmail(e.target.value)} />
          <input type="password" placeholder="Password" value={password} onChange={(e) => setPassword(e.target.value)} />
          <button onClick={page === "login" ? handleLogin : handleSignup}>
            {page === "login" ? "Login" : "Signup"}
          </button>
          <p className="link" onClick={() => { resetForm(); setPage(page === "login" ? "signup" : "login"); }}>
            {page === "login" ? "Don't have an account? Signup" : "Already have an account? Login"}
          </p>
          {message && <p className="message">{message}</p>}
        </div>
      </div>
    </div>
  );
}

export default AuthPage;
