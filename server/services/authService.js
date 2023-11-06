const User = require("../models/userModel");

const { SALT } = require("../config/env");
const bcrypt = require("bcrypt");

exports.register = async ({ email, password, imageUrl }) => {
    const hashedPassword = await bcrypt.hash(password, SALT);

    const createdUser = User.create({
        email,
        password: hashedPassword,
        imageUrl,
    });

    if (!createdUser) {
        throw {
            message: "Invalid request!",
        };
    }

    return createdUser;
};

exports.login = async ({ email, password }) => {
    const user = await User.findOne({ email: email });

    if (!user) {
        throw { message: "Password or username is not valid!" };
    }

    const isValid = await bcrypt.compare(password, user.password);

    if (!isValid) {
        throw { message: "Invalid username or password!" };
    }

    return user;
};
