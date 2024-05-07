require("dotenv").config();
// const axios = require("axios");
const { OpenAI } = require("openai");
const schema = require("../models/Stress");
const User = require("../models/schema");
const StressManagement = async (req, res) => {
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
    console.log(Email);
    const user = await User.findOne({ Email });
    console.log(Email);

    const age = user.Age;
    const Stressdesc = user.Stressdescription;
    const dietpreference = user.Dietpreference;
    const allergy = user.Allergy;
    const disease = user.Disease;
    console.log(Stressdesc);
    console.log(age);
    console.log(dietpreference);
    console.log(allergy);
    console.log(disease);

    console.log("abc");
    if (
      !age  ||
      !Stressdesc  ||
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
      // console.log("abcd")
    const openai = new OpenAI({
      apiKey: process.env.OPENAI_API_KEY, // This is also the default
    });
    // console.log('aba')
   
    const question = `my age is ${age} i have ${Stressdesc} please give some reference i have this disease ${disease}
    and this allergy  ${allergy} my dietprefernce is ${dietpreference} and send the data in json format`;
    const chatCompletion = await openai.chat.completions.create({
      model: "gpt-3.5-turbo",
      messages: [
        { role: "system", content: "You are stress expert doctor" },
        { role: "user", content: question },
      ],
      functions: [{ name: "get_diet_plan", parameters: schema }],
      function_call: { name: "get_diet_plan" },
      temperature: 0,
    });
    console.log("huu");
    // const result = await chatCompletion.choices[0].message.tool_calls.arguments
    // console.log(result)
    // console.log(chatCompletion.choices[0])
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
module.exports = StressManagement;
