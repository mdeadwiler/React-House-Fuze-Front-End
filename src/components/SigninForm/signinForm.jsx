// src/components/SigninForm.jsx
import { useState } from "react";
import { useNavigate } from "react-router-dom";
import "./signinForm.css";
import { signin } from "../../Services/authService.js";

function SigninForm({ setUser }) {
  const [message, setMessage] = useState("");
  const [formData, setFormData] = useState({
    username: "",
    password: ""
  });

  const navigate = useNavigate();

  const updateMessage = (message) => {
    setMessage(message);
  };

  const handleChange = (e) => {
    const { name, value } = e.target;
    updateMessage("");
    setFormData((prevFormData) => ({
      ...prevFormData,
      [name]: value
    }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    const userData = await signin(formData);
    setUser(userData);
    navigate("/homepage");
  };

  return (
    <main className="signin-body">
      <h3 className="signin-header_login">Sign In</h3>
      <p className="signin-message_login">{message}</p>
      <form onSubmit={handleSubmit} id="signin-container">
        <div className="signin-username_login">
          <label htmlFor="username">Username:</label>
          <input
            type="text"
            autoComplete="off"
            id="username"
            value={formData.username}
            name="username"
            onChange={handleChange}
          />
        </div>
        <div className="signin-password_login">
          <label htmlFor="password">Password:</label>
          <input
            type="password"
            autoComplete="off"
            id="password"
            value={formData.password}
            name="password"
            onChange={handleChange}
          />
        </div>
        <div>
          <button>Log In</button>
        </div>
      </form>
    </main>
  );
}

export default SigninForm;
