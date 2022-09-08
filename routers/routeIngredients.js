const { Router } = require("express");
const controller = require("../controllers/controllerIngredients");

const router = Router();

router.get("/", controller.getIngredients);
router.get("/:id", controller.getIngredientById)
router.post("/", controller.addIngredient);

module.exports = router;
