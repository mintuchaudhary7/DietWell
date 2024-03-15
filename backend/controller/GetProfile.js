const User = require('../models/schema')
const GetProfile = async (req,res)=>{
    try {
        var decoded;
        const token = req.cookies.token;
        // console.log("get profile" + req.cookies.token)
        // console.log("update" + token)
        try {
          const jwt = require("jsonwebtoken");
          decoded = jwt.verify(token, process.env.JWT_SECRET);
          // console.log(decoded)
          const Email = decoded.Email;
          const user = await User.findOne({Email})

          console.log(user);
          return res.status(200).json({
            success:true,
            data:user,
            message:"Data fetched Successfully",
            
          })
          
        } catch (e) {
          return res.status(401).json({
            success:false,
            message:"Error in fetchig data",
          });
        }
      } catch (error) {
        return res.status(401).json({
            success:false,
            message:"Error in fetchin data",
        });
      }
}
module.exports = GetProfile