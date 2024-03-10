const user = require("../models/schema");
const nodemailer = require("nodemailer");
require('dotenv')
const Forgotpassward = async(req,res)=>{
    try{
        const {Email} = req.body;
        
        if(!Email){
            return res.status(500).json({
                //here we are sending error response because user send any emptyb data
                success: false,
                message: "Please Enter Email",
              });
              return;
        }
        let User = await user.findOne({Email});
        if(!User){
            return res.status(500).json({
                //here we are sending error response because user send any emptyb data
                success: false,
                message: "User does not exist please signup",
              });
              return;
        }
        const otpGenerator = require('otp-generator')

        const otp = otpGenerator.generate(6, { upperCaseAlphabets: false, lowerCaseAlphabets:false, specialChars: false });
        // console.log(otp);
        const  transporter = nodemailer.createTransport({
            host: process.env.MAIL_HOST,
            auth: {
              user: process.env.MAIL_USER,
              pass: process.env.MAIL_PASS,
            },
        });
        const info = await transporter.sendMail({
            from: `sahil testing dietwell`,
            to: Email,
            subject: `OTP to change passward`,
            html: `<h2>Your otp to change passward is ${otp}</h2>`,
        });
        //   console.log("Info : ", info);
        return res.status(200).json({
            success: true,
            message: otp,
          });
          return;
        

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
module.exports = Forgotpassward;