// for protected routes

require("dotenv").config();
//  this is our middleware which if user on route which is only accessed by logged in user so the work is this middleware is very simple only to check token is present or not
const auth = async (req, res, next) => {
  // console.log("middleware ki maa ki chut")
  try {
    //extacting jwt token and 2 other ways to fetch token;
    console.log("middleware ki maa ki chut")
    const token = req.cookies.token;
    // || req.body  || req.header('uthorization'.replace('Bearer '," "))
    // console.log("token is"+ req.cookies.token)
    // const cook = req.cookie; 
    // console.log(req.cookies);
    // if no token it meanse user token is expired or user is not logged in and we send a erorr message in response
    if (!token || token === undefined) {
      return res.status(404).json({
        success: false,
        message: "Please fuck of login",
      });
    }
    console.log("middleware ki maa ki chut")
    // console.log(token)
    // verifying the token
    try {
      // verifing token by secret key and sending a success message
      const jwt = require("jsonwebtoken");
      const decode = jwt.verify(token, process.env.JWT_SECRET,()=>{
        console.log("middleware ki maa ki chut")
        res.status(200);
      });
    } catch (error) {
      return res.status(404).json({
        success: false,
        message: error.message,
      });
    }
    next();
  } catch (error) {
    console.log(error);
    return res.status(404).json({
      success: false,
      message: "Invalid User",
    });
  }
};
module.exports = auth;
