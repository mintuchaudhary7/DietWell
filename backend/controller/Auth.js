const user = require('../models/schema');
exports.login = async (req,res)=>{
    try{
        const {Email,Passward} = req.body;
        if (!Email || !Passward) {
            return res.status(500).json({
              success: false,
              message: "please enter email or passeard",
            });
        }
        let User = await user.findOne({ Email });
        if (!User) {
            res.status(404).json({
              success: false,
              message: "user does not exist please signup",
            });
        }
        if(Passward === User.Passward){
            console.log("login successfull");
            return res.status(200).json({
              success: true,
              massage: "log in successfull",
            });

        }
        
        else {
            return res.status(400).json({
              success: false,
              message: "incorrect passward",
            });
          }
    }
    catch (error) {
        console.log(error);
        return res.status(500).json({
          success: false,
          message: error.message,
        });
      }
}
exports.signup = async (req, res) => {
  try {
    //fetching the data from request;
    const { Name, Email, Passward,ContactNo } = req.body;
    // checking in database that user is not already registered;
    const existingUser = await user.findOne({ Email });
    //if user exist then return error status;
    if (existingUser) {
      return res.status(500).json({
        success: false,
        massage: "user already exist",
      });
    }
    //secureing  passward by hashing;
    
    // if we reached here then it means that user does no exist
    //creating an database entry for user
    const User = await user.create({
      Name,
      Email,
      Passward,
      ContactNo
    });
    // sending an success message to client
    return res.status(200).json({
      success: true,
      massage: "sign in successfull",
    });
  } catch (error) {
    // error massage  in case of any network issue
    console.log(error);
    return res.status(500).json({
      message: "user cannnot be registered please try again later",
      success: false,
    });
  }
};