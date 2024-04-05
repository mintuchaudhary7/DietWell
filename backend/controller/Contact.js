const query = require('../models/contactSchema');

const Contact = async(req,res)=>{
    try{
//         const contactConnect = require("../config/ContactdbConnect")
// contactConnect();
        const { Email,Name,ContactNo,Query } = req.body;
        if (!Email) {
            //this block is responsible for checking that user entered any data or not
            return res.status(500).json({
              //here we are sending error response because user send any emptyb data
              success: false,
              message: "Please Enter Email",
            });
            return;
        }
        if (!Name) {
            //this block is responsible for checking that user entered any data or not
            return res.status(500).json({
              //here we are sending error response because user send any emptyb data
              success: false,
              message: "Please Enter Your name",
            });
            return;
        }
        if (!ContactNo) {
            //this block is responsible for checking that user entered any data or not
            return res.status(500).json({
              //here we are sending error response because user send any emptyb data
              success: false,
              message: "Please Enter Number",
            });
            return;
        }
        if (!Query) {
            //this block is responsible for checking that user entered any data or not
            return res.status(500).json({
              //here we are sending error response because user send any emptyb data
              success: false,
              message: "Please Enter Your query",
            });
            return;
        }
        // if we reached here then we are creating a database entry for query collection
        const question = await query.create({
            Name,
            Email,
            ContactNo,
            Query
        });
        return res.status(200).json({
            success: true,
            message: "Your response is submitted successfully we will contact you soon",
          });
    }
    catch (error) {
        // error massage  in case of any network issue
        console.log(error);
        return res.status(500).json({
          message: "Your query is not submitted due to server issue",
          success: false,
        });
        return
      }
    
}
module.exports = Contact;