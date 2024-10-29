// Marquise 

import { useContext } from "react";
import { Link } from "react-router-dom";
import { AuthedUserContext } from "../../App.jsx";


function NavBar({handleSignout}) {
    const user = useContext(AuthedUserContext);

    const authorizationOptions = (
       <div style={{display: 'flex', flexDirection: 'row', gap: '10px'}}>
        <Link to='/'>Home</Link><br/>
        <Link to='/jobPosts'>Job Post</Link><br />
        <Link to='/postJob'>Post a Job</Link><br />
        <Link to='/postListings'>Job Listings Available</Link><br />
        <Link to="" onClick={handleSignout}>Signout</Link>
        </div>
        
    );

    const unauthorizationOptions = (
            <div style={{display: 'flex', flexDirection: 'row', gap: '10px'}}>
            <Link to='/signin'>Sign In</Link><br />
            <Link to='/signout'>Sign Out, Bye!</Link><br />
            </div>
    );
    return (
        <nav>
            {!user ? authorizationOptions : unauthorizationOptions}
        </nav>
    );
}

export default NavBar;