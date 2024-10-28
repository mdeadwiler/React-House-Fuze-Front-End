import { useContext } from "react";
import { Link } from "react-router-dom";
import { AuthedUserContext } from "../../App.jsx";


function NavBar({user}) {
    const User = useContext(AuthedUserContext);

    const authorizationOptions = (
        <ul>
        <li><Link to='/'>Home</Link></li>
        <li><Link to='/jobPosts'>Job Post</Link></li>
        <li><Link to='/postJob'>Post a Job</Link></li>
        <li><Link to='/postListings'>Job Listings Available</Link></li>
        
        </ul>
    );

    const unaithorizationOptions = (
        <ul>
            <li><Link to='/signin'>Sign In</Link></li>
            <li><Link to='/signout'>Sign Out</Link></li>
        </ul>
    );
    return (
        <nav>
            {User ? authorizationOptions : unaithorizationOptions}
        </nav>
    )
}

export default NavBar;