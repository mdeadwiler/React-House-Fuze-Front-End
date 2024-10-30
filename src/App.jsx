
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import NavBar from "./components/NavBar/navBar.jsx";
import ContractorProfile from "./components/ContractorProfile/contractorProfile.jsx";
import JobListings from "./components/JobListings/jobListings.jsx";
import NavBar from "./components/NavBar/navBar.jsx";
import { createContext, useState } from "react";
import "./App.css";

// Create context for authenticated user
export const AuthedUserContext = createContext(null);

const App = () => {
  const [user, setUser] = useState(null); // State for the authenticated user


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
    </AuthedUserContext.Provider>
  );
};

export default App;