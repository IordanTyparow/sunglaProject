const mongoose = require("mongoose");

const emailRegex = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;

const userSchema = new mongoose.Schema({
    email: {
        type: String,
        required: [true, "The email is required!"],
        validate: {
            validator: function (value) {
                return emailRegex.test(value);
            },
            message: "Invalid email address format",
        },
        maxlength: [12, "The email should be maximum 12 characters long"],
        unique: true,
    },
    password: {
        type: String,
        required: [true, "The password is required!"],
    },
    imageUrl: {
        type: String,
        required: [true, "The imageUrl is required!"],
    },
});

userSchema.pre("save", async function (next) {
    const user = this;

    if (user.isNew || user.isModified("email")) {
        try {
            const existingUser = await mongoose
                .model("user")
                .findOne({ email: user.email });
            if (existingUser) {
                throw new Error("Email address is already in use");
            }
            next();
        } catch (err) {
            next(err);
        }
    } else {
        next();
    }
});

const User = mongoose.model("user", userSchema);

module.exports = User;
