import { useState } from "react";
import "./signinForm.css";

function SigninForm() {
  const [message, setMessage] = useState("");
  const [formData, setFormData] = useState({
    username: "",
    password: ""
  });

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
  const handleSubmit = e => {
    e.preventDefault();
    console.log("Form Submitted:", formData);
  };
  return (
    <main>
      <h3 className="header_login"></h3>
      <p className="message_login">
        {message}
      </p>
      <form onSubmit={handleSubmit}>
        <div className="username_login">
          <label htmlFor="username">Usernmae:</label>
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
  );
}

export default SigninForm;
