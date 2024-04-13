// require("dotenv").config();
// const axios = require("axios");
// const { OpenAI } = require("openai");

// const Haircare = async (req, res) => {
//   try {
//     // console.log("sahil")
//     const openai = new OpenAI({
//       apiKey: process.env.OPENAI_API_KEY, // This is also the default
//     });
//     const chatCompletion = await openai.chat.completions.create({
//       model: "gpt-3.5-turbo",
//       messages: [
//         {
//           role: "user",
//           content:
//             "Give be a diet plan for a non-veg person and nutirent level of diet and for a user  also send response in json format",
//         },
//       ],
//       // RateLimitError:"none"
//     });
//     // const result = await chatCompletion.choices[0].message.content.json()
//     console.log(chatCompletion);
//     //   res.json({ response: completion.data.choices[0].text })
//     res.send(`<h1> ${chatCompletion.choices[0].message.content} </h1>`);
//     // res.status(200).json({
//     //   success: true,
//     //   data: chatCompletion.choices[0].message.content,
//     // });
//   } catch (error) {
//     res.status(400).json({
//       success: false,
//       message: error.message,
//     });
//   }
// };
// module.exports = Haircare;
