const { Router } = require("express");
const controller = require("../controllers/controllerIngredients");

const router = Router();

router.get("/", controller.getIngredients);
router.post("/", controller.addIngredient);

module.exports = router;
