const express = require("express");

const router = express.Router();// router instance
const {login,signup} = require('../controller/Auth');//importing the aur auth controller for validation
router.post("/login", login);//mapping the controller with routes
router.post("/signup", signup);//same as above
module.exports = router;//basic export function
