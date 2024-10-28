import NavBar from "./components/NavBar/navBar.jsx";
import "./App.css";
import { createContext, useState, useEffect } from "react";
export const AuthedUserContext = createContext(null);
const App = () => {
  const [user, setUser] = useState(null);
 
  return (
    <>
      <AuthedUserContext.Provider value={{ user }}>
        <NavBar />
        <h1>House Fuze</h1>
        <h2>This is the Marquise Branch</h2>
        <p>Connecting Your Home Needs with Trusted Pros</p>
      </AuthedUserContext.Provider>
    </>
  );
};

export default App;
