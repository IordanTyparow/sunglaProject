const router = require("express").Router();

const authController = require("./controllers/authController");
const sunglassesController = require("./controllers/sunglassesController");

router.use("/auth", authController);
router.use("/sunglasses", sunglassesController);

module.exports = router;
