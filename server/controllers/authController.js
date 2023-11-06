const router = require("express").Router();

const authService = require("../services/authService");

router.post("/login", async (req, res) => {
    try {
        const user = await authService.login(req.body);

        res.status(200).json(user);
    } catch (error) {
        res.status(400).json(error.message);
    }
});

router.post("/register", async (req, res) => {
    try {
        const user = await authService.register(req.body);

        res.status(200).json(user);
    } catch (error) {
        res.status(400).json(error.message);
    }
});

module.exports = router;
