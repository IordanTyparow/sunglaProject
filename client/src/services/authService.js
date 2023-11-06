export const login = async (email, password) => {
    if (!email || !password) {
        throw {
            message: "All fields is require!",
        };
    }

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
    if (password != repeatPassword) {
        throw {
            message: "Passwords is not maching!",
        };
    }

    if (!email || !password || !repeatPassword || !imageUrl) {
        throw {
            message: "All fields is require!",
        };
    }

    const response = await fetch("http://localhost:3000/auth/register", {
        method: "POST",
        headers: {
            "content-type": "application/json",
        },
        body: JSON.stringify({ email, password, imageUrl }),
    });

    if (!response.ok) {
        throw {
            message: "Failed to fetch!",
        };
    }

    const data = await response.json();

    return data;
};
