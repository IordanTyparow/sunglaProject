const router = require("express").Router();
const controller = require("../controllers/sunglasses");

router.get("/sunglasses", controller.getSunglasses);

router.post("/create", controller.createSunglasses);

router.delete("/delete/:sunglassesId", controller.deleteSunglasses);

module.exports = router;
