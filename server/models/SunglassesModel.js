const { Schema, model } = require("mongoose");

const sunglassesSchema = new Schema({
    brand: {
        type: String,
        required: true,
    },
    description: {
        type: String,
        required: true,
    },
    price: {
        type: String,
        required: true,
    },
    imageUrl: {
        type: String,
        required: true,
    },
    timestamps: true,
});

const sunglassesModel = model("sunglasses", sunglassesSchema);
module.exports = {
    sunglassesModel,
};
