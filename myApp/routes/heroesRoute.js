var express = require('express');
var router = express.Router();
const heroesController = require("../controllers/heroesController")

router.get("/", heroesController.list)
router.get("/:id/profesion", heroesController.show)
router.get("/:id", heroesController.detail)
module.exports = router