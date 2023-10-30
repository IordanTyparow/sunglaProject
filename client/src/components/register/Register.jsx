import { Link } from "react-router-dom";
import "./Register.css";

export default function Register() {
    return (
        <section className="register-page">
            <h1>Register</h1>
            <form className="register-form" method="post">
                <input type="text" name="email" placeholder="Email" required />
                <input type="password" name="password" placeholder="Password" required />
                <input type="password" name="repeatPassword" placeholder="confirm-password" required />
                <button type="submit">Register</button>
                <Link to="/register">If you have account</Link>
            </form>
        </section>
    );
}