import "./Register.css";

import { Link } from "react-router-dom";
import { useContext, useState } from "react";
import { useNavigate } from "react-router-dom";
import { AuthContext } from "../../../../context/authContext"

import * as authService from "../../../services/authService"

export default function Register() {
    const { userRegister } = useContext(AuthContext);
    const [error, setError] = useState('');
    const navigate = useNavigate();

    const onRegister = async (e) => {
        e.preventDefault();

        const formData = new FormData(e.target);

        const email = formData.get('email');
        const imageUrl = formData.get('imageUrl');
        const password = formData.get('password')
        const repeatPassword = formData.get('repeatPassword');

        try {
            const user = await authService.register(email, password, repeatPassword, imageUrl);

            userRegister(user);
            navigate('/');
        } catch (error) {
            setError(error.message);
        }
    }

    return (
        <section className="register-page">
            <h1>Register</h1>
            {error && <h3 className="error">{error}</h3>}
            <form className="register-form" onSubmit={onRegister}>
                <input type="text" name="email" placeholder="Email" />
                <input type="text" name="imageUrl" placeholder="Your photo" />
                <input type="password" name="password" placeholder="Password" />
                <input type="password" name="repeatPassword" placeholder="confirm-password" />
                <button type="submit">Register</button>
                <Link to="/login">If you have account</Link>
            </form>
        </section>
    );
}