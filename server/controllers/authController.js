const router = require("express").Router();

const authService = require("../services/authService");
const { errorHelper } = require("../utils/errorHelper");

router.post("/login", async (req, res) => {
    try {
        const user = await authService.login(req.body);

        res.status(200).json({
            _id: user._id,
            email: user.email,
            imageUrl: user.imageUrl,
        });
    } catch (error) {
        res.status(400).json(errorHelper(error));
    }
});

router.post("/register", async (req, res) => {
    try {
        const user = await authService.register(req.body);

        res.status(200).json({
            _id: user._id,
            email: user.email,
            imageUrl: user.imageUrl,
        });
    } catch (error) {
        res.status(400).json(errorHelper(error));
    }
});

module.exports = router;
