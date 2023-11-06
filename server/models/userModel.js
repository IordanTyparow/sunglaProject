const mongoose = require("mongoose");

const userSchema = new mongoose.Schema({
    email: {
        type: String,
        required: [true, "The email is require!"],
    },
    password: {
        type: String,
        required: [true, "The password is require!"],
    },
    imageUrl: {
        type: String,
        required: [true, "The imageUrl is require!"],
    },
});

const User = mongoose.model("user", userSchema);

module.exports = User;
