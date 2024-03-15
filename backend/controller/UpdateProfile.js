require("dotenv");
const user = require("../models/schema");
const UpdateProfile = async (req, res) => {
  try {
    const { profile } = req.body;
    var decoded;
    const token = req.cookies.token;
    // console.log("update" + token)
    // var authorization = req.headers.authorization.split(' ')[1],
    // decoded;
    // console.log("sahil")
    try {
      const jwt = require("jsonwebtoken");
      decoded = jwt.verify(token, process.env.JWT_SECRET);
      // console.log(decoded)
      const Email = decoded.Email;

      console.log(Email);
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
        },
      };
    //   console.log(profile)
      console.log()
      const update2 = { Age: 60 }
      const filter = { Email: Email };
      let User = await user.updateMany(filter, update, { new: true });
      console.log(User);
      return res.status(200).json({
        success:true,
        message:"Your profile has been updated successfully",
        data:User
      })
      
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
