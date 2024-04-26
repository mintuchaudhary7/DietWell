const user = require("../models/schema"); // imorting our schema of database which we use to create user
const bcrypt = require("bcrypt");
exports.login = async (req, res) => {
  try {
    // try block is compulsry to use for catching the error
    const { Email, Passward } = req.body; // fetching data from user or frontend using request body
    if (!Email) {
      //this block is responsible for checking that user entered any data or not
      return res.status(500).json({
        //here we are sending error response because user send any emptyb data
        success: false,
        message: "Please Enter Email",
      });
    }
    if (!Passward) {
      //this block is responsible for checking that user entered any data or not
      return res.status(500).json({
        //here we are sending error response because user send any emptyb data
        success: false,
        message: "Please Enter Passward",
      });
    }
    let User = await user.findOne({ Email }); // searching in database that does user exist in our data base or registerd to our platform
    if (!User) {
      // if user not exist the we send a error response from bellow code
      return res.status(404).json({
        success: false,
        message: "User Does Not Exist Please Signup",
      });
    }
    //creating a payload for sesson handling to send in cookies
    const payload = {
      Email: User.Email,
      id: User._id,
      Name: User.Name,
      Passward: User.Passward,
    };
    if (await bcrypt.compare(Passward, User.Passward)) {
      //creating an jwt token;
      // instance of jwt token;
      console.log(User.Passward);
      const jwt = require("jsonwebtoken");
      //creating a token
      let token = jwt.sign(payload, process.env.JWT_SECRET, {
        expiresIn: "3h",
      });

      //creating a user token
      User = User.toObject();
      User.token = token;
      console.log(User);
      // removing passward to prevent haking or other security issues

      User.Passward = undefined;

      //creating a option to send in cookies
      const options = {
        expires: new Date(Date.now() + 3 * 24 * 60 * 60 * 1000),
        httpOnly: true,
      };

      //creating a cookie and sending in response;
      return res.cookie("token", token, options).status(200).json({
        success: true,
        token,
        User,
        message: "user logged in successfully",
      });
    }
    // if passward does not match send error message to client;
    else {
      return res.status(400).json({
        success: false,
        message: "Incorrect Passward",
      });
    }
  } catch (error) {
    //error occured
    console.log(error);
    return res.status(500).json({
      success: false,
      message: "Server Error",
    });
    return;
  }
};
exports.signup = async (req, res) => {
  try {
    //fetching the data from request;
    const { Name, Email, Passward, ContactNo, Role } = req.body;
    // checking in database that user is not already registered;
    const existingUser = await user.findOne({ Email });
    //if user exist then return error status;
    if (existingUser) {
      return res.status(409).json({
        success: false,
        message: "User Already Exist",
      });
      return;
    }
    let hasedpassward;
    try {
      //hashing script bycript is a hashing techqnique
      hasedpassward = await bcrypt.hash(Passward, 10);
    } catch (error) {
      return res.status(500).json({
        success: false,
        massage: "Error occured in hashing passward",
      });
    }

    // if we reached here then it means that user does no exist
    //creating an database entry for user
    const User = await user.create({
      Name,
      Email,
      Passward: hasedpassward,
      ContactNo,
      Role,
    });
    // sending an success message to client
    return res.status(200).json({
      success: true,
      message: "Sign in Successfull",
    });
  } catch (error) {
    // error massage  in case of any network issue
    console.log(error);
    return res.status(500).json({
      message: "User Cannnot Not be Registered Please Try Again Later",
      success: false,
    });
    return;
  }
};
