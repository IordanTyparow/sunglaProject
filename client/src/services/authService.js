import * as request from "./requester";

const baseUrl = "http://localhost:3030/users";

export const login = async (email, password) => {
    if (!email || !password) {
        throw {
            message: "The email and password is required!",
        };
    }

    const response = await request.post(`${baseUrl}/login`, {
        email,
        password,
    });

    if (response.code === 403) {
        throw {
            message: response.message,
        };
    }

    return response;
};

export const logout = async (accessToken) => {
    try {
        const response = await fetch(`${baseUrl}/logout`, {
            headers: {
                "X-Authorization": accessToken,
            },
        });

        return response;
    } catch (error) {
        console.log(error);
    }
};

export const register = async (email, password, repeatPassword, imageUrl) => {
    if (!email || !password) {
        throw {
            message: "The email and password is require!",
        };
    }

    if (password !== repeatPassword) {
        throw {
            message: "The passwords is not maching!",
        };
    }

    const response = await request.post(`${baseUrl}/register`, {
        email,
        password,
        imageUrl,
    });

    if (response.code === 400) {
        throw {
            message: response.message,
        };
    }

    if (response.code === 409) {
        throw {
            message: response.message,
        };
    }

    return response;
};
