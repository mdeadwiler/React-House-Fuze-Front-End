// // src/App.jsx
import NavBar from "./components/NavBar/navBar.jsx";
import PostJob from "./components/PostJob/postJob.jsx";
import { createContext, useState, useEffect } from "react";
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
 export const AuthedUserContext = createContext(null);
  return (
    <>
      <AuthedUserContext.Provider value={{ user }}>
        <NavBar />
        <h1>House Fuze</h1>
        <h2>This is the Dev Branch</h2>
        <p>Connecting Your Home Needs with Trusted Pros</p>
   <div>
      <h1>Job Post</h1>
      <PostJob />
    </div>
      </AuthedUserContext.Provider>
    </>

  );
};

export default App;

