import * as request from "./requester";

export const getAll = () => request.get("/data/sunglasses");

export const deleteOne = (sunglassesId) =>
    request.del(`/data/sunglasses/${sunglassesId}`);

export const getOne = (sunglassesId) =>
    request.get(`/data/sunglasses/${sunglassesId}`);

export const create = (sunglassesData) =>
    request.post("/data/sunglasses", sunglassesData);

export const edit = (sunglassesId, sunglassesData) =>
    request.put(`/data/sunglasses/${sunglassesId}`, sunglassesData);

export const like = (sunglassesId) => {
    request.post("/data/likes", { sunglassesId });
};

export const ownLikes = (sunglassesId) => {
    return request.get(
        `/data/likes?where=sunglassesId%3D%22${encodeURIComponent(
            sunglassesId
        )}%22&distinct=_ownerId&count`
    );
};

export const currentUserLikes = (sunglassesId, userId) => {
    return request.get(
        `/data/likes?where=sunglassesId%3D%22${encodeURIComponent(
            sunglassesId
        )}%22%20and%20_ownerId%3D%22${encodeURIComponent(userId)}%22&count`
    );
};
