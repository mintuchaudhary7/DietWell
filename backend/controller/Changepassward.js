const user = require("../models/schema");
require("dotenv");
const bcrypt = require("bcrypt");
const Changepassward = async (req, res) => {
  try {
    //fetching data from resquest
    const { Email, Passward } = req.body;

    if (!Email) {
      return res.status(500).json({
        //here we are sending error response because user send any emptyb data
        success: false,
        message: "Please Enter Email",
      });
      return;
    }
    console.log("hii");
    let User = await user.findOne({ Email });
    // console.log(User)
    if (!User) {
      return res.status(500).json({
        //here we are sending error response because user send any emptyb data
        success: false,
        message: "User does not exist please signup",
      });
      return;
    }
    let hasedpassward;
    try {
      //hashing script bycript is a hashing techqnique
      // if user change passward then new passward also be stored in hashed so anyone cannot access
      hasedpassward = await bcrypt.hash(Passward, 10);
    } catch (error) {
      return res.status(500).json({
        success: false,
        massage: "error occured in hashing passward",
      });
    }
    try {
      const id = User._id;

      console.log(Passward);
      //here we are finding the user and updating his/her passward
      const updatedUser = await user.findByIdAndUpdate(
        { _id: id },
        { Passward: hasedpassward }
      );
      console.log(updatedUser);
      res.status(200).json({
        success: true,
        message: "Your passward is updated successfully",
      });
    } catch (error) {
      res.status(400).json({ error: error.message });
    }
  } catch (error) {
    console.log(error);
    return res.status(500).json({
      message: "Error in network",
      success: false,
    });
    return;
  }
};
module.exports = Changepassward;
