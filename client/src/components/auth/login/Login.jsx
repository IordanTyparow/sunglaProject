import "./Login.css";

import { Link } from "react-router-dom";

export default function Login() {
    return (
        <section className="login-page">
            <h1>Login</h1>
            <div>
                <form className="login-form">
                    <input type="text" name="email" placeholder="Email" />
                    <input type="password" name="password" placeholder="Password" />
                    <button type="submit">Login</button>
                    <Link to="/register">If don't have account</Link>
                </form>
            </div>
        </section>
    )
}