const Logout = async(re1,res)=>{
    try{
        res.clearCookie('token',{path:'/'})
        console.log("hiii")
        res.status(200).json({
            success:true,
            message:"User logout success"
        }) ;
        // return
        
    }
    catch (error) {
        console.log(error);
        return res.status(404).json({
          success: false,
          message: "invalid",
        });
      }

}
module.exports = Logout