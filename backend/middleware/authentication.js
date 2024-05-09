// // for protected routes

// require("dotenv").config();
// const user = require('../models/schema')
// //  this is our middleware which if user on route which is only accessed by logged in user so the work is this middleware is very simple only to check token is present or not
// const auth = async (req, res, next) => {
//   try {
//     //extacting jwt token and 2 other ways to fetch token;
//     const token = req.cookies.token;
//     // || req.body  || req.header('uthorization'.replace('Bearer '," "))
//     // console.log("token is"+ req.cookies.token)
//     // const cook = req.cookie; 
//     console.log(req.cookies);
//     // if no token it meanse user token is expired or user is not logged in and we send a erorr message in response
//     if (!token || token === undefined) {
//       return res.status(400).json({
//         success: false,
//         message: "Please login",
//       });
//     }
//     // verifying the token
//     try {
//       // verifing token by secret key and sending a success message
//       const jwt = require("jsonwebtoken");
//       console.log("token")
//       const decode = jwt.verify(token, process.env.JWT_SECRET);
//       console.log(decode)
//       // console.log("verified s " + req.cookies.token);
//       if(decode != undefined || !decode){
//         const Email = decode.Email
//         const data = await user.findOne({Email});
        
//         res.status(200)
//         console.log("in authen")
//         return res.status(200).locals.role = data.Role;
//         // console.log(role)

//       }
//       // req.User.token = decode;
//       // console.log("user verified")
//       // for error handling
//     } catch (error) {
//       return res.status(400).json({
//         success: false,
//         message: error.message,
//       }); 
//     }
//     next();
//     // return;
//   } catch (error) {
//     console.log(error);
//     return res.status(400).json({
//       success: false,
//       message: "Invalid User",
//     });
//   }
// };
// module.exports = auth;
require("dotenv").config();
const user = require('../models/schema');

const auth = async (req, res, next) => {
  try {
    //const token = req.cookies.token;
    const token = req.headers.authorization.split(" ")[1];
    console.log(req.cookies);

    if (!token || token===undefined || token === "null") {
      return res.status(400).json({
        success: false,
        message: "Please login",
      });
    }

    try {
      const jwt = require("jsonwebtoken");
      const decode = jwt.verify(token, process.env.JWT_SECRET);
      console.log(decode)
      if (decode) {
        const Email = decode.Email;
        const data = await user.findOne({ Email });
        // console.log(data)
        if (data) {
          res.locals.role = data.Role; // Assigning user role to res.locals
          console.log("User role:", data.Role);
        } else {
          console.log("User not found in database");
        }
      }

      // Call next() to proceed to the next middleware/route handler
      next();
    } catch (error) {
      return res.status(400).json({
        success: false,
        message: error.message,
      });
    }
  } catch (error) {
    console.log(error);
    return res.status(400).json({
      success: false,
      message: "Invalid User",
    });
  }
};

module.exports = auth;