import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import './AuthPage.css';
import loginpng from '../../assets/login.png';
import axios from 'axios';

function AuthPage() {
  const navigate = useNavigate();
  const [page, setPage] = useState("login"); // "login" or "signup"
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

    const user = users.find(
      (u) => u.email === email && u.password === password
    );

    if (user) {
      // Store user info in localStorage
      // localStorage.setItem("loggedInUser", JSON.stringify({
      //   name: user.name,
      //   email: user.email,
      // }));
      localStorage.setItem("user_name", user.name);
      localStorage.setItem("user_email", user.email);


      window.location.href = "/"; 
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
    // Step 1: Get all users from the API
    const { data: users } = await axios.get(`${BASE_URL}/users`);

    // Step 2: Check if email already exists
    const exists = users.find((u) => u.email === email);
    if (exists) {
      setMessage("User already exists");
      return;
    }

    // Step 3: Register the new user
    await axios.post(`${BASE_URL}/users`, {
      name,
      email,
      password,
    });

    // Step 4: Show success message and reset
    setMessage("Signup successful! Please login.");
    resetForm(); // Clear name, email, password
    setPage("login"); // Switch to login view
  } catch (error) {
    console.error("Signup error:", error);
    setMessage("Something went wrong. Please try again.");
  }
};


  return (
   <div className="auth-page">
    <div className="auth-container">
    <div className='auth-image'>
      <img src={loginpng} alt="" />
    </div>
    <div className="auth-box">
      <h2>{page === "login" ? "login" : "Signup"}</h2>

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
