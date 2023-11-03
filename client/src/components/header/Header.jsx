import { Link } from "react-router-dom";
import "./Header.css"

import { useContext } from "react";
import { useNavigate } from "react-router-dom";
import { AuthContext } from "../../../context/authContext";

import { logout } from "../../services/authService"

export default function Header() {
    const { isAuthenticated, user } = useContext(AuthContext)
    const navigate = useNavigate();

    const onLogout = () => {
        logout(user.accessToken);
        navigate('/');
    }

    return (
        <header>
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