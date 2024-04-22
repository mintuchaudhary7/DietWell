const User = require("../models/schema");

const SearchUserEmail = async (req, res) => {
  
  // console.log(req.body);

  // Extract email from request body
  const { email } = req.body;
  if (!email) {
    return res.status(400).json({
      message: "Email is required",
      success: false,
    });
  }
console.log(email)
  try {
    // Using the email to find the user
    const foundUser = await User.findOne({ Email:email });

    if (!foundUser || foundUser===undefined) {
      return res.status(404).json({
        message: "User not found",
        success: false,
      });
    }
    if(foundUser.Role !="Dietiton"){
      return res.status(404).json({
        message: "Requested user is not Dietition",
        success: false,
      });
    }
    // User found, sending back the user data
    return res.status(200).json({
      message: "User found successfully",
      success: true,
      data: foundUser,
    });

  } catch (error) {
    console.error('Error in finding user:', error);  
    return res.status(500).json({
      message: "Error in finding user due to server error",
      success: false,
    });
  }
};

module.exports = SearchUserEmail;
