const express = require("express");

const router = express.Router();// router instance
const {login,signup} = require('../controller/Auth');//importing the aur auth controller for validation
const contact = require('../controller/Contact')
const forgot = require('../controller/Forgotpassward');
const Changepassward = require('../controller/Changepassward')
const auth = require('../middleware/authentication')
const logout = require('../controller/Logout')
const UpdateProfile = require('../controller/UpdateProfile')
const getProfile = require('../controller/GetProfile');
const profile = require("../controller/Profile");
// router.use('/contact',auth)
router.get('/',auth,(req,res)=>{
    res.send("hello")
});
router.post('/contact',auth,contact);
router.post("/login", login);//mapping the controller with routes
router.post("/signup", signup);//same as above
router.post("/forgottenpassward",forgot);
router.patch('/changepassward',Changepassward);
router.get("/logout",logout);
router.post('/profile/updateprofile',UpdateProfile);
router.get('/profile/updateprofile',getProfile)
router.get('/profile',profile)
module.exports = router;//basic export function
