const user = require("../models/schema");
require('dotenv');
const Changepassward = async(req,res)=>{
    try{
        const {Email,Passward} = req.body;
        
        if(!Email){
            return res.status(500).json({
                //here we are sending error response because user send any emptyb data
                success: false,
                message: "Please Enter Email",
              });
              return;
        }
        console.log("hii")
        let User = await user.findOne({Email});
        // console.log(User)
        if(!User){
            return res.status(500).json({
                //here we are sending error response because user send any emptyb data
                success: false,
                message: "User does not exist please signup",
              });
              return;
        }
        try {
            const id = User._id;

            console.log(Passward)
            const updatedUser = await user.findByIdAndUpdate({_id:id},{Passward:Passward}
            );
            console.log(updatedUser)
            res.status(200).json({
                success:true,
                message:"Your passward is updated successfully"
            });
          } catch (error) {
            res.status(400).json({ error: error.message });
          }
        

    }
    catch(error){
        console.log(error);
        return res.status(500).json({
          message: "Error in network",
          success: false,
        });
        return
    }

}
module.exports = Changepassward;