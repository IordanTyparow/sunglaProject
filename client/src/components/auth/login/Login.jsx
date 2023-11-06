import "./Login.css";

import { useContext, useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { AuthContext } from "../../../../context/authContext"

import * as authService from "../../../services/authService"

export default function Login() {
    const { userLogin } = useContext(AuthContext);
    const [error, setError] = useState('')
    const navigate = useNavigate()

    const onLogin = async (e) => {
        e.preventDefault();

        const formData = new FormData(e.target);

        const email = formData.get('email');
        const password = formData.get('password');

        try {
            const user = await authService.login(email, password);

            userLogin(user);
            navigate('/');
        } catch (error) {
            setError(error.message);
        }
    }

    return (
        <section className="login-page">
            <h1>Login</h1>
            {error && <h3 className="error">{error}</h3>}
            <div>
                <form className="login-form" onSubmit={onLogin}>
                    <input type="text" name="email" placeholder="Email" />
                    <input type="password" name="password" placeholder="Password" />
                    <button type="submit">Login</button>
                    <Link to="/register">If don't have account</Link>
                </form>
            </div>
        </section>
    )
}