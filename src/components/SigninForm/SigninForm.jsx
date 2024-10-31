import { useState } from "react";
import { useNavigate } from "react-router-dom";
import "./SigninForm.css";
import { signin } from "../../services/authService.js";

function SigninForm({ setUser }) {
  const [message, setMessage] = useState("");
  const [formData, setFormData] = useState({
    username: "",
    password: ""
  });

  const navigate = useNavigate();

  //message above login
  const updateMessage = message => {
    setMessage(message);
  };

  //handle for event...
  const handleChange = e => {
    const { name, value } = e.target;
    updateMessage("");
    setFormData(prevFormData => ({
      ...prevFormData,
      [name]: value
    }));
  };

  //handle submit section....
  const handleSubmit = async e => {
    e.preventDefault();
    // console.log("Form Submitted:", formData);
    const userData = await signin(formData); /// userData that we pass in authService....
    setUser(userData);
    navigate("/homepage");
  };

  return (
    <div id="sigin-parent-container">
      <main id="signin-container">
        {/* <h3 className="header_login" ></h3> */}
        <p className="message_login">
          {message}
        </p>
        <form onSubmit={handleSubmit}>
          <div className="username_login">
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
          <div className="password_login">
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
    </div>
  );
}

export default SigninForm;