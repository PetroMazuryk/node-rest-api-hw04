const express = require("express");
const ctrl = require("../../controllers/auth-controller");
const { validateBody } = require("../../middlewars");
const { schemas } = require("../../models/user");

const router = express.Router();

router.post("/register", validateBody(schemas.registerSchema), ctrl.register);

module.exports = router;