// Marquise
import { useContext } from "react";
import { Link } from "react-router-dom";
import { AuthedUserContext } from "../../services/authContext.js";

// function NavBar({ handleSignout }) {
//   // Get user from context, but handle potential null
//   const user = useContext(AuthedUserContext);

//   // If the context is null, user will be null as well
//   if (!user) {
//     return null; // Return nothing or a loader if needed
//   }

//   const authorizationOptions = (
//     <div style={{ display: "flex", flexDirection: "row", gap: "10px" }}>
//       <Link to="/">Home</Link>
//       <Link to="/jobListings">Job Listings</Link>
//       <Link to="/Profile">Profile</Link>

//       <button onClick={handleSignout}>Signout</button>
//     </div>
//   );

//   const unauthorizationOptions = (
//     <div style={{ display: "flex", flexDirection: "row", gap: "10px" }}>
//       <Link to="/">Home</Link>
//       <Link to="/signin">Sign In</Link>
//       <Link to="/signup">Sign Up</Link>
//     </div>
//   );

//   return (
//     <nav>
//       {user ? authorizationOptions : unauthorizationOptions}
//     </nav>
//   );
// }

function NavBar({ handleSignout }) {
  const { user } = useContext(AuthedUserContext);

  const authorizationOptions = (
    <div style={{ display: "flex", flexDirection: "row", gap: "10px", }}>
      <Link to="/homepage">Home</Link>
      <br />
      <Link to="/jobPosts/new">Post a Job</Link>
      <br />
      <Link to="" onClick={handleSignout}>
        Signout
      </Link>
    </div>
  );

  const unauthorizationOptions = (
    <div style={{ display: "flex", flexDirection: "row", gap: "10px" }}>
      <Link to="/signup">Register</Link>
      <br />
      <Link to="/signin">Sign In</Link>
      <br />
    </div>
  );
  return <nav>{user ? authorizationOptions : unauthorizationOptions}</nav>;
}

export default NavBar;
