import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import './AuthPage.css';
import loginpng from '../../assets/login.png';

function AuthPage() {
  const navigate = useNavigate();
  const [page, setPage] = useState("login"); // "login" or "signup"
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [message, setMessage] = useState("");

  const resetForm = () => {
    setName("");
    setEmail("");
    setPassword("");
    setMessage("");
  };

  const handleLogin = () => {
    if (!email || !password) {
      setMessage("Please enter email and password");
      return;
    }

    const users = JSON.parse(localStorage.getItem("users")) || [];
    const user = users.find((u) => u.email === email && u.password === password); 

    if (user) {
      navigate("/"); // redirect immediately
    } else {
      setMessage("Invalid email or password");
    }
  };

  const handleSignup = () => {
    if (!name || !email || !password) {
      setMessage("Please fill all fields");
      return;
    }

    const users = JSON.parse(localStorage.getItem("users")) || [];
    const exists = users.find((u) => u.email === email);

    if (exists) {
      setMessage("User already exists");
    } else {
      users.push({ name, email, password });
      localStorage.setItem("users", JSON.stringify(users));
      setMessage("Signup successful! Please login.");
      resetForm();
      setPage("login");
    }
  };

  return (
   <div className="auth-page">
    <div className="auth-container">
    <div className='auth-image'>
      <img src={loginpng} alt="" />
    </div>
    <div className="auth-box">
      <h2>{page === "login" ? "Login" : "Signup"}</h2>

      {page === "signup" && (
        <input
          type="text"
          placeholder="Full Name"
          value={name}
          onChange={(e) => setName(e.target.value)}
        />
      )}

      <input
        type="email"
        placeholder="Email"
        value={email}
        onChange={(e) => setEmail(e.target.value)}
      />

      <input
        type="password"
        placeholder="Password"
        value={password}
        onChange={(e) => setPassword(e.target.value)}
      />

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
