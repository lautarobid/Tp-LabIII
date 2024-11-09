import React, { useContext, useState } from "react";
import "./Login.css";
import { AuthenticationContext } from "../contexts/authenticationContext/AuthenticationContext.jsx";
import { replace, useNavigate } from "react-router-dom";

const Login = () => {
  const { LoginUser } = useContext(AuthenticationContext);
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const navigate = useNavigate();
  const handleSubmit = async (e) => {
    e.preventDefault();
    if (email.trim() === "" || password.trim() === "") {
      alert("Por favor, rellena todos los campos");
      return;
    }
    const userRequest = {
      email: email,
      password: password,
    };
    const response = await LoginUser(userRequest);
    if (response !== null) {
      navigate("/", { replace: true });
    }
  };
  return (
    <div className="login-container">
      <div className="login-box">
        <h2>Login</h2>
        <p>Sign in to continue</p>
        <form onSubmit={handleSubmit}>
          <div className="input-field">
            <label htmlFor="email">Email</label>
            <input
              type="email"
              id="email"
              placeholder="Email"
              onChange={(e) => setEmail(e.target.value)}
            />
          </div>
          <div className="input-field">
            <label htmlFor="password">Password</label>
            <input
              type="password"
              id="password"
              placeholder="Password"
              onChange={(e) => setPassword(e.target.value)}
            />
          </div>
          <button type="submit" className="login-button">
            Login
          </button>
        </form>
      </div>
    </div>
  );
};

export default Login;
