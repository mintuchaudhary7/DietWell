// const Contact = require('../models/contactSchema')
// const UserQuestion = require("../models/UserQuestion")
const userquestions = require("../models/UserQuestion");
const jwt = require("jsonwebtoken");
const DietitionReply = async (req, res) => {
  try {
    const { reply, id } = req.body;
    console.log(reply + id)
    const data = await userquestions.findById(id);
    data.Answer=reply
    data.Status = "solved"
    data.save()
    return res.status(200).json({
        success:true,
        message:"Reply Sent"
    })
    console.log(data);
  } catch (error) {
    return res.status(401).json({
      success: false,
      message: "Error in sending Reply",
    });
  }
};
module.exports = DietitionReply;
