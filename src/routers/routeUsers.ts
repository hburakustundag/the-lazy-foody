import { Router } from "express";
const controller = require("../controllers/auth");
const router = Router();

router.post("/", controller.registerUser);

module.exports = router;
