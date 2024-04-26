const User = require("../models/schema");
const FetchApplyDoctor = async (req, res) => {
  try {
    const data = req.params.data
    const Admin = await User.findOne({ Role: "admin" });
    console.log(Admin.notification);
    var main = [];
    var main2 = []
    const count = {
      solved:0,
      pending:0
    }
    Admin.notification.map((ele) => {
        // console.log(ele.notification)
        
      if (ele.status == data) {
        console.log("pushing")
        main.push(ele);
      }
    });
  //   Admin.notification.map((ele) => {
  //     // console.log(ele.notification)
  //   if (ele.status != data) {
  //     console.log("pushing")
  //     main.push(ele);
  //   }
  // });

    return res.status(200).json({
      message: "Data fetched successfully",
      success: true,
      data: main,
    });
  } catch (error) {
    return res.status(401).json({
      success: false,
      message: "Error in Submitting  data",
    });
  }
};
module.exports = FetchApplyDoctor;
