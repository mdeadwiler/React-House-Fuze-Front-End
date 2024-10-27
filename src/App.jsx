// src/App.jsx
import { useState, createContext } from "react";

import NavBar from "./components/NavBar/navBar.jsx";

import "./App.css";
export const AuthedUserContext = createContext(null);
const App = () => {
  const [user, setUser] = useState(null);
  const handleSignout = () => {
    //signout();
    setUser(null);
  }
  return (
    <>
    <AuthedUserContext.Provider value={user}>
  <NavBar handleSignOut={handleSignout}/>
      <h1>House Fuze</h1>
      <h2>Marquise</h2>
      <p>Connecting Your Home Needs with Trusted Pros</p>
      </AuthedUserContext.Provider>
    </>
    
  );
};

export default App;
