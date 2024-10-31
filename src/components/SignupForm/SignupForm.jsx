// Marquise

import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { signup } from "../../services/authService.js"; 

function SignupForm({ setUser }) {
  const [string, setString] = useState("");
  const [formData, setFormData] = useState({
    username: "",
    password: "",
    passwordConf: "",
    email: "",
    firstName: "",
    lastName: "",
    isHomeOwner: true,
    contractorCompany: "",
    contractorCategory: "",
  });

  const navigate = useNavigate();

  const updateMessage = (string) => {
    setString(string);
  };

  const handleChange = (e) => {
    const { name, value } = e.target;

    setFormData((prevFormData) => ({
      ...prevFormData,
      [name]: value,
    }));
  };

  const handleCheckboxChange = (e) => {
    const { value } = e.target

    setFormData((prevFormData) => ({
      ...prevFormData,
      isHomeOwner: value === 'homeOwner',
    }));
  };

  const handleSubmit = async (event) => {
    event.preventDefault();

    if (formData.password !== formData.passwordConf) {
      updateMessage("This password does not match, try again!");
      return;
    }

    try {
      if (isHomeOwner) {
        delete formData.contractorCategory
        delete formData.contractorCompany
      }

      const userData = await signup(formData);
      setUser(userData);
      navigate("/homepage");
    } catch (error) {
      updateMessage(error.message);
    }
  };

  const isFormInvalid = () => {
    return !(username && password === passwordConf);
  };

  const {
    username,
    password,
    passwordConf,
    email,
    firstName,
    lastName,
    contractorCompany,
    contractorCategory,
    isHomeOwner
  } = formData;

  return (
    <main>
      <h1>Join us</h1>
      <p>{string}</p>
      <form onSubmit={handleSubmit}>
        <div>
          <label htmlFor="username">Username</label>
          <input
            type="text"
            id="username"
            value={username}
            name="username"
            onChange={handleChange}
          />
        </div>
        <div>
          <label htmlFor="email">Email</label>
          <input
            type="email"
            id="email"
            value={email}
            name="email"
            onChange={handleChange}
          />
        </div>
        <div>
          <label htmlFor="firstName">First Name</label>
          <input
            type="text"
            id="firstName"
            value={firstName}
            name="firstName"
            onChange={handleChange}
          />
        </div>
        <div>
          <label htmlFor="lastName">Last Name</label>
          <input
            type="text"
            id="lastName"
            value={lastName}
            name="lastName"
            onChange={handleChange}
          />
        </div>
        <div>
        <label>
          <input
            type="radio"
            name="userType"
            value="homeOwner"
            checked={isHomeOwner === true}
            onChange={handleCheckboxChange}
          />
          Home Owner
        </label>
        <label>
          <input
            type="radio"
            name="userType"
            value="contractor"
            checked={isHomeOwner === false}
            onChange={handleCheckboxChange}
          />
          Contractor
        </label>
      </div>
        { !isHomeOwner ? (
          <>
          <div>
          <label htmlFor="contractorCategory">Contractor Category</label>
          <input
            type="text"
            id="contractorCategory"
            value={contractorCategory}
            name="contractorCategory"
            onChange={handleChange}
          />
        </div>
        <div>
          <label htmlFor="contractorCompany">Contractor Company</label>
          <input
            type="title"
            id="contractorCompany"
            value={contractorCompany}
            name="contractorCompany"
            onChange={handleChange}
          />
        </div>
        </>
        ) : ""}
        <div>
          <label htmlFor="password">Password</label>
          <input
            type="password"
            id="password"
            value={password}
            name="password"
            onChange={handleChange}
          />
        </div>
        <div>
          <label htmlFor="passwordConf">Confirm Password:</label>
          <input
            type="password"
            id="passwordConf"
            value={passwordConf}
            name="passwordConf"
            onChange={handleChange}
          />
        </div>
        <div>
          <button disabled={isFormInvalid()}>Sign Up</button>
          <Link to="/">
            <button>Cancel</button>
          </Link>
        </div>

        {/* see about !isHomeOwner */}
      </form>
    </main>
  );
}
/*if (!isHomeOwner){
   userData.contractorCompany = contractorCompany
   userData.contractorCategory = contractorCategory
  }*/
export default SignupForm;