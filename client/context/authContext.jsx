import { createContext, useState } from "react";
import { useLocalStorage } from "../hooks/useLocalStorage";

export const AuthContext = createContext();

export const AuthProvider = ({ children }) => {
    const [auth, setAuth] = useLocalStorage("auth", {});
    const [error, setError] = useState('')

    const userLogin = (authData) => {
        setAuth(authData);
    };

    const userRegister = (authData) => {
        setAuth(authData);
    };

    const userLogout = () => {
        setAuth({});
        setError('')
        localStorage.removeItem('auth')
    };

    return (
        <AuthContext.Provider
            value={{
                user: auth,
                userRegister,
                userLogin,
                userLogout,
                isAuthenticated: !!auth.accessToken,
                setError,
                error
            }}
        >
            {children}
        </AuthContext.Provider>
    );
};
