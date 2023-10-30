const router = require("express").Router();
const controller = require("../controllers/user");

router.get("/:userId", controller.getUser);

router.post("", controller.addUser);

router.delete("/:userId", controller.deleteUser);

module.exports = router;
