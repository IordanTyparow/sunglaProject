const Sunglasses = require("../models/sunglassesModel");

exports.create = (sunglassesData) => Sunglasses.create(sunglassesData);

exports.getAll = () => Sunglasses.find();
