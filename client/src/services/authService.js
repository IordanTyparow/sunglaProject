import * as request from "./requester";

export const login = (email, password) =>
    request.post(`/users/login`, { email, password });

export const logout = (accessToken) => {
    const response = fetch("http://localhost:3030/users/logout", {
        headers: {
            "X-Authorization": accessToken,
        },
    });

    return response;
};

export const register = (email, password) =>
    request.post(`/users/register`, { email, password });
