const UserQuestion = require("../models/UserQuestion");
const jwt = require("jsonwebtoken");
require("dotenv").config();  // Initialize dotenv to use environment variables

const GetNotification = async (req, res) => {
    try {
        const token = req.cookies.token;
        const decoded = jwt.verify(token, process.env.JWT_SECRET);
        const email = decoded.Email;  
        console.log(email);

        const answers = await UserQuestion.find({ Email: email });
        console.log(answers);

        const data = answers.map((ele) => {
            if (!ele.Answer) {  
                ele.Answer = "Please Wait for reply";
            }
            return {  
                Question: ele.Question,
                Answer: ele.Answer
            };
        });

        return res.status(200).json({
            success: true,
            message: "Data fetched successfully",
            data: data
        });
    } catch (error) {
        console.error(error);
        return res.status(401).json({
            success: false,
            message: "Error in fetching data",
        });
    }
}

module.exports = GetNotification;
