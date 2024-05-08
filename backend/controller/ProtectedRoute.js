require("dotenv").config();
// const axios = require("axios");
const WeightGain = async (req, res) => {
  try {
    var decoded;
    // const token = req.cookies.token;
    const token = req.headers.authorization.split(" ")[1];
    console.log("ro" + token);
    if (!token || token === undefined || token === "null") {
      return res.status(400).json({
        success: false,
        message: "Not a verified user please login",
      });
    }
    console.log("reached");
    return res.status(200).json({
      success: true,
      message: "Success",
      //   data: chatCompletion.choices[0].message,
    });
  } catch (error) {
    return res.status(400).json({
      success: false,
      message: error.message,
    });
  }
};
module.exports = WeightGain;
