// Marquise

import { useState } from "react";
import {Link, useNavigate } from "react-router-dom";
import { SignupForm } from "../SignupForm/SignupForm";



function SignupForm({ setUser }) {
   const [string, setString] = useState("");
   const [formData, setFormData] = useState({
    username: "",
    hashedPassword: "",
    email: "",
    firstName: "",
    lastName: "",
    isHomeOwner: "",
    contractorCompany: "",
    contractorCategory: "",
}) 
const navigate = useNavigate();
const updateMessage = (string) => {
   setString(string);
};
   const handleChange = (event) => {
      const user = event.target[{ username, hashedPassword, email, firstName, lastName, isHomeOwner, contractorCompany, contractorCategory }]

      setFormData(( prevFormData ) => ({
         ...prevFormData,
         [user]: user,
      }));
   };
const handleSubmit = async (event) => {
   event.preventDefault();

   if (formData.hashedPassword !== formData.hashedPasswordConf) {
      updateMessage("This password does not match, try again!");
      return;
   }
   try {
      const userRes = await SignupForm(formData);
      setUser(userRes.user);
      navigate("/")
   } catch (error) {
      updateMessage(error.message);
   }
};
const isFormInvalid = () => {
   return !(username && hashedPassword === hashedPasswordConf);
};
const { username, hashedPassword, hashedPasswordConf} = formData;

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
            onChange={handleChange} />
            </div>
            <div>
            <label htmlFor="email">Email</label>
            <input
            type="email"
            id="email"
            value={email}
            name="email"
            onChange={handleChange} />
            </div>
            <div>
            <label htmlFor="firstName">First Name</label>
            <input
            type="text"
            id="username"
            value={firstName}
            name="firstName"
            onChange={handleChange} />
            </div>
            <div>
            <label htmlFor="lastName">Last Name</label>
            <input
            type="text"
            id="username"
            value={lastName}
            name="lastName"
            onChange={handleChange} />
            </div>
            <div>
            <label htmlFor="hashedPassword">Password</label>
            <input
            type="hashedPassword"
            id="hashedPassword"
            value={hashedPassword}
            name="hashedPassword"
            onChange={handleChange} />
            </div>
            <div>
            <label htmlFor="contractorCompany">Contractor Company</label>
            <input
            type="title"
            id="contractorCompany"
            value={contractoCompany}
            name="contractorCompany"
            onChange={handleChange} />
            </div>
            <div>
            <label htmlFor="contractorCategory">Contractor Category</label>
            <input
            type="text"
            id="contractorCategory"
            value={contractorCategory}
            name="contractorCategory"
            onChange={handleChange} />
            </div>
      {/* see about !isHomeOwner */}
      </form>
   </main>
)

}
