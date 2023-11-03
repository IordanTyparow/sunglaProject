import "./Login.css";

import { Link } from "react-router-dom";

export default function Login() {
    const onSubmitHandler = (e) => {
        e.preventDefault();

        const formData = new FormData(e.target)

        console.log(formData);
    }

    return (
        <section className="login-page">
            <h1>Login</h1>
            <div>
                <form onSubmit={onSubmitHandler} className="login-form">
                    <input type="text" name="email" placeholder="Email" />
                    <input type="password" name="password" placeholder="Password" />
                    <button type="submit">Login</button>
                    <Link to="/register">If don't have account</Link>
                </form>
            </div>
        </section>
    )
}