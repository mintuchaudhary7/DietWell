// const Contact = require('../models/contactSchema')
const userquestions = require("../models/UserQuestion")
const jwt = require("jsonwebtoken");
const FetchUserQuestions = async (req, res) => {
  try {
    const Status = req.params.status;
    console.log(Status);
    let query = {};
    if(Status === "Pending"){
        query = {Status :"pending"};
    }
    else if(Status === "Solved"){
        query = {Status :"solved"};
    }
    const data = await userquestions.find(query);
    console.log(data);
    return res.status(200).json({
        success:"true",
        message:"Data fetched Successfully",
        data:data
    })
  } catch (error) {
    return res.status(401).json({
      success: false,
      message: "Error in sending question",
    });
  }
};
module.exports = FetchUserQuestions;
