require("dotenv").config();
// const axios = require("axios");
const { OpenAI } = require("openai");
const schema = require("../models/HairandSkincareSchema");
const User = require("../models/schema");
const HairandSkincare = async (req, res) => {
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
    // const age = user.Age;
    const gender = user.Gender;
    // const weight = user.Weight;
    // const height = user.Height;
    // const bmr = user.Bmr;
    // const activity = user.Activity;
    // const dietpreference = user.Dietpreference;
    const allergy = user.Allergy;
    const disease = user.Disease;
    const hairtype = user.Hairtype;
    const hairtexture = user.Hairtexture;
    const damagecount = user.DamageCount;
    const skintype = user.SkinType;
    const age = user.Age

    if (!gender ||
      !hairtype ||
      !hairtexture ||
      !damagecount ||
      !disease ||
      !skintype ||
      !allergy ||
      !disease||
      !age
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
    const question = `i am a ${gender} my skin type is ${skintype},my hair type ${hairtype},my hairtexture is ${hairtexture} , my hair damage is${damagecount} prepare a skin and hair care products list according to given data  and send the data in json format`;
    const chatCompletion = await openai.chat.completions.create({
      model: "gpt-3.5-turbo",
      messages: [
        { role: "system", content: "You are a hair and skin care expert" },
        { role: "user", content: question },
      ],
      functions: [{ name: "get_diet_plan", parameters: schema }],
      function_call: { name: "get_diet_plan" },
      temperature: 0,
    });
    // const result = await chatCompletion.json()
    console.log(chatCompletion);
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
module.exports = HairandSkincare;
