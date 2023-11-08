export const create = async (brand, price, description, imageUrl, userId) => {
    const response = await fetch("http://localhost:3000/sunglasses/create", {
        method: "POST",
        headers: {
            "content-type": "application/json",
        },
        body: JSON.stringify({
            brand,
            price,
            description,
            imageUrl,
            _owner: userId,
        }),
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

export const getOneSunglasses = (sunglassesId) => {
    return fetch(
        `http://localhost:3000/sunglasses/${sunglassesId}/details`
    ).then((res) => res.json());
};

export const updateOne = (sunglassesId, sunglassesData) => {
    return fetch(`http://localhost:3000/sunglasses/${sunglassesId}/edit`, {
        method: "POST",
        headers: {
            "content-type": "application/json",
        },
        body: JSON.stringify(sunglassesData),
    }).then((res) => res.json());
};
