const mongoose = require("mongoose");

const sunglassesSchema = new mongoose.Schema({
    brand: {
        type: String,
        required: [true, "The brand is require!"],
    },
    price: {
        type: String,
        required: [true, "The price is require!"],
    },
    description: {
        type: String,
        required: [true, "The description is require!"],
    },
    imageUrl: {
        type: String,
        required: [true, "The imageUrl is require!"],
    },
    _owner: { type: mongoose.Types.ObjectId, ref: "user" },
});

const Sunglasses = mongoose.model("sunglasses", sunglassesSchema);

module.exports = Sunglasses;
