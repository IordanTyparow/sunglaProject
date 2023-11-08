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
