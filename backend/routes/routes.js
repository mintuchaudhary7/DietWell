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
// on homepage we send a get request by using useeffect which is for check user have token or not if user have token then we directly show profile option
router.get('/',auth,(req,res)=>{
    res.send("hello")
});

router.post('/contact',auth,contact);
router.post("/login", login);//mapping the controller with routes
router.post("/signup", signup);//same as above
router.post("/forgottenpassward",forgot);
router.patch('/changepassward',Changepassward);
router.get("/logout",logout);
router.post('/profile/updateprofile',auth,UpdateProfile);//here we mounted our middleware because this route is only accessed by loggedin user
router.get('/profile/updateprofile',auth,getProfile)//same as above
router.get('/profile',auth,profile)//same as above
router.get("/services",auth,(req,res)=>{//same as above
    res.status(200).json({
        success:true,
        message:"hii"
    })
})
module.exports = router;//basic export function
