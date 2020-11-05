var express = require('express');
var router = express.Router();
const creditsController = require("../controllers/creditsController")

router.get("/", creditsController.list)

module.exports = router