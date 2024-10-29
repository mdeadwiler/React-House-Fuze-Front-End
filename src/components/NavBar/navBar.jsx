import { useContext, useState } from "react";
import { Link } from "react-router-dom";
import { AuthedUserContext } from "../../App.jsx";
import PostJob from "../PostJob/postJob.jsx";
import JobListings from "../JobListings/jobListings.jsx"

function NavBar({ handleSignout }) {
  const { user } = useContext(AuthedUserContext);
  const [showPostJob, setShowPostJob] = useState(false);

  const handlePostJobClick = (e) => {
    e.preventDefault(); // Prevents page reload
    setShowPostJob((prevState) => !prevState);
  };

  const authorizationOptions = (
    <div style={{ display: "flex", flexDirection: "row", gap: "10px" }}>
      <Link to="/">Home</Link><br />
      <Link to="/jobPosts">Job Post</Link><br />
      <Link to="" onClick={handlePostJobClick}>Post a Job</Link><br />
      <Link to="/jobListings">Job Listings Available</Link><br />
      <Link to="" onClick={handleSignout}>Signout</Link>
    </div>
  );

  const unauthorizationOptions = (
    <div style={{ display: "flex", flexDirection: "row", gap: "10px" }}>
      <Link to="/">Home</Link><br />
      <Link to="/about">About Us</Link><br />
      <Link to="/signin">Sign In</Link><br />
      <Link to="/signout">Sign Out, Bye!</Link><br />
    </div>
  );

  return (
    <nav>
      {user ? authorizationOptions : unauthorizationOptions}

      {/* Conditionally render the PostJob component */}
      {showPostJob && (
        <div>
          <h1>Post a Job</h1>
          <PostJob />
        </div>
      )}
    </nav>
  );
}

export default NavBar;
