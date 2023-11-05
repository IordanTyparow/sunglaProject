import { Link } from "react-router-dom";
import "./Header.css"

import { useContext } from "react";
import { AuthContext } from "../../../context/authContext";

export default function Header() {
    const { isAuthenticated, user } = useContext(AuthContext)

    return (
        <header>
            <div className="user-photo">
                <img src={user.imageUrl || "/images/guest.png"} alt="userPhoto" />
            </div>
            <div className="username">
                <p>Welcome {user.email || 'Guest!'}</p>
            </div>
            <ul>
                <li><Link to="/" className="navbar">Home</Link></li>
                <li><Link to="/catalog" className="navbar">Catalog</Link></li>
                {isAuthenticated ?
                    <>
                        <li><Link to="/create" className="navbar">Create</Link></li>
                        <li><Link to="/logout" className="navbar">Logout</Link></li>
                    </>
                    :
                    <>
                        <li><Link to="/register" className="navbar">Register</Link></li>
                        <li><Link to="/login" className="navbar">Login</Link></li>
                    </>
                }
            </ul>
        </header>
    );
}