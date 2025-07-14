import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import "../styles/Auth.css";

function Login() {
  const [email, setEmail] = useState("");
  const [pass, setPass] = useState("");
  const [message, setMessage] = useState("");
  const navigate = useNavigate();

  const handleLogin = (e) => {
    e.preventDefault();

    if (!email || !pass) {
      setMessage("❌ Please fill in all fields.");
    } else {
      setMessage("✅ Login successful!");
      setTimeout(() => {
        navigate("/");
      }, 1500);
    }
  };

  return (
    <div className="auth-page">
      <form className="auth-form" onSubmit={handleLogin}>
        <h2>Login</h2>
        <input
          type="email"
          placeholder="Enter your email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
        />
        <input
          type="password"
          placeholder="Enter your password"
          value={pass}
          onChange={(e) => setPass(e.target.value)}
        />
        <button type="submit">Login</button>
        {message && (
          <p
            style={{
              marginTop: "10px",
              color: message.startsWith("❌") ? "red" : "green"
            }}
          >
            {message}
          </p>
        )}
      </form>
    </div>
  );
}

export default Login;


