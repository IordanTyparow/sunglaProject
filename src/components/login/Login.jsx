import { Link } from "react-router-dom";
import "./Login.css";

export default function Login() {
    return (
        <section className="login-page">
            <h1>Login</h1>
            <form class="login-form" method="post">
                <input type="text" name="username" placeholder="Username" required />
                <input type="password" name="password" placeholder="Password" required />
                <button type="submit">Login</button>
                <Link to="/register">If don't have account</Link>
            </form>
        </section>
    )
}