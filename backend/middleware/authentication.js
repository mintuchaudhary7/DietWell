// for protected routes

require("dotenv").config();
const auth = async (req, res, next) => {
  try {
    //extacting jwt token and 2 other ways to fetch token;
    const token = req.cookies.token;
    // || req.body  || req.header('uthorization'.replace('Bearer '," "))
    // console.log("token is"+ req.cookies.token)
    // const cook = req.cookie;
    console.log(req.cookies);
    if (!token || token === undefined) {
      return res.status(404).json({
        success: false,
        message: "Please login",
      });
    }
    // console.log(token)
    // verifying the token
    try {
      const jwt = require("jsonwebtoken");
      const decode = jwt.verify(token, process.env.JWT_SECRET);
      console.log("verified s " + req.cookies.token);
      res.status(200);

      // req.User.token = decode;
      // console.log("user verified")
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
      message: "invalid",
    });
  }
};
module.exports = auth;
