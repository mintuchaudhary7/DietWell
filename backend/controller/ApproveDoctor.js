const User = require("../models/schema");
require("dotenv").config()
const nodemailer = require("nodemailer");
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
    const  transporter = nodemailer.createTransport({
      //host which email service we are using
        host: process.env.MAIL_HOST,
        // auth for providing out email id and app passward
        auth: {
          user: process.env.MAIL_USER,
          pass: process.env.MAIL_PASS,
        },
    });
    const info = await transporter.sendMail({
      from: `sahil testing dietwell`,
      to: email,
      subject: `Approval for Dietiton on diewell`,
      html: `<h2>Your request is approved and now you can log in as Dietiton</h2>`,
  });
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
