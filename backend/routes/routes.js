const express = require("express");

const router = express.Router();// router instance
const {login,signup} = require('../controller/Auth');//importing the aur auth controller for validation
const contact = require('../controller/Contact')
const forgot = require('../controller/Forgotpassward');
const Changepassward = require('../controller/Changepassward')
const auth = require('../middleware/authentication')
const logout = require('../controller/Logout')
// router.use('/contact',auth)
router.get('/',auth,(req,res)=>{
    res.send("hello")
});
router.post('/contact',auth,contact);
router.post("/login", login);//mapping the controller with routes
router.post("/signup", signup);//same as above
router.post("/forgottenpassward",forgot);
router.patch('/changepassward',Changepassward);
router.get("/logout",logout),
// (req,res)=>{
//     res.clearCookie('token',{path:'/'})
//     res.status(200).send()
    
// });
module.exports = router;//basic export function
