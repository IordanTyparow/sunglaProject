const user = JSON.parse(localStorage.getItem("auth"));

export const create = async (sunglassesData) => {
    const response = await fetch("http://localhost:3030/data/sunglasses", {
        method: "POST",
        headers: {
            "content-type": "application/json",
            "X-Authorization": user.accessToken,
        },
        body: JSON.stringify(sunglassesData),
    });

    const data = await response.json();

    return data;
};
