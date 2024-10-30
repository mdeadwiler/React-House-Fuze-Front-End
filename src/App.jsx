// src/App.jsx
import NavBar from "./components/NavBar/navBar.jsx";
import { createContext, useState } from "react";
import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import PostJob from './components/PostJob';
import JobDetails from './components/JobDetails';
import "./App.css";
Create context for authenticated user
export const AuthedUserContext = createContext(null);

const App = () => {
const [user, setUser] = useState(null); // State for the authenticated user

//   // Dummy function to handle signout (for demonstration purposes)
//   const handleSignout = () => {
//     setUser(null);
//   };

  return (
    <AuthedUserContext.Provider value={{ user }}>
      {/* NavBar now handles rendering the PostJob component */}
      <NavBar handleSignout={handleSignout} />

      {/* Landing page content */}
      <div style={{ padding: "20px" }}>
        <h1>House Fuze</h1>
        <h2>This is the Dev Branch</h2>
        <p>Connecting Your Home Needs with Trusted Pros</p>
      </div>
<Router>
      <Routes>
        <Route path="/" element={<PostJob />} /> {/* creates a job post route */}
        <Route path="/jobPosts/:jobPostId" element={<JobDetails />} /> {/*GET route to return a job post with details (comments n bids), do we need /jobposts/:jobpostid or can i drop that? */}
      </Routes>
    </Router>
      {  
      //  <Comments jobId={12} comments={commentArray}/>
      }
    </AuthedUserContext.Provider>

export default App;
