// // src/App.jsx
import { createContext, useState, useEffect } from "react";
import { Routes, Route } from "react-router-dom;"
import NavBar from "./components/NavBar/navBar.jsx";
import SigninForm from "./components/SigninForm/signinForm.jsx";
//import PostJob from "./components/PostJob/postJob.jsx";

export const AuthedUserContext = createContext(null);
import "./App.css";

// const App = () => {
 //   return (
//     <>
//   <h1>House Fuze</h1>
//   <h2>This is the Dev Branch</h2>
//   <p>Connecting Your Home Needs with Trusted Pros</p>
//   </>
//   )
// };
// testing
const App = () => {
  const [user, setUser] = useState(null);

  return (
    <>
      <AuthedUserContext.Provider value={{ user }}>
        <NavBar />
        <h1>House Fuze</h1>
        <h2>This is the Dev Branch</h2>
        <p>Connecting Your Home Needs with Trusted Pros</p>
        <Routes>
          {user ? <Route path="/" element={<HomePage />} />}}
          <Route path="/signin" element={<SigninForm setUser={setUser} />} />
          </Routes>
    
      </AuthedUserContext.Provider>
    </>

  );
};

export default App;

