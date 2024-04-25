const User = require("../models/schema");

const ApproveDoctor = async (req, res) => {
  try {
    const { email } = req.body; // Destructure for easier access
    console.log(email);

    // Update the user's role to 'dietitian'
    const updatedUser = await User.findOneAndUpdate(
      { Email: email },
      { $set: { Role: "Dietiton" } },
      { new: true }
    );

    if (!updatedUser) {
      return res.status(404).json({
        success: false,
        message: "User not found",
      });
    }

    // Update the status of notifications for all admin users
    const updateAdmins = await User.updateMany(
      { Role: "admin" },
      { $set: { "notification.$[elem].status": "approved" } },
      {
        arrayFilters: [{ "elem.email": email }],
        multi: true,
      }
    );
    
    console.log(`Updated user: ${updatedUser}`);
    console.log(`Updated admins: ${updateAdmins}`);

    return res.status(200).json({
      message: "Doctor approved and notifications updated successfully",
      success: true,
    });
  } catch (error) {
    console.error("Error in approving doctor:", error);
    return res.status(500).json({
      success: false,
      message: "Error in approving doctor",
    });
  }
};

module.exports = ApproveDoctor;
