const { Router } = require("express");
const controller = require("../controllers/controllerDishes");

const router = Router();

router.get("/", controller.getDishes);
router.get("/:id", controller.getDishById);
router.post("/", controller.addDishes);
router.post("/suggest", controller.suggest);

module.exports = router;
