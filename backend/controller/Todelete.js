const User = require('../models/schema')
const categoryDetails = async (req,res)=>{
    try {

        const todelete = req.params.todelete;
        console.log(todelete)
        const item = await User.findByIdAndDelete(todelete);
        if (!item) {
            return res.status(404).json({
              success: false,
              message: "User not found",
            });
          }
      
          return res.status(200).json({
            message: "User deleted successfully",
            success: true,
          });
      } catch (error) {
        return res.status(401).json({
            success:false,
            message:"Error in deleting user",
        });
      }
}
module.exports = categoryDetails