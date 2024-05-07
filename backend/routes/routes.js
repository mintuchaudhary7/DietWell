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
const fetchuser = require("../controller/FetchUsers");
const fetchDietition = require("../controller/FetchDietition");
const dashboard = require("../controller/Dashboard");
const category = require("../controller/CategotyDetail");
const toDelete = require("../controller/Todelete");
const searchdietitonmail = require("../controller/SearchDietitionEmail");
const searchuseremail = require("../controller/SearchUserEmail");
const FetchQueries = require("../controller/FetchQueries");
const MarkasSolved = require("../controller/MarkasSolved");
const ApplyDietitionSubmittion = require("../controller/ApplyDietitonSubmittion");
const FetchApplyDoctor = require("../controller/FetchApplyDoctor");
const ApproveDoctor = require("../controller/ApproveDoctor");
const userquestionsubmittion = require("../controller/UserDietitonQuestionSubmition");
const fetchUserQuestions = require("../controller/FetchUserQuestion");
const DietitionReply = require("../controller/DietitonReply");
const getNotification = require("../controller/GetNotification");
// router.use('/contact',auth)
// on homepage we send a get request by using useeffect which is for check user have token or not if user have token then we directly show profile option
router.get("/", auth, (req, res) => {
  console.log("hii");
  const role = res.locals.role; // Access 'role' property with lowercase 'role'
  return res.status(200).json({
    success: true,
    message: "Role retrieved successfully",
    role: role, // Send the retrieved role in the response
  });
});

router.post("/contact", auth, contact);
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
router.get("/users", fetchuser);
router.get("/dietition", fetchDietition);
router.get("/dashboard", dashboard);
router.post("/searchdietitionemail", searchdietitonmail);
router.post("/applydietitonform", ApplyDietitionSubmittion);
router.patch("/approvedoctor", ApproveDoctor);
router.post("/searchuseremail", searchuseremail);

router.get("/selected/:selectedOption", FetchQueries); //done
router.post("/:catagory", category);
router.delete("/delete/:todelete", toDelete);
router.patch("/id/:id", MarkasSolved); //done
router.get("/data/:data", FetchApplyDoctor); //done
router.post("/user/dietition/question", userquestionsubmittion);
router.get("/user/dietition/fetchUserQuestions/:status", fetchUserQuestions);
router.post("/user/dietition/submit-dietiton-response", DietitionReply);
router.get("/notification", getNotification);
module.exports = router; //basic export function
