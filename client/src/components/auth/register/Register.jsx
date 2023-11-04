import { Link } from "react-router-dom";
import "./Register.css";

import { useContext } from "react";
import { useNavigate } from "react-router-dom";
import { AuthContext } from "../../../../context/authContext"

import { register } from "../../../services/authService";

export default function Register() {
    const { userRegister, setError, error } = useContext(AuthContext)
    const navigate = useNavigate()

    const onSubmitHandler = (e) => {
        e.preventDefault();

        const formData = new FormData(e.target);

        const email = formData.get('email');
        const password = formData.get('password')
        const repeatPassword = formData.get('repeatPassword');

        if (!email || !password || !repeatPassword) {
            setError('Missing fields')
            return
        }

        if (password !== repeatPassword) {
            setError('Passwords is not maching!');
            return;
        }

        register(email, password).then(userData => {
            navigate('/');
            userRegister(userData);
        }).catch(err => setError(err.message))
    }

    return (
        <section className="register-page">
            <h1>Register</h1>
            {error && <h3 style={{ color: 'red' }}>{error}</h3>}
            <form className="register-form" onSubmit={onSubmitHandler}>
                <input type="text" name="email" placeholder="Email" />
                <input type="password" name="password" placeholder="Password" />
                <input type="password" name="repeatPassword" placeholder="confirm-password" />
                <button type="submit">Register</button>
                <Link to="/login">If you have account</Link>
            </form>
        </section>
    );
}