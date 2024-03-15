const user = require("../models/schema")
const Profile = async(req,res)=>{
    try {
        const { profile } = req.body;
        var decoded;
        const token = req.cookies.token;
        try {
          const jwt = require("jsonwebtoken");
          decoded = jwt.verify(token, process.env.JWT_SECRET);
          // console.log(decoded)
          const Email = decoded.Email;
          let User = await user.findOne({Email});
        //   console.log(User);
          return res.status(200).json({
            success:true,
            message:"Your data is fetched successfully",
            data:User
          })
          
        } catch (e) {
          return res.status(401).json({
            success:false,
            message:"Cannot fetch your data due to network error",
          });
        }
      } catch (error) {
        return res.status(401).json({
            success:false,
            message:"Cannot fetch your data due to network error",
        });
      }
}
module.exports = Profile