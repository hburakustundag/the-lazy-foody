import { Router } from "express";
const controller = require("../controllers/auth");
const router = Router();

router.post("/register", controller.registerUser);
router.post("/login", controller.loginUser);
module.exports = router;
