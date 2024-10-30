// src/App.jsx

import LoginForm from "./components/LoginForm/LoginForm";

import "./App.css"
import NavBar from "./components/NavBar/navBar.jsx";
import "./App.css";

// Create context for authenticated user
export const AuthedUserContext = createContext(null);

const App = () => {
  const [user, setUser] = useState(null); // State for the authenticated user

  // Dummy function to handle signout (for demonstration purposes)
  const handleSignout = () => {
    setUser(null);
  };

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

      {  
      //  <Comments jobId={12} comments={commentArray}/>
      }
    </AuthedUserContext.Provider>
  );
};

export default App;