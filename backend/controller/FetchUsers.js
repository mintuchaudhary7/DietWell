const user = require("../models/schema");
const fetchUsers = async (req, res) => {
  try {
    const AllUsers = await user.find({ Role: "user" });
    // AllUsers.Passward = "NULL";
    AllUsers.map((users) => {
    
      users.Passward = "NULL";
    });

    return res.status(200).json({
      success: true,
      messesge: "all user are fetched successfully",
      users: AllUsers,
    });
  } catch (error) {
    return res.status(400).json({
      success: false,
      message: "Error in fetching user",
    });
  }
};
module.exports = fetchUsers;
