const express = require("express");
const router = express.Router();
const userControllers = require("../controllers/Users");

router.get("/", userControllers.getUserdata, (req, res, next) => {});
module.exports = router;