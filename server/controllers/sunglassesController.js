const router = require("express").Router();

const sunglassesService = require("../services/sunglassesService");
const { errorHelper } = require("../utils/errorHelper");

router.post("/create", async (req, res) => {
    try {
        const createdSunglasses = await sunglassesService.create(req.body);

        res.status(200).json(createdSunglasses);
    } catch (error) {
        res.status(400).json(errorHelper(error));
    }
});

router.get("/catalog", async (req, res) => {
    const allSunglasses = await sunglassesService.getAll();
    
    res.status(200).json(allSunglasses);
});

module.exports = router;
