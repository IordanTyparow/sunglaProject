import * as request from "./requester";

export const login = (email, password) =>
    request.post(`/users/login`, { email, password });

export const logout = () => request.get("/users/logout");

export const register = (email, password) =>
    request.post(`/users/register`, { email, password });
