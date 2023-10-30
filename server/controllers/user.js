const { userModel } = require("../models/User");
const { errorHandler } = require("../utils/errorHandler");
const { ValidationError } = require("../utils/createValidationError");

const getUser = async (req, res) => {
    const { userId } = req.params;

    try {
        const user = await userModel.findById(userId, "-__v -isDeleted");

        if (!user) {
            throw new ValidationError(
                "There is no such user with provided id.",
                404
            );
        }

        res.status(200).json({ user: user.toObject() });
    } catch (error) {
        errorHandler(error, res, req);
    }
};

const addUser = async (req, res) => {
    const { email, password, repeatPassword } = req.body;
    const data = { email, password, repeatPassword };

    try {
        const createdUser = await userModel.create(data);
        const user = {
            ...data,
            _id: createdUser._id,
            createdAt: createdUser.createdAt,
            updatedAt: createdUser.updatedAt,
        };

        res.status(200).json({ user });
    } catch (error) {
        errorHandler(error, res, req);
    }
};

const deleteUser = async (req, res) => {
    const { userId } = req.params;

    try {
        await userModel.findByIdAndUpdate(userId, { isDeleted: true });

        res.status(200).json({ userId });
    } catch (error) {
        errorHandler(error, res, req);
    }
};
module.exports = {
    getUser,
    addUser,
    deleteUser,
};
