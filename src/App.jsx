import NavBar from "../src/components/NavBar/NavBar";
import { useState } from "react";
import { AuthedUserContext } from "./services/authContext.js";
import { Routes, Route } from "react-router-dom";
import Landing from "./components/Landing/Landing.jsx";
import SignupForm from "./components/SignupForm/SignupForm.jsx"
import SigninForm from "./components/SigninForm/SigninForm.jsx"
import JobListings from "./components/JobListings/JobListings.jsx";
import PostJob from "./components/PostJob/PostJob.jsx";
import JobDetails from "./components/JobDetails/JobDetails.jsx";
import "./App.css";

const App = () => {
  const [user, setUser] = useState(null); // State for the authenticated user
  
  const handleSignout = () => {
    setUser(null);
  };

  return (
    <AuthedUserContext.Provider value={{ user }}>
      <NavBar handleSignout={handleSignout} />
      <Routes>
        <Route path="/" element={<Landing />} />
        <Route path="/signup" element={<SignupForm setUser={setUser}/>} />
        <Route path="/signin" element={<SigninForm setUser={setUser}/>} />
        <Route path="/homepage" element={<JobListings />}/>
        
        <Route path="/jobPosts/new" element={<PostJob />} />
        <Route path="/jobPosts/:jobPostId" element={<JobDetails />} />
      </Routes>
    </AuthedUserContext.Provider>
  );
};
export default App;
