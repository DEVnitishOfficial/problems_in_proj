

const express = require("express")


const {home} = require("../cantroller/userCantroller.js");


const router = express.Router();
router.get("/",home)

module.exports = router;