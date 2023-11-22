import { Link } from "react-router-dom";
import "./Header.css"

import { useContext } from "react";
import { AuthContext } from "../../../context/authContext";

export default function Header() {
    const { isAuthenticated, user } = useContext(AuthContext)

    return (
        <header className="header-page">
            <div className="userRapper">
                <div className="user-photo">
                    <img src={user.imageUrl || "/images/guest.png"} alt="userPhoto" />
                </div>
                <div className="username">
                    <p>Welcome {user.email || 'Guest!'}</p>
                </div>
            </div>
            <ul>
                <li><Link to="/" className="navbar">Home</Link></li>
                <li><Link to="/sunglasses/catalog" className="navbar">Catalog</Link></li>
                {isAuthenticated ?
                    <>
                        <li><Link to="/my-profile" className="navbar">My Profile</Link></li>
                        <li><Link to="/sunglasses/create" className="navbar">Create</Link></li>
                        <li><Link to="/logout" className="navbar">Logout</Link></li>
                    </>
                    :
                    <>
                        <li><Link to="/auth/register" className="navbar">Register</Link></li>
                        <li><Link to="/auth/login" className="navbar">Login</Link></li>
                    </>
                }
            </ul>
        </header>
    );
}