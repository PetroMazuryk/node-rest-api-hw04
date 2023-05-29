const express = require("express");
const ctrl = require("../../controllers/auth-controller");
const { validateBody, authenticate } = require("../../middlewars");

const { schemas } = require("../../models/user");

const router = express.Router();

router.post("/register", validateBody(schemas.registerSchema), ctrl.register);

router.post("/login", validateBody(schemas.loginSchema), ctrl.login);

router.get("/current", authenticate, ctrl.getCurrent);

module.exports = router;
