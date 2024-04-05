require("dotenv");
const user = require("../models/schema");
// imorting schema
const UpdateProfile = async (req, res) => {
  try {
    // user send updated data from frontend and we have to store it 
    const { profile } = req.body;
    var decoded;
    // token required because only verified user or logged in user can update profile and also for email by which we can search user
    const token = req.cookies.token;
    // console.log("update" + token)
    // var authorization = req.headers.authorization.split(' ')[1],
    // decoded;
    // console.log("sahil")
    // here we are checking token is present or not if token is not present we send an error response if present then we can proceed further
    try {
      if(!token || token === undefined){
        res.status(400).json({
          success:false,
          message:"Not a verified user please login"
        })
      }
      const jwt = require("jsonwebtoken");
      //verifiny token and storing email
      decoded = jwt.verify(token, process.env.JWT_SECRET);
      // console.log(decoded)
      const Email = decoded.Email;

      console.log(Email);
      const userHeight = profile.height
      const userWeight = profile.weight
      const userAge = profile.age
      let bmr= 0;
      if(profile.gender === "male" || profile.gender === "Male"){
        bmr = 88.362 + (13.397 * userWeight) + (4.799 * userHeight) - (5.677 * userAge);
      }
      else if (profile.gender === "female" || profile.gender === "Female"){
        bmr = 447.593 + (9.247 * userWeight) + (3.098 * userHeight) - (4.330 * userAge);
      }
      //creating an update veriable in which all the updated data is stored
      const update = {
        $set: {
          Email: profile.email,
          Name: profile.name,
          
ContactNo: profile.phoneno,
          Age: profile.age,
          Height: profile.height,
          Weight: profile.weight,
          Gender: profile.gender,
          Dietpreference: profile.dietpreference,
          Activity: profile.activity,
          Disease:profile.disease,
          Allergy:profile.allergy,
          Bmr:bmr
        },
      };
    //   console.log(profile)
      console.log()
      // const update2 = { Age: 60 }
      // filter like our primary key on which we can search user objech
      const filter = { Email: Email };
      // an update query 
      // new :true means we get a response from databse of updated data if new: false the we get old data in response from backend
      let User = await user.updateMany(filter, update, { new: true });
      console.log(User);
      // seucces message and data of user as : data:User to show on backend
      return res.status(200).json({
        success:true,
        message:"Your profile has been updated successfully",
        data:User
      })
      // error message
    } catch (e) {
      return res.status(401).json({
        success:false,
        message:"Your profile is not  updated due to server error please try again later",
      });
    }
  } catch (error) {
    return res.status(401).json({
        success:false,
        message:"Your profile is not  updated due to server error please try again later",
    });
  }
};
module.exports = UpdateProfile;
