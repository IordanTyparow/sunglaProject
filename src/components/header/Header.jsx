import { Link } from "react-router-dom";
import "./Header.css"

export default function Header() {
    return (
        <header>
            <ul>
                <li><Link to="/" className="navbar">Home</Link></li>
                <li><Link to="/catalog" className="navbar">Catalog</Link></li>
                <li><Link to="/create" className="navbar">Create</Link></li>
                <li><Link to="#" className="navbar">Register</Link></li>
                <li><Link to="/login" className="navbar">Login</Link></li>
                <li><Link to="#" className="navbar">Logout</Link></li>
            </ul>
        </header>
    );
}