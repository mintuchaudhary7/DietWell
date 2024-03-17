const user = require("../models/schema")
// importing user schema 
const Profile = async(req,res)=>{
    try {
     
        const { profile } = req.body;
        var decoded;
        //checking for user that he had a token or not if he have a token then only he can see  profile
        // ans also for storing email on basis of email we find user and send  his or her profile data
        const token = req.cookies.token;
        try {
          const jwt = require("jsonwebtoken");
          // verifying token
          decoded = jwt.verify(token, process.env.JWT_SECRET);
          // console.log(decoded)
          const Email = decoded.Email;
          // search query 
          let User = await user.findOne({Email});
        //   console.log(User);
        // sending response with data of user
          return res.status(200).json({
            success:true,
            message:"Your data is fetched successfully",
            data:User
          })
          // for error handling
        } catch (e) {
          return res.status(401).json({
            success:false,
            message:"Cannot fetch your data due slow internet",
          });
        }
        // for error handling
      } catch (error) {
        return res.status(401).json({
            success:false,
            message:"Cannot fetch your data due to network error",
        });
      }
}
module.exports = Profile