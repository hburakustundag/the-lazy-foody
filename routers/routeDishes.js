const { Router } = require("express");
const controller = require("../controllers/controllerDishes");
const validator = require("../validations/validator");

const router = Router();

router.get("/", controller.getDishes);
router.get("/:id", validator.getDishById, controller.getDishById);
router.post("/", validator.addDishes, controller.addDishes);
router.post("/suggest", controller.suggestDishes);
router.delete("/:id", controller.removeDish);

module.exports = router;
