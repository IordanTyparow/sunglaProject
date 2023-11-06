export const login = async (email, password) => {
    const response = await fetch("http://localhost:3000/auth/login", {
        method: "POST",
        headers: {
            "content-type": "application/json",
        },
        body: JSON.stringify({ email, password }),
    });

    if (!response.ok) {
        throw {
            message: await response.json(),
        };
    }

    const data = await response.json();

    return data;
};

export const register = async (email, password, repeatPassword, imageUrl) => {
    const response = await fetch("http://localhost:3000/auth/register", {
        method: "POST",
        headers: {
            "content-type": "application/json",
        },
        body: JSON.stringify({ email, password, repeatPassword, imageUrl }),
    });

    if (!response.ok) {
        throw {
            message: await response.json(),
        };
    }

    const data = await response.json();

    return data;
};
