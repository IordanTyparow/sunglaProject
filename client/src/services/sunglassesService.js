export const create = async (brand, price, description, imageUrl) => {
    const response = await fetch("http://localhost:3000/sunglasses/create", {
        method: "POST",
        headers: {
            "content-type": "application/json",
        },
        body: JSON.stringify({ brand, price, description, imageUrl }),
    });

    if (!response.ok) {
        throw {
            message: await response.json(),
        };
    }

    const data = await response.json();

    return data;
};

export const getAllSunglasses = () => {
    return fetch("http://localhost:3000/sunglasses/catalog").then((res) =>
        res.json()
    );
};
