const userRouter = require("./user.js");
const sunglassesRouter = require("./sunglasses.js");

module.exports = (app) => {
    app.use("/api/users", userRouter);
    app.use("/api/sunglasses", sunglassesRouter);
};
