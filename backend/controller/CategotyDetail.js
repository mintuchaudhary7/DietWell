const User = require("../models/schema");
const categoryDetails = async (req, res) => {
  try {
    const category = req.params.catagory;
    // console.log(req.params)
    // console.log(category);
    var query = {};
    if (category == "All Users") {
      query = {};
    } else if (category == "Users") {
      console.log("abc");
      query = { Role: "user" };
    } else if (category == "Dietitian") {
      query = { Role: "Dietiton" };
    } else if (category == "Fit Users") {
      query = { BMR: { $gte: 1400, $lte: 1700 } };
    } else if (category == "Underweight Users") {
      query = { BMR: { $lt: 1400 } };
    } else if (category == "Overweight Users") {
      query = { BMR: { $gte: 1700 } };
    }

    console.log(query);
    const data = await User.find(query);
    // if (category==="All Users"){
    data.map((users) => {
      if (users.Role === "admin") {
        users.notification = undefined;
      }
    });
    // }
    return res.status(200).json({
      message: "Data fetched successfully",
      success: true,
      data: data,
    });
  } catch (error) {
    return res.status(401).json({
      success: false,
      message: "Error in fetchin data",
    });
  }
};
module.exports = categoryDetails;
