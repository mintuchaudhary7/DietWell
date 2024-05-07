require("dotenv").config();
// const axios = require("axios");
const { OpenAI } = require("openai");
const schema = require("../models/WeightGainSchema");
const User = require("../models/schema");
const WeightGain = async (req, res) => {
  try {
    var decoded;
    const token = req.cookies.token;
    if (!token || token === undefined) {
      return res.status(404).json({
        success: false,
        message: "Not a verified user please login",
      });
    }
    const jwt = require("jsonwebtoken");
    decoded = jwt.verify(token, process.env.JWT_SECRET);
    const Email = decoded.Email;
    const user = await User.findOne({ Email });
    const age = user.Age;
    const gender = user.Gender;
    const weight = user.Weight;
    const height = user.Height;
    const bmr = user.BMR;
    const activity = user.Activity;
    const dietpreference = user.Dietpreference;
    const allergy = user.Allergy;
    const disease = user.Disease;

    if (
      !age ||
      !gender  ||
      !height ||
      !weight ||
      !bmr   ||
      !disease  ||
      !activity  ||
      !dietpreference ||
      !allergy  ||
      !disease 
    ) {
      console.log("Enter your Data and complete your profile");
      return res.status(400).json({
        success: false,
        message:
          "Enter your Data and complete your profile for accurate diet plan",
      });
    }
    // console.log('abc')
    const openai = new OpenAI({
      apiKey: process.env.OPENAI_API_KEY, // This is also the default
    });
    // console.log('aba')
    const question = `i am a ${gender} my bmr is ${bmr},my age is ${age} , my weight is ${weight} kg, my height is ${height} cm, and I have these allergies ${allergy} and these ${disease} diesese  , and my diet preference is ${dietpreference},my activity level is ${activity} prepare a 7 days monday to sunday diet-paln for me to gain weight and it should be specific for indian climate Aand it should also be budget friendly and aslo give me description of nutrients present and their count and send the data in json format`;
    const chatCompletion = await openai.chat.completions.create({
      model: "gpt-3.5-turbo",
      messages: [
        { role: "system", content: "You are a diet planner" },
        { role: "user", content: question },
      ],
      functions: [{ name: "get_diet_plan", parameters: schema }],
      function_call: { name: "get_diet_plan" },
      temperature: 0,
    });
    // const result = await chatCompletion.json()
    // console.log(chatCompletion.choices[0].message.tool_calls.arguments)
    return res.status(200).json({
      success: true,
      message: "Your diet plan is generated successfully",
      data: chatCompletion.choices[0].message,
    });
  } catch (error) {
    return res.status(400).json({
      success: false,
      message: error.message,
    });
  }
};
module.exports = WeightGain;
