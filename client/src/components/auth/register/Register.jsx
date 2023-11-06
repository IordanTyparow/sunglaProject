import "./Register.css";

import { Link } from "react-router-dom";
import { useContext, useState } from "react";
import { useNavigate } from "react-router-dom";
import { AuthContext } from "../../../../context/authContext"

import * as authService from "../../../services/authService"

export default function Register() {
    const [error, setError] = useState('');
    const [values, setValues] = useState({
        email: '',
        imageUrl: '',
        password: 0,
        repeatPassword: 0,
    });
    const { userRegister } = useContext(AuthContext);
    const navigate = useNavigate();

    const onSetValueHandler = (e) => {
        setValues(state => ({ ...state, [e.target.name]: e.target.value }));
    }

    const onRegister = async (e) => {
        e.preventDefault();

        try {
            const user = await authService.register(values.email, values.password, values.repeatPassword, values.imageUrl);

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
                <input type="text" name="email" value={values.email} onChange={onSetValueHandler} placeholder="Email" />
                <input type="text" name="imageUrl" value={values.imageUrl} onChange={onSetValueHandler} placeholder="Your photo" />
                <input type="password" name="password" value={values.password} onChange={onSetValueHandler} placeholder="Password" />
                <input type="password" name="repeatPassword" value={values.repeatPassword} onChange={onSetValueHandler} placeholder="confirm-password" />
                <button type="submit">Register</button>
                <Link to="/login">If you have account</Link>
            </form>
        </section>
    );
}