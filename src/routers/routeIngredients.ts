import { Router } from "express";
const controller = require("../controllers/controllerIngredients");
const validator = require("../helpers/validator");
import authorize from "../helpers/authorizationMiddleware";
const router = Router();

router.get("/", controller.getIngredients);
router.get("/:id", validator.getIngredientById, controller.getIngredientById);
router.post(
  "/",
  validator.addIngredient,
  authorize(),
  controller.addIngredient
);
router.delete("/:id", authorize(), controller.removeIngredient);

module.exports = router;
