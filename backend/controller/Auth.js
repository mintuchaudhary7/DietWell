const user = require('../models/schema');// imorting our schema of database which we use to create user
exports.login = async (req,res)=>{
    try{// try block is compulsry to use for catching the error
        const {Email,Passward} = req.body;// fetching data from user or frontend using request body
        if (!Email || !Passward) {//this block is responsible for checking that user entered any data or not
            return res.status(500).json({//here we are sending error response because user send any emptyb data
              success: false,
              message: "please enter email or passeard",
            });
        }
        let User = await user.findOne({ Email }); // searching in database that does user exist in our data base or registerd to our platform
        if (!User) {// if user not exist the we send a error response from bellow code
            res.status(404).json({
              success: false,
              message: "user does not exist please signup",
            });
        }
        if(Passward === User.Passward){// this block executed is user exist we checked above user exist or not and here we match passward --> user entered passward from frontend   and   User.passward ->>> passward stored in backend or database
            console.log("login successfull");//passward matched sending a successfull response
            return res.status(200).json({
              success: true,
              massage: "log in successfull",
            });

        }
        
        else {// passward not matched sending an error response
            return res.status(400).json({
              success: false,
              message: "incorrect passward",
            });
          }
    }
    catch (error) {//error occured
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
