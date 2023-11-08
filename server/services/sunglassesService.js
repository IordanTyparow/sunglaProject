const Sunglasses = require("../models/sunglassesModel");

exports.create = (sunglassesData) => Sunglasses.create(sunglassesData);

exports.getAll = () => Sunglasses.find();

exports.getOne = (sunglassesId) => Sunglasses.findById(sunglassesId);

exports.updateOne = (sunglassesId, sunglassesData) =>
    Sunglasses.findByIdAndUpdate(sunglassesId, sunglassesData);
