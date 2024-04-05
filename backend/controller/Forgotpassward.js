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
        //imorting package for generating random otp
        const otpGenerator = require('otp-generator')
        //varible in which otp is stored and some condition like our otp is only in numerical format not contain any alpabet
        const otp = otpGenerator.generate(6, { upperCaseAlphabets: false, lowerCaseAlphabets:false, specialChars: false });
        // console.log(otp);
        // transporter for send an email
        const  transporter = nodemailer.createTransport({
          //host which email service we are using
            host: process.env.MAIL_HOST,
            // auth for providing out email id and app passward
            auth: {
              user: process.env.MAIL_USER,
              pass: process.env.MAIL_PASS,
            },
        });
        // format of out mail
        const info = await transporter.sendMail({
            from: `sahil testing dietwell`,
            to: Email,
            subject: `OTP to change passward`,
            html: `<h2>Your otp to change passward is ${otp}</h2>`,
        });
        //   console.log("Info : ", info);
        //sending a success resonse with otp because we have to verify otp on frontend that the otp user entered is matched with the otp which is generated in backend
        return res.status(200).json({
            success: true,
            message: otp,
            showmsg:"Otp sent to registered email"
          });// success response
          return;
        

    }
    //error response
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