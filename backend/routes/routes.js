const express = require("express");

const router = express.Router();// router instance
const {login,signup} = require('../controller/Auth');//importing the aur auth controller for validation
const contact = require('../controller/Contact')
const forgot = require('../controller/Forgotpassward');
const Changepassward = require('../controller/Changepassward')
router.post('/contact',contact);
router.post("/login", login);//mapping the controller with routes
router.post("/signup", signup);//same as above
router.post("/forgottenpassward",forgot);
router.patch('/changepassward',Changepassward);
module.exports = router;//basic export function
