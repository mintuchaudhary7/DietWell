// const Contact = require('../models/contactSchema')
const userquestions = require("../models/UserQuestion")
const jwt = require("jsonwebtoken")
const UserDietitionQuestion = async (req,res)=>{
    try {
        const token = req.cookies.token;
        if (!token || token===undefined) {
            return res.status(400).json({
              success: false,
              message: "No user credential found",
            });
        }

        try {
            const jwt = require("jsonwebtoken");
            const decode = jwt.verify(token, process.env.JWT_SECRET);
            console.log(decode)
            if (decode) {
              const Email = decode.Email;
              const Name = decode.Name;
              const Question = req.body.question
              console.log(Question)
              const question = await userquestions.create({
                Name,
                Email,
                Status:"pending",
                Question

              })
              return res.status(200).json({
                success:true,
                message:"Your Question is submitted successfully",
            })
            }
      
            // Call next() to proceed to the next middleware/route handler
            
          }
          catch(error){
            return res.status(401).json({
                success:false,
                message:"Error in sending question",
            });
          }
        
      } catch (error) {
        return res.status(401).json({
            success:false,
            message:"Error in sending question",
        });
      }
}
module.exports = UserDietitionQuestion