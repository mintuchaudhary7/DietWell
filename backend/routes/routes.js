const express = require("express");

const router = express.Router(); // router instance
const { login, signup } = require("../controller/Auth"); //importing the aur auth controller for validation
const contact = require("../controller/Contact");
const forgot = require("../controller/Forgotpassward");
const Changepassward = require("../controller/Changepassward");
const auth = require("../middleware/authentication");
const logout = require("../controller/Logout");
const UpdateProfile = require("../controller/UpdateProfile");
const getProfile = require("../controller/GetProfile");
const profile = require("../controller/Profile");
const weightgain = require("../controller/WeightGain");
const weightloss = require("../controller/WeightLoss");
const haireandskincare = require("../controller/HairandSkincare");
const stress = require("../controller/StressManagement");
const protectedRoute = require("../controller/ProtectedRoute");
// router.use('/contact',auth)
// on homepage we send a get request by using useeffect which is for check user have token or not if user have token then we directly show profile option
router.get("/", auth, (req, res) => {
  res.status(200);
});

router.post("/contact",auth, contact);
router.post("/login", login); //mapping the controller with routes
router.post("/signup", signup); //same as above
router.post("/forgottenpassward", forgot);
router.patch("/changepassward", Changepassward);
router.get("/logout", logout);
router.post("/profile/updateprofile", UpdateProfile); //here we mounted our middleware because this route is only accessed by loggedin user
router.get("/profile/updateprofile", getProfile); //same as above
router.get("/profile", profile); //same as above
router.get("/services/weightgain", weightgain);
router.get("/services/weightloss", weightloss);
router.get("/services/haireandskincare", haireandskincare);
router.get("/services/stress", stress);
router.get("/protected", protectedRoute);
module.exports = router; //basic export function
