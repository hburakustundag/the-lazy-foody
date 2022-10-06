import { Router } from "express";
const controller = require("../controllers/controllerIngredients");
const validator = require("../helpers/validator");

const router = Router();

router.get("/", controller.getIngredients);
router.get("/:id", validator.getIngredientById, controller.getIngredientById);
router.post("/", validator.addIngredient, controller.addIngredient);
router.delete("/:id", controller.removeIngredient);

module.exports = router;