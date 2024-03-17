const User = require('../models/schema')
const GetProfile = async (req,res)=>{
    try {
        var decoded;//in this variable we store out decoded token out token contain some information like email of user etc
        const token = req.cookies.token;//destructuring token
        // console.log("get profile" + req.cookies.token)
        // console.log("update" + token)
        try {
          const jwt = require("jsonwebtoken");
          // decoding by using verify() method it take 2 input  1 is out token and secert key by which we encrypted it
          decoded = jwt.verify(token, process.env.JWT_SECRET);
          // console.log(decoded)
          // veriable  by which we find the user and we seacrh by email because in database email is unique so this is our primary key
          const Email = decoded.Email;
          //search query
          const user = await User.findOne({Email})
          //in response we send all the infoemation of user to display on profile dashboard
          console.log(user);
          return res.status(200).json({
            success:true,
            data:user,
            message:"Data fetched Successfully",
            
          })
          // for error handling
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